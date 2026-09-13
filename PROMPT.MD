# Personal Website — bernardomcma.dev

## Context

I want you to build my personal website at:

**Domain:** `bernardomcma.dev`
**GitHub repository:** `github.com/bernardomcma/bernardomcma.dev`

The website will eventually be deployed using **Cloudflare Pages**, connected directly to this GitHub repository.

This is my personal website and professional hub. It should **not** feel like a generic developer portfolio or a template.

The goal is to create a website that communicates:

> **"esse cara constrói coisas."**

It should represent me as a person who works across **software, data and BI**, while leaving room for the site to evolve as I build more projects.

---

# 1. Before coding

**Do not immediately start implementing the website.**

First:

1. Inspect the repository.
2. Think through the site's information architecture.
3. Decide the visual direction.
4. Decide the technical structure.
5. Explain your proposed approach.
6. Identify anything that should remain a placeholder because I haven't provided enough information.

After presenting the proposal, wait for further instructions before doing the full implementation.

Do not invent personal, academic, professional or career information.

---

# 2. Overall visual direction

I want the website to feel:

* Dark
* Minimal
* Sophisticated
* Premium
* Modern
* Technical without looking sterile
* Personal
* Confident
* Clean
* Fast

Think more along the lines of a **high-end personal brand / modern digital identity** than a traditional developer portfolio.

## Avoid

Do **not** make it look like:

* A Bootstrap template
* A generic SaaS landing page
* A typical "developer portfolio"
* A résumé converted into HTML
* A collection of random cards
* An AI-generated portfolio template

Avoid excessive:

* Gradients
* Glassmorphism
* Rounded cards everywhere
* Giant glowing text
* Decorative animations
* Floating blobs
* Stock photography
* Skill progress bars
* Fake percentages
* "10+ years of experience" style filler
* Generic motivational copy
* "Hi, I'm Bernardo, a passionate developer..." type introductions

The design should have personality through **typography, spacing, hierarchy, composition and subtle interactions**, rather than visual effects everywhere.

---

# 3. Brand / identity

Name:

**Bernardo MCMA**

Primary positioning:

**Software · Data · BI**

The name **MCMA** should be treated as part of the visual identity.

The website should feel like a central hub for:

* My professional identity
* My projects
* My GitHub
* My social profiles
* My future CV
* Future professional contact
* Future projects and experiments

Do not over-explain the meaning of MCMA unless there is a clear reason to do so.

---

# 4. Homepage structure

The homepage can be a single-page experience initially, but structure the code so it can evolve into multiple pages later.

Suggested sections:

1. Hero
2. About
3. Selected Projects
4. Education / Experience
5. Links / Contact
6. Footer

You can adjust this structure if you have a better UX solution, but explain why before implementation.

---

# 5. Hero section

The hero is the most important section.

It should immediately communicate the identity without being verbose.

Suggested content:

### Bernardo MCMA

**Software · Data · BI**

The hero should include links to:

* Instagram
* LinkedIn
* GitHub

Social links:

* Instagram: `https://www.instagram.com/bernardomcma/`
* LinkedIn: `https://www.linkedin.com/in/bernardomcma/`
* GitHub: `https://github.com/bernardomcma`

The exact visual treatment is up to you, but it should feel intentional and premium.

Do not add unnecessary paragraphs to the hero.

---

# 6. About section

Keep this section relatively short.

It should communicate who I am professionally and what I work with, without sounding like a formal résumé.

Relevant areas include:

* Software development
* Data
* Business Intelligence
* Python
* SQL
* Data visualization
* Information Systems

Do not invent:

* Job titles
* Companies
* Dates
* Achievements
* Metrics
* Certifications
* Projects I haven't mentioned

If information is missing, use a clear `TODO` placeholder rather than inventing it.

The writing should feel natural and human.

---

# 7. Selected Projects

This section should showcase projects rather than simply listing technologies.

## Project: Lock In

Name:

**Lock In**

Description:

> A Google Chrome extension created to help maintain focus during study or work sessions. It blocks distracting websites, records access attempts and displays a report at the end of the session.

GitHub:

`https://github.com/bernardomcma/lockin-chrome-extension`

Chrome Web Store:

`https://chromewebstore.google.com/detail/nmhiefdklgehchcbmphhloepfolmdkkd`

The project card should prioritize the **GitHub repository** as the main destination.

The Chrome Web Store link can appear as a secondary action such as:

**Install**

or

**Chrome Web Store**

The project presentation should focus on:

* What the project does
* Why it exists
* The problem it solves
* The fact that it is a real published project

Do not turn the card into a huge list of technologies.

---

## Future projects

The architecture should make it easy to add additional projects later.

For now, do not invent projects.

You may create placeholders such as:

```text
TODO: Add next project
```

but don't display obvious unfinished placeholders in the production design unless necessary.

---

# 8. Education / Experience

Include a section for education and experience.

Known information:

**Universidade Federal de Ouro Preto (UFOP)**
**Sistemas de Informação**

I am currently studying Information Systems.

Do not invent:

* Graduation date
* Job titles
* Company names
* Internships
* Dates
* Responsibilities
* Achievements

If additional information is required for the final design, leave structured TODOs in the code/content for me to fill later.

The section should feel more like a concise timeline or identity section than a giant résumé.

---

# 9. Links / Contact

Create a simple area for important links.

Initially:

* Instagram
* LinkedIn
* GitHub

Future possibilities:

* Professional email
* CV
* Projects
* Other platforms
* Personal experiments

Do not create fake email addresses.

If an email is needed for layout purposes, use a TODO placeholder in the source rather than inventing a real address.

