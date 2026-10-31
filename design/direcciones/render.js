// Genera los PNG de cada dirección visual (escritorio y móvil, página completa).
// Uso: node render.js [a-cine] [b-editorial] [c-bold]
const { chromium } = require('playwright');
const path = require('path');
const dir = __dirname;
const names = process.argv.slice(2).length ? process.argv.slice(2) : ['a-cine', 'b-editorial', 'c-bold'];

(async () => {
  const browser = await chromium.launch();
  for (const n of names) {
    const url = 'file://' + path.join(dir, n + '.html');
    for (const [tag, vp, dsf] of [['escritorio', { width: 1440, height: 900 }, 1], ['movil', { width: 390, height: 844 }, 2]]) {
      const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: dsf });
      const page = await ctx.newPage();
      await page.goto(url, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(400);
      const out = path.join(dir, 'png', `${n}-${tag}.png`);
      await page.screenshot({ path: out, fullPage: true });
      console.log('ok', out);
      await ctx.close();
    }
  }
  await browser.close();
})();
