---
tipo: tutorial
status: rascunho
tags: [cliente/bravo, area/vendas, tipo/tutorial, skill/aprovacao]
cliente: bravo
fonte: "Reunião Google Meet — 2026-05-15 (1h09)"
autor_origem: "Lucas (OpenClaw) + Hugo + Gustavo (Bravo)"
---

# Tutorial — Fluxo de aprovação do cliente via IA (Skill 1)

> [!info] Como este tutorial foi montado
> Vídeo de 1h09 (`Impromptu Google Meet Meeting - May 15 2026.mp4`) foi transcrito localmente (whisper `base` em PT-BR) e segmentado em 9 clipes correspondentes a cada tópico do fluxo. A ordem aqui não é a ordem do vídeo — é a ordem **didática** (do setup do cliente até a aprovação chegando). Quando a reunião corrigiu uma instrução dada no começo, este tutorial sempre usa a **versão corrigida** e marca a versão antiga como descartada.
>
> Transcrição completa: [`transcricao-completa.txt`](./transcricao-completa.txt) (qualidade ~ modelo `base`, há erros de palavras — uso pretendido é busca/varredura).

> [!warning] Duas correções importantes que aconteceram no fim da reunião
> 1. **Não é o telefone do cliente que vai no ClickUp — é o ID do grupo do WhatsApp.** A explicação inicial (aos 18:50 do vídeo) ficou desatualizada quando, perto do fim (aos 53:30), Gustavo perguntou se podia usar grupo do WhatsApp e a decisão mudou pra usar grupo.
> 2. **A ordem para iniciar uma validação é invertida em relação ao que foi dito no começo.** No começo (aos 08:00) ficou parecendo que era "criar pasta no Drive → IA cria tarefa no ClickUp". No fim (aos 63:08) ficou definido: **cria primeiro a tarefa no ClickUp**, o ClickUp cria automaticamente a subpasta no Drive, e aí você joga os arquivos lá dentro.

---

## Visão geral do fluxo

A skill de aprovação automatizada faz cinco coisas, num loop que roda **a cada 5 minutos** (cron job):

1. Vê se entrou tarefa nova no ClickUp ou arquivo novo na subpasta do Drive do cliente.
2. Se entrou, dispara mensagem no **grupo do WhatsApp** do cliente com o link do Drive pra ele aprovar.
3. Fica monitorando a resposta do cliente no grupo do WhatsApp.
4. Interpreta a resposta (aprovou / pediu ajuste / rejeitou) e atualiza o status da tarefa no ClickUp automaticamente.
5. Se for ajuste, espera um novo arquivo na pasta. Quando aparece, dispara nova mensagem de aprovação.

▶ **Clipe — Visão geral (5 min):** [`clipes/00-visao-geral-do-fluxo.mp4`](./clipes/00-visao-geral-do-fluxo.mp4)
*(trecho original: 06:00 → 11:05 do vídeo)*

---

## 1. Cadastrar o cliente — colocar o ID do grupo do WhatsApp no ClickUp

> [!danger] Atenção: substitui a fala inicial do Lucas sobre "telefone do cliente"
> No começo da reunião (18:50) foi dito que bastava colocar o **telefone** do cliente num campo customizado do ClickUp. Isso **mudou** quando Gustavo lembrou que a agência já usa um grupo de WhatsApp por cliente, e ficou acordado: a IA vai mandar a aprovação **dentro do grupo**, e o que precisa estar no ClickUp é o **ID do grupo** (não o telefone individual).

**Passo a passo:**

1. Abra o grupo do WhatsApp do cliente.
2. Toque no nome do grupo → entre em **Detalhes do grupo**.
3. Role até o fim, clique em **Convidar via link**.
4. **Copie o link de convite.** Ele tem o formato `https://chat.whatsapp.com/XXXXXXXXXXX` — o pedaço final (depois da `/`) é o **ID do grupo**.
5. No ClickUp, abra o card do cliente e cole **o link inteiro** (ou só o ID) no campo customizado de identificação do grupo. A IA extrai o ID daí.
6. **Adicione o número da IA no grupo do WhatsApp** — sem isso, ela não consegue mandar nem ler mensagens.

