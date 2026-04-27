---
name: reuniao
description: >
  Captura, transcreve e processa reuniões — Fathom, Fireflies ou manual.
  Classifica tipo (daily/semanal/interna/venda/onboarding/cliente), extrai resumo +
  decisões + action items, sugere cortes pra marketing, propaga para ClickUp/pendências.
  Cache via manifest evita refetch.
trigger: /reuniao
triggers_naturais:
  - reuniao
  - registrar reuniao
  - salva reuniao
  - processa fathom
  - URL fathom.video
  - URL fireflies
---

# /reuniao — Captura e processamento de reuniões

Skill de ingestão de reuniões para o segundo cérebro. **Performance-first**: sempre verifica manifest antes de chamar MCP caro.

---

## Triggers

- `/reuniao <URL>` — processa URL Fathom/Fireflies
- `/reuniao <call_id>` — processa por ID Fathom
- `/reuniao backfill` — modo batch (lista últimas N + permite seleção)
- `/reuniao status` — estatísticas do manifest
- `/reuniao limpar` — remove órfãos do manifest
- `/reuniao manual` — captura sem fonte externa (anotações ao vivo)

---

## Princípios de performance

1. **Manifest first** — sempre consultar `areas/reunioes/_processadas.json` antes de qualquer MCP call
2. **Lazy fetch em camadas** — `list_meetings` (barato) → `summary` (médio) → `transcript` (caro), com confirmação a cada degrau
3. **Confirmação explícita** antes de operações destrutivas/caras (refetch, criar tasks ClickUp, deletar)
4. **Hash de detecção** — guardar hash do título+data pra invalidar se Fathom renomear

---

## Fluxo principal

### Fase 1 — Resolução da fonte

Detectar tipo de input:

```bash
INPUT="$1"

# Padrões reconhecidos
case "$INPUT" in
  *"fathom.video/calls/"*)
    FONTE="fathom"
    ID=$(echo "$INPUT" | grep -oE 'calls/[0-9]+' | grep -oE '[0-9]+')
    URL="$INPUT"
    ;;
  *"fathom.video/share/"*)
    FONTE="fathom"
    URL="$INPUT"
    # ID resolvido via get_recording_by_url depois
    ;;
  *"fireflies"*|*"app.fireflies.ai"*)
    FONTE="fireflies"
    URL="$INPUT"
    ;;
  [0-9]*)
    # Número solto — tratar como Fathom call_id primeiro
    FONTE="fathom"
    ID="$INPUT"
    ;;
  "backfill"|"status"|"limpar"|"manual")
    # Comandos especiais — pular pra fluxo correspondente
    ;;
  *)
    # Sem fonte — perguntar
    ;;
esac
```

### Fase 2 — Manifest check (CRÍTICO)

Ler `areas/reunioes/_processadas.json`:

```python
import json
manifest = json.load(open("areas/reunioes/_processadas.json"))
chave = f"{FONTE}:{ID}"
if chave in manifest["reunioes"]:
    entry = manifest["reunioes"][chave]
    # Já processada
    print(f"⚠️ Reunião já processada em {entry['processado_em']}")
    print(f"📁 {entry['arquivo']}")
    print(f"📌 {entry['titulo']}")
    print("\nO que fazer?")
    print("  1. Abrir arquivo existente")
    print("  2. Re-processar (sobrescreve, gasta ~15k tokens)")
    print("  3. Cancelar")
```

**Aguardar resposta do usuário antes de prosseguir.**

### Fase 3 — Fetch em camadas

Se nova reunião OU usuário escolheu re-processar:

**3a — Resolver ID se vier de URL share:**
```
mcp__claude_ai_Fathom__get_recording_by_url (apenas se URL share, não direct)
```

**3b — Summary primeiro (barato, ~500 tokens):**
```
mcp__claude_ai_Fathom__get_meeting_summary
```

Mostrar ao usuário: título, data, duração, participantes detectados, resumo curto.
**Perguntar:** "Buscar transcrição completa? (~10-30k tokens)"

**3c — Transcript (caro, sob aprovação):**
```
mcp__claude_ai_Fathom__get_meeting_transcript
```

Para Fireflies: `fireflies_get_transcript` direto (não tem API granular igual Fathom).

