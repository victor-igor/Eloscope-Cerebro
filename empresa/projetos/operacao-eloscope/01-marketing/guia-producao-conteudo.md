---
tipo: guia-producao
projeto: operacao-eloscope
area: marketing/social-media
status: v2.0 — ativo
data: 2026-05-06
autor: @cmo-architect
referencias: [cerebro/areas/marketing/projetos/instagram/carrosseis/]
---

# Guia de Produção e Direção de Arte — Eloscope
> Documento técnico. Define o padrão visual, estrutura de copy e briefing de design exato para todas as peças da Eloscope. Baseado no padrão validado (v2) + análise de referências externas (Algarys).

---

## 1. Design System Base

Todo conteúdo da Eloscope segue este sistema. Fonte de verdade: `brandbook/04-visual/`. Não existe exceção sem aprovação.

### Paleta de Cores

#### Stack Dark (4 níveis — do mais escuro ao mais claro)

| Nome | Hex | Uso em slides |
|------|-----|---------------|
| **Void** | `#000000` | Overlay de blackout. Gradiente máximo em overlays de foto |
| **Deep Dark** | `#0B1420` | Canvas base de toda peça dark. Fundo do slide |
| **Ticker BG** | `#0F1A28` | Zonas hero de alto contraste dentro do slide |
| **Card BG** | `#111D2E` | Cards, caixas glassmorphism, chat bubbles, módulos |
| **Border Dark** | `#1A2E45` | Nested cards, separadores, cards de destaque secundário |

#### Stack Light (4 níveis — do mais claro ao mais escuro)

| Nome | Hex | Uso em slides |
|------|-----|---------------|
| **Surface Light** | `#FFFFFF` | Cards elevados e painéis dentro de slides claros |
| **Clean White** | `#F7F8FA` | Canvas base dos slides claros |
| **Surface Muted** | `#EEF1F5` | Blocos de seção e grades em slides claros |
| **Border Light** | `#DDE2E8` | Linhas divisórias e separadores em slides claros |

#### Acentos

| Nome | Hex | Uso |
|------|-----|-----|
| **Vital Cyan** | `#00FFF0` | Destaque de palavras-chave, linhas divisórias, ícones, gráficos neon, spotlight |
| **Trust Blue** | `#004FFF` | CTA primário (botão sólido do último slide) |
| **Result Orange** | `#FF8B00` | Números de ROI, métricas de resultado, urgência positiva |

#### Texto (opacidades)

| Nível | Valor | Uso |
|-------|-------|-----|
| **Primário** | `#F7F8FA` | Headlines e corpo principal |
| **Secundário** | `rgba(247,248,250,0.7)` | Sub-headlines, texto de apoio |
| **Terciário** | `rgba(247,248,250,0.55)` | Metadados, anotações laterais |
| **Muted** | `rgba(122,134,148,0.4)` | Labels apagados, texto inativo |
| **Slate** | `#7A8694` | Captions, datas, sub-textos em slides claros |

#### Glows e Overlays

| Token | Valor | Uso |
|-------|-------|-----|
| **glow-cyan-soft** | `rgba(0,255,240,0.1)` | Hover e fundo sutil de cards ciano |
| **glow-cyan** | `rgba(0,255,240,0.25)` | Sombra de CTAs, card destaque leve |
| **glow-blue-dim** | `rgba(0,79,255,0.15)` | Background sutil azul |
| **glow-blue-strong** | `rgba(0,79,255,0.4)` | Spotlight azul, foco ativo |

### Tipografia

| Papel | Fonte | Peso | Uso |
|-------|-------|------|-----|
| **Títulos / Headlines** | `Syne` | ExtraBold (800) / Bold (700) | Display, Hero, H1. Sentence case preferencial — uppercase aceitável em headlines curtas |
| **Corpo / UI** | `Inter` | Regular (400) a Bold (700) | Parágrafos, body text, H2-H3, bold inline para destaque |
| **Labels / Tags / Badges** | `JetBrains Mono` | SemiBold (600) | Pills de categoria, metadados, HUD labels. Sempre UPPERCASE + letter-spacing |
| **Botões CTA** | `Inter Bold` | Bold (700) | Texto de botões. UPPERCASE |

