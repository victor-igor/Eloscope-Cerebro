---
name: carrossel-eloscope
description: Use when creating or continuing an Instagram carousel for Eloscope — triggers on any request to create, write, or produce a carousel, including copy writing and HTML slide generation.
---

# Carrossel Eloscope — Fluxo de Produção

## Squads envolvidos

| Squad | Ativação | Papel no carrossel |
|-------|----------|--------------------|
| Brand Squad | `@brand-chief` | Alinhamento com brandbook — posicionamento, identidade, tom |
| Copy Squad | `@copy-chief` | Escrita da copy dos slides |
| Design Squad | `@design-chief` | Orientação e validação do design visual |

---

## Fluxo principal

```
Invocar skill
     ↓
Já tem copy? ──NÃO──→ FASE 1: Brief (Brand Squad)
     │                      ↓
    SIM              FASE 2: Copy (Copy Squad)
     │                      ↓
     │               copy aprovada? NÃO → ajustar
     │                      SIM ↓
     └──────────────→ FASE 3: Design brief (Design Squad)
                            ↓
                      FASE 4: Estrutura + HTML
                            ↓
                      Checklist de entrega
```

---

## FASE 1 — Brief com Brand Squad (sem copy ainda)

### 1.1 Coletar contexto

Perguntar **uma de cada vez**, aguardar resposta antes da próxima:

```
1. Qual é o tema / título do carrossel?
   (ex: "Por que a Eloscope?", "O erro mais comum ao contratar IA")

2. Qual o objetivo?
   → posicionamento  → educação  → conversão  → autoridade

3. Quem é o público e onde está na jornada?
   (ex: "dono de PME que já considerou IA mas não sabe por onde começar")

4. Qual a tensão central — o ângulo?
   (ex: "o mercado vende agente genérico → isso falha → Eloscope começa antes da tecnologia")

5. Tem alguma referência de copy, layout ou estilo que quer seguir?
```

Na pergunta 5, **sempre listar as referências disponíveis:**

```
Referências disponíveis em /referencias/:
  ref-01/ — [imagens: X slides]  nota: [conta/fonte se preenchida]
  ref-02/ — [imagens: X slides]  nota: [conta/fonte se preenchida]
  ref-03/ — [imagens: X slides]  nota: [conta/fonte se preenchida]

Alguma dessas se aplica? Ou tem outra referência externa?
```

Para listar: ler cada `referencias/ref-NN/nota.md` e contar arquivos de imagem.

### 1.2 Brand Squad — validar alinhamento

Antes de ativar `@brand-chief`, ler e passar como contexto:

```
Contexto obrigatório para o Brand Squad — ler antes de responder:
  - $SECOND_BRAIN_PATH/memory/context/business-context.md
      (missão, posicionamento, only-ness, BrandScript, persona Rafael)
  - $SECOND_BRAIN_PATH/empresa/contexto/identidade.md
  - $SECOND_BRAIN_PATH/empresa/contexto/posicionamento.md
  - $SECOND_BRAIN_PATH/areas/marketing/contexto/voz-copy.md
  - referências selecionadas: .../referencias/ref-NN/nota.md
```

Ativar com este brief:
```
@brand-chief — contexto carregado acima.
Tema do carrossel: [tema]
Objetivo: [objetivo] | Funil: [funil] | Público: [público]
Ângulo proposto: "[ângulo]"

Valide: este ângulo está alinhado com o posicionamento da Eloscope?
O tom está correto para este funil?
Qual palavra/conceito este carrossel deve "possuir"?
```

Aguardar sinal verde do Brand Squad antes de avançar.

---

## FASE 2 — Copy Squad

Antes de ativar `@copy-chief`, passar como contexto:

```
Contexto obrigatório para o Copy Squad — ler antes de responder:
  - $SECOND_BRAIN_PATH/memory/context/business-context.md
      (produto, avatar Rafael, proposta de valor, BrandScript)
  - $SECOND_BRAIN_PATH/areas/marketing/contexto/voz-copy.md
      (tom de voz, vocabulário aprovado, o que evitar)
  - brief aprovado pelo Brand Squad (ângulo, palavra central, público)
  - referências de copy selecionadas: .../referencias/ref-NN/nota.md
```

Ativar com:
```
@copy-chief — contexto carregado acima.
Escreva os 6 slides do carrossel "[tema]".
Brief aprovado: [ângulo] | Palavra central: [palavra] | Público: [público]
Referência de copy: ref-NN
```

Persona ativa: **Gary Halbert + David Ogilvy + André Chaperon** — copy de resposta direta, sem hype, sem floreio. Cada palavra paga aluguel.

Estrutura padrão de 6 slides:

