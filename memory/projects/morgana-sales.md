---
tipo: projeto
empresa: Morgana Sales Estética Avançada
slug: morgana-sales
status: ativo
caminho: 6OS Beta (case oficial vertical estética Q2)
tags: [cliente/morgana-sales, ativo, vertical/estetica, elo-os]
---

# Projeto Morgana Sales — Snapshot

> Pasta operacional completa: [[areas/vendas/clientes/morgana-sales/_index]]

## Resumo executivo

Clínica estética avançada (Botox, Harmonização, Ultherapy, Mounjaro, Laser). Sistema próprio `elo.morgana.com.br` em produção. Caminho 6OS Beta para virar **case oficial vertical estética Q2**.

Treinamento presencial feito 28/04. Primeira campanha de ativação rodou 29/04 → 03/05 mas chip principal (`5517981542833`, migrado da Campos Joia) bloqueou com frequência. Operação pausada para reaquecimento — semana de 04–08/05 dedicada a aquecer 3 chips (1 reaquecendo + 2 novos).

## Stakeholders

- **Dra. Morgana Sales** — dona/decisora
- **Matheus Campos** — sócio + marido + dono Campos Joia (cliente Eloscope ativo) → ponte estratégica
- **Eloscope:** Lucas (CS/Produto) · Hugo (técnico)

## Estado atual (09/05/2026)

| Componente | Estado |
|-----------|--------|
| Sistema `elo.morgana.com.br` | 🟢 Produção |
| Chips (3) não-oficiais | 🟢 Reconectados 08/05 (todos reativados) — protocolo 10 dias (08–17/05) |
| Novo número Maqlam | 🟢 Conectado ao sistema (08/05) |
| API Oficial WhatsApp — app criado | 🟢 App criado, Chatwoot validado (07/05) |
| API Oficial WhatsApp — token | 🟢 **Liberado e configurado 09/05** — Autem (André) gerou Usuário de Sistema + token |
| Número API oficial | 🟢 `55 17 98154-2837` configurado **com número oficial (não teste)** após desbloqueio Meta |
| Cartão em dólar (Meta) | 🟢 Confirmado e cadastrado |
| Templates transacionais | 🟡 Submeter — desbloqueado pelo cartão |
| Ativação base (~9.000 leads) | 🟡 Pronta para reabrir — falta templates aprovados |
| morganasales_core — API oficial | 🟡 Lucas implementa (módulo `eloscope-ai/mod-campaigns`) |
| Instagram + FB no Chatwoot | 🔴 Pendente |
| Cadência Follow-up | 🔴 Pendente |

## Decisões fixas

- Chatwoot **só para a IA**; atendentes humanas seguem em WhatsApp comum
- API Oficial WhatsApp **só serve ao Agente SDR e campanhas de ativação** (não substitui atendentes)
- Meta coletiva, sem comissão individual
- IA de ativação de base é o modelo principal de aquisição
- `5517981542833` é da Morgana enquanto Campos Joia espera fotos novas
- **Número principal handoff = +55 17 99633-2788** (confirmado Matheus 04/05)
- **Número API oficial = `55 17 98154-2837`** — estava sem uso desde início do projeto (08/05)
- Lista do Matheus já importada no sistema (04/05)
- BM da Meta permanece com a Autem — Eloscope gerencia apps e templates
- André (Autem, +55 17 98814-5147) é single point of failure para o Usuário de Sistema + token

## Stakeholders atualizados

- **Dra. Morgana Sales** — dona/decisora
- **Matheus Campos** — sócio + marido + dono Campos Joia · `+5517981280789` · `matheuscamposjoias@gmail.com`
- **André Silva** — Autem Services Digital (tráfego) · `+55 17 98814-5147`
- **Eloscope:** Lucas (código + aquecimento + CS) · Hugo (n8n + agente Morg) · Victor (coordenação)

## Próximos marcos

- ✅ **09/05:** André (Autem) gerou token + cartão Meta cadastrado + número oficial configurado no sistema
- **10–11/05:** templates submetidos → morganasales_core (mod-campaigns) atualizado para API oficial
- **11–12/05:** templates aprovados → ativar campanha de disparos da base (~9k leads)
- **17/05:** avaliação final dos 3 números de aquecimento (aptos para SDR/backup)

## Arquivos

| Arquivo | Conteúdo |
|---------|----------|
| [[areas/vendas/clientes/morgana-sales/_index]] | Hub do cliente |
| [[areas/vendas/clientes/morgana-sales/equipe]] | Stakeholders + acessos |
| [[areas/vendas/clientes/morgana-sales/operacional/handoff-ativacao]] | Estado + sequência semana |
| [[areas/vendas/clientes/morgana-sales/operacional/chips-aquecimento]] | Protocolo dos 3 chips |
| [[areas/vendas/clientes/morgana-sales/operacional/pendencias-tecnicas]] | Backlog técnico + ClickUp |
| [[areas/vendas/clientes/morgana-sales/comercial/agente-morg-mensagens-ativacao]] | Copy aprovada |

---

*Atualizado: 2026-05-09*
