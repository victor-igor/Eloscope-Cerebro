---
tipo: nota-reuniao
categoria: alinhamento-cliente
cliente: ReabilitaCão
data: 2026-05-22
operador: Victor
status: concluida
pauta: areas/vendas/clientes/reabilita-cao/reuniões/pautas/pauta-22-05
reuniao_anterior: areas/vendas/clientes/reabilita-cao/reuniões/notas/alinhamento-7-05
fonte: areas/vendas/clientes/reabilita-cao/reuniões/transcrições/alinhamento-22-05
participantes: [Victor, Fran, Cris, Nath]
duracao_aprox: ~62min
tags: [reuniao, cliente/reabilita-cao, tipo/alinhamento]
---

# Reunião de Alinhamento — ReabilitaCão (22/05/2026)

## TL;DR
- Reunião de ~1h com Victor, Fran (EUA), Cris e Nath. Tom positivo e produtivo.
- **Grande decisão da semana:** a partir de segunda (25/05) a equipe opera 100% na Maia — Google Calendar vira backup apenas. A decisão veio deles, não de Victor.
- **WhatsApp:** caminho definido para número único oficial (API Meta / PAY) para lembretes. Número da Nath continua para atendimento humano.
- **Agendamentos antigos:** Cris monta lista → Victor exclui pelo banco.
- **Recorrências:** criar até 31/12 e renovar na virada do ano — solução para o problema de recorrência que "estoura" sem aviso.
- Pós-consulta + review Google: confirmado que vai implementar, mas só depois que o sistema "assentar".

---

## Participantes
- **Victor** (victor.igr10@gmail.com) — Eloscope
- **Fran** (Reabilitacão Veterinária) — veterinária responsável; nos EUA
- **Cris** (ReabilitaCão FisioVet) — operações e agenda da clínica
- **Nath** — atendimento/WhatsApp (presente durante parte da reunião)

---

## 1. Validar entregas desde 07/05

**Bug edição recorrente:**
- Victor testou: criação sistema → Google sincronizando OK. Google → sistema também OK.
- Ainda falta testar editar e excluir eventos (cenários com variável).
- Ponto relevante: o Google também está apagando eventos espontaneamente — problema é bidirecional.
- **Status: parcialmente resolvido — falta validar edição/exclusão em campo.**

**Eventos antigos órfãos (problema de vinculação):**
- Bug novo identificado por Cris: ao editar agendamento para vincular tutor/pet que estava sem vínculo, o sistema **duplica o evento**. Equipe vai e apaga o duplicado manualmente.
- Origem: agendamentos criados via Google Calendar (não do sistema).
- Victor precisa entender o cenário exato para corrigir.
- **Status: pendente — bug de duplicação ao vincular novo.**

**Sincronização e transição para Maia:**
- Decisão espontânea da equipe: a partir de segunda (25/05), **foco total na Maia**. Google só conferência para alguns recorrentes que ainda não migraram.
- Razão: Google Calendar também ficou instável (apagando eventos). Pacientes chegaram porque estavam agendados na Maia mesmo sem o Google.
- Victor: "Qualquer coisa eu vou ajustando, para manter sincronizado."

**Lembretes diários de slots (automação):**
- Funcionando! ~20 mensagens/dia de confirmação de agendamento.
- Victor mostrou a tela de automações: alerta verifica agendamentos sem tutor/pet nos próximos 2 dias e envia no grupo (Maia Reabilitações) com link clicável para cada agendamento.

---

## 2. Pendências em aberto

### 2.1 Atribuição de veterinário responsável
- Victor apresentou funcionalidade de atribuição de conversas no sistema (tipo Chatwoot): quando a Maia atribui a conversa para Nath, aparece direto como "minhas" para ela saber que precisa responder.
- Bug específico de Luna→Fran: **não foi tratado diretamente nesta reunião.**
- **Status: bug original ainda em aberto.**

### 2.2 Edição do campo de raça do pet
- **Não foi tratado nesta reunião.** Passou despercebido na pauta.
- **Status: pendente.**

### 2.3 Roteamento WhatsApp — decisão importante
- Fran quer **um único número** para lembretes (confirmação sim/não), sem conversa.
- Medo de criar mais um número para gerenciar e os clientes ficarem confusos.
- Solução acordada: **número único oficial WhatsApp (API Meta / PAY)** — segue políticas da Meta, a Nath pode responder pelo web do número oficial.
- Para campanhas de marketing (~1x a cada 3 meses): usar o mesmo número oficial, monitorar as respostas nessa janela.
- Pós-consulta e follow-ups: ficam no celular **normal da Nath** (onde ela já responde hoje).
- **Status: direção definida. Victor configura o número oficial (PAY).**

### 2.4 Lembretes diários de slots
- Confirmado funcionando (ver item 1 acima).
- **Status: resolvido.**

### 2.5 Eventos pré-recorrência — excluir em lote
- Cris está montando uma listinha para mandar para Victor.
- Victor ofereceu alternativa: pegar todos os agendamentos antigos do banco e mandar lista para Cris confirmar quais excluir.
- Combinado: **Cris manda a lista → Victor exclui pelo banco.**
- **Status: em andamento — aguardando lista da Cris.**

