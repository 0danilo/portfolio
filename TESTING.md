# Live website test plan and results

Repository: https://github.com/0danilo/portfolio

Live website: https://0danilo.github.io/portfolio/

## Test environment and scope

All website tests below ran against the deployed GitHub Pages URLs, not local files or Live Preview. The final functional run tested the three-project update in commit `3d1dc70` after it was visible on GitHub Pages. The earlier heading-order fix and its retest remain recorded below.

- Browser: installed Google Chrome, headless, driven by Playwright.
- Phone-sized viewport: 390 × 844 CSS pixels, with touch and mobile emulation enabled.
- Laptop-sized viewport: 1440 × 900 CSS pixels.
- Lighthouse: version 13.6.0, Accessibility category, default mobile configuration and a fresh browser profile. Target: 100/100 with no failed scored accessibility audits.
- Full-page screenshots of every page at both sizes were captured and visually reviewed for wrapping, clipping, image placement and card layout. See the screenshot links below.
- These are browser-emulated sizes, not tests on physical phones or laptops. Lighthouse is an automated accessibility check, not a guarantee of complete accessibility or a substitute for screen-reader testing.
- The site has no contact form or form-validation JavaScript. Valid and invalid form input tests do not apply. Contact links open Gmail compose; email sending and account sign-in are outside this test scope.

The five navigation links are Home (`index.html`), About Me (`about.html`), Projects (`projects.html`), Skills (`skills.html`) and Contact (`contact.html`). Each page's navigation case checks all five links plus the Portfolio brand; its phone-menu case also activates all five links. Local content and footer page links are checked for HTTP 200 responses.

Final functional run timestamp (UTC): 2026-11-06T05:20:46.265Z

## Test cases

