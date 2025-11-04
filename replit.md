# Kolezev Donate - Angular Donation Website

## Project Overview

This is a professional single-page donation website for independent journalist Dmitry Kolezev. The site provides multiple payment options with a clean, accessible interface in Russian.

## Purpose

Provide a centralized donation page for supporting independent journalism through various payment methods including cryptocurrency, PayPal, Patreon, and more.

## Tech Stack

- **Framework**: Angular 20 (latest) with standalone components
- **UI Components**: PrimeNG v20 with Aura theme
- **Styling**: PrimeFlex utilities, PrimeIcons, custom SCSS
- **Fonts**: Open Sans with Cyrillic support
- **OG Image**: Auto-generated using Sharp (Node.js)
- **Deployment Target**: Vercel (static export)

## Architecture

### Component Structure

- **HeaderBlock**: Avatar, title, YouTube link
- **DonationServicesBlock**: Patreon, YouTube sponsorship
- **UniversalCardBlock**: Donat.media card payments
- **CryptoBlock**: 6 cryptocurrencies with copy buttons
- **AltPaymentsBlock**: Revolut, PayPal
- **NGoBlock**: US NGO PayPal donations
- **VpnBlock**: Ural VPN Telegram bot
- **AppFooter**: Advertising contact info

### Shared Components

- **CopyButtonComponent**: Reusable with tooltips and ARIA support
- **ClipboardService**: Handles copy to clipboard with fallback

### Configuration

- **content.config.ts**: Typed configuration with all content, links, addresses
- Centralized management of all text, URLs, and crypto addresses

## Key Features Implemented

### SEO Optimization

✅ Russian language meta tags
✅ Open Graph tags (og:title, og:description, og:image, og:url)
✅ Twitter Card tags
✅ JSON-LD structured data (WebSite + Person schemas)
✅ Canonical URL
✅ robots.txt (allow all)
✅ sitemap.xml
✅ Auto-generated OG image (1200×630)

### Accessibility

✅ WCAG AA compliant
✅ ARIA labels and live regions
✅ Keyboard navigation
✅ Screen reader support
✅ High contrast text
✅ Focus indicators

### User Experience

✅ One-click copy buttons with tooltips ("Скопировано!")
✅ Responsive design (mobile + desktop)
✅ 1400px max-width centered layout
✅ Smooth hover and focus states
✅ External links with target="_blank" and rel="noopener noreferrer"

## Development

### Port Configuration

The development server runs on port 5000 (configured for Replit webview):
- `angular.json`: host 0.0.0.0, port 5000, allowedHosts true
- `package.json`: npm start uses these settings

### Scripts

- `npm start`: Run dev server on port 5000
- `npm run build`: Production build
- `npm run og:generate`: Generate OG image from YouTube avatar
- `npm run preview`: Preview production build

### OG Image Generation

The `scripts/generate-og.js` file:
1. Downloads avatar from YouTube
2. Creates 1200×630 image with centered avatar
3. Saves to `src/assets/og/og-image.jpg`
4. Runs automatically during Vercel build

## Deployment

Configured for Vercel with `vercel.json`:
- Runs OG image generation before build
- Builds with production configuration
- Outputs to `dist/kolezev-donate/browser`

## Recent Changes (2025-11-04)

- Created complete Angular donation website from scratch
- Implemented all payment blocks with typed configuration
- Added full SEO setup with meta tags and structured data
- Created OG image generation script
- Configured Replit workflow to run on port 5000
- Set up PrimeNG v20 with Aura theme
- Added responsive styling with PrimeFlex
- Implemented accessible copy-to-clipboard functionality

## Project State

✅ Development server running on port 5000
✅ All components created and wired up
✅ SEO tags and metadata complete
✅ OG image generated
✅ Responsive layout implemented
✅ Ready for deployment to Vercel

## User Preferences

- Clean, professional design
- Russian language interface
- Accessibility-first approach
- Easy content updates through typed config
