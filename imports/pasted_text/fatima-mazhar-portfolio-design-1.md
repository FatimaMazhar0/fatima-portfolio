Overview & Brief

Design a modern, single-page personal portfolio website for Fatima Mazhar, a Computer Science student and full-stack/AI developer. The site should feel like a portfolio built by a software engineer applying to startups and product companies: confident, technical, credible, not overly playful. Fully responsive (desktop, tablet, mobile).

Visual Design System

Theme: Dark mode primary (with good contrast), tech-forward.

Color palette:

Background: deep charcoal/navy — 
#0B0F19 (primary background), 
#111827 (section alt background/cards)
Text: off-white 
#F5F5F7 for headings, 
#9CA3AF (gray) for body/secondary text
Accent (primary): electric blue 
#3B82F6 or violet 
#7C5CFF — used for links, buttons, highlights, active nav state
Accent (secondary): teal 
#2DD4BF — used sparingly for tags/badges to add variety
Success/status green: 
#22C55E (used for "Live" badges, availability indicators)
Borders: subtle 
#1F2937 at 1px, with rgba(255,255,255,0.06) for card outlines

Typography:

Headings: Space Grotesk or Satoshi, Bold/SemiBold
Body: Inter, Regular/Medium
Type scale: H1 48–64px (hero name), H2 32–40px (section titles), H3 20–24px (card titles), Body 16px, Small/meta 13–14px
Line height 1.4–1.6 for body text, 1.1–1.2 for headings
Letter-spacing slightly tightened on large headings (-1% to -2%)

Spacing & grid:

12-column grid on desktop, max content width 1200px, centered with 24px+ side gutters
Section vertical padding: 96–120px desktop, 56–64px mobile
Base spacing unit: 8px (use multiples: 8, 16, 24, 32, 48, 64, 96)

Components:

Buttons: pill or 8px-radius rectangle, primary = filled accent color with white text, secondary = outlined 1px border with transparent background, both with a subtle hover state (slight brightness increase + 2px lift + shadow)
Cards: 12–16px corner radius, subtle 1px border, soft drop shadow on hover (translateY(-4px) + shadow), background slightly lighter than page background
Tags/pills (tech stack, skills): small rounded-full badges, 12–13px text, muted background with accent-colored text
Icons: outline-style icon set (Feather/Lucide style), consistent 20–24px size, accent color or muted gray depending on context

Imagery treatment:

Project screenshots shown inside a browser-chrome or phone-frame mockup (rounded corners matching device), not raw edge-to-edge images
Subtle gradient glow behind key visuals (hero card, featured project image) for depth, matching accent color at low opacity

Motion (annotate as interaction notes, not full prototyping):

Fade-up on scroll for section content (staggered for grids)
Nav bar: transparent over hero, solid background + shadow after scrolling past hero
Buttons/cards: hover lift + shadow transition (~200ms ease)

Accessibility: maintain WCAG AA contrast (text vs background), visible focus states on all interactive elements, don't rely on color alone for status (pair color with icon/label).

