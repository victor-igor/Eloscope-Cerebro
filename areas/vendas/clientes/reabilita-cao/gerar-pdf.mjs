import pkg from '/Users/victorigor/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.js';
const { chromium } = pkg;
import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

const mdPath   = '/Users/victorigor/Eloscope-IA/cerebro/areas/vendas/clientes/reabilita-cao/whatsapp-oficial-vs-nao-oficial.md';
const outPath  = '/Users/victorigor/Eloscope-IA/cerebro/areas/vendas/clientes/reabilita-cao/whatsapp-oficial-vs-nao-oficial.pdf';
const logoPath = '/Users/victorigor/Eloscope-IA/cerebro/areas/design/assets/logos/EloScope - Logo - transparente.png';

let md = readFileSync(mdPath, 'utf8').replace(/^---[\s\S]*?---\n/, '');
const logoB64 = readFileSync(logoPath).toString('base64');
const logoSrc = `data:image/png;base64,${logoB64}`;

writeFileSync('/tmp/elo-doc.md', md);
let body = execSync('npx marked --input /tmp/elo-doc.md', { encoding: 'utf8' });

// ─── VISUAL FLOW: Fluxo de Lembretes ──────────────────────────────────────────
const REMINDER_FLOW = `
<div class="flow-diagram">
  <div class="flow-ctx">DIA ANTERIOR AO AGENDAMENTO</div>
  <div class="flow-steps">
    <div class="flow-step">
      <div class="step-num">1</div>
      <div class="step-body">
        <span class="step-title">Lembrete 1 enviado</span>
        <div class="flow-branches">
          <div class="br-yes"><span class="bdg-yes">SIM confirma</span> Encerra — sem novas mensagens</div>
          <div class="br-no"><span class="bdg-no">NÃO confirma</span> Passa para o Lembrete 2</div>
        </div>
      </div>
    </div>
    <div class="flow-step">
      <div class="step-num">2</div>
      <div class="step-body">
        <span class="step-title">Lembrete 2</span> <span class="step-note">— algumas horas depois</span>
        <div class="flow-branches">
          <div class="br-yes"><span class="bdg-yes">SIM confirma</span> Encerra — sem novas mensagens</div>
          <div class="br-no"><span class="bdg-no">NÃO confirma</span> Passa para o Lembrete 3</div>
        </div>
      </div>
    </div>
    <div class="flow-step">
      <div class="step-num">3</div>
      <div class="step-body">
        <span class="step-title">Lembrete 3</span> <span class="step-note">— último aviso</span>
      </div>
    </div>
  </div>
  <div class="flow-divider"></div>
  <div class="flow-ctx">DIA SEGUINTE À CONSULTA</div>
  <div class="flow-steps">
    <div class="flow-step">
      <div class="step-num">+</div>
      <div class="step-body">
        <span class="step-title">Pós-consulta</span> — "como foi?" + link para avaliação Google
      </div>
    </div>
  </div>
  <div class="flow-caption">Cada agendamento gera entre <strong>1 e 4 mensagens</strong> dependendo de quando o cliente confirma.</div>
</div>
`;
body = body.replace(/<pre><code>Dia anterior ao agendamento[\s\S]*?<\/code><\/pre>/, REMINDER_FLOW);

// ─── VISUAL FLOW: Cobrança da Meta ────────────────────────────────────────────
const BILLING_FLOW = `
<div class="flow-diagram billing-diagram">
  <div class="flow-steps">
    <div class="flow-step">
      <div class="step-num">1</div>
      <div class="step-body">
        <span class="step-title">Lembrete 1</span> — template enviado <span class="bdg-charged">COBRADO</span>
        <div class="flow-branches">
          <div class="br-yes"><span class="bdg-yes">Cliente responde</span> Janela 24h aberta → próximas mensagens <strong>gratuitas</strong></div>
          <div class="br-no"><span class="bdg-no">Silêncio</span> Lembrete 2 precisa de novo template</div>
        </div>
      </div>
    </div>
    <div class="flow-step">
      <div class="step-num">2</div>
      <div class="step-body">
        <span class="step-title">Lembrete 2</span> — novo template <span class="bdg-charged">COBRADO</span>
        <div class="flow-branches">
          <div class="br-yes"><span class="bdg-yes">Cliente responde</span> Janela aberta → <strong>gratuito</strong></div>
          <div class="br-no"><span class="bdg-no">Silêncio</span> Lembrete 3 precisa de novo template</div>
        </div>
      </div>
    </div>
    <div class="flow-step">
      <div class="step-num">3</div>
      <div class="step-body">
        <span class="step-title">Lembrete 3</span> — novo template <span class="bdg-charged">COBRADO</span>
      </div>
    </div>
    <div class="flow-step">
      <div class="step-num">+</div>
      <div class="step-body">
        <span class="step-title">Pós-consulta</span> (dia seguinte) — template <span class="bdg-charged">COBRADO</span>
      </div>
    </div>
  </div>
</div>
`;
body = body.replace(/<pre><code>Lembrete 1[\s\S]*?<\/code><\/pre>/, BILLING_FLOW);