| Slide | Papel | Função |
|-------|-------|--------|
| 01 | CAPA | Gancho — para quem é, qual promessa/tensão |
| 02 | PROBLEMA | Realidade do mercado — o que está errado |
| 03 | CAUSA RAIZ | Por que falha — aprofunda a dor |
| 04 | MECANISMO | Como a Eloscope resolve — o diferencial |
| 05 | PROVA / PADRÃO | Evidência, resultado, o que o diagnóstico revela |
| 06 | CTA | Próximo passo claro. Diagnóstico gratuito. |

**Regras de copy:**
- Parágrafos curtos, 1-3 linhas
- Sem bullet points longos — prefira sentenças diretas
- Palavra de destaque em Cyan: 1 por slide, identificada no briefing
- Capa: termina sempre com `arraste para o lado →`
- CTA: sempre diagnóstico gratuito + "Clique no link da bio ↗"

### 2.1 Apresentar e aprovar

Mostrar a copy completa dos 6 slides + lista de palavras para Cyan.

```
Copy aprovada? Ajustar algo antes de avançar para o design?
```

Iterar até aprovação antes de avançar.

---

## FASE 3 — Design Squad

Antes de ativar `@design-chief`, passar como contexto:

```
Contexto obrigatório para o Design Squad — ler antes de responder:
  - $SECOND_BRAIN_PATH/areas/marketing/contexto/visual-ref.md
      (cores, tipografia, logo, estilo visual, grafismos aprovados)
  - $SECOND_BRAIN_PATH/areas/design/contexto/design-system-ref.md
  - $SECOND_BRAIN_PATH/areas/design/contexto/tokens.md
  - $SECOND_BRAIN_PATH/areas/design/contexto/assets-ref.md
      (logos disponíveis, ícones, assets de design)

  Design system TRAVADO para carrosséis (não alterar):
      Canvas: 1080x1350px | Fundo: #080808
      Cores: Cyan #00D4FF | Magenta #D946EF | White rgba(240,255,254,0.92) | Dim rgba(240,255,254,0.50)
      Fontes: Syne 800 (headlines) | Inter 400 (corpo) | JetBrains Mono (labels)
      Header padrão: logo + "eloscope" + "@eloscope.ai" — IDÊNTICO em todos os slides
      Moldura: dot-grid, vignette, line-top/bottom, corner brackets — OBRIGATÓRIO em todos
  - referências visuais: .../referencias/ref-NN/ (imagens disponíveis)
  - copy aprovada: [colar copy dos 6 slides]
```

Ativar com:
```
@design-chief — design system travado acima, não sugerir alterações nele.
Dentro dessas restrições, oriente o layout de cada slide:
- Tipo de slide (capa / conteúdo / mecanismo / CTA)
- Hierarquia: o que vai em eyebrow, headline, body
- Split de headline: quais linhas em white, dim ou cyan
- Elementos extras por slide (bullets, cards, connector, botão)
Referências visuais disponíveis: ref-NN/
```

Output esperado: **briefing de design por slide** (tipo, eyebrow, headline split, elementos, fundo).

---

## FASE 4 — Estrutura + HTML

### 2.1 Criar a pasta

Próximo número sequencial na pasta `carrosseis/`:

```
/Users/victorigor/Eloscope-IA/cerebro/areas/marketing/projetos/instagram/carrosseis/
  NN-nome-em-kebab/
    copy.md
    html/
      01-capa.html
      02-*.html
      ...
      0N-cta.html
    png/          ← vazio, para exports futuros
    assets/       ← vazio, para ícones/refs locais
```

### 2.2 Criar copy.md

```markdown
# Carrossel NN — Título

**Status:** Rascunho v1
**Data:** Mês/Ano
**Objetivo:** [objetivo]
**Funil:** [topo/meio/fundo] — [público]
**Ângulo:** "[tensão central]"
**Referência:** `referencias/ref-NN/` (se houver)

---

## Copy

### SLIDE 1 — CAPA
```
[copy aprovada]
```

### SLIDE N — NOME
```
[copy aprovada]
```

---

## Briefing de Design

| Campo | Valor |
|-------|-------|
| Formato | 1080x1350px |
| Fundo | `#080808` |
| Headline | Syne 800 / `rgba(240,255,254,0.92)` |
| Destaque | Quantum Cyan `#00D4FF` |
| Corpo | Inter 400 / `rgba(240,255,254,0.50)` |
| Label | JetBrains Mono / muted |
| Slide CTA | gradiente Cyan → Magenta |

## Palavras para destacar em Cyan
- Slide 1: [palavra]
- Slide N: [palavra]

