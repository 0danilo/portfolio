# Personal portfolio

A responsive, static five-page portfolio built with plain HTML, CSS, and JavaScript.

Open `index.html` in a browser. No build step or dependencies are required.

- Home: introduction and navigation.
- About Me: background, education, and interests.
- Projects: three illustrated project layouts.
- Skills: technical skills and proficiency prompts.
- Contact: a space for the owner's contact details.

The mobile menu supports Escape to close and returns focus to its button. The
theme toggle follows the system preference initially and remembers a visitor's
choice when browser storage is available. Navigation remains available without
JavaScript.

## Personalize before publishing

Personal details were not supplied. Bracketed text is intentionally unfinished;
the example projects and illustrations do not represent completed work. Replace
them with three real project descriptions, screenshots, and applicable links.
Add your introduction, education, interests, actual skills and proficiency levels,
and contact email. Use a `mailto:` link for the email; there is no backend or
message-sending form. Each replacement image must be under 500 KB and have
meaningful alternative text.

## Verification

Headless Chrome checks passed on all five pages at 390px and 1440px viewport
widths: one h1 per page, no horizontal overflow, images load with alt text,
mobile menu visibility and activation, Escape handling and focus restoration,
desktop navigation visibility, and theme switching. Local asset and page links
were checked. The three SVG illustrations are each under 1 KB.

Lighthouse has not been run: this environment has Chrome but no Node/npm or
Lighthouse CLI. To finish the requested accessibility audit, serve this folder
locally, open each page in Chrome, and use DevTools → Lighthouse → Accessibility
→ Analyze page load. Check mobile and desktop, aim for 90 or higher, and address
any findings. Also manually Tab through each page and confirm visible focus,
logical order, and activation with Enter/Space.
