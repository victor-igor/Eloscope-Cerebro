---
tipo: handoff
empresa: Elite Maqlam
data: 2026-05-04
tags: [cliente/maqlam, handoff, cashback, bdr, chips]
---

# Handoff — Lançamento 04/05/2026

> Guia de execução para o dia de lançamento da campanha cashback.
> Campanha começa **04/05 às 12h** — tudo antes disso é preparação.

---

## Sequência do dia

### Manhã — até 10h (Lucas + Hugo em paralelo)

- [x] **Importar leads** — concluído por Lucas em 03/05 (`86e16ubkn`)

- [ ] **Victor: testar agente SDR e passar resultado para Lucas** (`86e16ubnu`)
  - Simular cliente, testar OI/INFO/QUERO, confirmar transferência para humano
  - ✅ OK → avisa Lucas → Lucas libera disparo às 12h
  - ❌ Bug → descreve erro → Hugo corrige antes das 12h

- [ ] **Enviar 3 variações de mensagem cashback para Denis validar**
  - Arquivo: [[comercial/cashback-mensagens]]
  - Enviar no WhatsApp do Denis com o contexto: "Denis, segue as 3 opções de mensagem para o disparo de hoje às 12h. Pode escolher 1 ou a gente usa as 3 em rotação."
  - Denis precisa responder ANTES das 12h

- [ ] **Mandar BDR Bumble para Denis testar**
  - Confirmar com Victor que o script do MAC1/Bumble está ativo
  - Enviar mensagem para Denis testar a jornada completa (trigger → resposta do Bumble)
  - Denis deve confirmar que o fluxo está funcionando

- [ ] **Chips — Day 1 do aquecimento**
  - +55 11 9 2700-9804: 10–15 mensagens manuais (conhecidos/grupos ativos)
  - +55 17 9 2004-2308: 10–15 mensagens manuais (conhecidos/grupos ativos)
  - Protocolo completo: [[operacional/chips-aquecimento]]
  - Criar task avulsa no ClickUp para o dia

### Manhã — até 11h30 (Lucas + Victor)

- [ ] **Relatório de cashback para equipe de vendas**
  - Confirmar se é tela existente (filtro em `/contacts`) ou feature nova a criar
  - Se tela existente: gravar Loom mostrando o filtro + como usar no dia a dia
  - Se feature nova: Hugo implementa — prazo urgente antes do disparo ou logo depois
  - Destinatários do Loom: Denis, Marcella, Juliano

- [ ] **Victor: agendar CS meeting**
  - Marcar com Denis, Marcella e Juliano para semana de 08-09/05
  - Pauta: review do sistema, cashback, BDR Bumble, próximos passos
  - Task ClickUp: `86e16u6bb`

### 12h em ponto (Denis)

- [ ] **Lançamento da campanha cashback**
  - Denis dispara para a base de contatos com WhatsApp ativo
  - Usar variações aprovadas em rotação (reduz spam detection)
  - Personalizar `[NOME]` com nome do contato no sistema

### Tarde (monitoramento — Lucas)

- [ ] Confirmar que Denis recebeu e disparou as mensagens
- [ ] Verificar primeiros retornos / respostas dos clientes da Maqlam
- [ ] Checar se Bumble está respondendo corretamente

---

## Contexto rápido — campanha cashback

| Regra | Detalhe |
|-------|---------|
| Cashback | 5% sobre valor de cada compra |
| Resgate | Cliente precisa comprar 3× o acumulado (ex: R$50 → compra R$150) |
| Validade | 30 dias por transação |
| Vigência | 04/05/2026 a 02/06/2026 |
| Audiência | Toda a base com WhatsApp ativo |
| Canal | WhatsApp (chips aquecidos ou oficial se disponível) |

---

## Quem faz o quê

| Quem | O quê | Prazo | ClickUp |
|------|-------|-------|---------|
| ~~Lucas~~ | ~~Importar leads~~ | ✅ Feito 03/05 | `86e16ubkn` |
| Victor | Testar agente SDR + passar resultado para Lucas | Até 11h | `86e16ubnu` |
| Lucas | Enviar mensagens para Denis validar | Até 10h | `86e16ub51` |
| Lucas | BDR Bumble para Denis testar | Até 10h | `86e16ub5t` |
| Lucas | Chips — Day 1 aquecimento | Durante o dia | — |
| Lucas | Loom cashback report (se tela existente) | Até 11h30 | `86e16u6bj` |
| Victor | Confirmar script Bumble ativo | Até 10h | — |
| Victor | Agendar CS meeting 08-09/05 | Até 10h | `86e16u6bb` |
| Denis | Validar mensagens cashback | Até 11h30 | `86e16ub51` |
| Denis | Disparar campanha | 12h | `86e16ub4p` |

---

## Dependências críticas

1. **Denis aprova mensagens** → campanha pode disparar às 12h
2. **Victor confirma Bumble** → Denis pode testar antes do envio para a base
3. **Definir se relatório é feature nova ou tela existente** → determina se Hugo precisa agir hoje

---

## Links e referências

| O quê | Onde |
|-------|------|
| Mensagens cashback | [[comercial/cashback-mensagens]] |
| Protocolo chips | [[operacional/chips-aquecimento]] |
| Sistema (produção) | https://elo.elitemaqlam.com.br |
| Tela de contatos | https://elo.elitemaqlam.com.br/contacts |
| ClickUp lista Maqlam | ID `901713180067` |

---

*Criado: 2026-05-03*