// ─── TABELA COMPARATIVA ────────────────────────────────────────────────────────
const COMPARISON_TABLE = `
<div class="overview-wrap">
  <table class="overview-table">
    <thead>
      <tr>
        <th></th>
        <th>A — Não oficial</th>
        <th>B — 100% Oficial</th>
        <th class="col-rec">C — Híbrido</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Custo mensal</td>
        <td>R$ 0</td>
        <td>~R$ 32–39/mês</td>
        <td class="col-rec">~R$ 32–39/mês</td>
      </tr>
      <tr>
        <td>Risco bloqueio (operação diária)</td>
        <td class="cell-danger">Alto</td>
        <td class="cell-safe">Muito baixo</td>
        <td class="col-rec cell-safe">Baixo</td>
      </tr>
      <tr>
        <td>Campanhas de marketing</td>
        <td>Grátis (com risco)</td>
        <td>+R$ 160/campanha</td>
        <td class="col-rec">Grátis (número separado)</td>
      </tr>
      <tr>
        <td>Configuração inicial</td>
        <td>Nenhuma</td>
        <td>3–5 dias úteis</td>
        <td class="col-rec">3–5 dias úteis</td>
      </tr>
      <tr>
        <td>Relatório de entrega</td>
        <td class="cell-danger">Não</td>
        <td class="cell-safe">Sim</td>
        <td class="col-rec cell-safe">Sim (lembretes)</td>
      </tr>
    </tbody>
  </table>
  <p class="table-note">Detalhes de cada opção nas seções abaixo.</p>
</div>
`;
body = body.replace(
  /(<h2>As tr[êe]s op[çc][õo]es<\/h2>)/i,
  '$1' + COMPARISON_TABLE
);

// ─── OPTION CARDS ──────────────────────────────────────────────────────────────
body = body.replace(
  /(<h3>)(.*?)(<\/h3>)([\s\S]*?)(?=<hr|<h2|<h3|$)/g,
  '<div class="option-card"><h3>$2</h3>$4</div>\n'
);

// ─── RECOMENDAÇÃO ──────────────────────────────────────────────────────────────
body = body.replace(
  /(<h2>[^<]*recomenda[^<]*<\/h2>)([\s\S]*?)(?=<h2>|$)/i,
  '$1<div class="recommendation-block">$2</div>\n'
);

// ─── KEEP-TOGETHER ──────────────────────────────────────────────────────────────
// Agrupa cada título (h2) + seus parágrafos introdutórios + a 1ª lista num bloco
// que NÃO pode ser quebrado entre páginas. Assim o conjunto migra inteiro para a
// próxima página quando não cabe — nunca racha título/intro/lista no meio.
body = body.replace(
  /(<h2>.*?<\/h2>\s*(?:<p>(?:(?!<\/p>)[\s\S])*?<\/p>\s*)*(?:<(ul|ol)>[\s\S]*?<\/\2>\s*)?)/g,
  '<div class="keep">$1</div>\n'
);

