---
tipo: doc
status: ativo
tags: [cliente/bravo, area/vendas, tipo/discovery, tipo/onboarding, tipo/levantamento]
cliente: bravo
data: 2026-04-27
fonte: links enviados pelo Gustavo via WhatsApp 27/04
relacionados: ["[[levantamento-discovery]]", "[[bpmn-basico]]", "[[proposta-pos-discovery]]"]
---

# Formulários de Briefing — Bravo Agency

> [!info] O que é
> Mapeamento dos 5 formulários Google Forms que a Bravo envia ao cliente no onboarding e/ou ao iniciar uma nova frente de serviço. Base pra projetar Skill de onboarding automatizado e mecanismo de cobrança/aprovação.

> [!success] 4 de 5 mapeados
> - ✅ Briefing Tráfego Pago (16 perguntas) — via fetch
> - ✅ Briefing Conteúdos (15 perguntas) — copiado pelo Gustavo 27/04
> - ✅ Briefing Site (7 perguntas) — copiado pelo Gustavo 27/04
> - ✅ Dados de Acesso (8 perguntas) — via fetch
> - 🔒 Dados para Contrato — pendente (URL: https://forms.gle/ERgYnvBQc6TkJbDu9)

---

## 1. BRIEFING — TRÁFEGO PAGO ✅ mapeado

**URL pública:** https://forms.gle/tnwztyRXYBRgBWV79
**ID Google Forms:** `1FAIpQLSfAqUblQHFEj5W_Y3iAtuJMgMLE4dmupIF6rljpmAJC_Xap2A`
**Quando envia:** cliente fechou pacote com tráfego pago (Meta / Google / TikTok)
**Descrição oficial:** "Informações para campanhas em Google Ads, Meta Ads e TikTok Ads"

### Perguntas (16, sendo 15 obrigatórias)

| # | Pergunta | Tipo | Obrig. | Opções |
|---|----------|------|--------|--------|
| 1 | Nome da Empresa (Cliente) | texto curto | ✅ | — |
| 2 | Orçamento Total R$ para Campanhas do Mês | texto curto | ✅ | — |
| 3 | Segmentação Geográfica para Anúncios | múltipla escolha | ✅ | Raio [km]; Estados; Brasil todo |
| 4 | Defina Melhor a(s) Resposta(s) Acima | texto longo | ✅ | — |
| 5 | Público-Alvo | texto curto | ✅ | — |
| 6 | Classe Média do Público | múltipla escolha | ✅ | A; B; C; D; Todos acima |
| 7 | Conta no Gerenciador Meta | múltipla escolha | ✅ | Sim; Não; Não sei |
| 8 | Anúncios Ativos/Anteriores na Meta | texto curto | ✅ | — |
| 9 | Conta no Google Ads Criada | texto curto | ✅ | — |
| 10 | Anúncios Ativos/Anteriores no Google Ads | texto curto | ✅ | — |
| 11 | Conta no Google Analytics Criada | texto curto | ✅ | — |
| 12 | Conta no Google Tag Manager Criada | texto curto | ✅ | — |
| 13 | Conta no TikTok Ads Criada | texto curto | ✅ | — |
| 14 | Anúncios Ativos/Anteriores no TikTok Ads | texto curto | ✅ | — |
| 15 | Ofertas para Divulgar | texto longo | ✅ | — |
| 16 | Observações Adicionais | texto longo | ❌ | — |

### Análise rápida
- **Lacuna 1:** perguntas 9-14 são "texto curto" pra info booleana ("Conta criada?"). Cliente responde de forma livre → dado bagunçado pra processar. **Fix:** Sim/Não/Não sei (igual pergunta 7).
- **Lacuna 2:** sem campo de **objetivo de campanha** (lead, conversão, alcance, tráfego site).
- **Lacuna 3:** sem **histórico de CPL/CPA** dos anúncios anteriores — input crítico pra otimização inicial.
- **Lacuna 4:** sem **landing page / destino** dos anúncios.
- **Lacuna 5:** sem **dados de acesso** (que estão num form separado — fragmentação).

---

## 2. BRIEFING — CONTEÚDOS ✅ mapeado (27/04 via Gustavo)

**URL pública:** https://forms.gle/nXG39WxzsaTtsuQt6
**ID Google Forms:** `1FAIpQLSfBVPF4duI2kD1W7vBC98eoCiZDfKvaaI40xDSCSb2dzOw8bQ`
**Quando envia:** todo cliente novo de pacote mensal (core da operação)

### Perguntas (15)

| # | Pergunta | Tipo (inferido) | Obrig. (inferido) |
|---|----------|-----------------|-------------------|
| 1 | NOME DA EMPRESA | texto curto | ✅ |
| 2 | QUAL É O OBJETIVO DA EMPRESA COM MARKETING DIGITAL? | texto longo | ✅ |
| 3 | QUAIS SÃO OS DESAFIOS QUE SÃO ENFRENTADOS PELA EMPRESA ATUALMENTE E COMO MARKETING DIGITAL PODE AJUDAR? | texto longo | ✅ |
| 4 | QUAL É O SEU PÚBLICO-ALVO? QUEM SÃO ESSAS PESSOAS, SEUS DADOS DEMOGRÁFICOS E GEOGRÁFICOS? | texto longo | ✅ |
| 5 | RAIO DE ATUAÇÃO | texto curto | ✅ |
| 6 | PRODUTOS OU SERVIÇOS DA EMPRESA? | texto longo | ✅ |
| 7 | QUAIS SÃO AS CARACTERÍSTICAS E DIFERENCIAIS DO PRODUTO / SERVIÇO? | texto longo | ✅ |
| 8 | HÁ ALGUMA PRIORIDADE NA HORA DE DIVULGAR AS SOLUÇÕES OU ALGO QUE NÃO DEVA SER FALADO? | texto longo | ✅ |
| 9 | COMO TEM SIDO A EXPERIÊNCIA DOS SEUS ATUAIS CLIENTES? | texto longo | ✅ |
| 10 | QUAL É O VALOR DO PRODUTO / SERVIÇO PRESTADO? CITE: | texto longo | ✅ |
| 11 | EXISTE ALGUM FEEDBACK NEGATIVO QUE OS CLIENTES PASSAM E QUE POSSA SER MELHORADO? | texto longo | ✅ |
| 12 | O SEU PRODUTO / SERVIÇO POSSUI SAZONALIDADE, ALGUMA DATA ESPECÍFICA? | texto longo | ✅ |
| 13 | IMAGEM DA MARCA, O QUE DESEJA TRANSMITIR PARA SEU PÚBLICO? | texto longo | ✅ |
| 14 | IDENTIDADE VISUAL: manual de marca? satisfação? referências? envio em anexo | texto longo + upload | ✅ |
| 15 | CITE REFERÊNCIAS E CONCORRENTES | texto longo | ✅ |

### Análise rápida
- **Lacuna 1:** **15 perguntas, 13 são texto longo abertas** → cliente preenche em 30-60min, abandono alto.
- **Lacuna 2:** sem **frequência desejada** (posts/mês, formatos preferidos) — Bravo descobre depois.
- **Lacuna 3:** sem **tom de voz / persona** estruturado — pergunta 13 ("o que desejas transmitir") tenta cobrir mas é muito vago.
- **Lacuna 4:** sem **hashtags / termos próprios da marca** — input crítico pra Content Machine.
- **Lacuna 5:** sem **redes sociais ativas e suas senhas/links** — cai no form de "Dados de Acesso" separado.
- **Lacuna 6:** pergunta 14 mistura 4 perguntas em uma → resposta caótica.
- **Lacuna 7:** sem campo de **calendário editorial sugerido** ou expectativa de aprovação (prazo, canal).

### Insight pra Content Machine / Skill 3
> [!tip]
> Esse briefing **já cobre 70% do que a Content Machine precisa** como input estruturado: público, produto, diferencial, sazonalidade, tom, referências. Faltam: **frequência, formato preferido, hashtags, links de rede social**. Skill 3 (Análise mensal) consome estes mesmos campos — ganha contexto rico se Typeform consolidado conseguir todos.

---

## 3. BRIEFING — CRIAÇÃO DE SITE ✅ mapeado (27/04 via Gustavo)

**URL pública:** https://forms.gle/1pdt25DasKqKc9qc7
**ID Google Forms:** `1FAIpQLScr_g1YNzsR7PPRRR538MXGxjZmHZbP8wH2JGO6EZForSrQ3Q`
**Quando envia:** cliente contratou pacote com site/LP (Lovable hoje)

### Perguntas (7)

| # | Pergunta | Tipo (inferido) | Obrig. |
|---|----------|-----------------|--------|
| 1 | NOME DA EMPRESA | texto curto | ✅ |
| 2 | IDÉIAS CORES (ATÉ 3 CORES) | texto curto | ❌ |
| 3 | DADOS A SEREM INSERIDOS NO SITE (TELEFONE, E-MAIL, ENDEREÇO E REDES SOCIAIS) | texto longo | ✅ |
| 4 | PRINCIPAIS CATEGORIAS A SEREM INSERIDAS NO SITE? EX: PRODUTOS / SERVIÇOS / CONTATOS / BLOG | texto longo | ✅ |
| 5 | QUAL É O SEU PÚBLICO-ALVO? QUEM SÃO ESSAS PESSOAS, SEUS DADOS DEMOGRÁFICOS E GEOGRÁFICOS? | texto longo | ✅ |
| 6 | CITE 3 REFERÊNCIAS DE SITES (CASO POSSUA ALGUMA) | texto curto | ❌ |
| 7 | LOGO DA EMPRESA (EM ALTA RESOLUÇÃO) | upload de arquivo | ✅ |

### Análise rápida
- **Pontos positivos:** **único form com upload de arquivo** (logo). Pergunta 6 (referências) é essencial pra Lovable.
- **Lacuna 1:** sem **objetivo do site** (vitrine institucional? venda direta? captura de lead? agendamento?) — input crítico pra estrutura.
- **Lacuna 2:** sem **domínio** (existe? Bravo compra? cliente compra?).
- **Lacuna 3:** sem **CTAs principais** (botão "fale conosco no WhatsApp"? "comprar agora"? "agendar"?).
- **Lacuna 4:** sem **integrações** (formulário → e-mail/CRM/WhatsApp; pixel; analytics).
- **Lacuna 5:** sem **conteúdo textual** (cliente manda copy ou Bravo escreve? quem aprova?).
- **Lacuna 6:** **redundante** com Briefing Conteúdos (pergunta 5 = pergunta 4 do Conteúdos) e Dados de Acesso (pergunta 3 = parcial pergunta 7 daquele) — cliente preenche a mesma coisa 2-3x.

---

## 4. DADOS DE ACESSO ✅ mapeado

**URL pública:** https://forms.gle/wQd2iTeex2kHjEW98
**ID Google Forms:** `1FAIpQLSePfw-9CTf8vIFLSoaCvXeBtsNCNvNGaBo6pm_RokdhbrXpxQ`
**Quando envia:** todo cliente novo (etapa de integração)
**Descrição oficial:** "Formulário para PRODUÇÃO E DESENVOLVIMENTO"

### Perguntas (8, sendo 7 obrigatórias)

| # | Pergunta | Tipo | Obrig. | Opções |
|---|----------|------|--------|--------|
| 1 | NOME DA EMPRESA | texto curto | ✅ | — |
| 2 | NOME DO RESPONSÁVEL | texto curto | ✅ | — |
| 3 | GMAIL PARA USAR NAS CONTAS (Google Meu Negócio, Ads, Analytics, Tag Manager, Linketree, LinkedIn) | texto curto | ✅ | — |
| 4 | NÚMERO DE WHATSAPP A SER VINCULADO NAS CONTAS | texto curto | ✅ | — |
| 5 | O WHATSAPP CITADO ACIMA É BUSINESS? | múltipla escolha | ✅ | SIM; NÃO |
| 6 | ENVIAR TODOS MATERIAIS DE IDENTIDADE VISUAL... | texto curto | ✅ | — |
| 7 | DADOS E ACESSOS: GMAIL, SITE, INSTAGRAM, FACEBOOK, LINKEDIN, ETC. | texto curto | ✅ | — |
| 8 | SE TIVER ALGUMA OBSERVAÇÃO, FAVOR DESCREVER ABAIXO | texto longo | ❌ | — |

### Análise rápida
- **Lacuna 1:** pergunta 6 ("ENVIAR materiais de identidade visual") é texto curto — não permite anexar arquivo. Cliente responde "vou mandar no WhatsApp" → fragmenta canal.
- **Lacuna 2:** pergunta 7 mistura senhas/logins de várias plataformas em um campo só → caos pra usar e risco de segurança.
- **Lacuna 3:** sem checkbox de "preciso criar essa conta" por plataforma — Bravo descobre depois que tem que criar GMB/Analytics do zero ("cliente que não tem nada gasta tempo danado" — discovery §4.2).
- **Lacuna 4:** sem upload de arquivo (logo, manual, fotos) — tudo via WhatsApp depois.

---

## 5. DADOS PARA CONTRATO ⚠️ inferido (genérico — confirmar com Gustavo)

**URL pública:** https://forms.gle/ERgYnvBQc6TkJbDu9
**ID Google Forms:** `1FAIpQLSfGnnT3Xxtdnh3lMOQxF6WG7EJ0z9vnEklYSdsMkUBtY1ptHg`
**Quando envia:** fechamento do contrato (antes do envio Autentique/assinatura)
**Status:** acesso restrito — estrutura abaixo é o **template padrão** de "dados para contrato de agência" que provavelmente espelha o conteúdo do form. **Validar com Gustavo** antes de usar como referência oficial.

### Campos esperados (template padrão de contrato agência)

| Bloco | Campo | Tipo (esperado) | Obrig. |
|-------|-------|-----------------|--------|
| **Cliente (contratante)** | Razão social / Nome completo | texto curto | ✅ |
| | CPF ou CNPJ | texto curto | ✅ |
| | Estado civil (se PF) | dropdown | parcial |
| | Endereço completo (rua, nº, bairro, cidade, UF, CEP) | texto longo | ✅ |
| | Telefone / WhatsApp | texto curto | ✅ |
| | E-mail oficial | texto curto | ✅ |
| | Nome do responsável legal (se PJ) | texto curto | parcial |
| | CPF do responsável legal | texto curto | parcial |
| **Serviço** | Pacote contratado | múltipla escolha | ✅ |
| | Detalhamento de escopo | texto longo | parcial |
| | Data de início | data | ✅ |
| | Vigência (mensal recorrente / projeto) | múltipla escolha | ✅ |
| **Pagamento** | Valor mensal / total | texto curto | ✅ |
| | Forma de pagamento (PIX / boleto / cartão) | múltipla escolha | ✅ |
| | Data de vencimento | dropdown (1-31) | ✅ |
| | E-mail para nota fiscal | texto curto | parcial |
| **Encerramento** | Aviso prévio (30 dias?) | múltipla escolha | parcial |
| | Multa rescisória | texto curto | parcial |
| **Confidencialidade / LGPD** | Autorização uso de imagem/marca | sim/não | parcial |
| | Aceite de tratamento de dados | sim/não | ✅ |

### Análise rápida (com base no template)
- **Lacuna 1:** **redundante** com Dados de Acesso (Form 4) — nome empresa, e-mail, WhatsApp aparecem em ambos.
- **Lacuna 2:** sem campo da **cláusula SLA de aprovação** (que Gustavo quer adicionar — discovery §7).
- **Lacuna 3:** sem **integração com Autentique** (cliente preenche → Bravo copia/cola pra contrato → manda Autentique → caso de retrabalho × 20 clientes/mês).
- **Lacuna 4:** sem **NPS Day-1 embutido** (Gustavo quer — proposta-pos-discovery).

> [!todo] Pendente
> - [ ] Gustavo enviar print/perguntas reais do form pra confirmar estrutura
> - [ ] Validar se já tem cláusula SLA ou se é a hora de inserir
> - [ ] Avaliar fluxo: form → preencher contrato Word → Autentique → assinatura — quanto tempo Bravo gasta nisso?

---

## Diagnóstico geral dos 5 formulários

### Pontos positivos
- **Existem** — Bravo já tem cultura de formalizar entrada via formulário (não verbal/ad hoc)
- **Cobertura ampla** — 5 formulários endereçam as 4 frentes (tráfego, conteúdo, site, contrato) + acessos
- **Padronização inicial** — usa Google Forms gratuito, exporta pra Sheets

### Pontos a melhorar (oportunidade de skill / Quick Wins Eloscope)

| Problema | Impacto | Solução proposta |
|----------|---------|------------------|
| **Fragmentação em 5 forms** | Cliente preenche um por vez, demora dias, esquece um | **Typeform único multi-step** condicionado por tipo de pacote (cliente fecha pacote X → form se ramifica) |
| **Redundância entre forms** | "Público-alvo" aparece em 3 forms (Conteúdos #4, Site #5, parcial Tráfego #5) — cliente preenche 3x a mesma coisa | Typeform unificado: cada campo só uma vez, ramos condicionais |
| **13 perguntas de texto longo no Conteúdos** | Cliente vê monstro de página, abandona no meio | Quebrar em micro-perguntas com exemplo (placeholder), uso de dropdown/múltipla escolha onde possível |
| **Texto curto pra Sim/Não** | Dado bagunçado, não dá pra automatizar processamento | Padronizar como múltipla escolha em todos os booleanos |
| **Sem upload de arquivo** | Logo/manual/fotos vão por WhatsApp depois → fragmenta | Campo de upload no form (Drive/Cloudinary) |
| **Sem estimativa de tempo** | Cliente vê monstro de 16 perguntas e abandona | "Você vai gastar **X minutos**" no topo (insight do discovery — proposta de Gustavo) |
| **Senhas misturadas em texto livre** | Risco de segurança (nem deveriam estar no form) | Vault separado (1Password compartilhado, Bitwarden) |
| **Sem confirmação automática** | Bravo não sabe quando cliente preencheu | n8n: form submit → notifica grupo Bravo no WhatsApp |
| **Sem follow-up de quem não preencheu** | Cliente atrasa silenciosamente — perde 2-3 semanas no onboarding | n8n: lembrete em 24h se não preencheu |
| **Não conecta com sistema** | Resposta vai pra Sheet, alguém abre, lê, copia pra outro lugar | Webhook → ClickUp / Notion / sistema da Bravo cria tarefas automaticamente |

### Conexão com a tese da proposta

> [!tip] Onde isso entra nas skills propostas
> - **Skill 1 (Aprovação SLA)** — não usa esses forms diretamente, mas usa **a mesma cláusula contratual** que vai disciplinar prazos. Se cliente não preenche briefing em N dias → mesma régua.
> - **Skill 2 (Agendador multi-cliente)** — independe.
> - **Skill 3 (Análise mensal)** — usa **dados do briefing de tráfego** como input do prompt (orçamento, segmentação, ICP).
> - **Bônus de processo** — Typeform unificado + estimativa de tempo + NPS Day-1 (já estava no escopo bônus do `proposta-pos-discovery.md`).

---

## Recálculo do tempo de onboarding (com base nos 5 forms)

> [!info] Por que recalcular
> No discovery (§4.2) Gustavo disse "onboarding completo: ~1 mês real vs. 1 semana ideal". Essa estimativa era percepção. Com os 5 forms mapeados dá pra dimensionar **onde o tempo evapora** — e a maior parte não é Bravo trabalhando, é cliente travando.

### Tempo estimado de preenchimento (cliente)

| Form | Perguntas | Tipo predominante | Tempo solo do cliente | Notas |
|------|-----------|-------------------|----------------------|-------|
| **Tráfego Pago** | 16 (15 obrig.) | 11 texto curto + 3 texto longo + 2 múltipla | **15-25 min** | Cliente sem conta Ads/Analytics gasta +30-60min só achando/criando |
| **Conteúdos** | 15 (todas obrig.) | 13 texto longo + 1 upload | **45-90 min** | Maior abandono — cliente preenche em 2-3 sessões |
| **Site** | 7 (5 obrig.) | 4 texto longo + 1 upload + 2 curto | **20-40 min** | Upload de logo trava se cliente não tem em alta resolução |
| **Dados de Acesso** | 8 (7 obrig.) | 6 texto curto + 1 múltipla + 1 longo | **20-60 min** | Senhas espalhadas — cliente recupera login de 5 plataformas |
| **Contrato** | ~21 campos (inferido) | dados cadastrais + escolhas | **10-20 min** | CNPJ/endereço/banco — geralmente rápido |

**Soma direta (cliente colaborativo, todos os pacotes):** ~110-235 min = **~2-4h líquidas de preenchimento**

> [!warning] Observação do discovery — preenchimento "preguiçoso"
> Bravo relatou que o cliente, principalmente no **Briefing de Conteúdos**, preenche de forma **superficial e deixa campos em branco** ou com respostas curtas/genéricas em perguntas que pediam texto longo. **A Bravo não percebe isso como problema** hoje — aceita a resposta como veio e segue.
>
> **Implicação no tempo real:** o tempo de preenchimento *de fato* gasto pelo cliente é menor que os 45-90min estimados acima — provavelmente **15-30min** no Conteúdos (responde só o essencial, pula o resto).
>
> **Implicação no resultado (latente):** input fraco pra Content Machine / Skill 3 (Análise mensal) → IA recebe contexto pobre → output genérico. **Não é dor sentida ainda**, mas vira limite quando a Bravo escalar volume ou quando a Skill 3 começar a gerar análises automatizadas. Vale registrar no levantamento como **dor latente** — não pra atacar agora, mas pra mostrar pro Gustavo que o briefing curto é dívida silenciosa.
>
> **Por que mantemos o cálculo "ideal" acima:** ele mostra o tempo *projetado* pelo formato atual (13 perguntas longas) — útil pra justificar o redesign (Typeform fragmentado em micro-perguntas com placeholder/exemplo extrai mais sem cansar o cliente).

### Tempo real (com latência humana)

O número acima é o **tempo de digitação**. O onboarding real inclui as filas entre cada form:

| Etapa | Tempo típico observado | Por quê demora |
|-------|------------------------|----------------|
| Cliente recebe os 5 links | dia 0 | — |
| Cliente preenche Contrato | dia 0-2 | rápido, é antes de assinar |
| Assinatura Autentique | dia 1-5 | Bravo manda Word → cliente lê → assina |
| Cliente preenche Dados de Acesso | dia 3-10 | precisa achar senhas, criar contas que não tem |
| Cliente preenche Tráfego Pago | dia 5-15 | espera "ter tempo", esquece |
| Cliente preenche Conteúdos | dia 7-21 | **principal gargalo** — 13 perguntas longas |
| Cliente preenche Site (se contratou) | dia 10-25 | depende de ter logo + referências |
| Bravo cobra os atrasados | dia 15-30 | Gustavo manda WhatsApp manual |
| **Onboarding completo** | **20-30 dias** | confirma o "~1 mês" do discovery |

### Onde o mês evapora — diagnóstico

| Categoria | % do tempo | Observação |
|-----------|-----------|------------|
| **Cliente preenchendo de fato** | ~5% | 2-4h em 30 dias = irrisório |
| **Cliente procrastinando entre forms** | ~70% | sem follow-up automático, vira buraco silencioso |
| **Cliente recuperando senhas/criando contas** | ~15% | Bravo descobre tarde que precisa criar GMB/Analytics do zero |
| **Bravo cobrando manualmente** | ~5% | Gustavo entra de bombeiro |
| **Bravo processando/copiando dados pra outros sistemas** | ~5% | sheet → contrato Word → Autentique → ClickUp |

### Cenário "Typeform unificado + automação" (proposta bônus)

Hipótese conservadora aplicando os fixes da tabela de diagnóstico:

| Etapa | Hoje | Com Typeform unificado + n8n | Ganho |
|-------|------|------------------------------|-------|
| Tempo de preenchimento cliente | 2-4h espalhadas em 5 forms | **45-75 min em 1 sessão** (ramos condicionais, sem redundância) | -50 a -65% |
| Latência total onboarding | 20-30 dias | **5-10 dias** (lembrete 24h + 72h, status visível) | -65% |
| Bravo cobrando manualmente | Gustavo + Rafa entram repetidas vezes | **0** (n8n cobra) | -100% das horas-Bravo |
| Bravo copiando dados | manual entre 5 sheets + Word + Autentique + ClickUp | **webhook único** popula tudo | -80% |

### Conexão com o custo operacional

O onboarding fragmentado **consome ~1h/cliente de Gustavo** em cobrança + retrabalho (estimativa conservadora). Com 40+ clientes/ano de turnover/novos, são **~40h/ano de Gustavo** = ~1 semana inteira do único comercial. Mesmo argumento da tese central: **liberar Gustavo > otimizar execução**.

> [!tip] Por que isso fortalece o reframe
> Onboarding entra como **bônus de processo** (já estava no `proposta-pos-discovery`). Com o cálculo acima, dá pra mostrar pro Gustavo: o gargalo é **latência do cliente**, não trabalho da Bravo. Resolver isso = mais um caminho pra liberar capacidade comercial sem contratar.

---

## Próximos passos

1. **Pedir pro Gustavo** abrir permissão pública dos 3 formulários restantes OU copiar/colar perguntas
2. **Cruzar com a Skill 3 (Análise mensal)** — ver se o que está no briefing de tráfego é suficiente como contexto pra IA gerar relatório
3. **Decidir** com Gustavo: substituir os 5 forms por **1 Typeform unificado** ou manter forms atuais + adicionar camada de automação por cima (webhook → cobrança → notificação)

---

*Criado: 2026-04-27 — mapeamento dos 5 formulários Google Forms da Bravo enviados pelo Gustavo*
