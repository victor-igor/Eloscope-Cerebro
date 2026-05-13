# Especificação Técnica Completa — Templates de Carrossel Eloscope

> Documento de referência. Frame: 420×525px. Export: 1080×1350px via device_scale_factor=2.5714.

---

## Design System Base (obrigatório em todos os slides)

```css
--base:    #0A0A0A   /* fundo dark slides */
--surface: #111111   /* fundo surface slides */
--cyan:    #00D4FF   /* acento primário */
--magenta: #D946EF   /* acento secundário */
--text:    #F0FFFE
--text2:   rgba(240,255,254,0.55)
```

### Dot-grid (background de todos os slides)
```css
background-image: radial-gradient(circle, rgba(0,212,255,0.04) 1px, transparent 1px);
background-size: 16px 16px;
```

### Accent lines (topo e base de todos os slides)
```css
/* linha topo */
height: 1.5px;
background: linear-gradient(90deg, transparent 5%, rgba(0,212,255,0.60) 40%, rgba(217,70,239,0.50) 62%, transparent 95%);

/* linha base */
height: 1.5px;
background: linear-gradient(90deg, transparent 5%, rgba(0,212,255,0.20) 40%, rgba(217,70,239,0.15) 62%, transparent 95%);
```

### Corner brackets (todos os slides — padrão atual: display:none)
```css
width: 10px; height: 10px;
border-color: #00D4FF;
opacity: 0.40;
/* L-shape nos 4 cantos */
```

### Header padrão (todos os slides exceto CTA)
```
Esquerda: logo Eloscope (height:28px) + texto "ELOSCOPE" (display:none no padrão atual)
Direita:  @eloscope.ai — Inter 500, 10px, rgba(240,255,254,0.55)
Position: absolute top:0 left:0 right:0
Padding:  12px 14px
z-index:  10
```

### Progress bar (todos os slides)
```css
position: absolute; bottom: 0; left: 0; right: 0;
padding: 16px 28px 20px;
z-index: 10;
display: flex; align-items: center; gap: 10px;

/* track */
flex: 1; height: 3px; border-radius: 2px; overflow: hidden;
background: rgba(255,255,255,0.12);  /* dark slides */
background: rgba(0,0,0,0.08);         /* light slides */

/* fill */
height: 100%; border-radius: 2px;
width: ((slideIndex+1)/total)*100%;
background: #00D4FF;   /* Eloscope padrão */
background: #fff;      /* slides escuros alternativos */

/* contador */
font-size: 11px; font-weight: 500;
color: rgba(255,255,255,0.4);  /* dark */
color: rgba(0,0,0,0.3);        /* light */
```

### Swipe arrow (todos os slides exceto o último)
```css
position: absolute; right: 0; top: 0; bottom: 0;
width: 48px; z-index: 9;
display: flex; align-items: center; justify-content: center;
background: linear-gradient(to right, transparent, rgba(255,255,255,0.08));  /* dark */
background: linear-gradient(to right, transparent, rgba(0,0,0,0.06));        /* light */

/* SVG chevron */
width: 24px; height: 24px;
path: d="M9 6l6 6-6 6"
stroke: rgba(255,255,255,0.35)  /* dark */
stroke: rgba(0,0,0,0.25)        /* light */
stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round;
```

---

## CAPAS (Slide 1)

---

### `capa-centered-glow`
**Quando usar:** Perguntas, afirmações, temas conceituais — sem necessidade de imagem complexa.

**Fundo:** `#0A0A0A` + dot-grid

**Elementos (posição absoluta, 420×525px):**
```
[glow central]
  background: radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,212,255,0.15) 0%, transparent 65%)
  position: absolute inset:0

[header]          padrão — top:0

[pills categoria]
  position: absolute top:~70px left:0 right:0 text-align:center
  pill outline: border 1px rgba(0,212,255,0.40) · border-radius:20px · padding:4px 12px
  font: Inter 500 10px uppercase letter-spacing:1.5px color:#00D4FF

[headline]
  position: abaixo das pills · text-align:center · padding:0 24px
  font: Syne 800 · 26–30px · #F0FFFE · letter-spacing:-0.025em · line-height:1.15
  destaque: <span style="color:#00D4FF;">

[subtext]
  font: Inter 400 · 12px · rgba(240,255,254,0.50) · line-height:1.5
  text-align:center · padding:0 32px · margin-top:8px

[pill arraste]
  position: absolute bottom:~52px left:0 right:0 text-align:center
  (ver especificação do pill arraste abaixo)

[progress bar]    padrão
[swipe arrow]     padrão
[accent lines]    padrão
```

