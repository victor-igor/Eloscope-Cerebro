# Proposta — Bravo Agency · Automação do Ciclo de Conteúdo

> Co-construção: Eloscope orienta, Rafael e Javi constroem. Equipe sai com propriedade total do sistema.

---

## Por que faz sentido para a Bravo

Com base na reunião de 20/04/2026, o Gustavo quer:
1. **Ver funcionando rápido** — resultado em semanas, não meses
2. **Equipe dona do sistema** — "a ideia é você criar e a gente operar"
3. **Co-construção** — Rafael e Javi aprendem construindo, não só assistindo

A proposta entrega os dois: nos primeiros passos Eloscope orienta ao vivo enquanto Rafael e Javi constroem — eles terminam o projeto sabendo expandir sozinhos para novos processos e novos clientes.

---

## O que será automatizado

O ciclo mensal de conteúdo da Bravo para 20 clientes — do dia 1 ao aprovação final:

| Módulo | O que faz | Ferramenta |
|--------|-----------|------------|
| **1 — Análise** | IA analisa dados do mês anterior + ativos do cliente (site, branding) e gera relatório | OpenClaw + Segundo Cérebro |
| **2 — Planejamento** | IA elabora plano de conteúdo baseado na análise para revisão interna | OpenClaw |
| **3 — Aprovação + Envio ao cliente** | Plano aprovado é enviado ao cliente com lembretes automatizados | n8n (WhatsApp / email) |
| **4 — Criação** | Plano aprovado dispara tarefas de design e copy com IA | OpenClaw |
| **5 — Aprovação final** | Cliente aprova o criativo final antes da publicação | n8n |

**Por que n8n para comunicação com cliente:** o OpenClaw conecta a sistemas internos (Google Drive, banco de dados, Segundo Cérebro) — não é seguro expor isso ao cliente diretamente. O n8n fica na frente, como camada exclusiva de comunicação externa.

---

## Stack

| Ferramenta | Função |
|------------|--------|
| **OpenClaw** | Plataforma central — IA analisa, planeja e cria de forma autônoma |
| **n8n** | Comunicação com cliente — envio de planos, coleta de aprovações, lembretes |
| **GitHub** | Versionamento — nada se perde, equipe colabora |
| **Vercel** | Publicação web — landing pages e relatórios gerados automaticamente |
| **Segundo Cérebro da Bravo** | Memória persistente — IA conhece cada cliente antes de qualquer sessão |

---

## Como funciona

### Fase 1 — Fundação (semanas 1–3)
*Eloscope orienta. Rafael e Javi constroem ao vivo.*

**Semana 1 — Infraestrutura + Segundo Cérebro**
- Kick-off: mapeamento do ciclo real da Bravo + definição dos 3 clientes piloto (2h)
- Rafael e Javi instalam e configuram: OpenClaw + GitHub + Vercel (com orientação ao vivo)
- Rafael e Javi montam o Segundo Cérebro da Bravo: identidade da agência + perfil dos 3 clientes piloto

**Semana 2 — Módulo 1: Análise**
- Rafael e Javi constroem ao vivo a automação de análise de cliente (dados do mês + ativos → relatório)
- Teste com 3 clientes reais da Bravo

**Semana 3 — Módulo 2: Planejamento de conteúdo**
- Rafael e Javi constroem a automação de planejamento integrada à análise
- Teste com os mesmos 3 clientes

**Resultado ao final da Fase 1:** Segundo Cérebro + análise + planejamento funcionando para 3 clientes reais

---

### Fase 2 — Ciclo Completo (semanas 4–8)
*Rafael e Javi lideram. Eloscope acompanha e revisa.*

| Semana | Módulo | Quem constrói |
|--------|--------|---------------|
| 4 | Módulo 3: Aprovação interna + envio ao cliente (n8n) | Javi + orientação |
| 5 | Módulo 3: Lembretes automatizados + rastreamento de status | Javi |
| 6 | Módulo 4: Criação — tarefas de design/copy disparadas pelo plano aprovado | Rafael + orientação |
| 7 | Módulo 5: Aprovação final do cliente via n8n | Javi |
| 8 | Integração ponta a ponta: ciclo completo rodando para 3 clientes piloto | Rafael + Javi |

---

### Fase 3 — Escala + Operação Autônoma (semanas 9–12)
*Equipe opera sozinha. Eloscope disponível para dúvidas.*

| Semana | Foco |
|--------|------|
| 9 | Agendamento no OpenClaw: ciclo roda sozinho no Dia 1 de cada mês |
| 10 | Controle de custo de tokens + otimização do Segundo Cérebro |
| 11 | Expansão: adicionar mais 3 clientes ao sistema |
| 12 | Revisão final (1h): Eloscope aponta melhorias + handoff completo |

**Resultado ao final da Fase 3:** ciclo mensal completo rodando de forma autônoma para todos os clientes da Bravo, com Rafael e Javi capazes de expandir para novos contextos sem ajuda externa.

---

## O que o Gustavo não precisa fazer

- Não precisa aprender a programar
- Não precisa estar em todas as sessões
- Rafael e Javi participam das sessões operacionais

**Gustavo participa apenas:**
- Kick-off (2h — semana 1)
- Check-in ao final de cada fase (30 min)

---

## Cronograma visual

```
Sem 1       ████ Infraestrutura + Segundo Cérebro da Bravo
Sem 2–3     ████ Módulos 1 e 2: Análise + Planejamento
Sem 4–5     ████ Módulo 3: Aprovação interna + envio ao cliente (n8n)
Sem 6–7     ████ Módulos 4 e 5: Criação + Aprovação final
Sem 8       ████ Ciclo completo integrado e testado
Sem 9–12    ████ Escala, otimização e operação autônoma
```

---

## Investimento

```
Pagamento único:     R$5.500
Parcelado:           R$1.500 entrada + R$1.300/mês × 3 meses  (= R$5.400)
```

---

## Garantia

> "Se ao final da Semana 3 o Módulo de Análise não estiver funcionando com os 3 clientes piloto definidos no kick-off, continuamos as sessões sem custo adicional até entregar."

---

## Mensagem de WhatsApp para o Gustavo

```
Gustavo, como combinamos — montei a proposta.

A ideia é exatamente o que você falou: a Eloscope orienta, 
o Rafael e o Javi constroem. No final vocês são donos do sistema 
e sabem expandir sozinhos.

O que vamos construir juntos:

✅ Semana 1: infraestrutura completa + Segundo Cérebro da Bravo 
   (Rafael e Javi instalam e montam com a gente do lado)
✅ Semanas 2–3: análise de cliente + planejamento de conteúdo 
   funcionando para 3 clientes reais
✅ Semanas 4–8: ciclo completo — aprovação interna, envio ao cliente, 
   criação, aprovação final — tudo automatizado
✅ Semanas 9–12: sistema rodando sozinho, Rafael e Javi escalando 
   para novos clientes sem precisar de ninguém

Ao final: ciclo mensal de conteúdo para 20 clientes rodando no piloto automático.

Investimento: R$5.500 único (ou R$1.500 agora + R$1.300/mês por 3 meses).

Quando você tem 30 minutos essa semana para alinhar com o Rafael e o Javi?
```

---

*Atualizado: 21/04/2026 — baseado na reunião de discovery de 20/04/2026*
