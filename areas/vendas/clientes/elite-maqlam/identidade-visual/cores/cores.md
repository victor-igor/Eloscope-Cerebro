# Cores — Identidade Visual Maqlam

> Fonte da verdade: `src/index.css` (@theme)  
> Stack: Tailwind v4 com variáveis CSS nativas

---

## Paleta de Marca

| Token CSS | Classe Tailwind | Nome | Hex | RGB | Uso |
|---|---|---|---|---|---|
| `--color-primary` | `bg-primary` / `text-primary` | Deep Blue | `#0E0069` | `14, 0, 105` | Cor principal — botões CTA, links, títulos, brand |
| `--color-primary-hover` | `hover:bg-primary-hover` | Darker Blue | `#0A0050` | `10, 0, 80` | Estado hover do primário |
| `--color-secondary` | `bg-secondary` / `text-secondary` | Sky Blue | `#0098F6` | `0, 152, 246` | Destaques secundários, badges, status info |
| `--color-accent` | `bg-accent` / `text-accent` | Fresh Green | `#0DF259` | `13, 242, 89` | Sucesso, confirmação, notificações positivas |

### Swatches

```
Primary     ████  #0E0069  Deep Blue
Pri. Hover  ████  #0A0050  Darker Blue
Secondary   ████  #0098F6  Sky Blue
Accent      ████  #0DF259  Fresh Green
```

---

## Cores de Interface

### Backgrounds

| Token CSS | Classe Tailwind | Light | Dark | Uso |
|---|---|---|---|---|
| `--color-background-light` / `--color-background-dark` | `bg-background-light` / `bg-background-dark` | `#F8FAFC` | `#020617` | Fundo da página (body) |
| `--color-card-light` / `--color-card-dark` | `bg-card-light` / `bg-card-dark` | `#FFFFFF` | `#0F172A` | Cards, modais, painéis flutuantes |
| `--color-surface-dark` | `bg-surface-dark` | — | `#0F172A` | Superfícies elevadas no dark mode |
| `--color-muted-light` / `--color-muted-dark` | `bg-muted-light` / `bg-muted-dark` | `#F4F6F8` | `#252525` | Fundo desabilitado, seções secundárias |

### Bordas

| Token CSS | Classe Tailwind | Light | Dark | Uso |
|---|---|---|---|---|
| `--color-border-light` / `--color-border-dark` | `border-border-light` / `border-border-dark` | `#E2E8F0` | `#1E293B` | Bordas de cards, divisórias, separadores |

### Inputs

| Token CSS | Classe Tailwind | Light | Dark | Uso |
|---|---|---|---|---|
| `--color-input-light` / `--color-input-dark` | `bg-input-light` / `bg-input-dark` | `#F1F5F9` | `#020617` | Fundo de campos de formulário |

---

## Texto

| Variável CSS | Light | Dark | Uso |
|---|---|---|---|
| `--text-primary` | `#0E0069` | `#60A5FA` | Texto com cor de marca |

> No dark mode, o texto primário muda de Deep Blue para um azul claro (`#60A5FA`) para manter contraste adequado.

### Primary Surface (fundo suave sobre o primário)

| Modo | Valor |
|---|---|
| Light | `color-mix(in srgb, #0E0069 10%, transparent)` — azul translúcido |
| Dark | `rgba(96, 165, 250, 0.18)` — azul claro translúcido |

---

## Escala de Cinzas

| Token | Classe Tailwind | Hex | Uso típico |
|---|---|---|---|
| `--color-gray-50` | `bg-gray-50` | `#F9FAFB` | Fundo mais suave |
| `--color-gray-100` | `bg-gray-100` | `#F4F6F8` | Fundo secundário |
| `--color-gray-200` | `bg-gray-200` | `#E0E0E0` | Bordas suaves |
| `--color-gray-300` | `bg-gray-300` | `#D1D5DB` | Bordas |
| `--color-gray-400` | `text-gray-400` | `#A1A1A1` | Texto placeholder, ícones inativos |
| `--color-gray-500` | `text-gray-500` | `#666666` | Texto secundário, descrições |
| `--color-gray-600` | `text-gray-600` | `#4B5563` | Texto de suporte |
| `--color-gray-700` | `text-gray-700` | `#333333` | Texto em interfaces claras |
| `--color-gray-800` | `text-gray-800` | `#1E1E1E` | Texto forte |
| `--color-gray-900` | `text-gray-900` | `#1A1A1A` | Títulos em fundo claro |
| `--color-gray-950` | `text-gray-950` | `#121212` | Preto suave |

### Escala visual

```
50   ░░░  #F9FAFB  — branco quase puro
100  ░░   #F4F6F8
200  ░    #E0E0E0
300       #D1D5DB
400  ▒    #A1A1A1
500  ▒▒   #666666  — cinza médio
600  ▓    #4B5563
700  ▓▓   #333333
800  ▓▓▓  #1E1E1E
900  █    #1A1A1A
950  ██   #121212  — preto suave
```

---

## Zinc (aliases para dark mode)

| Token | Hex | Alias |
|---|---|---|
| `--color-zinc-800` | `#333333` | Igual ao gray-700 |
| `--color-zinc-900` | `#1E1E1E` | Igual ao gray-800 |
| `--color-zinc-950` | `#121212` | Igual ao gray-950 |

---

## Scrollbar

| Elemento | Light | Dark |
|---|---|---|
| Track | `transparent` | `transparent` |
| Thumb | `#333333` | `#444444` |
| Tamanho | `6px × 6px` | `6px × 6px` |
| Border radius | `3px` | `3px` |

---

## Regras de Uso

1. **Nunca use hex diretamente no código** — sempre use os tokens CSS ou as classes Tailwind.
2. **Primary em dark mode** é sempre `#60A5FA` (via `--text-primary`), nunca `#0E0069`.
3. **Accent** (`#0DF259`) é exclusivo para estados de sucesso/positivo — não use como cor decorativa.
4. **Secondary** (`#0098F6`) complementa o primary — use para informações, links secundários, filtros ativos.
5. **Fundo de página** sempre via `bg-gray-50 dark:bg-background-dark`, nunca white direto.