Page Structure & Sections
1. Navbar (sticky)
Left: logo mark — circular or rounded-square badge with initials "FM" in accent color
Center/right: nav links — About, Experience, Projects, Skills, Contact (smooth-scroll anchors)
Right-most: "Resume" button (secondary/outlined) and a small GitHub icon link
2. Hero Section (full viewport height on desktop)
Eyebrow tag: "Available for opportunities" (small pill, green dot + text)
Name: Fatima Mazhar — large H1
Tagline: "Full-Stack Developer · QA Engineer · AI/ML Enthusiast"
Subtext (2 lines): "BS Computer Science student at FAST-NUCES Lahore, building full-stack products and exploring AI — from digital business cards to vision transformers for cancer detection."
CTA buttons: "View Projects" (primary), "Download Resume" (secondary)
Social row: GitHub (github.com/FatimaMazhar0), LinkedIn (Fatima Mazhar), Email (mazharfatima23@gmail.com) — icon buttons
Right side (desktop) or below (mobile): a visual — abstract code/network graphic, or a stat card summarizing "5+ Projects", "150+ Bugs Resolved", "3 Internships"
3. About Me
Two-column layout on desktop (text left, supporting visual/photo placeholder right)
Paragraph combining: CS student (expected 2027, CGPA 3.63, Dean's List Fall 2023–Spring 2025, 3rd position in batch Spring 2024), full-stack + QA experience, interest in AI/ML, and 19 years of teaching experience as a unique communication/documentation strength
Small stat row underneath: CGPA 3.63, Dean's List (multiple terms), 3rd in Batch
4. Experience (vertical timeline with connecting line, or stacked cards)
Full Stack Development & QA Intern — AICE Xpert (Feb 2026 – July 2026)
Built SAMCard, a full-stack digital business card platform (React.js, Node.js/Express, MongoDB, JWT auth, QR code verification)
Owned end-to-end development: REST API design, database schema, frontend, deployment
Documented and resolved 150+ bugs through formal QA reporting (validation, behavioral, UI defects)
IT Intern — Malik International Organization (June 2024 – August 2024)
IT support, system updates, troubleshooting, internal tool management
Content Writing & Project Management Intern — Buzz Interactive (Jan 2023 – March 2023)
SEO content writing, content calendar management
5. Featured Projects

Section heading: "Featured Projects". Layout: 2-column card grid on desktop, 1-column on mobile. Each card: project title, one-line tagline, tech-stack tag row, 3–5 bullet highlights, and action buttons ("GitHub" / "Live Demo" where available). For projects with screenshots, include a framed image or mini image-carousel at the top of the card.

1. MEDIFY — AI-Powered Healthcare App Tagline: "Healthcare App — AI Consultations, 24/7 Access" Tech tags: Java · XML · Gemini API GitHub: https://github.com/FatimaMazhar0/Medify-Healthcare-App

Full-stack hospital management system with three dedicated portals: patient, doctor, and admin
Home screen with quick-access tiles (Emergency, Hospital, Blood, Prescription, Doctor, Check Up), doctor search bar, and "Schedule Today" upcoming appointments list
Doctor profile screens with experience/patient stats, "About Doctor" section, date/time slot picker, "Confirm Schedule" booking flow
"All Hospitals" directory with search, opening hours, available doctor counts, department tags (Oncology, Cardiology), "Call Helpline"/"View Profile" actions
Blood Donation module with donor list, blood-group filter, "Request Blood" action, and a "My Requests" tab
Integrated Gemini API to power an in-app AI chat/consultation feature
Attach screenshots: home screen, doctor profile/booking screen, all-hospitals screen, blood donation screen, feature-graphic mockup (multi-screen banner)

2. ResuFlow — AI-Powered CV-to-Portfolio Generator Tagline: "Your CV. Reimagined. Live." — "Build a portfolio that gets you hired." Tech tags: React · TypeScript · Next.js · Node.js/Express · Vercel GitHub: https://github.com/zk19604/resuflow

Full-stack tool that parses a CV/LinkedIn profile and auto-generates a deployable personal portfolio site, via a guided flow: Create Account → Upload & Fill (AI analyzes CV) → Choose Template → Customize → Go Live
Dark, editorial landing page with gold/navy accent branding and a live portfolio-card preview
Customize step: choose template (Minimal, Bold, Creative, Corporate, Editorial), color palette (Gold & Navy, Ocean Mist, Sage Ground, Dusty Rose, Slate Modern), typography (Modern Sans, Serif Editorial) — with real-time live preview
"Go Live" screen generates a shareable portfolio URL plus downloadable QR code (PNG/SVG) and social share buttons
Converted static portfolio templates into dynamic, data-driven components in a templates monorepo, deployed via Vercel
Attach screenshots: landing hero, sign-up screen, CV-upload/analyzing screen, customize screen, "portfolio is live" URL + QR screen

3. SAMCard — Digital Business Card Platform Tagline: "Your Business Card, Reimagined" Tech tags: React.js · Node.js/Express · MongoDB · Supabase · JWT GitHub: https://github.com/aice-xpert/samcard (built during AICE Xpert internship) — Live: https://samcard.vercel.app/login

Landing page pitching digital business cards with custom QR codes and engagement tracking ("50K+ Active Users", "1M+ Cards Shared", "99.9% Uptime")
Pro dashboard: welcome banner, profile-completion tracker, key metrics (NFC Taps, Unique Visitors, Profile Views, Leads), engagement-analytics chart, device-distribution breakdown
Card editor: pick from templates (Medical Teal, Teamwork Orange, Heritage Gold, Team Pro, etc.), edit fields, live mobile preview with contact/call buttons
Custom QR-code studio: shapes, colors, stickers, embeddable brand/social logos, live preview
Analytics page with date-range filters, taps/views/leads counters, exportable performance chart
Owned end-to-end development (REST API, schema, frontend, deployment); documented/resolved 150+ bugs via formal QA reporting
Attach screenshots: landing page, dashboard overview, card editor with template picker, QR customization modal, analytics page

4. Interpretable Deep Transfer Learning for Breast Cancer Classification (Vision Transformers) Presented at: AIBThings 2025, NUCES FAST — Lahore Tech tags: Python · PyTorch · MaxViT · CoAtNet-0 · BEiT · Grad-CAM · LIME

Benchmarked three transformer architectures — MaxViT, CoAtNet-0, BEiT — on the BreakHis histopathology dataset (7,909 images, 82 patients, benign/malignant, 4 magnifications: 40X/100X/200X/400X)
Two-phase transfer learning: Phase 1 head-only training (5 epochs), Phase 2 full-network unfreeze (15 epochs), with WeightedRandomSampler to handle ~3x class imbalance
Results at 40X magnification: MaxViT 92.49% accuracy / 0.9753 AUC-ROC; CoAtNet-0 93.83% accuracy / 0.9813 AUC-ROC (fastest inference, best speed-accuracy trade-off); BEiT 94.10% accuracy / 0.9854 AUC-ROC (highest AUC, needs larger dataset to fully generalize)
Integrated Explainable AI (Grad-CAM, LIME, Integrated Gradients, LRP) on the best-performing model to validate predictions against diagnostically relevant tissue regions, building clinical trust
Card should show a small results table or 3 mini stat blocks (one per model: accuracy + AUC-ROC), styled like a research/data-science project rather than a product
No GitHub/live links yet — use a "View Presentation" button linking to: https://docs.google.com/presentation/d/1VnWMueB0YcM1iZvNIIUmm2w4slE7occtifWl6tLgEcI/edit?usp=sharing
No screenshots being attached for this one — Figma AI should design this card from the text/data alone (e.g., a stylized comparison chart or table mockup)

5. Movie Watchlist Management System Tech tags: React · Node.js · Express · SQL GitHub: https://github.com/FatimaMazhar0/Movies-and-Series-Management-System

Full-stack app for searching, adding, and managing a personal movie watchlist with a persistent relational database
REST API handling CRUD operations, dynamic React frontend and state management
No screenshots available yet — design this as a simpler, text-only card (title, tags, bullets, GitHub button only), or use a generic placeholder UI illustration (e.g. a stylized movie-poster grid icon) since there's no real visual reference
6. Skills — make this section visually rich, not just a text list

Section heading: "Tech Stack & Skills". Use real brand logos for every language/framework/tool (pull from the Simple Icons / Devicon icon sets — e.g. the official React, Node.js, MongoDB, Python, TypeScript, PostgreSQL, Supabase, AWS, Vercel, Git, GitHub, Tailwind CSS logos), each logo in its authentic brand color, sitting on a small rounded card/chip.

Layout options for Figma AI to use (pick whichever reads best, or combine):

A logo grid of individual skill cards: each card = icon (32–40px, brand-colored) + tech name below it, arranged in a responsive grid (6–8 per row desktop, 3–4 per row mobile), grouped under category sub-headers (Languages / Frameworks & Libraries / Databases & Tools / Design & Deploy)
OR an infinite horizontal marquee/ticker: logos scroll continuously left-to-right in a single row (pause on hover), a nice "always in motion" feel for a tech-stack strip right under the hero or above Projects
Each logo chip should have a subtle hover state: card lifts slightly, border glows in the brand's color, and a small tooltip/label fades in if not already labeled

Languages: C++, Python, JavaScript, TypeScript, HTML5, CSS3, SQL, Assembly Frameworks/Libraries: React.js, Node.js, Express.js, Next.js Databases & Tools: MongoDB, PostgreSQL, Supabase, Microsoft SQL Server, Git, GitHub, REST APIs (generic API/plug icon), Tailwind CSS, AWS, Vercel, Canva Soft Skills: show as a separate small row of pill badges (not logos, just icon+text) — Communication (speech-bubble icon), Teamwork (people icon), Presentation (screen/chart icon)

Optional extra flourish: a thin "proficiency" indicator per top skill (e.g. a small 4-dot or progress-bar rating next to React, Node.js, MongoDB, Python, TypeScript to signal deepest expertise) — keep this subtle, not a full percentage bar, since skill percentages can look gimmicky.

More "interesting" visual touches to add elsewhere in the site (not just Skills)
Hero stat strip: below the hero CTA buttons, a row of 3–4 small stat cards with animated count-up numbers on scroll: "5+ Projects Shipped", "150+ Bugs Resolved", "3 Internships", "94% Model Accuracy" (tie back to the Vision Transformer project)
GitHub activity card: in the Contact/Footer area, a stylized GitHub contribution graph/heatmap card (green-square grid like GitHub's real contribution calendar) linking out to github.com/FatimaMazhar0, to visually reinforce "active developer"
Section divider accents: small glowing gradient blobs or a subtle dot-grid pattern in the background between sections (very low opacity) to break up the flat dark background without adding clutter
Project card tab/pill filter: above the Projects grid, add filter pills — "All", "Full-Stack", "AI/ML", "Healthcare" — so the grid can visually filter (even if just a static design state, it signals interactivity)
Timeline node icons: in the Experience timeline, give each entry a small circular icon matching the role (code icon for AICE Xpert, wrench/gear for IT Intern, pen/document for content writing intern) instead of a plain dot
7. Certifications & Education
Google IT Support Professional Certificate — Coursera (6-course certification: networking, OS and IT security fundamentals)
FAST-NUCES, Lahore — BS Computer Science, Expected 2027, CGPA 3.63, Dean's List
Cambridge A Levels (2021–2023) — 1A*, 2As, 100% Scholarship
Cambridge O Levels (2019–2021) — 8A*s, National Level Distinction in Biology
8. Contact / Footer
Heading: "Let's build something together"
Buttons: Email, LinkedIn, GitHub
Simple contact form: Name, Email, Message, "Send" button
Footer bottom row: small copyright text + back-to-top link
First Impression — Hero Must Feel Alive, Not Static

The very first thing a visitor sees should immediately read "this is a technical, detail-oriented builder" — not a generic template. Add real motion and depth, not just flat cards:

Animated gradient mesh / aurora background: behind the hero, a slowly shifting, softly glowing gradient blob (blue/violet/teal) that drifts and morphs continuously (slow, ambient — not distracting). Low opacity, blurred edges.
Subtle particle or dot-grid field: faint moving particles or a dot-grid that very slightly parallaxes as the user scrolls or moves their cursor (cursor-follow spotlight effect: a soft radial glow that follows the mouse over the hero).
Typing/terminal effect: the tagline ("Full-Stack Developer · QA Engineer · AI/ML Enthusiast") can render like a terminal typing animation, or cycle through role words with a blinking cursor caret, reinforcing "developer" identity instantly.
Floating code/tech snippet card: near the hero visual, a small floating "window" styled like a code editor or terminal (with traffic-light dots, monospace font) showing a short, tasteful code fragment (e.g. const stack = ['React', 'Node', 'AI'];) that gently floats up/down (subtle idle animation, 3–4s loop).
Staggered entrance animation: hero elements (eyebrow tag → name → tagline → buttons → social icons) fade/slide in sequentially on load, not all at once.
Animated stat counters: the hero stat strip ("5+ Projects", "150+ Bugs Resolved", etc.) count up from 0 when scrolled into view.
Tech Stack Section — Add Real Movement and Depth (this must NOT look like flat static chips)

Rebuild this section so it visibly has life and motion, not a plain grid of solid-color boxes:

Real brand logos, full color, larger: each tile shows the actual multi-color brand logo (React's blue atom icon, Node's green hexagon, MongoDB's green leaf, Python's blue/yellow snake mark, TypeScript's blue TS badge, etc. — pull from Simple Icons/Devicon), sized 36–44px, not a plain colored dot.
3D tilt-on-hover: each logo tile tilts slightly in 3D (perspective transform following cursor position) and lifts with a soft glow in the brand's own color when hovered — like a "hologram card" effect.
Idle float animation: logos gently bob up and down at slightly different offsets/timings (e.g. each tile floats ±3px on its own 3–5s loop, staggered so they don't move in unison) — this alone makes the grid feel alive at rest, before any interaction.
Glow/halo behind each icon: a soft radial glow in the brand color sits behind each logo, barely visible at rest, brightening on hover.
Entrance animation: as the section scrolls into view, tiles animate in with a staggered pop/scale-fade (each tile appears ~40–60ms after the previous), rather than all appearing instantly.
Alternate/companion treatment — infinite marquee row: in addition to (or instead of) the grid, add one continuous horizontal marquee strip of logos scrolling right-to-left (infinite loop, pause on hover) directly under the hero or as a divider strip above "Featured Projects" — this reinforces motion and breaks up flat sections.
Category headers with icons: "Languages", "Frameworks & Libraries", "Databases & Tools" headers each get a small matching icon (</> for languages, layers icon for frameworks, database icon for tools) plus a thin animated underline that draws in on scroll.
Micro-interaction on click (optional prototype state): clicking a logo tile could flip or pulse briefly, as a nice detail if Figma AI supports interactive prototype states.
Contact Section — Be Honest About What the Button Can Do

Design the "Send" button as a clear call-to-action, but make it a WhatsApp deep link rather than implying it silently emails/texts from a form: label it "Message me on WhatsApp" and link to https://wa.me/923302789440 with a pre-filled greeting. Keep a secondary plain-text email button ("Email Me" → mailto:mazharfatima23@gmail.com) alongside it. A traditional form field UI can still be shown for visual completeness, but note in the design that wiring a real "Send" form button to actually deliver messages requires backend code (e.g. Formspree, EmailJS, or a custom API) — Figma itself only designs the UI, it can't send real messages.

Sticky top navbar, transparent-to-solid on scroll, smooth-scroll anchor links
Hero: full viewport height on desktop; stacks to single column on mobile with visual below text
Projects: 2-column card grid desktop (1200px container) → 1-column mobile, consistent card height per row where possible
Experience: vertical timeline with a left accent line and dot markers on desktop; simplified stacked cards on mobile
Use consistent 12–16px card radius and hover-lift interaction across all card types (project cards, skill tags, experience cards)
Favicon/logo mark: circular badge with "FM" initials in the accent color