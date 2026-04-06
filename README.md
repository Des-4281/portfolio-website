# David Elo Solorio — Personal Portfolio

A clean, dark-themed personal portfolio website built with vanilla HTML, CSS, and JavaScript based on the Figma Project.

Link to original Figma Project Here: https://www.figma.com/design/MD4RVdx3HNvcNdGl8b3AKr/%F0%9F%8E%A8-Personal-Portfolio-Template--Community-?node-id=0-1&p=f&t=KTvChReNJnFGwJPX-0 

## Sections

- **Hero** — Introduction, tagline, CTA button, and integration logo strip
- **Case Studies** — Three featured client projects with tags, descriptions, and links
- **Testimonials** — 2×2 grid of client quotes with avatars
- **Recent Work** — Carousel of project cards with navigation arrows
- **Get In Touch** — Contact form with mobile, email, and message fields
- **Footer** — Simple branded footer

## Tech Stack

- HTML5
- CSS3 (custom properties, flexbox, grid)
- Vanilla JavaScript
- [Raleway](https://fonts.google.com/specimen/Raleway) — heading font
- [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) — body font
- [Font Awesome 6](https://fontawesome.com/) — social icons

## Project Structure

```
├── index.html
├── styles.css
├── script.js
└── images/
    ├── DavidSolorio.png
    ├── legal-agent.jpg
    ├── organized-desk.jpg
    ├── busy-desk.jpg
    ├── voice-ai.jpg
    ├── voting-app.jpg
    └── financial-analyst.jpg
```

## Setup

No build step required. Just open `index.html` in a browser or serve with any static file server:

```bash
npx serve .
# or
python -m http.server 8000
```

## Features

- Responsive layout with mobile breakpoints at 900px and 1170px
- Hamburger menu for mobile navigation
- Sticky navbar
- CSS gradient borders on testimonial cards
- Carousel-ready work cards layout

## Customization

All colors and fonts are defined as CSS variables in `:root` inside `styles.css` for easy theming.

| Variable | Value | Usage |
|---|---|---|
| `--color-dark` | `#080808` | Page background |
| `--color-nav` | `#1B1B1B` | Navbar / footer |
| `--color-green` | `#3F8E00` | Primary button |
| `--color-orange` | `#FFA217` | Tag / button accent |
| `--color-blue` | `#000AFF` | Tag / button accent |
| `--color-teal` | `#2AB090` | Tag / button accent |

## License

MIT