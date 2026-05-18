---
name: vendas-sync
description: >
  Sincroniza sinais comerciais do cérebro com o sistema operacional Eloscope —
  cria/atualiza deal no elosystem-v2 (mod_crm_deals via Supabase), cria/atualiza
  tarefa na lista Comercial → Pipeline do ClickUp, e sugere próximos passos
  usando playbook SPIN + tom de voz Eloscope. Trigger híbrido: detecta menção
  de lead/deal/proposta/follow-up em sessões, pendências ou conversa e
  pergunta antes de agir. Skill Eloscope-only — depende de IDs do nosso
  Supabase + ClickUp + brain.
  Triggers: "/vendas-sync", "sync vendas", "atualiza crm", "novo lead",
  "fechei deal", "mandar proposta", "follow-up comercial".
---

# /vendas-sync

Skill comercial end-to-end. Você fala "tive call com cliente X / fechei deal Y / preciso mandar proposta pra Z" → ela atualiza o CRM real (elosystem-v2), cria a tarefa no ClickUp comercial, e devolve próximas abordagens calibradas com o playbook Eloscope.

**Pré-requisito:** MCP `supabase-eloscope` ativo + MCP `claude_ai_ClickUp` autenticado + MCP `elobrain` rodando (pra consultar playbook).

---

## Por que existe

Hoje quando algo comercial acontece, o estado vive em 3 lugares desconectados:

1. **Cérebro** — pendência ou linha numa sessão ("falar com Bravo Agency essa semana")
2. **ClickUp** — task na lista Comercial → Pipeline (`901713180050`)
3. **elosystem-v2** — deal em `mod_crm_deals` (banco real, usado pelo sistema da Eloscope)

Resultado: a pendência fica no brain, esquece de criar a task, esquece de atualizar o deal, e quando alguém olha o pipeline no elosystem-v2, está desatualizado. Daí decisões erradas — "achei que esse cara estava em proposta, mas era discovery".

A skill resolve isso fazendo **um único update propagar pros 3 lugares**, e ainda devolve a próxima abordagem certa (SPIN-based, tom Eloscope).

---

## Quando rodar

- Você acabou de ter uma call de discovery / proposta / fechamento
- Você captou um lead novo (indicação, evento, inbound LP)
- Você precisa fazer follow-up e quer registrar próximo passo
- Você mudou um deal de stage (Lead → Qualificando → Proposta → Comprou/Perdido)
- Você terminou uma reunião comercial via `/reuniao` e quer propagar pra CRM
- A skill detectou sinal de vendas e perguntou se você quer rodar (trigger híbrido)

Não rodar:
- Quando é só conversa interna sobre vendas (estratégia, posicionamento) — usar `/elo-vendas` Director
- Quando o lead nem foi qualificado ainda (sem BANT mínimo) — registrar como pendência crua
- Quando o cliente é não-comercial (suporte, expansão) — fluxo diferente

---

## Contract

**Input:**
- **Modo manual:** `/vendas-sync` + descrição livre ("call com Bravo, valor R$3k, próximo passo proposta")
- **Modo detectado:** texto da conversa atual contendo sinais comerciais (palavras-chave em "Detecção")

**Output:**
- Confirmação com 3 ações executadas (CRM ✓ / ClickUp ✓ / Brain ✓)
- Bloco de **próximas abordagens** sugeridas com base no estágio do funil
- IDs de rastreabilidade (deal UUID, task ClickUp ID, slug brain)

**Side effects:**
- INSERT/UPDATE em `mod_crm_deals` no project `jaygqiooeolzachevvfa` (Supabase Elosystem)
- INSERT/UPDATE de task em `list_id=901713180050` no ClickUp (Pipeline Comercial)
- UPDATE em `memory/context/pendencias.md` (se gerou pendência)
- UPDATE em `memory/context/decisoes/YYYY-MM.md` (se foi decisão de fechar/perder)

