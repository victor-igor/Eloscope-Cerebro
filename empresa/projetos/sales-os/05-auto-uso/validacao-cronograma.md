# Validação de Cronograma — Eloscope (self-client 01, dogfooding)

**Arquivo analisado:** `docs/clientes/eloscope-self/cronograma.md`
**Data da análise:** 2026-04-19
**Rota declarada:** 2
**Pacote declarado:** Beta (simulado — sem transação financeira)
**Camada 7 declarada:** 7B (Agente SDR em n8n + OpenClaw como orquestrador interno)

## Veredito

**APROVADO COM RESSALVA**

A sequência das 9 etapas está correta, o Gate (M6) existe como marco explícito com ata antes de qualquer barra de 7B, a stack está coerente com a v1.0 (n8n na ação com cliente final, OpenClaw como orquestrador interno, Supabase, WABA oficial, sem dashboard web, CRM próprio Eloscope), e a duração total de 6 semanas está **dentro** da faixa canônica 5-8 semanas — inclusive é o limite inferior esperado para rota 2, não uma compressão abaixo do padrão como o próprio doc se auto-descreve. Os pontos de atenção são riscos operacionais, não violações de metodologia.

## Violações duras (bloqueiam avanço)

— nenhuma encontrada.

## Riscos soft (sinalizar, não bloquear)

- **[Bloco B] Gate de 1 dia** — a faixa canônica é 2-5 dias porque inclui possível iteração após devolutiva. Como o Gate é interno (Lucas + Victor), o tempo de iteração pode ser curto, mas reservar só 14/05 sem buffer para ajustes deixa o Go/No-go sem espaço pra "Not yet". Em Beta externo isso seria violação; aqui é risco de rito.

- **[Bloco B] Etapa 2 em 1 dia (Caminho A)** — a faixa canônica é 3-7 dias. O doc justifica pelo auto-conhecimento ("dados estão na cabeça do time"). Auto-conhecimento tende a produzir dataset incompleto — o Caminho A existe para forçar disciplina documental que o cérebro humano pula. Risco: dataset M2 raso enviesa Etapa 3 inteira.

- **[Bloco B] Etapa 3 em 5 dias vs. 10-14 dias canônicos de rota 2** — a justificativa (VPC Q2 já existe em `Planejamento/VPC_Detalhado_Eloscope_5Quadrantes.md`) é válida. Mas a Etapa 3 rota 2 exige "Processo-Base Proposto" completo, não só benchmark. Se o processo-base de venda Sales OS Q2 não estiver documentado em 01/05, a compressão engole o próprio entregável.

- **[Bloco D] WABA no caminho crítico com folga apertada** — 20/04 + 10 dias úteis = ~04/05 como otimista. Meta costuma demandar 7-15 dias úteis na prática para aprovação de template e número. M7 em 27/05 dá ~3 semanas de buffer, o que é saudável, mas o doc marca dep1 como `crit` e não tem plano B documentado (número interino? provider intermediário?). Se WABA passar de 15/05, 7B slipa e o M7.5 (5 Beta fechados) também.

- **[Bloco F] M7.5 "5 Beta slots fechados" dentro do mesmo cronograma** — esse marco é KPI comercial da Eloscope, não entregável do Sales OS aplicado à Eloscope. Mistura dois escopos (motor comercial sendo construído + execução comercial usando o motor ainda em construção). Defensável como dogfood radical, mas se slipar, confunde diagnóstico do que falhou: processo ruim ou timing de venda ruim?

- **[Bloco F] Dev multi-tenant do CRM próprio subestimado** — dep2 marca "Tenant 'eloscope-self' no CRM" em 2 dias. A v1.0 diz "7 dias de dev uma vez" para sair de single-tenant. Se o CRM ainda é single-tenant em 20/04, os 2 dias de dep2 não cobrem. Se já está multi-tenant, ok — o cronograma não declara qual é o estado atual.

- **[Bloco E] Camada 7 pré-declarada no topo do doc** — linha 8 já fixa "7B". O Gate deve ser o momento da decisão formal, não confirmação de escolha prévia. Para self-client é aceitável (o "consultor" e o "cliente" são o mesmo time, a pré-escolha é natural), mas documentar como "hipótese a ser validada no Gate" em vez de decisão travada protege o rito. Não é violação porque M6 explicita "decisão 7B confirmada" — a formalização acontece.

