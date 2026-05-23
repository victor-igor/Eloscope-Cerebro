---
tipo: pauta-reuniao
categoria: alinhamento-cliente
cliente: ReabilitaCão
data: 2026-05-22
operador: Victor
reuniao_anterior: areas/vendas/clientes/reabilita-cao/reuniões/notas/alinhamento-7-05
status: a-realizar
---

# Pauta — Reunião ReabilitaCão (22/05/2026)

> Continuidade do alinhamento de 07/05. Linha da reunião: **(1)** validar o que foi entregue desde a última conversa → **(2)** destravar as pendências em aberto → **(3)** fechar a mensagem de follow-up pós-avaliação.
>
> ⚠️ Os status marcados com **🟡 (a confirmar)** são inferência do estado do código/deploys (épicos pushados para main em 14/05 + Phase 2 em 19/05). **Confirme antes da call** o que de fato subiu para o cliente — não anuncie como entregue sem ter validado.

---

## 0. Abertura (2 min)
- Cumprimentar Fran (nos EUA) e Cris.
- Enquadrar a reunião: "Vim mostrar o que ajustamos desde a última, validar com vocês e alinhar o que falta."

---

## 1. Validar entregas desde 07/05 (10 min)
Mostrar/confirmar com o cliente se resolveu de verdade no uso do dia a dia:

| Item | Status (inferido) | O que validar com o cliente |
|------|-------------------|------------------------------|
| Bug de edição de evento recorrente (virava evento único / sumia da agenda) | 🟡 provavelmente corrigido (fixes 14/05: EditSeriesDialog, scope=ALL, canonicalPaiId) | "A Cris consegue editar uma série recorrente sem que ela suma da agenda agora?" |
| Eventos antigos órfãos que não sumiam da Maia | 🟡 cleanup feito (jobs antigos limpos 15–18/05) | "Aqueles eventos velhos ainda aparecem na Maia ou já sumiram?" |
| Sincronização de cor / fila do Google Calendar | 🟢 corrigido (Phase 2, deploy 19/05) | Confirmar que agendamentos estão sincronizando certo |
| Recuperação de consulta ao fechar a aba sem querer | 🟡 (auto-save de gravação no ar) | "Aconteceu de novo de fechar e precisar recuperar? Funcionou?" |

**Anotações:**
-

---

## 2. Pendências ainda em aberto (15 min)
Pontos que **não** têm fix confirmado — tratar como abertos:

### 2.1 Atribuição de veterinário responsável saindo errada
- Caso citado: Luna (do Giovanni) saiu como Fran em vez de Dani/Danila.
- Hipótese: herança do agendamento vindo do Google Calendar.
- **Perguntar:** ainda está acontecendo? Pegar 1–2 exemplos novos para investigar a origem.
- **Anotações:**

### 2.2 Edição do campo de raça do pet (ex.: "vira-lata")
- **Confirmar:** o campo já é editável? Se não, é prioridade pra eles?
- **Anotações:**

### 2.3 Roteamento de serviços por WhatsApp (Maia)
- Combinado: Dieta / Cannabis / Biorressonância → celular da **Cris**; Fisio → celular da **Nath**.
- **Confirmar:** os números estão conectados e respondendo? A Maia está roteando certo? Sem mensagem duplicada (Maia + humano)?
- **Anotações:**

### 2.4 Lembretes diários de slots não vinculados
- Maia envia lembrete diário; Nath/vet de plantão monitora no fim do dia.
- **Confirmar:** está rodando? A clínica está conseguindo acompanhar?
- ⚠️ Dor da Fran: "os clientes que precisam marcar não podem deixar de receber, senão a gente volta pro manual."
- **Anotações:**

### 2.5 Eventos pré-recorrência para excluir em lote
- Combinado: clínica manda lista → Victor exclui pelo banco.
- **Cobrar/Combinar:** a lista chegou? (ex.: Belinha qui 14h, Pico/Ana Beatriz qui 08h). Definir como vão mandar.
- **Anotações:**

---

## 3. Catálogo e precificação (5 min)
- **Serviço/pacote "Academia"** (Cris lançou como "Reabilitação Movimento"): confirmar que está no catálogo com preço por sessão (avulso vs. pacote).
- **Desconto de irmãos** (mais de um cão por tutor): pedido da Fran — está aplicável na precificação de pacote?
- **Anotações:**

---

## 4. Mensagem de follow-up pós-avaliação + review Google (10 min)
> Era o "para a semana seguinte" da última reunião — provavelmente ainda pendente. Bom momento para fechar ao vivo.

- Fluxo combinado: no dia seguinte à avaliação, a Maia pergunta como o cão está e envia o link de review do Google.
- **Decidir na call:**
  - Texto/tom da mensagem (quem escreve o rascunho?).
  - Para quais serviços dispara (só avaliação — **não** sessões de manutenção/dieta).
  - Link de review do Google (pegar o link oficial da clínica).
  - Quando ativa.
- **Anotações:**

---

## 5. Campanha de WhatsApp da Nath (3 min)
- Combinado: expandir para 100% dos contatos.
- **Confirmar:** já está em 100%? Resultado/feedback?
- **Anotações:**

---

## 6. Fechamento (5 min)
- Recapitular decisões e quem faz o quê.
- Definir prazos para os itens que ficaram "[não definido]" na última reunião.
- Marcar próxima reunião.

---

## Decisões da reunião de hoje
-

## Próximos passos / Ações
| Ação | Responsável | Prazo |
|------|-------------|-------|
|  |  |  |

---

## Lembretes de postura
- Tom de parceria (a relação está boa — última reunião teve muito elogio).
- Não prometer prazo de bug sem ter testado.
- Sair com a **lista de eventos órfãos** e o **link de review do Google** em mãos.