### Fase 4 — Classificação

Analisar metadata + summary pra decidir:

| Sinais | Tipo provável |
|--------|---------------|
| Só Lucas/Victor/Hugo + curta (<20min) | daily |
| Só time + 30-60min + segunda-feira | semanal |
| Só time + tópico estratégico | interna |
| Tem nome cliente + primeira ocorrência | venda (discovery) |
| Tem cliente + título "kickoff/onboarding" | onboarding |
| Tem cliente + recorrente (já tem outras) | cliente |

Se ambíguo, **perguntar**:
```
Detectei: {participantes}, {duracao}min, {data}
Tipo provável: {sugestão}
Confirmar? Ou escolher: 1.daily 2.semanal 3.interna 4.venda 5.onboarding 6.cliente
```

Se for cliente, perguntar slug (ou inferir do título).

### Fase 5 — Geração do arquivo

1. Carregar template correspondente: `skills/reuniao/templates/{subtipo}.md`
2. Sintetizar conteúdo (resumo, decisões, action items, etc.) a partir da transcrição
3. Substituir placeholders `{{VAR}}`
4. Salvar em path correto:

```
dailies/{DATA}-{slug}.md
semanais/{DATA}-{slug}.md
internas/{DATA}-{slug}.md
vendas/{cliente}/{DATA}-{estagio}.md
onboarding/{cliente}/{DATA}-{slug}.md
clientes/{cliente}/{DATA}-{slug}.md
```

**Sempre incluir transcrição completa no final** — é a fonte de verdade.

### Fase 6 — Cortes de conteúdo

Identificar 3-8 momentos potencialmente shareáveis (insights, frases marcantes, demos).

Salvar em `areas/marketing/cortes-conteudo/{DATA}-{slug}.md`:

```markdown
---
tipo: cortes
data: {DATA}
origem: [[areas/reunioes/{caminho-da-reuniao}]]
fonte_url: {fathom_url}
status: [a-revisar | autorizado | publicado]
tags: [cortes, {tags-da-reuniao}]
---

# Cortes — {titulo}

> Origem: {link reunião}

## Corte 1 — [Tema]

- **Timestamp:** [HH:MM:SS](url-com-timestamp)
- **Duração:** ~Xs
- **Hook:** "{frase}"
- **Formato sugerido:** Reel | Carrossel | Story | Slide
- **Status:** a-revisar
- **Autorização cliente:** {sim | não-aplicavel | pendente}
```

Backlink Obsidian é obrigatório (origem).

### Fase 7 — Propagação (com confirmação)

**7a — ClickUp tasks:**

Mostrar preview dos action items extraídos:
```
Detectei 5 action items. Criar como tasks no ClickUp?
  [Lucas] Confirmar reunião 13h45 — prazo 28/04 — workspace 90171169593, lista Comercial
  [Hugo] Investigar API Olist — prazo 30/04 — lista SaaS
  ...
Confirmar? (s/n/editar)
```

Se sim → `mcp__claude_ai_ClickUp__*` ou skip.

**7b — Pendências críticas:**

Se reunião gerou bloqueio bloqueante (alguém esperando algo) → adicionar em `memory/context/pendencias.md` na seção 🔴 ou 🟡.

**7c — Decisões estratégicas:**

Se a reunião tomou decisões com impacto em pricing/produto/contrato → adicionar em `memory/context/decisoes/{YYYY-MM}.md`.

**7d — People update:**

Se apareceu pessoa nova (cliente, sócio, contato) → atualizar `memory/context/people.md`.

### Fase 8 — Atualizar manifest

```python
manifest["reunioes"][f"{FONTE}:{ID}"] = {
  "arquivo": "areas/reunioes/{path-relativo}",
  "url": URL,
  "titulo": TITULO,
  "data": DATA,
  "duracao_min": DURACAO,
  "participantes": [...],
  "subtipo": SUBTIPO,
  "cliente": CLIENTE_OR_NULL,
  "processado_em": HOJE,
  "hash": sha256(titulo + data + participantes_sorted),
  "tokens_aprox": ESTIMATIVA,
  "cortes_arquivo": "areas/marketing/cortes-conteudo/..." or null,
  "tasks_criadas": [task_ids] or []
}
json.dump(manifest, ..., indent=2)
```