**Guarantees:**
- **Confirmação obrigatória antes de qualquer escrita** — usuário aprova o resumo do diff
- **Idempotente** — re-rodar com mesmo input não duplica (busca por título + contact_id antes de criar)
- **Schema-aware** — usa nomes reais das colunas (PT-BR: `titulo`, `valor`, `responsavel_id` etc.) e nunca os nomes do doc inglês do mod-crm
- **Org-locked** — `org_id` sempre `d154cae5-ef34-4916-8560-c59bc434699f` (Elosystem Default)
- **Falha sem efeito parcial** — se ClickUp falhar, CRM rollback (executa em transação lógica, valida antes)

---

## Tools Used

- **MCP Supabase:** `mcp__supabase-eloscope__execute_sql`, `mcp__supabase-eloscope__list_tables` (project_id `jaygqiooeolzachevvfa`)
- **MCP ClickUp:** `mcp__claude_ai_ClickUp__clickup_create_task`, `mcp__claude_ai_ClickUp__clickup_update_task`, `mcp__claude_ai_ClickUp__clickup_filter_tasks`, `mcp__claude_ai_ClickUp__clickup_resolve_assignees`
- **MCP elobrain:** `mcp__elobrain__query` (playbook, tom de voz, contexto cliente)
- **Files:**
  - Read: `memory/context/pendencias.md`, `memory/context/people.md`
  - Write: `memory/context/pendencias.md`, `memory/context/decisoes/YYYY-MM.md`, `memory/sessions/YYYY-MM-DD.md`

---

## Constantes Eloscope (hardcoded)

```yaml
supabase:
  project_id: "jaygqiooeolzachevvfa"
  project_name: "Elosystem"
  org_id: "d154cae5-ef34-4916-8560-c59bc434699f"
  org_slug: "default"
  org_name: "Elosystem Default"

clickup:
  workspace_id: "90171169593"
  space_id: "90175370554"
  folder_id: "90178371117"        # Comercial
  list_id: "901713180050"         # Pipeline
  list_name: "Pipeline"

brain_refs:
  playbook_principal: "empresa/projetos/sales-os/02-comercial/playbook"
  guia_lucas: "empresa/projetos/sales-os/02-comercial/guia-comercial-lucas"
  spin_playbook: "areas/vendas/metodologia/spin-playbook-v0.2"
  scripts_call: "empresa/projetos/sales-os/04-apresentacao/slides-call-vendas"
  playbook_v04: "empresa/projetos/sales-os/02-comercial/playbook-spin/04-playbook-spin-draft"

tom_voz:
  descricao: "Lucas/Sooray — direto, sem hype, frase no ponto, 'a gente', resultado em vez de mecanismo"
  evitar: ["maximizar", "potencializar", "alavancar", "robusto", "solução completa"]
  preferir: ["a gente faz", "resolve", "fica operando", "X clientes já testaram"]
```

---

## Schema real `mod_crm_deals` (PT-BR — banco real diverge do doc do GitHub)

| Coluna real | Tipo | NOT NULL | Default | Observação |
|---|---|---|---|---|
| `id` | uuid | sim | `gen_random_uuid()` | PK |
| `org_id` | uuid | sim | — | sempre `d154cae5-...` |
| `pipeline_id` | uuid | sim | — | FK `mod_crm_pipelines` |
| `stage_id` | uuid | sim | — | FK `mod_crm_stages` |
| `contact_id` | uuid | não | — | sem FK, aponta `core_module_assets` |
| `titulo` | text | sim | — | **não é `title`** |
| `valor` | numeric | sim | `0` | **não é `value`** |
| `moeda` | text | sim | `'BRL'` | doc não menciona |
| `prioridade` | text | sim | `'media'` | `baixa\|media\|alta` |
| `probabilidade` | integer | sim | `0` | 0–100 |
| `data_previsao_fechamento` | date | não | — | **não é `expected_close_date`** |
| `data_fechamento` | date | não | — | preenchido em WON/LOST |
| `motivo_perda` | text | não | — | só em LOST |
| `responsavel_id` | uuid | não | — | **não é `owner_id`** |
| `observacoes` | text | não | — | doc não menciona |
| `tags` | text[] | não | — | array |
| `custom_data` | jsonb | sim | `'{}'` | Story 12.1 |
| `archived_at` | timestamptz | não | — | soft delete |
| `score` | integer | sim | `50` | CHECK 0..100 |
| `current_stage_entered_at` | timestamptz | sim | `now()` | auto via trigger |
| `created_at`, `updated_at` | timestamptz | sim | `now()` | |