**Sem imagem neste layout.**

---

### `capa-visual-top`
**Quando usar:** Dados, resultados, notícias — destaque visual no topo.

**Fundo:** `#0A0A0A` + dot-grid

**Elementos:**
```
[aurora/glow topo]
  background: radial-gradient(ellipse 90% 60% at 50% -10%, rgba(0,212,255,0.28) 0%, rgba(0,212,255,0.08) 45%, transparent 65%)
  position: absolute top:0 left:0 right:0 height:45%

[header]          padrão

[visual zone]     top:~55px · height:~220px · posição central-superior
                  pode conter: gráfico, screenshot, número grande, ícone 3D

[gradient fade]
  position: absolute bottom da visual zone
  background: linear-gradient(to bottom, transparent, #0A0A0A)
  height: 60px

[texto zone]      abaixo da visual zone · padding:0 20px
  [headline]      Syne 800 · 22–26px · #F0FFFE · text-align:center
  [subtext]       Inter 400 · 12px · var(--text2) · text-align:center · mt:6px

[pill arraste]    bottom:~52px · centralizado

[progress bar]    padrão
[swipe arrow]     padrão
```

**Imagem opcional** no visual zone — se houver, embedar como base64.

---

### `capa-statement`
**Quando usar:** Polêmica, inversão de expectativa, provocação — foco total no copy.

**Fundo:** `#0A0A0A` + dot-grid

**Elementos:**
```
[header]          padrão

[headline gigante]
  position: absolute inset:0 · display:flex · align-items:center · justify-content:center
  padding: 60px 28px
  font: Syne 800 · 36–44px · #F0FFFE · text-align:center · line-height:1.05
  letter-spacing: -0.03em
  destaque: <span style="color:#00D4FF;">

[sem visual]      este layout é tipografia pura — sem imagem, sem glow excessivo

[glow ambiente sutil]
  radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,212,255,0.06) 0%, transparent 65%)

[pill arraste]    bottom:~52px · centralizado

[progress bar]    padrão
[swipe arrow]     padrão
```

**Sem imagem neste layout.**

---

### `capa-hero-image`
**Quando usar:** Casos reais, pessoas, CEO, produtos com foto — imagem como protagonista.

**Fundo:** `#0A0A0A` + imagem hero full-bleed

**Estrutura completa (posição absoluta, 420×525px):**
```
[imagem hero]
  position: absolute; inset: 0
  width: 100%; height: 100%
  object-fit: cover; object-position: center top
  z-index: 0
  draggable: false
  ⚠️ OBRIGATÓRIO: embed base64 data:image/png;base64,...

[overlay base→topo]   (legibilidade do texto na base)
  position: absolute; inset: 0; z-index: 1; pointer-events: none
  background: linear-gradient(to top,
    #0A0A0A 0%,
    rgba(10,10,10,0.88) 28%,
    rgba(10,10,10,0.45) 52%,
    transparent 68%
  )

[overlay topo→base]   (legibilidade do header)
  position: absolute; top: 0; left: 0; right: 0; height: 22%
  z-index: 1; pointer-events: none
  background: linear-gradient(to bottom, rgba(10,10,10,0.65) 0%, transparent 100%)

[header]
  z-index: 10
  .brand-name { display: none }   ← texto "ELOSCOPE" oculto
  @eloscope.ai visível

[text zone]
  position: absolute; bottom: 28px; left: 0; right: 0
  padding: 0 22px
  display: flex; flex-direction: column; align-items: center; gap: 10px
  z-index: 5; text-align: center

  [headline]
    font-family: Syne; font-weight: 800; font-size: 24px
    color: #F0FFFE; letter-spacing: -0.02em
    white-space: nowrap; line-height: 1.15
    linha de destaque: <span style="color:#00D4FF;">

  [subtext]
    font-family: Inter; font-weight: 400; font-size: 12px
    color: rgba(240,255,254,0.55); line-height: 1.5

  [pill arraste]
    border: 1px solid rgba(240,255,254,0.25)
    border-radius: 100px; padding: 8px 18px
    display: inline-flex; align-items: center; gap: 8px; margin-top: 2px
    texto: Inter 500 11px rgba(240,255,254,0.75) "arraste para o lado"
    ícone: SVG círculo 14px + seta direita stroke rgba(240,255,254,0.7) width:1.5

[progress bar]
  background track: rgba(255,255,255,0.65)
  fill: #00D4FF ou brand color · opacity: 0.75
  .pb-l: color rgba(0,0,0,0.35) ← label escuro sobre track claro

[swipe arrow]
  .sw-arrow path: stroke rgba(10,10,10,0.22)  ← sutil sobre overlay

[accent lines]    padrão
```