| ID | What is tested | Steps to run | Expected result | Actual result |
| :-- | :-- | :-- | :-- | :-- |
| T1 | index.html navigation | At laptop size, click Home, About Me, Projects, Skills, Contact, and the Portfolio brand; check other local page links. | Every navigation destination loads with HTTP 200 and the correct active link. | Pass |
| T2 | index.html laptop layout | Open the live page at 1440 x 900; check document width, headings, images and controls. | HTTP 200; one h1; no horizontal overflow; all images load; navigation is appropriate for the viewport. | Pass; screenshot reviewed, no clipped content or horizontal overflow. |
| T3 | index.html phone layout | Open the live page at 390 x 844; check document width, headings, images and controls. | HTTP 200; one h1; no horizontal overflow; all images load; navigation is appropriate for the viewport. | Pass; screenshot reviewed, no clipped content or horizontal overflow. |
| T4 | index.html phone menu and navigation | At 390px, open and close Menu; reopen and press Escape; open and follow each navigation link; then open and resize to laptop and back. | Menu toggles with aria-expanded; Escape closes and returns focus; all five links work; resize clears the open state. | Pass |
| T5 | index.html keyboard Tab and Enter | On laptop, Tab to skip link and press Enter; Tab through every navigation link and activate each with Enter. On phone, Tab to Menu and activate with Enter. | Skip link reaches main; Tab reaches every navigation link with visible focus; Enter follows links and opens the phone menu. | Pass |
| T6 | index.html theme toggle and persistence | Select light mode; click theme button to dark and back; select dark and reload. | Both themes update page, button text and aria-pressed; saved dark choice survives reload. | Pass |
| T7 | index.html system theme preference | In fresh storage, emulate dark then light system preference; save a manual dark choice and change system preference. | Without saved choice, theme follows OS changes; saved manual choice overrides OS. | Pass |
| T8 | index.html unavailable browser storage | Deny localStorage access before loading the page; toggle the theme and phone menu. | Storage errors do not break JavaScript; theme and menu still work. | Pass |
| T9 | index.html JavaScript disabled fallback | Disable JavaScript and load the live page at phone width. | All five navigation links remain visible and usable; the nonfunctional theme toggle stays hidden. | Pass |
| T10 | about.html navigation | At laptop size, click Home, About Me, Projects, Skills, Contact, and the Portfolio brand; check other local page links. | Every navigation destination loads with HTTP 200 and the correct active link. | Pass |
| T11 | about.html laptop layout | Open the live page at 1440 x 900; check document width, headings, images and controls. | HTTP 200; one h1; no horizontal overflow; all images load; navigation is appropriate for the viewport. | Pass; screenshot reviewed, no clipped content or horizontal overflow. |
| T12 | about.html phone layout | Open the live page at 390 x 844; check document width, headings, images and controls. | HTTP 200; one h1; no horizontal overflow; all images load; navigation is appropriate for the viewport. | Pass; screenshot reviewed, no clipped content or horizontal overflow. |
| T13 | about.html phone menu and navigation | At 390px, open and close Menu; reopen and press Escape; open and follow each navigation link; then open and resize to laptop and back. | Menu toggles with aria-expanded; Escape closes and returns focus; all five links work; resize clears the open state. | Pass |
| T14 | about.html keyboard Tab and Enter | On laptop, Tab to skip link and press Enter; Tab through every navigation link and activate each with Enter. On phone, Tab to Menu and activate with Enter. | Skip link reaches main; Tab reaches every navigation link with visible focus; Enter follows links and opens the phone menu. | Pass |
| T15 | about.html theme toggle and persistence | Select light mode; click theme button to dark and back; select dark and reload. | Both themes update page, button text and aria-pressed; saved dark choice survives reload. | Pass |
| T16 | about.html system theme preference | In fresh storage, emulate dark then light system preference; save a manual dark choice and change system preference. | Without saved choice, theme follows OS changes; saved manual choice overrides OS. | Pass |
| T17 | about.html unavailable browser storage | Deny localStorage access before loading the page; toggle the theme and phone menu. | Storage errors do not break JavaScript; theme and menu still work. | Pass |
| T18 | about.html JavaScript disabled fallback | Disable JavaScript and load the live page at phone width. | All five navigation links remain visible and usable; the nonfunctional theme toggle stays hidden. | Pass |
| T19 | projects.html navigation | At laptop size, click Home, About Me, Projects, Skills, Contact, and the Portfolio brand; check other local page links. | Every navigation destination loads with HTTP 200 and the correct active link. | Pass |
| T20 | projects.html laptop layout | Open the live page at 1440 x 900; check document width, headings, images and controls. | HTTP 200; one h1; no horizontal overflow; all images load; navigation is appropriate for the viewport. | Pass; screenshot reviewed, no clipped content or horizontal overflow. |
| T21 | projects.html phone layout | Open the live page at 390 x 844; check document width, headings, images and controls. | HTTP 200; one h1; no horizontal overflow; all images load; navigation is appropriate for the viewport. | Pass; screenshot reviewed, no clipped content or horizontal overflow. |
| T22 | projects.html phone menu and navigation | At 390px, open and close Menu; reopen and press Escape; open and follow each navigation link; then open and resize to laptop and back. | Menu toggles with aria-expanded; Escape closes and returns focus; all five links work; resize clears the open state. | Pass |
| T23 | projects.html keyboard Tab and Enter | On laptop, Tab to skip link and press Enter; Tab through every navigation link and activate each with Enter. On phone, Tab to Menu and activate with Enter. | Skip link reaches main; Tab reaches every navigation link with visible focus; Enter follows links and opens the phone menu. | Pass |
| T24 | projects.html theme toggle and persistence | Select light mode; click theme button to dark and back; select dark and reload. | Both themes update page, button text and aria-pressed; saved dark choice survives reload. | Pass |
| T25 | projects.html system theme preference | In fresh storage, emulate dark then light system preference; save a manual dark choice and change system preference. | Without saved choice, theme follows OS changes; saved manual choice overrides OS. | Pass |
| T26 | projects.html unavailable browser storage | Deny localStorage access before loading the page; toggle the theme and phone menu. | Storage errors do not break JavaScript; theme and menu still work. | Pass |
| T27 | projects.html JavaScript disabled fallback | Disable JavaScript and load the live page at phone width. | All five navigation links remain visible and usable; the nonfunctional theme toggle stays hidden. | Pass |
| T28 | skills.html navigation | At laptop size, click Home, About Me, Projects, Skills, Contact, and the Portfolio brand; check other local page links. | Every navigation destination loads with HTTP 200 and the correct active link. | Pass |
| T29 | skills.html laptop layout | Open the live page at 1440 x 900; check document width, headings, images and controls. | HTTP 200; one h1; no horizontal overflow; all images load; navigation is appropriate for the viewport. | Pass; screenshot reviewed, no clipped content or horizontal overflow. |
| T30 | skills.html phone layout | Open the live page at 390 x 844; check document width, headings, images and controls. | HTTP 200; one h1; no horizontal overflow; all images load; navigation is appropriate for the viewport. | Pass; screenshot reviewed, no clipped content or horizontal overflow. |
| T31 | skills.html phone menu and navigation | At 390px, open and close Menu; reopen and press Escape; open and follow each navigation link; then open and resize to laptop and back. | Menu toggles with aria-expanded; Escape closes and returns focus; all five links work; resize clears the open state. | Pass |
| T32 | skills.html keyboard Tab and Enter | On laptop, Tab to skip link and press Enter; Tab through every navigation link and activate each with Enter. On phone, Tab to Menu and activate with Enter. | Skip link reaches main; Tab reaches every navigation link with visible focus; Enter follows links and opens the phone menu. | Pass |
| T33 | skills.html theme toggle and persistence | Select light mode; click theme button to dark and back; select dark and reload. | Both themes update page, button text and aria-pressed; saved dark choice survives reload. | Pass |
| T34 | skills.html system theme preference | In fresh storage, emulate dark then light system preference; save a manual dark choice and change system preference. | Without saved choice, theme follows OS changes; saved manual choice overrides OS. | Pass |
| T35 | skills.html unavailable browser storage | Deny localStorage access before loading the page; toggle the theme and phone menu. | Storage errors do not break JavaScript; theme and menu still work. | Pass |
| T36 | skills.html JavaScript disabled fallback | Disable JavaScript and load the live page at phone width. | All five navigation links remain visible and usable; the nonfunctional theme toggle stays hidden. | Pass |
| T37 | contact.html navigation | At laptop size, click Home, About Me, Projects, Skills, Contact, and the Portfolio brand; check other local page links. | Every navigation destination loads with HTTP 200 and the correct active link. | Pass |
| T38 | contact.html laptop layout | Open the live page at 1440 x 900; check document width, headings, images and controls. | HTTP 200; one h1; no horizontal overflow; all images load; navigation is appropriate for the viewport. | Pass; screenshot reviewed, no clipped content or horizontal overflow. |
| T39 | contact.html phone layout | Open the live page at 390 x 844; check document width, headings, images and controls. | HTTP 200; one h1; no horizontal overflow; all images load; navigation is appropriate for the viewport. | Pass; screenshot reviewed, no clipped content or horizontal overflow. |
| T40 | contact.html phone menu and navigation | At 390px, open and close Menu; reopen and press Escape; open and follow each navigation link; then open and resize to laptop and back. | Menu toggles with aria-expanded; Escape closes and returns focus; all five links work; resize clears the open state. | Pass |
| T41 | contact.html keyboard Tab and Enter | On laptop, Tab to skip link and press Enter; Tab through every navigation link and activate each with Enter. On phone, Tab to Menu and activate with Enter. | Skip link reaches main; Tab reaches every navigation link with visible focus; Enter follows links and opens the phone menu. | Pass |
| T42 | contact.html theme toggle and persistence | Select light mode; click theme button to dark and back; select dark and reload. | Both themes update page, button text and aria-pressed; saved dark choice survives reload. | Pass |
| T43 | contact.html system theme preference | In fresh storage, emulate dark then light system preference; save a manual dark choice and change system preference. | Without saved choice, theme follows OS changes; saved manual choice overrides OS. | Pass |
| T44 | contact.html unavailable browser storage | Deny localStorage access before loading the page; toggle the theme and phone menu. | Storage errors do not break JavaScript; theme and menu still work. | Pass |
| T45 | contact.html JavaScript disabled fallback | Disable JavaScript and load the live page at phone width. | All five navigation links remain visible and usable; the nonfunctional theme toggle stays hidden. | Pass |
| T46 | Projects reduced motion | Open Projects; compare normal motion with prefers-reduced-motion: reduce. | Loading bar animates normally and stays static for reduced motion. | Pass |
| T47 | Home heading hierarchy | Inspect the live Home page heading levels in document order. | Headings descend one level at a time; Home cards use h2 after the page h1. | Fail initially: h1 skipped to h3 (Lighthouse heading-order finding). Pass on retest: h1 followed by h2. |
| T48 | Contact email destinations | Inspect and activate both email links in the Contact panel. | Each opens a new tab with Gmail compose URL and the correct recipient. | Pass; new tabs and recipient parameters checked, no message sent. |
| T49 | Lighthouse Accessibility — index.html | Open https://0danilo.github.io/portfolio/index.html in Chrome. Run DevTools → Lighthouse → Accessibility, Mobile, Analyze page load (or use the CLI below). | 100/100; no failed scored accessibility audits. | Fail initially: 98/100, heading-order audit failed. Pass after fix: 100/100, no failed scored audits. |
| T50 | Lighthouse Accessibility — about.html | Open https://0danilo.github.io/portfolio/about.html in Chrome. Run DevTools → Lighthouse → Accessibility, Mobile, Analyze page load (or use the CLI below). | 100/100; no failed scored accessibility audits. | Pass: 100/100. |
| T51 | Lighthouse Accessibility — projects.html | Open https://0danilo.github.io/portfolio/projects.html in Chrome. Run DevTools → Lighthouse → Accessibility, Mobile, Analyze page load (or use the CLI below). | 100/100; no failed scored accessibility audits. | Pass: 100/100. |
| T52 | Lighthouse Accessibility — skills.html | Open https://0danilo.github.io/portfolio/skills.html in Chrome. Run DevTools → Lighthouse → Accessibility, Mobile, Analyze page load (or use the CLI below). | 100/100; no failed scored accessibility audits. | Pass: 100/100. |
| T53 | Lighthouse Accessibility — contact.html | Open https://0danilo.github.io/portfolio/contact.html in Chrome. Run DevTools → Lighthouse → Accessibility, Mobile, Analyze page load (or use the CLI below). | 100/100; no failed scored accessibility audits. | Pass: 100/100. |
| T54 | Project cards without outgoing links | Open Projects at phone and laptop sizes; inspect all three cards, preview proportions and descriptions; confirm there are no links inside the cards. | Three cards retain loaded 16:9 images and descriptions, with no outgoing card links. | Pass on live retest after link removal. |

