# Kolezev Donate - Donation Website

A professional single-page donation website for independent journalist Dmitry Kolezev, built with Angular 20, PrimeNG, and modern web technologies.

## Features

- 🎨 Clean, responsive design with PrimeNG components and PrimeFlex utilities
- 🌐 Full Russian language interface
- 💳 Multiple payment options:
  - Patreon subscriptions
  - YouTube channel sponsorship
  - Universal card payments (donat.media)
  - Cryptocurrency (USDT, TRX, Bitcoin, Ethereum, TON)
  - Alternative payments (Revolut, PayPal)
  - US NGO donations (tax-deductible)
- 📋 One-click copy-to-clipboard functionality with tooltips
- ♿ WCAG AA accessible with ARIA support
- 🔍 Complete SEO optimization:
  - Meta tags and descriptions
  - Open Graph tags for social media
  - Twitter Card support
  - JSON-LD structured data
  - Auto-generated OG image (1200×630) from YouTube avatar
  - Robots.txt and sitemap.xml

## Tech Stack

- **Frontend**: Angular 20 (standalone components)
- **UI Library**: PrimeNG v20 with Aura theme
- **Styling**: PrimeFlex, PrimeIcons, Custom SCSS
- **Fonts**: Open Sans (Cyrillic support) via Google Fonts
- **OG Image Generation**: Sharp (Node.js)
- **Deployment**: Vercel (static export)

## Local Development

### Prerequisites

- Node.js 20+ (LTS)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Generate the OG image:
   ```bash
   npm run og:generate
   ```
   This downloads the YouTube avatar and creates a 1200×630 OG image.

### Development Server

Run the development server:
```bash
npm start
```

Navigate to `http://localhost:5000/`. The application will automatically reload when you make changes.

### Build

Build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/kolezev-donate/browser/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

Navigate to `http://localhost:4173/`.

## OG Image Generation

The OG (Open Graph) image is already generated and included in the repository at `src/assets/og/og-image.jpg`. 

To regenerate it (only needed if the YouTube avatar changes):
```bash
npm run og:generate
```

The script:
1. Downloads the YouTube avatar from the configured URL
2. Creates a 1200×630 image with the avatar centered on a neutral background
3. Saves it as `src/assets/og/og-image.jpg`

## Configuration

All content, links, and addresses are centralized in `src/app/content.config.ts`. This typed configuration system makes it easy to update donation information by editing the `APP_CONTENT` object.

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Angular project
3. The `vercel.json` configuration handles OG image generation and building

Alternatively, use Vercel CLI:
```bash
npm install -g vercel
vercel
```

### Manual Deployment

Build the project and deploy the `dist/kolezev-donate/browser/` directory to any static hosting service.

## Accessibility & SEO

- WCAG AA compliant with ARIA support
- Full Russian language meta tags
- Open Graph and Twitter Card tags
- JSON-LD structured data
- Sitemap and robots.txt included

## Contact

For advertising inquiries: adkolezev@gmail.com