**⚠️ Nota crítica:** NÃO usar `mix-blend-mode:screen` na imagem hero — apenas para assets com fundo preto (mascotes 3D). Para fotos reais, usar full-bleed direto com os overlays acima.

---

## SLIDES INTERNOS (2–N)

---

### `content-glass`
**Quando usar:** Definições, nuances, conceitos — um destaque principal em glass card.

**Fundo:** `#0A0A0A` ou `#111111` + dot-grid

**Elementos (posição no fluxo, padding: 0 18px):**
```
[header]          padrão · z-index:10

[label categoria]
  margin-top: 52px   ← clearance do header
  font: Inter 600 · 10px · letter-spacing:2px · uppercase
  color: #00D4FF (dark) / BRAND_PRIMARY (light)

[headline H2]
  font: Syne 800 · 22–26px · #F0FFFE · line-height:1.15
  margin-top: 6px

[body text]
  font: Inter 400 · 12.5px · rgba(240,255,254,0.65) · line-height:1.55
  margin-top: 10px

[divider]
  width: 100%; height: 1px
  background: linear-gradient(90deg, #00D4FF 0%, rgba(0,212,255,0) 60%)
  margin: 14px 0

[glass card — destaque]
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px)
  background: rgba(0,212,255,0.06)
  border: 1px solid rgba(0,212,255,0.25)
  border-radius: 14px; padding: 14px 16px
  texto: Inter 400 12px rgba(240,255,254,0.80) line-height:1.55
  destaque inline: color:#00D4FF font-weight:600

[progress bar]    padrão
[swipe arrow]     padrão
```

**Sem imagem neste layout** (glass card é puramente tipográfico).

---

### `checklist`
**Quando usar:** Sintomas, critérios, listas de verificação — itens com checkmark.

**Fundo:** `#0A0A0A` ou `#111111` + dot-grid

**Elementos:**
```
[header]          padrão

[label]           padrão (Inter 600 10px uppercase letter-spacing:2px #00D4FF)

[headline H2]     Syne 800 · 20–24px · #F0FFFE · margin-top:6px · line-height:1.15

[lista de itens]  margin-top:14px · display:flex flex-column gap:10px
  cada item:
    display: flex; align-items: flex-start; gap: 10px
    [checkmark]
      width: 16px; height: 16px; flex-shrink: 0; margin-top: 2px
      SVG checkmark ou ✓ em #00D4FF
    [texto]
      Inter 400 12.5px rgba(240,255,254,0.75) line-height:1.5
      bold inline: font-weight:600 color:#F0FFFE

[divider]         1px gradient cyan→transparent · margin:14px 0

[conclusão]
  Inter 400 · 12px · rgba(240,255,254,0.65) · line-height:1.55
  destaque: color:#00D4FF font-weight:600

[progress bar]    padrão
[swipe arrow]     padrão
```

**Sem imagem neste layout.**

---

### `quote-glass`
**Quando usar:** Objeções do mercado, crenças populares, citações reais — para depois refutar.

**Fundo:** `#0A0A0A` + dot-grid

**Elementos:**
```
[header]          padrão

[label]           padrão

[headline]        Syne 800 · 20–24px · #F0FFFE · margin-top:6px

[glass card — quote]
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px)
  background: rgba(0,212,255,0.05)
  border: 1px solid rgba(0,212,255,0.20)
  border-left: 3px solid #00D4FF   ← borda esquerda sólida cyan
  border-radius: 0 14px 14px 0     ← ou 14px em todos
  padding: 16px 18px
  margin-top: 12px

  [texto citação]
    Inter 400 · 13px · rgba(240,255,254,0.80) · font-style:italic
    line-height: 1.55

  [atribuição]
    Inter 500 · 11px · rgba(240,255,254,0.40) · margin-top:8px

[refutação/resposta]
  margin-top: 14px
  Inter 400 · 12px · rgba(240,255,254,0.65) · line-height:1.55
  destaque: color:#00D4FF font-weight:600

[progress bar]    padrão
[swipe arrow]     padrão
```