## Failure and retest record

| Case | Initial result | Fix | Live retest result |
| :-- | :-- | :-- | :-- |
| T47 Home heading hierarchy | Fail. The Home cards used h3 immediately after the page h1, skipping h2. | Changed the three card headings to h2 and updated their CSS selectors to keep the card styling. Pushed commit `88f3db3`, then confirmed the deployed Home page contained four h2 headings and no h3 headings. | Pass. The browser test confirmed no skipped heading levels on the live page. |
| T49 Home Lighthouse Accessibility | Fail against the 100/100 target: 98/100, with `heading-order` failing. | The same heading fix described above. | Pass: 100/100 with no failed scored accessibility audits. |

During local preview of the project update, the slide images initially stretched vertically because their HTML height attributes were not overridden. Setting `height: auto` on the project preview images fixed the proportions before publication. T54 now checks 16:9 proportions on both live viewports.

The first functional test-runner attempt also reported failures because it checked URLs before Enter-triggered navigation had finished, interrupting later tests. This was a test-harness timing defect, not a confirmed website defect. The runner was corrected to await navigation. Both the initial results and final rerun are retained in the evidence folder; the final 49 functional cases all passed. A preliminary runner API error was also corrected before collecting the initial result file.

Final outcome: **54 test cases passed** (49 functional/fallback cases and 5 Lighthouse cases). There are no outstanding confirmed website failures from this test run.