**Não existem no banco real (apesar do doc dizer):** `status` (enum), `metadata`, `name`, `value`, `title`, `owner_id`, `description`, `expected_close_date`.

**Stages reais (Elosystem Default):** consultar via `SELECT id, nome, tipo, posicao FROM mod_crm_stages WHERE org_id='d154cae5-...' ORDER BY pipeline_id, posicao`. Nomes esperados (pipeline padrão): Lead → Qualificando → Proposta → Comprou / Perdido.

---

## Passo 1 — Detecção (trigger híbrido)

A skill é invocada de 2 formas:

### 1.a Modo explícito
Usuário digita `/vendas-sync` ou frase do bloco de triggers. Vai direto pro Passo 2.

### 1.b Modo detectado (background)
Durante conversa normal, se aparecer no input do usuário palavra-chave dos buckets abaixo, **NÃO executar** — apenas perguntar:

```
🔔 Detectei sinal comercial: "<trecho>"
Quer rodar /vendas-sync pra propagar isso pro CRM + ClickUp + brain? [s/n]
```

Se `n` → desistir silenciosamente. Se `s` → seguir Passo 2.

**Palavras-chave de detecção** (case-insensitive):

| Bucket | Termos |
|---|---|
| Lead novo | "lead novo", "indicação", "contato chegou", "fui apresentado", "pediu reunião" |
| Discovery | "tive call", "fiz discovery", "reunião de diagnóstico", "primeira call" |
| Proposta | "mandar proposta", "preparar orçamento", "mandar pacote", "starter/growth/scale" |
| Follow-up | "follow-up", "ligar de volta", "cobrar resposta", "tá frio", "sumiu" |
| Fechamento | "fechei", "assinou", "comprou", "topou", "vai entrar" |
| Perda | "perdi", "não vai", "desistiu", "esfriou de vez", "perdido" |

**Anti-falso-positivo:** se o termo aparece em contexto não-comercial (ex: "fechei o PR", "perdi o backup"), ignorar. Heurística: tem que ter nome de empresa ou pessoa próximo (até 2 frases de distância).

---

## Passo 2 — Coleta estruturada

Perguntar o que ainda não está claro. **Uma pergunta por vez**, exceto quando óbvio do contexto.

### Campos obrigatórios

| Campo | Pergunta | Default se silêncio |
|---|---|---|
| Empresa/lead | "Qual o nome da empresa ou pessoa?" | — (obrigatório) |
| Contato | "Quem é a pessoa de contato? (nome + cargo)" | — (obrigatório) |
| Estágio | "Em que estágio tá: Lead / Qualificando / Proposta / Comprou / Perdido?" | "Lead" |
| Valor estimado | "Valor estimado do deal (ticket mensal × 12)?" | `0` |
| Próximo passo | "Qual é o próximo passo? (data + ação)" | — (obrigatório) |
| Responsável | "Quem está responsável pelo deal? (default: Lucas)" | "Lucas" |

### Campos opcionais (perguntar se relevante)

- Probabilidade de fechar (0–100%)
- Data prevista de fechamento
- Tags (origem: `lp` / `indicacao` / `evento` / `outbound`)
- Observações / motivo da perda (se Perdido)

### Lookup automático (CRM + ClickUp — duplo)

Antes de perguntar tudo, rodar **dois lookups em paralelo** pra ver o que já existe:

**Lookup CRM:**
```sql
SELECT
  id, titulo, stage_id, valor, responsavel_id,
  custom_data->>'clickup_task_id' AS clickup_id,
  custom_data->>'next_step' AS proximo_passo,
  custom_data->>'next_step_date' AS proximo_passo_data
FROM mod_crm_deals
WHERE org_id = 'd154cae5-ef34-4916-8560-c59bc434699f'
  AND archived_at IS NULL
  AND titulo ILIKE '%' || $empresa || '%'
LIMIT 5;
```

**Lookup ClickUp** (tasks abertas no funil Comercial pra esse cliente):
```javascript
mcp__claude_ai_ClickUp__clickup_filter_tasks({
  list_id: "901713180050",
  search: $empresa,
  include_closed: false,
  limit: 10
});
```

**Decisão baseada nos 2 resultados:**

| CRM | ClickUp | Estado | Ação |
|---|---|---|---|
| 0 | 0 | Cliente novo | CREATE deal + CREATE task vinculados |
| 1 | 0 | Deal existe mas task perdida | UPDATE deal + CREATE task com tag `crm:<deal_id>` |
| 0 | 1+ | Tasks soltas no ClickUp sem deal | ⚠️ alertar usuário, perguntar se quer criar deal e vincular |
| 1 | 1+ | Tudo certo, talvez | UPDATE deal + UPDATE task; oferecer mesclar tasks redundantes |
| 2+ | * | Múltiplos deals | Mostrar lista e pedir qual |

> **Mecanismo de vinculação** é o coração da skill. Hoje deal vive em 2 sistemas (mod_crm_deals + ClickUp); o link explícito evita órfãos. Quando o módulo CRM no elosystem-v2 ficar self-contained (roadmap), o ClickUp some deste fluxo.

---

## Passo 3 — Resumo + confirmação

Antes de escrever em qualquer lugar:

```
📋 Resumo do que vou fazer:

CRM (mod_crm_deals @ elosystem-v2):
  Ação:    [CREATE | UPDATE deal <uuid>]
  Título:  "<empresa> — <contato>"
  Pipeline: <nome> (uuid)
  Stage:   <nome> (uuid)
  Valor:   R$ <valor>
  Resp:    <nome do responsável>
  Score:   <50 default, ou calculado>

ClickUp (Comercial → Pipeline):
  Ação:    [CREATE task | UPDATE task <id>]
  Nome:    "<empresa> — <próximo passo>"
  Status:  <mapeamento do stage>
  Due:     <data próximo passo>
  Assignee: <lookup via people.md>

Brain:
  Pendência em memory/context/pendencias.md (categoria 🟡 importante)
  Sessão atualizada em memory/sessions/<hoje>.md

Confirmar? [s/edit/n]
```

`edit` → volta pro Passo 2 e deixa editar campo específico.
`n` → aborta tudo, nenhuma escrita.
`s` → executa Passo 4.

---

## Passo 4 — Execução das 3 ações (paralelas quando possível)

### 4.a — Atualizar CRM (mod_crm_deals)

**CREATE:**
```sql
-- Resolver pipeline_id e stage_id antes
SELECT id INTO @pipeline_id FROM mod_crm_pipelines
  WHERE org_id='d154cae5-ef34-4916-8560-c59bc434699f' AND ativo=true LIMIT 1;
SELECT id INTO @stage_id FROM mod_crm_stages
  WHERE org_id='d154cae5-ef34-4916-8560-c59bc434699f'
    AND pipeline_id=@pipeline_id
    AND nome ILIKE $stage_nome
  LIMIT 1;

INSERT INTO mod_crm_deals (
  org_id, pipeline_id, stage_id,
  titulo, valor, moeda, prioridade, probabilidade,
  data_previsao_fechamento, responsavel_id, observacoes, tags,
  custom_data, score
)
VALUES (
  'd154cae5-ef34-4916-8560-c59bc434699f',
  @pipeline_id, @stage_id,
  $titulo, $valor, 'BRL', $prioridade, $probabilidade,
  $data_previsao, $responsavel_uuid, $observacoes, $tags,
  jsonb_build_object(
    'origem', $origem,
    'next_step', $next_step,
    'next_step_date', $next_step_date,
    'created_by_skill', 'vendas-sync',
    'created_at', now()
  ),
  $score
)
RETURNING id;
```

