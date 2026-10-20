# Sakshi Patil — Personal Portfolio

> Premium, recruiter-focused personal portfolio website engineered with React, pure CSS, and modern editorial dark aesthetics.

[![React](https://img.shields.io/badge/React-18-blue.svg?logo=react&logoColor=white)](https://reactjs.org/)
[![Status](https://img.shields.io/badge/Status-Live%20Ready-success.svg)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🌟 Overview

This repository houses the personal portfolio of **Sakshi Patil**, a Computer Science Engineering student (Class of 2027) focused on **Software Engineering (SDE)**, **Full-Stack Application Development**, and **Distributed/Cloud Systems**.

The portfolio has been redesigned with an editorial, dark-mode design system (#080B12 background, #5B8CFF accent) tailored for technical recruiters and hiring managers. It showcases real engineering projects, technical depth, architectural pillars, and direct contact avenues without artificial metrics or placeholder links.

---

## 🚀 Key Features & Highlights

- **Hero & Identity:** Crisp value proposition, active status indicator, quick links to GitHub/LinkedIn/Email, and verified resume download.
- **Featured Projects Showcase:**
  - **Forensiq (Featured):** Deepfake voice & audio forensic analysis system built with Python, PyTorch, Librosa, and FastAPI.
  - **Neara:** Location-aware discovery platform powered by React, Node.js, Express, and Leaflet.
  - **Gymkhana Management System:** Campus athletics and facilities orchestration hub using PHP, MySQL, and Bootstrap.
  - **Dorkly:** OSINT reconnaissance and query automation CLI tool in Python.
  - **ERP Deployment System:** Automated multi-environment ERP provisioning engine with Bash, Docker, and Linux.
- **Engineering Pillars (About):** Systems & full-stack focus, practical architecture principles, and continuous curiosity.
- **Experience & Education:** Chronological roadmap covering academic milestones, coursework, leadership, and accomplishments.
- **Categorized Technical Arsenal (Skills):** Languages, Frontend, Backend & APIs, Databases, DevOps & Cloud, Core CS Fundamentals.
- **Recruiter-Friendly Contact Hub:** One-click copy for email, direct `mailto:` link, and verified profile references (no non-functional contact forms).
- **Accessibility & Performance:** Semantic HTML5, WCAG-compliant contrast ratios, smooth scroll, zero external UI framework bloat, and `prefers-reduced-motion` support.

---

## 🛠️ Tech Stack

- **Core Framework:** [React 18](https://reactjs.org/) (Create React App architecture)
- **Styling:** Custom Vanilla CSS Design System with CSS Custom Properties (Variables), Flexbox, and CSS Grid
- **Typography:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (Display/Headings), [Inter](https://fonts.google.com/specimen/Inter) (Body & UI), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Code & Metrics)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/fi`, `react-icons/si`, `react-icons/tb`)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── index.html              # Entry HTML with custom typography and SEO metadata
│   ├── photo.jpeg              # Profile portrait asset
│   ├── Sakshi Patil Resume.pdf # Downloadable resume
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.js / .css    # Sticky glassmorphism header & mobile navigation
│   │   ├── Hero.js / .css      # Primary landing section & status badges
│   │   ├── Projects.js / .css  # Featured and supporting project showcase
│   │   ├── ProjectCard.js      # Interactive card with CSS-based technical preview canvases
│   │   ├── About.js / .css     # Narrative and engineering pillar cards
│   │   ├── Experience.js / .css# Education, leadership, and milestones timeline
│   │   ├── Skills.js / .css    # Categorized skill chips with tech icons
│   │   ├── Contact.js / .css   # Direct communication hub with clipboard utility
│   │   └── Footer.js / .css    # Editorial footer & back-to-top interaction
│   ├── data/
│   │   ├── projects.js         # Verified project catalog with GitHub repositories
│   │   ├── experience.js       # Timeline data, education, and achievements
│   │   └── skills.js           # Tech stack categories and items
│   ├── App.js / .css           # Main application composition
│   ├── index.js                # React DOM render entry
│   └── index.css               # Global theme tokens, typography, and base styles
├── package.json
└── README.md
```

---

## 💻 Local Development Setup

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v16.x or newer recommended) and `npm` installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sakshipatil45/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the portfolio in your browser. The page reloads automatically on edits.

4. **Run unit tests:**
   ```bash
   npm test
   ```

5. **Generate a production build:**
   ```bash
   npm run build
   ```
   Bundles and minifies the app into the `build/` directory for production deployment.

---

## 🚢 Deployment

The project is configured for seamless deployment on **Vercel** or any static hosting platform (e.g., Netlify, GitHub Pages):

1. Link your GitHub repository to Vercel.
2. Set Framework Preset: **Create React App**.
3. Build Command: `npm run build`
4. Output Directory: `build`
5. Deploy!

---

## 📬 Contact & Connect

- **Name:** Sakshi Patil
- **Email:** [sakshipatil112004@gmail.com](mailto:sakshipatil112004@gmail.com)
- **LinkedIn:** [linkedin.com/in/sakshi-patil-1104sp](https://www.linkedin.com/in/sakshi-patil-1104sp)
- **GitHub:** [github.com/sakshipatil45](https://github.com/sakshipatil45)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