> ⚠️ Syne ExtraBold é para display e hero — não usar em corpo de texto. Abaixo de 24px perde legibilidade. Usar Inter a partir de H2.

### Regras Gerais

| Elemento | Padrão |
|----------|--------|
| **Formato** | `1080x1350px` (Portrait) — obrigatório |
| **Fundo Claro (slides)** | `#F7F8FA` com watermark geométrico sutil (~5% opacidade) |
| **Margens laterais** | ~5% da largura em cada lado. Nunca colar na borda |
| **CTA Pill de navegação** | Oval com contorno `Clean White`, sem preenchimento. Texto `Inter Bold`: `arraste para o lado →`. Canto inferior direito |
| **CTA Botão sólido (último slide)** | Retangular arredondado, fundo `Trust Blue #004FFF`, texto `Inter Bold` uppercase, `Clean White` |
| **Header fixo** | Logo Eloscope top-left + identidade secundária top-right (handle, logo parceiro ou cliente) |
| **Destaque de dados/ROI** | `Result Orange #FF8B00` — usar em números de resultado, métricas |
| **Cor de terceiros** | Usar sempre a cor original da marca sendo citada |

---

## 2. Anatomia da Capa (Slide 1)

A capa tem 3 zonas fixas. A proporção entre elas varia por tipo, mas a ordem nunca muda.

### Zona 1 — Header (topo, ~10% da altura)
- **Esquerda:** Logo Eloscope (pequeno, branco)
- **Direita:** @handle OU logo de parceiro/cliente (se for case)
- Flutua sobre a imagem, sem fundo

### Zona 2 — Hero Visual (meio, ~55% da altura)
O coração da capa. Escolher exatamente um dos 5 tipos abaixo:

| Tipo | Quando usar | Descrição |
|------|-------------|-----------|
| **Fotomontagem Editorial** | Radar/News | CEO ou figura pública real + logos flutuando ao redor. Recorte com iluminação dramática. Fundo dark ou gradiente |
| **Objeto 3D com Glow** | Cases com marca conhecida | Produto/logo com aurora ou glow colorido. Fundo quase preto. O brilho cria profundidade |
| **Infográfico/Framework** | Educativo/metodologia | Pirâmide, flywheel, tier list ou diagrama. Corner frames neon nos cards. Bg `#0B1420` |
| **Foto Real Tratada** | Bastidores/institucional | Foto de evento, palco ou podcast. Grade de cor dramática para casar com dark mode |
| **IA Dramática / Humor** | Gancho de impacto | Imagem gerada por IA com cena irônica, tensa ou absurda. Ex: burro no computador, Exterminador |

**Overlay:** quando o hero é uma foto full bleed, aplicar gradiente da metade inferior para cima — de `#0B1420` sólido até transparente. Torna o texto legível sem caixa.

### Zona 3 — Texto (baixo, ~35% da altura)
Layout fixo, sempre nesta ordem:

```
[pill categoria]  [pill subcategoria]       ← linha 1
TÍTULO GRANDE COM                           ← linha 2–3 (bold, máx 3 linhas)
PALAVRA EM COR DE DESTAQUE
Sub-headline menor, 1 linha (opcional)      ← regular, menor
[arraste para o lado →]                     ← pill outline, canto inferior direito
```

**Regras do título:**
- Máximo 3 linhas
- 5–7 palavras por linha
- 1 a 3 palavras recebem a cor `#00FFF0`
- Nunca a frase inteira colorida

**Pills de categoria:**
- Dois pills lado a lado: `[Tipo]` + `[Subtipo]`
- Ex: `[Radar Eloscope]` + `[Internacional]`
- Fundo escuro com borda, texto `JetBrains Mono` pequeno

