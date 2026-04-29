---
tipo: indice
area: reunioes
tags: [indice, reunioes]
---

# 📋 Reuniões — Índice

> Captura, transcrição e análise de todas as reuniões da Eloscope.
> Skill: `/reuniao` — gerencia ingestão e propagação.
> Manifest: `_processadas.json` — cache para evitar refetch.

---

## Estrutura

| Pasta | Tipo | Quando usar |
|-------|------|-------------|
| [[dailies]] | Daily interna | Stand-up diário do time |
| [[semanais]] | Reunião semanal | Planejamento/retrospectiva semanal |
| [[internas]] | Alinhamento interno | Sócios, decisões estratégicas, sprints |
| [[vendas]] | Comercial | Discovery, follow-up, fechamento (por cliente) |
| [[onboarding]] | Onboarding cliente | Kick-off pós-fechamento (por cliente) |
| [[clientes]] | Recorrente cliente | Status mensal, ajustes, suporte (por cliente) |

---

## Convenção de nomes

```
YYYY-MM-DD-tema-curto.md
```

Exemplos:
- `dailies/2026-04-27-status-bravo.md`
- `vendas/enertelles/2026-04-25-follow-up-alex.md`
- `onboarding/bravo/2026-04-26-kickoff.md`

---

## Frontmatter padrão

```yaml
---
tipo: reuniao
subtipo: daily | semanal | interna | venda | onboarding | cliente
data: YYYY-MM-DD
duracao_min: 0
participantes: [Lucas, Victor, Hugo]
cliente: nome-cliente   # quando aplicável
fonte: fathom | fireflies | manual
fonte_id: ID            # call_id Fathom, transcript_id Fireflies
fonte_url: https://...
tags: [reuniao, cliente/nome, tipo/x]
status: processada | rascunho
---
```

---

## Fluxo da skill `/reuniao`

1. Receber URL/ID/comando
2. Checar `_processadas.json` → se existe, abrir arquivo
3. Buscar via MCP (Fathom/Fireflies)
4. Classificar tipo + cliente
5. Gerar arquivo com resumo + decisões + actions + transcrição
6. Sugerir cortes → salvar em `areas/marketing/cortes-conteudo/` com link de origem
7. Confirmar criação de tasks no ClickUp
8. Atualizar manifest + commit

---

*Atualizado: 27/04/2026*

---

## 📚 Catálogo Drive — Reuniões Gravadas

> 185 reuniões catalogadas (apenas metadados + link Drive). Pasta-fonte: `Reuniões` (Google Drive).
> Para detalhes/transcrição, abrir o link Drive. Per-cliente: ver `clientes/{slug}/_index.md`.

### Resumo por categoria

| Categoria | Total |
|-----------|-------|
| ? | 52 |
| parceiros | 52 |
| internas | 17 |
| prospeccao | 17 |
| clientes/lavinte | 7 |
| clientes/sertaozinho | 5 |
| clientes/elielton | 4 |
| clientes/reabilitacao | 4 |
| clientes/guilherme-xp | 3 |
| clientes/tripode | 3 |
| clientes/ali-sebrae | 3 |
| clientes/maqlam | 3 |
| clientes/jean-imobiliaria | 3 |
| clientes/bravo | 3 |
| clientes/deolane | 2 |
| clientes/evoled | 2 |
| clientes/clinica-ilumine | 2 |
| clientes/magazine-borela | 2 |
| clientes/voltrucks | 1 |

### Distribuição por mês

| Mês | Total |
|-----|-------|
| 2025-06 | 10 |
| 2025-07 | 20 |
| 2025-08 | 26 |
| 2025-09 | 18 |
| 2025-10 | 27 |
| 2025-11 | 46 |
| 2025-12 | 30 |
| 2026-01 | 4 |
| 2026-04 | 4 |

### Tabela mestra