**Sem imagem neste layout.**

---

### `numbered-steps`
**Quando usar:** Processos, tutoriais, sequência de ações — passos numerados.

**Fundo:** `#0A0A0A` ou `#F8F9FA` (alternado) + dot-grid

**Elementos:**
```
[header]          padrão

[label]           padrão

[headline]        Syne 800 · 20–24px · cor do fundo (dark:#F0FFFE / light:#0A0A0A)
                  margin-top: 6px

[lista de passos] margin-top:16px · display:flex flex-column
  cada passo:
    display: flex; align-items: flex-start; gap: 16px
    padding: 14px 0
    border-bottom: 1px solid LIGHT_BORDER (light) / rgba(255,255,255,0.08) (dark)

    [número]
      font-family: Syne; font-weight: 300; font-size: 26px
      color: #00D4FF; min-width: 34px; line-height: 1

    [conteúdo]
      display: flex; flex-direction: column; gap: 3px
      [título passo]  Inter 600 · 14px · cor do texto principal
      [desc passo]    Inter 400 · 12px · cor do texto secundário

[progress bar]    padrão
[swipe arrow]     padrão
```

**Sem imagem neste layout.**

---

### `stat-hero`
**Quando usar:** Evidências, provas sociais, resultados — número/dado de impacto.

**Fundo:** `#0A0A0A` + dot-grid

**Elementos:**
```
[header]          padrão

[glow central]
  radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,212,255,0.18) 0%, transparent 60%)
  position: absolute inset:0 z-index:0

[label]           padrão · position relativa z-index:1 · margin-top:52px

[número gigante]
  font: Syne 800 · 64–80px · #00D4FF · text-align:center
  letter-spacing: -0.04em; line-height: 1
  margin-top: 16px
  text-shadow: 0 0 40px rgba(0,212,255,0.45)   ← glow no número

[unidade/label]
  Inter 600 · 13px · rgba(240,255,254,0.55) · text-align:center
  letter-spacing: 2px; uppercase; margin-top: 6px

[contexto]
  Inter 400 · 12.5px · rgba(240,255,254,0.60) · text-align:center
  line-height: 1.55; padding: 0 32px; margin-top: 14px

[fonte]
  Inter 400 · 10px · rgba(240,255,254,0.30) · text-align:center
  margin-top: 8px

[progress bar]    padrão
[swipe arrow]     padrão
```

**Sem imagem neste layout** (o número É o visual).

---

### `light-icon-card`
**Quando usar:** Slide de contexto/setup — fundo claro, visual premium com ícone 3D e foto de suporte.

**Fundo:** `#F8F9FA` (slide claro — contraste com slides escuros adjacentes)

**Estrutura completa (posição absoluta, 420×525px):**
```
[logo Eloscope]
  position: absolute; top: 14px; left: 16px
  height: 36px; width: auto; object-fit: contain
  ⚠️ embed base64

[ícone 3D]
  position: absolute; top: -14px; right: -14px
  width: 180px; height: 180px
  border-radius: 24px; overflow: hidden
  object-fit: cover
  ⚠️ embed base64
  ⚠️ se fundo preto: remover com PIL (pixels < brightness 60 → alpha=0)
  ⚠️ se fundo branco: embedar direto como JPEG

[headline]
  position: absolute; top: 58px; left: 16px; right: 182px
  font: Syne 800 · 28px · #0A0A0A · letter-spacing:-0.025em · line-height:1.15
  destaque: <span style="color:#00D4FF;">

[body text]
  position: absolute; top: 210px
  padding: 0 16px
  font: Inter 400 · 13px · #444 · line-height:1.55
  bold inline: font-weight:700 color:#0A0A0A
  span cyan: color:#00D4FF

[card foto]
  position: absolute; top: 268px; bottom: 28px; left: 14px; right: 14px
  border-radius: 16px; overflow: hidden
  box-shadow: 0 6px 28px rgba(0,0,0,0.13)
  [imagem]
    width:100%; height:100%; object-fit:cover
    object-position: center 18%   ← mostra o rosto
    ⚠️ embed base64
  [overlay no card]
    position:absolute; inset:0
    background: linear-gradient(to top, rgba(5,5,15,0.68) 0%, transparent 55%)

[texto secundário]
  position: absolute; top: 454px   ← dentro do card, sobre o overlay
  padding: 0 24px
  font: Inter 400 · 12px · rgba(240,255,254,0.80) · line-height:1.45

[accent lines — versão light]
  linha topo: rgba(0,212,255,0.45) 40%, rgba(217,70,239,0.35) 62%
  linha base: rgba(0,212,255,0.20) 40%, rgba(217,70,239,0.15) 62%

[progress bar — versão light]
  track: rgba(0,0,0,0.10)
  fill:  rgba(0,0,0,0.45)
  label: rgba(0,0,0,0.35)

[swipe arrow — versão light]
  path stroke: rgba(10,10,10,0.22)
```