**UPDATE (só os campos mudados):**
```sql
UPDATE mod_crm_deals SET
  stage_id = COALESCE($stage_id, stage_id),
  valor = COALESCE($valor, valor),
  probabilidade = COALESCE($probabilidade, probabilidade),
  custom_data = custom_data || jsonb_build_object(
    'last_touch', now(),
    'last_touch_via', 'vendas-sync',
    'next_step', $next_step,
    'next_step_date', $next_step_date
  ),
  updated_at = now()
WHERE id = $deal_id
  AND org_id = 'd154cae5-ef34-4916-8560-c59bc434699f';
```

> ⚠️ **Nunca** usar nomes do doc inglês (`title`, `value`, `name`, `owner_id`, `status`). Banco real é PT-BR — vai dar erro `42703: column ... does not exist`.

### 4.b — Atualizar ClickUp (Comercial → Pipeline)

**Resolver assignee:**
```javascript
mcp__claude_ai_ClickUp__clickup_resolve_assignees({
  list_id: "901713180050",
  assignee_names: [$responsavel_nome]
});
```

**CREATE:**
```javascript
const dealShort = $deal_id.slice(0, 8);  // primeiros 8 chars do UUID
mcp__claude_ai_ClickUp__clickup_create_task({
  list_id: "901713180050",
  name: `${$empresa} — ${$next_step}`,
  description: `**Lead/Cliente:** ${$empresa}
**Contato:** ${$contato}
**Stage:** ${$stage}
**Valor:** R$ ${$valor}
**Probabilidade:** ${$probabilidade}%

**Próximo passo:** ${$next_step}

**Observações:** ${$observacoes || '—'}

---
🔗 **CRM Link** (não remover esta seção)
- Deal ID: \`${$deal_id}\`
- Org: Elosystem Default
- Sistema: elosystem-v2 (Supabase)
- Skill: vendas-sync
- Brain ref: \`memory/sessions/${$today}.md\`
`,
  assignees: $resolved_assignee_ids,
  due_date: $next_step_date_epoch_ms,
  status: $clickup_status,  // ver mapeamento abaixo
  tags: [...$tags, "vendas-sync", `crm:${dealShort}`]
});
```

### 4.b.1 — Vinculação bidirecional (loop-back)

Imediatamente após criar a task ClickUp, **atualizar o deal CRM com o ID da task** pra fechar o loop:

```sql
UPDATE mod_crm_deals SET
  custom_data = custom_data || jsonb_build_object(
    'clickup_task_id', $task_id,
    'clickup_task_url', $task_url,
    'clickup_linked_at', now()
  ),
  updated_at = now()
WHERE id = $deal_id;
```

> **Regra:** task ClickUp **só é considerada criada com sucesso quando o loop-back é commitado no CRM**. Se o UPDATE no CRM falhar, deletar a task no ClickUp (rollback) e abortar. Sem isso, fica órfã.

**Mapeamento Stage CRM → Status ClickUp** (validar com lista real, default conservador):

| Stage CRM | Status ClickUp (default) |
|---|---|
| Lead | `to do` |
| Qualificando | `in progress` |
| Proposta | `in progress` |
| Comprou | `complete` |
| Perdido | `closed` |

### 4.c — Atualizar brain

**Pendências** — adicionar em `memory/context/pendencias.md` na seção `🟡 Importante`:

```markdown
- **<EMPRESA>** — <próximo passo> · prazo <data>
  Stage: <nome> · Valor R$<valor> · Resp: <responsavel>
  Deal CRM: <uuid> · ClickUp: <task_id>
