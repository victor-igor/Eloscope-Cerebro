---
tipo: reuniao
subtipo: interna
data: 2026-04-02
duracao_min: 155
participantes: [Lucas Negreiro, Victor Igor]
fonte: fathom
fonte_id: 134910852
fonte_url: https://fathom.video/calls/623232975
tags: [reuniao, interna, trimestral, estrategia, pivot]
contexto: trimestral-q1
status: processada
---

# Reunião Trimestral Q1 — Pivot Strategy — 2026-04-02

> 📅 2026-04-02 · ⏱ ~155 min · 👥 Lucas, Victor
> 🔗 [Gravação](https://fathom.video/calls/623232975)

> [!info] Relação com [[2026-04-17-sprint-pivot-consulting]]
> Esta reunião **antecede em 15 dias** o Sprint Planning de 17/04 e é a **origem intelectual** do pivot consultoria/educação. Tudo que foi decidido no Sprint de 17/04 (foco em consultoria, IA como braço e não como produto, mensalidade menor + serviço agregado, Cloud Code como meio) já estava sendo verbalizado aqui. O Sprint apenas operacionalizou.

## Pauta

1. **Revisão financeira Q1** — saldo, mensalidades, faturamento, painel financeiro Supabase.
2. **Auditoria do plano trimestral** (definido fim de dezembro/janeiro): o que foi feito vs. o que ficou pendente.
3. **Diagnóstico**: por que o ciclo de implantação está longo e por que o modelo atual (entregar sistema/IA no WhatsApp) trava o crescimento.
4. **Pivot estratégico**: discussão aberta sobre mudar o modelo de entrega — sair da entrega de software/IA pronta e ir para **consultoria + educação + agentes Cloud Code prontos**.
5. **Estudos de mercado**: G4, Kelvin, Lialto, Marcelo Cello (cello.ia / Coda), Bruno Okamoto, Alan Nicholas (IOX), OpenCloud — referências de como vender no novo modelo.
6. **Próximos passos**: planejar formato e validar como vender na semana seguinte.

## Discussão

### 1. Revisão financeira (00:00–17:00)

- Painel financeiro no Supabase ainda com falhas de RLS — Victor estava puxando dados com permissão limitada; Lucas aumentou nível e dados começaram a aparecer.
- **Saldo atual ~R$ 18 mil**, mas dados estão incompletos (saídas de 2025 não lançadas, projetos novos sem entrada).
- **Faturamento Q1**: nem R$ 30 mil em entrega nova; **só R$ 20 mil de coisa vendida nova** este ano.
- Mensalidades: 3 ativas, 2 pagas (terceira é Denis Lires, não pagou).
- **Implantações fixas Q1**: praticamente nenhuma fechada — Gian e Morgana ainda em execução.
- Indicações: 18+ recebidas, mas em segmentos diversos — **não verticalizamos**.
- Outbound não está rodando.

### 2. Auditoria do trimestral (17:00–20:00)

Plano de Dez/Jan tinha:
- Promessa: **ser referência em IA para negócios** num segmento específico.
- Pilares definidos (SaaS + Educação + Serviço, Equity, Recorrência, Comunidade, Mensalidade, Follow-up, Implantação).
- Tarefas pendentes acumuladas: refinar 5 conteúdos, 5 Instagram, otimizar comissão/indicação, organizar processos de entrega, 8 reuniões de discovery, finalizar projetos 2025, organizar comercial.
- **Conclusão:** quase nada do trimestral foi cumprido. Faturamento baixo, sem verticalização, conteúdo intermitente, processos ainda não rodando 100%.

### 3. Diagnóstico crítico — por que trava (20:00–35:00)

**Victor:**
- Manutenção em mensalidade até fecha conta, mas **implantação está muito longa** (Fran já tem 5 meses e ainda em teste).
- Ciclo: dev interno → teste interno → teste usuário → GoLive → atenção redobrada → manutenção infinita.
- IA no WhatsApp é especialmente sensível: depende do cliente testar/responder, lida com número principal da empresa, qualquer erro (preço, endereço, nome) cai sobre nós, mesmo com contrato.
- Diferente de IA num sistema interno (ex.: leitura de exames da Fran) — onde se cair, resolve em 3h sem crítica.

**Lucas:**
- Mexer com APIs (Asaas, Pagarme, Meta, WhatsApp não-oficial) é dor de cabeça permanente — todas mudam estrutura sem aviso.
- A entrega atual está 100% software/sistema. Falta **braço de consultoria/educação** que dilua imposto, agregue serviço, gere autoridade.
- Insight central: **estamos entregando ferramenta, mas a proposta deveria ser resultado/processo**. A IA é braço, não entrega final.

### 4. Pivot — o novo modelo (35:00–1:30:00)

**Tese central (Lucas):**
> "A entrega tem que ser o resultado que a gente gera, não o sistema. Entregar consultoria/mentoria/educação para um segmento — não fugir do modelo, mas **simplificar ao máximo**. Curso de IA aplicado ao segmento. A gente sabe de IA; do segmento, aprende junto. Só essa postura já diferencia."

**Argumentos a favor:**
- Modelo de negócio do cliente pode mudar em 6 meses (Fran, Voltrucks). Se travamos no software dela, viramos refém. **Serviço/consultoria acompanha a mudança**.
- Quando se promete resultado, depende do cliente aplicar — **não está no nosso controle**. É melhor ajustar a proposta de valor para vender meios + processo, não resultado bruto.
- Site (entrega passada) gerava margem maior que social media — porque era estruturado, processo padrão. Social media virava prestação infinita.
- Caso Voltrucks: muito esforço, retorno pelo ralo. Caso Matheus (Maqlam): simples, ROI alto — porque ele aplica e documenta.

**Modelo proposto:**
1. **Comunidade + curso de Cloud Code aplicado** (formato Kelvin, Lialto, Cello.ia/Coda, Bruno Okamoto).
2. **Agentes prontos** (CEO, CSO, Copy, Tráfego, Design — semelhante ao squad que Victor montou no IOX) — vendidos como "funcionários IA".
3. Cliente compra o **acesso/processo**, instala Cloud Code no servidor dele (Hostinger/Render), paga as ferramentas dele mesmo. Eloscope dá direcionamento + skills + base de conhecimento + aulas gravadas.
4. **Lançamento por tempo** (6 meses de acesso) em vez de mensalidade pura — caixa rápido.
5. Ticket inicial: ~R$ 2-5 mil; mensalidade complementar 2-4 mil para suporte; pode escalar para 12k-20k em ICP corporativo (referência G4: 45 mil de sistema é "barato" para empresa que fatura 20mi/ano).

**Ressalvas:**
- Não cair na promessa "IA que vende sozinha" (mesmo erro do mercado).
- Não nichar travado de início — testar amplo, depois verticalizar (mercado de patch foi mencionado como possibilidade).
- Conteúdo precisa ser simples/diário (modelo Adib, G4, Cello) — não roteiro elaborado.
- Repassar trabalho técnico para parceiros (ex.: Yuri) só em modelo de comunidade/network — não responsabilizar Eloscope pela entrega final deles.

### 5. Visão técnica (1:30:00–2:30:00)

- **Cloud Code substitui interface**: cliente fala via voz/texto, não precisa de UI complexa. WhatsApp/Telegram + Cloud Code resolvem 80% dos casos.
- Skills do Cloud Code (ClickUp, Supabase, dispatch, Telegram plugin oficial) já permitem montar produto sem dev pesado.
- **Sistema "obsoleto" no sentido tradicional** — dados em estruturas mais simples (CSV, hybrid search, Obsidian) permitem que a IA consulte rápido sem UI.
- Caso Matheus: ele já manda mensagens de madrugada para a Maia querendo conversar com IA pelo WhatsApp — desejo claro do mercado.
- Referência Blue Saúde: agentes (CEO, CSO) que conversam entre si e com o operador.

## Decisões tomadas

1. **PIVOT confirmado** — sair do modelo "entregar sistema/IA pronta no WhatsApp" e ir para **consultoria + educação + agentes Cloud Code**.
2. **A IA é braço, não produto final** — proposta passa a ser processo/resultado, não ferramenta.
3. **Cliente paga as próprias ferramentas** (Cloud Code, Hostinger/servidor) — Eloscope vende o caminho + skills + agentes prontos.
4. **Formato de venda inicial**: lançamento com 6 meses de acesso, comunidade + aulas gravadas + agentes prontos + suporte proativo.
5. **Não nichar travado** — testar amplo (empresários e clientes finais via agências); pode segmentar depois (mercado de patch foi candidato).
6. **Estudar referências antes do próximo encontro**: Cello.ia (Coda), Bruno Okamoto, Alan Nicholas (IOX), G4, OpenCloud, Lialto.
7. **Conteúdo precisa subir de frequência** — modelo "dia a dia gravado" (Adib, G4, Cello), não vídeos elaborados.

> ⚠️ Decisões propagadas para `memory/context/decisoes/2026-04.md` (a confirmar) e materializadas no Sprint Planning de [[2026-04-17-sprint-pivot-consulting]].

## Action Items

| # | Ação | Responsável | Prazo | ClickUp |
|---|------|-------------|-------|---------|
| 1 | Estudar como Cello.ia/Coda, Bruno Okamoto e Alan Nicholas (IOX) entregam o modelo de agentes/comunidade | Lucas + Victor | Sábado 05/04 (manhã) | — |
| 2 | Definir formato de entrega inicial (curso? comunidade? lançamento?) e desenhar funil | Lucas | Sábado 05/04 | — |
| 3 | Pesquisar como G4 vende os agentes (entrar no funil deles) | Lucas | Q2 | — |
| 4 | Criar squad de agentes prontos (CEO, CSO, Copy, Tráfego, Design) — base do que será vendido | Victor | Q2 | — |
| 5 | Corrigir RLS do painel financeiro Supabase + lançar saídas 2025 e entradas faltantes | Victor | Q2 | — |
| 6 | Validar integração Cloud Code → WhatsApp (envio + recepção) e Telegram plugin oficial | Victor | Q2 | — |
| 7 | Testar entrega proativa (skill rodando trigger diária) — modelo de "agente vivo" | Lucas | Q2 | — |
| 8 | Começar a produzir conteúdo dia-a-dia no Instagram (modelo Cello/Adib) | Lucas | contínuo | — |

## Bloqueios / Riscos

- **Risco de migração**: clientes atuais (Fran, Maqlam, Morgana) foram vendidos no modelo antigo (sistema/IA). Migrar para o novo modelo sem quebrar contratos.
- **Risco de proposta**: cair na mesma promessa do mercado ("IA que vende sozinha") e perder diferenciação.
- **Risco de cobrança**: se a pessoa não aplicar, ela cancela mesmo sem promessa de resultado — preciso de funil de ativação forte.
- **Risco técnico**: Cloud Code recebe mensagens via WhatsApp? (Victor não tem certeza — testar). Plano Cloud Code Pro suficiente? Limite de tokens vai bater?
- **Risco de comunidade**: virar "comunidade lendária" genérica — a posicionar diferente.
- **Risco de ICP**: empresário 40+ não consome conteúdo de "menino youtuber" (perfil Cello). Se for esse o ICP, precisa de outro tom.

## Próximos Passos

1. Encontro **sábado 05/04 de manhã** para fechar formato.
2. **Validar venda em 1 semana** — testar lançamento com aula/conteúdo simples.
3. Sprint Planning subsequente em 17/04 ([[2026-04-17-sprint-pivot-consulting]]) — operacionalização do que foi decidido aqui.

---

## Transcrição Completa

> Transcrição com timestamps disponível na gravação Fathom: https://fathom.video/calls/623232975
>
> Resumo dos blocos temporais:
>
> - **00:00–17:00** — Revisão financeira (RLS Supabase, saldo, faturamento Q1, mensalidades).
> - **17:00–20:00** — Auditoria do plano trimestral (Dez/Jan).
> - **20:00–35:00** — Diagnóstico: por que ciclo de implantação está longo, sensibilidade de IA no WhatsApp, dor de APIs.
> - **35:00–1:00:00** — Tese do pivot: IA como braço, entrega como processo/resultado, modelo Kelvin/G4.
> - **1:00:00–1:30:00** — Aprofundamento: ICP, perfil cliente (Matheus vs. Voltrucks vs. Denis), comunidade.
> - **1:30:00–2:00:00** — Visão técnica: Cloud Code, skills, dispatch, Telegram plugin, agentes autônomos.
> - **2:00:00–2:30:00** — Estudos de referência: Cello.ia/Coda, Bruno Okamoto, Alan Nicholas, OpenCloud, G4, Lialto.
> - **2:30:00–fim** — Próximos passos e marcação de sábado.
>
> Trecho-chave (1:30:14): *"Então é meio que o céu é o limite, né? Pô, então, a gente não usa muito o Hybrid Search. A gente pode continuar só otimizando isso, só essa parte. Deixar a estrutura pronta para o cliente. A gente ensina ele a criar o Hybrid Search dele."*
>
> Trecho-chave (2:21:18): *"Pô, Vitor, com certeza, com certeza dá pra cobrar 5 mil tranquilo."*
>
> Trecho-chave (1:55:00): *"Ah, ele que vai pagar as ferramentas e tudo. Ele vai pagar a ferramenta, ele vai trazer as ferramentas, ele vai ver o que ele precisa. O que a gente vai fazer é fazer uma cobrança proativa."*
