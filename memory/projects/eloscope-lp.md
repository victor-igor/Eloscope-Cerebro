# Eloscope Landing Page

> Status: 🔨 Em construção — páginas legais + obrigado criadas, form → core_module_assets, aguarda deploy Vercel

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
- Framer Motion v12 (useScroll + useTransform — substituiu GSAP no HowItWorks)
- GSAP v3 (presente mas não usado no HowItWorks — StrictMode incompatível)
- Google Fonts: Syne + Inter + JetBrains Mono
- Deploy: Vercel (pendente)

## Design Tokens
- Deep Space `#0A0A0A` · Surface `#111111` · Neural White `#F0FFFE`
- Quantum Cyan `#00D4FF` · Fusion Magenta `#D946EF`

## Stack (atualizado)
- hls.js v1.6.16 adicionado (vídeo HLS Mux)
- Framer Motion v12.38.0 (useScroll + useTransform para HowItWorks)

## Timeline
| Data | Evento |
|------|--------|
| 29/04/2026 | Copy aprovada, story criada |
| 29/04/2026 | Projeto inicializado, Tasks 1–15 implementadas |
| 29/04/2026 | Bug GSAP corrigido (StrictMode) |
| 29/04/2026 | Hero e Bento redesenhados (assimétrico) |
| 30/04/2026 | Hero reescrito: HLS video + nav integrada + marquee + GSAP entrance |
| 30/04/2026 | Nav.tsx: threshold 80% hero height |
| 30/04/2026 | HowItWorks: múltiplas iterações sticky stacking — em andamento (bug body card) |
| 30/04/2026 | WhatYouGet (S4): reescrito — terminal cards + bezier SVG connections + animateMotion + responsividade corrigida |
| 30/04/2026 | HowItWorks (S5): reescrito — GSAP sticky stacking, terminal header bars, progress dots, accent único cyan |
| 30/04/2026 | HowItWorks: substituído GSAP por Framer Motion useScroll+useTransform — sticky funcionando |
| 30/04/2026 | Bug crítico: overflow-x-hidden em main quebrava position:sticky — removido |
| 30/04/2026 | HowItWorks redesign Apple-style: split layout (headline esquerda + cards direita), copy benefit-first |

## Pendências
- [ ] Deploy Vercel (Task 16)
- [ ] Testar mobile responsivo em todas as seções
- [ ] Atualizar número WhatsApp em `/obrigado/page.tsx` (está como 5511999999999)
- [ ] Gradient no headline do Hero
- [ ] Magnetic hover no CTA principal
- ~~Páginas legais /privacidade e /termos~~ ✅ criadas 30/04 (glass design)
- ~~Página /obrigado~~ ✅ criada 30/04 (glass + 3 steps + WhatsApp CTA)
- ~~Form redireciona para /obrigado~~ ✅ 30/04 (router.push)
- ~~submitLead grava em core_module_assets~~ ✅ 30/04 (module:contacts, asset_type:person)
- ~~TS error lib/motion.ts (ease string)~~ ✅ corrigido 30/04
- ~~HowItWorks sticky stacking~~ ✅ resolvido 30/04 (reescrito com GSAP ScrollTrigger)
- ~~WhatYouGet redesign~~ ✅ resolvido 30/04 (terminal cards + SVG bezier connections)
- ~~Form: py-32→py-40, card p-8→p-10~~ ✅ aplicado 30/04
- ~~Repositioning: space-y-8→space-y-10~~ ✅ aplicado 30/04
- ~~Hero: mt-8→mt-10, CTAs mt-10→mt-12~~ ✅ aplicado 30/04

## Notas de design
- Hero: centralizado sem mockup, textura matrix chars, headline 3 linhas curtas com cyan glow
- Bento: 12-col assimétrico 8+4 / 4+8 / 6+6, cards flutuantes gap-4
- H2 todas seções: clamp(2.2rem, 3.2–3.5vw, 3.5–3.8rem)
- Repositioning: título statement 7.5rem, glow magenta forte
- "PMEs" removido da copy em todos os arquivos
- Logos: bg #0D0D12 diferenciado, py-28

---
*Criado: 29/04/2026*
