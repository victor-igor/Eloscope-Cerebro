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
- [ ] Redesign completo: seções com backgrounds distintos, texturas, elementos 3D
- [ ] Form.tsx: 2-colunas (pitch esquerda + form direita)
- [ ] Deploy Vercel (Task 16)
- [ ] Testar mobile responsivo

## Notas de design
- Hero: split assimétrico, mockup de operações ao vivo no lado direito
- Bento: 12-col assimétrico 8+4 / 4+8 / 6+6
- Problema atual: todas as seções têm o mesmo fundo, sem diferenciação visual
- Próxima sessão: seções alternando texturas/backgrounds, elementos 3D CSS, variação radical

---
*Criado: 29/04/2026*