---

## 3. Catálogo de Padrões de Slides Internos

Cada slide interno tem um padrão. O roteiro deve indicar qual padrão usar em cada posição.

---

### PADRÃO A — Evidência + Dado
**Quando usar:** Slide 2. Provar que a capa é real.

**Fundo:** Dark `#0B1420`

**Layout (de cima para baixo):**
1. Header: logo + identidade secundária
2. **Card de notícia/artigo** — card branco com screenshot real de matéria. Ocupa ~40% da altura. Mostra fonte, título, data
3. **Stat grande** — texto bold branco, o número ou fato central
4. Body text regular explicando o dado (1–2 linhas)
5. **Card destaque** — fundo ciano/teal com opacidade, texto bold, 1–2 frases com a insight-chave
6. CTA pill: `arraste para o lado →` bottom right

---

### PADRÃO B — Bipartido Dark/Claro
**Quando usar:** Slides de diagnóstico, desenvolvimento, ou introdução de conceito.

**Layout:**
- **Metade superior (~50%) — Dark:** Visual hero (produto 3D, mockup de UI, foto de evento, screenshot de interface). Pode ter elementos flutuando (badges, cards de UI, avatares)
- **Metade inferior (~50%) — Claro (branco):**
  1. Headline bold grande (a tese ou o diagnóstico)
  2. Body text parágrafo 1 (regular, ~2 linhas)
  3. Linha divisória fina
  4. Body text parágrafo 2 (com bold inline na insight principal)
  5. **Card destaque sólido** (cor de marca, opaco): 1 frase conclusiva
  6. CTA pill bottom right

**Watermark:** círculo ou hexágono geométrico grande em ~5% opacidade no fundo claro.

---

### PADRÃO C — Bipartido Invertido
**Quando usar:** Slides de posicionamento da marca com humanidade/bastidores.

**Layout:**
- **Metade superior (~55%) — Claro:**
  1. Header logo + handle
  2. Headline grande e direta (a tese da empresa)
  3. Body text em 2 parágrafos (sem card destaque aqui)
- **Metade inferior (~45%) — Foto real:**
  - Foto de evento, entrevista ou apresentação. Color graded para casar com a paleta

---

### PADRÃO D — Checklist / Método
**Quando usar:** Slide de apresentação de processo, etapas ou diferenciais.

**Fundo:** Claro (branco) com watermark geométrico sutil

**Layout:**
1. Header: logo + identidade secundária
2. Headline: *"É exatamente assim que a [Eloscope] trabalha."* ou equivalente
3. Intro de 1 linha: *"Antes de qualquer X, identificamos onde existe Y:"*
4. **Checklist** com 3–5 itens:
   - Ícone ✓ redondo na cor de destaque (`#00FFF0`) + texto do item
   - Linha divisória fina entre cada item
5. Frase conclusiva abaixo (1 linha, tom de síntese)
6. CTA pill bottom right

---

### PADRÃO E — Comparativo Lado-a-Lado
**Quando usar:** Comparação de ferramentas, modelos, abordagens ou concorrentes.

**Fundo:** Claro com watermark

**Layout:**
1. Header
2. Headline: *"A diferença não está só em [X]"* ou *"[A] vs [B]"*
3. **Tabela de comparação:**
   - Item A: logo com cor original + nome + dados à direita
   - Linha divisória fina `#00FFF0`
   - Item B: dados à esquerda + logo com cor original + nome
   - Segunda linha divisória
4. Body síntese (1–2 linhas com bold inline): *"Um prioriza X. O outro prioriza Y."*
5. CTA pill

**Regra:** usar sempre as cores originais das marcas comparadas, não a paleta da Eloscope.

---

### PADRÃO F — Dado + Gráfico Neon
**Quando usar:** Quando o argumento central é um número que precisa de contexto visual.

**Fundo:** Dark com glow sutil no canto superior (cor de destaque)

