# Eloscope — Referências Visuais

> Fonte: `eloscope-brandbook/04-visual/`

---

## Cores

> Ciano é a marca. Magenta é o acento. Emerald é o resultado. Deep Space é o ambiente.

| Papel | Nome | HEX | Uso |
|-------|------|-----|-----|
| Base | Deep Space | `#0A0A0A` | Fundo — 65% das peças |
| Marca | Quantum Cyan | `#00D4FF` | Logo, CTAs, headlines — 20% |
| Texto | Neural White | `#F0FFFE` | Texto sobre fundos escuros — 10% |
| Acento | Fusion Magenta | `#D946EF` | Acento pontual — 3% |
| Resultado | Emerald | `#10B981` | Métricas, confirmações — 2% |

**Gradientes:**
```css
/* Marca */ linear-gradient(135deg, #00D4FF, #D946EF)
/* Resultado */ linear-gradient(135deg, #00D4FF, #10B981)
/* Glow Ciano */ box-shadow: 0 0 24px rgba(0, 212, 255, 0.3)
```

**✅ Correto:** Deep Space como fundo · Cyan protagonista · Magenta com parcimônia · Emerald só para resultado
**❌ Errado:** Fundo branco como padrão · Magenta como headline · 2+ cores de destaque na mesma seção

---

## Tipografia

```
Display / Hero    →  Syne ExtraBold 800  /  ALL CAPS  /  tracking +0.10em
Heading 1         →  Syne Bold 700
Heading 2–3       →  Inter SemiBold 600
Body              →  Inter Regular 400
Mono / Labels     →  JetBrains Mono 400
```

**Google Fonts:** Syne · Inter · JetBrains Mono (todos Open Font License)

---

## Logo

**Conceito:** "Elo" (conexão) + "scope" (visão estratégica). Dois anéis entrelaçados — lemniscata (∞).

**Assets em:** `cerebro/areas/design/assets/logos/`
- `EloScope - Logo.png` — símbolo isolado
- `EloScope - Logotipo.png` — wordmark isolado
- `Logotipo - EloScope - completo.png` — logo completo
- `EloScope - Logo - transparente.png` — fundo transparente
- `monocromatico.png` · `monocro.png` · `logolinha.png`

**Regras:** Sempre sobre fundo escuro · mínimo 160px · nunca distorcer · nunca sobre fundo branco com versão color

---

## Estilo Visual

**Fotografias ✅:** pessoa + múltiplas telas · mãos no teclado · interface da Eloscope · fundadores em contexto real
**Fotografias ❌:** handshakes genéricos · robôs humanoides · foguetes/lâmpadas · imagens super claras

**Ícones:** Lucide Icons (linear, stroke 1.5–2px, 20–24px em UI) · cor padrão Quantum Cyan

**Grafismos aprovados:** linhas de conexão Cyan 20–40% · grid de pontos 8–15% · gradiente Cyan→Magenta em destaques máximos

**Motion:** transições suaves · fade 200ms · "Movimento comunica inteligência — lento, fluido, deliberado"

**Referências de estética:** Linear · Vercel · Raycast · Resend

---

## Fontes

- `eloscope-brandbook/04-visual/04.1-cores.md`
- `eloscope-brandbook/04-visual/04.2-tipografia.md`
- `eloscope-brandbook/04-visual/04.3-logo.md`
- `eloscope-brandbook/04-visual/04.4-estilo-visual.md`

*Atualizado: 2026-04-17*