The project update added one functional case (T54). Home and Projects were audited again after publication and both scored 100/100. The other three pages retain their earlier 100/100 audit results; their page content did not change.

After replacing all three previews with owner-supplied screenshots (commit `a11a9db`), T54 was retested on the live site at both viewport sizes. All three live image hashes matched the supplied files; images were below 500 KB, rendered in 16:9 frames with contain sizing, and produced no horizontal overflow. The phone menu also passed. Targeted retest timestamp (UTC): 2026-11-06T05:34:46.611Z. This was an image-only refresh; the full functional and Lighthouse results above retain their original run timestamps.

The owner later removed all three outgoing project-card links in commit `99ed76a`. T54 was updated and retested on live GitHub Pages at phone and laptop sizes: no card links remained, all screenshots loaded with correct proportions, and no horizontal overflow was found. Live retest timestamp (UTC): 2026-11-06T05:48:22.522Z. The first deployment check reused a cached pre-deployment page; a fresh URL confirmed the update. Earlier outgoing-link checks are historical results from before this requested change.

## Lighthouse scores and evidence

| Page | Initial score | Final score |
| :-- | :-- | :-- |
| Home | 98 | 100 |
| About Me | 100 | 100 |
| Projects | 100 | 100 |
| Skills | 100 | 100 |
| Contact | 100 | 100 |