**Layout:**
1. Header
2. Headline com número impacto: *"Em operações com alto volume, um gasto de **$10.000/mês** pode cair para **$1.200**"*
3. **Gráfico de linha neon simples:**
   - Linha `#00FFF0`, fina, com 2–3 pontos circulares
   - Labels em pills (fundo ciano, texto dark) sobre cada ponto
   - Fundo do gráfico: gradiente dark
4. Abaixo do gráfico: *"Isso influencia diretamente:"*
5. Lista 2 itens com ícone + texto + linha divisória `#00FFF0` entre eles
6. CTA pill

---

### PADRÃO G — Dark Texto-Denso + Mockup
**Quando usar:** Slides analíticos onde o raciocínio é mais denso. Sem visual hero.

**Fundo:** Dark `#0B1420`

**Layout:**
1. Header
2. **Headline** — maior, bold, 2–3 linhas (ocupa o topo)
3. **Parágrafo 1** — body text regular com bold inline no insight principal (~3–4 linhas)
4. **Parágrafo 2** — body text com bold inline na conclusão (~2–3 linhas)
5. **Mockup de produto/interface no rodapé** — não é hero, é âncora visual. Laptop, celular ou screenshot da ferramenta em questão
6. CTA pill (quando não é último slide)

---

### PADRÃO H — Bipartido + Cards 2 Colunas
**Quando usar:** Dicotomias e escolhas com duas opções equilibradas.

**Layout:**
- **Metade superior — Dark:** Foto real de evento, cena ou produto. Pode ter logos flutuando
- **Metade inferior — Claro:**
  1. Headline com destaque em cor: *"A escolha depende de **X**."*
  2. **2 Cards side-by-side** — fundo escuro (contraste invertido dentro do claro), bordas arredondadas:
     - Card esquerdo: opção A + seta/traço + consequência
     - Card direito: opção B + seta/traço + consequência
  3. Frase conclusiva: *"Operações maduras combinam os dois."*
6. CTA pill

---

### PADRÃO I — Série Numerada + Chat UI
**Quando usar:** Listas de causas, problemas ou pontos. Cada slide é 1 item da série.

**Fundo:** Dark `#0B1420`

**Layout:**
1. Header (com logo de parceiro se for case)
2. **Headline numerado integrado:** *"**1.** O time para de pensar no processo"* — número bold, destaque visual
3. Anotação lateral discreta (opcional): *"Exemplo real:"* em cinza, à direita do título
4. Body text: contexto em 1–2 linhas
5. **Chat bubbles como exemplos:**
   - Dark pill arredondado com texto entre aspas: `"gera um script de vendas" no ChatGPT`
   - Alternado com body text de transição
6. **Barra de input no rodapé** — largura total, estilo ChatGPT: ícone `+`, texto do prompt (cônico ou irônico), ícone microfone, ícone voz
7. CTA pill

---

### PADRÃO J — Texto + Meme no Rodapé
**Quando usar:** Slides de gancho emocional/ironia onde o humor reforça o argumento.

**Fundo:** Claro

**Layout:**
1. Header
2. Headline: afirmação séria e analítica (3 linhas, fundo claro, tom editorial)
3. Body text com bold inline no ponto central (2 parágrafos)
4. **Elemento meme no rodapé:** PNG recortado (pessoa, personagem) + texto meme bold preto simples sobrepostos. Cena deve ilustrar o problema de forma irônica
5. CTA: seta `→` small, canto inferior direito (mais discreta aqui)

---

### PADRÃO K — CTA Spotlight (último slide)
**Quando usar:** Sempre no último slide. Converter.

**Fundo:** Dark `#0B1420`

