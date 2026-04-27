---
tipo: reuniao
subtipo: cliente
data: 2026-03-30
duracao_min: 48
participantes: [Victor, Lucas, Fran, Cris, Angelica, Nath]
cliente: reabilitacao
fonte: fathom
fonte_id: 133940333
fonte_url: https://fathom.video/calls/619626329
tags: [reuniao, cliente/reabilitacao, recorrente, maia-ai]
contexto: alinhamento-produto
status: processada
---

# ReabilitaCão FisioVet — Alinhamento Maia 2026-03-30

> 📅 2026-03-30 · ⏱ 48 min · 👥 Victor, Fran, Cris, Angélica, Nath
> 🔗 [Gravação](https://fathom.video/calls/619626329) · 📁 [[areas/vendas/clientes/reabilitacao]]

## Contexto

Alinhamento recorrente com a clínica ReabilitaCão FisioVet (Fran/Cris) sobre evolução do sistema Maia (agente IA + ERP veterinário). Apresentação de novas funcionalidades (exames com IA, dashboard de lembretes, histórico do pet) e levantamento de bugs/ajustes da agente Maia (cadastro de pets, direcionamento de WhatsApp, agendamentos recorrentes). Onboarding da nova veterinária Angélica no sistema.

## O que foi discutido

### 1. Bugs/ajustes Maia (agente IA WhatsApp)
- Maia pede CPF/CEP novamente a cada novo pet do mesmo tutor — não puxa cadastro existente pelo número.
- Ao cadastrar segundo pet, Maia tenta substituir o anterior em vez de adicionar — confunde Mário com Obama.
- Maia parou de direcionar contatos via WhatsApp (caso Tânia Benício — não encaminhou ao número correto).
- Maia tentou agendar com a Fran (que está afastada) — ajuste para excluir Fran da disponibilidade até retorno.
- Maia citou veterinária Angélica como "fora da equipe" (info desatualizada — já corrigido por Victor).
- Plano: Andy/Cris vão simular cliente "chato" para stress-testar (perguntas sobre tratamentos, valores, veterinários, sábados, segunda/quarta de manhã).

### 2. Sistema (ERP) — funcionalidades novas
- Dashboard reformulado: pets por espécie, quantidade de serviços, filtros temporais.
- Tela de pets: ficha técnica, alertas de saúde, alergias, condições crônicas, medicamentos, exames, registro de peso.
- **Exames com IA**: upload de PDF/imagem → IA extrai resumo, laboratório, número do laudo, data, material biológico, observações; gráfico de evolução de parâmetros entre exames.
- Evolução de sessão: ditado por voz + correção via IA (paciente fala, IA transcreve e corrige a redação).
- Timeline histórica do pet: exames, consultas, peso por data.
- Vínculo de pacote ao agendamento: hoje manual; Victor vai reativar "repetir agendamento" para criar série recorrente já vinculada ao pacote.
- Configuração de horários da clínica com intervalos de almoço (Maia não oferece slot fora do expediente).
- Dashboard de lembretes: fila, enviados, erros, edição da mensagem antes do disparo, reenvio manual.

### 3. Pendências do roadmap
- Receituário (template básico com CRMV + assinatura digital/imagem) — Victor faz nesta semana.
- Permissão de "vincular pacote" para perfis não-admin (Cris não conseguiu pelo celular).
- Limpeza periódica de exames antigos (futuro — pacientes que faleceram há 3+ anos).
- Gravação de áudio da consulta para IA transcrever só as partes relevantes (futuro).
- Estruturar tela de dietas no padrão novo (hoje na versão antiga).

### 4. Onboarding Angélica
- Apresentação completa: agenda, tutores, pets, consultas, evoluções, exames.
- Visualização espelhada do Google Calendar.
- Conclusão automática de sessão ao registrar evolução.

### 5. Whitelist e go-live
- Lista de tutores-teste já enviada pela Nath.
- Plano: Nath/Andy/Cris testam Maia até quarta; quarta-feira Victor libera Maia para os tutores da whitelist; Nath avisa todos antes.

## Decisões

- **Reativar agendamento recorrente** no sistema (espelhar comportamento do Google Calendar) com pacote já vinculado automaticamente.
- **Criar série inteira do pacote** (ex: pacote de 8 sessões → 8 agendamentos recorrentes); ao acabar pacote, sistema desvincula e exibe alerta para renovação.
- **Migrar criação de eventos do Google Calendar para a Maia/sistema** — Google fica só para casos esporádicos fora da clínica.
- **Liberar Maia para whitelist na quarta-feira** após rodada de testes internos.
- **Fran fora da disponibilidade da Maia** — agente não agenda com Fran até segundo aviso.
- **Receituário básico será entregue nesta semana** (com CRMV + tentativa de assinatura digital).
- **Histórico do pet em timeline** mantido; limpeza de dados antigos fica para depois.

## Action Items

| # | Ação | Responsável | Prazo | ClickUp |
|---|------|-------------|-------|---------|
| 1 | Corrigir Maia para reaproveitar cadastro do tutor (não pedir CPF/CEP a cada pet novo) | Victor | 2026-04-01 | pending |
| 2 | Corrigir lógica "adicionar pet" vs "substituir pet" na Maia | Victor | 2026-04-01 | pending |
| 3 | Reativar funcionalidade "agendamento recorrente" com vínculo automático de pacote | Victor | 2026-04-01 | pending |
| 4 | Excluir Fran da disponibilidade de agendamento da Maia | Victor | 2026-03-30 | pending |
| 5 | Implementar tela/template de receituário (CRMV + assinatura) | Victor | 2026-04-03 | pending |
| 6 | Corrigir bug de exclusão dos pacotes antigos da bolsa (3 itens travados) | Victor | 2026-03-31 | pending |
| 7 | Liberar Maia para whitelist de tutores-teste | Victor | 2026-04-01 | pending |
| 8 | Ajustar permissão "vincular pacote" para perfis não-admin (Cris pelo celular) | Victor | 2026-04-03 | pending |
| 9 | Estruturar tela de dietas no padrão novo (consistência com exames) | Victor | 2026-04-10 | pending |
| 10 | Testar Maia simulando cliente "chato" (sábados, segunda/quarta manhã, perguntas sobre veterinários) | Cris/Andy/Nath | 2026-04-01 | pending |
| 11 | Avisar tutores da whitelist antes do go-live da Maia | Nath | 2026-04-01 | pending |
| 12 | Consolidar dúvidas em lista única (Cris) e enviar para Victor | Cris | 2026-04-01 | pending |
| 13 | Enviar imagem da assinatura digital da Fran para Victor inserir no receituário | Fran | 2026-04-02 | pending |
| 14 | Estudar viabilidade de gravação de áudio da consulta → transcrição IA | Victor | 2026-04-15 | pending |

## Pedidos / Reclamações do cliente

- **Fran**: "ela tá meio perdida" — Maia não puxa dados pessoais do tutor já cadastrado, gera retrabalho.
- **Fran**: Maia parou de direcionar contatos novos pelo WhatsApp (regrediu em relação ao comportamento anterior).
- **Cris**: não consegue excluir pacotes antigos da bolsa pelo painel.
- **Cris**: pelo celular não consegue vincular pacote — permissão limitada.
- **Fran**: pediu que vinculação de pacote seja automática quando o pet tem pacote ativo, para reduzir trabalho manual da equipe.
- **Fran**: receituário ainda não existe no sistema — segue dependendo do NuvemVet para isso.
- **Fran**: financeiro também ainda não está no sistema.

## Risco de churn

**Baixo** — *Cliente está engajado, satisfeito com as entregas ("cada vez melhor", "arrasou", "gente, vindo, te salvou minha vida" sobre exames com IA). As reclamações são bugs de produto, não problemas de relacionamento ou valor percebido. Ritmo de desenvolvimento acompanhando demandas. Sinais positivos: querem ampliar uso (whitelist, dietas, receituário, gravação de consulta).*

## Oportunidade de expansão

- **Gravação automática de consultas** com transcrição IA — pode virar feature premium.
- **Módulo financeiro** ainda não entregue — espaço claro para ampliar escopo.
- **Receituário com assinatura digital** — abre porta para integração com Autentique (skill /assinar).
- Sucesso da Maia + ERP pode gerar case + indicação para outras clínicas veterinárias.

## Próximos passos

1. Victor implementa correções 1-7 até início da semana (29/03 → 03/04).
2. Equipe ReabilitaCão testa Maia segunda/terça com cenários combinados.
3. Quarta-feira: go-live da Maia para whitelist.
4. Próxima reunião de alinhamento: ~1 semana após go-live para validar resultado.
5. Roadmap de médio prazo: receituário → dietas → financeiro → gravação de consulta.

---

## Transcrição Completa

[00:00](https://fathom.video/calls/619626329?timestamp=0) Reabilitacão Veterinária: Tudo bem, estava tentando procurar aqui, como põe fundo aqui no meu computador, mas ainda depois eu mexo. Ai, ai, passou tudo bem, final de semana? Tudo certo com vocês.
[00:11](https://fathom.video/calls/619626329?timestamp=11) victor igor: Ai, que bom, também, tudo ótimo.
[00:14](https://fathom.video/calls/619626329?timestamp=14) Reabilitacão Veterinária: Victor, estava aqui já, antes que as minhas entrem, eu estava aqui fazendo os testes da Maia, tem umas observações aqui para te passar. Ah, perfeito. O que eu estou notando é eu já cadastrei dois cachorros meus e gato agora através dela. Ela fica me pedindo de novo o meu CPF para me cadastrar de novo. Como ela tem o meu número, se é o número que eu estou falando com ela, ela já não teria que já ter o meu cadastro e só adicionar mais animais?
[00:45](https://fathom.video/calls/619626329?timestamp=45) victor igor: Toda vez que você vai fazer cadastro novo, ela pede o CPF, é isso?
[00:48](https://fathom.video/calls/619626329?timestamp=48) Reabilitacão Veterinária: De novo, ela pede de novo o meu CPF e o meu CEP. Ela pede o do CPF, tudo bem, que é o primeiro, a caçavana, e daí eu até insisti, mas eu já te passei o meu CPF. Daí ela não achava na... Falei, não, não baixa aqui no encontro e tal. Daí eu passei de novo. Agora com o Mário eu fiz a mesma coisa. Daí ela peço desculpas, ouvi falha na minha consulta anterior, como o Mário ainda não tem, ela tá meio perdida. Depois você vê a minha conversa com ela, com essas últimas que eu fiz hoje, tá? Ela queria substituir o Obama pelo Mário, daí eu falei, não, é outro animal, tô cadastrando outro animal. Ela tava excluindo o Obama e acrescentando o Mário, sabe? Aí eu expliquei, ela pediu desculpa, não, daí ela falou que ela não tava conseguindo falar lá com o pessoal, daí ela falou pra ela, quer ver, depois você lê inteira, assim, tem bastante informação.
[01:44](https://fathom.video/calls/619626329?timestamp=104) victor igor: Eu vejo que ela tá meio perdida, assim, pra nesse Provavelmente ela não deve tá puxando os dados pessoais. Isso, ela não tá conseguindo. Inclusive eu puxei uma questão que ela não tava, aquela questão lá dos veterinários. Eu já ajustei essa questão, e aí também, que ela não tava recomendando lá, que você tinha comentado, né, que ela tinha falado, acho que era da Angélica, né, que ela não tava mais na equipe, né, e tudo mais, alguma coisa assim.
[02:12](https://fathom.video/calls/619626329?timestamp=132) Reabilitacão Veterinária: E aí hoje eu tentei marcar comigo, e ela tava, tá tentando marcar comigo, então assim, comigo ela não pode marcar ainda, tem que deixar ela aparecendo com a série? Tá. Oi, Cris. Oi, amor da vida.
[02:26](https://fathom.video/calls/619626329?timestamp=146) ReabilitaCão FisioVet: Oi, amor da vida. De você, amor.
[02:29](https://fathom.video/calls/619626329?timestamp=149) Reabilitacão Veterinária: Também tô, sua linda. A minha carta não chegou ainda, né? Não, senão eu ia te avisar, né, quer dizer, mandou semana passada, calma, ansiosa.
[02:40](https://fathom.video/calls/619626329?timestamp=160) ReabilitaCão FisioVet: Tudo bem, Victor? Tudo bem, e você? Tudo jóia, tudo nos trinques. Que bom. Então, eu tô adiantando minhas coisas aqui, Cris, aí depois a gente entra na sua parte.
[02:51](https://fathom.video/calls/619626329?timestamp=171) Reabilitacão Veterinária: Tá bom. Então, ela, então, daí ela tá tentando, tava marcando comigo, daí ela até falou, ah, eu até Perguntei, tem duas frãs aí na clínica? Flo, tem sim. Ela falou que a Franciele tem casos mais complexos, como a gente até conversou antes, mas por enquanto não deixa de marcar nada para mim, por enquanto, ainda mais que estou fora, tá, daí vocês vão explicar, ah, com a doutora Fran, agora como ela está, ela não está, ela está fora por período, é, eu vou verificar se conseguimos dar atendimento com ela ou não, daí para ser humano. Oi, minha limpeza.
[03:26](https://fathom.video/calls/619626329?timestamp=206) ReabilitaCão FisioVet: Desculpa, que... Oi, tudo bem?
[03:28](https://fathom.video/calls/619626329?timestamp=208) Reabilitacão Veterinária: Tranquilo, não, eu estou adiantando minhas coisas aqui com o Vitor. Essa é a Angélica, Vitor.
[03:34](https://fathom.video/calls/619626329?timestamp=214) ReabilitaCão FisioVet: Prazer, Vitor.
[03:34](https://fathom.video/calls/619626329?timestamp=214) victor igor: Prazer, tudo bem?
[03:36](https://fathom.video/calls/619626329?timestamp=216) ReabilitaCão FisioVet: Estou ótimo, você? Bem, sim.
[03:39](https://fathom.video/calls/619626329?timestamp=219) Reabilitacão Veterinária: Então, Vitor, acho que é mais essa questão, comigo assim, não marcar nada, e aí depois, quando for acrescentar o celular da Cris para funcionar, aí a gente pode colocar para agendar as minhas coisas comigo. Então, por enquanto, esse da Nátia, é só marcar com as meninas, exceto eu, tá?
[03:58](https://fathom.video/calls/619626329?timestamp=238) ReabilitaCão FisioVet: Perfeito. E aí, tinha só mais outra observação.
[04:04](https://fathom.video/calls/619626329?timestamp=244) Reabilitacão Veterinária: Ah, eu tô notando que ela não tá passando mais os contatos, que nem teve uma cliente que se chama Tânia, ela entrou em contato comigo no final de semana. Ela não tá direcionando o WhatsApp do agendamento. Geralmente, ela tá respondendo, quer ver, É Tânia Benício, tá? Ela responde, ó, bom dia, sua mãe, falou sobre o caso, que é caso de fisioterapia. Ela falou, sento muito, deve ser difícil. chamei nossa equipe para avaliar o caso dele e passar os detalhes, sendo que não sou eu que passo, lembra? Então, no meu celular, ela não pode, ela tá misturando, acho que, com o celular da Nath. Então, meio, daí eu fui lá e eu mesmo passei, tá vendo? Então, nesses casos, ela continua direcionando igual ela tava fazendo antes. Que agora ela deu uma parada de fazer isso, tá? Então, acho que da minha parte foi isso só, de observação. Eu também não fiquei testando muito ela, você conseguiu testar Cris? Porque a Maia não? É, tem que conversar, você vai marcar horário então para conversar com ela, por favor, senão você está dependendo de mim. Tá?
[05:13](https://fathom.video/calls/619626329?timestamp=313) ReabilitaCão FisioVet: Eu sei o que eu faço. Eu faço. Pede para uma das meninas conversar. Ela não quer ser uma exclusiva. Tá bom, eu vou conversar com ela, prometo. A minha perda de sono, você já sabe o que é.
[05:27](https://fathom.video/calls/619626329?timestamp=327) Reabilitacão Veterinária: Então, mas ela vai ajudar a gente a você ter sono de novo, então por isso tem que conversar para ela funcionar direitinho para marcar os pacientes. Tá bom. Então isso faz uma das funções. Pega hoje, ou dá para a Andy, como está a sua agenda hoje, Andy? Tranquilo. Agora está, Andy. Bem tranquilo. Ah, então, depois da Gaia, pega o celular e fica conversando com ela, tá? Dá para a Andy conversar, daí ela vai lembrando. Você vai conversar com ela, Andy, como se você fosse cliente. cliente. Então, tentar mais... Marcar, perguntar se das sesões... do dela?
[06:04](https://fathom.video/calls/619626329?timestamp=364) ReabilitaCão FisioVet: Não, do meu, né? Do que eu... Tanto faz.
[06:07](https://fathom.video/calls/619626329?timestamp=367) Reabilitacão Veterinária: Dá para ela usar no celular dela, o Vitor, também? Pode chamar, pode chamar. Só compartilhar o contato com ela. Tá. Que nem o que eu estou fazendo, Andy? Eu estou tentando marcar consulta, estou questionando sobre os tratamentos, questionando sobre as veterinárias, valores... Então, vai ser aquele cliente chato mesmo, sabe? De perguntar monte de coisa. Entendi.
[06:30](https://fathom.video/calls/619626329?timestamp=390) ReabilitaCão FisioVet: E tenta marcar por segunda e quarta de manhã, aos sábados, tudo o que a gente não faz para ver o que ela faz.
[06:37](https://fathom.video/calls/619626329?timestamp=397) Reabilitacão Veterinária: E o normal também, tá? Porque o normal é o importante também. Então, tipo, marca... Tenta agendar realmente os horários. Eu já agendei da Savannah, agendei do Obama, estou tentando agora marcar do Mário. Então... E aí tenta perguntar das veterinárias. Ela não vai indicar agora a veterinária direto, né, Vitor? Ela vai marcar, mas se eu questionar sobre as veterinárias, ela vai passar?
[06:59](https://fathom.video/calls/619626329?timestamp=419) ReabilitaCão FisioVet: É, ela vai...
[07:00](https://fathom.video/calls/619626329?timestamp=420) victor igor: O quer ver, tem exemplo aqui. Eu estava testando hoje de manhã também nela, fazendo algumas melhorias. E aí ela, eu perguntei, tem horário disponível na quarta? E aí ela fala, não consegui horário na parte da manhã, mas consegui a tarde com a veterinária X. Então, fala qual veterinária ela conseguiu. E aí, eu faço o nome ali só.
[07:24](https://fathom.video/calls/619626329?timestamp=444) Reabilitacão Veterinária: Aí, por exemplo, mas eu queria marcar com a doutora Angélica, porque eu ouvi falar que ela é melhor. Daí, vamos ver que ela responde. Então, para ver qual é a reação dela. Tenta marcar comigo. E aí você vai cadastrando vários pacientes. E aí ela vai entrando lá como... Entra na agenda, né? Ela está entrando na agenda. Então, vai ser teste. Tá bom? Então, pega depois o horário e vai conversando aí com ela. Vai ser bom, tá? Então, ok. Então, essas são as observações. Aí agora, Vitor, acho que é legal agora passar para... So as instruções de como mexer no sistema, coisa básica, agora só para ela depois passar para as meninas também, de avaliação, de preencher as coisinhas lá internas.
[08:12](https://fathom.video/calls/619626329?timestamp=492) victor igor: Eu vou apresentar aqui, e aí eu vou até mostrar para vocês que eu atualizei algumas coisas novas, eu não sei se vocês já viram no sistema, mas tem coisas novas também.
[08:20](https://fathom.video/calls/619626329?timestamp=500) ReabilitaCão FisioVet: Tudo bom, Nath? Tudo bem, cheguei agora.
[08:27](https://fathom.video/calls/619626329?timestamp=507) Reabilitacão Veterinária: Ótimo, deu certo, Nath? Tá, dando para ver certinho. Viu?
[08:36](https://fathom.video/calls/619626329?timestamp=516) ReabilitaCão FisioVet: É fácil.
[08:38](https://fathom.video/calls/619626329?timestamp=518) victor igor: Perfeito. Então, aqui Fran, inclusive eu coloquei mais alguns dados aqui no dashboard, para vocês conseguirem visualizar melhor. Pets por espécie, tem a quantidade de serviços aqui, aí dá para filtrar aqui nos últimos dias e tudo mais. Então, tem algumas coisas que eu coloquei aqui que não tinha antes, né, no dashboard. Tchau. Tchau. Tchau. E aí vamos, eu vou apresentar já para ela a parte ali, provavelmente que ela mais vai usar, né, e depois eu mostro outras coisas. Mas basicamente, é aqui, Angélica, né? Isso. Perfeito. Aqui tem o dashboard normal, parte de agendamento acredito que você não vai usar muito, né, mas, ou até vai, né, você vai conseguir visualizar sua agenda aqui também. Então, toda agenda lá que você tem, no Google Calendar, ele está espelhando aqui também. Então, para você vai aparecer só a sua, tá? É para aparecer só a sua, é que aqui que eu estou com o usuário ou o administrador, então aparece todas. Mas aí, a sua vai aparecer provavelmente assim, tá? Nesse jeito que está aparecendo aqui. Então, você vai conseguir visualizar só os seus agendamentos.
[09:45](https://fathom.video/calls/619626329?timestamp=585) ReabilitaCão FisioVet: Parece, mas está aparecendo... Ai, desculpa, de tudo isso aqui, eu acho. E aí, aqui tem os filtros também.
[09:50](https://fathom.video/calls/619626329?timestamp=590) victor igor: Então, igual lá no Google Calendar tem o mensal da semana e no dia também, para você visualizar. E tem o formato lista, tá? Que você... Então você consegue visualizar também os agendamentos. Aqui é os tutores, então aqui tem a... para você gerenciar os tutores, o nome do dutor, os contatos, todas as informações dos tutores e os pets relacionados aos tutores também. Então aqui embaixo fica... deixa eu ver aqui se tem algum... Vou pegar exemplo aqui... Aqui, esse aqui é exemplo que eu tomo. Então aqui aparece todos os pets relacionados a esse tutor que ele tem, tá? Então se você clicar aqui, ah, quero ver da Jade, por exemplo, ele já vai direcionar para o perfil da Jade. Ou você pode entrar aqui em pets, diretamente em pets, e aí tem a lista de pets aqui, também de todos cadastrados no sistema. Então de todos os tutores, enfim, então fica tudo aqui também.
[10:55](https://fathom.video/calls/619626329?timestamp=655) ReabilitaCão FisioVet: Entrando em pets, e aí entra até questões, algumas melhorias que eu coloquei...
[11:00](https://fathom.video/calls/619626329?timestamp=660) victor igor: Eu até a parte de exames agora, Fran, que eu coloquei aqui, eu vou mostrar para vocês, tá? Então aqui tem todas as informações, tanto do doutor, relacionado ao PET, ou também a ficha técnica do PET, alertas de saúde, então alergias, condições crônicas, medicamentos, tem a parte de exames aqui, arquivos recentes, que são todos arquivos que tem do PET, fica aqui também nessa visão geral, dá para visualizar, e tem o peso, né, o registro de peso do PET. Para você editar alguma informação geral do PET, é só vir aqui em editar, e aqui abre todas as características, dados do PET, dados do tutor, alertas de saúde, os medicamentos, enfim, e aqui status, né, do PET, enfim, que é mais para se ele está ativo, é PET ativo, inativo, ou se ele já faleceu, né, então aqui você consegue gerenciar essas informações, então idade do PET, peso atual, enfim, tudo por aqui. E aí tem outras telas, aqui é a parte de consulta. E aí aí aí E É bem parecido com o NuvemBet, que a Fran pediu para a gente fazer, então aqui é basicamente a mesma coisa que tem lá, então a parte de consulta aqui, quando tiver agendamento, já vai aparecer aqui, para você conseguir selecionar o agendamento, para você vincular qual foi a consulta do dia, ou você consegue selecionar aqui uma data específica também, a pesagem, se foi feita a pesagem no dia, e o modelo, né, que é aqueles templates que também tem lá no NuvemBet, que tem, como a gente cadastrar aqui, que ele já aparece, né, para vocês registrarem a consulta aqui, né, escrever, fazer toda...
[12:38](https://fathom.video/calls/619626329?timestamp=758) ReabilitaCão FisioVet: Mas essa consulta é a que a gente vai registrar diário, Fran, que você falou? Não. Quando eu perdi, ou não?
[12:46](https://fathom.video/calls/619626329?timestamp=766) Reabilitacão Veterinária: Consulta, consulta mesmo. Vamos por avaliação.
[12:48](https://fathom.video/calls/619626329?timestamp=768) victor igor: É, avaliação. Ah, onde vai ser? Depois ele vai mostrar ali onde vai. essa essa eu vou mostrar.
[12:53](https://fathom.video/calls/619626329?timestamp=773) Reabilitacão Veterinária: Ah, mas desculpa. Não, mas é, tem que perguntar, essa é a primeira vez, é igual a nossa mesmo, quando a gente faz ou reavaliação ou...
[13:02](https://fathom.video/calls/619626329?timestamp=782) victor igor: E aí, da sessão, é aqui ó, aqui agora, deixa eu pegar aqui que tem agendamento, né, se não tem algum em mente aí que vocês sabem que tem, acho que tem aqui, eu tava vendo não, tem Roger, aí, já é paciente da Angélica. Aqui, agendamentos. Como que fica em agendamentos? Então, mesma tela, tá, Pets, e aqui agendamentos. Aqui você consegue visualizar todos os agendamentos relacionados ao Pets, tá? Então, os próximos, que tá agendado já pra ele, ou os passados, tá bom? Então, parece tudo aqui. E aí, como que funciona? Vamos supor que esse aqui, eu só vou, depois eu até altero aqui se não foi, tá? Mas aqui, o status, ele tá agendado. Então, quando ele já, vamos supor que essa sessão já foi feita e tudo mais, ela já foi concluída. Como que vai aparecer aqui? Ele já vai aparecer aqui, evolução, né, na parte da evolução ele vai aparecer registrar, tá pendente pra você registrar o que acontece. O aconteceu na sessão. Quando você clica em registrar, ele aparece essa tela, tá? Para você registrar o que aconteceu na sessão. E aí que você pode escrever normalmente. Então, vou até escrever tudo errado aqui, mas na sessão, vou até escrever errado aqui só para mostrar. Na sessão, ele teve uma melhora do andamento. Tudo errado, né? Vou jogar só para... Aí você pode jogar para IA e corrigir. Então, eu escrevi tudo errado, ela já pegou aqui. Na sessão, o paciente apresentou uma melhora do padrão de andar. Então, você consegue tanto falar também, você pode falar, você abre o microfone aqui nesse ditado aqui, aí você permite no navegador. Olha que chique. Você consegue transcrever, ele vai transcrever o você falou, e aí você pode jogar para IA e corrigir, tá? Então, você viu que eu escrevi tudo errado, ela já corrigiu. Então, para dar essa facilidade no dia a dia também, né? Maravilhoso. E aí, para você ver as evoluções também... Quando tiver evolução aparecendo para registrar e não foi feito o registro, ele vai ficar aparecendo esse alerta aqui, uma sem evolução, então se você clicar aqui ele já vai filtrar as quais faltam registrar, e quando você registrar, deixa eu ver aqui, deixa eu até registrar, exemplo aqui, salvar e concluir, beleza, ele já sumiu, e aí se você clicar em evoluções, você vai conseguir visualizar todas as anotações numa timeline de evoluções do patch, das sessões, ele vai aparecendo assim, tá, para você conseguir ver todos os registros do patch, tá, de todas as sessões que ele já passaram.
[15:38](https://fathom.video/calls/619626329?timestamp=938) Reabilitacão Veterinária: E aonde que a gente vai preencher quando ele fizer a terapia neural, aquele negócio de ticar o que que ele fez na sessão lá, o que para ele excluir?
[15:45](https://fathom.video/calls/619626329?timestamp=945) victor igor: É aqui também.
[15:46](https://fathom.video/calls/619626329?timestamp=946) Reabilitacão Veterinária: É aí, né?
[15:47](https://fathom.video/calls/619626329?timestamp=947) victor igor: É aqui, só que aqui, ó, ou vocês podem abrir também, Angélica, vai aparecer aqui, né, quando vocês concluírem, aparece aqui, ou se você clicar em cima do agendamento, tem aqui embaixo, evolução da sessão, tá? tchau. Se você clicar aqui, ele aparece a mesma tela, a mesma coisa. E aí que tem os serviços realizados hoje. É que nesse aqui não tem os serviços, né? O é a sessão...
[16:09](https://fathom.video/calls/619626329?timestamp=969) Reabilitacão Veterinária: Ah, é que o dele não tem, o dele é só sessão de... Ele papote 8.
[16:13](https://fathom.video/calls/619626329?timestamp=973) ReabilitaCão FisioVet: É, então ele não tá incluso, por isso que não aparece.
[16:16](https://fathom.video/calls/619626329?timestamp=976) victor igor: Então, aí quando tiver o serviço relacionado, ele aparece todos aqui, aí você consegue... O Zigo tem, o Zigo é dermato.
[16:22](https://fathom.video/calls/619626329?timestamp=982) Reabilitacão Veterinária: Então, vamos pegar o que mostra pra gente fazer dúvida, Vitor.
[16:25](https://fathom.video/calls/619626329?timestamp=985) ReabilitaCão FisioVet: Se eu entrar direto por aí, igual você fez, pra anotar lá, depois a sessão já aparece como feita, tipo aqui? Aparece concluído.
[16:33](https://fathom.video/calls/619626329?timestamp=993) victor igor: Concluído. eu não preciso concluir manualmente, vai concluir automático. Isso. Inclusive, isso já fica tudo relacionado ao pacote dele e tudo mais, tá? Então, já fica tudo relacionado.
[16:45](https://fathom.video/calls/619626329?timestamp=1005) Reabilitacão Veterinária: Aí ele vai tirando. Põe no do Zigo, põe no Zigo, porque a gente já vê pra onde que a gente vai colocar.
[16:51](https://fathom.video/calls/619626329?timestamp=1011) victor igor: Deixa eu só tirar uma casada. Porque o Zigo...
[16:54](https://fathom.video/calls/619626329?timestamp=1014) ReabilitaCão FisioVet: É, o Zigo veio agora, inclusive. pra já deixar pronto. É, já faz o Zigo já, já deixa pronto.
[17:00](https://fathom.video/calls/619626329?timestamp=1020) victor igor: Qual?
[17:01](https://fathom.video/calls/619626329?timestamp=1021) Reabilitacão Veterinária: Zigo. Zigo. Isa. É isso, esse mesmo. Não é Isa? Maria Luiza.
[17:08](https://fathom.video/calls/619626329?timestamp=1028) ReabilitaCão FisioVet: Mas ela gosta de Isa. Qual que é?
[17:12](https://fathom.video/calls/619626329?timestamp=1032) victor igor: É de hoje. Então, esse hoje acho que tá sem serviço também. Olha, ele tá com o Google Calendar.
[17:21](https://fathom.video/calls/619626329?timestamp=1041) Reabilitacão Veterinária: Como que foi lançado ele aí, Nath? Tá lançado normal.
[17:26](https://fathom.video/calls/619626329?timestamp=1046) victor igor: Não.
[17:28](https://fathom.video/calls/619626329?timestamp=1048) ReabilitaCão FisioVet: O Zigo, eu acho que ele tá como recorrente no Google. Ah, é por isso.
[17:34](https://fathom.video/calls/619626329?timestamp=1054) victor igor: Ele tá relacionado ao serviço aqui, ó. Então, como que...
[17:40](https://fathom.video/calls/619626329?timestamp=1060) Reabilitacão Veterinária: O que que tá sendo feito de errado, pra não parecer?
[17:44](https://fathom.video/calls/619626329?timestamp=1064) victor igor: Esse aqui você criou no Google, né? Oi? Esse evento aqui você criou direto no Google, né? Mas ele tá com o nome de YouTube, ora só acho que não...
[17:53](https://fathom.video/calls/619626329?timestamp=1073) ReabilitaCão FisioVet: foi recorrentes. Mas aí eu coloquei, eu vinculei o pacote, mas não foi. Vamos lá.
[18:00](https://fathom.video/calls/619626329?timestamp=1080) Reabilitacão Veterinária: O aconteceu? Por que que não entrou o pacote dele? Porque essas coisinhas tem que ficar de olho.
[18:05](https://fathom.video/calls/619626329?timestamp=1085) victor igor: Qual que o serviço dele aqui? É para dermato.
[18:08](https://fathom.video/calls/619626329?timestamp=1088) ReabilitaCão FisioVet: Dermato, né? É pacote de dermato, na verdade.
[18:11](https://fathom.video/calls/619626329?timestamp=1091) Reabilitacão Veterinária: Mas é a névoa, fez névoa.
[18:15](https://fathom.video/calls/619626329?timestamp=1095) ReabilitaCão FisioVet: Mas qual que ele vai fazer? Ali em cima, o vincular pacote.
[18:18](https://fathom.video/calls/619626329?timestamp=1098) Reabilitacão Veterinária: Ah, tá. Desculpa, vai. Falando só.
[18:20](https://fathom.video/calls/619626329?timestamp=1100) ReabilitaCão FisioVet: Ele fez névoa, laser. Aí entra com uma fisa normal. E acho que foi isso que ele fez névoa, laser. E teve injetável? Eu acho que foi no fisa de injetável. Então hoje só põe na évoa e a sessão de físio. É.
[18:38](https://fathom.video/calls/619626329?timestamp=1118) Reabilitacão Veterinária: Que a físio já está aí. Esses aí são os extras, tá vendo? Então a físio já entra. Esses aí são os extras que são os serviços extras que entram. Então, é só isso aí mesmo.
[18:47](https://fathom.video/calls/619626329?timestamp=1127) victor igor: vincular aqui só para ver. É esse aqui, né? Olha lá, ele já ficou. Agora ele aparece aqui, tá vendo? Na évoa. Então, isso que é legal.
[18:59](https://fathom.video/calls/619626329?timestamp=1139) Reabilitacão Veterinária: Conforme vocês... E mexendo aí, vai vendo que os que não estão vinculados ao serviço, tem que olhar isso. Mas aí, como que vai se vincular? Eu não entendi muito bem.
[19:08](https://fathom.video/calls/619626329?timestamp=1148) victor igor: É que, no serviço, quando tá criado, ó, ele tá aqui, ó, deixa eu até pegar o outro aqui pra ver se tem. Ó, esse aqui não tem também, ó.
[19:17](https://fathom.video/calls/619626329?timestamp=1157) ReabilitaCão FisioVet: É, que ele é recorrente no Google também. Então, ele aqui, porra, clicou aqui no agendamento, editar, ele tem aqui, ó, aí tem o profissional responsável, né?
[19:27](https://fathom.video/calls/619626329?timestamp=1167) victor igor: Ah, vai em editar. Aí, tem vincular o pacote, esse aqui tem pacote também. Quando não for do pacote, é só selecionar serviço, né, avulso mesmo, né? Mas quando tem pacote, só clicar no pacote que tem dele, ele já vai aparecer o serviço que tem relação dando ao pacote, né? Então, por exemplo, esse aqui é só...
[19:47](https://fathom.video/calls/619626329?timestamp=1187) Reabilitacão Veterinária: Ele não tá entrando, toda vez, automático, já que o pacote que ele tá ativo?
[19:53](https://fathom.video/calls/619626329?timestamp=1193) victor igor: Não, tem que selecionar.
[19:55](https://fathom.video/calls/619626329?timestamp=1195) Reabilitacão Veterinária: Porque isso, então, toda vez que for fazer o agendamento, tem que selecionar o pacote que tá... O é o dele então?
[20:01](https://fathom.video/calls/619626329?timestamp=1201) victor igor: É, novo agendamento sim.
[20:03](https://fathom.video/calls/619626329?timestamp=1203) Reabilitacão Veterinária: E se ele está imporente, ele não quer entrar. não entrar. E coloca no cadastro aqui.
[20:11](https://fathom.video/calls/619626329?timestamp=1211) ReabilitaCão FisioVet: Ô Victor, antes de você fechar, esse é que precisa pagar lá dos pacotes que está lá. É esse aqui mesmo. Lembra que você falou que não dava para pagar porque estava vinculado com alguém?
[20:25](https://fathom.video/calls/619626329?timestamp=1225) victor igor: Ah, aham.
[20:27](https://fathom.video/calls/619626329?timestamp=1227) ReabilitaCão FisioVet: Porque não está pagando, não está excluindo lá dos pacotes. As três sessões da bolsa lá embaixo.
[20:34](https://fathom.video/calls/619626329?timestamp=1234) victor igor: Esse aqui, né?
[20:34](https://fathom.video/calls/619626329?timestamp=1234) ReabilitaCão FisioVet: É, a bolsa PET-9, sessão bolsa e sessão reabilitação, blá, blá, blá. Mas sobe ali os pacotes de manutenção normal, Victor, os primeiros. Esse aqui?
[20:48](https://fathom.video/calls/619626329?timestamp=1248) victor igor: Ah, é esse.
[20:50](https://fathom.video/calls/619626329?timestamp=1250) ReabilitaCão FisioVet: Não, não. É, mas só que esse, se clicar nele, vai estar como injetável. Não vai, eu tirei. De todos. Esse aí eu consegui arrumar. Esse eu consegui arrumar. Você não tá conseguindo só apagar, então. Não tô conseguindo excluir aqueles três últimos lá. As sessões abusas. Esse aqui, né?
[21:14](https://fathom.video/calls/619626329?timestamp=1274) victor igor: Isso. É verdade, eu esqueci de excluir, eu vou excluir hoje de novo eles.
[21:20](https://fathom.video/calls/619626329?timestamp=1280) ReabilitaCão FisioVet: Eu tinha esquecido, mas eu já exclui eles aqui depois.
[21:24](https://fathom.video/calls/619626329?timestamp=1284) victor igor: Mas esse aqui é relacionado a esse agendamento, no caso, nesse pé. Esse aqui, né? É.
[21:35](https://fathom.video/calls/619626329?timestamp=1295) ReabilitaCão FisioVet: É, pacote de manutenção, cinco restantes.
[21:38](https://fathom.video/calls/619626329?timestamp=1298) victor igor: Isso, não tem nada.
[21:40](https://fathom.video/calls/619626329?timestamp=1300) ReabilitaCão FisioVet: Não tem... Ele recebe, os injetáveis não, mas a névoa, tudo, tudo ele faz, mas é porque ele é paciente especial.
[21:50](https://fathom.video/calls/619626329?timestamp=1310) victor igor: Entendi.
[21:53](https://fathom.video/calls/619626329?timestamp=1313) ReabilitaCão FisioVet: Mas não, injetável não entra de jeito nenhum. Mas aí esses que são especiais, assim, a gente põe só lá na...
[22:00](https://fathom.video/calls/619626329?timestamp=1320) Reabilitacão Veterinária: Só ali na descrição.
[22:01](https://fathom.video/calls/619626329?timestamp=1321) ReabilitaCão FisioVet: na descrição, aí a gente não dica nada. Não. Então já aconteceu só o normal. Perfeito.
[22:09](https://fathom.video/calls/619626329?timestamp=1329) victor igor: Tem mais alguma dúvida nessa questão aqui?
[22:11](https://fathom.video/calls/619626329?timestamp=1331) Reabilitacão Veterinária: Então só na observação aí do agendamento, porque assim, como não tá aparecendo nenhum pacote, eu entrei agora aqui também no Nino, da Cris, também não tem nenhum pacote vinculado. Então, toda vez que a Nath pegar a agenda, vai ter que colocar toda vez manualmente o pacote que tá vinculado, correto? Sim.
[22:34](https://fathom.video/calls/619626329?timestamp=1354) ReabilitaCão FisioVet: Se for criar evento novo, sim.
[22:36](https://fathom.video/calls/619626329?timestamp=1356) Reabilitacão Veterinária: Porque não teria como deixar isso automático enquanto ele tiver com esse pacote ativo, por exemplo?
[22:43](https://fathom.video/calls/619626329?timestamp=1363) victor igor: É, o que eu tirei, né, porque a gente tava fazendo ajuste, é o repetir a né, que seria o recorrente no Google Calendar, né? Só que criar automático pelo sistema nosso, que também criaria lá no Google Calendar, e aí já criaria a sequência inteira com relacionamento... O pacote relacionado ao serviço. Todas as agendas podem ser iguais. Isso dá para manter ou não? Não entendi. Dá para fazer assim.
[23:07](https://fathom.video/calls/619626329?timestamp=1387) ReabilitaCão FisioVet: É, porque daí fica sempre...
[23:09](https://fathom.video/calls/619626329?timestamp=1389) Reabilitacão Veterinária: Eu ia ver isso. É, porque assim, se o cachorro está com o pacote ativo, manter sempre o mesmo pacote, a não ser que dia, por exemplo, ele tem pacote ativo. Mas esporadicamente, na próxima vez que ele vier, a gente vai querer fazer só uma natação para ele e vai ser negócio avulso. Isso aí a gente consegue mexer aqui manual, mas se puder deixar sempre ativo, sempre já automático o pacote que está vinculado, e aí a gente só mexe manual quando for alguma exceção. Daí é trabalho a menos para deixar para mexer, porque senão ele não vai entrar lá para as meninas. Quando elas forem preencher lá dentro, não vai ter nenhum pacote vinculado. Elas vão ter que falar com a Nath, ou elas vão ter que vincular pacote. Então, para ter serviço a menos. pudesse fazer assim, seria melhor.
[23:53](https://fathom.video/calls/619626329?timestamp=1433) ReabilitaCão FisioVet: É, eu vou ativar novamente essa, repetir o agendamento, que é para criar os agendamentos igual lá no Google.
[24:00](https://fathom.video/calls/619626329?timestamp=1440) victor igor: E aí já cria tudo com o doutor, né, tudo certinho.
[24:05](https://fathom.video/calls/619626329?timestamp=1445) Reabilitacão Veterinária: Tá, então melhor.
[24:06](https://fathom.video/calls/619626329?timestamp=1446) ReabilitaCão FisioVet: Eu já dei isso com você também, porque ele tá dando muito problema ali, tem, acho que segunda que vem, tem tipo, quatro blue. Quatro blue? É, porque, tipo, tava recorrente na Maya e tava recorrente também no Google, e aí se eu apago de apaga do outro, sabe, nossa, ficou muito confuso. Então, essa questão eu já tinha resolvido, viu?
[24:34](https://fathom.video/calls/619626329?timestamp=1474) victor igor: Eu lembro que você tinha comentado, eu resolvi.
[24:36](https://fathom.video/calls/619626329?timestamp=1476) ReabilitaCão FisioVet: E aí o que eu tinha pensado é que se colocasse essa questão de colocar recorrente na Maya, eu iria meio que apagar todo mundo do Google e colocar todo mundo direto na Maya, pra ficar recorrente só na Maya. Porque na Maya já fica, né, recorrente o tutor, já fica o pacote, É, é que se você cria no Google, ele já...
[25:00](https://fathom.video/calls/619626329?timestamp=1500) victor igor: Ele vai criar aqui no sistema, aí você não precisa criar no Google, aí no sistema. Você só cria no Google, então quer ver outro é criar uma.
[25:06](https://fathom.video/calls/619626329?timestamp=1506) ReabilitaCão FisioVet: Mas aí ele não vai aparecer, vai? Aparece. Tá direto o tutor e o vincular.
[25:12](https://fathom.video/calls/619626329?timestamp=1512) victor igor: Ah, não, não, aí você vai precisar entrar no sistema e aí editar, entendeu?
[25:17](https://fathom.video/calls/619626329?timestamp=1517) Reabilitacão Veterinária: É, Então tem que preencher tudo pela Maia mesmo.
[25:20](https://fathom.video/calls/619626329?timestamp=1520) ReabilitaCão FisioVet: É, então, se eu criar direto pela Maia, já fica todas as consultas, né?
[25:25](https://fathom.video/calls/619626329?timestamp=1525) victor igor: É, daí só faz por ela.
[25:27](https://fathom.video/calls/619626329?timestamp=1527) Reabilitacão Veterinária: E usa o Google só, não? dia assim, ai, tô fora da clínica, preciso marcar algum paciente, aí faz pelo Google, pelo celular, depois só chega na clínica e arruma na Maia. Sim. Né?
[25:38](https://fathom.video/calls/619626329?timestamp=1538) ReabilitaCão FisioVet: Isso.
[25:39](https://fathom.video/calls/619626329?timestamp=1539) victor igor: Esporádico, assim, quando precisar de algum que nem eu.
[25:41](https://fathom.video/calls/619626329?timestamp=1541) Reabilitacão Veterinária: Eu uso ainda o Google também aqui pra mim, mas depois eu vou prender, vou mexer direto aí na Maia também. Estrela.
[25:47](https://fathom.video/calls/619626329?timestamp=1547) ReabilitaCão FisioVet: Perfeito. Então, se puder fazer assim, já facilita, daí já entra tudo certinho, já o vincular veterinário e qualquer sessão que tá ativa.
[25:56](https://fathom.video/calls/619626329?timestamp=1556) Reabilitacão Veterinária: Aí, por exemplo, acho que depois que acabou o pacote, Pacote, eu acho que ela mesmo é contabilizada, daí ela tira de lá, daí é uma coisa de uma forma de gente depois lembrar o tutor para renovar esse pacote que acabou, por exemplo. Ou às vezes ele muda o pacote, então aí a gente vincula o novo pacote. Mas aí ela não vai aparecer mais pacote vinculado, porque acabou, por exemplo, entendeu? A gente vai ter que vincular novo.
[26:24](https://fathom.video/calls/619626329?timestamp=1584) victor igor: É que a hora que vocês forem criar, então, por exemplo, repetir o agendamento, é que está desativado, mas eu vou ativar e aí ele vai funcionar como no Google Calendar. Então, por exemplo, você quer repetir esse agendamento quantas vezes por mês ou até quando, né? E aí você seleciona aqui e mostra o pacote dele tem 10 sessões, então vai ser 10 semanas. Aí você cria aqui, ah, 10 semanas, vai continuar por 10 semanas. E aí, na hora que acabar esses 10 semanas, ele já não vai contar mais, ele não vai criar mais, né?
[26:54](https://fathom.video/calls/619626329?timestamp=1614) Reabilitacão Veterinária: É, mas só que aí tem cliente que continua indo, só que vai manter nesse mesmo horário, mesmo que o pacote acabou. Entendeu? Só que a exceção é próxima. É, aí, por exemplo, acabou o pacote, aí depois é a função das meninas lembrarem para a renovação. Então, é legal manter ele ainda agendado, mas só que ao mesmo tempo, se acabou o pacote, daí ela desvincula ali, se ela der certo fazer assim, tipo, de não aparecer nenhum pacote mais vinculado, porque realmente o pacote dela anterior acabou. Então, por exemplo, são oito sessões, pacote de oito que ela pagou. Então, enquanto tiver ainda oito sessões para serem feitas, vai aparecer lá para as meninas que o pacote está vinculado. Quando acabou essa oitava sessão, aí ela não aparece mais, porque daí teria que vincular novo pacote.
[27:41](https://fathom.video/calls/619626329?timestamp=1661) victor igor: Entendi.
[27:42](https://fathom.video/calls/619626329?timestamp=1662) Reabilitacão Veterinária: Daí não apareceria mais aqui nessa página que você está mostrando. Então, assim, ela, tipo, automaticamente cairia e, tipo, aí as meninas teriam que fazer agendamento de vender novo pacote no caso.
[27:54](https://fathom.video/calls/619626329?timestamp=1674) victor igor: Perfeito. Cadê elas? Sumiram?
[27:57](https://fathom.video/calls/619626329?timestamp=1677) Reabilitacão Veterinária: Daqui a pouco elas Daqui voltam. E aí aí E aí E aí Não sei se ficou confuso, mas mais ou menos assim, mas só de colocar já o pacote vinculado, já automático, já fica mais fácil.
[28:08](https://fathom.video/calls/619626329?timestamp=1688) ReabilitaCão FisioVet: não vinculando o pacote, lá já vai vir, tipo, o que que tá incluso nesse pacote. Ai, agora tá grande. Voltamos.
[28:17](https://fathom.video/calls/619626329?timestamp=1697) Reabilitacão Veterinária: Voltou. Agora volta.
[28:24](https://fathom.video/calls/619626329?timestamp=1704) victor igor: Perfeito. Tem mais alguma dúvida aí?
[28:26](https://fathom.video/calls/619626329?timestamp=1706) ReabilitaCão FisioVet: Acho que não, Vitor, tá tudo certo.
[28:31](https://fathom.video/calls/619626329?timestamp=1711) Reabilitacão Veterinária: Perfeito, depois fazer. Só mesmo pra colocar aí, e vai ter que ter o pacote vinculado. Então, agora, quando não tiver, tentar ver o que tá acontecendo. Por que que não tá vinculado é conversar com as meninas. Olha, eu não preenchi porque não tem pacote vinculado, por exemplo.
[28:44](https://fathom.video/calls/619626329?timestamp=1724) ReabilitaCão FisioVet: É, falei que isso tem agora, que eu abri aqui no celular pra ver, né? Eu abri aqui no celular pra ver. E aí, tipo assim, por exemplo, eu abri o da Alessandra, da Estrela, né? Aí, tipo assim, eu não consigo vincular pacote, vai ser só elas que vai conseguir vincular. Então, Não, não.
[29:01](https://fathom.video/calls/619626329?timestamp=1741) Reabilitacão Veterinária: Você não consegue? Bom, o da estrela...
[29:04](https://fathom.video/calls/619626329?timestamp=1744) ReabilitaCão FisioVet: Ah, é que não vai dar para vocês verem aqui, né? Dá para ver? Não, né? Está estourado, né? estourado. Aparece nenhum pacote, aí quando eu digito o pacote, que é o dela, também não aparece nada para mim. Então, talvez é porque a gente não consegue... fato de usuário, permissão mesmo.
[29:19](https://fathom.video/calls/619626329?timestamp=1759) victor igor: Pode adicionar, posso colocar.
[29:20](https://fathom.video/calls/619626329?timestamp=1760) Reabilitacão Veterinária: É, adicionar, que daí essa parte elas podem, elas mesmas, acrescentar. É que se a gente souber o pacote, é uma coisa mesmo para você fazer.
[29:27](https://fathom.video/calls/619626329?timestamp=1767) ReabilitaCão FisioVet: A gente já fez a lista.
[29:28](https://fathom.video/calls/619626329?timestamp=1768) Reabilitacão Veterinária: É, e daí ele Se a não souber o pacote, a gente passa aí para ela.
[29:32](https://fathom.video/calls/619626329?timestamp=1772) ReabilitaCão FisioVet: Mas eu vou tentar antes mostrar da gente que eu coloco, para ver se você consegue. Tá. Tá. Beleza. Então, perfeito. Então, Angel, daí você passa a parte para as meninas.
[29:42](https://fathom.video/calls/619626329?timestamp=1782) Reabilitacão Veterinária: É legal agora, de início, ir ajudando a colocar. E aí, todas as dúvidas, é o eu falei para as meninas. Anota, e aí depois você passa tudo junto para o Victor, para não ficar mandando 300 mensagens no dia para ele. Aí a gente vê depois... Não precisa esperar para a reunião, mas anota as várias dúvidas. Vai mexendo. Aí vai anotando e depois você faz tudo junto, que daí ele vai explicando e aí, caso coisas que não derem certo, ele mesmo ajusta para deixar tudo organizado. Tá, eu vou falar para elas já entrar hoje e a gente vai testando hoje. Vai testando hoje, tá de bom? Pega os de hoje para testar.
[30:16](https://fathom.video/calls/619626329?timestamp=1816) ReabilitaCão FisioVet: E aí eu vou anotando as dúvidas e depois eu mando tudo para a Cris mandar. Isso, isso, tá?
[30:22](https://fathom.video/calls/619626329?timestamp=1822) Reabilitacão Veterinária: Pode ser.
[30:23](https://fathom.video/calls/619626329?timestamp=1823) victor igor: É, e se tiverem também algo que queira adicionar aí também, que vai facilitar no dia a dia de vocês aí. Tá.
[30:29](https://fathom.video/calls/619626329?timestamp=1829) Reabilitacão Veterinária: Feche agora mexendo para a gente entender o que a gente vai testar ali ou não. Sim.
[30:35](https://fathom.video/calls/619626329?timestamp=1835) ReabilitaCão FisioVet: Então, perfeito.
[30:36](https://fathom.video/calls/619626329?timestamp=1836) victor igor: Essa parte deu para entender? Ou ficou alguma dúvida? Não, deu para entender. Deu para entender. Achei. Perfeito. Então, vou mostrar aqui agora a parte dos exames. Essa parte que tinha pedido, Fran. Que é no cantor. É novo. Como funciona a parte de exames aqui? Normal, né? Dá para você criar novo exame aqui. E aí... Então, o exame aqui você pode colocar, vou colocar teste aqui, tipo do exame, selecionar a categoria do exame, e aqui a data e tudo mais, e aí, for da clínica ou for veterinário externo, então, vamos colocar aqui, e aí essas coisas aqui, pode preencher manual ou mandar para a IA preencher, tá? Então, aqui você consegue selecionar o arquivo do exame, eu vou até criar aqui, e aí você pode vir aqui, ele vai aparecer assim também, né, para você editar, seleciona aqui, enviar o arquivo, vou selecionar que eu estava testando aqui, e aí eu seleciono o arquivo, eu envio, eu envio para ele processar, ele vai aparecer assim, aí se eu quiser analisar com a IA, eu mando para ela analisar. Ah, e daí ela faz, tipo, resumo.
[31:48](https://fathom.video/calls/619626329?timestamp=1908) Reabilitacão Veterinária: Isso, ela vai enviar, vai ler, vai ser o dado.
[31:51](https://fathom.video/calls/619626329?timestamp=1911) victor igor: Tá? Então, aqui ela já encontrou tudo, ela já pegou resumo do exame, tá? Então, ela já identificou aqui que não é a idade. Ele, a raça, né? Todas as informações e também os exames dele aqui, né? Gente, vindo, te salvou minha vida.
[32:09](https://fathom.video/calls/619626329?timestamp=1929) ReabilitaCão FisioVet: Mas você não entregou o arquivo do exame ou... Só carregar o arquivo.
[32:16](https://fathom.video/calls/619626329?timestamp=1936) Reabilitacão Veterinária: Só carregar o arquivo.
[32:17](https://fathom.video/calls/619626329?timestamp=1937) ReabilitaCão FisioVet: Ah, tá.
[32:18](https://fathom.video/calls/619626329?timestamp=1938) victor igor: Ela faz resumo.
[32:20](https://fathom.video/calls/619626329?timestamp=1940) Reabilitacão Veterinária: Aí, aqui, você pode mandar para ele preencher os campos, né?
[32:24](https://fathom.video/calls/619626329?timestamp=1944) victor igor: Então, ele aparece aqui, preencher campos do exame. Você clicando aqui, ele aparece, ó, o ele achou. Então, o resumo do exame, resultados estruturados, o laboratório, né? Qual que foi o laboratório, número do laudo, data do resultado, método que ele não achou, né? Material biológico e observações também. ficar nas veterinárias, mãe.
[32:44](https://fathom.video/calls/619626329?timestamp=1964) Reabilitacão Veterinária: Meu, ela ajuda muito, muito, né, cara?
[32:47](https://fathom.video/calls/619626329?timestamp=1967) victor igor: muito. Aí, você preenchendo, ó, ele já preencheu aqui, Ele já até editou aqui, tá vendo? Você colocou aqui o resumo. Nossa, vou acrescentar monte de exame agora.
[32:55](https://fathom.video/calls/619626329?timestamp=1975) Reabilitacão Veterinária: Vou ver ela trabalhar.
[32:58](https://fathom.video/calls/619626329?timestamp=1978) victor igor: E aí, ó, como que ele aparece aqui. Agora, quando ele tem dados, ele aparece o gráfico, a evolução, tá? Então, se você subir vários exames e for a mesma referência ali, né? Mesmo parâmetro, né? Você vai conseguir ver a evolução. Então, no dia 25, ele tava com o valor aqui 7.62. E aí, se tiver outras datas, você consegue ir visualizando a evolução.
[33:21](https://fathom.video/calls/619626329?timestamp=2001) Reabilitacão Veterinária: Gente, Era o que eu queria. E aí, dá pra acrescentar o teste e o ultrassom também, né?
[33:27](https://fathom.video/calls/619626329?timestamp=2007) ReabilitaCão FisioVet: Tem de imagem aqui, eu vi.
[33:28](https://fathom.video/calls/619626329?timestamp=2008) victor igor: De imagem também, né? Tá. Aí, eu testei só com esse exemplo aqui, tá? Aí, se você tiver outros exemplos... Não, eu vou jogando.
[33:38](https://fathom.video/calls/619626329?timestamp=2018) Reabilitacão Veterinária: Aqui, eu tô cheio de exame aqui pra mandar. Daí, vou vendo como que ela vai funcionando. Daí, qualquer dúvida, eu te mando. Tá. Aí, você me avisa qualquer coisa. Vou adicionar exames e maio. Deixa eu remover aqui, né?
[33:50](https://fathom.video/calls/619626329?timestamp=2030) victor igor: Muito legal, Victor. Nossa, arrasou. Ah, e aqui também vai ficando tudo... Nos arquivos, vai ficar tudo organizado aqui também. Nossa, muito bom. Os arquivos que você vai subindo dele, vai aqui como exames. O de dietas, eu vou estruturar melhor ainda também, meio que mantendo esse padrão, Fran. Vou depois fazer uma utilização dele. Está naquela versão antiga ainda, né? Mas vai ficando tudo em arquivo aqui também.
[34:15](https://fathom.video/calls/619626329?timestamp=2055) Reabilitacão Veterinária: Mas já estou gostando do jeito que está. E aí, ele vai ficar tudo no sistema. Eu posso apagar depois o meu computador, que ele continua aí, esses resumos.
[34:27](https://fathom.video/calls/619626329?timestamp=2067) victor igor: Vai ficar aqui, velho. Vai ficar no seu banco de dados.
[34:31](https://fathom.video/calls/619626329?timestamp=2071) Reabilitacão Veterinária: Tem bastante espaço aí, né? Tem.
[34:36](https://fathom.video/calls/619626329?timestamp=2076) victor igor: Não vai perder nada, não.
[34:40](https://fathom.video/calls/619626329?timestamp=2080) Reabilitacão Veterinária: Claro que às vezes ela pode, quê? Depois que faleceu, sei lá. Não sei, depois de ter padrão. Depois que acumular muita coisa, a pode depois ver uma forma de ela ir apagando coisas mais antigas. Tipo, exame de paciente que já passou faz três anos, sei lá.
[34:55](https://fathom.video/calls/619626329?timestamp=2095) victor igor: É, vai limpando, né? A gente pode ver depois a forma de limpar.
[34:58](https://fathom.video/calls/619626329?timestamp=2098) Reabilitacão Veterinária: Mas, por enquanto, vamos deixando tudo aí. Então
[35:00](https://fathom.video/calls/619626329?timestamp=2100) victor igor: Perfeito. E aí, aqui você consegue visualizar também, isso aqui é novo, eu coloquei uma timeline, o histórico do patch, então ele aparece todos os registros que vocês vão fazendo no histórico do patch, ele vai aparecendo aqui. Então, exames, consultas, peso. Então, em janeiro, qual foi o peso dele? 10,75, em fevereiro. Então, vocês conseguem visualizar por aqui também, no histórico mesmo.
[35:29](https://fathom.video/calls/619626329?timestamp=2129) Reabilitacão Veterinária: Perfeito. Nossa, muito bom. Aí, a única coisa que faltou, Fran, que você mandou lá, é a do receituário.
[35:35](https://fathom.video/calls/619626329?timestamp=2135) victor igor: Eu não quero, eu coisa. E aí, a gente já coloca também.
[35:40](https://fathom.video/calls/619626329?timestamp=2140) Reabilitacão Veterinária: Ai, peraí, voltei, que minha sala está me perguntando. O é a última coisa que falou?
[35:46](https://fathom.video/calls/619626329?timestamp=2146) ReabilitaCão FisioVet: A última coisa que faltou fazer, que foi aquela última coisa lá que você pediu, né, do receituário.
[35:51](https://fathom.video/calls/619626329?timestamp=2151) victor igor: Ah, sim. Daí, o receituário tem pegar botão aí. Fazer essa semana ainda e a gente já vê o botão para vocês, tá?
[35:57](https://fathom.video/calls/619626329?timestamp=2157) Reabilitacão Veterinária: É, porque daí eu já faço aí com ela, fica mais fácil. Mas você viu que é basiquinha, não precisa daquela coisa de remédio controlado, nada, porque a gente não, depois a pode colocar Futuramente, mas você viu lá, é o template básico mesmo, com o CRMV embaixo e o nome certinho. Tá, eu faço a mesma estrutura lá no Reabilitacão. É, se der também, não sei se dá, mas para a gente colocar uma assinatura em cima, assinar, às vezes a gente pode bolar a assinatura de todo mundo, eu tenho a minha no, tipo no, já tenho no computador a minha, daí às vezes de colocar já junto lá e colocar a assinatura em cima. Tá, me manda depois.
[36:39](https://fathom.video/calls/619626329?timestamp=2199) victor igor: Eu te mando, só para ver, não sei se dá para mandar, colocar aqui.
[36:44](https://fathom.video/calls/619626329?timestamp=2204) Reabilitacão Veterinária: É, fala, tipo assinatura digital? É, porque tem, tem locais que não aceita, tem que ter carimbo, tem que ter assinatura, aí às vezes, porque como está na nuvem verde, ela só vem o que? O CRMV e o nome escrito. Tchau. Às vezes, se eu puder colocar uma assinatura, a rúbrica nossa em cima, daí fica legal, porque daí fica mais completinho. Manda escrito, né, Fran?
[37:08](https://fathom.video/calls/619626329?timestamp=2228) ReabilitaCão FisioVet: É, escrito, é.
[37:10](https://fathom.video/calls/619626329?timestamp=2230) Reabilitacão Veterinária: Igual a gente faz aqui em cima do teclado, no negócio do mouse do computador. Tá.
[37:15](https://fathom.video/calls/619626329?timestamp=2235) victor igor: É, só me manda como que é, eu vejo como que dá pra fazer. Tá, vê se dá pra colocar. Se não der, tem problema. Não, provavelmente dá. Muito bem sem ela. Tudo dá pra fazer, né?
[37:25](https://fathom.video/calls/619626329?timestamp=2245) ReabilitaCão FisioVet: Mas aí, a única coisa que não tem aí é o receituário.
[37:30](https://fathom.video/calls/619626329?timestamp=2250) victor igor: É, o restante tem tudo no VENVET.
[37:32](https://fathom.video/calls/619626329?timestamp=2252) Reabilitacão Veterinária: Tudo, exceto o receituário, por enquanto, que a gente não tá usando, e que não tem ainda, e a parte do financeiro. Isso ainda não entrou nada disso. Mas, de resto, o que tem no VENVET e a mais, na verdade. Pra nossa parte, por exemplo. Isso.
[37:48](https://fathom.video/calls/619626329?timestamp=2268) victor igor: Aí, essa parte de exames, vocês vão testando. Aí, vocês me falam, né? Eu coloquei aqui pra mandar vários formatos também, né? PDF, imagem, outros arquivos, tá? E aí, mas aí vocês vão me testar, porque como é novo também, né, eu fiz alguns testes, mas pode ter alguma coisa que eu deixo, eu acabo passando, né? Tá, algum detalhe. Aí vocês vão me avisando.
[38:10](https://fathom.video/calls/619626329?timestamp=2290) Reabilitacão Veterinária: E outra coisa, só para finalizar da minha parte, os... Já está entrando em ação com as nossas pessoas que estão em teste? A da lista que a Nath te mandou? Isso aí eu não falei com elas ainda. Esse...
[38:24](https://fathom.video/calls/619626329?timestamp=2304) victor igor: Ah, dá para a gente liberar. Eu... Lá está no número de teste ainda, né? Se vocês quiserem, posso... A gente já pode liberar no número de vocês, aí eu crio aquela... Aquela whitelist, né? Quem que ela vai poder responder. E fica ativo.
[38:38](https://fathom.video/calls/619626329?timestamp=2318) Reabilitacão Veterinária: Quer já começar o teste, Nath? Pode ser. Me ver. Aí, Nath, igual eu faço, ela vai responder, mas aí você vai ler tudo que ela respondeu, e aí vai anotando. Ó, não respondeu certo isso, aqui está errado, lá, E aí, antes de... Já avisou os tutores que a gente vai usar de teste? De teste? Alguns já, outros ainda... Avisa todos eles antes, e aí se puder, Victor, deixar ela entrar em ação para esses clientes, tipo na quarta-feira, e aí dá tempo da Nath avisar todo mundo, e aí ela respondeu, você vai anotar tudo o que ela fez de errado, vamos dizer assim, está tudo certo, exceto isso, isso, isso, que daí a gente vai, o Victor vai ajustando.
[39:20](https://fathom.video/calls/619626329?timestamp=2360) ReabilitaCão FisioVet: Tá, vamos pôr em prática, vai ser bom.
[39:23](https://fathom.video/calls/619626329?timestamp=2363) Reabilitacão Veterinária: E aí agora, até quarta-feira, vocês vão testando ela, então hoje a Índia já vai testar, e aí você e a Cris também pegam para testar ela até quarta-feira, passa, até quarta-feira antes do Victor liberar, passa tudo o que vocês acham que tem que mudar, aí já libera para os nossos clientes, esses aí, esses do whitelist aí.
[39:42](https://fathom.video/calls/619626329?timestamp=2382) ReabilitaCão FisioVet: Tá. Tá?
[39:44](https://fathom.video/calls/619626329?timestamp=2384) Reabilitacão Veterinária: Tá bom.
[39:47](https://fathom.video/calls/619626329?timestamp=2387) victor igor: Perfeito. É, aí eu já faço essas correções que vocês mandaram para mim hoje também, aí eu já aviso vocês também, aí vocês vão testando. Desculpa, eu tenho uma dúvida.
[40:00](https://fathom.video/calls/619626329?timestamp=2400) ReabilitaCão FisioVet: Olha só, para você, Victor. Uma delas era para eliminar, para excluir aquelas exceções da bolsa dos pacotes, que você aqui pode ver e ainda está lá e eu não consegui excluir, e a outra coisa, por exemplo, protocolo que tem quatro ozônio retal e três tênis. Por exemplo, como é que o sistema, ou a Maia, vai saber que acabou, que não tem mais direito, que agora está na hora de cobrar? Porque você vai ticando, isso? No patch, quando o patch tem protocolo, pacote, ele fica aqui.
[40:46](https://fathom.video/calls/619626329?timestamp=2446) victor igor: Então, toda consulta que ela é concluída, automaticamente ele já vai removendo. e já vai aumentando.
[40:53](https://fathom.video/calls/619626329?timestamp=2453) ReabilitaCão FisioVet: Vai fazendo tipo âmbito.
[40:55](https://fathom.video/calls/619626329?timestamp=2455) Reabilitacão Veterinária: Tá. E aí, quando ela for agendar novamente, ela vai ver.
[41:00](https://fathom.video/calls/619626329?timestamp=2460) ReabilitaCão FisioVet: Tá, acho que era só essas minhas dúvidas, era o excluir para você, Victor. A Fran, eu só queria perguntar, quando você lança uma consulta, você lança pelo perfil do PET ou pela agenda? O que?
[41:18](https://fathom.video/calls/619626329?timestamp=2478) Reabilitacão Veterinária: Quando você vai lançar, você fez a consulta, uma manutenção... só escrevi a consulta.
[41:24](https://fathom.video/calls/619626329?timestamp=2484) ReabilitaCão FisioVet: Aí você entra no tutor, entra no PET, no perfil do PET e lança a consulta, isso? Não, eu só escrevi a consulta. Não entendi. Não, ou você clica na agenda e aí de lá você abre, porque na agenda... Na agenda tem a evolução de sessão, você marca a consulta pela evolução de sessão ou vai direto no perfil do cachorro e marca a consulta lá?
[41:52](https://fathom.video/calls/619626329?timestamp=2512) Reabilitacão Veterinária: Registra a Eu só escrevo a consulta, não tô marcando nada. Não, eu sei que não. não, sei sei eu não
[42:00](https://fathom.video/calls/619626329?timestamp=2520) ReabilitaCão FisioVet: Então, você escreve a consulta, entrando no perfil do cachorro. Entrando no perfil do cachorro, eu vou no paciente, pede-se, clico lá no Zigo e clico ali em cima, consulta. Beleza, é isso que a gente queria saber, porque dá pra você fazer isso, esse registrar a consulta que você fez, pela agenda também.
[42:23](https://fathom.video/calls/619626329?timestamp=2543) Reabilitacão Veterinária: Tá, mas eu acho mais fácil eu entrar ali, que daí eu procuro o paciente, aí eu preencho os dados que eu preciso preencher dele e tudo mais, e aí faço a consulta.
[42:31](https://fathom.video/calls/619626329?timestamp=2551) ReabilitaCão FisioVet: Beleza. Ah, isso aqui que eu vou falar, entrar por aqui.
[42:36](https://fathom.video/calls/619626329?timestamp=2556) Reabilitacão Veterinária: Isso.
[42:38](https://fathom.video/calls/619626329?timestamp=2558) victor igor: Sim. Evolução da sessão.
[42:39](https://fathom.video/calls/619626329?timestamp=2559) Reabilitacão Veterinária: Ah, mas isso é evolução da sessão, não é consulta. Tá. Tá? Beleza. Hoje fala, ensina a Milena a entrar por aí, tá? Eu já mostrei pra ela. Tá bom. Mas aí se ela vai lá no Pets, clica no nome do pet, aí vai lá, consulta, pronto, só é fazer. Ali, ó. Tchau. E registrar consulta. É, tem template aqui só também, foi o que eu peguei lá do Nuvem Vete, não sei se tem outro que vocês usam. eu uso ou esse ou ele em branco mesmo, que daí a parte de dieta eu coloco ele em branco. Depois eu posso montar outro modelo também.
[43:14](https://fathom.video/calls/619626329?timestamp=2594) victor igor: É, se vocês quiserem, depois eu posso colocar até na IAC também, então, se acharem necessário. É legal, acho lindo, pode pôr.
[43:25](https://fathom.video/calls/619626329?timestamp=2605) ReabilitaCão FisioVet: Era essa parte que você falou que talvez poderia entrar para, tipo, ela gravar a nossa conversa com o doutor e pegando a parte Ah, é verdade, né, Vitor?
[43:35](https://fathom.video/calls/619626329?timestamp=2615) Reabilitacão Veterinária: Aí daria para colocar o áudio para ela gravar toda a consulta ou fica muito pesado? Porque é uma consulta de, sei lá, 30 minutos falando.
[43:46](https://fathom.video/calls/619626329?timestamp=2626) victor igor: O que você acha? Até dar, eu pensar no melhor formato, mas basicamente ou teria que gravar pelo celular mesmo, né, ou pelo computador, né, alguma coisa ali que vai gravar e a gente pega a transcrição e manda, né.
[44:00](https://fathom.video/calls/619626329?timestamp=2640) ReabilitaCão FisioVet: É, porque seria só, tipo, pegar as partes mais importantes, porque às vezes o doutor fala muita coisa que não é nem relevante, é só, tipo...
[44:07](https://fathom.video/calls/619626329?timestamp=2647) victor igor: Sim, aí a gente conseguiria, aí eu conseguiria colocar, tipo, meio que para ela, ou a gente pode criar alguma coisa dentro do sistema mesmo, para ficar ouvindo, né, ou você pega o arquivo, né, da gravação, da transcrição e tudo mais, envia para a IA e ela vai fazer todo o processo na automática. Entendi.
[44:26](https://fathom.video/calls/619626329?timestamp=2666) Reabilitacão Veterinária: É, também, dá para pensar, pensa o que você acha melhor, mas isso só de a gente escrever e ela arrumar, já fica ótimo. sim.
[44:35](https://fathom.video/calls/619626329?timestamp=2675) ReabilitaCão FisioVet: Já ajuda, tá, já pode fazer isso, sim.
[44:38](https://fathom.video/calls/619626329?timestamp=2678) victor igor: Tá, aí a gente vê ali como que daria para vocês gravarem a consulta, né, e aí para enviar para ela já direto.
[44:46](https://fathom.video/calls/619626329?timestamp=2686) Reabilitacão Veterinária: É, então, perfeito, ficou muito bom.
[44:49](https://fathom.video/calls/619626329?timestamp=2689) victor igor: Tá, aí outra coisa que eu ajustei também foi a parte de lembretes, não sei se vocês chegaram a ver, mas eu separei aqui na interface também, acho que foi... O melhor agora para vocês visualizarem, e aí aqui tem as configurações e tem o histórico, e aí o histórico vocês conseguem visualizar agora também, quantos lembretes foram enviados por dia, e aí aqui vocês conseguem visualizar todos que estão pendentes na fila, então na fila tem 1.569, enviados já foram 567, e aí aqui tem o fio, para vocês filtrarem por dia, quais foram enviados, enfim, então aqui hoje, hoje foi enviado 5, foram enviados 5, nenhum erro, tem na fila, nem nada do tipo, então quando não foi enviado, ou algo do tipo, vocês podem entrar aqui e visualizar, se acontecer algum erro, porque se acontecer algum erro, ele vai aparecer botão para vocês reenviarem também, aí vocês conseguem processar e enviar de novo, ou se realmente não está aqui na fila, por algum motivo, ou se ainda está processando, enfim, então vocês conseguem visualizar tudo por aqui, inclusive a mensagem que vai ser enviada, então a mensagem que vai ser enviada, vocês conseguem clicar aqui na edição, E vai aparecer aqui, né, a mensagem, caso esteja alguma coisa errada, né, horário errado, ou dia errado, ou até mesmo aquela questão lá de consulta e sessão, né, se estiver errado, vocês conseguirem editar aqui para antes ser enviado, ela enviar, correto, tá?
[46:14](https://fathom.video/calls/619626329?timestamp=2774) Reabilitacão Veterinária: Então, aí você fica de olho, e aí você coloca do dia, porque se colocar ela ali, vai ficar, tipo, na fila de 300 milhões de mensagens. Coloca do dia, o foi enviado, o que tem que ser mandado realmente no dia. Tem.
[46:28](https://fathom.video/calls/619626329?timestamp=2788) victor igor: Aí, tipo, de amanhã vai ser esse aqui, tem sete na fila, né, então tem sete na fila aqui.
[46:33](https://fathom.video/calls/619626329?timestamp=2793) Reabilitacão Veterinária: Ou seja, não são só esses sete, vai ter mais paciente, então tem que olhar lá qual que está faltando, que não tem só sete de rendimento amanhã, por exemplo. Aí você já vê o que está errado, arruma eles, aí ela já vai certinho para o dia seguinte, então sempre no dia anterior já olha o vai ser enviado no próximo dia.
[46:50](https://fathom.video/calls/619626329?timestamp=2810) victor igor: Isso. E aí tem horário programado aqui também, né, às oito horas, enfim. Tá, ficou legal. Tudo certinho. Aí qualquer dúvida vocês me avisam, vão me avisando também. Porque aqui agora eu vou visualizar, acho que foi melhor agora assim, né?
[47:03](https://fathom.video/calls/619626329?timestamp=2823) ReabilitaCão FisioVet: Sim. Ótimo. Bem melhor. Perfeito.
[47:10](https://fathom.video/calls/619626329?timestamp=2830) victor igor: Deixa eu ver se tem mais alguma coisa.
[47:12](https://fathom.video/calls/619626329?timestamp=2832) ReabilitaCão FisioVet: E aí você vai ativar os recorrentes, né? Do agendamento?
[47:16](https://fathom.video/calls/619626329?timestamp=2836) victor igor: Vou corrigir. Vou ver se eu adiciono ainda hoje, mas eu vou dar certeza. Tá. Agora você pode me avisa na hora que eu esquivar. Tá. Não esteja de pressa, né? Não, perfeito. É porque tem muita questão de sincronização e tudo mais, né? Então é pouquinho chato na hora que vai ativar. Então, aí tem que realizar os testes antes, aí depois eu libero pra vocês, tá? Combinado, Victor. Aí a única coisa também que eu ajustei aqui foi a questão dos horários da clínica aqui, tá? Agora eu coloquei que a Cristian comentava. Era a hora de pausa de vocês, né? A hora de almoço e tudo mais. Então... Ah, é verdade. Aqui eu coloquei, agora tem os intervalos, né? Então, depois até vocês verificam. Mas tá tudo certo mesmo? Mas da terça, das doito, do meio-dia, é a uma até a cinco, né? Então, agora tem os intervalos aqui, porque a hora que a Maia for buscar o horário, ela não vai buscar o horário, né? não marca o horário de almoço. Tá. Arrasou. Beleza.
[48:17](https://fathom.video/calls/619626329?timestamp=2897) Reabilitacão Veterinária: Muito bom. Perfeito.
[48:18](https://fathom.video/calls/619626329?timestamp=2898) victor igor: Alguma dúvida, alguma consideração? Não, não, tá perfeito, tá?
[48:23](https://fathom.video/calls/619626329?timestamp=2903) Reabilitacão Veterinária: Cada vez melhor.
[48:25](https://fathom.video/calls/619626329?timestamp=2905) ReabilitaCão FisioVet: Excelente. Cada vez que a gente fala, a gente acha que fica mais feliz.
[48:29](https://fathom.video/calls/619626329?timestamp=2909) Reabilitacão Veterinária: Nossa, com certeza. Que bom, então.
[48:32](https://fathom.video/calls/619626329?timestamp=2912) victor igor: Não, vocês arrasam. Então, a gente vai anotando. Aí vocês me enviam aí também depois, os feedbacks da Maia. Tá bom. E eu já vou fazendo por aqui também. Combinadíssimo, Perfeito. Obrigada, viu, gente? Obrigada, meninas. Obrigada, viu, Victor? A gente vai se falando, Até mais. Beijo, beijo. beijo. Tchau, tchau. Tchau.
