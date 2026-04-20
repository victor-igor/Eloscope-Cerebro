# Tempo — 6OS

**Fonte:** reunião 18/04/2026 + v1.0. Estimativas conservadoras; revisar a cada 3 clientes rodados.
**Uso:** (a) seção "Cronograma" do `Proposta_Lead_Template.md`; (b) cálculo de margem no `Custos_Stack_Template.md`; (c) validação do cronograma de cada lead em `validacao-cronograma.md`.

## Tabela A — Tempo por fase (dias úteis)

| Fase | Sub-etapa | Mín | Típico | Máx | Fator que estica |
|---|---|---|---|---|---|
| **1 Diagnóstico** | — | 5 | 7 | 10 | Cliente não tem acesso centralizado a Meta/Google/CRM; agenda difícil |
| **2 Estruturação** | Onboarding A | 2 | 3 | 5 | Cliente atrasa envio de credencial |
| **2 Estruturação** | Onboarding B (OpenClaw) | 3 | 5 | 7 | Cliente bagunçado; pouca disciplina de WhatsApp |
| **2 Estruturação** | Análise & Rota | 2 | 3 | 5 | Dado do diagnóstico incompleto |
| **2 Estruturação** | Fluxograma do funil | 1 | 2 | 3 | Muitos canais (>5) |
| **2 Estruturação** | Playbook | 5 | 7 | 10 | Cliente quer escrever junto (bom pra engajamento, ruim pra prazo) |
| **2 Estruturação** | Gate formal | 1 | 2 | 5 | Dono viaja / não consegue 2h de agenda |
| **2 Estruturação** | 7A Treinamento | 2 | 3 | 5 | Time do cliente tem rotatividade alta |
| **2 Estruturação** | 7B Agente SDR n8n+OpenClaw | 5 | 8 | 15 | **WABA approval: 5d bloqueantes** se cliente ainda não tem Business Verification |
| **2 Estruturação** | 7C Integração CRM existente | 3 | 6 | 15 | API do CRM do cliente (HubSpot rápido; Kommo ok; customizado = dor) |
| **2 Estruturação** | 7D Dashboard Next.js | 7 | 14 | 25 | Design review + revisão do cliente = subestimado por default |
| **3 Acompanhamento** | Review mensal | 1 (0,5d call + 0,5d prep) | 1 | 2 | Cliente pede alteração de playbook no meio da review |

## Tabela B — Tempo por ferramenta (setup + operação mensal)

| Ferramenta | Setup (h) | Operação (h/mês) | Quem faz | Dependência bloqueante |
|---|---|---|---|---|
| **n8n** (workflows base) | 8–16 | 2–4 | Victor | Acesso n8n Eloscope (pronto) |
| **OpenClaw / OpenCloud** (copiloto + assistida) | 12–24 | 3–6 | Victor | Templates Fran/Morgana prontos pra replicar |
| **Supabase** (persistência, multi-tenant) | 4–8 | 1–2 | Victor | Projeto Eloscope já existe, só criar schema |
| **WhatsApp Business API (WABA)** | 6–12 **+ 3–5d de aprovação Meta (bloqueante)** | 0,5 (só supervisão) | Victor + cliente (Business Verification) | Cliente precisa ter CNPJ e Business Manager configurados |
| **CRM Eloscope multi-tenant** (quando cliente não tem) | 4–8 | 1–2 | Victor | Template multi-tenant pronto (o "7d de dev" do CLAUDE.md é custo-único, já pago) |
| **CRM integração** (HubSpot / Pipedrive / RD / Kommo) | 8–20 | 2–4 | Victor | Credencial API + permissão do admin do cliente |
| **Playbook (doc)** | 20–40 | 2–4 (tuning mensal) | Lucas + Hugo | Onboarding completo |
| **Treinamento gravado** | 8–12 | 0 | Lucas | Playbook aprovado |
| **Fireflies / Fathom** (gravação call) | 0 (já usamos) | 0 | — | — |
| **Dashboard Next.js** (7D) | 40–80 | 4–8 | Victor | Design aprovado; só se cliente Real |
| **Clerk** (auth no dashboard) | 4 | 0,5 | Victor | Só se 7D |
| **Paperclip** (em teste) | — | — | Victor | Fora do Beta, entra só se validação passar |
| **Monitoramento (Loom + Fireflies + WhatsApp group)** | 0 | 2–4 | Time | — |

