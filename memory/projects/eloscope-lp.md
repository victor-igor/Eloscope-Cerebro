# Eloscope Landing Page

> Status: 🔨 Em construção — aguarda redesign visual + deploy

## O que é
Landing page da Eloscope em Next.js 14 + Tailwind + GSAP. CTA único: formulário de diagnóstico gratuito. Stack aprovada, copy aprovada, implementação parcial feita.

## Responsáveis
- **Victor:** implementação + design

## Localização
- Código: `/Users/victorigor/Eloscope-IA/eloscope-lp/`
- Story: `docs/stories/2.1-eloscope-landing-page.story.md`
- Copy: `eloscope-brandbook/06-marketing/06.1-site.md`

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS v3
- GSAP + ScrollTrigger
- Google Fonts: Syne + Inter + JetBrains Mono
- Deploy: Vercel (pendente)

## Design Tokens
- Deep Space `#0A0A0A` · Surface `#111111` · Neural White `#F0FFFE`
- Quantum Cyan `#00D4FF` · Fusion Magenta `#D946EF`

## Timeline
| Data | Evento |
|------|--------|
| 29/04/2026 | Copy aprovada, story criada |
| 29/04/2026 | Projeto inicializado, Tasks 1–15 implementadas |
| 29/04/2026 | Bug GSAP corrigido (StrictMode) |
| 29/04/2026 | Hero e Bento redesenhados (assimétrico) |
| — | Redesign radical pendente + deploy Vercel |

## Pendências
- [ ] Form: py-32→py-40, card p-8→p-10
- [ ] Repositioning: space-y-8→space-y-10
- [ ] Hero: mt-8→mt-10, CTAs mt-10→mt-12
- [ ] Deploy Vercel (Task 16)
- [ ] Testar mobile responsivo

## Notas de design
- Hero: centralizado sem mockup, textura matrix chars, headline 3 linhas curtas com cyan glow
- Bento: 12-col assimétrico 8+4 / 4+8 / 6+6, cards flutuantes gap-4
- H2 todas seções: clamp(2.2rem, 3.2–3.5vw, 3.5–3.8rem)
- Repositioning: título statement 7.5rem, glow magenta forte
- "PMEs" removido da copy em todos os arquivos
- Logos: bg #0D0D12 diferenciado, py-28

---
*Criado: 29/04/2026*
