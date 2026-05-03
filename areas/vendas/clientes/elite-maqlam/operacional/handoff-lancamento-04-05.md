---
tipo: handoff
empresa: Elite Maqlam
data: 2026-05-04
tags: [cliente/maqlam, handoff, cashback, bdr, chips]
---

# Handoff — Lançamento 04/05/2026

> Campanha começa **04/05 às 12h**.
> Prazos revisados em 03/05 após análise de dependências.

---

## HOJE À NOITE (03/05) — elimina risco antes de dormir

- [ ] **Victor: testar SDR agora** (`86e16ubnu`)
  - Simular cliente, testar OI/INFO/QUERO, confirmar transferência, validar hybrid search
  - ✅ OK → avisa Lucas → lançamento confirmado
  - ❌ Bug → Hugo corrige à noite (tem tempo antes do 04/05)
  - **Se não der hoje:** limite máximo 09h de 04/05

---

## 04/05 — Sequência realista

### 8h30 (Lucas)

- [ ] **Enviar 3 variações de mensagem para Denis aprovar** (`86e16ub51`)
  - Mensagem no WhatsApp: "Denis, 3 opções para o disparo das 12h. Pode escolher 1 ou rotacionar as 3."
  - Denis responde até ~10h30

- [ ] **Enviar BDR Bumble para Denis testar** (`86e16ub5t`)
  - Mensagem separada: número do chip + instrução de teste simples
  - Denis responde até ~10h30

- [ ] **Chips — Day 1 do aquecimento**
  - +55 11 9 2700-9804: 10–15 mensagens manuais
  - +55 17 9 2004-2308: 10–15 mensagens manuais
  - Protocolo: [[operacional/chips-aquecimento]]

### 10h30 (Lucas)

- [ ] **Configurar campanha no sistema** (draft pronto, não dispara ainda)
  - Criar campanha com a variação que Denis aprovou
  - Associar chips, configurar rotação
  - Deixar tudo pronto — só falta apertar o botão às 12h

### 11h30 — Go / No-Go

| Checklist | Status |
|-----------|--------|
| SDR testado (Victor OK ou bug resolvido) | ⬜ |
| Denis aprovou mensagens | ⬜ |
| Denis confirmou BDR funcionando | ⬜ |
| Campanha configurada no sistema (draft) | ⬜ |

Se algum item estiver ❌ às 11h30 → decidir se atrasa ou lança assim mesmo.

### 12h (Lucas)

- [ ] **Disparar campanha** (`86e16ub4p`)
  - Apertar o botão no sistema
  - Monitorar primeiros envios por 15–20min

### Tarde (13h–15h)

- [ ] **Loom para Marcella e Juliano** (`86e16u6bj`) — *movido para depois do lançamento*
  - Acessar `/contacts` → mostrar filtro cashback → demonstrar como dar baixa
  - Gravar + enviar para Denis, Marcella, Juliano
  - Não é bloqueante pro disparo — é para gestão contínua da equipe

- [ ] **Checar primeiros retornos** — clientes respondendo? BDR respondendo certo?

### 04/05 — qualquer hora (Victor)

- [ ] **Agendar CS meeting com Denis** (`86e16u6bb`) — 08 ou 09/05

---

## Quem faz o quê (atualizado)

| Quem | O quê | Prazo | ClickUp |
|------|-------|-------|---------|
| ~~Lucas~~ | ~~Importar leads~~ | ✅ 03/05 | `86e16ubkn` |
| Victor | **Testar SDR** | **HOJE 22h** | `86e16ubnu` |
| Lucas | Enviar mensagens para Denis | 04/05 — 8h30 | `86e16ub51` |
| Lucas | BDR Bumble → Denis testar | 04/05 — 8h30 | `86e16ub5t` |
| Denis | Aprovar mensagens + testar BDR | 04/05 — até 10h30 | — |
| Lucas | Configurar campanha (draft) | 04/05 — 10h30 | — |
| Lucas | **Go/no-go** | 04/05 — 11h30 | — |
| Lucas | **Disparar campanha** | 04/05 — **12h** | `86e16ub4p` |
| Lucas | Loom para equipe de vendas | 04/05 — tarde | `86e16u6bj` |
| Lucas | Chips Day 1 | 04/05 — durante o dia | — |
| Victor | Agendar CS meeting 08-09/05 | 04/05 | `86e16u6bb` |

---

## Contexto da campanha

| Regra | Detalhe |
|-------|---------|
| Cashback | 5% por compra |
| Resgate | Comprar 3× o acumulado (ex: R$50 → compra R$150) |
| Validade | 30 dias por transação |
| Vigência | 04/05 a 02/06/2026 |
| Audiência | Base com WhatsApp ativo |

---

## Links

| O quê | Onde |
|-------|------|
| Mensagens cashback | [[comercial/cashback-mensagens]] |
| Protocolo chips | [[operacional/chips-aquecimento]] |
| Sistema | https://elo.elitemaqlam.com.br |
| Tela contatos | https://elo.elitemaqlam.com.br/contacts |

---

*Criado: 2026-05-03 · Revisado: 2026-05-03 (prazos ajustados)*
