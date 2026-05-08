---
tipo: plano-pesquisa
status: em_andamento
projeto: sales-os
produto: Elo OS
tags: [playbook, spin, objeções, comercial]
criado: 2026-05-06
owner: Lucas + @aiox-master
---

# Plano de Pesquisa — Playbook Comercial Elo OS (SPIN)

> Objetivo: produzir playbook comercial completo com estrutura SPIN, mapa de objeções e scripts para o time comercial da Eloscope — entregável final em PDF.

---

## Contexto

O Sales OS (Elo OS) já tem:
- ✅ `guia-comercial-lucas.md` — guia prático com scripts de abordagem e perguntas SPIN
- ✅ `script-primeira-call-v1.md` — script detalhado da call (690 linhas)
- ✅ `funil-vendas.md` — funil com 3 rotas (Outbound / Indicação / Inbound)
- ✅ `oferta-padrao.md` e `pacote-6os-q2.md` — pricing e pacotes

O que falta:
- ❌ Mapa de objeções estruturado (com contexto, resposta e contra-argumento)
- ❌ Pesquisa de objeções reais de mercado (PME + serviços + IA)
- ❌ Análise das calls de discovery salvas no cérebro (Fathom)
- ❌ Cadências completas por tipo de lead
- ❌ Documento unificado pronto para PDF

---

## Fases do Plano

### FASE 1 — Auditoria de Material Existente
**Executor:** @aiox-master (agora) + leitura manual dos arquivos

- [ ] Ler `guia-comercial-lucas.md` e extrair perguntas SPIN já mapeadas
- [ ] Ler `script-primeira-call-v1.md` e identificar gaps nas fases
- [ ] Ler `funil-vendas.md` e mapear onde objeções aparecem no funil
- [ ] Comparar com playbook Enertelles (estrutura de referência diferente)

**Output esperado:** documento `01-auditoria-material.md` com gaps mapeados

---

### FASE 2 — Extração de Calls Reais (Fathom)
**Executor:** `diagnostic-analyst` (Sales OS agent) via Fathom MCP

- [ ] Listar reuniões de discovery no Fathom dos últimos 90 dias
- [ ] Extrair transcrições das calls com prospects do Q2 (PME com time comercial)
- [ ] Consolidar padrões: objeções recorrentes, momentos de hesitação, perguntas que funcionaram

**Input para o agent:** `list_meetings` → filtrar por tipo discovery/comercial → `get_meeting_transcript`

**Output esperado:** documento `02-padroes-calls.md` com:
- Top 10 objeções reais levantadas nas calls
- Frases que resonaram vs. que geraram resistência
- Perguntas SPIN que abriram mais

---

### FASE 3 — Pesquisa de Objeções de Mercado (Web)
**Executor:** `@analyst` (AIOX) com WebSearch + WebFetch

**Queries prioritárias para pesquisa:**
```
1. "objeções mais comuns venda de consultoria PME Brasil"
2. "objeções venda IA para pequenas empresas 2024 2025"
3. "SPIN selling objeções implementação de CRM"
4. "objeções vendas SaaS recorrente Brasil MRR"
5. "como responder 'não tenho tempo' em venda B2B"
6. "objeções 'já tentei consultoria e não funcionou'"
7. "como contornar objeção de preço consultoria mensal"
8. "spin selling implication questions exemplos português"
```

**Fontes prioritárias:**
- Blog Agendor, Exact Sales, Reev, Meetime
- G2, Capterra reviews de CRM (objeções dos usuários)
- LinkedIn artigos de vendas B2B Brasil
- SPIN Selling original (Rackham) — estrutura canônica

**Output esperado:** documento `03-objecoes-mercado.md` com:
- Matriz de objeções: [Categoria] → [Frase do prospect] → [Causa raiz] → [Resposta recomendada]
- Categorias: Preço · Tempo · "Já tentei" · Concorrente · "Vou pensar" · Não é prioridade agora

---

### FASE 4 — Montagem do Playbook SPIN
**Executor:** `playbook-writer` (Sales OS agent)