**3 imagens neste layout:** logo Eloscope (topo esq), ícone 3D (topo dir, sangrando), foto/screenshot (card base).

---

### `dark-list-arc`
**Quando usar:** Sintomas, dores, critérios — lista escura com arco de ícones e glass footer teaser.

**Fundo:** `#111111` + dot-grid

**Estrutura completa (posição absoluta, 420×525px):**
```
[header]          padrão

[headline]
  position: absolute; top: 38px; left: 16px; right: 16px
  font: Syne 800 · 21px · #F0FFFE · line-height:1.15

[bullet list]
  position: abaixo da headline · padding: 0 16px · margin-top:8px (relativo)
  display: flex; flex-direction: column; gap: 8px

  cada item: display:flex; align-items:flex-start; gap:8px
    [dot]
      width:5px; height:5px; border-radius:50%
      background:#00D4FF; flex-shrink:0; margin-top:5px
    [texto]
      Inter 400 · 12.5px · rgba(240,255,254,0.65) · line-height:1.5
      bold inline: font-weight:600 color:#F0FFFE

[conclusão]
  Inter 700 · 13px · #F0FFFE · margin-top:10px · padding:0 16px
  <span style="color:#00D4FF;"> para destaque

[arc de ícones]
  position: absolute; bottom: 48px; left: 0; right: 0
  height: 160px; overflow: hidden
  [imagem arc]
    width:100%; height:100%; object-fit:cover
    object-position: center 40%
    ⚠️ embed base64 (imagem gerada externamente — ícones em arco semicircular)

[glow magenta]
  position: absolute; bottom: 0; right: 0
  width: 200px; height: 190px
  background: radial-gradient(circle, rgba(217,70,239,0.08) 0%, transparent 65%)

[glass footer]
  position: absolute; bottom: 0; left: 12px; right: 12px
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px)
  background: rgba(0,212,255,0.08)
  border: 1px solid rgba(0,212,255,0.35)
  border-radius: 18px 18px 0 0
  padding: 14px 16px 10px
  display: flex; align-items: center; justify-content: space-between

  [texto footer]    Inter 400 · 12px · rgba(240,255,254,0.75)
  [botão glass]
    width:34px; height:34px; border-radius:10px
    background: rgba(0,212,255,0.18)
    border: 1.5px solid rgba(0,212,255,0.45)
    seta → SVG stroke:#00D4FF stroke-width:2.6

[progress bar]    padrão
[swipe arrow]     padrão
```

**1 imagem neste layout:** arc de ícones (fundo do slide, acima do glass footer).

---

### `centered-pill-image`
**Quando usar:** Prova, evidência, discovery — conceito central com pill + imagem de suporte.

**Fundo:** `#0A0A0A` + dot-grid

**Estrutura completa (posição no fluxo, padding: 0 18px):**
```
[header]          padrão · z-index:10

[headline]
  margin-top: 52px   ← clearance do header
  font: Syne 800 · 18px · #F0FFFE · text-align:center · line-height:1.2
  margin-bottom: 6px

  [pill inline — dentro da headline]
    display: inline; vertical-align:middle
    background: rgba(0,212,255,0.12)
    border: 1px solid rgba(0,212,255,0.45)
    border-radius: 5px; padding: 1px 6px
    color: #00D4FF; font-size: herdado

[quote/subtext]
  Inter 400 · 11.5px · rgba(240,255,254,0.55)
  font-style: italic; text-align:center; margin-bottom:12px

[card imagem]
  width: 100%; height: 180px
  border-radius: 14px; overflow: hidden
  margin-bottom: 12px
  box-shadow: 0 8px 32px rgba(0,0,0,0.55)
  position: relative

  [imagem]
    width:100%; height:100%; object-fit:cover; object-position:center
    ⚠️ embed base64

  [overlay escuro]
    position: absolute; inset: 0
    background: rgba(5,5,15,0.22)

[conclusão]
  Inter 400 · 11px · rgba(240,255,254,0.65) · text-align:center · line-height:1.6
  destaque inline: color:#00D4FF font-weight:600

[botão glass centralizado]
  margin-top: 10px
  display: flex; justify-content:center
  width: 38px; height: 38px; border-radius: 12px
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px)
  background: rgba(0,212,255,0.08)
  border: 1.5px solid rgba(0,212,255,0.40)
  display: flex; align-items:center; justify-content:center
  seta → SVG stroke:#00D4FF stroke-width:2.5

[progress bar]    padrão
[swipe arrow]     padrão
```