## Próximos passos
- [ ] Revisão de copy
- [ ] Design / aprovação
- [ ] Publicação
```

### 2.3 Gerar HTMLs

Um arquivo por slide. Seguir rigorosamente o design system abaixo.

---

## Design System

### Cores
| Token | Valor |
|-------|-------|
| Quantum Cyan | `#00D4FF` |
| Magenta | `#D946EF` |
| Neural White | `rgba(240,255,254,0.92)` |
| Neural Dim | `rgba(240,255,254,0.50)` |
| Background | `#080808` |

### Tipografia
| Uso | Fonte | Peso | Tamanho |
|-----|-------|------|---------|
| Headline grande | Syne | 800 | 66-76px |
| Headline médio | Syne | 800 | 52px |
| Brand name | Syne | 800 | 17px / letter 0.15em |
| Corpo | Inter | 400 | 17-22px |
| Mono / label | JetBrains Mono | 400 | 12-14px |

### Canvas e margens
- **1080 × 1350 px** (portrait)
- Margens laterais: `56px`
- Header: `top: 52px`
- Page count: `bottom: 52px; right: 56px`
- Corner brackets: `34px` das bordas, `26×26px`, opacity 0.4

### Camadas obrigatórias (todos os slides)

```html
<!-- z-index 1-4: fundo -->
<div class="dot-grid"></div>
<div class="vignette"></div>

<!-- z-index 20: moldura -->
<div class="line-top"></div>
<div class="line-bottom"></div>
<div class="corner corner-tl"></div>
<div class="corner corner-tr"></div>
<div class="corner corner-bl"></div>
<div class="corner corner-br"></div>

<!-- z-index 20: header -->
<div class="header">
  <div class="brand-mark">
    <img id="brand-icon" class="brand-icon-img"
         src="../../../../../07-arquivos/logos/EloScope - Logo - transparente.png" alt="">
    <span class="brand-name">eloscope</span>
  </div>
  <div class="handle">@eloscope.ai</div>
</div>

<!-- z-index 15: conteúdo -->
<div class="content">...</div>

<div class="page-count">0N / 0T</div>
```

**dot-grid:**
```css
background-image: radial-gradient(circle, rgba(0,212,255,0.055) 1px, transparent 1px);
background-size: 38px 38px;
```

**line-top / line-bottom:**
```css
background: linear-gradient(90deg, transparent 5%, rgba(0,212,255,0.6) 40%, rgba(217,70,239,0.6) 60%, transparent 95%);
```

### Tipos de slide

**CAPA:** ícone 3D centralizado + connector + headline 2 linhas (branca / cyan grande) + pill `arraste para o lado →`

**CONTEÚDO:** eyebrow (dot cyan + label mono caps) + headline 2-3 linhas + body text + bullets opcionais

**CTA:** watermark da marca + glow cyan + glow magenta + headline + divider + body + botão pill cyan + social proof mono

**Eyebrow:**
```html
<div class="eyebrow">
  <div class="eyebrow-dot"></div>
  <span class="eyebrow-text">LABEL EM CAPS</span>
</div>
```
```css
.eyebrow-dot { width:6px; height:6px; border-radius:50%; background:#00D4FF; }
.eyebrow-text { font-family:'JetBrains Mono'; font-size:12px; color:rgba(0,212,255,0.65); letter-spacing:0.20em; text-transform:uppercase; }
```

**Botão CTA:**
```html
<div class="cta-btn">
  <span class="cta-text">Clique no link da bio ↗</span>
</div>
```
```css
.cta-btn { background:#00D4FF; border-radius:100px; padding:30px 44px; }
.cta-text { font-family:'Inter'; font-weight:700; font-size:24px; color:#0A0A0A; }
```

---

## Regra de imagens

**NUNCA reutilizar imagens já usadas em outros carrosséis.**

- Imagens de carrosséis anteriores servem apenas como **referência de estilo** — nunca copiar o asset
- Antes de usar qualquer imagem, verificar se ela já aparece em `html/` de outros carrosséis
- Se o slide precisar de uma imagem nova (ícone 3D, ilustração, foto): **parar e pedir ao usuário que crie ou forneça**
- Slides sem imagem própria disponível → sugerir o tipo de imagem (ícone 3D, elemento abstrato, composição geométrica) e gerar o prompt de criação completo para o usuário executar em ferramenta de geração de imagem (Midjourney, DALL-E, etc.)
- Nunca deixar o slide sem solução visual — sempre propor prompt antes de seguir

---

## Checklist de entrega

- [ ] copy.md com frontmatter completo
- [ ] copy de todos os slides aprovada
- [ ] palavras Cyan identificadas por slide
- [ ] pasta `NN-nome-kebab/` criada
- [ ] HTML de cada slide gerado
- [ ] header idêntico em todos os slides (logo + `@eloscope.ai`)
- [ ] page-count correto (`0N / 0T`)
- [ ] `png/` e `assets/` criados (vazios, prontos para uso)