```

**Sessão de hoje** — append em `memory/sessions/YYYY-MM-DD.md`:

```markdown
## Vendas-sync — <EMPRESA>
- Stage: <X> → <Y> (se mudou)
- Próximo passo: <next_step> @ <data>
- Deal: <uuid> | Task: <task_id>
```

**Decisão (só se WON/LOST)** — append em `memory/context/decisoes/YYYY-MM.md`:

```markdown
### <YYYY-MM-DD> — <EMPRESA> · <WON|LOST> · R$<valor>
**Motivo:** <motivo_perda ou justificativa do fechamento>
**Aprendizado:** <1 linha de retro>
```

---

## Passo 5 — Sugestão de próximas abordagens

Baseado no estágio atual + tom de voz Eloscope + scripts do playbook.

Consultar brain antes de gerar:
```javascript
mcp__elobrain__query({
  query: `playbook abordagem ${$stage} ${$proximo_passo}`,
  limit: 5,
  detail: "medium"
});
```

### Por estágio

**Lead novo → próxima: qualificação WhatsApp:**
Usar `guia-comercial-lucas` (page_id 1073). Script direto:
> "Oi {nome}, tudo bem? Sou o Lucas da Eloscope. {indicador/contexto}. Não vou tomar seu tempo agora — uma pergunta: {dor ressonante baseada no segmento}. Isso ressoa com a tua realidade hoje?"

**Qualificando → próxima: marcar call diagnóstico:**
3 perguntas de filtro (de `playbook` page 243):
1. "Quantos vendedores você tem ativos hoje?"
2. "Leads chegam por qual canal — Instagram, indicação, tráfego pago?"
3. "Você tem CRM ou gerencia tudo no WhatsApp?"

Critério: 1+ vendedor + leads chegando = GO call.

**Proposta → próxima: SPIN completo na call:**
Trazer perguntas SPIN do `spin-playbook-v0.2` (page 139/975). Estrutura ABER:
- Bloco Situação (P1–P3): negócio, time, faturamento
- Bloco Problema (P4–P6): resultado, maior travamento, tentativas anteriores
- Bloco Implicação + Need-payoff (P7–P8): consequência + visão futuro

**Pós-proposta → próxima: follow-up estruturado:**
Cadência: 24h após call (proposta) / 3 dias / 7 dias. Tom: "Bati só pra alinhar o próximo passo" (sem cobrar resposta direto).

**Fechado (Comprou) → próxima: handoff Victor + setup:**
1. Contrato assinado via `/assinar`
2. Passa pro Victor (onboarding)
3. Setup começa — clientes em fase Parceiro Fundador

**Perdido → próxima: registro + nurturing:**
Adicionar motivo_perda no deal (string padronizada: `preco | timing | autoridade | concorrente | sem-fit`). Setar reminder pra 90 dias depois ("quando isso mudar, você me chama").

### Tom de voz aplicado (sempre)

- ✅ Direto, sem hype
- ✅ "A gente" (não "nós")
- ✅ Resultado, não mecanismo ("vai recuperar leads" > "vai otimizar o funil")
- ❌ Evitar: "alavancar", "potencializar", "maximizar", "robusto", "solução completa"

---

## Passo 6 — Output final

```
✓ vendas-sync executado

CRM:       deal <uuid> [criado | atualizado de stage X → Y]
ClickUp:   task <task_id> [criado | atualizado]  →  <url>
Brain:     pendência adicionada / sessão atualizada
           [decisão registrada — só em WON/LOST]

📌 Próximas abordagens sugeridas:
   1. <ação 1 — dia / canal>
   2. <ação 2 — dia / canal>
   3. <ação 3 — dia / canal>

💬 Script sugerido (tom Eloscope):
   "<frase calibrada pro estágio atual>"

🔗 Refs do brain:
   - empresa/projetos/sales-os/02-comercial/playbook
   - areas/vendas/metodologia/spin-playbook-v0.2