**Inputs para o agent:**
- Output da Fase 1 (gaps)
- Output da Fase 2 (objeções reais)
- Output da Fase 3 (objeções de mercado)
- Segmento: Q2 (PME prestadora de serviço com time comercial)
- Pacotes: Starter / Growth / Scale (beta e real)

**Estrutura canônica do playbook (8 seções):**

```
1. QUALIFICAÇÃO
   - Perfil ICP (Q2)
   - BANT checklist
   - GO/NO-GO criteria
   - Script de qualificação WhatsApp (3 perguntas)

2. FUNIL DE VENDAS
   - Estágios e gatilhos de avanço
   - SLA por estágio
   - 3 rotas: Outbound / Indicação / Inbound
   - Métricas de conversão por etapa

3. REUNIÃO DE DIAGNÓSTICO (SPIN completo)
   - Abertura (5 min)
   - Situação — 5 perguntas canônicas
   - Problema — 5 perguntas canônicas
   - Implicação — 5 perguntas canônicas
   - Necessidade de Solução — 3 perguntas
   - Apresentação do Elo OS (12 min)
   - Fechamento da reunião

4. SCRIPTS E CADÊNCIAS
   - Abordagem inicial (WPP / DM / cold)
   - Follow-up sequência 1º ao 4º contato
   - Reativação de base fria
   - Mensagem pós-proposta enviada

5. MAPA DE OBJEÇÕES
   - 15+ objeções com resposta e contra-argumento
   - Árvore de decisão por tipo de objeção
   - Script de reframe para "já tentei e não funcionou"

6. HANDOFF (Lucas → Victor → Hugo)
   - O que passa no fechamento
   - Checklist pré-onboarding
   - Comunicação com o cliente na transição

7. KPIs E DASHBOARDS
   - Métricas semanais (Lucas rastreia)
   - Alertas de deal em risco
   - Reunião mensal com cliente

8. REGRAS IA / HUMANO
   - Quando a IA sugere vs. o vendedor decide
   - O que o Copiloto faz sozinho
   - Limites de autonomia
```

**Output esperado:** `04-playbook-spin-draft.md` — documento completo

---

### FASE 5 — Revisão e Exportação para PDF
**Executor:** @cso (validação estratégica) + `@copy-chief` (polish dos scripts)

- [ ] @cso valida estrutura e cobertura de objeções
- [ ] @copy-chief revisa scripts de abordagem e follow-up (tom, persuasão, direct response)
- [ ] Montar versão final em HTML imprimível (padrão dos outros documentos do projeto)
- [ ] Exportar como PDF para o time comercial

**Output esperado:** `05-playbook-spin-final.html` + `05-playbook-spin-final.pdf`

---

## Próximos Passos Imediatos

1. **AGORA:** Lucas confirma se tem calls gravadas no Fathom relevantes (discovery de prospects Q2)
2. **Fase 1:** @aiox-master executa auditoria do material existente (pode ser hoje)
3. **Fase 2:** Invocar `diagnostic-analyst` com IDs das calls do Fathom
4. **Fase 3:** Invocar `@analyst` para pesquisa web de objeções
5. **Fase 4+5:** `playbook-writer` + revisão final

---

## Agentes Recomendados por Fase

| Fase | Agente Principal | Agente Suporte |
|------|-----------------|---------------|
| 1 — Auditoria | @aiox-master | — |
| 2 — Calls Fathom | diagnostic-analyst | @orion |
| 3 — Pesquisa Web | @analyst | — |
| 4 — Playbook | playbook-writer | @hormozi-chief |
| 5 — Revisão/PDF | @cso | @copy-chief |

---

## Referência — Arquivos do Projeto

| Arquivo | Uso no playbook |
|---------|----------------|
| `02-comercial/guia-comercial-lucas.md` | Base SPIN + scripts existentes |
| `02-comercial/script-primeira-call-v1.md` | Script detalhado 40min (reutilizar) |
| `02-comercial/funil-vendas.md` | Funil e SLAs |
| `02-comercial/oferta-padrao.md` | Pricing para seção de fechamento |
| `../memory/projects/sales-os.md` | Contexto completo do produto |
| `../areas/vendas/oportunidades/enertelles/` | Referência de estrutura (produto diferente) |
