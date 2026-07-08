
# Priya D'Souza — AI PM Portfolio

Building a premium, minimalist portfolio inspired by akshita-portfolio.website, following the PRD's design system exactly.

## Design System (from PRD)
- **Palette:** Primary `#111827`, Secondary `#1F2937`, Accent `#4F46E5`, Hover `#6366F1`, Light bg `#F8FAFC`, White cards, Light gray `#6B7280`, Success `#10B981`
- **Fonts:** Poppins Bold (headings) + Inter (body), loaded via `<link>` in `__root.tsx`
- **Icons:** Lucide (outline)
- **Motion:** Framer Motion (motion/react) — fade up, slide, hover lift, subtle button glow. No excessive movement.
- **Cards:** Rounded, white, soft shadows, generous whitespace

## Route Architecture
Each section gets its own route with unique SEO metadata (title, description, og:*):
- `/` — Hero + featured highlights (landing)
- `/projects` — AI Projects grid (Serenity, Wealth Compass, AI Job Agent)
- `/projects/$slug` — Individual project case study pages
- `/process` — "How I Work as a Product Manager" lifecycle flow
- `/experience` — Career timeline with impact metrics
- `/about` — Bio + skills
- `/contact` — Contact form + links

Sticky top nav across all routes. Sticky bottom CTA on mobile.

## Page Contents

### Home (`/`)
- **Hero:** Left — "Hi, I'm Priya 👋" (Poppins Bold XL), subheading "AI Product Manager, US Citizen — Available for Global Opportunities", tagline block, two CTAs (View Projects / Download Resume). Right — rounded portrait placeholder with soft indigo gradient.
- **Featured Projects preview:** 3 cards linking to full project pages
- **Snapshot stats:** 7+ years, 95+ payer orgs, 70% delivery speed, 30% error reduction
- **Process teaser** → link to `/process`
- **Contact CTA band** → "Let's Build Something Together"

### Projects (`/projects`)
Grid of 3 premium cards with filter chips (AI, Healthcare, Automation, Analytics):
1. **Serenity** — geriatric healthcare AI agent (external link bit.ly/4oRQCOZ + case study)
2. **Wealth Compass (FinPulse AI)** — investment dashboard (bit.ly/4ybnYNe)
3. **AI Job Agent** — n8n + Docker + Gemini + Perplexity workflow (with architecture diagram from PRD)

### Project Detail (`/projects/$slug`)
Problem → Solution → Tech Stack → Product Decisions → Outcomes. Architecture diagram for AI Job Agent.

### Process (`/process`)
Vertical animated flow: Customer Problem → Discovery → Research → Prioritization (RICE/MoSCoW) → PRD → AI-assisted Prototyping → Eng Collaboration → Launch/GTM → Metrics/Iteration. Each step is a card with icon + short description.

### Experience (`/experience`)
Interactive vertical timeline:
- Propio Language Services — Product Owner / BA Manager (Aug '24–Jul '26)
- Synergen Health — Sr. BA (Jan '23–Jul '24)
- American Specialty Health — Sr. BA (Mar '12–Jun '16)
- Dale Carnegie Training — BA (Jun '10–Feb '12)
- ESRI — IT Developer Support Analyst (Aug '04–Nov '05)

Impact stats prominent at top.

### About (`/about`)
Bio + categorized skill chips: AI Product, AI Tools, Analytics, Product, EMR/EHRs, Healthcare, Cloud/Data. Education + certifications.

### Contact (`/contact`)
Centered elegant layout — email, LinkedIn (linkedin.com/in/priyasd), GitHub (github.com/writetopriyasd), phone. Simple contact form (client-side only for now; no backend). Download Resume button.

## Assets
- Generate a professional portrait placeholder illustration (or abstract avatar) for hero — respecting the indigo/navy palette
- Generate soft gradient background asset
- Use PRD's uploaded AI Job Agent architecture diagram (copy from parsed-documents)
- Resume PDF: placeholder link (user can upload later); Download button wired to `/resume.pdf` in `public/`

## Technical Notes
- TanStack Start file-based routes under `src/routes/`
- Update `__root.tsx` head with real title/description; add Google Fonts `<link>` for Poppins + Inter
- Add tokens to `src/styles.css` (`:root`) mapping to PRD hex values, converted to oklch where needed but keeping brand hex as CSS vars
- Install `motion` for animations; `lucide-react` for icons (likely already present)
- Each route: unique `head()` with title/description/og:title/og:description; project detail pages set og:image from project hero
- Sticky nav component, mobile-responsive with hamburger menu
- Dark mode toggle (per PRD tech stack)
- Accessibility: semantic HTML, alt text, aria labels, focus rings, WCAG AA contrast

## Nice-to-haves (deferred unless approved)
AI recruiter chatbot, blog, filterable gallery beyond basic filter, animated tech-stack viz. I'll ship the core PRD scope first; call out these as follow-ups.

## Deliverable Order
1. Design tokens + fonts + root head metadata
2. Shared layout (nav, footer, mobile CTA)
3. Home + Hero
4. Projects list + 3 detail pages (with architecture diagram)
5. Process, Experience, About, Contact
6. Motion polish + responsive QA
