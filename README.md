# Md. Talha Hossain — Personal Portfolio Website

A modern, fully responsive portfolio website showcasing web development projects, skills, and professional experience. Built with clean, semantic HTML, modern CSS with dark mode support, and vanilla JavaScript.

<!-- **Live Demo:** [talhahossain.dev](https://talhahossain.dev) -->

---

## 🎯 Features

- **Responsive Design** — Optimized for all devices (mobile, tablet, desktop)
- **Dark Mode Toggle** — Smooth light/dark theme switching with localStorage persistence
- **Smooth Animations** — Elegant fade-in effects and scroll reveal animations
- **SEO Optimized** — Semantic HTML with schema.org markup and meta tags
- **Accessible** — WCAG compliance with ARIA labels and keyboard navigation
- **Performance** — Lightweight, no heavy dependencies; vanilla JavaScript only
- **Mobile Navigation** — Hamburger menu with backdrop blur effect
- **Intersection Observer** — Efficient scroll-triggered animations
- **Modular Code** — Separated HTML, CSS, and JavaScript files

---

## 📂 Project Structure

```
portfolio/
├── index.html          # Main HTML file with semantic markup
├── styles.css          # All styling (light/dark modes, responsive)
├── script.js           # Vanilla JavaScript functionality
├── server.js           # Express.js server for local development
├── package.json        # Node.js dependencies and metadata
├── .gitignore          # Git ignore file
└── README.md           # Project documentation (this file)
```

---

## 🛠️ Tech Stack

### Frontend

- **HTML5** — Semantic markup with accessibility attributes
- **CSS3** — Variables, Grid, Flexbox, animations, media queries
- **JavaScript (ES6+)** — Vanilla JS, no frameworks/libraries

### Backend (Development Server)

- **Node.js** — JavaScript runtime for server-side
- **Express.js** — Lightweight web framework for serving static files

### Key Technologies

- **Google Fonts** — Fraunces (display) + Plus Jakarta Sans (body)
- **LocalStorage** — Theme persistence across sessions
- **Intersection Observer API** — Efficient scroll animations
- **CSS Variables** — Dynamic theming and maintainability
- **CSS Grid & Flexbox** — Modern layout techniques

---

## 🚀 Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- A local or remote web server (optional for local testing)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/talhahossa1n/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Server**

   ```bash
   npm start
   ```

   The server will start at `http://localhost:3000`

### Alternative: Quick Testing (No Installation)

If you just want to test without installing Node.js:

- **Double-click** `index.html` to open in browser, or
- **Using Python** (if installed):
  ```bash
  python -m http.server 8000
  ```
  Then navigate to `http://localhost:8000`

### Deploy

- Upload files to any web hosting (Render, Vercel, Netlify, Heroku, etc.)
- **For Node.js hosting** (Render, Heroku): Push the repo, they'll auto-detect `package.json` and `server.js`
- **For static hosting** (Vercel, Netlify, GitHub Pages): Just upload HTML, CSS, and JS files

---

## 📋 File Descriptions

### `index.html`

The main HTML file containing:

- **Navigation** — Fixed header with logo, menu links, theme toggle, and hamburger menu
- **Hero Section** — Introduction with CTA buttons and skill chips
- **About Section** — Personal background, tech stack, and social links
- **Skills Section** — 6 skill cards with categorized technologies
- **Projects Section** — 8 full-stack project cards with descriptions and GitHub links
- **Experience Section** — Leadership roles and activities timeline
- **Education Section** — University, HSC, and SSC credentials
- **Achievements Section** — Academic and professional accomplishments
- **Certifications Section** — Professional development courses
- **Contact Section** — Email, phone, location, and availability info
- **Footer** — Copyright and site attribution

### `styles.css`

Comprehensive styling including:

- **CSS Variables** — Theme colors (light/dark modes) for easy customization
- **Root & Dark Mode** — Full color palette for both themes
- **Navigation Styling** — Fixed nav with blur effects and animations
- **Hero Section** — Animated typography, gradients, and dot patterns
- **Card Components** — Reusable styles for project, skill, education cards
- **Animations** — Fade-up entrance, pulse effects, smooth transitions
- **Responsive Breakpoints** — Mobile (≤520px) and tablet (≤900px) optimizations
- **Accessibility** — Reduced motion preferences support

### `script.js`

Interactive features:

- **Theme Toggle** — Switch between light/dark modes with localStorage
- **Sticky Navigation** — Adds blur effect when scrolled past 50px
- **Hamburger Menu** — Mobile navigation toggle with accessibility
- **Scroll Reveal** — IntersectionObserver-based fade-in animations
- **Skill Tag Cycling** — Animated tag highlighting on card visibility
- **Reduced Motion Support** — Respects system accessibility settings

### `server.js`

Express.js server for local development:

- **Static File Serving** — Serves HTML, CSS, JS files from the project directory
- **Port Configuration** — Runs on port 3000 (customizable via `PORT` environment variable)
- **Catch-all Routes** — Routes all requests to `index.html` for single-page app behavior
- **Error Handling** — Basic error middleware for debugging
- **Welcome Message** — Displays server information on startup

### `package.json`

Node.js project configuration:

- **Dependencies** — Express.js for server
- **Scripts** — `npm start` to run the server
- **Metadata** — Project name, version, author, repository links
- **Node/npm Requirements** — Specifies minimum versions supported

---

## 🎨 Color Scheme

### Light Mode

- Background: `#f7f4ef` (Cream)
- Text: `#1a1814` (Ink)
- Accent: `#d45c2a` (Orange)
- Borders: `#e0dad0` (Light Gray)

### Dark Mode

- Background: `#0e0c09` (Near Black)
- Text: `#f0ebe0` (Cream White)
- Accent: `#e06b38` (Bright Orange)
- Borders: `rgba(255, 255, 255, 0.09)` (Subtle White)

---

## 📱 Responsive Design

The portfolio is fully responsive across all breakpoints:

- **Desktop (> 900px)** — Full 3-column/2-column grids, desktop nav
- **Tablet (≤ 900px)** — 2-column grids, stack nav to mobile menu
- **Mobile (≤ 520px)** — Single column, hamburger menu, full-width buttons

---

## ✨ Key Features Explained

### 1. Dark Mode Toggle

- Click the theme icon (☀️/🌙) in the navbar
- Preference saves to localStorage automatically
- Smooth CSS transitions between modes

### 2. Hamburger Menu (Mobile)

- Appears on screens < 900px wide
- Click to open/close mobile navigation
- Includes all nav links + "Hire Me" CTA
- Closes automatically when link is clicked

### 3. Scroll Animations

- Elements fade in as you scroll using Intersection Observer
- Efficient performance — no scroll event listeners
- Staggered delays for visual hierarchy

### 4. Sticky Navigation

- Nav adds blur background when scrolled > 50px
- Smooth padding transitions for visual feedback
- Always accessible for quick navigation

### 5. Project Cards

- Each card links to GitHub repository
- Shows project name, description, and tech stack
- Hover effects for interactivity
- Fully responsive card grid

---

## 🔍 SEO & Metadata

The portfolio includes comprehensive SEO optimization:

- **Page Title** — Descriptive, keyword-rich title
- **Meta Description** — 160 characters for SERP preview
- **Meta Keywords** — Relevant search terms
- **Open Graph Tags** — Social media sharing previews
- **Twitter Card Tags** — Enhanced Twitter previews
- **Schema.org Markup** — Structured data (Person type)
- **Canonical URL** — Prevents duplicate content issues
- **Semantic HTML5** — Proper heading hierarchy & landmarks

---

## 📊 Sections Overview

### About Me (Section 01)

- Personal introduction and background
- Stack overview and philosophy
- Current opportunities and availability
- Social media links
- Stats grid (7+ projects, 5.0 GPA, 90+ members managed, 100% remote-ready)

### My Toolkit (Section 02)

- 6 skill categories with icon badges
- Languages, Back-End, Front-End, Tools & Platforms, Design, Tutoring
- Hover animation on individual tags

### Projects (Section 03)

- 8 Full-stack web applications
- Each project includes:
  - Emoji icon for visual identification
  - Project name and detailed description
  - Tech stack tags
  - Direct GitHub repository link
  - 2-column responsive grid

### Leadership (Section 04)

- Professional roles and accomplishments
- IT Club Head of Technology
- Utkorsho Ambassador
- Timeline format with achievements

### Education (Section 05)

- Current university (SUST, BSc in Geography)
- HSC — Noubahini College (GPA 5.0/5.0)
- SSC — Uttara High School (GPA 5.0/5.0)
- Status badges and expected completion dates

### Achievements (Section 06)

- Academic awards and recognitions
- 2nd place in Science Group pretest
- Best writer recognition on EdTech platform
- Perfect GPA achievements

### Certifications (Section 07)

- Professional development courses
- Issued by 10 Minute School
- Organized in chronological order

### Contact (Section 08)

- Dark-themed contact section
- Email, LinkedIn, GitHub, phone links
- Contact info block (location, work type, languages)
- Availability badge with pulse animation

---

## 🎬 Animations & Interactions

### CSS Animations

- `fade-up` — Entrance animation with staggered delays
- `pulse` — Availability dot pulsing effect
- `scroll reveal` — Elements fade in on scroll (via JS)

### Hover Effects

- Buttons scale and shift on hover
- Cards lift with shadow on hover
- Links change color with smooth transitions
- Tags highlight with background color change

### Transitions

- Theme switching: 0.35s ease
- Nav scrolling: 0.4s ease
- Card hover: 0.25s ease
- Animations respect `prefers-reduced-motion`

---

## ♿ Accessibility Features

- **Semantic HTML** — Proper use of `<section>`, `<nav>`, `<article>`, etc.
- **ARIA Labels** — `aria-label`, `aria-expanded`, `aria-hidden` attributes
- **Keyboard Navigation** — All interactive elements are focusable
- **Color Contrast** — WCAG AA compliant color combinations
- **Reduced Motion** — Respects `prefers-reduced-motion: reduce` setting
- **Semantic Links** — Descriptive link text (e.g., "View Project on GitHub")
- **Focus Indicators** — Visible focus states for keyboard users

---

## 🚀 Performance Optimizations

- **No External Dependencies** — Vanilla JS, no npm packages
- **Optimized Fonts** — Google Fonts with preconnect and font-display
- **CSS Variables** — Reduces file size and enables fast theme switching
- **Intersection Observer** — Efficient scroll animations (no scroll listeners)
- **Lightweight JavaScript** — Only ~2.5 KB of vanilla JavaScript
- **Minimal CSS** — Well-organized, no bloat (~15 KB unminified)

---

## 🔧 Customization Guide

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
  --cream: #f7f4ef; /* Light background */
  --ink: #1a1814; /* Light text */
  --orange: #d45c2a; /* Primary accent */
}

