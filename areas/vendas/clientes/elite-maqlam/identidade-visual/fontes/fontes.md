# Fontes e Tipografia — Identidade Visual Maqlam

> Fonte da verdade: `src/index.css` + `DESIGN_SYSTEM.md`

---

## Família Tipográfica

| Token | Família | Fallback | Uso |
|---|---|---|---|
| `--font-sans` | **Inter** | `sans-serif` | Corpo, UI, formulários |
| `--font-display` | **Inter** | `sans-serif` | Títulos e destaques |

> A Maqlam usa **Inter** como fonte única — sem distinção entre display e body na prática. Isso garante consistência visual sem custo extra de carregamento.

---

## Escala Tipográfica

| Nível | Tamanho Tailwind | px | Peso | Classe Tailwind | Line Height | Uso |
|---|---|---|---|---|---|---|
| **H1 — Page Title** | `text-2xl` | 24px | `font-bold` (700) | `text-2xl font-bold` | `leading-tight` | Título principal de cada página |
| **H2 — Section** | `text-xl` | 20px | `font-bold` (700) | `text-xl font-bold` | `leading-normal` | Títulos de seções e grupos |
| **H3 — Card Title** | `text-lg` | 18px | `font-semibold` (600) | `text-lg font-semibold` | `leading-normal` | Cabeçalho de cards e painéis |
| **Body** | `text-sm` | 14px | `font-normal` (400) | `text-sm` | `leading-relaxed` | Texto padrão da interface |
| **Label** | `text-sm` | 14px | `font-medium` (500) | `text-sm font-medium` | — | Labels de formulário, cabeçalhos de tabela |
| **Caption / Muted** | `text-xs` | 12px | `font-normal` (400) | `text-xs text-gray-500` | — | Datas, meta-info, texto auxiliar |

---

## Pesos Utilizados

| Peso numérico | Nome | Classe Tailwind | Quando usar |
|---|---|---|---|
| 400 | Regular | `font-normal` | Corpo de texto, descrições |
| 500 | Medium | `font-medium` | Labels, badges, valores em tabela |
| 600 | Semibold | `font-semibold` | Títulos de card, nomes, destaques |
| 700 | Bold | `font-bold` | Títulos de página e seção, métricas |

---

## Cores de Texto

| Uso | Light | Dark | Classe Tailwind |
|---|---|---|---|
| Título principal | `#111827` (gray-900) | `#FFFFFF` | `text-gray-900 dark:text-white` |
| Subtítulo / descrição | `#6B7280` (gray-500) | `#9CA3AF` (gray-400) | `text-gray-500 dark:text-gray-400` |
| Texto com cor de marca | `#0E0069` | `#60A5FA` | `text-primary` (via `--text-primary`) |
| Texto secundário | `#4B5563` (gray-600) | `#6B7280` (gray-500) | `text-gray-600 dark:text-gray-500` |
| Texto desabilitado | `#A1A1A1` (gray-400) | `#A1A1A1` | `text-gray-400` |
| Placeholder | `#A1A1A1` (gray-400) | `#6B7280` | `placeholder:text-gray-400` |

---

## Padrões de Uso por Elemento

### Cabeçalho de Página (obrigatório)

```tsx
<h1 className="text-2xl font-bold flex items-center gap-2 text-gray-900 dark:text-white">
  <Icon className="w-6 h-6 text-primary" />
  Nome da Página
</h1>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
  Descrição funcional curta.
</p>
```

### Título de Seção

```tsx
<h2 className="text-xl font-bold text-gray-900 dark:text-white">
  Título da Seção
</h2>
```

### Título de Card

```tsx
<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
  Título do Card
</h3>
```

### Texto de Corpo

```tsx
<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
  Conteúdo explicativo ou descritivo.
</p>
```

### Label de Formulário

```tsx
<label className="text-sm font-medium text-gray-700 dark:text-gray-300">
  Campo
</label>
```

### Cabeçalho de Tabela

```tsx
<th className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
  Coluna
</th>
```

### Valor em Destaque (métricas, números)

```tsx
<span className="text-2xl font-bold text-gray-900 dark:text-white">
  R$ 12.480
</span>
```

### Texto Auxiliar / Caption

```tsx
<span className="text-xs text-gray-400 dark:text-gray-500">
  Atualizado há 5 minutos
</span>
```

---

## Regras de Tipografia

1. **Nunca use `text-base` (16px)** — o sistema usa `text-sm` (14px) como corpo padrão para manter densidade de informação.
2. **Títulos de página sempre têm ícone** — `<Icon className="w-6 h-6 text-primary" />` antes do texto.
3. **Nunca use `font-light` ou `font-thin`** — os pesos mínimos são 400 (regular).
4. **Tracking em cabeçalhos de tabela** — `uppercase tracking-wide` nos `<th>` para hierarquia visual clara.
5. **Máximo de 2 tamanhos de fonte por card** — título (`text-lg`) + corpo (`text-sm`). Não misture mais que isso.
6. **Descrições de página sempre em `text-sm text-gray-500`** — abaixo do H1, nunca em itálico.
