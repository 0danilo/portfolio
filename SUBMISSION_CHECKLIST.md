# Assignment readiness review

Reviewed November 6, 2026 against the supplied assignment instructions.

## Verified

| Requirement | Status and evidence |
| :-- | :-- |
| Public GitHub repository named portfolio | Pass. The public GitHub API reports `0danilo/portfolio` with `private: false`. |
| Working GitHub Pages website | Pass. https://0danilo.github.io/portfolio/ returns HTTP 200. |
| AGENTS.md covering pages, design, implementation and Git | Pass. Updated to include Skills and the current light/dark palettes. |
| Five pages with background, education, interests, skills and contact information | Pass. Projects now includes the three owner-provided projects with descriptions, images and links. |
| Plain HTML, CSS and JavaScript; external stylesheet; relative local paths | Pass. No application framework or build step. Test dependencies are separate from website code. |
| Semantic landmarks and one h1 per page | Pass. Checked all five local page files; live heading-order regression is recorded in TESTING.md. |
| Responsive layout | Pass in browser emulation at 390 x 844 and 1440 x 900, with full-page screenshots. |
| At least two JavaScript interactions | Pass. Responsive menu and persistent light/dark toggle; keyboard Escape closes the menu. |
| Accessibility and image sizes | Pass for the recorded checks. Image alt attributes, keyboard navigation and focus tested; Lighthouse Accessibility is 100 on each page; all website image files are below 500 KB. |
| At least 12 documented live tests with steps, expected and actual results | Pass. TESTING.md contains 54 cases, screenshots and test evidence. |
| Failure, fix and live retest recorded | Pass. Home heading-order issue and Lighthouse 98 to 100 retest are documented. |
| README with description, live link, local viewing and acknowledgments | Pass. Updated during this review. |
| Work over multiple days | Pass. Local commit history includes October 19, 22, 26, 29 and November 2 and 5, 2026. |
| One to two page report with links, features, challenges, Codex mistake and screenshots | Prepared in output/pdf/portfolio-report.pdf; editable source in docs/portfolio-report.html. |

## Still required or owner confirmation needed

1. **Project link access:** Three owner-provided projects are included, and all three cards now use owner-provided screenshots. Confirm an instructor can open all three external project links. The Onshape model viewer could not be verified in the test browser; its screenshot is visible directly on the portfolio.
2. **GitHub Pages settings:** The live deployment works, but the unauthenticated Pages settings API did not expose the source configuration. In GitHub Settings > Pages, confirm the branch is `main` and the folder is `/ (root)` as required.
3. **Owner review and demo:** Review the report and code, confirm the personal content, and practice the three-minute demo on a phone and laptop, including keyboard navigation and explaining the JavaScript. Physical devices and the owner's ability to explain the code cannot be verified from browser emulation.
4. **Submit the report:** Upload the PDF to the assignment yourself. No learning-management-system upload has been performed.

After adding projects or changing the site, rerun the affected live tests, update TESTING.md and regenerate the report if its descriptions or screenshots change.