| Data | Categoria | Tema | Link |
|------|-----------|------|------|
| 2025-06-13 | ? | Meeting Transcription - Lucas - Joao - Victor | [Drive](https://drive.google.com/file/d/13PuSAXyOHIycwExAnbKydMmeeVNagWNk/view) |
| 2025-06-16 | ? | Meeting Transcription - Lucas - Kenzo - Victor | [Drive](https://drive.google.com/file/d/13qvEml7j_CCVr3GZ6uGow2x_1ZsUP5dh/view) |
| 2025-06-17 | clientes/deolane | Deolane - Automação - Daniel - Lucas - Victor | [Drive](https://drive.google.com/file/d/1xol-9VxUfQhtMD0qcUHXkYFf987ZCdHT/view) |
| 2025-06-17 | ? | GHL - Geral - Victor - Lucas | [Drive](https://drive.google.com/file/d/1121RA-DoOD8hyWeNDuuN5mcFa302axIR/view) |
| 2025-06-17 | ? | GHL - Geral - Victor - Lucas (2) | [Drive](https://drive.google.com/file/d/1U0duJcFXkWqLBMvocG4o5I_ksekoQtiV/view) |
| 2025-06-17 | ? | Meeting Transcription - Joao - Kenzo - Victor - Juliana | [Drive](https://drive.google.com/file/d/1kMItxSnppXTxkkF63akv6RTNNlw7hBn-/view) |
| 2025-06-25 | internas | Check-in Rápido - Eloscope - Lucas - Victor | [Drive](https://drive.google.com/file/d/1g63A3viKRcFsiSgcman3ed5JuxQVZUqx/view) |
| 2025-06-26 | clientes/lavinte | Meeting Transcription - Lucas - Lavinte | [Drive](https://drive.google.com/file/d/1Q1LynFCwD6dAaXRxI1wYyZNmBMIgpx4T/view) |
| 2025-06-26 | ? | Meeting Transcription - Lucas - Ronaldo - Thiago | [Drive](https://drive.google.com/file/d/1nEs2JkBUPq1wGzA06PQUCDu1MpS7nKjx/view) |
| 2025-06-30 | parceiros | Daniel Fullfunel - Victor - Daniel - Lucas | [Drive](https://drive.google.com/file/d/1_Y5va8THuSm0pSsXsIDcInNthtbSXxJZ/view) |
| 2025-07-02 | internas | Check-in Rápido - Eloscope - Lucas - Victor | [Drive](https://drive.google.com/file/d/1mm_RamNcMGYBKw1Cu-A_7jyu3NjGli1u/view) |
| 2025-07-02 | internas | Check-in Rápido - Eloscope - Victor - Lucas | [Drive](https://drive.google.com/file/d/1NW4b0By0Ncs5tkdNp_nhgoqmnP5mPGN5/view) |
| 2025-07-02 | internas | Check-in Rápido - Eloscope - Victor - Lucas (2) | [Drive](https://drive.google.com/file/d/1IS3aL2hSccwKLPWX10LyIeFyeNcXwyvo/view) |
| 2025-07-03 | clientes/lavinte | Analice - Closers Processo - Lucas - Lavinte | [Drive](https://drive.google.com/file/d/1dnPAlHLeWxNucfUBf3yxY9qSPh5AjtxL/view) |
| 2025-07-03 | clientes/evoled | Call Conteudo Evoled - Thiago - Thiago - Lucas | [Drive](https://drive.google.com/file/d/1uAuGbqIApm-B0UslGJmxxPW2JBF3eC19/view) |
| 2025-07-04 | clientes/clinica-ilumine | Clinica Ilúmine - Analise - Carliane - Lucas | [Drive](https://drive.google.com/file/d/1Gt1_884CEQvne609dpZMksca9v-LHSrN/view) |
| 2025-07-04 | parceiros | Meeting Transcription - Lucas - Daniel | [Drive](https://drive.google.com/file/d/1ha1Z_ryJOC54ZRFANHT1wNOvSePOSDUx/view) |
| 2025-07-07 | parceiros | Meeting Transcription - Lucas - Daniel - Victor | [Drive](https://drive.google.com/file/d/1ouRxCtm9SMQwJxmeTg9P4JPyHFbr65hc/view) |
| 2025-07-10 | clientes/clinica-ilumine | Carli - Apresentar Orçamento - Lucas - Carliane - Victor | [Drive](https://drive.google.com/file/d/1nk8rB_x-5cr5_ZbXEydCOBGayQ8-WV-x/view) |
| 2025-07-10 | clientes/lavinte | Saas com Victor - Lucas - Victor - Lavinte | [Drive](https://drive.google.com/file/d/1lLl4aZdA_YVUOL_EZqZ8RxdLNcAiEBnb/view) |
| 2025-07-12 | parceiros | Meeting Transcription - Lucas - Daniel - Victor | [Drive](https://drive.google.com/file/d/1LPI0Z6RD396onpNeXg7Z8PK7p03r4JhD/view) |
| 2025-07-16 | internas | Check-in Rápido - Eloscope - Lucas - Victor | [Drive](https://drive.google.com/file/d/1ncUf5JwYZUv88aMX8lkA7WvslyzH5ul6/view) |
| 2025-07-16 | internas | Check-in Rápido - Eloscope - Victor - Lucas | [Drive](https://drive.google.com/file/d/1I4KzwYrYictuZ5GqQHFGhSqO2iO6yFPx/view) |
| 2025-07-16 | parceiros | Meeting Transcription - Daniel - Lucas - Victor | [Drive](https://drive.google.com/file/d/1d-5-Eferz44nEaZGC1eIUQ9AMFNx4WkO/view) |
| 2025-07-22 | parceiros | Meeting Transcription - Lucas - Daniel | [Drive](https://drive.google.com/file/d/1hjVKOtRa5dOPvFG16uksM-MGOhJaGqvC/view) |
| 2025-07-23 | ? | Meeting Transcription - Ronaldo - Lucas - Thiago | [Drive](https://drive.google.com/file/d/1SgCfFT5d31ZSocEyidgVdWuqBgZ2yy2_/view) |
| 2025-07-25 | parceiros | Meeting Transcription - Lucas - Daniel - Victor | [Drive](https://drive.google.com/file/d/1XcA1z-ByIiZHTo_O3Dxfc6V84_inFgP4/view) |
| 2025-07-26 | parceiros | Meeting Transcription - Lucas - Daniel - Victor | [Drive](https://drive.google.com/file/d/1ctAc-adSL3iQXEBkh2HFPENTtLhTXx3Y/view) |
| 2025-07-30 | internas | Check-in Rápido - Eloscope - Lucas - Victor | [Drive](https://drive.google.com/file/d/19RG_AQJnNy67YqPpqHBLkODFuDS2snYs/view) |
| 2025-07-30 | parceiros | Meeting Transcription - Lucas - Daniel | [Drive](https://drive.google.com/file/d/1sbVx-pNVNAgo1FgAK8eKNbqqJA-QjIti/view) |
| 2025-08-06 | internas | Check-in Rápido - Eloscope - Lucas - Victor | [Drive](https://drive.google.com/file/d/1TR55KfYepTSz_xWdg0cGSLlIC-GEvxPr/view) |
| 2025-08-06 | internas | Check-in Rápido - Eloscope - Lucas - Victor (2) | [Drive](https://drive.google.com/file/d/1tkIKOkusndgm4p-dHWs8DTXZgi8aye1U/view) |
| 2025-08-07 | parceiros | Meeting Transcription - Lucas - Daniel - Victor - Speaker | [Drive](https://drive.google.com/file/d/1gaNMNNLu1efAJlv6_MzQhZWFQUNIu3Ja/view) |
| 2025-08-07 | ? | Meeting Transcription - Lucas - Victor (2) | [Drive](https://drive.google.com/file/d/1WFQovD4YVZ1vfCzP7wg6cF7ejcaz0mP2/view) |
| 2025-08-08 | prospeccao | Eloscope - Analise - Lucas - Victor - Daniel | [Drive](https://drive.google.com/file/d/1vOCo-ktarGWU2-J0kzdRKwxK3zofviod/view) |
| 2025-08-11 | parceiros | Tatina - Parceria - Lucas - Victor | [Drive](https://drive.google.com/file/d/1DyTBtaOvzlvfjQ8d07uAqkTYnoOI0paY/view) |
| 2025-08-11 | parceiros | Tatina - Parceria - Victor - Lucas | [Drive](https://drive.google.com/file/d/1rmsnu16HMpb28QKUWIMhgETLEYZq8SFx/view) |
| 2025-08-11 | parceiros | Tatina - Parceria - Victor - Tatiana - Lucas | [Drive](https://drive.google.com/file/d/1e7bp7DLtFT8dZrvkSlk6_n0GOWtkxN4G/view) |
| 2025-08-12 | parceiros | Meeting Transcription - Lucas | [Drive](https://drive.google.com/file/d/1Tu_mP-JEhZY8BL2pi1A5ncdQKxLafxDw/view) |
| 2025-08-12 | ? | Meeting Transcription - Lucas (2) | [Drive](https://drive.google.com/file/d/1yBu69hHmxNCR3zU4WTvjTYirdycjjZvi/view) |
| 2025-08-12 | parceiros | Video Gooway - Lucas | [Drive](https://drive.google.com/file/d/1tuQHy0cwTtjLx1hiGv7yGCHzpyvrtHX1/view) |
| 2025-08-13 | internas | Check-in Rápido - Eloscope - Lucas - Victor | [Drive](https://drive.google.com/file/d/1QVFs6EowVLcawTYSqtWW_bT96GeuEy-x/view) |
| 2025-08-13 | internas | Check-in Rápido - Eloscope - Victor - Lucas - Speaker | [Drive](https://drive.google.com/file/d/1gWTZHfgRggxO2KXajSGDwJz_7Li-sYi9/view) |
| 2025-08-13 | ? | Mari - Select - Lucas - Mariane | [Drive](https://drive.google.com/file/d/1pBB9YrTOGejgtGLMtB-PgmEFKa2ZZgG1/view) |
| 2025-08-14 | ? | Meeting Transcription - Lucas - Victor (2) | [Drive](https://drive.google.com/file/d/1CSnUBwGE9i0RIkD78m1MippGMkY5savv/view) |
| 2025-08-14 | ? | Select - New Session - Anny - Lucas - Read.ai - Mariane | [Drive](https://drive.google.com/file/d/1e5PeTW_KRH10oAp1l3p8mRUBb9FV9Qt-/view) |
| 2025-08-19 | ? | Meeting Transcription - Lucas - Alexsandro | [Drive](https://drive.google.com/file/d/1jP4XXhwfmIFWkmdBUN_pGQlToePTWQoh/view) |
| 2025-08-20 | internas | Check-in Rápido - Eloscope - Lucas - Victor | [Drive](https://drive.google.com/file/d/1MW_9N-K3UVLsiKizkrkdSmYWWUmw2Keu/view) |
| 2025-08-20 | internas | Check-in Rápido - Eloscope - Victor - Lucas | [Drive](https://drive.google.com/file/d/16hea4U6CJEw9U_VIoP-c-R3L9lXB0CaX/view) |
| 2025-08-21 | clientes/evoled | Step 1 - Evoled - Lucas - Thiago | [Drive](https://drive.google.com/file/d/1jM5LdIJGyrY-KzGzEiS-kSZ4USjBR1Fb/view) |
| 2025-08-22 | ? | Call Lucas - Lucas - Alexsandro - Victor | [Drive](https://drive.google.com/file/d/1HziFOZ7dJxKZb96Q83_9R-TkqNKXtu-y/view) |
| 2025-08-25 | prospeccao | Camila - Analise Estratégica - Lucas - Danielle - Maria | [Drive](https://drive.google.com/file/d/10ijXe_HV33DC7hOgpwyyp5a5z9330U5n/view) |
| 2025-08-26 | prospeccao | Sessão Estratégica - Analise GT - Evandro - Lucas | [Drive](https://drive.google.com/file/d/1D7YcZzrU8ZIb1vKxCSuZppNvwStN0oXz/view) |
| 2025-08-27 | internas | Check-in Rápido - Eloscope - Lucas - Victor | [Drive](https://drive.google.com/file/d/1Ap9Q0YCAix78jcSWR7Ds3Dm3D0a2_4Yt/view) |
| 2025-08-27 | prospeccao | Diagnostico - Eloscope - Dra. - Lucas | [Drive](https://drive.google.com/file/d/16OdL1imlunvlTv2spFEqH9obX6IrqNVP/view) |
| 2025-08-28 | parceiros | Meeting Transcription - Lucas - Daniel | [Drive](https://drive.google.com/file/d/1c3wJ0Lhxw3hjdaA9tEx0wzz2vwBUc3h_/view) |
| 2025-09-02 | clientes/elielton | Elielton - Lucas - Lucas - Elielton | [Drive](https://drive.google.com/file/d/1ZBgW0WjzVykpTYK60OIJ61HtfTBNNAUq/view) |
| 2025-09-08 | clientes/reabilitacao | Fran - Reabilitacão - Reabilitacão - Lucas | [Drive](https://drive.google.com/file/d/1KtlJ5J2PEQSuEz3_vmXeqXpd1wx2OnvN/view) |
| 2025-09-09 | ? | IA - ENOVAS - Lucas - Daniela - Geize | [Drive](https://drive.google.com/file/d/1NkMFttFutSiWVN5VGDZ0gnJouGiu-4Z6/view) |
| 2025-09-15 | prospeccao | Eduarda - Analise e Apresentação - Lucas - El | [Drive](https://drive.google.com/file/d/1ZOjnsm9HdRwKCvV5CklAzaCS8ZS9lmnX/view) |
| 2025-09-15 | clientes/reabilitacao | Fran - ReabilitaCão - Lucas - Reabilitacão - Victor | [Drive](https://drive.google.com/file/d/1fXJzG_go3-e_mnUFfs5Agi7enrvYRf9F/view) |
| 2025-09-15 | parceiros | Meeting Transcription - Daniel - Lucas | [Drive](https://drive.google.com/file/d/1oQWhV7BqYqntqjbOmBYIG_MJGC82ia2K/view) |
| 2025-09-15 | parceiros | Meeting Transcription - Lucas - Daniel | [Drive](https://drive.google.com/file/d/1IEWrbjhFCuC8RttJ0lqzZ9WKxdsOot67/view) |
| 2025-09-16 | clientes/guilherme-xp | Guilherme - Xp - Integração - Lucas - Guilherme | [Drive](https://drive.google.com/file/d/1yM0Vo1I_4lW6fcizlAuX8ztF0Kx18cgX/view) |
| 2025-09-17 | ? | Daniel - Agenda Master - Daniel - Lucas | [Drive](https://drive.google.com/file/d/1P6Ftcvo6p6agtBlTwLMrRmU-E-5A4xnl/view) |
| 2025-09-17 | ? | GT - Dustato - Lucas - Evandro | [Drive](https://drive.google.com/file/d/15l9e0k1Y4uFzY5V5WhZcb6Qs2II1bv0s/view) |
| 2025-09-18 | clientes/lavinte | Meeting Transcription - Lucas - Lavinte | [Drive](https://drive.google.com/file/d/1Xh0Ubn7yBMxJIXZD5xWnEWWwNLDsjNXm/view) |
| 2025-09-22 | ? | Meeting Transcription - Lucas - Alexsandro - Femina | [Drive](https://drive.google.com/file/d/142ZDf6bkg5aeilmTOMfxHFQJrr_oFTCe/view) |
| 2025-09-23 | ? | Marcos José - Lucas - Dr. | [Drive](https://drive.google.com/file/d/1VVqG7CrnqAxzFfnz9lT-7FE1iOI80a6r/view) |
| 2025-09-26 | ? | Site - Lucas - Alge | [Drive](https://drive.google.com/file/d/191BJKIz0Lne652Djd_MYfxlYadccPJh7/view) |
| 2025-09-29 | clientes/tripode | Analise - Paulo Assis On Tripe - Lucas - Assis | [Drive](https://drive.google.com/file/d/1ao7T-yyjy_Irk61VlSkDbR-t5R5_M2W7/view) |
| 2025-09-29 | clientes/reabilitacao | Fran - ReabilitaCào - Lucas - Reabilitacão | [Drive](https://drive.google.com/file/d/1cWgNC_cSpfPDXKJfw6McNJQhS2xGjub3/view) |
| 2025-09-29 | ? | Marcos - Lucas - Dr. | [Drive](https://drive.google.com/file/d/1lMzcZv6YpqmT-KbZhTTO0AkCKXHpXOPT/view) |
| 2025-09-30 | parceiros | Meeting Transcription - Lucas - Daniel | [Drive](https://drive.google.com/file/d/1-bgDNrQGUo0dsj9eiQAvDUa3Ysm5bQWI/view) |
| 2025-10-01 | clientes/ali-sebrae | Manoel - Ali Sebrae - Eloscope - Victor | [Drive](https://drive.google.com/file/d/1nCfwsu89H2co1GHqsd5ZeepJqYiOgVMB/view) |
| 2025-10-01 | prospeccao | Paulo - Apresentação de Proposta - Assis - Lucas - Victor | [Drive](https://drive.google.com/file/d/1Y_rCZTxSzvA2cFIwVeRUvdGzXi0OTv6d/view) |
| 2025-10-02 | prospeccao | Caio - Projeto Analise - Lucas - Altify | [Drive](https://drive.google.com/file/d/1ASOf91BCL-GfNZl7Jehk-Z5SQTcvzDzd/view) |
| 2025-10-06 | ? | Alex - Automação de Disparo - Alexsandro - Lucas | [Drive](https://drive.google.com/file/d/1YvO-_3gjIfh4vajOm37oVW5WTH7zTV8S/view) |
| 2025-10-07 | parceiros | Call - Daniel - Lucas - Daniel - Victor | [Drive](https://drive.google.com/file/d/1Hvb6HhrwPQmGl8Lem74jL0Sz7YYQu8sD/view) |
| 2025-10-07 | prospeccao | Carla - Diagnóstico - Lucas - Carla | [Drive](https://drive.google.com/file/d/1sBTgERfUrBkulDEch3PuxgifRIENUVz-/view) |
| 2025-10-07 | clientes/tripode | Vinicius Tripode - Lucas - Vinicius | [Drive](https://drive.google.com/file/d/1H9vxpcT9TwsPUAbLk3u5mqR61dDEESbG/view) |
| 2025-10-10 | clientes/guilherme-xp | Apresentação Guilhere - Agents e Saas - Lucas - Guilherme | [Drive](https://drive.google.com/file/d/1vZb5SMZpkFYwaTq_4vP_EqvvLU4uydKY/view) |
| 2025-10-10 | clientes/magazine-borela | Magazine Borela - Victor - Lucas - Magazine | [Drive](https://drive.google.com/file/d/1GJabrSHzip6bH3jkw-vOqBZC0OO2IGZS/view) |
| 2025-10-11 | ? | Meeting Transcription - Lucas - Flavia | [Drive](https://drive.google.com/file/d/1YaBAT3SKTjpm6cgUuj2luoPCe4yXyLTy/view) |
| 2025-10-13 | clientes/lavinte | Daniel - Daniel - Speaker - Lavinte | [Drive](https://drive.google.com/file/d/1FX9e0gsceG6QynJaR7guH46vjdxfxBhP/view) |
| 2025-10-13 | parceiros | Daniel - Lucas | [Drive](https://drive.google.com/file/d/1iyC0fY_bI6KGQtMdn-IkI9UCqJXIr0nn/view) |
| 2025-10-13 | ? | Eloscope - INTELIGÊNCIA OMNISCIENTE - Lucas - Manoel - Camila - Débora | [Drive](https://drive.google.com/file/d/1oFPzpNMoxLN4POzROKBKmZ0i6nONbRtB/view) |
| 2025-10-14 | clientes/guilherme-xp | Apresentação Microsaas - Lucas - Guilherme | [Drive](https://drive.google.com/file/d/1B39uQYSC1YsQtxeCD72tEm8ts1XsfkEN/view) |
| 2025-10-14 | parceiros | Serute - Bate Papo AI - Wesley - Lucas | [Drive](https://drive.google.com/file/d/1fpEn4LpiDev5mUuIf4_s4orxtmJLFwAl/view) |
| 2025-10-14 | clientes/tripode | Vinicus Tripode - Lucas - Vinicius | [Drive](https://drive.google.com/file/d/11aQNFRcz1fRohz86iyqyobk053t5zejm/view) |
| 2025-10-15 | parceiros | Meeting Transcription - Lucas - Daniel | [Drive](https://drive.google.com/file/d/1FT6vTxXM8ca9d6_Axow5paWAD_v6XQSQ/view) |
| 2025-10-17 | clientes/magazine-borela | Heitor - Magazine Borela - Lucas - Magazine | [Drive](https://drive.google.com/file/d/1rq3_pbflnt-ZYTdFgAVmijkz45R3kc0Z/view) |
| 2025-10-21 | parceiros | Meeting Transcription - Lucas - Daniel | [Drive](https://drive.google.com/file/d/1QdDCHMgMi4qv-elIviyYh3RU1tjtjP2w/view) |
| 2025-10-23 | parceiros | Meeting Transcription - Lucas - Daniel | [Drive](https://drive.google.com/file/d/1HQJZJQRqN69232yyCJNSKEhIvszF1x1U/view) |
| 2025-10-25 | parceiros | Meeting Transcription - Lucas - Daniel | [Drive](https://drive.google.com/file/d/11p9doUi26DeBz_BrUcW_erH90qOHvbNy/view) |
| 2025-10-27 | parceiros | Meeting Transcription - Daniel - Lucas | [Drive](https://drive.google.com/file/d/1xb3eDwU7b8jH3Ax4qEkQsB-OdNrPoEHl/view) |
| 2025-10-27 | clientes/maqlam | Meeting Transcription - Denis - Lucas | [Drive](https://drive.google.com/file/d/14y7ONqmM6uuYTd29N1_hEL9IWOJbhe8w/view) |
| 2025-10-27 | ? | Meeting Transcription - Lucas - Paula | [Drive](https://drive.google.com/file/d/1RZyiGXkr1G1KVgVzqZXXIvuyhA1bt9C2/view) |
| 2025-10-28 | clientes/ali-sebrae | ALI - Manoel Sebrae - Lucas - Manoel - Victor | [Drive](https://drive.google.com/file/d/1z-zQaxnJeSFIwMqFB2XaIvXj4j9u2FM7/view) |
| 2025-10-30 | prospeccao | Apresentação - Matheus Campos Joias - Lucas - Matheus | [Drive](https://drive.google.com/file/d/1wkDZVyqdpI7_-l-Uieh0wEutRNGP3j9H/view) |
| 2025-10-30 | parceiros | Meeting Transcription - Lucas - Daniel | [Drive](https://drive.google.com/file/d/17ioGQn3Q2Zp0PsR8daU6X1uoMLj5tDZU/view) |
| 2025-11-02 | parceiros | Meeting Transcription - Lucas - Victor - Daniel | [Drive](https://drive.google.com/file/d/1_ThuX3JYh7fMvaDraeRNPbofslS9PGab/view) |
| 2025-11-03 | prospeccao | Apresentação Leonardo - Lucas - Leonardo | [Drive](https://drive.google.com/file/d/1FihZe0yws3GjVWhqGpM7GeOqmjhWUyyj/view) |
| 2025-11-03 | parceiros | Meeting Transcription - Lucas - Daniel | [Drive](https://drive.google.com/file/d/1VKq0p3tXnsKY9YF5HwQ5WMPl05lF1bRc/view) |
| 2025-11-03 | ? | Meeting Transcription - Lucas - Nick | [Drive](https://drive.google.com/file/d/1ds9GzFHKay7vrLFkbSpb7Y03ZmwJA4-t/view) |
| 2025-11-04 | parceiros | Call de Troca Sobre IA - Wesley - Wesley - Lucas | [Drive](https://drive.google.com/file/d/1cIbLwQ_imq62ezBpanQYm8fc10iFUYYd/view) |
| 2025-11-04 | ? | Meeting Transcription - Lucas - Luciana | [Drive](https://drive.google.com/file/d/1Bs6QxekLe8O8A9hfc3gzcdaeVBzwoQFP/view) |
| 2025-11-04 | parceiros | Meeting Transcription - Lucas - Victor - Daniel | [Drive](https://drive.google.com/file/d/1Ti1FwxarYBxPl5KoZet2ZBDQ2DfA3HjP/view) |
| 2025-11-04 | ? | Meeting Transcription - Lucas - Vitor | [Drive](https://drive.google.com/file/d/126WXCAUPLzrd1of0P3G9-tZB8HLD2LzT/view) |
| 2025-11-05 | prospeccao | Apresentação Eduardo - Lucas - Eduardo | [Drive](https://drive.google.com/file/d/1uwtQiBMwhwE0OrcKlPtZu4U1FQYo-rA1/view) |
| 2025-11-05 | parceiros | Meeting Transcription - Lucas - Daniel | [Drive](https://drive.google.com/file/d/1HRw4fu4jfzXnwp431ik11-c5OpMiP-NM/view) |
| 2025-11-06 | ? | Meeting Transcription - Joao - Lucas - Daniel - João | [Drive](https://drive.google.com/file/d/1akvNRclOKXdITfgryHEPUW63UqyuazwK/view) |
| 2025-11-08 | parceiros | Meeting Transcription - Lucas - Victor - Daniel | [Drive](https://drive.google.com/file/d/1OSoyi6W9JKLOVsvJJB9UFyE-Hh0l3wEz/view) |
| 2025-11-10 | clientes/maqlam | Apresentação Denis Mqlam - Lucas - Denis | [Drive](https://drive.google.com/file/d/1VinieW9exRtcCefsKI6RPtpZlJF4cyH0/view) |
| 2025-11-10 | clientes/jean-imobiliaria | Apresentação Jean - Imobiliária - Lucas - Jean | [Drive](https://drive.google.com/file/d/1uhm9n0upykYlZ3FKKYHcRiAFTaaERTG5/view) |
| 2025-11-10 | parceiros | Meeting Transcription - Lucas - Victor - Daniel | [Drive](https://drive.google.com/file/d/1plqB_Vnroft7NKk7hEqchsMlJMHIWz-G/view) |
| 2025-11-11 | clientes/ali-sebrae | Manoel Sebrae - Victor - Lucas - Manoel | [Drive](https://drive.google.com/file/d/1hqtdBvvOoopgE7DWjyASBmbQ1RT6QqhG/view) |
| 2025-11-11 | ? | Meeting Transcription - Lucas - Thiago | [Drive](https://drive.google.com/file/d/1p1v_Xn6yQHqo_p4x4RGwleyyiTYN8EX2/view) |
| 2025-11-11 | clientes/voltrucks | Meeting Transcription - Lucas - Victor - Voltrucks | [Drive](https://drive.google.com/file/d/1qJn7ERCscnmUoj3vehSckiVmfgs1sNrf/view) |
| 2025-11-12 | parceiros | Meeting Transcription - Lucas | [Drive](https://drive.google.com/file/d/1Un6RWixgwyp5OkHW6v9Wp2apW1VHeD0h/view) |
| 2025-11-12 | ? | Meeting Transcription - Lucas - Matheus - William | [Drive](https://drive.google.com/file/d/1yqCQ8brkmhiOEY5UIMgRHy7MC7VyyaTp/view) |
| 2025-11-13 | parceiros | Meeting Transcription - Lucas - Daniel | [Drive](https://drive.google.com/file/d/1W-Z0wza4Ei36UHHR3OlUTjJLL1-ubEKN/view) |
| 2025-11-13 | ? | Meeting Transcription - Thiago - Lucas | [Drive](https://drive.google.com/file/d/1SQlyiCfZXx-qRC3R_A_JOPu5OsWPbulW/view) |
| 2025-11-14 | parceiros | Meeting Transcription - Lucas - Daniel | [Drive](https://drive.google.com/file/d/1C-Y61TOutcl4LisxmNRLR0OnrzGULYNY/view) |
| 2025-11-15 | prospeccao | Apresentação Petmania - Lucas - Thiago | [Drive](https://drive.google.com/file/d/1xXtt9BBL6n1QGVfC7JaGMmrLbw5qFoOx/view) |
| 2025-11-17 | parceiros | Meeting Transcription - Daniel - Lucas | [Drive](https://drive.google.com/file/d/1iQ1vZ4ekw0C4Q2CIPf9gpFJrTBROlsaw/view) |
| 2025-11-17 | ? | Meeting Transcription - Daniel - Lucas (2) | [Drive](https://drive.google.com/file/d/1fn1UnYIMob-_ILOUE3dprLVfk6FQ4BKj/view) |
| 2025-11-17 | parceiros | Meeting Transcription - Lucas - Daniel | [Drive](https://drive.google.com/file/d/1f6JEGd4kbkxeEwERjEqbWhWI-wkGcaPy/view) |
| 2025-11-18 | clientes/bravo | Apresentação Bravo Agência - Lucas - Bravo | [Drive](https://drive.google.com/file/d/1hA_ZJ1l_Fyv5Qi05QLCJ4D2iKmjmveO6/view) |
| 2025-11-18 | parceiros | Meeting Transcription - Lucas - Daniel | [Drive](https://drive.google.com/file/d/1FuqFBLOAlAisyvJkm1goqf4SklAeKA91/view) |
| 2025-11-18 | ? | Meeting Transcription - Lucas - Daniel (2) | [Drive](https://drive.google.com/file/d/1Wt7vvS7XyJ-H50-u4haJkrwzeROl-No0/view) |
| 2025-11-18 | ? | Meeting Transcription - Roberto - Lucas | [Drive](https://drive.google.com/file/d/1byfv-xBFJl6_ZDee0gfeQje0P3jveMng/view) |
| 2025-11-19 | parceiros | Meeting Transcription - Lucas - Daniel | [Drive](https://drive.google.com/file/d/1KDSRpOUSLLpr_0GMuTObmwmcR8B4dYvL/view) |
| 2025-11-19 | clientes/sertaozinho | Meeting Transcription - Sertãozinho - Lucas - Victor | [Drive](https://drive.google.com/file/d/1LEa4fYnucwISOph2w6kmU6qrg11uHwxB/view) |
| 2025-11-19 | clientes/sertaozinho | Meeting Transcription - Sertãozinho - Lucas - Victor (2) | [Drive](https://drive.google.com/file/d/1Ha2NwS54rq99WuiVub9bNgeTGIUMumnG/view) |
| 2025-11-20 | parceiros | Meeting Transcription - Lucas - Daniel | [Drive](https://drive.google.com/file/d/1Dp3OwkL9uFNgDXhn0uXeY6L4mQjP3a2Z/view) |
| 2025-11-21 | clientes/maqlam | Meeting Transcription - Eloscope - Denis - Victor | [Drive](https://drive.google.com/file/d/1NUeIp4VIjj7wTEdc6Z1JkH0z-zYX4tam/view) |
| 2025-11-21 | parceiros | Meeting Transcription - Lucas - Daniel | [Drive](https://drive.google.com/file/d/1JT_N_yAn-CAYVsGJ6L0SVTYjm2byNZGu/view) |
| 2025-11-22 | clientes/elielton | Meeting Transcription - Lucas - Elielton | [Drive](https://drive.google.com/file/d/1liI44AbXydZatKTNplN3-GrB_kzdIs2p/view) |
| 2025-11-22 | clientes/lavinte | Meeting Transcription - Lucas - Lavinte | [Drive](https://drive.google.com/file/d/1QsAT0foS3ZKSYaGUoHMAiXLQy4jkKtNh/view) |
| 2025-11-24 | clientes/sertaozinho | Apresentação Funil de Vendas - Phillip - Speaker - Mateus - Lucas | [Drive](https://drive.google.com/file/d/1Eq_QhZMBZd_SP3SjxHl6lvJB5f801UfI/view) |
| 2025-11-24 | parceiros | Meeting Transcription - Daniel - Lucas | [Drive](https://drive.google.com/file/d/1M8mbl1GAbS52KsA1oxzi0pnjd1FLR5TT/view) |
| 2025-11-25 | clientes/elielton | Meeting Transcription - Lucas - Elielton | [Drive](https://drive.google.com/file/d/1NRTGdRFwasRR7w6Tk0qtQDetFOgWdyf2/view) |
| 2025-11-26 | ? | Meeting Transcription - Lucas - Mateus | [Drive](https://drive.google.com/file/d/1rp--2rOFwgrENlcjXPIpsuK0qeDGbVE8/view) |
| 2025-11-27 | ? | Meeting Transcription - Lucas - Vinicius | [Drive](https://drive.google.com/file/d/1T7bSupGYXFW1IzQmGO3K4xECyCX-qjMd/view) |
| 2025-11-28 | clientes/elielton | Apresentação Parceria Food Elielton - Elielton - Lucas | [Drive](https://drive.google.com/file/d/1xaDTFafAnpEwAHcsylJOR1T0I42piiKO/view) |
| 2025-11-28 | parceiros | Meeting Transcription - Lucas - Daniel | [Drive](https://drive.google.com/file/d/1yW29YIHGazaD9XRdqXWFnivZ50mZ45Ur/view) |
| 2025-12-01 | ? | Meeting Transcription - Eloscope - Gustavo | [Drive](https://drive.google.com/file/d/1rPgzbPPT8qs6JKyUr45lVRXbYVo1zsBG/view) |
| 2025-12-02 | prospeccao | Apresentação Dr João - Lucas - Rodrigo | [Drive](https://drive.google.com/file/d/1aidWSv_MExzaY5zvBpic_RYiz0UX22Ex/view) |
| 2025-12-02 | clientes/bravo | Meeting Transcription - Bravo - Eloscope | [Drive](https://drive.google.com/file/d/1a1Dq-vtAYCJ-MHK40_Et25FsX9lzv1KW/view) |
| 2025-12-04 | clientes/jean-imobiliaria | Meeting Transcription - Eloscope - Jean | [Drive](https://drive.google.com/file/d/1_Ec1qksPEBL-8obXCFzYMVXNkHIVmc5d/view) |
| 2025-12-04 | clientes/deolane | Meeting Transcription - Lucas - Deolane | [Drive](https://drive.google.com/file/d/1FadoyuIMYUR60M5Kv18LnxcI_0ekZtjo/view) |
| 2025-12-05 | clientes/jean-imobiliaria | Meeting Transcription - Lucas - Jean - Imobiliária | [Drive](https://drive.google.com/file/d/13g3ljp39VXkhuZPO6BE3EXXffTqmzNaV/view) |
| 2025-12-05 | clientes/sertaozinho | Meeting Transcription - Lucas - Phillip - Mateus - Victor | [Drive](https://drive.google.com/file/d/13gN6Cax3cAfaU5i0jOPJDs0_XdryBAld/view) |
| 2025-12-06 | clientes/sertaozinho | Meeting Transcription - Mateus - Sertãozinho - Eloscope - Victor | [Drive](https://drive.google.com/file/d/1mTcbsyKdXM0Qkv--l7zfjZn7ccqSHvEt/view) |
| 2025-12-08 | prospeccao | Apresentação Fagno - Lucas - Fagno | [Drive](https://drive.google.com/file/d/1lK_6YjSGRfDvoq2fJTTq5H47MeWD5i8-/view) |
| 2025-12-08 | clientes/bravo | Meeting Transcription - Eloscope - Bravo | [Drive](https://drive.google.com/file/d/1lLCpn3w0pSPj3jyapO5C-cr634Puhj06/view) |
| 2025-12-09 | ? | Meeting Transcription - Eloscope - Cesar | [Drive](https://drive.google.com/file/d/1Z7Xr9CfIjJI6YNvoi4q8u7uJZxDjN6bX/view) |
| 2025-12-10 | parceiros | Meeting Transcription - Daniel - Lucas | [Drive](https://drive.google.com/file/d/1haDs8nrCDwE-Zp4trBypBxuz8YKfQqOM/view) |
| 2025-12-12 | ? | Meeting Transcription - Eloscope - Angelica | [Drive](https://drive.google.com/file/d/1IHwT5Vc8KoDFCKzBvmcbfpoecSzAsixl/view) |
| 2025-12-12 | ? | Meeting Transcription - Eloscope - Ricardo | [Drive](https://drive.google.com/file/d/13ivJ7BkUWLsBxOFktaD3qMjplQgBG5ib/view) |
| 2025-12-15 | prospeccao | Apresentação Ricardo - Lucas - Ricardo | [Drive](https://drive.google.com/file/d/1T01f-XGzZknodaUtwN5lzagHVO2BvUSN/view) |
| 2025-12-15 | parceiros | Meeting Transcription - Eloscope - Daniel | [Drive](https://drive.google.com/file/d/1nk1nZaUUr15yiST3O7udDQYEQ5u0hLKO/view) |
| 2025-12-15 | parceiros | Meeting Transcription - Lucas - Victor | [Drive](https://drive.google.com/file/d/1FgPU2w-m00GD17sgcbT8h2lOTr8O5Pow/view) |
| 2025-12-15 | ? | Meeting Transcription - Lucas - Victor (2) | [Drive](https://drive.google.com/file/d/11LIf098KNeYfZIiygr-hlQCX-5ReejYa/view) |
| 2025-12-16 | internas | Entrevista Ivan - Eloscope - Ivan - Victor | [Drive](https://drive.google.com/file/d/1jdNDLhLOA4tf1YrSqvh6-MEtPzt9Hxal/view) |
| 2025-12-16 | internas | Entrevista Mendes - Ailton - Victor - Lucas - Yure | [Drive](https://drive.google.com/file/d/128yy-oFFuC4WfTUkUsNqGeEPfqj6i8p3/view) |
| 2025-12-16 | clientes/lavinte | Mayra Lavinte - Lucas - Lavinte | [Drive](https://drive.google.com/file/d/1V25jgDDivizOAjtAVyq5s0JFCknb3w4P/view) |
| 2025-12-17 | internas | Entrevista Hugo - Lucas - Victor - Hugo | [Drive](https://drive.google.com/file/d/1UYv2clcTl9-yGTnELha76bT4AHagZjLx/view) |
| 2025-12-17 | ? | Meeting Transcription - Eloscope - Victor - Solano | [Drive](https://drive.google.com/file/d/1vBlchMPAPpnM-vKhHoEdGUV0SokocDRG/view) |
| 2025-12-18 | ? | Meeting Transcription - Lucas - Victor - Ofir | [Drive](https://drive.google.com/file/d/1dROAe65JN6_GthM1Zt_QF2Qhz8byVEti/view) |
| 2025-12-20 | ? | Meeting Transcription - Eloscope - Victor - Ivan | [Drive](https://drive.google.com/file/d/1aKOUoX0C24lAdzpVosnnfjTvI5jdy8-r/view) |
| 2025-12-20 | ? | Meeting Transcription - Lucas - Victor - Hugo | [Drive](https://drive.google.com/file/d/1eRkiL08itv7r88JQOcio_QLzo4G-N5IC/view) |
| 2025-12-22 | parceiros | Meeting Transcription - Lucas - Victor | [Drive](https://drive.google.com/file/d/1z74Jj1vKiBipsShGbMe4uu13V7aoRGy_/view) |
| 2025-12-23 | ? | Meeting Transcription - Eloscope - Jose | [Drive](https://drive.google.com/file/d/12IIqhVV0SifTVH3UUAeN5Hd2b0eyYKNx/view) |
| 2025-12-23 | ? | Meeting Transcription - Victor - Yure - Lucas | [Drive](https://drive.google.com/file/d/1EVvuIr8yGC4DDcKc84MCSDvsbVyXeJ76/view) |
| 2025-12-27 | parceiros | Meeting Transcription - Eloscope - Victor | [Drive](https://drive.google.com/file/d/1rIfhqziom9vJ9mJPWiAEZCGfnqqItXeI/view) |
| 2026-01-02 | clientes/reabilitacao | Meeting Transcription - Lucas - Victor - Reabilitacão | [Drive](https://drive.google.com/file/d/1o22vB5IurccKCKrQtZn5UfvjRamWuI5d/view) |
| 2026-01-07 | prospeccao | Consultrain Apresentação - Eloscope - Marcos | [Drive](https://drive.google.com/file/d/1BG1qQtqCfHHivQljalhp9tP-zh4xt8OM/view) |
| 2026-01-07 | prospeccao | Consultrain Apresentação - Marcos - Eloscope | [Drive](https://drive.google.com/file/d/16Ap9anbkkcv6yg0DvCbbWmjBq-HP5Z9i/view) |
| 2026-01-08 | ? | Meeting Transcription - Eloscope - Dr. | [Drive](https://drive.google.com/file/d/1m5ys9XhBdmgEgZ98LgB2rlxa2Ngn9WV0/view) |
| 2026-04-04 | ? | Call - Entrega - Eloscope - Victor | [Drive](https://drive.google.com/file/d/1T6O3JQvDWo8JgL0JflAoW9MMovLhx2Zh/view) |
| 2026-04-04 | ? | Call - Entrega - Victor - Eloscope | [Drive](https://drive.google.com/file/d/1IsSdLvTiFhTOoQU6zYOj_dbPeHx2_Lzq/view) |
| 2026-04-04 | ? | multi-tenant e SupaBase - Eloscope | [Drive](https://drive.google.com/file/d/11CENW7Aql-oeeCzGG8qQqV5XOCOnmWQ0/view) |
| 2026-04-04 | parceiros | skills e agentes - Eloscope | [Drive](https://drive.google.com/file/d/1VOkH89QSG9Ke7R_R89T90dURZ9MZ1ZBW/view) |

*Catálogo gerado em 29/04/2026.*
