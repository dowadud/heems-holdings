# Heems Holdings - Real Estate Website

A premium Next.js 14 website for Heems Holdings LLC, featuring sophisticated animations, brand-consistent design, and modern web technologies.

## 🎨 Brand Customization

### Color Palette

The website uses a carefully crafted brand palette defined in the Tailwind configuration:

**Primary Colors:**
- **Navy**: `#0a2540` - Primary brand color, used for backgrounds and text
- **Gold**: `#c6a15b` - Secondary accent, used for highlights and CTAs
- **Green**: `#1f3b2d` - Logo green, used for sections and accents
- **Cream**: `#e8e3d7` - Text accent for readability
- **Coal**: `#0b0d10` - Dark background color

### Editing the Color Palette

#### Method 1: Tailwind Configuration (Future)
When migrating to standard Tailwind CSS, edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      brand: {
        navy: '#0a2540',
        gold: '#c6a15b', 
        green: '#1f3b2d',
        cream: '#e8e3d7',
        coal: '#0b0d10',
      }
    }
  }
}
```

#### Method 2: CSS Variables (Current)
Edit `src/app/globals.css`:

```css
@theme {
  --color-brand-navy: #0a2540;
  --color-brand-gold: #c6a15b;
  --color-brand-green: #1f3b2d;
  --color-brand-cream: #e8e3d7;
  --color-brand-coal: #0b0d10;
}

:root {
  --brand-navy: #0a2540;
  --brand-gold: #c6a15b;
  --brand-green: #1f3b2d;
  --brand-cream: #e8e3d7;
  --brand-coal: #0b0d10;
}
```

## 🔗 CTA and Contact Configuration

### Environment Variables (Recommended)
Create `.env.local` in the project root:

```env
NEXT_PUBLIC_CONTACT_EMAIL=info@heemsholdings.com
NEXT_PUBLIC_CONTACT_PHONE=+15551234567
NEXT_PUBLIC_CTA_PRIMARY_HREF=mailto:info@heemsholdings.com?subject=Investment%20Inquiry
NEXT_PUBLIC_CTA_SECONDARY_HREF=tel:+15551234567
```

### Site Configuration File
Edit `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: "Heems Holdings LLC",
  description: "Your company description here",
  
  // Contact Information
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@heemsholdings.com",
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+1 (555) 123-4567",
  
  // CTA Links
  ctaPrimaryHref: process.env.NEXT_PUBLIC_CTA_PRIMARY_HREF || "mailto:info@heemsholdings.com?subject=Investment Inquiry",
  ctaSecondaryHref: process.env.NEXT_PUBLIC_CTA_SECONDARY_HREF || "tel:+15551234567",
  
  cta: {
    title: "Ready to Invest in Your Future?",
    description: "Join hundreds of satisfied investors...",
    primaryButton: "Get Started Today",
    secondaryButton: "Schedule a Call",
  },
}
```

## 📸 Media Specifications

### Hero Video (`public/videos/hero.mp4`)
- **Format**: H.264 MP4
- **Resolution**: 1920x1080 (Full HD)
- **Bitrate**: ~6 Mbps
- **Duration**: 30-60 seconds (loops seamlessly)
- **Audio**: None (muted autoplay)
- **Optimization**: Compressed for web delivery
- **Fallback**: Consider WebM format for better compression

### Images
#### Gallery Images (`public/images/gallery-1.jpg` to `gallery-6.jpg`)
- **Format**: JPEG
- **Resolution**: 1920px width (maintain aspect ratio)
- **Quality**: 85% JPEG quality
- **Size**: <500KB per image
- **Alt text**: Descriptive text for accessibility

#### Panel Images (`public/images/panel-1.jpg` to `panel-3.jpg`)
- **Format**: JPEG
- **Resolution**: 1920px width
- **Aspect Ratio**: 16:9 or 4:3
- **Quality**: 90% JPEG quality

#### Social Media
- **Open Graph**: 1200x630px JPEG (`public/images/og-image.jpg`)
- **Twitter Card**: 1200x630px JPEG
- **Favicon**: 32x32px PNG (`public/favicon.ico`)

## 🚀 Development

### Prerequisites
- Node.js 18+ 
- npm or pnpm
- Git

### Installation
```bash
git clone https://github.com/dowadud/heem-s-holdings.git
cd heem-s-holdings
npm install
```

### Development Server
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build Commands
```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Production build
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata and fonts
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles and brand colors
│   ├── robots.ts           # SEO robots configuration
│   └── sitemap.ts          # SEO sitemap generation
├── components/
│   ├── Button.tsx          # Reusable button component
│   ├── StatCard.tsx        # Animated statistics cards
│   ├── SectionHeader.tsx   # Section headers with overlines
│   ├── CTA.tsx             # Call-to-action section
│   └── index.ts            # Component barrel exports
├── config/
│   └── site.ts             # Site configuration
└── lib/
    └── utils.ts            # Utility functions
```

## 🎭 Animation Features

- **Framer Motion**: Smooth scroll-triggered animations
- **Parallax Effects**: Sticky panels with differential scrolling
- **Count-up Animations**: Statistics animate on scroll into view
- **Intersection Observer**: Performance-optimized animation triggers
- **Responsive Design**: Animations adapt to mobile devices

## ♿ Accessibility

- **WCAG AA Compliant**: High contrast ratios maintained
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus States**: Visible focus indicators
- **Screen Readers**: Semantic HTML and proper ARIA labels
- **Reduced Motion**: Respects user motion preferences

## 🔍 SEO Features

- **Next.js Metadata API**: Complete meta tag configuration
- **Open Graph**: Social media preview optimization
- **Structured Data**: JSON-LD schema markup ready
- **Sitemap**: Automated sitemap generation
- **Robots.txt**: Search engine crawling directives

## 📱 Performance

- **Next.js 14**: Latest performance optimizations
- **Image Optimization**: Built-in Next.js image optimization ready
- **Code Splitting**: Automatic route-based code splitting
- **Font Optimization**: Google Fonts with display swap
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## 🔧 Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS v4 
- **Animations**: Framer Motion
- **Typography**: Playfair Display (serif) + Inter (sans-serif)
- **Language**: TypeScript
- **Build Tool**: Turbopack (development)

## 📝 Content Editing

Look for TODO comments in the code for easy content updates:

```typescript
// TODO(Nadhir): replace hero copy
// TODO(Nadhir): swap gallery images  
// TODO(Nadhir): update sector titles and links
```

## 🚢 Deployment

### Vercel (Recommended)
1. Connect your Git repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on git push

### Other Platforms
The project works with any Node.js hosting platform:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

### Environment Variables for Production
Set these in your hosting platform:
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_CONTACT_PHONE` 
- `NEXT_PUBLIC_CTA_PRIMARY_HREF`
- `NEXT_PUBLIC_CTA_SECONDARY_HREF`

## 📞 Support

For technical support or customization requests, contact the development team.

---

Built with ❤️ for Heems Holdings LLC