**1 imagem neste layout:** no card central (obrigatória, embed base64).

---

### `split-staircase`
**Quando usar:** Nuance, exceção, ressalva — contraste visual dark/light reforça contraste conceitual.

**Fundo:** topo `#0D0F14` (42%) + base `#F8F9FA` (58%) — split horizontal

**Estrutura completa (posição absoluta, 420×525px):**
```
[top block]
  position: absolute; top:0; left:0; right:0; height: 42%   → ~220px
  background: #0D0F14; overflow: hidden

  [glow]
    position:absolute; inset:0
    background: radial-gradient(ellipse 120% 80% at 85% 55%, rgba(0,212,255,0.20) 0%, transparent 55%)

  [staircase — 4 camadas do mesmo texto]
    position:absolute; left:0; right:0
    font: Syne 800 · 36px (ghosts) / 38px (sólida) · letter-spacing:-0.025em · text-transform:uppercase · white-space:nowrap

    ghost 1:  top:44px;  color:rgba(240,255,254,0.06)
    ghost 2:  top:88px;  color:rgba(240,255,254,0.18)
    ghost 3:  top:132px; color:rgba(240,255,254,0.42)
    sólida:   top:176px; color:rgba(240,255,254,0.92); font-size:38px

[bottom block]
  position: absolute; top:42%; left:0; right:0; bottom:0   → ~305px
  background: #F8F9FA; overflow: hidden

  [logo watermark]
    position:absolute; top:50%; right:-10px
    transform: translateY(-50%)
    width: 480px; opacity: 0.08
    filter: brightness(0)   ← renderiza em preto sobre branco
    ⚠️ embed base64
    ⚠️ confinada ao overflow:hidden do bottom block — clippada na esquerda

[body content]
  position: absolute; top:42%; left:0; right:0; bottom:76px
  padding: 14px 18px 6px
  display: flex; flex-direction:column; justify-content:center

  [texto escuro]
    Inter 400 · 13px · #333 · line-height:1.55
    bold inline: font-weight:700 color:#0A0A0A
    atenção: texto ESCURO sobre fundo BRANCO

[glass footer]    IDÊNTICO ao dark-list-arc
  position: absolute; bottom:0; left:12px; right:12px
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px)
  background: rgba(0,212,255,0.08)
  border: 1px solid rgba(0,212,255,0.35)
  border-radius: 18px 18px 0 0
  padding: 14px 16px 10px
  ⚠️ sobre fundo BRANCO — manter background:rgba(0,212,255,0.08) não trocar por sólido

[header]          padrão (sobre o top block dark)

[progress bar]
  track: rgba(0,0,0,0.10) para combinar com a mescla dos dois fundos
  fill:  #00D4FF

[swipe arrow]     padrão
```

**1 imagem neste layout:** logo watermark (decorativa, opacity 0.08, dentro do bottom block).

---

## CTA (Último Slide)

---

### `cta-spotlight`
**Quando usar:** Sempre o último slide — call to action com logo, headline conclusivo e botão.

**Fundo:** `#0A0A0A` + dot-grid