[data-theme="dark"] {
  --cream: #0e0c09; /* Dark background */
  --ink: #f0ebe0; /* Dark text */
  --orange: #e06b38; /* Dark accent */
}
```

### Updating Content

1. Open `index.html` in your editor
2. Replace the content in each section (About, Projects, etc.)
3. Update meta tags with your information
4. Modify social links and contact details

### Adding/Removing Sections

- Follow the existing section pattern with `.s-inner` and `.s-header`
- Use reveal classes for scroll animations
- Maintain the numbering convention (01, 02, 03, etc.)

### Customizing Fonts

Replace font links in `index.html`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

---

## 📈 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Chrome Android)

---

## 🤝 Contributing

While this is a personal portfolio, improvements and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License — see the LICENSE file for details.

---

## 👤 About the Developer

**Md. Talha Hossain**

- Full-stack Web Developer from Dhaka, Bangladesh
- BSc Student at Shahjalal University of Science & Technology (SUST)
- Specialized in: Node.js, Express, MongoDB, Bootstrap
- 7+ production-ready full-stack projects shipped
- Open to part-time and remote web development roles

**Contact:**

- Email: [talhahossain56@gmail.com](mailto:talhahossain56@gmail.com)
- LinkedIn: [linkedin.com/in/talhahossain](https://www.linkedin.com/in/talhahossain)
- GitHub: [@talhahossa1n](https://github.com/talhahossa1n)
- Phone: +880 1937-827817

---

## 🙏 Acknowledgments

- **Google Fonts** — Fraunces & Plus Jakarta Sans typefaces
- **Icons** — SVG icons hand-crafted for optimal performance
- **Inspiration** — Modern portfolio design best practices
- **Tools** — Built with VS Code and pure web standards

---

## 📝 Changelog

### v2.0 (2026-04-24)

- ✨ Separated HTML, CSS, and JavaScript into modular files
- 📚 Created comprehensive README documentation
- 🎨 Added detailed color scheme and customization guide
- 📖 Improved accessibility documentation
- 🚀 Optimized for faster loading and better maintainability

### v1.0 (Initial Release)

- 🎉 Portfolio website launched with single HTML file
- 🌙 Dark mode toggle with localStorage persistence
- 📱 Fully responsive design with mobile hamburger menu
- ✨ Smooth scroll animations with Intersection Observer
- 📊 8 featured projects with GitHub links

---

## 📞 Support & Questions

For questions or issues:

1. Check existing GitHub issues
2. Email: [talhahossain56@gmail.com](mailto:talhahossain56@gmail.com)
3. LinkedIn: [talhahossain](https://www.linkedin.com/in/talhahossain)

---

**Made with ❤️ by Md. Talha Hossain**
