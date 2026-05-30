---
data: 2026-05-29T00:00:00.000Z
tipo: analise
subtipo: ceo-review
semana: 22
persona: "@ceo (C-Level Squad)"
status: final
tags:
  - reuniao
  - analise
  - estrategia
---

# Análise da Semana 22 — visão CEO

> Leitura executiva da weekly 29/05/2026 pela ótica do `@ceo` (C-Level Squad). Fonte: `[[2026-05-29-semanal]]`. Tom direto, sem floreio.

---

## Veredito em uma linha

**Semana de produto excepcional, semana comercial inexistente — a Eloscope segue sendo uma máquina de entregar e uma não-máquina de vender, e isso, na 3ª semana seguida de R$0 novo, deixou de ser observação e virou o risco número um do negócio.**

---

## O placar real

| Eixo | Nota | Leitura |
|------|------|---------|
| **Produto / Entrega** | A | 4 dos 5 clientes 🟢. Maqlam saltou pra quase-produção (RAG 100% + catálogo + envio WhatsApp). Morgana subiu pra produção com API oficial. Semana tecnicamente densa. |
| **Receita nova** | F | R$0 pela 3ª semana. Zero reunião de venda, zero proposta. |
| **Caixa** | ⚠️ D | Base recorrente (~R$5,5k) ≈ custos fixos (~R$5,6–6,3k/mês). Operamos no fio do break-even — possivelmente abaixo. |
| **Aquisição / Marketing** | F | 17 Reels roteirizados, 0 publicados. Funil comercial inteiro `to do`. Nenhum motor de entrada de lead rodando. |
| **Cobrança** | C | Bravo R$975 cobrado ✅. Jean e Voltrucks (R$6k) seguem parados. |
| **Execução técnica do time** | A | Victor entregou muito além do escopo. Lucas ativo em Maqlam/Morgana. Hugo travado por terceiros, não por capacidade. |

---

## Diagnóstico estratégico (o que os números não dizem sozinhos)

**1. Não temos um problema de capacidade. Temos um problema de alocação.**
A semana provou que o time entrega com força quando foca. O problema é *onde* o foco cai: 100% no urgente do cliente (Maqlam API oficial), 0% no importante-não-urgente (vender, conteúdo, backlog de features simples). Isso não é falha individual do Lucas — é ausência de um mecanismo que proteja o importante da tirania do urgente.

**2. O caso "feature de 1 dia que levou 2 meses" é o sintoma mais grave da semana — e quase passou batido.**
RAG + catálogo Maqlam: anotado em 03/04, vencimento 24/04, entregue em 29/05. Execução real: ~1 dia. Dois meses parado não por dificuldade técnica, mas porque sempre teve algo "mais urgente". Isso é um vazamento sistêmico de valor: estamos deixando dinheiro e capacidade na mesa por falta de priorização ativa do backlog. Se isso acontece com uma feature, acontece com a prospecção — e é exatamente o que está acontecendo.

**3. Concentração de risco no Victor.**
A semana inteira de produto passou por uma pessoa. Maqlam, Morgana, ReabilitaCão, Content Studio, financeiro — tudo Victor. Isso é força agora e fragilidade estrutural: o motor técnico da empresa é single-point-of-failure. Hugo está subutilizado (travado por bloqueios de cliente), Lucas foi sugado pra operação.

**4. A saúde dos clientes está mascarando a saúde do negócio.**
4 de 5 verdes parece ótimo — e é, operacionalmente. Mas todos são base instalada. Morgana depende do Matheus voltar a falar (18d de silêncio); Bravo pode encerrar; nenhum cliente *novo* entrou em 3 semanas. Carteira verde + funil vazio = empresa que parece saudável e está estagnada.

---

## Riscos por gravidade

1. 🔴 **Estagnação de receita** — sem venda nova e no break-even, qualquer churn (Bravo sair, Morgana esfriar) nos joga no vermelho. Janela de tolerância: curta.
2. 🔴 **Comercial sem dono efetivo** — o Lucas é comercial no organograma e operador na prática. Enquanto for assim, a prospecção nunca acontece.
3. 🟡 **Dependência do Victor** — o produto não escala além da banda de um humano.
4. 🟡 **Bravo refém do cliente** — duplo bloqueio (créditos OpenAI + Gustavo). Risco de virar prejuízo de tempo + reputação.
5. 🟡 **Backlog de alto-valor/baixo-esforço invisível** — features que pagariam a si mesmas dormindo por meses.

---

## Decisões que eu tomaria como CEO (esta semana)

1. **Blindar tempo comercial de forma inegociável.** Lucas: 2 blocos fixos/dia de prospecção que NENHUMA urgência de produto invade. Se Maqlam pegar fogo, é o Victor/Hugo que apagam — não o comercial. Sem isso, a 4ª semana de R$0 é certa.
2. **Tirar a operação Maqlam das costas do Lucas.** Migrar acompanhamento de cliente/operação pro Hugo (que está com folga forçada por bloqueios do Bravo). Libera o Lucas pra função dele.
3. **Instituir "drenagem de backlog" semanal.** 1 slot fixo/semana pra matar features de baixo esforço paradas >2 semanas. O caso dos 2 meses não pode repetir.
4. **Decidir o Bravo com prazo, não com esperança.** Definir uma data-limite para os bloqueantes do Gustavo. Se não destravar até lá, escalar formalmente (cobrança de decisão por escrito) ou congelar o projeto — parar de sangrar tempo do Hugo.
5. **Conteúdo: parar de produzir roteiro e começar a publicar.** 17 prontos. Definir 1 responsável por gravação esta semana ou terceirizar edição. Roteiro sem publicação é custo afundado.
6. **Forçar `/salve` + ClickUp atualizado.** Metade da retrospectiva quase saiu errada porque Lucas/Hugo não registram. Sem dado confiável, eu (CEO) decido no escuro.

---

## A pergunta que define a Semana 23

Não é "conseguimos entregar?". Já sabemos que sim.
É: **"a Eloscope é capaz de transformar uma semana de R$0 em venda — ou só sabe operar o que já vendeu?"** A resposta dada nas próximas duas semanas vale mais que qualquer entrega técnica.

---

## Quem eu acionaria do C-Level

- **`@cso`** — desenhar o sprint de recuperação comercial (meta, cadência, script) e a estrutura mínima de funil que destrava as ~25 tasks paradas.
- **`@cmo-architect`** — plano de publicação dos 17 Reels + 1 motor orgânico de aquisição que não dependa de prospecção 1:1.
- **`@coo-orchestrator`** — redistribuir alocação (tirar operação do Lucas, dar pro Hugo) e instituir o ritual de drenagem de backlog.

> **Próximo passo sugerido:** rodar `@cso` sobre o bloco comercial desta weekly para sair com um plano de Semana 23 acionável, não só com a intenção de "voltar a vender".
