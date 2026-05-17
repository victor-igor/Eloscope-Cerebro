---
tipo: status-funil
funil: elo-sales-os
status: v0.2
data: 2026-05-16
instancia_uazapi: lucas (5517920008791)
fontes_cruzadas: pipeline.md (46 leads) + GDrive Orçamentos (48 folders) + WhatsApp Lucas (586 chats)
tags: [vendas, status, oportunidades, cruzamento, v0.2]
relacionados:
  - "[[../funil/MAPA-FUNIL]]"
  - "[[../../empresa/projetos/sales-os/02-comercial/pipeline|pipeline-canônico]]"
---

# Status Atual — Pipeline Comercial Eloscope (v0.2)

> Cruzamento Drive + WhatsApp + Pipeline canônico. Atualizado em 16/05/2026.
> **Fonte WhatsApp:** instância `lucas` (5517920008791, pessoal) — onde acontece a conversa comercial real.
> **Limitação técnica:** uazapi `/message/find` não filtra por `chatid` → classificação derivada de metadados do chat (último timestamp + sender + unread). Preview de texto não disponível.

---

## 🎙️ Notas direto do Lucas — overlay sobre o audit automático (16/05)

> Essas notas são a leitura humana ao vivo do Lucas em cima do audit acima. Quando rerodar o script, os dados auto-gerados atualizam; estas notas ficam aqui.

### Clientes/leads com status corrigido manualmente

| Lead | Auto-classificou como | Status real (Lucas) | Ação |
|---|---|---|---|
| **ReabilitaCão (Fran)** | 🟡 11d sem retorno | ✅ **Cliente ativo funcionando bem** · retorno positivo · existe grupo WhatsApp ativo (não foi pego pelo audit porque o filtro ignora grupos). Continuar com check-ins normais; sem urgência | Manter cadência atual |
| **Enertelles (Telles)** | 🟡 3d sem retorno | ⚠️ **Duro na venda direta** · pivot: focar geração de demanda **na venda do site (Bloco B)** primeiro · Bloco A (processo+IA) fica em segundo plano até site fechar | Próximo touchpoint: empurrar Bloco B (site standalone), gerar demanda real, deixar Bloco A pra depois |
| **PeleVet (Vítor + Sílvias)** | (não está no pipeline.md ainda) | 🔴 **Sem retorno após reunião 11/05** · vai precisar **se disponibilizar OU ligar diretamente** (não esperar resposta passiva) | Ligar pra Vítor ou pras Sílvias pra tentar fechar algo concreto |

### Indicações que não prosseguiram (fora do pipeline canônico)

> Lucas chamou diretamente (via indicação/contato pessoal), mas o lead não avançou. Não estavam no `pipeline.md` (base 02/04).

| Nome | Origem | Por que parou | Decisão |
|---|---|---|---|
| _(a preencher na sessão)_ | _(indicação de quem?)_ | _(silêncio / não-fit / preço / timing?)_ | _(arquivar / reativar daqui X meses / virar caso de aprendizado?)_ |

---

## 📊 Resumo executivo

- **Total leads pipeline:** 46
- **Match WhatsApp:** 22/46 (47%) — 24 são leads sem nome real no pipeline (`sem-cor-18/19`, `cliente-ativo-6/7`, `simone`, `joão`, etc) ou leads que Lucas nunca trocou WhatsApp
- **Match Drive:** 42/46 (91%) — pasta Orçamentos no GDrive tem dossiê de quase todo lead conhecido
- **Descoberta Drive (não no pipeline):** 6 folders/arquivos
- **Descoberta WhatsApp (chats comerciais não mapeados):** 2

### Distribuição de avanço (WhatsApp)

| Símbolo | Significado | Quantidade |
|---|---|---:|
| 🟢 | Recente / recebemos resposta nova | 1 |
| 🟡 | Aguarda retorno (3-14d) | 3 |
| 🔴 | Silêncio (>14d) — última nossa | 8 |
| ⚪ | Contato respondeu — aguarda ação sua | 10 |
| ❓ | Contato não encontrado no WhatsApp | 24 |

## 🔥 Quente — tocar essa semana (top 10)

> Critério: 🟢/🟡 OR (Drive recente + WhatsApp parado) OR (Q2 alvo-6OS).

