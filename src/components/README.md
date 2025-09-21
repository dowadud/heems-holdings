# Heems Holdings Components

A collection of reusable React components styled with the brand palette and Tailwind CSS.

## Components

### Button
Versatile button component with brand-specific styling.

```tsx
<Button variant="solid" color="gold" size="lg">
  Click me
</Button>

<Button variant="outline" color="navy" asChild>
  <a href="/contact">Contact Us</a>
</Button>
```

**Props:**
- `variant`: "solid" | "outline" (default: "solid")
- `color`: "navy" | "gold" | "green" (default: "navy") 
- `size`: "sm" | "md" | "lg" (default: "md")
- `asChild`: boolean - renders as span for composition (default: false)

### SectionHeader
Header component with optional overline, title, and description.

```tsx
<SectionHeader
  overline="Our Story"
  title="About Heems Holdings"
  description="Leading the future of real estate investment"
/>
```

**Props:**
- `title`: string (required)
- `overline`: string (optional) - small text above title
- `description`: string (optional) - description below title
- `centered`: boolean (default: true)

### StatCard
Animated statistic card with count-up animation on intersection.

```tsx
<StatCard
  value={250}
  suffix="M+"
  label="Assets Under Management"
/>
```

**Props:**
- `label`: string (required)
- `value`: number (required) - animates from 0 to this value
- `suffix`: string (optional) - text appended to number

### CTA
Call-to-action section that pulls configuration from site config.

```tsx
<CTA />
```

Uses configuration from `siteConfig.ctaPrimaryHref`, `siteConfig.ctaSecondaryHref`, etc.

## Brand Colors

- `navy`: #0a2540 (primary)
- `gold`: #c6a15b (secondary accent)
- `green`: #1f3b2d (matches logo)
- `cream`: #e8e3d7 (text accent)
- `coal`: #0b0d10 (background)

## Usage

```tsx
// Import individual components
import { Button, StatCard } from '@/components'

// Or import from individual files
import { Button } from '@/components/Button'
```