### Fase 9 — Commit git

```bash
git add areas/reunioes/ areas/marketing/cortes-conteudo/ memory/context/
git commit -m "reuniao: {subtipo} {cliente_or_data} — {hook curto}"
```

**Não fazer push automático** — deixa pro `/sync` ou `/salve`.

---

## Comandos especiais

### `/reuniao backfill`

Processa lote de reuniões antigas:

1. `list_meetings` (Fathom) — pega últimas 30
2. Cruzar com manifest → identificar não-processadas
3. Apresentar tabela:
```
Reuniões disponíveis (3 já processadas, 7 novas):
[ ] 1. 25/04 · Bravo Discovery (82min) · ✓ processada
[ ] 2. 24/04 · Maqlam Checklist (82min) · ✓ processada
[x] 3. 23/04 · Daily time (15min) · NOVA
[x] 4. 22/04 · Enertelles call (45min) · NOVA
...
```
4. Usuário marca quais quer processar
5. Loop pelas marcadas

**NUNCA processar tudo automaticamente** — sempre seleção manual.

### `/reuniao status`

```
=== Manifest Reuniões ===
Total processadas: 23
  Por fonte: Fathom 18 · Fireflies 4 · Manual 1
  Por tipo: daily 8 · semanal 3 · venda 7 · cliente 4 · interna 1
  Última processada: 27/04 — Maqlam Checklist Review
  Tokens estimados gastos: ~287k
  Cache hits (refetches evitados): 12
```

### `/reuniao limpar`

Detectar entradas órfãs (manifest tem entry mas arquivo não existe). Remover do manifest.
Pedir confirmação antes.

### `/reuniao manual`

Modo sem fonte externa — captura ao vivo:
```
Tipo? (daily/semanal/interna/venda/onboarding/cliente)
Cliente? (se aplicável)
Participantes?
Duração estimada?
Cole/digite suas anotações:
```

Salva em manifest com `fonte: manual` e ID gerado (`manual:YYYY-MM-DD-slug`).

---

## Tratamento de erros

- **MCP Fathom falha** → tentar uma vez, se falhar pedir verificação de auth
- **Transcrição muito grande** (>50k tokens) → avisar usuário, sugerir processar só summary primeiro
- **Reunião sem participantes claros** → perguntar manualmente
- **URL inválida** → mostrar formatos aceitos
- **Manifest corrompido** → backup `_processadas.json.bak` e perguntar antes de recriar

---

## Integração com outras skills

| Skill | Como conecta |
|-------|--------------|
| `/cerebro` | Reuniões recentes podem aparecer no briefing (últimos 7 dias) |
| `/salve` | Lê reuniões da sessão pra incluir no log do dia |
| `/buscar-memoria` | Busca semântica deve indexar `areas/reunioes/` |
| `/rotina` | Pode listar reuniões agendadas vs processadas do dia |
| `/carrossel-eloscope` | Consome cortes de `marketing/cortes-conteudo/` |

---

## Convenções

- **Slug:** kebab-case, máx 4 palavras, sem acento (`bravo-discovery`, `maqlam-checklist`)
- **Cliente slug:** mesmo da pasta em `areas/vendas/clientes/`
- **Tags Obsidian:** sempre `reuniao`, sempre `cliente/{slug}` quando aplicável, sempre `tipo/{subtipo}`
- **Wikilinks:** usar `[[caminho/sem-extensao]]` em vez de path absoluto
- **Transcrição completa:** sempre no final, nunca cortar — é a fonte de verdade

---

## Output esperado da skill (resumo final ao usuário)

```
✅ Reunião processada

📁 areas/reunioes/clientes/maqlam/2026-04-24-checklist-review.md
🎯 Tipo: cliente · Maqlam · 82min
📌 Decisões: 3 (cashback regras, plano teste, multi-persona IA)
✓ Action items: 14 → criados no ClickUp
✂️ Cortes: 8 → areas/marketing/cortes-conteudo/2026-04-24-maqlam.md
📋 Pendências adicionadas: 2
💡 Decisões propagadas para memory/context/decisoes/2026-04.md

Tokens consumidos: ~12.4k
Manifest atualizado.
```

---

*Versão 1.0 · Criada 27/04/2026*