## Tabela C — Cronograma consolidado por versão do produto

### Versão **Beta** (para validação)

```
Semana 0      : Assinatura do contrato
Semana 1      : Fase 1 Diagnóstico (7-10d)
Semana 2      : Gate 1 + onboarding A/B
Semana 3      : Análise, fluxograma, início do playbook
Semana 4      : Playbook finalizado + gate 2 formal
Semana 5-6    : 7B deploy do agente SDR + WABA (se precisar)
Semana 7      : Treinamento + handoff
Semana 8      : Vira Fase 3 Acompanhamento
─────────────────────────────────────
TOTAL: ~8 semanas do contrato até operação (range 6-10s conforme cliente)
MRR começa mês 3 (ou mês 2 se cliente acelera)
```

### Versão **Real** (pós-case)

Mesmo cronograma base + 7C (integração CRM existente) e/ou 7D (dashboard). Adiciona 2–4 semanas à Fase 2.

```
Semana 0      : Assinatura
Semana 1      : Fase 1 Diagnóstico
Semana 2-3    : Onboarding + análise + playbook
Semana 4      : Gate 2
Semana 5-8    : 7B + 7C (integração CRM cliente) em paralelo
Semana 9-11   : 7D dashboard + revisão
Semana 12     : Go-live + treinamento + handoff
─────────────────────────────────────
TOTAL: ~10-12 semanas
```

## Regras de replanejamento

1. **WABA aprovação é o risco-um.** Sempre começar provisionamento de WABA na semana 1 — não esperar chegar na semana 5.
2. **Gate 2 não é negociável.** Se cliente quer pular "pra ganhar 2 semanas", a resposta é não. Atrasa 2s, não 4 meses de retrabalho.
3. **Cliente viajando = pausa, não aceleração.** Pausa formal com retomada em data conhecida; não tenta recuperar dia por dia.
4. **Paperclip fora do caminho crítico.** Se estiver testando, roda em paralelo mas não substitui OpenClaw em nenhum entregável Beta.

## Base de cálculo de margem

Estimativa por cliente Beta no ciclo inicial (3 meses de fidelidade):

- **Receita Beta:** R$ 2.500 setup + 3 × R$ 1.500 = **R$ 7.000** (midpoint; range R$ 6.500–7.500)
- **Custo-time Eloscope:** ~ (30h Fase 1 + 110h Fase 2 + 30h Fase 3 3 meses) × R$ 150/h hora-time médio = **R$ 25.500**
- **Margem Beta isolada: negativa.** Beta é investimento em metodologia + case — não deve ser medido por margem unitária.

Estimativa por cliente Real (contrato 12 meses):

- **Receita Real:** R$ 5.000 setup + 12 × R$ 4.000 = **R$ 53.000**
- **Custo-time:** ~ (30h Fase 1 + 160h Fase 2 + 15h/mês × 12) = **370h × R$ 150 = R$ 55.500**
- **Margem isolada ainda estreita.** Depende de:
  - Reutilização dos templates (VPC, playbook, objeções) — reduz Fase 2 em 30–40%
  - Expansão de skill OpenClaw comum a N clientes — custo diluído
  - Upsell de Arm Web / 7D dashboard — ticket cresce sem proporcional custo

**Conclusão:** margem saudável depende de padronização e de N clientes rodando simultaneamente; não do preço individual. Confirma a regra anti-software-house do repo.
