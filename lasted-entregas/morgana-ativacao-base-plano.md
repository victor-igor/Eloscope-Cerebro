# Plano de Ativação — Base de Leads Morgana Estética Avançada

**Data de criação:** 07/05/2026  
**Referência ClickUp:** [86e17th1a — Listar Pendências do Projeto](https://app.clickup.com/t/86e17th1a)  
**Lista:** [Morgana — 901713294075](https://app.clickup.com/90171169593/v/l/li/901713294075)

---

## 1. Resumo Executivo

A campanha de ativação dos ~9.000 leads antigos da Morgana Estética Avançada está travada por quedas frequentes nos números não-oficiais de WhatsApp. Os números vêm caindo durante o aquecimento via MMZap e Uazap, impossibilitando os disparos em escala. A solução está em andamento em duas frentes paralelas: (a) aquecimento disciplinado dos 3 números não-oficiais seguindo protocolo estrito de 10 dias para usá-los como backup/SDR futuro, e (b) configuração da API oficial da Meta com o número `55 17 98154-2837`, que desbloqueará os disparos em escala sem risco de queda. A API oficial está bloqueada por uma ação exclusiva da Autem (André) — gerar o Usuário de Sistema + token na Meta — replanejada para 08/05. Em paralelo, o sistema `morganasales_core` precisa ser atualizado para suportar a API oficial e receber melhorias do projeto Maqlam no módulo de campanhas.

---

## 2. Tarefas Concluídas (histórico — criar como fechadas no ClickUp)

| # | Título | Responsável | ID ClickUp | Quando |
|---|--------|-------------|------------|--------|
| C1 | Colocar o projeto Morgana em produção | Lucas | `86e13dfwx` | Abril/2026 |
| C2 | Cadastrar lista de leads do Matheus + ativar IA de ativação | Lucas | `86e126u49` | Abril/2026 |
| C3 | Definir script da IA de ativação de base | Lucas | `86e150f7z` | Abril/2026 |
| C4 | Fixes campanhas WhatsApp + script IA Morg + hybrid_search | Lucas | `86e15d0ja` | 29–30/04/2026 |
| C5 | Ativar SDR no número principal Morgana | Hugo | `86e16a2g0` | Maio/2026 |
| C6 | Voltar o número do chip 5517981542833 após bloqueio | Lucas | `86e17rr3k` | Maio/2026 |
| C7 | Dar acesso ao `lucasnsads@gmail` no Business Manager da Meta (portfólio Morgana) | Lucas / André (Autem) | `86e17tk2u` | 07/05/2026 |
| C8 | Criar app na conta Developer do Lucas e vincular à Morgana | Lucas | — | 07/05/2026 |
| C9 | Preencher dados para ativação do app da Meta | Lucas | — | 07/05/2026 |
| C10 | Conectar e validar Chatwoot ↔ app da Meta | Lucas | — | 07/05/2026 — conexão OK |

---

## 3. Tarefas em Andamento

---

### A. Aquecimento dos números não-oficiais
**ClickUp:** [`86e16a2e9`](https://app.clickup.com/t/86e16a2e9)

**Por que surgiu:** Os números não-oficiais vêm sendo usados para os disparos da Morgana desde o início do projeto. Nos últimos 8 dias, os 3 chips entraram em processo de aquecimento para poder subir no Uazap e fazer os disparos de ativação da base. No entanto, os números estão caindo com frequência — tanto no Uazap quanto durante o MMZap. A causa são conexões prematuras e falta de protocolo de aquecimento gradual. Enquanto a API oficial não está pronta, esses números precisam ser estabilizados para funcionar como canal de backup e SDR.

| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas (tem os 3 celulares fisicamente) |
| **Status** | Em andamento — números desconectados no momento |
| **Bloqueio** | Números caem com frequência no Uazap e durante o MMZap |

**Números em aquecimento:**
| Número | Identificação | Dispositivo |
|--------|--------------|-------------|
| 55 17 98154-2833 | Morg Estética Avançada | Pocco 1 |
| 55 17 98126-7711 | Morg Atendente | Pocco 1 Morg |
| 55 17 98126-7748 | Morg Atendimento | Pocco 2 Morg |

**Critério de conclusão:** Números estáveis por 4 dias consecutivos de MMZap sem queda, aptos para subir no Uazap.

---

### B. Configurar 2 chips novos do Matheus na infra de IA
**ClickUp:** [`86e150f6z`](https://app.clickup.com/t/86e150f6z) — urgente

**Por que surgiu:** No início do projeto, Matheus (sócio da Morgana) enviou um celular com 3 chips. 2 desses chips são os que estão em aquecimento (Pocco 1 e Pocco 2). O Matheus enviou 2 chips adicionais para ampliar a capacidade da infra de IA — eles precisam ser configurados no Uazap e integrados ao n8n para entrada em operação.

| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas |
| **Status** | Em progresso — urgente |
| **Dependência** | Chips fisicamente com Lucas ou a caminho |

**Critério de conclusão:** Chips configurados e ativos na infra (Uazap + n8n).

---

### C. Ajustar campanhas Morgana pós-bloqueio do número principal
**ClickUp:** [`86e16a3dd`](https://app.clickup.com/t/86e16a3dd)

**Por que surgiu:** O número principal da Morgana tomou bloqueio (tarefa C6 registra o retorno). Após o bloqueio, o módulo de campanhas do sistema precisou de ajustes para funcionar com os números alternativos e para acomodar a mudança de estratégia para API oficial. A tarefa está em progresso e vai convergir com a Tarefa I (atualização do morganasales_core).

| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas (código) / Victor (coordenação) |
| **Status** | Em progresso |
| **Dependência** | API oficial configurada (Tarefa D→E) + morganasales_core atualizado (Tarefa I) |

**Critério de conclusão:** Módulo de campanhas aceitando API oficial, disparos funcionando via Chatwoot.

---

## 4. Tarefas para os Próximos Dias

---

### D. Gerar Usuário de Sistema + token na Meta (Autem)
**Data prevista:** 08/05/2026

**Por que surgiu:** Para colocar o app da Meta em produção e usar a API oficial do WhatsApp, é necessário um token de longa duração gerado por um Usuário de Sistema configurado na conta de negócios da Morgana. Lucas não tem acesso a essa parte do Business Manager — somente a Autem tem. Tentaram em 07/05 e não conseguiram. Replanejado para amanhã.

| Campo | Valor |
|-------|-------|
| **Responsável** | André — Autem |
| **Contato** | WhatsApp da Autem: `+55 17 98814-5147` (André + outra pessoa no mesmo número) |
| **Ponto de atenção** | Single point of failure — só a Autem pode fazer isso na BM da Morgana |
| **Dependência** | Nenhuma — pode ser feito imediatamente |

**O que precisa acontecer:** Na conta de negócios da Meta da Morgana, a Autem cria um Usuário de Sistema com permissões adequadas e gera o token permanente para o app do Lucas.

**Critério de conclusão:** Lucas recebe o token e consegue autenticar o app com a API do WhatsApp Business.

---

### E. Configurar número 55 17 98154-2837 na API oficial
**Data prevista:** 08/05/2026 (logo após Tarefa D)

**Por que surgiu:** Quando Matheus enviou o primeiro celular no início do projeto, havia 3 chips. Dois foram para os números em aquecimento. O terceiro — `5517981542837` — ficou sem uso. Agora ele é o candidato para a API oficial por estar limpo, sem histórico de bloqueio e já estar fisicamente com Lucas.

| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas |
| **Dependência** | Token da Autem (Tarefa D) |

**O que precisa acontecer:** Lucas usa o token recebido da Autem para registrar e ativar o número `55 17 98154-2837` como número ativo no app da Meta vinculado à Morgana.

**Critério de conclusão:** Número aparece como ativo no Business Manager da Meta, consegue receber e enviar mensagens via API oficial.

---

### F. Confirmar cartão em dólar e cadastrar no número da API
**Data prevista:** 08–09/05/2026

**Por que surgiu:** A API oficial da Meta cobra por mensagem enviada em dólar. Para ativar o número, é obrigatório cadastrar um cartão de crédito internacional vinculado ao número dentro do Business Manager. Sem isso, o número fica ativo mas não envia nada.

| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas (acompanhar e coordenar o processo) |
| **Quem cadastra** | Provavelmente Matheus (tem cartão internacional) — confirmar no dia 08/05 |
| **Contato Matheus** | `+5517981280789` / `matheuscamposjoias@gmail.com` |
| **Dependência** | Número ativo (Tarefa E) |

**O que precisa acontecer:** Lucas confirma com Matheus se tem cartão internacional disponível e coordena o cadastro — Matheus faz direto no Business Manager ou repassa os dados para a Autem cadastrar.

**Critério de conclusão:** Cartão cadastrado, número apto para enviar templates e ser cobrado em dólar.

---

### G. Criar templates transacionais na Meta
**Data prevista:** 09–10/05/2026

**Por que surgiu:** Para disparar mensagens via API oficial para leads que não iniciaram conversa nos últimos 24h, é obrigatório usar templates pré-aprovados pela Meta. Templates classificados como **transacionais** (não de marketing) têm menor custo por envio e menor risco de bloqueio da conta — estratégia essencial para a campanha de reativação da base de 9.000 leads.

| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas (criação técnica no Business Manager) / Victor (revisão de copy e estratégia de classificação) |
| **Dependência** | Cartão cadastrado (Tarefa F) |

**O que precisa acontecer:** Criar os templates com copy que estimule resposta do lead, submetê-los para aprovação da Meta buscando classificação transacional. O conteúdo deve abrir janela de conversa de 24h para o agente Morg atuar.

**Critério de conclusão:** Templates com status "Aprovado" na Meta e classificação transacional confirmada.

---

### H. Ativar campanha de disparos pela API oficial
**Data prevista:** 10–11/05/2026

**Por que surgiu:** O objetivo central do projeto Morgana desde o início é reativar a base de ~9.000 leads que não viraram clientes — R$ 160k em investimento de tráfego parado. Todos os passos anteriores (API, número, cartão, templates, código) convergem aqui: o primeiro disparo real para a base via canal oficial.

| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas (configuração técnica da campanha no sistema) + Hugo (fluxo n8n + agente Morg que atende os retornos) |
| **Dependência** | Templates aprovados (Tarefa G) + morganasales_core atualizado (Tarefa I) |

**O que precisa acontecer:** Criar a campanha no painel da Morgana com o número `5517981542837` via API oficial, disparar a primeira leva para a base. Hugo garante que o agente Morg está pronto para responder os leads que retornarem.

**Critério de conclusão:** Primeira leva enviada com sucesso via API oficial, agente Morg respondendo aos retornos no Chatwoot.

---

### I. Atualizar morganasales_core — suporte a API oficial + melhorias do Maqlam
**Data prevista:** 08–12/05/2026 (paralelo às demais tarefas — pode começar imediatamente)

**Por que surgiu:** O módulo de campanhas do sistema (`packages/modules/campaigns`, submódulo `eloscope-ai/mod-campaigns`) foi construído para API não-oficial. Com a migração para API oficial, o código precisa ser atualizado para aceitar o novo provider e conectar corretamente ao Chatwoot. Além disso, o projeto de referência Maqlam evoluiu o módulo de campanhas com funcionalidades que a Morgana ainda não tem — e que são essenciais para operar a campanha de ativação com qualidade (controle de intervalo, acompanhamento em tempo real, pausar etc.).

| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas (implementação) / Victor (coordenação e revisão) |
| **Referência** | [`eloscope-ai/mod-campaigns`](https://github.com/eloscope-ai/mod-campaigns) e [`victor-igor/Maqlam`](https://github.com/victor-igor/Maqlam) |

**Grupo 1 — Suporte à API oficial (bloqueante para a Tarefa H):**
- Aceitar `provider: meta_official` no criador de campanhas
- Conectar ao Chatwoot para disparos via API oficial da Meta
- Adaptar `channelsAdapter.ts` para o número `5517981542837` com token oficial

**Grupo 2 — Melhorias do Maqlam (trazer para o mod-campaigns):**
| Funcionalidade | Referência no Maqlam |
|---|---|
| Intervalo de tempo entre disparos | `CampaignSettingsModal` + migration `message_interval` |
| Acompanhar fila em tempo real após criação | `CampaignQueueViewer` (barra de progresso, filtros por status) |
| Pausar campanha em andamento | `DestructiveEditDialog` |
| Alterar ordem de disparo | `SlotScheduleEditor` |
| Ver data de disparo de cada contato | `CampaignQueueViewer` (coluna scheduled_at) |
| Adicionar contatos a campanha já criada | `OpenCampaignManager` |

**Critério de conclusão:** Campanha criada no painel da Morgana usando API oficial, fila visível em tempo real, todas as melhorias do Maqlam funcionando.

---

### J. Aquecimento diário dos números não-oficiais — 10 dias (08/05 a 17/05)

**Por que surgiu:** Os 3 números em aquecimento estão caindo porque foram conectados no Uazap/MMZap cedo demais e sem protocolo gradual. O recomendado é iniciar apenas com uso manual no celular, entrar em grupos, salvar contatos e só então escalar para o MMZap de forma progressiva. Após 4 dias estáveis de MMZap, os números ficam prontos para o Uazap + simulação de conversas. A rotina precisa ser executada todos os dias, nos 3 números, sem interrupção.

**Responsável:** Lucas  
**Protocolo diário obrigatório (em todos os 3 números):**
1. Conversar pelo celular físico (não pelo computador)
2. Entrar em 1 grupo por dia
3. Contatar uma empresa que usa API oficial do WhatsApp
4. Adicionar 1 destaque no perfil
5. Salvar e sincronizar contatos com Google Contacts (aumenta score de confiança da conta)

---

#### J-01 | 08/05 (Quinta) — Dia 1: Reconectar + Rotina Manual
| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas |
| **Ação MMZap** | Não — apenas rotina manual no celular |
| **Ação Uazap** | Não |

Reconectar os 3 números (estão desconectados). Executar protocolo diário completo nos 3 aparelhos. Não conectar ao MMZap ainda.

---

#### J-02 | 09/05 (Sexta) — Dia 2: Rotina Manual
| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas |
| **Ação MMZap** | Não — apenas rotina manual |
| **Ação Uazap** | Não |

Segundo dia completo de rotina manual nos 3 números. Observar se há quedas espontâneas e registrar.

---

#### J-03 | 10/05 (Sábado) — Dia 3: 1º dia MMZap — 1h
| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas |
| **Ação MMZap** | Sim — 1h por número (Google Chrome, computador do Lucas) |
| **Ação Uazap** | Não |

Rotina manual completa + conectar o MMZap maturador por 1h em cada número. Monitorar se algum número cai durante o MMZap.

---

#### J-04 | 11/05 (Domingo) — Dia 4: 2º dia MMZap — 2h
| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas |
| **Ação MMZap** | Sim — 2h por número |
| **Ação Uazap** | Não |

Rotina manual + 2h de MMZap. A partir daqui manter 2h diárias.

---

#### J-05 | 12/05 (Segunda) — Dia 5: 3º dia MMZap — 2h
| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas |
| **Ação MMZap** | Sim — 2h por número |
| **Ação Uazap** | Não |

Rotina manual + 2h MMZap. Se algum número cair, reconectar e não contar esse dia no ciclo de 4.

---

#### J-06 | 13/05 (Terça) — Dia 6: 4º dia MMZap — 2h → Uazap liberado
| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas |
| **Ação MMZap** | Sim — 2h por número |
| **Ação Uazap** | Liberar — subir no Uazap após completar as 2h de MMZap |

Último dia do ciclo de 4 dias de MMZap. Se todos os números estiverem estáveis, subir no Uazap ao fim do dia.

---

#### J-07 | 14/05 (Quarta) — Dia 7: Uazap ativo + Simulação de conversas
| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas |
| **Ação MMZap** | Sim — 2h por número (manter) |
| **Ação Uazap** | Sim — números ativos |
| **Painel simulação** | [`automindhub.com.br/webhook/app/dashboard`](https://webhook.automindhub.com.br/webhook/app/dashboard) |

Rotina manual + 2h MMZap + Uazap ativo. Usar o painel automindhub para simular conversas e aumentar o score dos números.

---

#### J-08 | 15/05 (Quinta) — Dia 8: Manter rotina completa
| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas |
| **Ação MMZap** | Sim — 2h |
| **Ação Uazap** | Sim |
| **Painel simulação** | Sim |

Manter toda a rotina. Monitorar estabilidade.

---

#### J-09 | 16/05 (Sexta) — Dia 9: Manter rotina completa
| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas |
| **Ação MMZap** | Sim — 2h |
| **Ação Uazap** | Sim |
| **Painel simulação** | Sim |

---

#### J-10 | 17/05 (Sábado) — Dia 10: Avaliação final + números prontos para uso
| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas |
| **Ação MMZap** | Sim — 2h |
| **Ação Uazap** | Sim |
| **Painel simulação** | Sim |

Ao final do dia 10, avaliar se os 3 números estão estáveis. Se sim: números aprovados para uso como SDR / backup de campanha. Reportar para Victor.

---

### K. Marcar reunião de alinhamento — próximos passos SDR Morgana
**ClickUp:** [`86e16a2ey`](https://app.clickup.com/t/86e16a2ey)

**Por que surgiu:** Com o SDR ativado (C5 concluído), o próximo passo natural é alinhar operação, script, critérios de qualificação e o que Hugo está monitorando no n8n. A reunião também é o momento de Hugo entender a nova arquitetura (API oficial → Chatwoot) antes da campanha de ativação ir ao ar.

| Campo | Valor |
|-------|-------|
| **Responsável** | Victor (agenda e conduz) |
| **Participantes** | Victor + Hugo + Lucas (se necessário) |
| **Data prevista** | A definir — antes da Tarefa H (ativação da campanha) |

**Critério de conclusão:** Reunião realizada, Hugo alinhado com a nova arquitetura de API oficial + Chatwoot.

---

### L. Configurar chip novo
**ClickUp:** [`86e17tk70`](https://app.clickup.com/t/86e17tk70)

**Por que surgiu:** Tarefa associada à expansão da infra de números da Morgana. Provavelmente relacionada ao recebimento de um chip adicional do Matheus para ampliar capacidade de disparo ou SDR.

| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas |
| **Data prevista** | ?? — depende da entrega do chip |
| **Ponto de atenção** | Confirmar com Victor/Matheus qual chip é esse e qual a finalidade (aquecimento? SDR? backup?) |

**Critério de conclusão:** Chip configurado no Uazap e integrado ao n8n.

---

### M. Recuperar número que tomou bloqueio
**ClickUp:** [`86e17tkgh`](https://app.clickup.com/t/86e17tkgh)

**Por que surgiu:** Um dos números tomou bloqueio do WhatsApp durante o processo. A tarefa `86e17rr3k` (C6) registra a volta do chip `5517981542833`, mas esta tarefa (`86e17tkgh`) parece indicar que pode haver outro número ou bloqueio posterior.

| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas |
| **Data prevista** | ?? |
| **Ponto de atenção** | Confirmar com Lucas qual número está bloqueado e qual a estratégia — tentar recuperar via appeals da Meta ou trocar o chip |

**Critério de conclusão:** Número recuperado e operacional, ou decisão tomada de descartar e substituir.

---

## 5. Tarefas Sem Responsável ou Data Definidos

> Precisam de definição antes de avançar.

| Tarefa | O que falta definir |
|--------|---------------------|
| **L — Configurar chip novo** | Confirmar qual chip, quando chega, e para qual finalidade (SDR? backup? aquecimento?) |
| **M — Recuperar número bloqueado** | Confirmar qual número especificamente e decidir: recuperar via Meta appeals ou substituir chip |
| **K — Reunião de alinhamento SDR** | Victor precisa agendar — urgente fazer antes da Tarefa H |

---

## 6. Lacunas e Riscos

| # | Risco | Impacto | Mitigação |
|---|-------|---------|-----------|
| R1 | **Single point of failure na Autem** — só André pode gerar o token na BM da Morgana | Alto — qualquer atraso do André trava a API oficial | Contatar via WhatsApp `+55 17 98814-5147` na manhã de 08/05. Se não resolver no dia, escalar para Matheus |
| R2 | **Números em aquecimento instáveis** — qualquer quebra de protocolo derruba a conta | Médio — atrasa o canal de backup | Seguir o protocolo J-01 a J-10 à risca; não pular etapas |
| R3 | **Cartão em dólar do Matheus não confirmado** — pode não ter cartão internacional | Alto — bloqueia ativação do número da API oficial | Lucas confirma com Matheus em 08/05 antes de avançar |
| R4 | **Sem prazo formal com a Morgana** — campanha deveria ter começado em maio | Médio — risco de insatisfação do cliente (Matheus) | Tratar como P0; atualizar Matheus sobre progresso a cada avanço relevante |
| R5 | **mod-campaigns sem suporte à API oficial** — sem isso os disparos não rodam no sistema | Alto — bloqueia a Tarefa H | Iniciar Tarefa I imediatamente, Grupo 1 tem prioridade |
| R6 | **Número `5517981542837` sem histórico de uso** — Meta pode exigir aquecimento antes de templates em escala | Médio | Criar templates transacionais (menor restrição); começar com volume baixo |
| R7 | **Hugo não alinhado com nova arquitetura** — se n8n não estiver preparado para API oficial → Chatwoot, o agente não atende os retornos | Médio | Realizar Tarefa K (reunião de alinhamento) antes de ativar a campanha |

---

## 7. Referências

| Recurso | Link / Contato |
|---------|---------------|
| ClickUp — tarefa principal | https://app.clickup.com/t/86e17th1a |
| ClickUp — lista Morgana | https://app.clickup.com/90171169593/v/l/li/901713294075 |
| GitHub — morganasales_core | https://github.com/victor-igor/morganasales_core |
| GitHub — mod-campaigns (submódulo) | https://github.com/eloscope-ai/mod-campaigns |
| GitHub — Maqlam (referência de melhorias) | https://github.com/victor-igor/Maqlam |
| Painel simulação de conversas | https://webhook.automindhub.com.br/webhook/app/dashboard |
| André — Autem Services Digital | WhatsApp `+55 17 98814-5147` |
| Matheus Campos — Morgana (sócio/contratante) | `+5517981280789` · `matheuscamposjoias@gmail.com` |
| Número para API oficial | `55 17 98154-2837` (fisicamente com Lucas) |
| Formalização contratual Morgana | Google Drive — "Formalização Morgana" |
| Reunião Morgana × Autem × Eloscope (25/02/2026) | Google Drive — "REUNIAO - 2026-02-25 - WhatsApp API oficial e Inteligência" |