---

# 10. Navigation

Create a simple navigation system appropriate for the chosen design.

Possible structure:

```text
Bernardo MCMA

About
Projects
Experience
Links
```

You can simplify or modify this if the visual design works better without a traditional navbar.

The navigation should not take over the page.

---

# 11. Typography

Typography is extremely important to the design.

Prioritize:

* Strong hierarchy
* Excellent spacing
* Readability
* Distinctive headings
* Clean body text

The website should feel premium primarily through typography and layout.

If using external fonts, choose them intentionally and keep performance in mind.

---

# 12. Animations

Use animations sparingly.

Good examples:

* Subtle entrance transitions
* Hover states
* Small movement on interactive elements
* Smooth scrolling
* Project interaction

Avoid:

* Constant motion
* Excessive parallax
* Huge page transitions
* Animation for the sake of animation

Respect:

```css
prefers-reduced-motion
```

---

# 13. Responsive design

The site must work extremely well on:

* Desktop
* Laptop
* Tablet
* Mobile

Do not simply shrink the desktop design.

The mobile version should be intentionally designed.

Pay particular attention to:

* Typography
* Navigation
* Spacing
* Touch targets
* Project cards
* Social links
* Horizontal overflow

---

# 14. Accessibility

Implement good accessibility practices.

Include:

* Semantic HTML
* Proper heading hierarchy
* Accessible navigation
* Keyboard navigation
* Visible focus states
* Appropriate contrast
* Descriptive link labels
* Alt text where applicable
* Reduced-motion support

Do not sacrifice accessibility for visual effects.

---

# 15. Performance

The website should be extremely lightweight.

Prioritize:

* Fast loading
* Minimal JavaScript
* Optimized assets
* No unnecessary dependencies
* No huge libraries for simple functionality

If a feature can be implemented with vanilla HTML/CSS/JS, prefer that over adding a dependency.

---

# 16. Technology

Prefer a simple static architecture.

Ideal starting point:

* HTML
* CSS
* JavaScript

A framework can be used only if there is a strong reason.

Do **not** introduce a complex stack simply because this is a developer website.

The final project should be easy for me to understand, modify and maintain.

---

# 17. SEO

Prepare the site properly for search engines and link previews.

Include:

* `<title>`
* Meta description
* Canonical URL
* Open Graph metadata
* Twitter/X card metadata
* Favicon
* `robots.txt`
* `sitemap.xml`

Canonical URL:

`https://bernardomcma.dev`

Make the metadata feel professional and specific to the website.

Do not use generic descriptions such as:

> "Welcome to my personal website."

---

# 18. Favicon / visual identity

Create a simple favicon based on the personal identity.

Possible directions:

* `B`
* `MCMA`
* A minimal monogram

Choose the option that fits the visual identity best.

Do not create a complicated logo.

---

# 19. Code quality

Keep the code:

* Clean
* Organized
* Readable
* Maintainable
* Semantic
* Properly structured

Avoid unnecessary abstraction.

Use meaningful naming.

Keep content easy to update.

If possible, separate:

* Content
* Layout
* Styling
* Interactions

in a sensible way.

---

# 20. Cloudflare Pages compatibility

The project will be deployed through:

**GitHub → Cloudflare Pages → bernardomcma.dev**

Make sure the project can be deployed as a static site without unnecessary server-side requirements.

Do not add Cloudflare-specific complexity unless required.

---

# 21. GitHub README

Create a useful README explaining:

* What the project is
* Tech stack
* Local development
* Project structure
* Deployment
* How to update content

Keep it concise and professional.

---

# 22. Content philosophy

The website should communicate:

> **This is a person who builds things.**

Not:

> "Here are 47 technologies I know."

Projects and actual work should carry more weight than lists of skills.

Do not use fake skill levels such as:

```text
Python — 95%
SQL — 90%
JavaScript — 80%
```

If technologies are mentioned, do it naturally.

---

# 23. Personal tone

The copy should be:

* Direct
* Confident
* Natural
* Concise
* Human

Avoid corporate buzzwords.

Avoid exaggerated claims.

Avoid phrases like:

> "passionate about leveraging cutting-edge technologies to drive innovative solutions."

The website should sound like an actual person, not an HR-generated résumé.

---

# 24. Future scalability

Build the architecture so I can eventually add:

* More projects
* A dedicated `/projects` page
* A CV
* Professional email
* Project case studies
* Blog / notes
* Experiments
* More social links
* Custom 404 page

But **do not implement unnecessary future features now**.

Build a strong foundation first.

---

# 25. Development process

Follow this process:

### Phase 1 — Analyze

Inspect the repository and requirements.

### Phase 2 — Propose

Before coding, present:

* Information architecture
* Visual direction
* Typography proposal
* Color direction
* Component/section structure
* Technical approach
* File structure

Wait for approval.

### Phase 3 — Implement

Build the website according to the approved direction.

### Phase 4 — Review

After implementation:

* Check responsiveness
* Check accessibility
* Check SEO
* Check performance
* Check links
* Check visual consistency
* Check for unnecessary elements

### Phase 5 — Polish

Remove anything that feels:

* Generic
* Excessive
* Artificial
* Unnecessary
* Template-like

The final result should feel intentional.

### Phase 6 — Prepare for deployment

Make sure the repository is ready to connect to Cloudflare Pages.

---

# Final principle

When making design decisions, prioritize:

**Identity > clarity > typography > spacing > content > subtle interaction > decoration**

The website should feel like **Bernardo MCMA's website**, not like a portfolio template with my name replaced.