**Layout centralizado:**
1. **Spotlight radial do topo** — cone de luz `#00FFF0` descendo até o centro
2. **Watermark gráfico enorme** — letra inicial, logo aumentado ou forma geométrica 3D em ciano escuro. Ocupa 60–70% do slide, não compete com texto
3. **Logo Eloscope** — pequeno, centralizado verticalmente
4. **Headline filosófico/conclusivo** — 2–3 linhas, centralizado, bold. Ex: *"A Shopify mostrou o caminho. / Mas o resultado não vem da IA. / Vem de como ela é implementada."*
5. Sub-headline — 1 linha, tom de convite suave (regular, cinza)
6. **Botão CTA sólido** — retangular arredondado, cor `#00FFF0`, texto: `Comente X` ou `Clique no link na bio ↗`
7. **Sem "arraste para o lado"** — é o último slide

---

## 4. As 4 Arquiteturas Narrativas

O copy dos carrosséis da Eloscope é "poesia visual" — frases curtas, muito espaço negativo, lido rapidamente.

### Cabeçalho de Roteiro (obrigatório)
Todo roteiro deve iniciar com:
```markdown
# Carrossel [XX] — [Tema]
**Status:** Rascunho / Aprovado
**Objetivo:** [Ex: Elevação de consciência + qualificação]
**Arquitetura:** [Ex: Estrutura 2 — Case de ROI]
**Funil:** [Ex: Topo — problem aware]
**Ângulo:** [A tese central em 1 frase]
**Padrão de cada slide:** [Ex: Capa / A / B / D / K]
```

---

### ARQUITETURA 1 — Educativo / Desconstrução de Dores
**Objetivo:** Topo de funil. *"Eles entendem meu problema melhor que eu."*

| Slide | Padrão | Direção |
|-------|--------|---------|
| 1 — Capa | Tipo: IA Dramática ou Fotomontagem | Gancho com ironia ou estresse. Texto no terço inferior |
| 2 | A — Evidência + Dado | Provar a dor com fonte ou dado real |
| 3 | B — Bipartido | Por que o mercado erra. Mockup contextual no topo |
| 4 | G — Texto-Denso + Mockup | Aprofundar o diagnóstico |
| 5 | C — Bipartido Invertido | A virada: visão/solução Eloscope |
| 6 | K — CTA Spotlight | Luz radial Cyan, botão sólido, comente X |

---

### ARQUITETURA 2 — Case / Prova Social (ROI)
**Objetivo:** Meio/Fundo de funil. *"A IA gera dinheiro, não só tecnologia."*

| Slide | Padrão | Direção |
|-------|--------|---------|
| 1 — Capa | Tipo: Objeto 3D (logo/produto do cliente) | Número de resultado na capa. Ex: *"+40% em receita"* |
| 2 | A — Evidência + Dado | Matéria ou dado de mercado como âncora |
| 3 | B — Bipartido | O caos antes da IA no topo, diagnóstico oculto no texto |
| 4 | F — Dado + Gráfico Neon | Mostrar flywheel ou gráfico de impacto |
| 5 | D — Checklist | O método Eloscope aplicado neste case |
| 6 | K — CTA Spotlight | *"Quer esse diagnóstico? Comente DIAGNÓSTICO"* |

---

### ARQUITETURA 3 — Institucional / Metodologia (O 'Eloscope Way')
**Objetivo:** Posicionamento. Diferenciação dos "vendedores de chatbot".

| Slide | Padrão | Direção |
|-------|--------|---------|
| 1 — Capa | Tipo: Infográfico ou Foto Real | Declaração forte. Ex: *"Por que a Eloscope não vende chatbot."* |
| 2 | G — Texto-Denso | O inimigo comum: o mercado vende caixas pretas |
| 3 | D — Checklist | O método: 1. Mapear / 2. Validar / 3. Plugar |
| 4 | H — Bipartido + 2 Cards | Pra quem É vs. pra quem NÃO É |
| 5 | C — Bipartido Invertido | Foto da equipe + declaração de posicionamento |
| 6 | K — CTA Spotlight | *"Sua empresa está pronta? Comente DIAGNÓSTICO"* |

---

