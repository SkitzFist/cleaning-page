# Städfirma Sverige

A modern, responsive website for a Swedish cleaning company, built with Astro and deployed on Netlify.

## Description

This website provides information about cleaning services and allows customers to contact the company through a simple contact form. The form submissions are handled via Netlify Forms for easy management.

## Features

- Responsive design
- Contact form with Netlify Forms integration
- Swedish language content
- Clean, professional layout

## Tech Stack

- **Framework**: Astro
- **Deployment**: Netlify
- **Forms**: Netlify Forms
- **Styling**: CSS

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd cleaning-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Deployment

The site is configured for deployment on Netlify. Push your changes to the main branch to trigger automatic deployments.

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   │   ├── index.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css
├── package.json
├── astro.config.mjs
└── tsconfig.json
```

## Contact

For inquiries about the cleaning services, please use the contact form on the website or reach out directly.

## Contributing

Follow the guidelines in `AGENTS.md` for coding standards and best practices.
