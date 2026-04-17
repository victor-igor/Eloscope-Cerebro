# Design — Mapa da Área

## Estrutura

```
areas/design/
├── MAPA.md                    ← este arquivo
├── contexto/
│   ├── design-system-ref.md   ← índice dos 13 componentes do design system
│   ├── tokens.md              ← todos os tokens técnicos (cores, espaçamento, motion, tipografia)
│   └── assets-ref.md          ← índice de todos os assets físicos com path e quando usar
├── assets/
│   ├── logos/                 ← wordmark, logo-brand, variações (PNG)
│   ├── cores/                 ← swatches visuais de paleta
│   ├── tipografia/            ← amostras visuais das fontes
│   ├── icones/                ← ícones da marca
│   └── 3d/                    ← elementos 3D (poly3d, poly3d_01)
├── projetos/                  ← projetos de design ativos
├── rotinas/                   ← rotinas de produção de assets
└── skills/                    ← skills específicas de design
```

## Contexto Principal

| Arquivo | O que tem |
|---------|-----------|
| `contexto/design-system-ref.md` | Resumo de todos os 13 componentes: botões, cards, listas, tabelas, formulários, navegação, feedback, charts, effects, seções, padrões, SEO |
| `contexto/tokens.md` | Tokens técnicos: cores (primitivos + semânticos), espaçamento, z-index, tipografia, motion, Shadcn mapping, JSON export |
| `contexto/assets-ref.md` | Índice dos assets físicos com path completo, descrição e quando usar |

## Fontes de Verdade

- Design tokens em código: `app/globals.css` (seções `@theme` e `:root`)
- Brandbook master: `/Users/victorigor/Eloscope-IA/brandbook/`
- Brandbook legacy: `/Users/victorigor/Eloscope-IA/eloscope-brandbook/`

## Paleta Rápida

| Token | Hex | Uso |
|-------|-----|-----|
| Trust Blue | #004FFF | CTAs, autoridade, estrutura |
| Vital Cyan | #00FFF0 | Highlights, inovação |
| Result Orange | #FF8B00 | CTA principal, números de ROI |
| Deep Dark | #0B1420 | Canvas base |
| Card BG | #111D2E | Cards e painéis |
| Clean White | #F7F8FA | Texto principal |

## Assets Rápidos

| Arquivo | Path |
|---------|------|
| Logo brand (principal) | `assets/logos/logo-brand.png` |
| Wordmark (navbar/footer) | `assets/logos/wordmark.png` |
| Poly 3D hero | `assets/3d/poly3d.png` |

## Como usar

- Para implementar componentes → `contexto/design-system-ref.md`
- Para tokens CSS/Tailwind → `contexto/tokens.md`
- Para encontrar assets visuais → `contexto/assets-ref.md`
- Para referências visuais de marketing → `areas/marketing/contexto/visual-ref.md`