- [Final functional results](tests/evidence/functional-results.json)
- [Initial test-runner results before correcting navigation waits](tests/evidence/runner-initial.json)
- [Initial Lighthouse summary with timestamps, version and failed audit IDs](tests/evidence/lighthouse-initial.json)
- [Home Lighthouse retest summary](tests/evidence/lighthouse-home-retest.json)
- [Home and Projects audits after adding the three project cards](tests/evidence/lighthouse-project-update.json)
- [Live screenshot replacement retest with image hashes](tests/evidence/project-screenshot-refresh.json)
- [Live project-link removal retest](tests/evidence/project-link-removal.json)

| Page | Phone screenshot | Laptop screenshot |
| :-- | :-- | :-- |
| Home | [390px](tests/evidence/screenshots/index-phone.png) | [1440px](tests/evidence/screenshots/index-laptop.png) |
| About Me | [390px](tests/evidence/screenshots/about-phone.png) | [1440px](tests/evidence/screenshots/about-laptop.png) |
| Projects | [390px](tests/evidence/screenshots/projects-phone.png) | [1440px](tests/evidence/screenshots/projects-laptop.png) |
| Skills | [390px](tests/evidence/screenshots/skills-phone.png) | [1440px](tests/evidence/screenshots/skills-laptop.png) |
| Contact | [390px](tests/evidence/screenshots/contact-phone.png) | [1440px](tests/evidence/screenshots/contact-laptop.png) |

## Running the tests again

The website remains buildless. Testing tools are installed separately and are not needed to view the site. With Node.js, npm and Google Chrome installed, these PowerShell commands install test dependencies outside the repository:

```powershell
$testTools = Join-Path $env:TEMP 'portfolio-test-tools'
npm install --prefix $testTools playwright lighthouse
$env:PLAYWRIGHT_MODULE = Join-Path $testTools 'node_modules/playwright'
$env:CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
$env:TEST_OUTPUT = Join-Path $env:TEMP 'portfolio-live-tests'
node tests/live-site.cjs
```

Adjust `CHROME_PATH` if Chrome is installed elsewhere. The runner always uses the live GitHub Pages base URL. It saves JSON results and ten screenshots in `TEST_OUTPUT`; any reported Fail should be investigated and retested.

Run Lighthouse on every live page:

```powershell
foreach ($page in @('index', 'about', 'projects', 'skills', 'contact')) {
  node "$testTools/node_modules/lighthouse/cli/index.js" `
    "https://0danilo.github.io/portfolio/$page.html" `
    --only-categories=accessibility `
    --chrome-flags="--headless --no-first-run" `
    --output=json `
    --output-path="$env:TEST_OUTPUT/$page-lighthouse.json" `
    --quiet
}
```

For manual visual review, open each live page with Chrome's device toolbar at 390 × 844 and 1440 × 900. Scroll the entire page, check text and images, use Tab and Enter on navigation and controls, and confirm the visible keyboard focus outline. If the site changes, repeat the affected cases and update this record with the new results and timestamps.