### ARQUITETURA 4 — Radar Eloscope (Newsjacking)
**Objetivo:** Posicionar a Eloscope como "a Forbes do dono de PME".

| Slide | Padrão | Direção |
|-------|--------|---------|
| 1 — Capa | Tipo: Fotomontagem Editorial | CEO/figura pública + logo da empresa em questão. Tag `[Radar Eloscope]` |
| 2 | A — Evidência + Dado | Screenshot da notícia original + stat principal |
| 3 | E — Comparativo | Histeria do mercado vs. realidade (se houver dois lados) OU Padrão G |
| 4 | I — Numerado + Chat | Traduzir o impacto para a realidade da PME, com exemplos concretos |
| 5 | B — Bipartido | A ação: o que o empresário deve fazer hoje |
| 6 | K — CTA Spotlight | *"Baixe o relatório de impacto. Comente REPORT"* |

---

## 5. Regras Universais de Composição

Valem para todos os slides, sem exceção.

**Header:** sempre logo top-left + identidade secundária top-right. Nunca ausente.

**CTA pill:** sempre canto inferior direito. Ausente apenas no último slide (que usa botão sólido).

**Bold inline:** principal mecanismo de destaque no corpo. Quem escaneia lê só os bolds e entende o ponto. Não usar cor no corpo — apenas bold.

**Linhas divisórias:** sempre em `#00FFF0` quando for separar itens de lista. Finas (1–2px).

**Watermark geométrico:** obrigatório em slides de fundo claro. Círculo ou hexágono, ~5% opacidade, centralizado ou levemente deslocado.

**Número de palavras por linha de título:** 5–7. Nunca 1 palavra sozinha numa linha se puder evitar.

**Espaçamento:** priorizar respiro. Menos elementos por tela, mais impacto por elemento.

**Cores de terceiros:** quando mencionar outra marca, usar a cor original dela (não substituir por Cyan).

---

## 6. Dinâmica de Destaque de Palavras (Color Code)

No roteiro, indicar exatamente quais palavras recebem `#00FFF0` em cada slide. Isso garante que quem escaneia entende o post sem ler tudo.

**Exemplo de instrução no roteiro:**
```
- Slide 1: pintar "automatizar" e "resultado"
- Slide 3: pintar "gargalo operacional"
- Slide 6: pintar "Diagnóstico gratuito"
```

Máximo de 1–3 palavras por slide. Nunca a frase inteira.

---

## 7. Estrutura de Reels (Dinâmica Rápida)

Quando produzirmos Reels em vídeo, seguir a arquitetura de **1 minuto agressivo**:

1. **Gancho (0s–3s):** Frase de impacto. Cortar silêncio inicial na edição
2. **Desenvolvimento (3s–40s):** Câmera direta, cortes a cada 3–5 segundos. Legendas centrais em `Syne ExtraBold`, palavras-chave em `#00FFF0`
3. **CTA (40s–60s):** Apontar próximo passo. *"O link pro diagnóstico gratuito tá na minha bio."*

---

---

## 8. Fluxo de Produção de Imagens

### Ferramentas
- **Geração:** ChatGPT Image (DALL-E) ou Nanobana
- **Composição e layout:** Paper
- **Formato de export:** PNG 1080x1350px

---

### Prompts por Tipo de Visual

#### Objeto 3D com Glow
Usado em: capas de case com marca conhecida (Shopify, Meta, etc.)

```
[nome do objeto ou logo] em 3D estilizado, fundo preto profundo (#0B1420),
luz neon ciano irradiando por trás do objeto, iluminação cinematográfica
dramática, reflexo sutil no chão, estilo editorial tech premium,
sem texto na imagem, fundo limpo sem elementos adicionais, 4k
```

Variação com cor de marca:
```
bolsa 3D da Shopify com iluminação verde esmeralda, glow verde neon
por trás, fundo preto, aurora borealis sutil ao fundo, cinematográfico
```

---

#### IA Dramática / Humor
Usado em: capas de gancho, slides de dor irônica

