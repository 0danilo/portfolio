# Danilo Fuentes Portfolio

A five-page personal portfolio built with plain HTML, CSS and JavaScript. It introduces me, shares my NJIT education and interests, lists my current Python experience, and provides my personal and school email links.

**Live website:** https://0danilo.github.io/portfolio/

**Repository:** https://github.com/0danilo/portfolio

## Pages and features

- **Home:** introduction and links to the rest of the site.
- **About Me:** background, education, NJIT logo and hobbies.
- **Projects:** an Onshape scooter design, a slideshow about my NJIT major, and a psychology presentation about memorable slogans and jingles, followed by an animated coming-soon section.
- **Skills:** Python and my current proficiency, with room for future skills.
- **Contact:** personal and school email links that open Gmail compose. There is no message-sending backend or contact form.

Shared navigation, a responsive mobile menu, light/dark mode, visible keyboard focus and a skip-to-content link work across the pages. The theme follows the system preference until a visitor chooses one; browser storage remembers that choice when available. Animations respect reduced-motion preferences.

## View locally

1. Clone or download this repository.
2. Open the folder in VS Code.
3. Open `index.html` in a browser, or use VS Code Live Preview and open its preview URL.
4. Use the navigation to visit all five pages.

No build step, framework or dependency installation is needed to view the website. Styles are in `css/styles.css`, JavaScript is in `js/main.js`, and illustrations are in `images/`. Local links use relative paths.

## Testing and documentation

[TESTING.md](TESTING.md) records 54 live-site test cases covering every page's navigation, phone/laptop layouts, keyboard access, JavaScript features and Lighthouse Accessibility. Final Lighthouse scores are 100/100 on all five pages. The initial Home heading-order failure, fix and retest are recorded there, along with screenshots and reproducible test commands.

The latest recorded browser tests use emulated 390 x 844 and 1440 x 900 viewports. They do not represent physical-device testing or a full manual accessibility audit. Test tools are separate from the buildless website.

The submission report is in [output/pdf/portfolio-report.pdf](output/pdf/portfolio-report.pdf). The remaining submission checks are tracked in [SUBMISSION_CHECKLIST.md](SUBMISSION_CHECKLIST.md).

## Notes and acknowledgments

- Codex helped write and revise the HTML, CSS, JavaScript, illustrations and documentation through iterative requests.
- The NJIT logo comes from [NJIT's official website](https://www.njit.edu/themes/custom/njit/img/logo.svg) and identifies my school.
- The Projects loading graphic was inspired by the work-in-progress references supplied during development and implemented with HTML and CSS.
- Personal content is based on owner-provided details. The site does not claim completed projects that have not been supplied.
- GitHub Pages hosts the live website. Review changes before submitting, and rerun affected tests after future site edits.

All three project previews use owner-provided screenshots: the Onshape scooter deck, a psychology slide about brand recall, and the major presentation cover. Each image fits fully inside a consistent 16:9 preview area without cropping or stretching. Outgoing project-card links were removed at the owner's request.