```

---

## Anti-Patterns

- ❌ **Usar nomes de coluna do doc inglês do mod-crm** (`title`, `value`, `owner_id`, `status`, `metadata`, `expected_close_date`). Banco real é PT-BR. Sempre validar com `information_schema.columns` se mudou desde a última versão da skill.
- ❌ **Escrever sem confirmação.** Passo 3 é obrigatório — mesmo em "modo rápido", mostrar resumo e pedir `s/edit/n`.
- ❌ **Duplicar deal.** Sempre fazer lookup por título antes de INSERT. Idempotência > velocidade.
- ❌ **Esquecer `org_id` no WHERE.** RLS protege em prod, mas o MCP roda como service role e pode atravessar tenants. SEMPRE filtrar `org_id = 'd154cae5-...'`.
- ❌ **Sobrescrever `custom_data` em UPDATE.** Usar `custom_data || jsonb_build_object(...)` pra mergear. Sobrescrever apaga histórico.
- ❌ **Hardcode de assignees por UUID.** Resolver via `clickup_resolve_assignees` com nome — UUIDs mudam quando alguém entra/sai.
- ❌ **Inventar próximas abordagens.** Sempre puxar do `mcp__elobrain__query` antes de sugerir — scripts ad-hoc não respeitam tom de voz.
- ❌ **Acionar em falso positivo.** Trigger híbrido **pergunta** antes de agir. Nunca executar Passo 4 sem `s` explícito.
- ❌ **Criar task ClickUp sem tag `crm:<deal_short>` + bloco "🔗 CRM Link" no description.** Sem isso vira órfã — não dá pra cruzar depois. Idem: criar deal sem `custom_data.clickup_task_id` apontando de volta.
- ❌ **Ignorar lookup duplo (CRM + ClickUp) antes de criar.** Cliente novo pode já ter task solta no ClickUp de antes — vincular ela em vez de duplicar.
- ❌ **Não fazer rollback quando o loop-back falha.** Se criou task ClickUp mas UPDATE no CRM falhou (e vice-versa), DELETAR a parte criada antes de abortar. Estado inconsistente é pior que falha limpa.

---

## Regras

- ✅ **org_id sempre fixo:** `d154cae5-ef34-4916-8560-c59bc434699f` (Elosystem Default)
- ✅ **project_id sempre fixo:** `jaygqiooeolzachevvfa`
- ✅ **list_id ClickUp sempre fixo:** `901713180050` (Pipeline em Comercial)
- ✅ **Schema é fonte da verdade, não o doc.** Se diverge, banco vence — atualizar a skill, não inventar coluna.
- ✅ **Confirmar antes de escrever em qualquer destino.**
- ✅ **Tom Eloscope é regra, não preferência.** Scripts gerados passam pelo filtro de evitar/preferir.
- ✅ **Sempre rastreabilidade tripla** — deal UUID + task ID + pendência slug no output.
- ✅ **Idempotente** — re-execução com mesmo input não cria duplicata.
- ✅ **Vinculação bidirecional obrigatória** — toda task ClickUp tem tag `crm:<deal_short>` + bloco "🔗 CRM Link" no description; todo deal tem `custom_data.clickup_task_id` + `custom_data.clickup_task_url`. Sem isso o estado é inválido.
- ✅ **Rollback em falha de loop-back.** Se Passo 4.b foi OK mas 4.b.1 (update CRM com task_id) falhou, deletar a task no ClickUp. Idem inverso.
- ✅ **Lookup duplo (CRM + ClickUp) antes de criar** — sempre. Evita duplicar e capta tasks soltas.

---

## Convenções

### Naming

- **Título do deal:** `<EMPRESA> — <CONTATO>` (ex: `Bravo Agency — Camila`)
- **Nome da task ClickUp:** `<EMPRESA> — <próximo passo curto>` (ex: `Bravo Agency — Mandar proposta Bloco B`)
- **Tags ClickUp:** sempre incluir `vendas-sync` + uma de [`lp`, `indicacao`, `evento`, `outbound`]

### Datas

- Sempre absolutas no brain — converter "amanhã" / "sexta" pra `YYYY-MM-DD` antes de gravar
- ClickUp `due_date` em epoch ms (UTC)
- Supabase em ISO `TIMESTAMPTZ`

### Custom data (jsonb)

Estrutura padrão em `mod_crm_deals.custom_data`:

```jsonc
{
  "origem": "lp | indicacao | evento | outbound",
  "next_step": "<descrição>",
  "next_step_date": "YYYY-MM-DD",
  "last_touch": "ISO timestamptz",
  "last_touch_via": "vendas-sync | reuniao | salve",
  "clickup_task_id": "<id>",
  "brain_session": "memory/sessions/YYYY-MM-DD.md",
  "spin_score": { "s": 0, "p": 0, "i": 0, "n": 0 }  // só se veio de /discovery-analyze
}
```

### Probabilidade default por stage (se não informada)

| Stage | Probabilidade |
|---|---|
| Lead | 10 |
| Qualificando | 25 |
| Proposta | 50 |
| Negociação | 70 |
| Comprou | 100 |
| Perdido | 0 |

### Cadência de follow-up (se nenhuma definida)

- Pós-LP (inbound): 30 min
- Pós-indicação: 24h
- Pós-call discovery: 24h (proposta) → 3d → 7d → 14d (cold)
- Pós-proposta: 48h → 5d → 10d

---

## Integração com outras skills

| Skill | Como integra |
|---|---|
| `/reuniao` | Quando classifica uma reunião como tipo "venda" ou "discovery", oferece rodar `/vendas-sync` em seguida com os dados extraídos |
| `/discovery-analyze` | Output (SPIN scorecard + dimensionamento) alimenta o `custom_data.spin_score` e o `valor` sugerido |
| `/salve` | Detecta deals criados/atualizados na sessão e registra no log diário automaticamente |
| `/rotina` | No cockpit matinal, mostra deals com `next_step_date <= hoje` (vencidos ou pra hoje) |
| `/buscar-memoria` | Pode achar deals históricos por empresa/pessoa/segmento — usa o brain, não o Supabase direto |
| `/assinar` | Disparado quando stage muda pra "Comprou" — pega title + contato + valor pra montar contrato |
| `/elo-vendas` (Director) | Sub-agent que pode chamar `/vendas-sync` no fim do pipeline pra propagar resultado da análise comercial |

---

## Sub-comando — auditoria de vinculação

```
/vendas-sync --check [empresa]
```

Sem `[empresa]` → roda audit geral. Com nome → audita só esse cliente.

**O que faz:**
1. Lista deals ativos em `mod_crm_deals` (filtra por `empresa` se passado)
2. Lista tasks abertas no ClickUp Pipeline (mesmo filtro)
3. Cruza pelo campo `custom_data.clickup_task_id` (CRM) e tag `crm:<short>` (ClickUp)
4. Reporta:

```
📊 Audit vinculação CRM ↔ ClickUp