**Estrutura completa (posição absoluta, 420×525px):**
```
[glow cyan topo]
  position: absolute; inset:0
  background: radial-gradient(ellipse 90% 58% at 50% -8%,
    rgba(0,212,255,0.28) 0%,
    rgba(0,212,255,0.08) 42%,
    transparent 65%
  )
  z-index: 0

[glow magenta base]
  position: absolute; bottom:0; left:50%; transform:translateX(-50%)
  width:300px; height:200px
  background: radial-gradient(ellipse at center, rgba(217,70,239,0.13) 0%, transparent 65%)
  z-index: 0

[header]
  display: none   ← slide CTA NÃO tem header
  forçar via JS: document.querySelectorAll('.slide')[N].querySelector('.hdr').style.display='none'

[content block]
  position: absolute; inset:0
  display: flex; flex-direction:column; align-items:center; justify-content:center
  gap: 12px; padding: 80px 28px
  z-index: 1

  [logo]
    height: 32px; width: auto; object-fit: contain
    margin-bottom: 6px
    ⚠️ embed base64
    ⚠️ caminho canônico: /Users/victorigor/Eloscope-IA/cerebro/areas/design/assets/logos/EloScope - Logo.png
    ⚠️ sem filter, sem opacity modificada — exibir exatamente como o arquivo original

  [headline]
    font: Syne 800 · 19px · rgba(240,255,254,0.95)
    text-align: center; line-height: 1.25; letter-spacing: -0.02em
    destaque: <span style="color:#00D4FF;">

  [botão CTA pill]
    margin-top: 12px
    border-radius: 50px; padding: 14px 20px
    background: #00D4FF; width: 100%
    font: Inter 700 · 12px · #080808 · white-space:nowrap
    text-align: center

[progress bar]
  fill: 100% — width:100%
  background: #00D4FF; opacity: 0.72
  label: "N/N" (ex: "6/6")

[sem swipe arrow]   último slide — remover completamente

[accent lines]    padrão
```

**1 imagem neste layout:** logo Eloscope (embed base64 obrigatório).

---

## Regras Globais de Geração

### Geração de HTML
```
✅ Sempre: Python Path.write_text()
❌ Nunca:  shell heredoc, echo, concatenação bash
Motivo:    base64 tem $, `, \ — shell interpola e corrompe
```

### Imagens
```
✅ Sempre: data:image/TYPE;base64,{b64}  ← URI inline
❌ Nunca:  src="foto.png"               ← path relativo (quebra fora da pasta)
❌ Nunca:  background: url('data:...')  ← crash no parser com 1.5MB+
✅ Imagem: <img> tag com object-fit:cover
```

### Verificar formato real do arquivo
```bash
file /caminho/para/imagem.png
# pode retornar "JPEG image data" mesmo com extensão .png
# usar mime correto: "image/jpeg" ou "image/png"
```

### Export
```
Viewport:           420×525px   ← NUNCA mudar
device_scale_factor: 2.5714     ← 1080/420
Output por slide:   1080×1350px
Fontes:             wait_for_timeout(3000) após load
Transição:          track.style.transition='none' antes de cada screenshot
```

### Review flow (obrigatório)
```
1. Gerar HTML preview
2. Mostrar ao usuário
3. Perguntar: "Quais slides precisam de ajuste?"
4. Corrigir APENAS os slides mencionados
5. Exportar SOMENTE após "pode exportar" / "aprovado" / "ok"
```

---

## Pill "Arraste para o lado" — HTML Exato

```html
<div style="display:inline-flex;align-items:center;gap:8px;padding:8px 18px;
            border:1px solid rgba(240,255,254,0.25);border-radius:100px;margin-top:2px;">
  <span style="font-family:'Inter',sans-serif;font-weight:500;font-size:11px;
               color:rgba(240,255,254,0.75);">arraste para o lado</span>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="rgba(240,255,254,0.5)" stroke-width="1.5"/>
    <path d="M10 8l4 4-4 4" stroke="rgba(240,255,254,0.7)" stroke-width="1.5"
          stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</div>
```

---

## Resumo: Quais layouts têm imagem

| Layout | Imagens | Quantidade |
|--------|---------|-----------|
| `capa-centered-glow` | Nenhuma | 0 |
| `capa-visual-top` | Opcional no visual zone | 0–1 |
| `capa-statement` | Nenhuma | 0 |
| `capa-hero-image` | Hero full-bleed | 1 |
| `content-glass` | Nenhuma | 0 |
| `checklist` | Nenhuma | 0 |
| `quote-glass` | Nenhuma | 0 |
| `numbered-steps` | Nenhuma | 0 |
| `stat-hero` | Nenhuma | 0 |
| `light-icon-card` | Logo + ícone 3D + foto | 3 |
| `dark-list-arc` | Arc de ícones | 1 |
| `centered-pill-image` | Card central | 1 |
| `split-staircase` | Logo watermark (decorativa) | 1 |
| `cta-spotlight` | Logo Eloscope | 1 |
