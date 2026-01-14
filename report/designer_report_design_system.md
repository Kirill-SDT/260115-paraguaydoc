# Design System: ParaguayDoc Landing Page

**Project:** ParaguayDoc Immigration Services
**Date:** 2026-01-15
**Designer:** E2 System

---

## Overview

This design system provides the complete library of typographic scales, color palettes, spacing units, grid structure, and component specifications for the ParaguayDoc landing page. All values are defined as CSS custom properties for consistency and maintainability.

---

## Typography System

### Font Loading

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@600;700&family=JetBrains+Mono:wght@400;500&family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet">
```

### Font Families (CSS Variables)

```css
:root {
  --font-headline: 'Crimson Text', Georgia, serif;
  --font-body: 'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;
}
```

### Type Scale

```css
:root {
  /* Headings */
  --font-size-h1: 4.5rem;        /* 72px */
  --font-size-h2: 3rem;          /* 48px */
  --font-size-h3: 2rem;          /* 32px */
  --font-size-h4: 1.5rem;        /* 24px */
  --font-size-h5: 1.25rem;       /* 20px */
  --font-size-h6: 1.125rem;      /* 18px */

  /* Body */
  --font-size-body-large: 1.25rem;   /* 20px */
  --font-size-body: 1.125rem;        /* 18px */
  --font-size-body-small: 1rem;      /* 16px */
  --font-size-caption: 0.875rem;     /* 14px */

  /* Mobile Overrides */
  --font-size-h1-mobile: 3rem;       /* 48px */
  --font-size-h2-mobile: 2rem;       /* 32px */
  --font-size-h3-mobile: 1.5rem;     /* 24px */
}