- **[Bloco F] Proposta comercial e contrato como dependências em 01/05** — seção 4 marca ambos como "A criar — bloqueante pros Beta slots". Isso é Etapa 0 (pré-venda) dos Beta externos, não parte do Sales OS da Eloscope. Inclui dois escopos no mesmo cronograma sem separar linha. O doc reconhece o problema mas não propõe marco próprio.

## Sugestões de ajuste

- Reservar 2-3 dias para o Gate (ex.: 13-15/05) em vez de 1 dia, com dia 15 como buffer formal de iteração. Mesmo que não seja usado, o rito fica mais próximo do canônico.

- Estender Etapa 2 para 2-3 dias (24-28/04) e usar o Caminho A completo (25 campos estruturados), mesmo que Lucas + Victor preencham "sabendo de cor". Dataset escrito vira evidência M2 e vira template de Formulário A para Beta externo.

- Declarar explicitamente no estado atual das dependências: CRM multi-tenant está pronto ou ainda é single-tenant? Se single-tenant, dep2 precisa virar 7 dias de dev e puxar M2 pra direita, ou ser marcado como "fora do escopo do dogfooding, paralelo, sob risco de M2".

- Separar o cronograma em duas trilhas nomeadas: (1) "Sales OS auto-aplicado" (Etapas 1-8) e (2) "Captação Beta 5 slots" (pré-venda dos Beta externos, usando o que a trilha 1 produz). O gantt já tem as duas faixas; nomear assim deixa claro qual marco pertence a cada escopo e evita que slip de uma contamine o diagnóstico da outra.

- Adicionar plano B explícito para WABA: se provisionamento passar de 15/05, qual o caminho? Número interino de teste? Adiar M7 sem adiar M6? Documentar na seção 5.

- Corrigir a auto-descrição do resumo executivo: "compressão de 6 semanas vs. padrão v1.0" está incorreta — 5-8 semanas é a faixa canônica da v1.0, e 6 semanas é o piso esperado para rota 2 Beta. Não há compressão real; há aproveitamento de artefatos pré-existentes (VPC, templates, skills) que é legítimo.

- Registrar no doc quem joga o papel de "consultor" vs. "cliente" em cada Gate interno, para que o rito não colapse no auto-engano. Sugestão: Lucas como consultor, Victor como cliente — ou vice-versa, mas fixo.

## Pontos que não consegui validar

- **Estado atual do CRM próprio Eloscope (single-tenant ou multi-tenant).** O cronograma assume tenant novo em 2 dias; a v1.0 diz que multi-tenant exige 7 dias de dev uma vez. Preciso confirmar se esse dev já foi feito.

- **Status de provisionamento da WABA da Eloscope.** Marcado como "Pendente — caminho crítico" mas não especifica se a solicitação foi aberta, se a BM Meta já existe, se há número comercial aprovado.

- **Processo-base de venda Sales OS Q2 — existe em algum draft?** A Etapa 3 em 5 dias só faz sentido se o processo-base já esteja parcialmente escrito (não só o VPC de dores, mas o fluxo proposto canais → cadência → qualificação → handoff).

- **Template n8n do agente SDR já customizado para B2B de automação.** O "só customizando scripts" minimiza — scripts B2B de automação para Q2 são venda consultiva SPIN com ciclo de 1-3 meses, não qualificação curta de lead inbound de imobiliária.

- **Contrato Etapa 0 com cláusula de no-go.** Para self-client não se aplica formalmente, mas o "contrato anti-software-house" que o próprio cronograma lista como bloqueante em 01/05 precisa ser auditado antes dos Beta externos.

- **Capacidade de dev no time em maio.** 6 semanas com duas trilhas paralelas num time de 7 pessoas — não tenho visibilidade de quem faz o quê, se há conflito com clientes legados (Maya/Morgana/Maquilana/Jean em operação), e se as 5 reuniões Beta cabem na agenda do Lucas simultaneamente ao papel de consultor do self-client.
