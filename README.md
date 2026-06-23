# N. Eswar Reddy — Portfolio

A responsive personal portfolio website for **N. Eswar Reddy**, a Full-Stack Developer. It presents experience, selected projects, technical skills, certifications, contact details, and a downloadable resume in a compact dark interface.

## Live features

- Responsive navigation with a mobile menu
- Developer-focused hero section with profile links and key career stats
- About, experience, projects, skills, certifications, and contact sections
- Direct links for email, phone, LinkedIn, GitHub, location, and resume
- Smooth section scrolling and interactive desktop cursor treatment
- Fully responsive layouts for desktop, tablet, and mobile screens

## Tech stack

- React 18
- Vite 8
- CSS3 (custom responsive styling)
- Lucide React icons

## Getting started

### Prerequisites

Install [Node.js](https://nodejs.org/) 18 or later. npm is included with Node.js.

### Installation

```bash
git clone https://github.com/Eswar-521/portfolio.git
cd portfolio
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL shown by Vite (normally `http://127.0.0.1:5173`) in your browser.

### Build for production

```bash
npm run build
```

The optimized production files are generated in the `dist` folder.

### Preview the production build

```bash
npm run preview
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Creates an optimized production build in `dist/`. |
| `npm run preview` | Serves the built project locally for final checks. |

## Project structure

```text
portfolio/
├── public/
│   └── assets/
│       ├── hero-workspace.png
│       └── n-eswar-reddy-resume.pdf
├── src/
│   ├── App.jsx             # Portfolio sections and UI components
│   ├── main.jsx            # React entry point
│   ├── portfolioData.js    # Profile, links, projects, skills, and experience
│   └── styles.css          # Global, responsive, and component styling
├── index.html
├── package.json
└── vite.config.js
```

## Updating portfolio content

Most text content and links live in `src/portfolioData.js`.

- Update your name, email, phone, and hero copy in `profile`.
- Update GitHub, LinkedIn, resume, email, and phone links in `links`.
- Add or edit work history in `experiences`.
- Add projects in `projects`.
- Update technologies in `skills`.
- Replace the resume at `public/assets/n-eswar-reddy-resume.pdf` while keeping the same filename, or update the `links.resume` path.

The page composition is in `src/App.jsx`, while all visual changes are handled by `src/styles.css`.

## Deployment

This is a static Vite app, so it can be deployed on platforms such as Netlify, Vercel, GitHub Pages, or Cloudflare Pages.

For Netlify or Vercel, use these settings:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | 18+ |

After deployment, verify that the resume button and all social/contact links open correctly.

## Contact

- Portfolio owner: N. Eswar Reddy
- Email: [neswar215@gmail.com](mailto:neswar215@gmail.com)
- GitHub: [Eswar-521](https://github.com/Eswar-521)
- LinkedIn: [eswar-reddy-33bbb7189](https://www.linkedin.com/in/eswar-reddy-33bbb7189/)

## License

This repository is intended as a personal portfolio. Please do not reuse the personal content, resume, or images without permission.