| Avanço | Lead | Contato WPP | Status | Drive | Próxima ação |
|---|---|---|---|---|---|
| 🟡 | `reabilita-cao` | ReabilitaCao (Dra. Fran) | ReabilitaCão | última nossa 05/05 16:18 — há 11d sem retorno | [📁](https://drive.google.com/drive/folders/17tiznlxR64AwoqjWx9xUiY24PrHtoG2y) | Migrar custom → 6OS Beta; pitch de playbook |
| 🔴 | `morgana-sales` | Morgana Sales Estética | Morgana Sales Estética Av | silêncio 18d — última nossa 28/04 18:44 | [📁](https://drive.google.com/drive/folders/1eE7pr6-gXlEC9DToTMPMUwN_YXriHCOt) | Validar WABA + agente SDR; fechar case formal |
| 🟢 | `jean-imobiliaria` | Jean Imobiliária | Jean Rodrigues | última nossa 15/05 09:43 (há 1d) — recente | [📁](https://drive.google.com/drive/folders/12SHnFOPuYTNUHzEJKzhLqvLnjQGQvtbW) | Rodar 6OS Beta no ciclo dele, virar case Q2 imobiliária |
| 🟡 | `denis-maqlam` | Denis Franco (Maqlam) | Denis Franco | última nossa 13/05 13:46 — há 3d sem retorno | [📁](https://drive.google.com/drive/folders/1uvh0moRznMbnrX5zEEEJmho9WYfc2Ysj) | Manter agente agendamento existente (Q1) |
| 🔴 | `alex-automacao` | Alex Automação | alexsandrodoads | silêncio 499d — última nossa 02/01 15:00 · ⚠️ Drive mais recente que WhatsApp — proposta não acompanhada | [📁](https://drive.google.com/drive/folders/1GZ-cKtpdlPnO5-6zCg_TlsHqceOAFjEt) | Conversa de parceria/revenda (não 6OS direto) |
| ⚪ | `adv-leonardo` | Adv. Leonardo Lopes | Leonardo Lopes | contato respondeu 31/10 13:36 (há 197d) — visto, aguardando  · ⚠️ Drive mais recente que WhatsApp — proposta não acompanhada | [📁](https://drive.google.com/drive/folders/1uUiyYzinnWbwiTatIS0of4STAHnFQTqr) | Qualificar time comercial; artigo triagem IA |
| ⚪ | `eduarda-satisfact` | Eduarda Satisfact | Eduarda Gonçalves | Prosp | contato respondeu 06/11 12:58 (há 191d) — visto, aguardando  · ⚠️ Drive mais recente que WhatsApp — proposta não acompanhada | [📁](https://drive.google.com/drive/folders/1a0Mu3JizmPA2Yir0wrjm8QKCRyuY62qF) | Avaliar contexto |
| ⚪ | `marcos-consultrain` | Marcos Esteves (Consultra | Marcos Esteves | contato respondeu 30/01 17:16 (há 106d) — visto, aguardando  | [📁](https://drive.google.com/drive/folders/1SfwR3jVwNnvKieYu1DweTOA4WumS_Ndj) | Agendar discovery |
| ⚪ | `leandro-telecom` | Leandro Telecom | Leandro Pedroso | contato respondeu 11/02 13:57 (há 94d) — visto, aguardando a · ⚠️ Drive mais recente que WhatsApp — proposta não acompanhada | [📁](https://drive.google.com/drive/folders/1uxV5UoJUBDL6qNWRPly0x9iUwz7XJ1YL) | Qualificar time comercial |
| 🟡 | `enertelles` | Enertelles (Telles) | Telles | última nossa 13/05 10:12 — há 3d sem retorno | [📁](https://drive.google.com/drive/folders/1eUy_oEQtruNPwFKSC09yHogcsSkFSXHe) | Reenviar proposta v2.0 alinhada a v1.1 (orçamento antigo R$1 |
| 🔴 | `simone` | Simone | Simone | silêncio 192d — última nossa 05/11 17:49 · ⚠️ Drive mais recente que WhatsApp — proposta não acompanhada | [📁](https://drive.google.com/drive/folders/15IA-xlLyKb1Ss6JyvOXO712qkaxS7O6c) | Qualificar setor |
| 🔴 | `joao` | João | Joao | silêncio 746d — última nossa 30/04 13:14 · ⚠️ Drive mais recente que WhatsApp — proposta não acompanhada | [📁](https://drive.google.com/drive/folders/1Afoj7XoQTqQo5EIfTYZ37MygwaAxhzo9) | Qualificar setor |

## 📋 Cliente ativo — oportunidade de upsell ou risco churn (7)

| Avanço | Lead | Nome pipeline | Contato WPP | Status | Drive | Próxima ação |
|---|---|---|---|---|---|---|
| 🟡 | `denis-maqlam` | Denis Franco (Maqlam) | Denis Franco | última nossa 13/05 13:46 — há 3d sem retorno | [📁](https://drive.google.com/drive/folders/1uvh0moRznMbnrX5zEEEJmho9WYfc2Ysj) | Manter agente agendamento existente (Q1) |
| 🟢 | `jean-imobiliaria` | Jean Imobiliária | Jean Rodrigues | última nossa 15/05 09:43 (há 1d) — recente | [📁](https://drive.google.com/drive/folders/12SHnFOPuYTNUHzEJKzhLqvLnjQGQvtbW) | Rodar 6OS Beta no ciclo dele, virar case Q2 imobiliária |
| ⚪ | `matheus-joias` | Matheus Campos Joias | Matheus Campos | contato respondeu 12/05 18:02 (há 4d) — visto, aguardando aç | [📁](https://drive.google.com/drive/folders/15JBl-VKy93HVKxAYFRGLwzio8EKXdwLm) | Manter agente análise campanha (produto separado) |
| 🔴 | `morgana-sales` | Morgana Sales Estética | Morgana Sales Estética Av | silêncio 18d — última nossa 28/04 18:44 | [📁](https://drive.google.com/drive/folders/1eE7pr6-gXlEC9DToTMPMUwN_YXriHCOt) | Validar WABA + agente SDR; fechar case formal |
| 🟡 | `reabilita-cao` | ReabilitaCao (Dra. Fran) | ReabilitaCão | última nossa 05/05 16:18 — há 11d sem retorno | [📁](https://drive.google.com/drive/folders/17tiznlxR64AwoqjWx9xUiY24PrHtoG2y) | Migrar custom → 6OS Beta; pitch de playbook |
| ❓ | `cliente-ativo-6` | (verde 6 — não nomeado no | — | contato não encontrado em chats ativos | — | Identificar no GDrive pasta Orçamentos |
| ❓ | `cliente-ativo-7` | (verde 7 — não nomeado no | — | contato não encontrado em chats ativos | — | Identificar no GDrive pasta Orçamentos |

## 🟠 Pipeline ativo (6)

| Avanço | Lead | Nome pipeline | Contato WPP | Status | Drive | Próxima ação |
|---|---|---|---|---|---|---|
| 🔴 | `alex-automacao` | Alex Automação | alexsandrodoads | silêncio 499d — última nossa 02/01 15:00 · ⚠️ Drive mais recente que WhatsApp — proposta não acompanhada | [📁](https://drive.google.com/drive/folders/1GZ-cKtpdlPnO5-6zCg_TlsHqceOAFjEt) | Conversa de parceria/revenda (não 6OS direto) |
| 🔴 | `eduardo-nabuco` | Eduardo Nabuco | Eduardo Nabuco | silêncio 192d — última nossa 05/11 13:00 | [📁](https://drive.google.com/drive/folders/1tD1rewrLy7g7-ZyWVY2xzfb2PlnAE6Wc) | Qualificar vertical + Q antes de propor |
| ❓ | `caio-altfy-riopreto` | Caio Altfy | — | contato não encontrado em chats ativos | [📁](https://drive.google.com/drive/folders/1Pq3981-vCXCFkZH1eYQ8h3i-_wPePVMS) | Qualificar vertical (lead ativo, proposta nova) |
| ❓ | `dr-marcos` | Dr. Marcos | — | contato não encontrado em chats ativos | [📁](https://drive.google.com/drive/folders/1OwwinzPzLJKT4P-H2Ont-CiczmcUpFuJ) | Retomar call; mapear se tem time comercial (Q2) |
| ❓ | `dra-cecilia-canedo` | Dra Cecilia Canedo | — | contato não encontrado em chats ativos | [📁](https://drive.google.com/drive/folders/17IAxXCHml7FIZbovpnU6JKDVaLOmoxCj) | Ofertar Diagnóstico R$ 1.200 como entrada |
| ❓ | `molecaggio` | Molecaggio | — | contato não encontrado em chats ativos | [📁](https://drive.google.com/drive/folders/1r0X-QWyPudtcfvMF5AuI2sTRb-KEjKG4) | Encaminhar p/ agente WhatsApp produto separado |

## 🟤 Frio — reativação cuidadosa (8)

| Avanço | Lead | Nome pipeline | Contato WPP | Status | Drive | Próxima ação |
|---|---|---|---|---|---|---|
| ⚪ | `adv-leonardo` | Adv. Leonardo Lopes | Leonardo Lopes | contato respondeu 31/10 13:36 (há 197d) — visto, aguardando  · ⚠️ Drive mais recente que WhatsApp — proposta não acompanhada | [📁](https://drive.google.com/drive/folders/1uUiyYzinnWbwiTatIS0of4STAHnFQTqr) | Qualificar time comercial; artigo triagem IA |
| 🔴 | `paulo-assis-ontripe` | Paulo Assis (On Tripe) | Assis On Trip | Paulo Aze | silêncio 208d — última nossa 20/10 08:21 | [📁](https://drive.google.com/drive/folders/1pRlJaDRxLNKyr1ibTjBVRJ_Vyec3KOf3) | Avaliar se tem agendamento Q2 |
| 🔴 | `wesley` | Wesley | Wesley Serute Gestão de T | silêncio 157d — última nossa 10/12 14:27 | [📁](https://drive.google.com/drive/folders/1u3iqS2Aux42IV8EwAX75QKDAgEmN9vHg) | Qualificar setor antes de reativar |
| ❓ | `dra-flavia-harmonizacao` | Dra Flavia (Harmonização) | — | contato não encontrado em chats ativos | [📁](https://drive.google.com/drive/folders/1Do9d2T8tACBN1ELY4K5jD5rcbchrtyEk) | Reativar com agente campanha Meta |
| ❓ | `femina` | Femina | — | contato não encontrado em chats ativos | [📁](https://drive.google.com/drive/folders/1agyrLTZXSctqe4nCBqg3MdzPO3MLur1Z) | Reativar com case similar + demo |
| ❓ | `gt-dustato` | GT Dustato | — | contato não encontrado em chats ativos | [📁](https://drive.google.com/drive/folders/10kmKCl4J6NFng3VvxL65DjrMR5_N9DKp) | Qualificar setor antes de reativar |
| ❓ | `shalomshop` | Shalomshop | — | contato não encontrado em chats ativos | [📁](https://drive.google.com/drive/folders/1yUuvOqw9hLaNY7FfRrFlGbUPT9kh7N1-) | Encaminhar p/ agente atendimento prod separado |
| ❓ | `vinicius-tripode` | Vinicius da Tripode | — | contato não encontrado em chats ativos | [📁](https://drive.google.com/drive/folders/1HqOgV0TG0Fh97uF9O8YuvrNv7mE2RzxQ) | Baixa prioridade |

## ❌ Perdido — não reativar ou diagnóstico baixo (5)

| Avanço | Lead | Nome pipeline | Contato WPP | Status | Drive | Próxima ação |
|---|---|---|---|---|---|---|
| ⚪ | `eduarda-el-clinic` | Eduarda — El Clinic | Eduarda Gonçalves | Prosp | contato respondeu 06/11 12:58 (há 191d) — visto, aguardando  | [📁](https://drive.google.com/drive/folders/11QnZZOt_OdWbrDkwBPStG-X68F2un3gx) | Reativar com R$ 1.200 diagnóstico |
| ⚪ | `eduarda-satisfact` | Eduarda Satisfact | Eduarda Gonçalves | Prosp | contato respondeu 06/11 12:58 (há 191d) — visto, aguardando  | [📁](https://drive.google.com/drive/folders/1a0Mu3JizmPA2Yir0wrjm8QKCRyuY62qF) | Avaliar contexto |
| ❓ | `levy-impermeabilizacao` | Levy Impermeabilização | — | contato não encontrado em chats ativos | [📁](https://drive.google.com/drive/folders/1wsI1X0QUkjW8jv-KpX9bkJNpY7jR_2z2) | Não reativar — baixa recorrência |
| ❓ | `luiz-chopp-colina` | Luiz Chopp Colina | — | contato não encontrado em chats ativos | [📁](https://drive.google.com/drive/folders/1KMYYuPTrU0X7buuAxW10QaLMkMroqO2q) | Não reativar — ticket baixo |
| ❓ | `vitor-glamore` | Vitor Glamore | — | contato não encontrado em chats ativos | [📁](https://drive.google.com/drive/folders/1skpjJF6bw5wVyIrD2QaPIpTg-_GLm4C4) | Qualificar time comercial antes |

## 🔵 Especial / educacional (1)

| Avanço | Lead | Nome pipeline | Contato WPP | Status | Drive | Próxima ação |
|---|---|---|---|---|---|---|
| ⚪ | `lifeskill-levy` | Lifeskill Levy | LIFESKILL+  Unidade Jardi | contato respondeu 17/11 09:15 (há 180d) — visto, aguardando  | [📁](https://drive.google.com/drive/folders/1gWoecb02hm3yS14gyY_6aaSmPkgdsrkf) | Agendar discovery; potencial case educação |

## ⚪ A classificar — qualificar antes (19)

| Avanço | Lead | Nome pipeline | Contato WPP | Status | Drive | Próxima ação |
|---|---|---|---|---|---|---|
| ⚪ | `bravo-agencia` | Bravo Agência | Gustavo Bravo | contato respondeu 30/04 14:04 (há 16d) — visto, aguardando a | [📁](https://drive.google.com/drive/folders/1ntDYKY_VTZutz_XEjW3lTIDcy3v5tz2F) | Proposta parceria revenda |
| ⚪ | `elielton` | Elielton | Elielton Souza | contato respondeu 01/01 19:00 (há 135d) — visto, aguardando  | [📁](https://drive.google.com/drive/folders/14r3ihTiZw_FUAT8Zy1xep3tdaH7BpTvZ) | Qualificar setor |
| 🟡 | `enertelles` | Enertelles (Telles) | Telles | última nossa 13/05 10:12 — há 3d sem retorno | [📁](https://drive.google.com/drive/folders/1eUy_oEQtruNPwFKSC09yHogcsSkFSXHe) | Reenviar proposta v2.0 alinhada a v1.1 (orçamento antigo R$1 |
| 🔴 | `joao` | João | Joao | silêncio 746d — última nossa 30/04 13:14 | [📁](https://drive.google.com/drive/folders/1Afoj7XoQTqQo5EIfTYZ37MygwaAxhzo9) | Qualificar setor |
| ⚪ | `leandro-telecom` | Leandro Telecom | Leandro Pedroso | contato respondeu 11/02 13:57 (há 94d) — visto, aguardando a | [📁](https://drive.google.com/drive/folders/1uxV5UoJUBDL6qNWRPly0x9iUwz7XJ1YL) | Qualificar time comercial |
| ⚪ | `marcos-consultrain` | Marcos Esteves (Consultra | Marcos Esteves | contato respondeu 30/01 17:16 (há 106d) — visto, aguardando  | [📁](https://drive.google.com/drive/folders/1SfwR3jVwNnvKieYu1DweTOA4WumS_Ndj) | Agendar discovery |
| ⚪ | `perossi` | Perossi | Escritorio Perossi | contato respondeu 05/12 11:26 (há 162d) — visto, aguardando  | [📁](https://drive.google.com/drive/folders/1vfuQO_QpqMyDtRwG2h4TuklL7qnaJvIc) | Qualificar setor |
| 🔴 | `rancho-beija-flor` | Rancho do Beija Flor | Rancho Recanto Beija-Flor | silêncio 152d — última nossa 15/12 19:05 | [📁](https://drive.google.com/drive/folders/1sl5dCXWrgTs86Eq7PrG6LnE699zIL5nr) | Baixa prioridade — sazonal |
| 🔴 | `simone` | Simone | Simone | silêncio 192d — última nossa 05/11 17:49 | [📁](https://drive.google.com/drive/folders/15IA-xlLyKb1Ss6JyvOXO712qkaxS7O6c) | Qualificar setor |
| ❓ | `agradare` | Agradare | — | contato não encontrado em chats ativos | [📁](https://drive.google.com/drive/folders/1OXdveTUHBFad5B3pGT2NZ-_r8XycrDJN) | Qualificar setor |
| ❓ | `frango-lando` | Frango Lando | — | contato não encontrado em chats ativos | [📁](https://drive.google.com/drive/folders/1Zou2wmPiCRdUbPdwKrQK2SEAsx9V0Vwh) | Baixa prioridade |
| ❓ | `handscustom` | HandsCustom | — | contato não encontrado em chats ativos | [📁](https://drive.google.com/drive/folders/1VS6qoHiEo2-bjtqkBaBnJVcKQmfILbaz) | Agente pós-venda prod separado |
| ❓ | `innover` | Innover | — | contato não encontrado em chats ativos | [📁](https://drive.google.com/drive/folders/18gq835IuB2OiSRGEGp-OhEFq5qq0I35y) | Agendar demo; early adopter |
| ❓ | `kaua` | Kaua | — | contato não encontrado em chats ativos | [📁](https://drive.google.com/drive/folders/1z1o_w6lAEpFrADkIwyvhOcfsvfkYIETa) | Qualificar setor |
| ❓ | `natural-vita-catanduva` | Natural Vita Catanduva | Jose Carlos de Paiva Natu | contato não encontrado em chats ativos | [📁](https://drive.google.com/drive/folders/1PzM_zERwSf3caytLit5GxG2q_4rfz-pK) | Qualificar time comercial |
| ❓ | `petmania` | PetMania | — | contato não encontrado em chats ativos | [📁](https://drive.google.com/drive/folders/1YqMyEbT8M40xEsG0_5olJZTbbdbzjY5m) | Encaminhar p/ agente agendamento prod |
| ❓ | `philip-funil` | Philip (Funil de Vendas) | — | contato não encontrado em chats ativos | [📁](https://drive.google.com/drive/folders/1Z33pEjfr1DNF_yRGeK_nmQ5fFf-m2Iy5) | Qualificar: cliente ou parceiro |
| ❓ | `sem-cor-18` | (sem-cor 18 — não nomeado | — | contato não encontrado em chats ativos | — | Identificar no GDrive |
| ❓ | `sem-cor-19` | (sem-cor 19 — não nomeado | — | contato não encontrado em chats ativos | — | Identificar no GDrive |

## 🔍 Descobertas Drive — folders não associados a lead do pipeline

> Pasta no GDrive Orçamentos sem match com nenhum slug do pipeline.md. Lucas decide: adicionar ao pipeline v0.3? Arquivar?

| Pasta Drive | Modificado | Link |
|---|---|---|
| Template | 2026-05-09 | [📁](https://drive.google.com/drive/folders/1zvvCS5OOCAmLUk4cZMCKF5WLHLR-R8XYHM3GEAYrstw) |
| Juliano Fotografia | 2025-11-27 | [📁](https://drive.google.com/drive/folders/1dQ5lKqhrKI_vLdV5uoF0QGUg-d_Akk5S) |
| Paula - Análise de Desempenho | 2025-11-13 | [📁](https://drive.google.com/drive/folders/1mjabizF9UsNahL60K3f0h1Apk1tpB4u8Eou3als5IDo) |
| Voltrucks | 2025-10-24 | [📁](https://drive.google.com/drive/folders/1MrmMZ6wGDQsMDCaLb4lPxgZmWNO7wIGI) |
| Magazine Borelo - Heitor | 2025-10-07 | [📁](https://drive.google.com/drive/folders/1d7Jcj1YCvP9sYZ3enlfK79tn48u-_vpr) |
| Guilherme Marchione | 2025-09-24 | [📁](https://drive.google.com/drive/folders/1qoQoBVpT3Z1PbFEOoJn2eo2PzzoVROj6) |

## 🔍 Descobertas WhatsApp — chats comerciais não mapeados (últimos 30d)

> Chats individuais com sinal comercial (palavras-chave OU >=2 não-lidas) que não casam com leads do pipeline.

| Última msg | Contato | Não-lidas | Score kw | Preview |
|---|---|---:|---:|---|
| 15/05 16:42 | Jade Campos | 7 | 0 |  |
| 15/05 15:37 | Elite Maqlam | 6 | 0 |  |

## 🎯 Priorização tática — próximos 7 dias

1. **Jean Imobiliária** — 🟢 última nossa 15/05 09:43 (há 1d) — recente
   - 📁 [Drive](https://drive.google.com/drive/folders/12SHnFOPuYTNUHzEJKzhLqvLnjQGQvtbW) (Jean Imobiliaria)
   - 🎯 Rodar 6OS Beta no ciclo dele, virar case Q2 imobiliária

2. **Alex Automação** — 🔴 silêncio 499d — última nossa 02/01 15:00
   - 🚨 ⚠️ Drive mais recente que WhatsApp — proposta não acompanhada
   - 📁 [Drive](https://drive.google.com/drive/folders/1GZ-cKtpdlPnO5-6zCg_TlsHqceOAFjEt) (Alex Automação)
   - 🎯 Conversa de parceria/revenda (não 6OS direto)

3. **ReabilitaCao (Dra. Fran)** — 🟡 última nossa 05/05 16:18 — há 11d sem retorno
   - 📁 [Drive](https://drive.google.com/drive/folders/17tiznlxR64AwoqjWx9xUiY24PrHtoG2y) (ReabilitaCao)
   - 🎯 Migrar custom → 6OS Beta; pitch de playbook

4. **Simone** — 🔴 silêncio 192d — última nossa 05/11 17:49
   - 🚨 ⚠️ Drive mais recente que WhatsApp — proposta não acompanhada
   - 📁 [Drive](https://drive.google.com/drive/folders/15IA-xlLyKb1Ss6JyvOXO712qkaxS7O6c) (Simone Sanches)
   - 🎯 Qualificar setor

5. **João** — 🔴 silêncio 746d — última nossa 30/04 13:14
   - 🚨 ⚠️ Drive mais recente que WhatsApp — proposta não acompanhada
   - 📁 [Drive](https://drive.google.com/drive/folders/1Afoj7XoQTqQo5EIfTYZ37MygwaAxhzo9) (João Dantas)
   - 🎯 Qualificar setor

6. **Enertelles (Telles)** — 🟡 última nossa 13/05 10:12 — há 3d sem retorno
   - 📁 [Drive](https://drive.google.com/drive/folders/1eUy_oEQtruNPwFKSC09yHogcsSkFSXHe) (Enertelles)
   - 🎯 Reenviar proposta v2.0 alinhada a v1.1 (orçamento antigo R$12k desatualizado); call com Alex+Telles

7. **Morgana Sales Estética** — 🔴 silêncio 18d — última nossa 28/04 18:44
   - 📁 [Drive](https://drive.google.com/drive/folders/1eE7pr6-gXlEC9DToTMPMUwN_YXriHCOt) (Morgana Sales Estética Avançada)
   - 🎯 Validar WABA + agente SDR; fechar case formal

8. **Adv. Leonardo Lopes** — ⚪ contato respondeu 31/10 13:36 (há 197d) — visto, aguardando ação sua
   - 🚨 ⚠️ Drive mais recente que WhatsApp — proposta não acompanhada
   - 📁 [Drive](https://drive.google.com/drive/folders/1uUiyYzinnWbwiTatIS0of4STAHnFQTqr) (Advogado Leonardo Lopes)
   - 🎯 Qualificar time comercial; artigo triagem IA

## 📋 Anexo — todos os 46 leads do pipeline (ordem do pipeline.md)

| # | slug | Nome | Status pipeline | Avanço WPP | Contato | Drive |
|---|---|---|---|---|---|---|
| 1 | `reabilita-cao` | ReabilitaCao (Dra. Fran) | ativo-upsell | 🟡 | ReabilitaCão | [📁](https://drive.google.com/drive/folders/17tiznlxR64AwoqjWx9xUiY24PrHtoG2y) |
| 2 | `morgana-sales` | Morgana Sales Estética | ativo-upsell | 🔴 | Morgana Sales Estética Av | [📁](https://drive.google.com/drive/folders/1eE7pr6-gXlEC9DToTMPMUwN_YXriHCOt) |
| 3 | `jean-imobiliaria` | Jean Imobiliária | ativo-upsell | 🟢 | Jean Rodrigues | [📁](https://drive.google.com/drive/folders/12SHnFOPuYTNUHzEJKzhLqvLnjQGQvtbW) |
| 4 | `matheus-joias` | Matheus Campos Joias | fora-escopo-6os | ⚪ | Matheus Campos | [📁](https://drive.google.com/drive/folders/15JBl-VKy93HVKxAYFRGLwzio8EKXdwLm) |
| 5 | `denis-maqlam` | Denis Franco (Maqlam) | fora-escopo-6os | 🟡 | Denis Franco | [📁](https://drive.google.com/drive/folders/1uvh0moRznMbnrX5zEEEJmho9WYfc2Ysj) |
| 6 | `cliente-ativo-6` | (verde 6 — não nomeado no inve | a-classificar | ❓ | — | — |
| 7 | `cliente-ativo-7` | (verde 7 — não nomeado no inve | a-classificar | ❓ | — | — |
| 8 | `dr-marcos` | Dr. Marcos | pipeline | ❓ | — | [📁](https://drive.google.com/drive/folders/1OwwinzPzLJKT4P-H2Ont-CiczmcUpFuJ) |
| 9 | `dra-cecilia-canedo` | Dra Cecilia Canedo | pipeline | ❓ | — | [📁](https://drive.google.com/drive/folders/17IAxXCHml7FIZbovpnU6JKDVaLOmoxCj) |
| 10 | `molecaggio` | Molecaggio | pipeline | ❓ | — | [📁](https://drive.google.com/drive/folders/1r0X-QWyPudtcfvMF5AuI2sTRb-KEjKG4) |
| 11 | `alex-automacao` | Alex Automação | pipeline | 🔴 | alexsandrodoads | [📁](https://drive.google.com/drive/folders/1GZ-cKtpdlPnO5-6zCg_TlsHqceOAFjEt) |
| 12 | `eduardo-nabuco` | Eduardo Nabuco | pipeline | 🔴 | Eduardo Nabuco | [📁](https://drive.google.com/drive/folders/1tD1rewrLy7g7-ZyWVY2xzfb2PlnAE6Wc) |
| 13 | `caio-altfy-riopreto` | Caio Altfy | pipeline | ❓ | — | [📁](https://drive.google.com/drive/folders/1Pq3981-vCXCFkZH1eYQ8h3i-_wPePVMS) |
| 14 | `femina` | Femina | frio | ❓ | — | [📁](https://drive.google.com/drive/folders/1agyrLTZXSctqe4nCBqg3MdzPO3MLur1Z) |
| 15 | `dra-flavia-harmonizacao` | Dra Flavia (Harmonização) | frio | ❓ | — | [📁](https://drive.google.com/drive/folders/1Do9d2T8tACBN1ELY4K5jD5rcbchrtyEk) |
| 16 | `shalomshop` | Shalomshop | frio | ❓ | — | [📁](https://drive.google.com/drive/folders/1yUuvOqw9hLaNY7FfRrFlGbUPT9kh7N1-) |
| 17 | `adv-leonardo` | Adv. Leonardo Lopes | frio | ⚪ | Leonardo Lopes | [📁](https://drive.google.com/drive/folders/1uUiyYzinnWbwiTatIS0of4STAHnFQTqr) |
| 18 | `paulo-assis-ontripe` | Paulo Assis (On Tripe) | frio | 🔴 | Assis On Trip | Paulo Aze | [📁](https://drive.google.com/drive/folders/1pRlJaDRxLNKyr1ibTjBVRJ_Vyec3KOf3) |
| 19 | `gt-dustato` | GT Dustato | frio | ❓ | — | [📁](https://drive.google.com/drive/folders/10kmKCl4J6NFng3VvxL65DjrMR5_N9DKp) |
| 20 | `wesley` | Wesley | frio | 🔴 | Wesley Serute Gestão de T | [📁](https://drive.google.com/drive/folders/1u3iqS2Aux42IV8EwAX75QKDAgEmN9vHg) |
| 21 | `vinicius-tripode` | Vinicius da Tripode | frio | ❓ | — | [📁](https://drive.google.com/drive/folders/1HqOgV0TG0Fh97uF9O8YuvrNv7mE2RzxQ) |
| 22 | `eduarda-el-clinic` | Eduarda — El Clinic | perdido | ⚪ | Eduarda Gonçalves | Prosp | [📁](https://drive.google.com/drive/folders/11QnZZOt_OdWbrDkwBPStG-X68F2un3gx) |
| 23 | `vitor-glamore` | Vitor Glamore | perdido | ❓ | — | [📁](https://drive.google.com/drive/folders/1skpjJF6bw5wVyIrD2QaPIpTg-_GLm4C4) |
| 24 | `levy-impermeabilizacao` | Levy Impermeabilização | perdido | ❓ | — | [📁](https://drive.google.com/drive/folders/1wsI1X0QUkjW8jv-KpX9bkJNpY7jR_2z2) |
| 25 | `luiz-chopp-colina` | Luiz Chopp Colina | perdido | ❓ | — | [📁](https://drive.google.com/drive/folders/1KMYYuPTrU0X7buuAxW10QaLMkMroqO2q) |
| 26 | `eduarda-satisfact` | Eduarda Satisfact | perdido | ⚪ | Eduarda Gonçalves | Prosp | [📁](https://drive.google.com/drive/folders/1a0Mu3JizmPA2Yir0wrjm8QKCRyuY62qF) |
| 27 | `lifeskill-levy` | Lifeskill Levy | a-classificar | ⚪ | LIFESKILL+  Unidade Jardi | [📁](https://drive.google.com/drive/folders/1gWoecb02hm3yS14gyY_6aaSmPkgdsrkf) |
| 28 | `innover` | Innover | a-classificar | ❓ | — | [📁](https://drive.google.com/drive/folders/18gq835IuB2OiSRGEGp-OhEFq5qq0I35y) |
| 29 | `bravo-agencia` | Bravo Agência | a-classificar | ⚪ | Gustavo Bravo | [📁](https://drive.google.com/drive/folders/1ntDYKY_VTZutz_XEjW3lTIDcy3v5tz2F) |
| 30 | `philip-funil` | Philip (Funil de Vendas) | a-classificar | ❓ | — | [📁](https://drive.google.com/drive/folders/1Z33pEjfr1DNF_yRGeK_nmQ5fFf-m2Iy5) |
| 31 | `marcos-consultrain` | Marcos Esteves (Consultrain) | a-classificar | ⚪ | Marcos Esteves | [📁](https://drive.google.com/drive/folders/1SfwR3jVwNnvKieYu1DweTOA4WumS_Ndj) |
| 32 | `petmania` | PetMania | a-classificar | ❓ | — | [📁](https://drive.google.com/drive/folders/1YqMyEbT8M40xEsG0_5olJZTbbdbzjY5m) |
| 33 | `handscustom` | HandsCustom | a-classificar | ❓ | — | [📁](https://drive.google.com/drive/folders/1VS6qoHiEo2-bjtqkBaBnJVcKQmfILbaz) |
| 34 | `leandro-telecom` | Leandro Telecom | a-classificar | ⚪ | Leandro Pedroso | [📁](https://drive.google.com/drive/folders/1uxV5UoJUBDL6qNWRPly0x9iUwz7XJ1YL) |
| 35 | `enertelles` | Enertelles (Telles) | **pipeline-ativo** | 🟡 | Telles | [📁](https://drive.google.com/drive/folders/1eUy_oEQtruNPwFKSC09yHogcsSkFSXHe) |
| 36 | `frango-lando` | Frango Lando | a-classificar | ❓ | — | [📁](https://drive.google.com/drive/folders/1Zou2wmPiCRdUbPdwKrQK2SEAsx9V0Vwh) |
| 37 | `natural-vita-catanduva` | Natural Vita Catanduva | a-classificar | ❓ | Jose Carlos de Paiva Natu | [📁](https://drive.google.com/drive/folders/1PzM_zERwSf3caytLit5GxG2q_4rfz-pK) |
| 38 | `rancho-beija-flor` | Rancho do Beija Flor | a-classificar | 🔴 | Rancho Recanto Beija-Flor | [📁](https://drive.google.com/drive/folders/1sl5dCXWrgTs86Eq7PrG6LnE699zIL5nr) |
| 39 | `elielton` | Elielton | a-classificar | ⚪ | Elielton Souza | [📁](https://drive.google.com/drive/folders/14r3ihTiZw_FUAT8Zy1xep3tdaH7BpTvZ) |
| 40 | `simone` | Simone | a-classificar | 🔴 | Simone | [📁](https://drive.google.com/drive/folders/15IA-xlLyKb1Ss6JyvOXO712qkaxS7O6c) |
| 41 | `perossi` | Perossi | a-classificar | ⚪ | Escritorio Perossi | [📁](https://drive.google.com/drive/folders/1vfuQO_QpqMyDtRwG2h4TuklL7qnaJvIc) |
| 42 | `joao` | João | a-classificar | 🔴 | Joao | [📁](https://drive.google.com/drive/folders/1Afoj7XoQTqQo5EIfTYZ37MygwaAxhzo9) |
| 43 | `agradare` | Agradare | a-classificar | ❓ | — | [📁](https://drive.google.com/drive/folders/1OXdveTUHBFad5B3pGT2NZ-_r8XycrDJN) |
| 44 | `kaua` | Kaua | a-classificar | ❓ | — | [📁](https://drive.google.com/drive/folders/1z1o_w6lAEpFrADkIwyvhOcfsvfkYIETa) |
| 45 | `sem-cor-18` | (sem-cor 18 — não nomeado no i | a-classificar | ❓ | — | — |
| 46 | `sem-cor-19` | (sem-cor 19 — não nomeado no i | a-classificar | ❓ | — | — |

## Changelog

### v0.2 (2026-05-16)
- Re-cruzamento na instância **`lucas`** (vs LunaJ6 da v0.1)
- 22 contatos resolvidos via WhatsApp (vs 5 da v0.1)
- 42 leads com pasta Drive identificada (cobertura 91%)
- Classificação automática de avanço (🟢🟡🔴⚪) derivada do `wa_lastMsgTimestamp` + `wa_lastMessageSender` + `wa_unreadCount`
- Sinal cruzado **⚠️ Drive mais recente que WhatsApp** detectado em N leads (proposta não acompanhada)
- Descobertas: 6 folders Drive sem match no pipeline + 2 chats WhatsApp comerciais não mapeados

### Limitações conhecidas

- **uazapi `/message/find` não filtra por `chatid`** — bug investigado (testadas variantes `where`, top-level, `chat_id`, `jid`, `sender`). Conseguido apenas dados do chat objeto (`/chat/find`), suficiente pra classificar avanço mas sem preview de texto das últimas mensagens.
- **24 leads sem match WhatsApp** — maioria são `sem-cor` ou `cliente-ativo-N` sem nome real no pipeline. Resto são leads frios que Lucas nunca trocou número.
- **Fallback agenda exige nome inteiro** (≥2 tokens) pra evitar falsos positivos como `Dr. Marcos` → `Cabeleleiro Marcos`.

### v0.1 (15/05/2026)
- Primeira tentativa: 5/16 contatos confirmados via instância LunaJ6 (bot, número errado)
- 11 leads ficaram como `❓ falta número do Lucas`