```
[descrição da cena], estilo cinematográfico dark, iluminação dramática
de estúdio, fundo escuro, expressão exagerada, qualidade editorial,
4k, sem texto na imagem, sem watermark
```

Exemplos de cena:
- `homem de terno olhando para o computador com expressão de desespero, rodeado de telas com erros`
- `robô humanóide sentado em escritório corporativo, gravata, expressão séria, papéis voando ao redor`
- `empresário empurrando uma pedra enorme morro acima, estilo metáfora visual, dark dramatic`

---

#### Background para CTA Spotlight
Usado em: último slide de todo carrossel

```
fundo preto profundo, feixe de luz ciano descendo do topo em direção
ao centro do quadro, efeito spotlight dramático, sem elementos,
sem texto, sem objetos, gradiente atmosférico sutil, cinematográfico
```

---

#### Foto Real de CEO / Figura Pública (não gerar — buscar)
Usado em: capas do Radar Eloscope (fotomontagem editorial)

**Fontes para buscar:**
- Site oficial da empresa / press release
- LinkedIn (foto de perfil em alta resolução)
- Google Imagens com filtro de licença "Uso comercial"
- Agências: Getty, Unsplash (para ambientação)

**Como compor no Paper:**
1. Importar foto da pessoa com fundo removido (usar ChatGPT: *"remova o fundo desta imagem"*)
2. Importar PNG do logo da empresa em questão (fundo transparente)
3. No Paper: pessoa ocupa 60–70% do frame, logo flutua ao lado/atrás com leve sombra e opacity 85–90%
4. Aplicar overlay gradient escuro na metade inferior (de `#0B1420` sólido até transparente)

---

#### Foto Real Tratada (bastidores)
Usado em: slides de bipartido invertido, capas institucionais

**Color grade no Paper:**
- Reduzir saturação em ~20%
- Aumentar contraste em ~15%
- Adicionar leve vinheta escura nas bordas
- Tom geral: frio/escuro para casar com dark mode

---

#### Mockup de Interface (UI)
Usado em: slides bipartido (metade superior), padrão G

```
tela de [nome do app] em um MacBook Pro, fundo de estúdio escuro,
iluminação lateral suave, reflexo sutil na mesa, ângulo levemente
elevado, estilo editorial tech, sem reflexo excessivo, 4k
```

Ou usar screenshot real da interface + aplicar no Paper sobre mockup de device (MacBook, iPhone).

---

### Fluxo Completo no Paper

**Passo a passo para montar um slide:**

1. **Criar artboard** `1080x1350px`
2. **Importar imagem hero** gerada (posicionar na zona correta conforme padrão do slide)
3. **Aplicar overlay** se necessário: retângulo com gradiente `#0B1420 → transparente`, de baixo para cima, ~60% da altura
4. **Adicionar camada de texto:**
   - Título: `Syne ExtraBold`, tamanho 52–64px, cor `#F7F8FA`
   - Palavras em destaque: mesma fonte, cor `#00FFF0`
   - Corpo: `Inter Regular`, 22–26px, cor `#F7F8FA` (dark) ou `#7A8694` (claro)
   - Bold inline: `Inter Bold`, mesma cor do corpo
5. **Adicionar pills de categoria** (se capa): capsule com borda, `JetBrains Mono` 12px
6. **Adicionar elementos de apoio:** cards glassmorphism, linhas divisórias `#00FFF0`, ícones
7. **Adicionar CTA pill** bottom right: oval com borda `#F7F8FA`, texto `arraste para o lado →`
8. **Adicionar header:** logo Eloscope top-left + identidade secundária top-right
9. **Exportar** PNG 1080x1350px

---

> **A Regra de Ouro da Produção Eloscope:**
> Se o carrossel parece um bloco denso de PDF corporativo, está errado.
> O padrão é poético, direto, escuro e com respiros.
> Menos palavras por tela. Mais impacto por palavra.
