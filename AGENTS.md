
# Portfolio site instructions

## Owner review

This is a draft for the repository owner to review and edit before building starts.
The page plan and design below are proposed defaults, pending that review.

## Site and pages

Build a personal portfolio that introduces me, showcases my projects and skills,
and gives visitors a way to contact me.

- `index.html`: Home page with a short introduction and featured projects.
- `about.html`: About page with my background, skills, and interests.
- `projects.html`: Projects page with descriptions and links to demos and source code.
- `contact.html`: Contact page with my email and relevant profile links.

Use owner-provided content. Do not invent credentials, work history, project
results, or contact information.

## Design

- Style: clean, minimal, friendly, and professional, with generous whitespace,
  clear headings, and a consistent layout across pages.
- Colors: black background (`#050505`), dark grey surfaces (`#414241`), light green
  text (`#4cfc5a`), slate secondary text (`#47694c`), and green accents (`#25eb53`).
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