▶ **Clipe — Decisão de usar grupo no lugar do telefone (3 min):** [`clipes/02b-correcao-id-grupo-no-clickup.mp4`](./clipes/02b-correcao-id-grupo-no-clickup.mp4)
*(trecho: 53:30 → 56:30 — Gustavo sugere, Lucas valida, Hugo explica que é o ID do grupo)*

▶ **Clipe — Como pegar o ID do grupo na prática (3 min):** [`clipes/02c-pegar-id-grupo-na-pratica.mp4`](./clipes/02c-pegar-id-grupo-na-pratica.mp4)
*(trecho: 58:30 → 61:35 — Gustavo faz isso pelo iPhone com a Alfabetiza, primeiro cliente piloto)*

▶ **Clipe (descartar):** [`clipes/02a-telefone-versao-inicial-DESCARTADA.mp4`](./clipes/02a-telefone-versao-inicial-DESCARTADA.mp4)
*(18:50 → 19:35 — está aqui só pra contexto. Esta instrução foi superada pela correção acima.)*

---

## 2. Iniciar uma nova validação — criar a tarefa no ClickUp **primeiro**

> [!tip] Gatilho do fluxo
> A automação **começa pela tarefa no ClickUp**, não pelo Drive. Foi essa a versão final acordada na reunião (63:08).

**Passo a passo:**

1. No ClickUp, vá na lista do cliente (cada cliente tem sua própria lista — confirmado aos 48:21 do vídeo).
2. Crie uma **tarefa nova** com o nome do criativo / planejamento que precisa de aprovação.
3. **Só isso.** O ClickUp está sincronizado com o Drive: quando você cria a tarefa, ele **cria automaticamente uma subpasta no Google Drive** do cliente com o mesmo nome, e já vincula a pasta ao card.
4. Aguarde alguns segundos pra subpasta aparecer no Drive.

▶ **Clipe — Criar a tarefa que dispara tudo (1m20s):** [`clipes/01-iniciar-validacao-criar-tarefa-clickup.mp4`](./clipes/01-iniciar-validacao-criar-tarefa-clickup.mp4)
*(trecho: 62:45 → 64:05 — Hugo explica o fluxo correto: "é só criar a primeira tarefa no Cripap. E aí ele vai criar a sua vinha pasta lá no Google Drive. Aí, só joga os arquivos lá dentro.")*

---

## 3. Inserir os materiais para análise — direto na subpasta do Drive

Os arquivos (imagens, vídeos, PDFs de planejamento) vão **na subpasta que o ClickUp criou automaticamente** no Drive do cliente — não solta em qualquer lugar.

**Passo a passo:**

1. Abra o card da tarefa no ClickUp.
2. Clique no **link do Drive** que apareceu vinculado ao card (é a subpasta auto-criada do passo anterior).
3. **Suba os arquivos lá dentro.**
4. Em até 5 minutos, o cron da IA vai detectar o arquivo novo, marcar a tarefa como "aguardando aprovação" e mandar a mensagem no grupo do WhatsApp do cliente.

> [!note] A IA não cria a pasta — o ClickUp cria
> Confirmado aos 19:00 do vídeo: o ClickUp está sincronizado com o Drive via integração nativa. Quem cria a estrutura é o ClickUp. A IA só monitora o resultado.

▶ **Clipe (mesma cena do passo 2):** [`clipes/03-onde-inserir-materiais-no-drive.mp4`](./clipes/03-onde-inserir-materiais-no-drive.mp4)
*(62:45 → 64:05 — mesmo trecho, focando no momento "Aí, só joga os arquivos lá dentro")*

---

## 4. Quando a IA dispara a notificação para o cliente

A IA **não dispara em tempo real** — ela roda um cron a cada 5 minutos que faz três checagens em paralelo:

| Checagem | O que dispara |
|----------|---------------|
| **Pasta do Drive** mudou? | Se subiu arquivo novo → manda mensagem de aprovação no grupo |
| **Cliente respondeu** no WhatsApp? | Lê o comentário e atualiza o status no ClickUp |
| **Status do ClickUp** mudou manualmente? | Sincroniza com o resto do fluxo |

