
# Portfolio site instructions

## Owner review

The site has been developed through owner review and incremental edits. Keep
these instructions aligned with the current pages and design.

## Site and pages

Build a personal portfolio that introduces me, showcases my projects and skills,
and gives visitors a way to contact me.

- `index.html`: Home page with a short introduction and featured projects.
- `about.html`: About page with my background, skills, and interests.
- `projects.html`: Projects page with descriptions and links to demos and source code.
- `skills.html`: Skills page with technical skills and current proficiency.
- `contact.html`: Contact page with my email and relevant profile links.

The Projects page currently uses a work-in-progress design. The assignment
requires three real projects; add only owner-provided project content.

Use owner-provided content. Do not invent credentials, work history, project
results, or contact information.

## Design

- Style: clean, minimal, friendly, and professional, with generous whitespace,
  clear headings, and a consistent layout across pages.
- Light theme: off-white background (`#fafcf9`), pale green surfaces (`#f0f5ee`),
  dark text (`#17251b`), slate secondary text (`#47694c`), green accents (`#176c32`).
- Dark theme: black background (`#050505`), dark green surfaces (`#141b15`),
  light text (`#e9f3e8`), secondary text (`#b2c6b4`), green accents (`#4cfc5a`),
  and dark grey borders (`#414241`).
- Fonts: use the system sans-serif stack: `system-ui, -apple-system,
  BlinkMacSystemFont, "Segoe UI", sans-serif`.
- Make layouts responsive for phones, tablets, and desktops.
- Use semantic HTML, readable contrast, visible keyboard focus, descriptive link
  text, and appropriate image alternative text.
- Keep animations subtle and respect reduced-motion preferences.

## Implementation rules

- Use plain HTML, CSS, and JavaScript only. No frameworks or component libraries.
- Use relative file paths for local pages, stylesheets, scripts, and images.
  External destinations may use full URLs.
- Keep shared styles in `css/styles.css`, scripts in `js/`, and images in
  `images/` as needed.
- Keep the site static and easy to maintain. Add JavaScript only when it serves
  a clear interaction.
- Check affected pages, navigation, and responsive layouts after each task.

## Git workflow

- Complete and verify one task at a time.
- After each task, commit its changes with a clear, descriptive message.
- Push each task commit to GitHub on the current branch.
- Review the diff before committing, include only relevant changes, and never
  commit secrets.
- If a commit or push fails, report the issue accurately and resolve it before
  continuing when possible.
