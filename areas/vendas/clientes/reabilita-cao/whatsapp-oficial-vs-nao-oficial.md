---
tipo: documento-cliente
cliente: ReabilitaCão
data: 2026-05-22
autor: Victor (Eloscope)
assunto: API Oficial vs Não Oficial — WhatsApp
status: rascunho
---

# WhatsApp Oficial vs Não Oficial — O que muda para a ReabilitaCão?

> Documento preparado após a reunião de 22/05. Objetivo: ajudar a Fran e a Cris a tomar a decisão com clareza sobre como a Maya vai disparar as mensagens.

---

## O que está acontecendo hoje

Hoje a Maya envia as mensagens pelo **celular da Nath** — um número de WhatsApp pessoal/business comum, sem autorização formal da Meta. Isso funciona, mas tem riscos que valem considerar conforme o volume cresce.

---

## Como o fluxo de mensagens vai funcionar

Independente da opção escolhida, o fluxo que a clínica quer implementar é este:

```
Dia anterior ao agendamento
  └─ Lembrete 1 → cliente confirma?
       ├─ SIM → encerra
       └─ NÃO confirma → Lembrete 2 (algumas horas depois)
            └─ Ainda não confirmou → Lembrete 3 (último)

Dia seguinte à consulta
  └─ Pós-consulta → "como foi?" + link avaliação Google
```

Cada agendamento pode gerar entre **1 e 4 mensagens** dependendo de quando o cliente confirma.

---

## Como a Meta cobra (API oficial)

A Meta cobra por **conversa iniciada**, não por mensagem. E há um detalhe importante:

**A janela de 24h gratuita só abre se o cliente responder.**

- Maya manda o 1º lembrete → **template cobrado** (1 conversa)
- Cliente responde → janela de 24h abre → mensagens seguintes gratuitas
- Cliente **não responde** → para o 2º lembrete precisa de novo template → **outra conversa cobrada**
- Mesmo para o 3º lembrete se o cliente ainda não respondeu → mais uma cobrança

```
Lembrete 1 → template (cobrado)
  ├─ Cliente responde → janela aberta → sem custo extra
  └─ Silêncio → Lembrete 2 → template (cobrado novamente)
       ├─ Cliente responde → janela aberta → sem custo extra
       └─ Silêncio → Lembrete 3 → template (cobrado novamente)

Dia seguinte → Pós-consulta → template (cobrado)
```

| Tipo de mensagem | Categoria Meta | Custo por conversa |
|------------------|---------------|-------------------|
| Lembrete de agendamento | Utility | ~$0,008 USD (~R$ 0,040) |
| Pós-consulta / avaliação | Utility | ~$0,008 USD (~R$ 0,040) |
| Resposta dentro da janela de 24h | Service | **Gratuito** |
| Campanha de marketing / reativação | Marketing | ~$0,0625 USD (~R$ 0,32) |

> Câmbio de referência: US$ 1 = R$ 5,04 (22/05/2026). A Meta cobra em dólar — o valor em reais varia com o câmbio.

---

## As três opções

### Opção A — Continuar tudo no não oficial (como está hoje)

Maya continua disparando tudo pelo celular da Nath, sem custo extra.

**Custo:** R$ 0

**Vantagens:**
- Sem custo adicional por mensagem
- Zero mudança agora

**Riscos:**
- A Meta pode **bloquear o número sem aviso** se detectar disparos automáticos em volume — é contra os termos de uso
- Com o crescimento do volume (lembretes + pós-consulta chegando a ~100 msgs/dia), o risco de bloqueio aumenta significativamente
- Se bloqueado: clínica para de receber confirmações, clientes ficam sem lembrete, retrabalho de reconfiguração
- Sem relatório de entrega — não dá pra saber se a mensagem chegou

---

### Opção B — 100% API Oficial

A clínica contrata um número oficial verificado pela Meta. Maya dispara **tudo** por esse número: lembretes, pós-consulta e campanhas de marketing.

**Custo estimado** (base: ~18 agendamentos/dia útil, ~396/mês):

| O que envia | Conversas/mês | Custo |
|-------------|---------------|-------|
| Lembretes + pós-consulta | ~792 | ~R$ 32/mês |
| Crescimento (~22/dia) | ~968 | ~R$ 39/mês |
| + campanha marketing 500 contatos (trimestral) | +500 | +R$ 160 por campanha |

> Cálculo: 1,5 conversas de lembrete por agendamento (média ponderada do fluxo de 3) + 0,5 de pós-consulta (metade dos clientes já na janela aberta = gratuito). Total: ~2,0 conversas/agendamento × R$0,040.

**Vantagens:**
- **Número nunca é bloqueado** — autorizado pela Meta para disparos automáticos
- Escala sem risco: 20, 100, 500 msgs/dia
- Relatório de entrega completo
- Pode ter ícone de verificado ✓ — mais confiança para o cliente
- Um número único para tudo