A janela de 5 minutos foi escolhida pra não sobrecarregar a VPS — se rodasse a cada 1 minuto, gastaria muito recurso e poderia se sobrepor a execuções ainda em andamento.

> [!note] Como o cliente recebe na prática
> A mensagem chega no **grupo do WhatsApp do cliente** com:
> - Saudação personalizada com o nome do cliente.
> - Nome da tarefa (o que você nomeou no ClickUp).
> - **Link direto pro Drive** com a subpasta pronta (sem precisar pedir acesso — já vem visível).
> - Instrução pra responder no próprio grupo aprovando ou pedindo ajuste.

▶ **Clipe — Por que de 5 em 5 minutos (3 min):** [`clipes/05-notificacao-quando-cron.mp4`](./clipes/05-notificacao-quando-cron.mp4)
*(trecho: 25:30 → 28:35 — explicação do cron job e por que não dá pra ser instantâneo agora)*

▶ **Clipe — Como a mensagem aparece no WhatsApp (1m35s):** [`clipes/05b-exemplo-mensagem-whatsapp.mp4`](./clipes/05b-exemplo-mensagem-whatsapp.mp4)
*(trecho: 17:00 → 18:35 — Lucas mostra a mensagem real chegando)*

---

## 5. Como o cliente faz a aprovação

> [!important] Aprovação é direto no WhatsApp, não no ClickUp
> Na primeira explicação ficou ambíguo se o cliente comentava no ClickUp ou no WhatsApp. Aos 13:48, Hugo corrigiu: **"Aprovação é direto no WhatsApp."** O cliente nunca abre o ClickUp.

**Como funciona:**

1. Cliente recebe a mensagem no grupo do WhatsApp.
2. Cliente clica no link do Drive, vê os materiais.
3. Cliente volta pro WhatsApp e **responde no grupo** — em texto, em linguagem natural ("aprovado", "pode mandar", "subir o título 5px", "trocar a foto X", etc.).
4. A IA lê a resposta, interpreta:
   - **Se entendeu como aprovação** → muda o status da tarefa pra "Planejamento aprovado" no ClickUp, registra um comentário tipo "Cliente confirmou através do WhatsApp" e segue.
   - **Se entendeu como ajuste/rejeição** → vai pro fluxo do passo 6.
   - **Se não conseguir entender** → escala pra um humano (hoje configurado pra notificar o Hugo).

> [!tip] Cliente respondendo por áudio
> Funciona, mas a IA pode errar interpretação. Recomendação acordada (13:55): pedir pro cliente responder em texto sempre que der. Como mitigação, dá pra plugar transcrição da API do WhatsApp depois.

▶ **Clipe — Correção: aprovação é no WhatsApp (30s):** [`clipes/06a-aprovacao-correcao-whatsapp.mp4`](./clipes/06a-aprovacao-correcao-whatsapp.mp4)
*(trecho: 13:40 → 14:10)*

▶ **Clipe — Aprovação real mudando status no ClickUp (1m10s):** [`clipes/06b-aprovacao-na-pratica-status-clickup.mp4`](./clipes/06b-aprovacao-na-pratica-status-clickup.mp4)
*(trecho: 41:20 → 42:30 — Hugo simula resposta do cliente e mostra status virando "Planejamento aprovado")*

---

## 6. O que acontece quando o cliente rejeita ou pede ajuste

1. A IA identifica que a resposta no WhatsApp é **pedido de ajuste**, não aprovação.
2. Volta o status da tarefa pro estado anterior no ClickUp (não fica como aprovado).
3. Manda notificação no **grupo interno da Bravo** (combinado aos 11:30 — fase inicial usa o grupo da Bravo; depois vai direto pro responsável por papel: design vai pro Rafa, vídeo vai pro Rafael Gobi, etc.).
4. Fica **esperando** o responsável subir um novo arquivo na **mesma subpasta** do Drive (mesma pasta, só troca/adiciona arquivos — não cria pasta nova).
5. Quando o novo arquivo aparece, o ciclo recomeça: novo disparo de mensagem pro cliente.

**O que você (Gustavo / time Bravo) faz na prática:**

