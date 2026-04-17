# Eloscope — Design Tokens

> Fonte: `eloscope-brandbook/05-design-system/05.3-tokens.md`

---

## Tokens de Cor

```css
:root {
  --color-base:           #0A0A0A;
  --color-surface:        #111111;
  --color-surface-raised: #1A1A1A;
  --color-border:         #1E1E1E;
  --color-border-subtle:  #2D2D44;
  --color-cyan:           #00D4FF;
  --color-cyan-hover:     #00BFEA;
  --color-cyan-glow:      rgba(0, 212, 255, 0.25);
  --color-magenta:        #D946EF;
  --color-emerald:        #10B981;
  --color-text:           #F0FFFE;
  --color-text-muted:     #6B7280;
  --color-warning:        #F59E0B;
  --color-error:          #EF4444;
}
```

## Tokens de Tipografia

```css
:root {
  --font-display: 'Syne', sans-serif;
  --font-body:    'Inter', sans-serif;
  --font-mono:    'JetBrains Mono', monospace;
  --text-display: 64px;  --text-h1: 42px;  --text-h2: 32px;
  --text-body: 16px;     --text-label: 12px;
}
```

## Tokens de Espaçamento

```css
:root {
  --space-4: 16px;  --space-6: 24px;  --space-8: 32px;
  --space-12: 48px; --space-16: 64px; --space-24: 96px; --space-32: 128px;
}
```

## Border Radius

```css
:root {
  --radius-sm: 4px;  --radius-md: 6px;  --radius-lg: 12px;  --radius-xl: 16px;
}
```

## Tailwind Config

```js
colors: { base: '#0A0A0A', surface: '#111111', cyan: '#00D4FF', magenta: '#D946EF', emerald: '#10B981' }
fontFamily: { display: ['Syne'], body: ['Inter'], mono: ['JetBrains Mono'] }
```

*Atualizado: 2026-04-17*
