// Run with Node.js and Playwright installed outside the static site's source.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs = require('node:fs');
const path = require('node:path');
const base = 'https://0danilo.github.io/portfolio/';
const pages = ['index.html', 'about.html', 'projects.html', 'skills.html', 'contact.html'];
const output = process.env.TEST_OUTPUT || path.join(require('node:os').tmpdir(), 'portfolio-live-tests');
const results = [];
function check(condition, message) { if (!condition) throw new Error(message); }
async function test(testing, steps, expected, run) {
  try { const detail = await run(); results.push({ testing, steps, expected, result: 'Pass', detail: detail || '' }); }
  catch (error) { results.push({ testing, steps, expected, result: 'Fail', detail: error.message }); }
  console.log(results.at(-1).result, testing);
}
(async () => {
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 }, colorScheme: 'light' });
  const phone = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 1, colorScheme: 'light' });
  const dp = await desktop.newPage(), mp = await phone.newPage();
  for (const file of pages) {
    await test(`${file} navigation`, 'At laptop size, click Home, About Me, Projects, Skills, Contact, and the Portfolio brand; check other local page links.', 'Every navigation destination loads with HTTP 200 and the correct active link.', async () => {
      await dp.goto(base + file);
      const links = await dp.locator('#site-nav a').evaluateAll(nodes => nodes.map(n => n.getAttribute('href')));
      check(JSON.stringify(links) === JSON.stringify(pages), 'Missing navigation link');
      for (const target of [...pages, 'brand']) {
        await dp.goto(base + file);
        const nav = target === 'brand' ? dp.locator('.brand') : dp.locator(`#site-nav a[href="${target}"]`);
        const responsePromise = dp.waitForResponse(r => r.request().isNavigationRequest() && r.request().resourceType() === 'document');
        await nav.click();
        check((await responsePromise).status() === 200, 'Navigation HTTP failure');
        check(dp.url() === base + (target === 'brand' ? 'index.html' : target), 'Wrong destination');
        check(await dp.locator('#site-nav [aria-current="page"]').getAttribute('href') === (target === 'brand' ? 'index.html' : target), 'Wrong active navigation item');
      }
      await dp.goto(base + file);
      const local = await dp.locator('main a, footer a').evaluateAll(nodes => nodes.map(n => n.getAttribute('href')).filter(h => h && !h.includes(':') && !h.startsWith('#')));
      for (const href of local) check((await desktop.request.get(base + href)).status() === 200, `Broken ${href}`);
      return 'All five navigation links, brand, and local content/footer links passed.';
    });
    for (const [label, page, width] of [['laptop', dp, 1440], ['phone', mp, 390]]) {
      await test(`${file} ${label} layout`, `Open the live page at ${width} × ${label === 'phone' ? 844 : 900}; check document width, headings, images and controls.`, 'HTTP 200; one h1; no horizontal overflow; all images load; navigation is appropriate for the viewport.', async () => {
        check((await page.goto(base + file)).status() === 200, 'Page did not load');
        await page.locator('footer').scrollIntoViewIfNeeded();
        await page.evaluate(async () => { await Promise.all([...document.images].map(i => i.decode().catch(() => {}))); window.scrollTo(0, 0); });
        check(await page.locator('h1').count() === 1, 'Expected one h1');
        check(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Horizontal overflow');
        check(await page.evaluate(() => [...document.images].every(i => i.complete && i.naturalWidth > 0 && i.hasAttribute('alt'))), 'Missing/broken image or alt attribute');
        check(await page.locator('.menu-toggle').isVisible() === (label === 'phone'), 'Wrong menu control visibility');
        check(await page.locator('#site-nav').isVisible() === (label === 'laptop'), 'Wrong navigation visibility');
        await page.screenshot({ path: path.join(output, `${file.replace('.html','')}-${label}.png`), fullPage: true });
        return 'Automated layout checks passed; screenshot saved. Physical devices not used.';
      });
    }
    await test(`${file} phone menu and navigation`, 'At 390px, open and close Menu; reopen and press Escape; open and follow each navigation link; then open and resize to laptop and back.', 'Menu toggles with aria-expanded; Escape closes and returns focus; all five links work; resize clears the open state.', async () => {
      await mp.goto(base + file);
      await mp.locator('.menu-toggle').click();
      check(await mp.locator('#site-nav').isVisible(), 'Menu did not open');
      check(await mp.locator('.menu-toggle').getAttribute('aria-expanded') === 'true', 'Incorrect expanded state');
      await mp.locator('.menu-toggle').click();
      check(!await mp.locator('#site-nav').isVisible(), 'Menu did not close');
      await mp.locator('.menu-toggle').click(); await mp.keyboard.press('Escape');
      check(!await mp.locator('#site-nav').isVisible(), 'Escape did not close');
      check(await mp.locator('.menu-toggle').evaluate(n => n === document.activeElement), 'Escape did not restore focus');
      for (const target of pages) {
        await mp.goto(base + file); await mp.locator('.menu-toggle').click();
        await mp.locator(`#site-nav a[href="${target}"]`).click();
        check(mp.url() === base + target, `Phone link failed: ${target}`);
      }
      await mp.goto(base + file); await mp.locator('.menu-toggle').click();
      await mp.setViewportSize({width:1440,height:900});
      await mp.waitForFunction(() => document.querySelector('.menu-toggle').getAttribute('aria-expanded') === 'false');
      await mp.setViewportSize({width:390,height:844});
      check(!await mp.locator('#site-nav').isVisible(), 'Menu remained open after resize');
    });
    await test(`${file} keyboard Tab and Enter`, 'On laptop, Tab to skip link and press Enter; Tab through every navigation link and activate each with Enter. On phone, Tab to Menu and activate with Enter.', 'Skip link reaches main; Tab reaches every navigation link with visible focus; Enter follows links and opens the phone menu.', async () => {
      await dp.goto(base + file); await dp.keyboard.press('Tab');
      check(await dp.locator('.skip').evaluate(n => n === document.activeElement), 'Skip link not first');
      await dp.keyboard.press('Enter');
      check(await dp.locator('main').evaluate(n => n === document.activeElement), 'Skip link failed');
      for (const target of pages) {
        await dp.goto(base + file);
        let found = false;
        for (let i=0;i<16;i++) {
          await dp.keyboard.press('Tab');
          if (await dp.locator(`#site-nav a[href="${target}"]`).evaluate(n => n === document.activeElement)) { found=true; break; }
        }
        check(found, `Cannot Tab to ${target}`);
        check(await dp.evaluate(() => {const s=getComputedStyle(document.activeElement); return s.outlineStyle !== 'none' && parseFloat(s.outlineWidth)>0;}), 'No keyboard focus outline');
        await Promise.all([dp.waitForNavigation({waitUntil:'load'}), dp.keyboard.press('Enter')]);
        check(dp.url() === base + target, 'Enter navigation failed');
      }
      await mp.goto(base + file);
      for (let i=0;i<3;i++) await mp.keyboard.press('Tab');
      check(await mp.locator('.menu-toggle').evaluate(n => n === document.activeElement), 'Cannot Tab to phone Menu');
      await mp.keyboard.press('Enter'); check(await mp.locator('#site-nav').isVisible(), 'Enter did not open phone Menu');
    });
    await test(`${file} theme toggle and persistence`, 'Select light mode; click theme button to dark and back; select dark and reload.', 'Both themes update page, button text and aria-pressed; saved dark choice survives reload.', async () => {
      await dp.goto(base + file); await dp.evaluate(() => localStorage.removeItem('portfolio-theme')); await dp.reload();
      check(await dp.locator('html').getAttribute('data-theme') === 'light', 'Initial light theme failed');
      for (const theme of ['dark','light','dark']) {
        await dp.locator('.theme-toggle').click();
        check(await dp.locator('html').getAttribute('data-theme') === theme, 'Theme did not switch');
        check(await dp.locator('.theme-toggle').getAttribute('aria-pressed') === String(theme==='dark'), 'Theme state mismatch');
        check(await dp.locator('.theme-toggle').innerText() === (theme==='dark'?'Light mode':'Dark mode'), 'Theme label mismatch');
      }
      await dp.reload(); check(await dp.locator('html').getAttribute('data-theme') === 'dark', 'Theme did not persist');
    });
    await test(`${file} system theme preference`, 'In fresh storage, emulate dark then light system preference; save a manual dark choice and change system preference.', 'Without saved choice, theme follows OS changes; saved manual choice overrides OS.', async () => {
      await dp.goto(base+file); await dp.evaluate(() => localStorage.removeItem('portfolio-theme')); await dp.emulateMedia({colorScheme:'dark'}); await dp.reload();
      check(await dp.locator('html').getAttribute('data-theme') === 'dark', 'System dark ignored');
      await dp.emulateMedia({colorScheme:'light'}); await dp.waitForFunction(() => document.documentElement.dataset.theme === 'light');
      await dp.locator('.theme-toggle').click(); await dp.emulateMedia({colorScheme:'dark'}); await dp.emulateMedia({colorScheme:'light'});
      check(await dp.locator('html').getAttribute('data-theme') === 'dark', 'Manual theme overridden');
    });
    await test(`${file} unavailable browser storage`, 'Deny localStorage access before loading the page; toggle the theme and phone menu.', 'Storage errors do not break JavaScript; theme and menu still work.', async () => {
      const context = await browser.newContext({viewport:{width:390,height:844}});
      try {
        await context.addInitScript(() => Object.defineProperty(window, 'localStorage', {get(){throw new DOMException('Storage denied','SecurityError');}}));
        const page = await context.newPage(); const errors=[]; page.on('pageerror', e=>errors.push(e.message));
        await page.goto(base+file);
        const theme=await page.locator('html').getAttribute('data-theme');
        await page.locator('.theme-toggle').click();
        check(await page.locator('html').getAttribute('data-theme') !== theme, 'Theme failed without storage');
        await page.locator('.menu-toggle').click(); check(await page.locator('#site-nav').isVisible(), 'Menu failed without storage');
        check(errors.length===0, errors.join('; '));
      } finally { await context.close(); }
    });
    await test(`${file} JavaScript disabled fallback`, 'Disable JavaScript and load the live page at phone width.', 'All five navigation links remain visible and usable; the nonfunctional theme toggle stays hidden.', async () => {
      const context = await browser.newContext({viewport:{width:390,height:844},javaScriptEnabled:false});
      try {
        const page=await context.newPage(); await page.goto(base+file);
        check(await page.locator('#site-nav').isVisible(), 'Fallback navigation hidden');
        for (const target of pages) check(await page.locator(`#site-nav a[href="${target}"]`).isVisible(), 'Fallback link hidden');
        check(!await page.locator('.theme-toggle').isVisible(), 'Nonfunctional theme button exposed');
      } finally {await context.close();}
    });
  }
  await test('Projects reduced motion', 'Open Projects; compare normal motion with prefers-reduced-motion: reduce.', 'Loading bar animates normally and stays static for reduced motion.', async () => {
    await dp.goto(base+'projects.html'); await dp.emulateMedia({reducedMotion:'no-preference'});
    check(await dp.locator('.wip-track span').evaluate(n => getComputedStyle(n).animationName) === 'wip-fill', 'Normal animation missing');
    await dp.emulateMedia({reducedMotion:'reduce'});
    check(await dp.locator('.wip-track span').evaluate(n => getComputedStyle(n).animationName) === 'none', 'Reduced motion ignored');
  });
  await test('Home heading hierarchy', 'Inspect the live Home page heading levels in document order.', 'Headings descend one level at a time; Home cards use h2 after the page h1.', async () => {
    await dp.goto(base+'index.html');
    const levels=await dp.locator('h1,h2,h3,h4,h5,h6').evaluateAll(nodes=>nodes.map(n=>Number(n.tagName.slice(1))));
    check(levels.every((level,i)=>i===0 || level<=levels[i-1]+1), 'Heading level skipped');
  });
  await test('Contact email destinations', 'Inspect and activate both email links in the Contact panel.', 'Each opens a new tab with Gmail compose URL and the correct recipient.', async () => {
    await dp.goto(base+'contact.html');
    for (const recipient of ['danifuentes9780@gmail.com','daf48@njit.edu']) {
      const link=dp.locator(`main a`).filter({hasText:recipient});
      const popupPromise=dp.waitForEvent('popup'); await link.click(); const popup=await popupPromise;
      await popup.waitForLoadState('domcontentloaded').catch(()=>{});
      check(new URL(await link.getAttribute('href')).searchParams.get('to') === recipient, 'Wrong email recipient');
      await popup.close();
    }
    return 'Compose targets and new-tab activation checked; no email sent; Gmail sign-in/delivery not tested.';
  });
  await test('Project cards without outgoing links', 'Open Projects at phone and laptop sizes; inspect all three cards, preview proportions and descriptions; confirm the cards contain no links.', 'Three project cards retain loaded 16:9 images and descriptions, with no outgoing card links.', async () => {
    for (const page of [mp,dp]) {
      await page.goto(base+'projects.html');
      const cards=page.locator('.project-card'); check(await cards.count()===3,'Expected three project cards');
      for (let i=0;i<3;i++) {
        const card=cards.nth(i), img=card.locator('figure img'); await img.scrollIntoViewIfNeeded();
        await img.evaluate(n=>n.decode());
        const box=await img.boundingBox(); check(Math.abs(box.width/box.height-16/9)<0.02,'Preview aspect ratio incorrect');
        check(await card.locator('.card-body>p:not(.eyebrow)').innerText() !== '', 'Missing description');
        check(await card.locator('a').count()===0,'Unexpected project card link');
      }
    }
    return 'Card content and local previews checked; outgoing links were removed at the owner\'s request.';
  });
  await browser.close();
  fs.writeFileSync(path.join(output,'functional-results.json'),JSON.stringify({base,runAt:new Date().toISOString(),results},null,2));
  console.log(JSON.stringify({total:results.length,failed:results.filter(r=>r.result==='Fail')}));
})().catch(e=>{console.error(e);process.exitCode=1;});
