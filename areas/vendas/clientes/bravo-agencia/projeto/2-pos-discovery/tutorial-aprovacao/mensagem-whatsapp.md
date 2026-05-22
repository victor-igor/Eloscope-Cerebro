---
tipo: mensagem
status: pronto-pra-enviar
destino: Gustavo (Bravo) — WhatsApp
referencia: tutorial-fluxo-aprovacao.md
---

# Mensagem WhatsApp — Gustavo

> Texto pronto pra copiar e colar. O link do Drive já está embutido. Os videozinhos numerados na pasta seguem a ordem do checklist (00, 01, 02b, 02c, 03, 04, 05, 05b, 06a, 06b — assistir nessa ordem fica didático).

---

```
Opa Gustavo, montei o tutorial do fluxo de aprovação pra você e o time rodarem com a Alfabetiza essa semana e replicarem nos próximos.

📁 Pasta com tudo (PDF + videozinhos curtos da nossa reunião):
https://drive.google.com/drive/u/0/folders/1w3xgcdZnkVYvnVxkxtkpTiOO_GpJZFof

⚠️ 2 coisas que mudaram do que falamos no começo da reunião (estão explicadas no tutorial, mas pra já sair com a versão certa):

1) Não é o telefone do cliente que vai no ClickUp — é o ID do grupo do WhatsApp dele. (vídeo 02b + 02c na pasta)
2) Pra começar uma validação, cria primeiro a tarefa no ClickUp — o Drive cria a subpasta sozinho, aí você joga os arquivos lá. (vídeo 01)

📋 Checklist rápido pra rodar com cada cliente novo:

▢ 1. Cadastrar o cliente (uma vez só por cliente):
   - Add o número da IA no grupo do WhatsApp do cliente
   - Pega o link de convite do grupo (Detalhes do grupo > Convidar via link)
   - Cola no campo de identificação do grupo no ClickUp

▢ 2. Pra cada nova rodada de validação:
   - Cria a tarefa no ClickUp (na lista do cliente) → ClickUp cria subpasta no Drive automaticamente
   - Sobe os arquivos (imagens/vídeos/PDFs) na subpasta do Drive
   - Em até 5 min a IA detecta e manda a aprovação no grupo do WhatsApp

▢ 3. Cliente recebe → responde no próprio grupo do WhatsApp (não no ClickUp):
   - Se aprovou → IA muda status pra "Planejamento aprovado" sozinha
   - Se pediu ajuste → IA avisa no grupo interno da Bravo. Time ajusta o arquivo na MESMA subpasta do Drive (não cria pasta nova) → ciclo recomeça

🎬 Primeiro cliente piloto: Alfabetiza (já cadastrada por você).

Qualquer dúvida me chama por aqui. Quando rodar bem com 2-3 clientes, partimos pra Skill 2 (agendamento automático na Meta).
```

---

## Versão ainda mais curta (caso prefira mandar resumido)

```
Opa Gustavo, tutorial do fluxo de aprovação pronto:
📁 https://drive.google.com/drive/u/0/folders/1w3xgcdZnkVYvnVxkxtkpTiOO_GpJZFof

Tem o PDF passo a passo + 10 videozinhos curtos da nossa reunião, um pra cada parte. Assistir na ordem dos números (00 → 06b) é o caminho didático.

2 coisas que mudaram do que falei no começo:
1) ClickUp = ID do GRUPO do WhatsApp (não o telefone do cliente)
2) Cria a tarefa no ClickUp primeiro, ele cria a pasta no Drive sozinho

Piloto: Alfabetiza. Qualquer dúvida me chama.
```

---

## Antes de enviar — passo manual seu (30 segundos)

Os 10 clipes + o PDF estão na pasta local do projeto:
`bravo-agencia/projeto/2-pos-discovery/tutorial-aprovacao/`

Você precisa arrastar os arquivos pra dentro da pasta do Drive antes de enviar a mensagem. Duas opções:

1. **Mais rápido** — Abre essa pasta local no Finder + abre a pasta do Drive no navegador, arrasta os arquivos da pasta `clipes/` direto pro Drive (drag & drop suporta múltiplos). Também arrasta o `tutorial-fluxo-aprovacao.pdf` da pasta raiz.

2. **Se usa Drive for Desktop** — copia a pasta inteira `tutorial-aprovacao/` (sem a transcrição-completa que é interna) pra dentro da pasta sincronizada do Drive correspondente, ele sincroniza sozinho em alguns minutos.

> Por que não subi via API? A pasta tem ~41MB de vídeo, e cada arquivo precisa ir codificado em base64 dentro de uma chamada de ferramenta — gastaria muito mais token do que vale o trabalho manual de 30 segundos.

## Arquivos que devem ir pro Drive (não esquecer nenhum)

- [ ] tutorial-fluxo-aprovacao.pdf
- [ ] clipes/00-visao-geral-do-fluxo.mp4
- [ ] clipes/01-iniciar-validacao-criar-tarefa-clickup.mp4
- [ ] clipes/02a-telefone-versao-inicial-DESCARTADA.mp4
- [ ] clipes/02b-correcao-id-grupo-no-clickup.mp4
- [ ] clipes/02c-pegar-id-grupo-na-pratica.mp4
- [ ] clipes/03-onde-inserir-materiais-no-drive.mp4
- [ ] clipes/04-rejeicao-do-cliente.mp4
- [ ] clipes/05-notificacao-quando-cron.mp4
- [ ] clipes/05b-exemplo-mensagem-whatsapp.mp4
- [ ] clipes/06a-aprovacao-correcao-whatsapp.mp4
- [ ] clipes/06b-aprovacao-na-pratica-status-clickup.mp4

(A transcrição completa NÃO precisa ir — é referência interna sua.)