✅ Vinculados (N): deal + task ambos com referência cruzada
⚠️  Deal sem task (N): mod_crm_deals.id ... — sem custom_data.clickup_task_id
⚠️  Task sem deal (N): clickup task ... — sem tag crm:* nem CRM Link no description
🔴 Vinculação quebrada (N): deal aponta task X, mas X não existe / vice-versa
```

5. Pra cada caso problemático, oferece ação corretiva (criar/relinkar/arquivar).

> Esse sub-comando **resolve o problema das tasks soltas** que o Lucas levantou — hoje migrar pra estado limpo, amanhã prevenir.

---

## Roadmap (futuro — não escopo da v1)

- Integração com Fathom: pós-call processa transcrição → `/discovery-analyze` → `/vendas-sync` automático
- Score automático via heurística (BANT preenchido + sinais positivos no transcript)
- Alerta proativo: deal em stage X há mais de Y dias → notificar (cron diário)
- Sync bidirecional ClickUp → CRM: mudança no ClickUp atualiza o deal (hoje é one-way CRM-first)
- Multi-pipeline: hoje assume pipeline `ativo=true` único; se houver múltiplos, pedir escolha
- **Deprecation do ClickUp comercial**: quando o módulo CRM ficar self-contained no elosystem-v2 (com tarefas próprias por deal), a etapa ClickUp some — skill detecta presença/ausência e adapta
- Auditoria automática agendada (`/vendas-sync --check` semanal via cron-scheduler)
