---
tipo: doc
status: ativo
tags: [cliente/bravo, area/vendas, tipo/discovery, tipo/diagnostico, metodo/ishikawa]
cliente: bravo
data: 2026-04-25
metodo: [Ishikawa, 5 Whys, Causa-Raiz]
relacionados: ["[[00-sequencia-aplicacao]]", "[[framework-processo]]", "[[bpmn-basico]]"]
---

# Etapa 3 — Análise de Causa e Efeito por Processo

> [!info] Quando aplicar
> Depois do levantamento (etapas 1-2) e **antes** do bloco de custo. Com o time todo presente — eles que vivem a dor sabem a causa.

> [!tip] Princípio
> Mapear **o que trava** não basta — precisa entender **por que trava**. Sem causa-raiz, automação só anestesia o sintoma e o problema volta em outro lugar.

> [!warning] Limite de tempo
> 30 minutos no total. **Não fazer Ishikawa de todos os 15 processos** — só dos top 5-6 candidatos a skill (score >=3.7 na matriz [[framework-processo#3. Matriz de Processos da Bravo]]).

---

## 1. Método aplicado

Combinação leve de duas ferramentas Lean clássicas:

### 1.1 Ishikawa (espinha de peixe) — para mapear causas

Para cada processo crítico, levantar causas em **6 categorias (6M)**:

```
                    EFEITO
                       │
   Método ────────┐    │   ┌──── Mão de Obra
                   \   │   /
                    \  │  /
                     \ │ /
                      \│/
   Material ──────────●──────────── Máquina (Ferramenta)
                      /│\
                     / │ \
                    /  │  \
                   /   │   \
   Medida ────────┘    │   └──── Meio Ambiente (contexto)
```

| Categoria | O que cabe aqui (adaptado pra agência) |
|-----------|----------------------------------------|
| **Método** | Falta de processo, falta de template, retrabalho por critério não-definido |
| **Mão de obra** | Sobrecarga de pessoa, falta de skill, falta de clareza de papel |
| **Material** | Briefing ruim do cliente, ativos faltando (logo, paleta), input incompleto |
| **Máquina (Ferramenta)** | Limitação de tool (Canva, ChatGPT, ClickUp), token alto, integração quebrada |
| **Medida** | Não sabe quanto tempo leva, não mede engajamento, não mede satisfação |
| **Meio Ambiente** | Cliente demora pra responder, sazonalidade, mudança de escopo no meio do mês |

### 1.2 5 Whys — para chegar na raiz

Depois do Ishikawa, escolher a causa mais citada e perguntar "por quê?" 5 vezes:

```
1. Por que a aprovação demora?
   → Cliente não responde rápido.
2. Por que cliente não responde rápido?
   → Recebe no WhatsApp e perde no meio das mensagens.
3. Por que perde no meio das mensagens?
   → Vai junto com cobrança, dúvida, post pessoal — tudo no mesmo número.
4. Por que tudo vai no mesmo número?
   → Não tem canal estruturado de aprovação.
5. Por que não tem canal estruturado?
   → Nunca foi prioridade — quando viraram 4 pessoas, ninguém montou.

CAUSA-RAIZ: Falta de canal de aprovação dedicado.
SOLUÇÃO: n8n + link único de aprovação por post (não WhatsApp).
```

---

## 2. Processos a analisar (top candidatos)

> Baseado em [[framework-processo#Ranking por Score (pré-estimado)]] — score >=3.7

| # | Processo | Score | Por que analisar causa-efeito |
|---|----------|-------|-------------------------------|
| 1 | Análise do mês anterior | 4.2 | Skill candidata #1 — entender o que trava hoje na análise manual |
| 2 | Planejamento mensal | 4.2 | Skill candidata #2 — depende da análise; entender por que demora |
| 3 | Envio + cobrança de aprovação | 4.0 | Bônus n8n — dor explícita do Gustavo |
| 4 | Geração de copy | 4.0 | Skill candidata #3 — entender por que IA atual não basta |
| 5 | Aprovação de criativos | 3.8 | Backlog fase 2 — entender se é sintoma da mesma raiz da #3 |
| 6 | Geração de imagens | 3.8 | Backlog fase 2 — entender resistência do Rafael |

> [!tip] Atalho
> Se o tempo apertar, fazer só 3 (top scores: análise, planejamento, copy). Cobrança vira bônus separado.

---

## 3. Template de análise (1 por processo)

> Imprimir/abrir 1 cópia desta seção por processo analisado.

### PROCESSO: _________________________________

**Efeito (sintoma):** _________________________________
**Quem mais sofre com isso:** _________________________________
**Frequência do efeito:** [ ] Sempre [ ] Quase sempre [ ] Às vezes
**Custo do efeito:** [tempo perdido / cliente irritado / retrabalho / dinheiro]

---

#### Ishikawa — 6 causas

| Categoria | Causas levantadas pelo time |
|-----------|----------------------------|
| **Método** | |
| **Mão de obra** | |
| **Material** | |
| **Máquina (Ferramenta)** | |
| **Medida** | |
| **Meio Ambiente** | |

> [!quote] Pergunta-padrão (para cada categoria)
> "Quando esse problema acontece, é mais por causa de **[categoria]**? Conta um exemplo da última vez."

---

#### 5 Whys — causa-raiz

```
1. Por que [efeito]? → ___
2. Por que [resposta 1]? → ___
3. Por que [resposta 2]? → ___
4. Por que [resposta 3]? → ___
5. Por que [resposta 4]? → ___

CAUSA-RAIZ: ___________________________________
```

---

#### Hipótese de solução

| Solução | Tipo | Complexidade | Impacto esperado |
|---------|------|--------------|------------------|
| | [ ] Skill IA [ ] n8n [ ] Processo [ ] Treinamento | [ ] Baixa [ ] Média [ ] Alta | |

---

## 4. Pré-mapeamento (hipóteses do Lucas, validar no sábado)

> [!warning] Pré-preenchido com base na reunião 20/04 — confirmar com o time

### Processo 1: Análise do mês anterior

**Efeito:** Gustavo gasta ~15h/mês fazendo análise repetitiva, atrasa o planejamento.

| Categoria | Hipótese de causa |
|-----------|-------------------|
| Método | Sem template padrão — cada cliente é analisado de um jeito |
| Mão de obra | Só Gustavo faz — gargalo numa pessoa só |
| Material | Métricas espalhadas (Insights, Meta Ads, Google) — coleta manual |
| Máquina | ChatGPT/Claude usado sem prompt estruturado — gera texto solto |
| Medida | Não tem definição clara do que é "mês bom" vs "mês ruim" |
| Meio Ambiente | Cliente não manda input do que aconteceu no negócio dele |

**Causa-raiz hipotética:** Coleta manual de dados + prompt não-estruturado = trabalho artesanal por cliente.
**Solução proposta:** Skill 1 — Análise mensal estruturada (template + scraping + prompt fixo).

---

### Processo 2: Planejamento mensal

**Efeito:** Atrasa porque depende da análise (gargalo herdado).

| Categoria | Hipótese de causa |
|-----------|-------------------|
| Método | Sem calendário editorial padrão por nicho |
| Mão de obra | Gustavo faz — começa só depois da análise |
| Material | Análise chega solta, sem virar input direto pro plano |
| Máquina | IA usada manualmente, sem fluxo análise→plano |
| Medida | Não mede acerto do plano (engajamento por tipo de post) |
| Meio Ambiente | Cliente muda direção no meio do mês |

**Causa-raiz hipotética:** Análise e plano são processos desacoplados — cada um manual.
**Solução proposta:** Skill 2 — Planejamento que consome direto a saída da Skill 1.

---

### Processo 3: Envio + cobrança de aprovação

**Efeito:** Cobrar 6-12h, máximo 24-48h pra aprovar. Atrasa postagem.

| Categoria | Hipótese de causa |
|-----------|-------------------|
| Método | Sem SLA combinado com cliente (X horas pra aprovar) |
| Mão de obra | Gustavo/Javi cobrando manual a cada 6h |
| Material | Post chega no WhatsApp misturado com outras mensagens |
| Máquina | WhatsApp não tem fluxo "aprovar/ajustar" — texto solto |
| Medida | Não rastreia quanto cada cliente demora na média |
| Meio Ambiente | Cliente final ocupado, esquece, mistura com vida pessoal |

**Causa-raiz hipotética:** Falta de canal de aprovação dedicado + falta de SLA contratual.
**Solução proposta:** n8n + link único de aprovação por post + lembrete automático.

---

### Processo 4: Geração de copy

**Efeito:** Javi gasta tempo, tom inconsistente entre clientes, retrabalho.

| Categoria | Hipótese de causa |
|-----------|-------------------|
| Método | Cada copy começa do zero — sem biblioteca por cliente |
| Mão de obra | Javi faz tudo — multifunção sobrecarregado |
| Material | Briefing inicial fica perdido, não vira documento vivo |
| Máquina | ChatGPT/Claude sem persona configurada por cliente |
| Medida | Não mede performance de copy por estilo |
| Meio Ambiente | Cliente quer mudança de tom mas não documenta |

**Causa-raiz hipotética:** Não existe "perfil do cliente" estruturado — toda copy puxa do zero.
**Solução proposta:** Skill 3 — Copy com perfil persistente do cliente (tom, palavras-tabu, exemplos aprovados).

---

## 5. Como conduzir os 30 minutos

```
0-5min   → Explicar Ishikawa rapidinho ("vamos olhar 6 categorias de problema")
5-25min  → Aplicar nos top 3-4 processos (5min cada)
25-30min → Fechar com causa-raiz comum se houver — destacar padrão
```

> [!quote] Frase de transição
> "Agora a gente já sabe **o que** trava. Vamos olhar 5 minutos cada processo grande pra entender **por que** trava. Não precisa resolver agora — só descobrir."

---

## 6. Padrão a procurar

> [!tip] Insight valioso pra proposta
> Se 3+ processos diferentes apontam pra **mesma causa-raiz** (ex: "falta de perfil estruturado do cliente"), essa virou a tese central da proposta — uma skill resolve múltiplas dores.

Padrões prováveis na Bravo (a confirmar):
1. **Falta de perfil estruturado por cliente** → afeta análise, planejamento, copy, design
2. **Tudo passa pelo Gustavo** → afeta análise, planejamento, gestão de tráfego, comercial
3. **WhatsApp como canal único** → afeta aprovação, comunicação, briefing

---

## 7. Output desta etapa

> [!success] Saídas obrigatórias
> - 3-4 fichas de causa-efeito preenchidas (uma por processo)
> - 1-2 causas-raiz identificadas que se repetem
> - Lista atualizada de hipóteses de solução (skill / n8n / processo / treinamento)
> - Validação: as 3 skills propostas em [[framework-processo#6. Decisão: Quais 3 Skills?]] atacam causa-raiz, não sintoma?

> [!info] Próxima etapa
> Após este bloco, time se despede e Lucas fica 1:1 com Gustavo para [[analise-custo-processo|análise de custo]].

---

## 8. Anti-padrões

> [!danger] Cuidados
> - **Não usar como tribunal** — pergunta-padrão é "o que torna isso difícil?", não "de quem é a culpa?".
> - **Não fechar diagnóstico ali** — escutar mais que falar. Validação fina vem na proposta.
> - **Não jogar 6M se time não engajar** — se travarem em "Método/Mão-de-obra", aceitar e seguir. 5 Whys cobre.
> - **Não validar pra agradar** — se um processo tem causa-raiz que **não é resolvida com IA**, escrever isso na proposta. Honestidade > venda.

---

*Criado: 2026-04-25*
*Atualizado: 2026-04-25 (seção 9 — validação real pós-discovery)*
*Referências: Ishikawa (1968), Toyota Production System (5 Whys), Lean Manufacturing*
*Princípio: sintoma é fácil; raiz é onde a automação rende.* ^principio-causa-raiz

---

## 9. Validação pós-discovery (25/04/2026) — Ishikawa preenchido com dados reais

> [!success] Fonte
> Transcrições Seaac Rio Preto.m4a + Seaac Rio Preto 2.m4a · Lucas + Gustavo + Rafael (design). Ver dados completos em [[levantamento-discovery]].

> [!danger] Mudança de tese
> Pré-discovery: skills de **Análise / Planejamento / Copy** eram a aposta.
> **Realidade:** copy + criativo estático **já estão automatizados** via Content Machine (Figma) + Docs ChatGPT.
> Os 3 processos top do score caíram em prioridade. **Subiu:** vídeo, agendamento de posts, aprovação com SLA.

### 9.1 Causa-raiz comum descoberta

**3 dores apontam pra mesma raiz:** ausência de **SLA contratual + medição diária**.

```
1. Por que aprovação demora 2-3 dias?
   → Cliente recebe no WhatsApp, mistura com vida pessoal, esquece.
2. Por que mistura?
   → Não tem canal dedicado nem prazo combinado.
3. Por que não tem prazo combinado?
   → Contrato não obriga, não pesa pro cliente atrasar.
4. Por que contrato não obriga?
   → Bravo nunca formalizou — "a gente é ser humano, esquece".
5. Por que nunca formalizou?
   → Cresceu sem processo (de 7 pra 4 pessoas), virou pessoal.

CAUSA-RAIZ: Operação inteira sem SLA contratual nem ritual de medição.
SOLUÇÃO: SLA no contrato + n8n cobrando aprovação + Daily + agenda compartilhada.
```

### 9.2 Processo: Aprovação do cliente (validado real)

**Efeito:** 2-3 dias de espera. Diego (cliente "xarope") foi o mais rápido — 24h. Gustavo precisa "carteirar" todo mundo manualmente.

| Categoria | Causa real |
|-----------|-----------|
| Método | Sem SLA contratual; sem canal dedicado |
| Mão de obra | Gustavo cobra manual ("segunda já vou ter que carteirar todo mundo") |
| Material | Planejamento chega no WhatsApp misturado com cobrança/conversa pessoal |
| Máquina | WhatsApp não tem fluxo "aprovar/ajustar"; Asaas é a referência mental ("igual o Asaas enche o saco") |
| Medida | Não rastreia tempo médio de aprovação por cliente |
| Meio Ambiente | Cliente final ocupado, sem prazo, sem incentivo a responder |

**Causa-raiz:** Falta de cláusula contratual + falta de canal estruturado.
**Solução validada com Gustavo:** Cláusula no novo contrato ("se não responder, paga independente") + n8n + lembrete WhatsApp em 24h/48h.

### 9.3 Processo: Edição de vídeo (Gabi)

**Efeito:** 1-2 vídeos/dia entregues quando o ideal é 3. Erros graves (texto removido, áudio "Tiradentes" mantido). Gustavo já contratou 3 freelas, nenhum entregou bom.

| Categoria | Causa real |
|-----------|-----------|
| Método | Sem checklist de QA antes de entregar; sem revisão padronizada |
| **Mão de obra** | **Editor não rende** — sintomas múltiplos: headset "quebrado" 1 ano (não estava), Adobe craqueado mesmo com licença paga, "não acha o vídeo" sem procurar |
| Material | Briefs chegam OK; problema não é input |
| Máquina | Premiere/CapCut/Adobe disponíveis — ferramenta não é o gargalo |
| Medida | **Sem métrica diária de output** — Gustavo só descobre erro em retrospecto |
| Meio Ambiente | Trabalho remoto sem acompanhamento ("ele está longe, não tenho controle") |

**Causa-raiz:** **Problema humano**, não tecnológico. Falta de medição + falta de QA + descompromisso.
**Solução fora do escopo Eloscope:** Gustavo decide trocar/treinar/reposicionar.
**Solução dentro do escopo (parcial):** POC Premiere + Claude Code (acelera quem é bom; não substitui quem não rende).

### 9.4 Processo: Agendamento de postagem

**Efeito:** 20-30min × 20 clientes = horas/mês no Meta Business manual. Tudo postado "na unha" todo início de mês.

| Categoria | Causa real |
|-----------|-----------|
| Método | Posta um por um no Meta Business; sem skill batch |
| Mão de obra | Javi/Gustavo (a confirmar quem) |
| Material | Criativo + copy + horário pronto — input está OK |
| Máquina | Avaliou M-Labs (R$2k inviável), Reportei (caro), Canva (conta por cliente) — **não tem ferramenta no orçamento** |
| Medida | Não sabe quanto perde por atraso de postagem |
| Meio Ambiente | — |

**Causa-raiz:** Mercado de SaaS de agendamento multi-cliente é caro pra agência pequena.
**Solução proposta:** Skill Eloscope + n8n + Meta Business API (uma das skills do escopo).

### 9.5 Processo: Captação de vídeo (3 semanas)

**Efeito:** Total agendamento → edição leva 3 semanas. Cliente que tem processo definido faz em 1 semana; outros estouram pro mês inteiro.

| Categoria | Causa real |
|-----------|-----------|
| Método | Sem agenda compartilhada (Gustavo imprimiu papel mês passado); sem template de roteiro pronto |
| Mão de obra | Captação depende de Gustavo + Rafael indo presencial |
| Material | Cliente sem briefing claro = grava genérico |
| Máquina | — |
| **Medida** | **Sem painel** — não sabe onde está parando hoje |
| **Meio Ambiente** | **Agenda do cliente é o gargalo real** — depende dele liberar dia |

**Causa-raiz:** Agenda + briefing fora de canal estruturado.
**Solução validada:** Agenda compartilhada com slot de captação + briefing-prompt no Typeform (já é ideia do Gustavo).

### 9.6 Processo: Geração de copy + criativo estático (REVISADO — não é mais top)

**Efeito real:** **Não é mais gargalo.** Content Machine (plugin Figma da Bridge Codec) + Docs ChatGPT estruturado já entrega 8-12 criativos em 3-4h (era 8h+ no Photoshop). Cliente "chato" Diego aprovou de primeira.

| Categoria | Causa real |
|-----------|-----------|
| Método | Estrutura no Docs → IA → .md → Figma → Content Machine → arte | ✅ funciona |
| Mão de obra | Rafael conduz | ✅ |
| Material | Briefing já entrou no fluxo | ✅ |
| Máquina | Content Machine + ChatGPT + Figma | ✅ |
| Medida | Falta NPS pós-entrega | ⚠️ ideia do Gustavo |
| Meio Ambiente | Aprovação do cliente é o que ainda atrasa | → cai em 9.2 |

**Conclusão:** **Tirar do escopo prioritário.** Manter apenas como "Skill 4 backlog" se sobrar fôlego — replicar/empacotar o fluxo deles dentro do Eloscope-OS.

### 9.7 Padrão a seguir na proposta

| Tese pré-discovery | Tese pós-discovery |
|--------------------|---------------------|
| Skill 1: Análise mensal | **Mantém** — Gustavo confirma que a parte de "ler métricas" ainda é dele |
| Skill 2: Planejamento mensal | **Reduz escopo** — Content Machine + Docs já cobre boa parte; foco vira gerar a "estrutura mensal" que entra no Docs |
| Skill 3: Copy generation | **Sai** — já automatizado |
| n8n: Cobrança aprovação | **Sobe pra Skill principal** — dor explícita + tese do contrato novo |
| **NOVO** Skill: Agendador multi-cliente | Substitui Skill 3 — substitui Meta Business manual |
| **NOVO** POC: Premiere + Claude Code | Bônus se sobrar fôlego — não substitui editor humano |
| **NOVO** NPS dia 1 + Typeform briefing | Quick win contratual + medição |

> [!success] Output validado
> 3 skills finais (a confirmar com Gustavo): **(1) Aprovação automatizada com SLA**, **(2) Agendador de postagem**, **(3) Análise mensal estruturada**. Bônus: NPS + briefing Typeform + POC Premiere.