// ─── HTML ──────────────────────────────────────────────────────────────────────
const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --canvas:         #07080c;
    --surface:        #0a0b11;
    --surface-ink:    #111118;
    --ink:            #F2F2F0;
    --primary:        #00D4FF;
    --primary-bd:     rgba(0,212,255,0.12);
    --primary-bd-hi:  rgba(0,212,255,0.28);
    --primary-fill:   rgba(0,212,255,0.05);
    --card-bg:        rgba(255,255,255,0.03);
    --hairline:       rgba(255,255,255,0.06);
    --hairline-ghost: rgba(255,255,255,0.12);
    --body-muted:     rgba(255,255,255,0.45);
    --divider-tip:    #00ffcc;
    --green:          #22d3a0;
    --orange:         #f97316;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; max-width: 100%; }

  /* garante fundo escuro até nas margens de página */
  html {
    background: var(--canvas);
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 9.5pt;
    line-height: 1.72;
    color: var(--ink);
    background: var(--canvas);
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    overflow-x: hidden;
  }

  /* ── HEADER ── */
  .doc-header {
    background: var(--surface);
    padding: 16px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo-wrap img { height: 28px; width: auto; display: block; }
  .doc-meta { text-align: right; }
  .meta-label {
    display: block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 7pt;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--primary);
  }
  .meta-value {
    display: block;
    font-size: 8pt;
    color: var(--body-muted);
    margin-top: 2px;
  }

  /* ── LED DIVIDER ── */
  .led-divider {
    height: 1px;
    background: linear-gradient(to right,
      transparent 0%, var(--primary) 28%,
      var(--divider-tip) 50%, var(--primary) 72%, transparent 100%);
    box-shadow: 0 0 14px 3px rgba(0,212,255,0.4), 0 0 40px 8px rgba(0,212,255,0.1);
  }

  /* ── TITLE BAND ── */
  .title-band {
    background: var(--canvas);
    padding: 24px 48px 20px;
    border-bottom: 1px solid var(--hairline);
  }
  .section-label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
  }
  .section-label .ln { display: inline-block; width: 20px; height: 1px; background: var(--hairline-ghost); }
  .section-label .tx {
    font-family: 'JetBrains Mono', monospace;
    font-size: 7pt;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--body-muted);
  }
  .title-band h1 {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 22pt;
    line-height: 1.05;
    letter-spacing: -0.025em;
    color: var(--ink);
    margin-bottom: 8px;
  }
  .title-band h1 .accent { color: var(--primary); }
  .doc-subtitle { font-size: 9pt; color: var(--body-muted); line-height: 1.6; }

  /* ── CONTENT ── */
  .content { padding: 24px 48px 0; }
  .content h1 { display: none; }

  /* ── RODAPÉ (flui no fim do documento, não-fixo → sem branco, sem overlap) ── */
  .doc-footer {
    margin-top: 28px;
    background: var(--surface);
    border-top: 1px solid var(--hairline-ghost);
    padding: 12px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .doc-footer .fb {
    font-family: 'JetBrains Mono', monospace;
    font-size: 7pt;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--body-muted);
  }
  .doc-footer .fb .ac { color: var(--primary); }
  .doc-footer .fu {
    font-family: 'JetBrains Mono', monospace;
    font-size: 7pt;
    letter-spacing: 0.06em;
    color: var(--body-muted);
  }

  /* ── HEADINGS ── */
  h2 {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 12pt;
    letter-spacing: -0.02em;
    color: var(--ink);
    margin: 24px 0 10px;
    padding-bottom: 7px;
    border-bottom: 1px solid var(--hairline);
    page-break-after: avoid;
    display: flex;
    align-items: center;
    gap: 9px;
  }
  h2::before {
    content: '';
    flex-shrink: 0;
    display: inline-block;
    width: 3px;
    height: 0.8em;
    background: var(--primary);
    border-radius: 2px;
    opacity: 0.75;
  }
  h3 {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 10.5pt;
    letter-spacing: -0.01em;
    color: var(--primary);
    margin: 0 0 10px;
    page-break-after: avoid;
  }

  /* ── OPTION CARDS ── */
  .option-card {
    background: var(--card-bg);
    border: 1px solid var(--primary-bd);
    border-radius: 8px;
    padding: 16px 20px 14px;
    margin: 10px 0;
    page-break-inside: avoid;
    box-shadow: rgba(255,255,255,0.04) 0px 0.5px 0px 0.5px, rgba(0,0,0,0.4) 0px 6px 20px;
  }

  /* ── RECOMMENDATION ── */
  .recommendation-block {
    background: rgba(0,212,255,0.05);
    border: 1px solid var(--primary-bd-hi);
    border-radius: 8px;
    padding: 14px 18px;
    margin: 8px 0;
    page-break-inside: avoid;
  }

  /* ── PARAGRAPHS / LISTS ── */
  p { margin: 0 0 7px; color: rgba(242,242,240,0.88); orphans: 3; widows: 3; }
  ul, ol { padding-left: 18px; margin: 4px 0 9px; break-inside: avoid; page-break-inside: avoid; }
  li { margin-bottom: 3px; color: rgba(242,242,240,0.85); break-inside: avoid; }
  li strong { color: var(--ink); }
  strong { color: var(--ink); font-weight: 600; }
  em { color: var(--body-muted); }

  /* grupo título+intro+lista — não quebra entre páginas (migra inteiro) */
  .keep { break-inside: avoid; page-break-inside: avoid; }

  /* ── TABLES ── */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 10px 0 14px;
    font-size: 8.5pt;
    page-break-inside: avoid;
    table-layout: fixed;
    word-break: break-word;
  }
  thead { background: var(--surface-ink); }
  thead th {
    padding: 7px 10px;
    text-align: left;
    font-weight: 600;
    font-size: 7.5pt;
    letter-spacing: 0.06em;
    color: var(--primary);
    border-bottom: 1px solid var(--primary-bd);
    overflow: hidden;
  }
  tbody tr { border-bottom: 1px solid var(--hairline); }
  tbody tr:nth-child(even) { background: rgba(255,255,255,0.02); }
  tbody td { padding: 6px 10px; color: rgba(242,242,240,0.82); vertical-align: top; overflow: hidden; }

  /* ── OVERVIEW TABLE ── */
  .overview-wrap { margin: 12px 0 18px; page-break-inside: avoid; }
  .overview-table { font-size: 8.5pt; }
  .overview-table thead th { font-size: 8pt; color: var(--body-muted); }
  .overview-table thead th.col-rec { background: rgba(0,212,255,0.1); color: var(--primary); }
  .overview-table tbody .col-rec {
    background: rgba(0,212,255,0.04);
    border-left: 1px solid var(--primary-bd);
    border-right: 1px solid var(--primary-bd);
    color: rgba(242,242,240,0.9);
  }
  .cell-danger { color: var(--orange); font-weight: 600; }
  .cell-safe   { color: var(--green);  font-weight: 600; }
  .table-note  { font-size: 7.5pt; color: var(--body-muted); text-align: center; margin-top: 5px; font-style: italic; }

  /* ── BLOCKQUOTE ── */
  blockquote {
    background: rgba(255,255,255,0.025);
    border-left: 2px solid var(--primary);
    padding: 9px 14px 9px 13px;
    margin: 10px 0;
    border-radius: 0 6px 6px 0;
    page-break-inside: avoid;
  }
  blockquote p { font-size: 8.5pt; color: var(--body-muted); margin: 0; font-style: italic; }

  /* ── CODE (fallback for any remaining pre) ── */
  pre {
    background: var(--surface-ink);
    border: 1px solid var(--hairline);
    padding: 10px 14px;
    border-radius: 6px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 7.5pt;
    line-height: 1.55;
    margin: 8px 0 12px;
    white-space: pre-wrap;
    word-break: break-all;
    overflow: hidden;
    page-break-inside: avoid;
    color: rgba(0,212,255,0.8);
  }
  code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 8pt;
    background: rgba(255,255,255,0.06);
    color: var(--primary);
    padding: 1px 4px;
    border-radius: 3px;
  }
  pre code { background: transparent; padding: 0; font-size: 7.5pt; }

  hr { border: none; border-top: 1px solid var(--hairline); margin: 14px 0; }

  /* ── VISUAL FLOW DIAGRAMS ── */
  .flow-diagram {
    background: var(--surface-ink);
    border: 1px solid var(--hairline-ghost);
    border-radius: 8px;
    padding: 14px 16px;
    margin: 10px 0 14px;
    page-break-inside: avoid;
  }
  .flow-ctx {
    font-family: 'JetBrains Mono', monospace;
    font-size: 7pt;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--primary);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .flow-ctx::before {
    content: '';
    display: inline-block;
    width: 14px;
    height: 1px;
    background: var(--primary);
    flex-shrink: 0;
  }
  .flow-steps { display: flex; flex-direction: column; gap: 7px; }
  .flow-step  { display: flex; gap: 10px; align-items: flex-start; }
  .step-num {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    background: rgba(0,212,255,0.08);
    border: 1px solid var(--primary-bd);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'JetBrains Mono', monospace;
    font-size: 7pt;
    color: var(--primary);
    font-weight: 500;
  }
  .step-body { flex: 1; padding-top: 1px; font-size: 9pt; color: rgba(242,242,240,0.88); }
  .step-title { font-weight: 600; color: var(--ink); }
  .step-note  { font-size: 8.5pt; color: var(--body-muted); }

  .flow-branches { margin-top: 5px; display: flex; flex-direction: column; gap: 3px; }
  .br-yes, .br-no {
    font-size: 8pt;
    padding: 3px 8px;
    border-radius: 4px;
    display: flex;
    align-items: baseline;
    gap: 6px;
    flex-wrap: wrap;
  }
  .br-yes { background: rgba(0,212,255,0.04); border: 1px solid rgba(0,212,255,0.08); color: rgba(242,242,240,0.82); }
  .br-no  { background: rgba(255,255,255,0.025); border: 1px solid var(--hairline); color: var(--body-muted); }

  .bdg-yes {
    font-family: 'JetBrains Mono', monospace;
    font-size: 6.5pt;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--green);
    background: rgba(34,211,160,0.1);
    border: 1px solid rgba(34,211,160,0.2);
    padding: 1px 5px;
    border-radius: 3px;
    flex-shrink: 0;
  }
  .bdg-no {
    font-family: 'JetBrains Mono', monospace;
    font-size: 6.5pt;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 1px 5px;
    border-radius: 3px;
    flex-shrink: 0;
  }
  .bdg-charged {
    font-family: 'JetBrains Mono', monospace;
    font-size: 6.5pt;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--orange);
    background: rgba(249,115,22,0.1);
    border: 1px solid rgba(249,115,22,0.2);
    padding: 1px 5px;
    border-radius: 3px;
  }

  .flow-divider { height: 1px; background: var(--hairline); margin: 10px 0; }
  .flow-caption { font-size: 8pt; color: var(--body-muted); margin-top: 9px; font-style: italic; }

  @media print {
    table, pre, blockquote, .option-card, .recommendation-block,
    .flow-diagram, .overview-wrap { page-break-inside: avoid; }
    h2, h3 { page-break-after: avoid; }
  }
