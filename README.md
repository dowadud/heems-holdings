# Heems Holdings LLC - Professional Website

A lightweight, responsive website for Heems Holdings LLC built with vanilla HTML, CSS, and JavaScript. Inspired by leading institutional real estate firms like Blackstone, this site provides a professional platform for showcasing real estate investment expertise.

## Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Professional Aesthetics**: Clean, modern design with neutral colors
- **Accessibility**: WCAG AA compliant with proper focus management
- **Performance**: Lightweight vanilla JavaScript for fast loading
- **Multi-page Structure**: Complete website with multiple sections
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML

## Design System

### Color Palette
- **Primary Background**: `#0B0D10` (Deep charcoal)
- **Secondary Background**: `#111317` (Dark gray)
- **Surface**: `#15181C` (Card backgrounds)
- **Primary Text**: `#FFFFFF` (White)
- **Secondary Text**: `#D9DBE1` (Light gray)
- **Muted Text**: `#A5A9B3` (Medium gray)
- **Borders**: `#2A2F36` (Subtle borders)
- **Accent**: `#9AA4B2` (Blue-gray accent)

### Typography
- **Font Stack**: Modern system fonts (Inter, SF Pro, Segoe UI)
- **Scale**: Responsive typography from 0.875rem to 3.5rem
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Layout
- **Container**: Max-width 1280px with 24px gutters
- **Grid**: Flexible CSS Grid system (1-4 columns)
- **Spacing**: Consistent scale from 4px to 96px

## File Structure

```
heems-holdings-llc/
├── index.html              # Homepage
├── assets/
│   ├── css/
│   │   └── main.css        # Main stylesheet with design system
│   ├── js/
│   │   └── main.js         # Interactive functionality
│   ├── images/             # Image assets
│   └── fonts/              # Custom fonts (if needed)
├── pages/
│   ├── about.html          # About page
│   ├── contact.html        # Contact page
│   ├── strategies.html     # Investment strategies
│   ├── insights.html       # Market insights
│   └── careers.html        # Career opportunities
└── README.md
```

## Components

### Navigation
- Sticky header with smooth scrolling
- Mobile-responsive hamburger menu
- Active page indicators
- Keyboard navigation support

### Hero Section
- Full-viewport background images
- Overlay gradients for text readability
- Call-to-action buttons
- Responsive typography

### Stats Section
- Animated counters on scroll
- Tabular number formatting
- Card-based layout

### Media Cards
- Consistent aspect ratios (16:9)
- Hover effects and transitions
- Accessible focus states

### Forms
- Client-side validation
- Loading states
- Success/error messaging
- Accessible form labels

## JavaScript Features

### Performance
- Debounced scroll handlers
- Intersection Observer for animations
- Efficient counter animations
- Lazy loading considerations

### Accessibility
- Skip to content links
- Focus management
- Keyboard navigation
- Screen reader compatibility

### Interactions
- Smooth scrolling
- Mobile menu toggle
- Quote slider with autoplay
- Form handling

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Getting Started

1. **Clone or download** the project files
2. **Open `index.html`** in a web browser
3. **For development**: Use a local server (VS Code Live Server, Python `http.server`, etc.)
4. **For production**: Upload files to any web hosting service

### Local Development

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx serve .

# Using PHP (if installed)
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Customization

### Colors
Update CSS custom properties in `assets/css/main.css`:
```css
:root {
  --bg-primary: #0B0D10;
  --text-primary: #FFFFFF;
  /* etc. */
}
```

### Content
- Edit HTML files directly for content changes
- Update contact information in multiple files
- Replace placeholder images with actual assets

### Styling
- All styles are in `assets/css/main.css`
- Mobile-first responsive design
- Utility classes for rapid development

## Performance Optimization

- **Images**: Use WebP format when possible, include alt text
- **Fonts**: System fonts eliminate external requests
- **CSS**: Single stylesheet, organized by components
- **JavaScript**: Vanilla JS, no external dependencies
- **Loading**: Critical CSS inlined, deferred non-critical resources

## SEO Features

- Semantic HTML structure
- Meta tags and Open Graph
- Structured data (JSON-LD)
- Proper heading hierarchy
- Image alt attributes
- Internal linking structure

## Accessibility Features

- WCAG AA color contrast
- Keyboard navigation
- Focus indicators
- Screen reader support
- Skip links
- Semantic landmarks

## Contact Information

For questions about this website or Heems Holdings LLC:

- **Email**: info@heemsholdings.com
- **Phone**: +1 (555) 123-4567
- **Website**: [heemsholdings.com](https://heemsholdings.com)

---

© 2024 Heems Holdings LLC. All rights reserved.