@media (max-width: 767px) {
  :root {
    --font-size-h1: var(--font-size-h1-mobile);
    --font-size-h2: var(--font-size-h2-mobile);
    --font-size-h3: var(--font-size-h3-mobile);
  }
}
```

### Font Weights

```css
:root {
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### Line Heights

```css
:root {
  --line-height-tight: 1.1;      /* Headlines */
  --line-height-normal: 1.5;     /* Body text */
  --line-height-relaxed: 1.75;   /* Long-form content */
}
```

### Typographic Styles

```css
/* H1 - Hero Headline */
h1, .h1 {
  font-family: var(--font-headline);
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  color: var(--color-text-primary);
  margin-bottom: var(--space-lg);
}

/* H2 - Section Headline */
h2, .h2 {
  font-family: var(--font-headline);
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-text-primary);
  margin-bottom: var(--space-md);
}

/* H3 - Subsection Headline */
h3, .h3 {
  font-family: var(--font-body);
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
}

/* Body Text */
body, p, .body {
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  color: var(--color-text-primary);
}

/* Large Body (Lead Paragraph) */
.lead {
  font-size: var(--font-size-body-large);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
}

/* Caption / Small Text */
.caption {
  font-size: var(--font-size-caption);
  line-height: var(--line-height-normal);
  color: var(--color-text-secondary);
}

/* Monospace (Data/Timeline Labels) */
.mono {
  font-family: var(--font-mono);
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-regular);
  letter-spacing: 0.02em;
}
```

---

## Color System

### Primary Palette

```css
:root {
  /* Primary - Terracotta */
  --color-primary: #D4734B;
  --color-primary-dark: #B85D3A;    /* Hover/Active state */
  --color-primary-light: #E29977;   /* Subtle backgrounds */

  /* Secondary - Sage Green */
  --color-secondary: #8FA888;
  --color-secondary-dark: #7A9173;
  --color-secondary-light: #AAC3A3;

  /* Accent - Warm Amber */
  --color-accent: #F2A950;
  --color-accent-dark: #D99342;
  --color-accent-light: #F5BF7A;
}
```

### Neutral Palette

```css
:root {
  /* Background */
  --color-bg-primary: #FAF7F2;       /* Warm cream */
  --color-bg-secondary: #F2EDE5;     /* Slightly darker cream */
  --color-bg-tertiary: #FFFFFF;      /* Pure white for cards */

  /* Text */
  --color-text-primary: #2D2D2D;     /* Deep charcoal */
  --color-text-secondary: #5A5A5A;   /* Medium gray */
  --color-text-tertiary: #8C8C8C;    /* Light gray (captions) */
  --color-text-inverse: #FFFFFF;     /* White text on dark bg */

  /* Borders */
  --color-border-light: #E0D9CE;     /* Subtle dividers */
  --color-border-medium: #C9BFB0;    /* Standard borders */
  --color-border-dark: #A69A88;      /* Strong dividers */
}
```

### Semantic Colors

```css
:root {
  /* Success */
  --color-success: #6BA368;
  --color-success-bg: #E8F5E7;

  /* Warning */
  --color-warning: #F2A950;  /* Same as accent */
  --color-warning-bg: #FFF4E5;

  /* Error */
  --color-error: #D64545;
  --color-error-bg: #FCE8E8;

  /* Info */
  --color-info: #5B9BD5;
  --color-info-bg: #E8F2FA;
}
```

### Overlay & Shadow

```css
:root {
  /* Overlays */
  --color-overlay-light: rgba(45, 45, 45, 0.05);   /* Subtle hover */
  --color-overlay-medium: rgba(45, 45, 45, 0.15);  /* Moderate overlay */
  --color-overlay-dark: rgba(45, 45, 45, 0.5);     /* Modal backdrop */

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(45, 45, 45, 0.08);
  --shadow-md: 0 4px 12px rgba(45, 45, 45, 0.1);
  --shadow-lg: 0 8px 24px rgba(45, 45, 45, 0.12);
  --shadow-xl: 0 16px 48px rgba(45, 45, 45, 0.15);
}
```

---

## Spacing System

### Base Unit: 8px

```css
:root {
  --space-xs: 0.5rem;    /* 8px */
  --space-sm: 1rem;      /* 16px */
  --space-md: 1.5rem;    /* 24px */
  --space-lg: 2.5rem;    /* 40px */
  --space-xl: 4rem;      /* 64px */
  --space-2xl: 6rem;     /* 96px */
  --space-3xl: 8rem;     /* 128px */

  /* Section Spacing */
  --section-padding-mobile: var(--space-xl);    /* 64px */
  --section-padding-desktop: var(--space-2xl);  /* 96px */
}

@media (max-width: 767px) {
  :root {
    --section-padding: var(--section-padding-mobile);
  }
}

@media (min-width: 768px) {
  :root {
    --section-padding: var(--section-padding-desktop);
  }
}
```

---

## Grid System

### Container

```css
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

@media (max-width: 767px) {
  .container {
    padding: 0 var(--space-sm);
  }
}
```

### 12-Column Grid

```css
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-md);
}

@media (max-width: 767px) {
  .grid {
    grid-template-columns: 1fr;  /* Single column on mobile */
  }
}

/* Column Spans */
.col-1 { grid-column: span 1; }
.col-2 { grid-column: span 2; }
.col-3 { grid-column: span 3; }
.col-4 { grid-column: span 4; }
.col-5 { grid-column: span 5; }
.col-6 { grid-column: span 6; }
.col-7 { grid-column: span 7; }
.col-8 { grid-column: span 8; }
.col-9 { grid-column: span 9; }
.col-10 { grid-column: span 10; }
.col-11 { grid-column: span 11; }
.col-12 { grid-column: span 12; }
```

---

## Component Library

### Buttons

#### Primary Button

```css
.button {
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-semibold);
  padding: var(--space-sm) var(--space-lg);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;  /* Touch-friendly */
}

.button--primary {
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
}

.button--primary:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.button--primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.button--primary:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}
```

#### Secondary Button

```css
.button--secondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.button--secondary:hover {
  background-color: var(--color-primary-light);
  border-color: var(--color-primary-dark);
  transform: translateY(-2px);
}
```

#### Ghost Button

```css
.button--ghost {
  background-color: transparent;
  color: var(--color-text-primary);
  border: none;
}

.button--ghost:hover {
  background-color: var(--color-overlay-light);
}
```

---

### Cards

#### Standard Card

```css
.card {
  background-color: var(--color-bg-tertiary);
  border: 1px solid var(--color-border-light);
  border-radius: 12px;
  padding: var(--space-lg);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-border-medium);
}
```

#### Service Tier Card

```css
.tier-card {
  background-color: var(--color-bg-tertiary);
  border: 2px solid var(--color-border-light);
  border-radius: 12px;
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.tier-card__name {
  font-family: var(--font-headline);
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
}

.tier-card__price {
  font-family: var(--font-mono);
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--space-md);
}

.tier-card__features {
  list-style: none;
  padding: 0;
  margin: var(--space-md) 0;
  flex-grow: 1;
}

.tier-card__features li {
  padding: var(--space-xs) 0;
  padding-left: var(--space-md);
  position: relative;
}

.tier-card__features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--color-success);
  font-weight: var(--font-weight-bold);
}

.tier-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}

.tier-card--recommended {
  border-color: var(--color-primary);
  position: relative;
}

.tier-card--recommended::before {
  content: "Рекомендуем";
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-accent);
  color: var(--color-text-inverse);
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-semibold);
  padding: 4px 12px;
  border-radius: 20px;
}
```

---

### Forms

#### Input Field

```css
.form-group {
  margin-bottom: var(--space-md);
}

.form-label {
  display: block;
  font-family: var(--font-body);
  font-size: var(--font-size-body-small);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-xs);
}

.form-input {
  width: 100%;
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  padding: var(--space-sm) var(--space-md);
  border: 2px solid var(--color-border-medium);
  border-radius: 8px;
  background-color: var(--color-bg-tertiary);
  color: var(--color-text-primary);
  transition: all 0.2s ease;
  min-height: 48px;  /* Touch-friendly */
}

.form-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-light);
}

.form-input::placeholder {
  color: var(--color-text-tertiary);
}

.form-input--error {
  border-color: var(--color-error);
}

.form-input--error:focus {
  box-shadow: 0 0 0 3px var(--color-error-bg);
}
```

#### Error Message

```css
.form-error {
  display: block;
  font-size: var(--font-size-caption);
  color: var(--color-error);
  margin-top: var(--space-xs);
}
```

#### Radio Buttons

```css
.form-radio-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.form-radio {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: var(--space-sm);
  border: 2px solid var(--color-border-light);
  border-radius: 8px;
  transition: all 0.2s ease;
}

.form-radio:hover {
  border-color: var(--color-border-medium);
  background-color: var(--color-overlay-light);
}

.form-radio input[type="radio"] {
  margin-right: var(--space-sm);
  width: 20px;
  height: 20px;
  accent-color: var(--color-primary);
}

.form-radio__label {
  font-weight: var(--font-weight-regular);
}

.form-radio input[type="radio"]:checked + .form-radio__label {
  font-weight: var(--font-weight-semibold);
}
```

---

### Timeline Component

#### Timeline Container

```css
.timeline {
  position: relative;
  padding: var(--space-xl) 0;
}

/* Desktop: Horizontal */
@media (min-width: 768px) {
  .timeline {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .timeline::before {
    content: "";
    position: absolute;
    top: 40px;
    left: 10%;
    right: 10%;
    height: 2px;
    background-color: var(--color-border-medium);
    z-index: 0;
  }
}

/* Mobile: Vertical */
@media (max-width: 767px) {
  .timeline {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
  }

  .timeline::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 20px;
    width: 2px;
    background-color: var(--color-border-medium);
    z-index: 0;
  }
}
```

#### Timeline Stage

```css
.timeline-stage {
  position: relative;
  flex: 1;
  cursor: pointer;
  transition: all 0.3s ease;
}

@media (min-width: 768px) {
  .timeline-stage {
    text-align: center;
  }
}

@media (max-width: 767px) {
  .timeline-stage {
    padding-left: var(--space-2xl);
  }
}

.timeline-stage__icon {
  width: 48px;
  height: 48px;
  background-color: var(--color-bg-tertiary);
  border: 3px solid var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin: 0 auto var(--space-sm);
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

@media (max-width: 767px) {
  .timeline-stage__icon {
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
  }
}

.timeline-stage:hover .timeline-stage__icon {
  transform: scale(1.1);
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  box-shadow: var(--shadow-md);
}

.timeline-stage__label {
  font-family: var(--font-mono);
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  margin-bottom: var(--space-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.timeline-stage__time {
  font-size: var(--font-size-caption);
  color: var(--color-text-secondary);
}

.timeline-stage__details {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
  margin-top: var(--space-md);
}

.timeline-stage--active .timeline-stage__details {
  max-height: 500px;
}

.timeline-stage--active .timeline-stage__icon {
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
}
```

---

### Testimonial Block

```css
.testimonial {
  display: flex;
  gap: var(--space-lg);
  padding: var(--space-xl);
  background-color: var(--color-bg-tertiary);
  border-radius: 12px;
  border-left: 4px solid var(--color-primary);
}

@media (max-width: 767px) {
  .testimonial {
    flex-direction: column;
    gap: var(--space-md);
  }
}

.testimonial__photo {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

.testimonial__content {
  flex: 1;
}

.testimonial__quote {
  font-size: var(--font-size-body-large);
  font-style: italic;
  color: var(--color-text-primary);
  margin-bottom: var(--space-md);
  line-height: var(--line-height-relaxed);
}

.testimonial__quote::before {
  content: """;
  font-size: 3rem;
  color: var(--color-primary-light);
  line-height: 0;
  vertical-align: -0.4em;
}

.testimonial__author {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.testimonial__meta {
  font-size: var(--font-size-caption);
  color: var(--color-text-secondary);
  margin-top: var(--space-xs);
}
```

---

## Animation & Motion

### Transitions

```css
:root {
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms ease;
}

/* Fade In on Scroll */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-on-scroll {
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
}

.animate-on-scroll--delay-1 { animation-delay: 0.1s; }
.animate-on-scroll--delay-2 { animation-delay: 0.2s; }
.animate-on-scroll--delay-3 { animation-delay: 0.3s; }
```

---

## Accessibility

### Focus States

All interactive elements must have visible focus indicators:

```css
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
  border-radius: 4px;
}

button:focus-visible, a:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}
```

### Skip Link

```css
.skip-link {
  position: absolute;
  top: -100px;
  left: 0;
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  padding: var(--space-sm) var(--space-md);
  z-index: 100;
  transition: top 0.2s ease;
}

.skip-link:focus {
  top: 0;
}
```

---

## Responsive Breakpoints

```css
/* Mobile: 320px - 767px (default) */
/* Tablet: 768px - 1023px */
/* Desktop: 1024px+ */

@media (min-width: 768px) {
  /* Tablet styles */
}

@media (min-width: 1024px) {
  /* Desktop styles */
}
```

---

## Implementation Notes

1. **All CSS custom properties should be defined in `:root`** for global access
2. **Use `rem` units for spacing and typography** for consistent scaling
3. **Mobile-First approach:** Default styles are mobile, use `min-width` media queries to enhance for larger screens
4. **Lazy-load images** below the fold for performance
5. **Test all interactive states** (default, hover, focus, active, disabled) in each component
6. **Verify color contrast** for WCAG AA compliance (4.5:1 for body text, 3:1 for large text)

This design system provides a complete foundation for implementing the ParaguayDoc landing page with consistency, accessibility, and visual distinction.