</style>
</head>
<body>

<div class="doc-header">
  <div class="logo-wrap"><img src="${logoSrc}" alt="Eloscope"></div>
  <div class="doc-meta">
    <span class="meta-label">Confidencial</span>
    <span class="meta-value">ReabilitaCão · 22/05/2026</span>
  </div>
</div>

<div class="led-divider"></div>

<div class="title-band">
  <div class="section-label">
    <span class="ln"></span>
    <span class="tx">Análise Técnica · WhatsApp API</span>
  </div>
  <h1>WhatsApp Oficial <span class="accent">vs</span> Não Oficial</h1>
  <p class="doc-subtitle">O que muda para a ReabilitaCão — preparado por Victor (Eloscope) após reunião de 22/05/2026.</p>
</div>

<div class="content">
${body}
</div>

<div class="doc-footer">
  <span class="fb">Eloscope <span class="ac">·</span> AI Studio</span>
  <span class="fu">eloscope.com.br</span>
</div>

</body>
</html>`;

const htmlPath = '/tmp/elo-whatsapp-doc.html';
writeFileSync(htmlPath, html);
console.log('HTML gerado:', htmlPath);

const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
const page = await browser.newPage();
await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });

// margin: 0 em todos os lados — zero zonas de margem gerenciadas pelo Playwright,
// portanto zero faixas brancas. O background escuro do html/body preenche a página
// inteira. O rodapé flui no fim do conteúdo (não-fixo) — não esconde conteúdo.
await page.pdf({
  path: outPath,
  format: 'A4',
  margin: { top: '0', bottom: '0', left: '0', right: '0' },
  printBackground: true,
  displayHeaderFooter: false,
});

await browser.close();
console.log('PDF gerado:', outPath);