**Desvantagens:**
- Custo por mensagem (~R$32–39/mês operação, +R$160 por campanha de marketing)
- Templates precisam ser aprovados pela Meta (texto não pode ser totalmente livre — aprovamos uma vez e reutilizamos)
- ~3–5 dias úteis para configurar e aprovar o número

---

### Opção C — Híbrido (recomendada)

API oficial **apenas para lembretes e pós-consulta** (número da Nath migrado com coexistência). Campanhas de marketing em um **número separado não oficial** — mantém o número da Nath protegido.

**Custo estimado:**

| Fase | Custo |
|------|-------|
| Lembretes + pós-consulta (API oficial, utility) | **~R$ 32–39/mês** |
| Campanhas de marketing (número não oficial da Nath) | **R$ 0** |
| **Total mensal** | **~R$ 32–39/mês** |

**Por que faz sentido?**

O risco de bloqueio no não oficial é diretamente proporcional à **frequência e volume** dos disparos. Dois cenários bem diferentes:

- **Lembretes diários** → disparo contínuo, todos os dias, crescendo → risco alto → API oficial resolve
- **Campanha de marketing** → rara (1x a cada 3 meses), janela curta de envio → risco pontual e aceitável → não oficial funciona

Além disso, o custo de campanha na API oficial (~R$160 por vez) pode não compensar dependendo do retorno da campanha.

**Vantagens:**
- Operação diária protegida — nunca para
- Custo de campanha zero
- Celular da Nath continua funcionando normalmente (ver seção abaixo)

**Desvantagem:**
- Risco pontual de bloqueio durante campanhas de marketing (aceitável dado a raridade)

---

## O que a Eloscope recomenda

**Opção C — Híbrido.**

Protege o que importa (operação diária: lembretes + pós-consulta) com API oficial, e mantém campanhas raras no não oficial onde o custo na oficial não compensa e o risco é pontual e gerenciável.

---

## Como fica o celular da Nath?

**Não muda nada para a Nath.**

A API oficial usa o **mesmo número da Nath** com **coexistência** — o app do celular continua funcionando normalmente ao mesmo tempo que a Maya dispara as mensagens automáticas pela API.

- Nath continua recebendo e respondendo clientes pelo app, como hoje
- Maya passa a disparar lembretes pelo mesmo número, via API oficial
- Os dois coexistem sem conflito

**Resumindo:**
- Mesmo número da Nath → Maya dispara lembretes automaticamente (API oficial) + Nath atende pelo app normalmente

---

## Próximos passos se a Fran quiser avançar com a Opção C

1. Eloscope migra o número da Nath para a API oficial com coexistência (~3–5 dias úteis)
2. Aprovamos juntos o template de confirmação e pós-consulta
3. Maya passa a disparar lembretes e pós-consulta pelo número da Nath via API — celular da Nath continua funcionando normalmente
4. Para campanhas de marketing: usamos um **número separado não oficial** (novo chip/número) — mantém o número da Nath limpo e sem risco durante os disparos de campanha

---

## Dúvidas frequentes

**"O número oficial também pode ser bloqueado?"**
Sim, tem risco — só que é um cenário diferente. O número não oficial pode ser bloqueado a qualquer momento por uso indevido da plataforma (disparos automáticos sem autorização). O número oficial pode ser suspenso se a clínica violar as políticas da Meta: templates com conteúdo proibido, alto índice de bloqueio por parte dos clientes, ou uso fora das regras. São riscos gerenciáveis, mas existem — e exigem atenção ao conteúdo das mensagens e ao comportamento dos clientes.

**"Quanto tempo leva para configurar?"**
Depende de alguns fatores que precisamos verificar antes de dar uma estimativa precisa:

- A clínica já tem conta no Meta Business configurada ou precisa criar do zero?
- Os fluxos atuais da Maya (que rodam no não oficial) precisam ser adaptados para funcionar com templates aprovados pela Meta — isso leva tempo de desenvolvimento e testes
- A Meta tem um processo de aprovação de templates que pode levar de alguns dias a mais de uma semana dependendo do conteúdo e do histórico da conta

Ou seja: **não é só migrar o número** — é um processo de adaptação técnica + aprovação da Meta. A Eloscope precisa fazer um levantamento antes de passar um prazo real para a clínica.

**"Os clientes vão receber as mensagens igual a antes?"**
Sim. Como é o mesmo número da Nath com coexistência, para o cliente não muda nada — as mensagens continuam chegando do mesmo contato que eles já conhecem.

---

*Preparado por Victor — Eloscope · 22/05/2026*
*Dúvidas: WhatsApp/email direto com o Victor*