- Recebe a notificação no grupo interno.
- Vê o ajuste pedido (a IA copia o teor da mensagem do cliente no comentário).
- Encaminha pro responsável (design / vídeo / planejamento).
- Quando o responsável terminar, ele **substitui ou adiciona arquivo na mesma subpasta** do Drive — não cria nova.
- A IA cuida do disparo da próxima mensagem sozinha.

▶ **Clipe — Fluxo de rejeição/ajuste (2m15s):** [`clipes/04-rejeicao-do-cliente.mp4`](./clipes/04-rejeicao-do-cliente.mp4)
*(trecho: 11:00 → 13:15)*

---

## Referência rápida — todos os clipes

| # | Tópico | Arquivo | Trecho |
|---|--------|---------|--------|
| 00 | Visão geral do fluxo | [`00-visao-geral-do-fluxo.mp4`](./clipes/00-visao-geral-do-fluxo.mp4) | 06:00 → 11:05 |
| 01 | Iniciar validação (criar tarefa) | [`01-iniciar-validacao-criar-tarefa-clickup.mp4`](./clipes/01-iniciar-validacao-criar-tarefa-clickup.mp4) | 62:45 → 64:05 |
| 02a | Telefone — versão DESCARTADA | [`02a-telefone-versao-inicial-DESCARTADA.mp4`](./clipes/02a-telefone-versao-inicial-DESCARTADA.mp4) | 18:50 → 19:35 |
| 02b | Correção: ID do grupo no ClickUp | [`02b-correcao-id-grupo-no-clickup.mp4`](./clipes/02b-correcao-id-grupo-no-clickup.mp4) | 53:30 → 56:30 |
| 02c | Pegar ID do grupo na prática | [`02c-pegar-id-grupo-na-pratica.mp4`](./clipes/02c-pegar-id-grupo-na-pratica.mp4) | 58:30 → 61:35 |
| 03 | Inserir materiais no Drive | [`03-onde-inserir-materiais-no-drive.mp4`](./clipes/03-onde-inserir-materiais-no-drive.mp4) | 62:45 → 64:05 |
| 04 | Rejeição do cliente | [`04-rejeicao-do-cliente.mp4`](./clipes/04-rejeicao-do-cliente.mp4) | 11:00 → 13:15 |
| 05 | Notificação — cron 5min | [`05-notificacao-quando-cron.mp4`](./clipes/05-notificacao-quando-cron.mp4) | 25:30 → 28:35 |
| 05b | Mensagem WhatsApp na prática | [`05b-exemplo-mensagem-whatsapp.mp4`](./clipes/05b-exemplo-mensagem-whatsapp.mp4) | 17:00 → 18:35 |
| 06a | Correção: aprovação é no WhatsApp | [`06a-aprovacao-correcao-whatsapp.mp4`](./clipes/06a-aprovacao-correcao-whatsapp.mp4) | 13:40 → 14:10 |
| 06b | Aprovação real mudando ClickUp | [`06b-aprovacao-na-pratica-status-clickup.mp4`](./clipes/06b-aprovacao-na-pratica-status-clickup.mp4) | 41:20 → 42:30 |

---

## Pontos pendentes / observados na reunião (não cobertos por clipe)

- **Configuração do Google Cloud** (chunks 65 → 69, ~65 min → fim): Gustavo precisa configurar app no Google Cloud do `MKT Bravo 23` pra liberar acesso da IA ao Drive da agência. Ficou pendente pra Gustavo terminar depois e Lucas configura do lado dele.
- **Personalidade da IA** (~45:40): combinado dar uma cara/voz pra ela — nome sugerido foi "Maia" (já usado pela OpenClaw) ou "Brava". Decisão final ficou em aberto.
- **Cliente piloto**: **Alfabetiza** é o primeiro a entrar em produção (acordado aos 55:50). Os próximos serão escolhidos depois desse rodar bem.
- **Próxima skill (Agendamento)**: assim que a Skill 1 estiver rodando estável com Alfabetiza, parte pra Skill 2 (agendamento automático na Meta) — referência aos 15:30 e 62:14.

---

*Tutorial gerado a partir da transcrição completa do encontro de 2026-05-15. Para qualquer ponto, consultar [`transcricao-completa.txt`](./transcricao-completa.txt) com o timestamp citado.*