---

## 3. Catálogo e recorrências

**Recorrência anual (novo combinado):**
- Problema levantado por Cris: quando cria 4 ocorrências, quando termina, ela não lembra de refazer. Paciente some da agenda sem aviso.
- **Solução combinada:** criar recorrências **até 31 de dezembro** de uma vez só. Na virada do ano, refazem todo mundo.
- Victor vai adicionar funcionalidade: **alerta de recorrência terminando** (quando o pacote está se esgotando, notificar a equipe).

**Desconto aniversário do PET (novo):**
- Victor já deixou funcionalidade alinhada para mandar notificação no aniversário do pet.
- Cris adorou: "ganha 10%, 20% de desconto na nossa lojinha."
- **A implementar — aguarda decisão do formato (% desconto, texto).**

**Academia/Reabilitação Movimento e desconto irmãos:**
- Não foram tratados nesta reunião.
- **Status: pendentes.**

---

## 4. Mensagem follow-up pós-avaliação + review Google

- Fran confirmou que quer: mensagem pós-consulta ("como foi?") + mensagem de avaliação Google.
- Mas está esperando o sistema "assentar" antes de adicionar mais automações.
- Volume estimado: perto de 100 mensagens/dia quando tudo estiver rodando.
- **Status: confirmado que vai implementar — sem prazo definido. Fran avisa quando quiser ativar.**

---

## 5. Campanha WhatsApp da Nath

- Custo de campanhas extras: ~R$50/mês. Se entrar como categoria marketing Meta: ~R$40 (mais caro por mensagem).
- Decisão: usar número oficial PAY para lembretes de confirmação; campanhas de marketing (raras) também no número oficial com monitoramento pontual.
- **Status: definido — seguir com número oficial.**

---

## Novidades (não estavam na pauta)

- **Migração total para Maia (25/05):** a equipe decidiu isso sozinha — ponto positivo de adoção.
- **Bug de duplicação ao vincular tutor/pet:** novo bug relatado por Cris, origem em agendamentos importados do Google. Victor precisa investigar.
- **Alerta de recorrência terminando:** nova funcionalidade a adicionar no sistema.
- **Desconto aniversário do PET:** nova automação a configurar.
- **Próxima reunião:** sexta-feira (possivelmente feriado — reagendam se precisar). Victor manda algo para Fran antes.

---

## Decisões tomadas

1. A partir de 25/05 (segunda): operar 100% na Maia; Google Calendar vira backup de conferência.
2. Número único oficial WhatsApp (API Meta/PAY) para lembretes e campanhas.
3. Pós-consulta (atendimento humano) continua no celular normal da Nath.
4. Recorrências: criar até 31/12 e renovar na virada do ano.
5. Lista de agendamentos para excluir: Cris monta → Victor exclui pelo banco.
6. Pós-consulta + review Google: a implementar quando Fran pedir (após estabilização).

---

## Próximos passos / Ações

| Ação | Responsável | Prazo |
|------|-------------|-------|
| Investigar bug de duplicação ao vincular tutor/pet em agendamentos do Google | Victor | breve |
| Pegar lista de agendamentos antigos do banco e mandar para Cris validar | Victor | breve |
| Cris montar lista de eventos para excluir e mandar para Victor | Cris | breve |
| Victor excluir eventos antigos pelo banco após lista da Cris | Victor | após lista |
| Configurar número oficial WhatsApp (API Meta/PAY) para lembretes | Victor | sem prazo |
| Adicionar alerta de recorrência terminando no sistema | Victor | sem prazo |
| Victor mandar link/info combinado para Fran (mencionado no encerramento) | Victor | hoje |
| Edição do campo de raça do pet — confirmar editabilidade | Victor | pendente |
| Bug de atribuição veterinário (Luna→Fran) — investigar origem | Victor | pendente |
| Implementar pós-consulta + mensagem review Google quando Fran solicitar | Victor | futuro |
| Reunião sexta (reagendar se feriado) | Victor + Fran/Cris | sexta 29/05 |

---

## Citações relevantes

- **Fran:** "Eu não quero ter conversa nesse número novo. Esse número só seja mensagem de propaganda e confirmação de consulta e de sessão." (~21min)
- **Cris:** "Segunda-feira a gente vai ficar só Maia. A gente vai meio que ignorar o Google pra ver se essa Maia entra no trilho." (~46min)
- **Cris:** "Eu lanço na Maia e apaga no Google. O Google antes tava estável, por isso que eu tava montando no Google, porque a Maia ainda não tava 100% estável. Mas agora o Google tá assim." (~39min)
- **Fran:** "A hora que eu olhei a agenda hoje, eu chorei, porque hoje foi um dia ruim." (~20min)
- **Cris:** "Victor, minha vontade é excluir todo mundo." (~55min)
- **Fran (encerramento):** "Obrigada pela paciência." (~1:02)
