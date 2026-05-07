const puppeteer = require('puppeteer');
const path = require('path');

const slides = ['01-capa', '02-evidencia', '03-o-que-mudou', '04-traduzindo', '05-acao', '06-cta'];

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--allow-file-access-from-files', '--disable-web-security'],
  });
  const page = await browser.newPage();

  await page.setViewport({ width: 1120, height: 1390, deviceScaleFactor: 3 });

  for (const slide of slides) {
    const file = path.resolve(__dirname, `html/${slide}.html`);
    await page.goto(`file://${file}`, { waitUntil: 'networkidle0' });

    // Wait for fonts to load
    await page.evaluateHandle('document.fonts.ready');

    const outPath = path.resolve(__dirname, `png/${slide}.png`);
    await page.screenshot({
      path: outPath,
      clip: { x: 20, y: 20, width: 1080, height: 1350 },
    });

    console.log(`✓ ${slide}.png`);
  }

  await browser.close();
  console.log('\nTodos os slides exportados em png/');
})();
