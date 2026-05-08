---
tipo: handoff
status: pendente
de: aiox-master (Orion)
para: playbook-writer / @analyst / diagnostic-analyst
data: 2026-05-06
consumed: false
fases_concluidas: [1, 2]
proxima_fase: 3
---

# Handoff — Playbook SPIN Elo OS

## Contexto da Tarefa

Construir o playbook comercial completo do **Elo OS (Sales OS)** com estrutura SPIN, mapa de objeções e scripts para o time comercial — entregável final em PDF.

## O que já existe (NÃO recriar)

```yaml
material_existente:
  - path: empresa/projetos/sales-os/02-comercial/guia-comercial-lucas.md
    conteudo: Guia com ICP, funil 7 etapas, scripts WPP, perguntas SPIN (4 blocos), scripts de objeção
  - path: empresa/projetos/sales-os/02-comercial/script-primeira-call-v1.md
    conteudo: Script detalhado 690 linhas — abertura, discovery, pitch, fechamento (Fase 1-5)
  - path: empresa/projetos/sales-os/02-comercial/funil-vendas.md
    conteudo: 3 funis (outbound/indicação/inbound) com SLAs e métricas
  - path: empresa/projetos/sales-os/02-comercial/oferta-padrao.md
    conteudo: Pricing definitivo Starter/Growth/Scale beta e real
```

## Gaps que o Playbook precisa preencher

```yaml
gaps:
  - mapa_objecoes: faltam 15+ objeções estruturadas com causa raiz e resposta
  - cadencias_completas: sequência de dias/canais por tipo de lead
  - reativacao_base: script específico para base fria
  - handoff_interno: o que passa de Lucas → Victor → Hugo no fechamento
  - kpis_dashboard: métricas semanais + alertas de deal em risco
  - regras_ia_humano: limites do copiloto vs. decisão humana
```

## Produto

```yaml
produto:
  nome: "Elo OS"
  categoria: "Sistema operacional de vendas para PMEs"
  icp: "PME +R$80k/mês, 1-10 vendedores, serviço (imobiliária, energia solar, clínica, consultoria)"
  pricing_beta:
    starter: "R$3k setup + R$1.5k/mês (1-2 vend.)"
    growth: "R$3k setup + R$2.5k/mês (3-5 vend.)"
    scale: "R$3k setup + R$3.5k/mês (6-10 vend.)"
  garantia: "Devolução do setup (R$3k) se nada melhorar em 60 dias"
  promessa: "Seu time perde venda todo dia por falta de processo e follow-up. Elo OS instala o sistema completo."
```

## Ordem de Execução Recomendada

```yaml
fases:
  1:
    executor: "@aiox-master"
    acao: "Auditoria do material existente"
    output: "01-auditoria-material.md"
  2:
    executor: "diagnostic-analyst"
    acao: "Extrair e consolidar calls do Fathom (discovery calls Q2)"
    output: "02-padroes-calls.md"
    prerequisito: "Lucas confirmar se tem calls gravadas no Fathom"
  3:
    executor: "@analyst"
    acao: "Pesquisa web de objeções (8 queries definidas em 00-plano-pesquisa.md)"
    output: "03-objecoes-mercado.md"
  4:
    executor: "playbook-writer"
    acao: "Montar playbook completo (8 seções canônicas)"
    output: "04-playbook-spin-draft.md"
  5:
    executor: "@cso + @copy-chief"
    acao: "Revisão estratégica + polish de copy + exportação PDF"
    output: "05-playbook-spin-final.html + .pdf"
```

## Próxima Ação Imediata

```yaml
next_action: "Lucas confirmar existência de calls no Fathom relevantes (discovery Q2)"
blocker: "Sem confirmação das calls → pular Fase 2 e usar apenas objeções do guia existente + pesquisa web"
fallback: "Se sem calls: executar Fase 1 + 3 + 4 diretamente"
```

## Referências

- Plano completo: `empresa/projetos/sales-os/02-comercial/playbook-spin/00-plano-pesquisa.md`
- Estrutura canônica do playbook: seção "FASE 4" do plano de pesquisa
- Enertelles (referência de formato, produto diferente): `areas/vendas/oportunidades/enertelles/`
