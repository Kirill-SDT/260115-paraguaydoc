# Frontend Developer Brief: ParaguayDoc Landing Page

**Project:** ParaguayDoc Immigration Services
**Date:** 2026-01-15
**For:** Frontend Developer Subagent
**From:** Analyst Subagent

---

## Technical Overview

You're implementing a static landing page (HTML/CSS/JavaScript) for an immigration services company targeting Russian-speaking audiences. The page must be fast (<3sec load), accessible (WCAG 2.1 AA), and optimized for mobile (70%+ of traffic).

**Critical Constraint:** Static site only — no backend server. Form submissions must use a third-party service or mailto fallback.

---

## Performance Requirements

### Target Metrics
- **Page Load Time:** < 3 seconds on slow 3G connection
- **Lighthouse Performance Score:** ≥ 90
- **First Contentful Paint (FCP):** < 1.5 seconds
- **Time to Interactive (TTI):** < 3.5 seconds
- **Largest Contentful Paint (LCP):** < 2.5 seconds

### Optimization Strategies

**Images:**
- Compress all images with TinyPNG or ImageOptim (target: <200KB per image)
- Use WebP format with JPEG/PNG fallbacks
- Implement `<picture>` element for responsive images:
  ```html
  <picture>
    <source srcset="hero-mobile.webp" media="(max-width: 767px)" type="image/webp">
    <source srcset="hero-desktop.webp" media="(min-width: 768px)" type="image/webp">
    <img src="hero-desktop.jpg" alt="ParaguayDoc team in Encarnación" loading="lazy">
  </picture>
  ```
- Apply `loading="lazy"` to all below-the-fold images
- Hero image should be optimized for fast LCP (consider inlining critical above-the-fold image as base64 if < 10KB)

**Fonts:**
- Load only necessary font weights (e.g., if design uses Regular 400 and Bold 700, don't load Light 300 or Black 900)
- Use `font-display: swap;` to prevent FOIT (Flash of Invisible Text)
- Consider preloading critical fonts:
  ```html
  <link rel="preload" href="fonts/crimson-pro-bold.woff2" as="font" type="font/woff2" crossorigin>
  ```
- Font file format priority: WOFF2 > WOFF > TTF

**CSS:**
- Inline critical CSS (above-the-fold styles) in `<head>`
- Defer non-critical CSS using `<link rel="preload" as="style">` or JavaScript-based loading
- Minify CSS for production
- Use CSS custom properties (variables) for easy theming and maintainability

**JavaScript:**
- Write vanilla ES6+ JavaScript (no jQuery or heavy frameworks)
- Minify JS for production
- Use `defer` attribute for scripts that don't need to block initial render:
  ```html
  <script src="script.js" defer></script>
  ```
- Avoid unnecessary dependencies — keep bundle size minimal

---

## Accessibility Requirements (WCAG 2.1 AA)

### Semantic HTML
- Use semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Maintain proper heading hierarchy: one `<h1>`, then `<h2>`, `<h3>` sequentially (no skipping levels)
- Use `<button>` for clickable actions, `<a>` for navigation
- Associate all form inputs with `<label>` elements using `for` attribute

### Color Contrast
- Body text: minimum 4.5:1 contrast ratio
- Large text (18px+ or 14px+ bold): minimum 3:1 contrast ratio
- Test all color combinations with WebAIM Contrast Checker

### Keyboard Navigation
- All interactive elements must be keyboard-accessible
- Implement visible focus states (do not remove default outlines without providing alternative):
  ```css
  button:focus, a:focus {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
  ```
- Logical tab order (test with Tab key)
- No keyboard traps (user can navigate away from all elements)

### Form Accessibility
- Each `<input>` must have an associated `<label>`:
  ```html
  <label for="name">Имя</label>
  <input type="text" id="name" name="name" required>
  ```
- Use `aria-required="true"` for required fields (in addition to HTML `required` attribute)
- Provide clear error messages for validation failures:
  ```html
  <input type="email" id="email" aria-describedby="email-error">
  <span id="email-error" class="error-message" role="alert">Пожалуйста, введите действительный email</span>
  ```

### Images & Alt Text
- All meaningful images require descriptive `alt` text:
  - Good: `alt="Команда ParaguayDoc в офисе Энкарнасьон"`
  - Bad: `alt="image"` or `alt="team"`
- Decorative images should have empty `alt=""` to hide from screen readers

### Testing
- Validate with WAVE (web accessibility evaluation tool)
- Test with keyboard-only navigation
- Test with screen reader (NVDA on Windows, VoiceOver on Mac)

---

## Russian Language Support

### Character Encoding
- Use UTF-8 encoding in HTML:
  ```html
  <meta charset="UTF-8">
  ```
- Ensure all text editors save files as UTF-8

### Font Selection
- Choose fonts with robust Cyrillic character sets
- Test all Russian characters (including ё, Ё, and special punctuation)
- Google Fonts with good Cyrillic support:
  - Noto Sans
  - Source Sans 3
  - IBM Plex Sans
  - Crimson Pro
  - JetBrains Mono

### Typography Considerations
- Russian text typically requires 1.15x-1.2x more horizontal space than English
- Test line wrapping and text overflow with actual Russian content
- Set `lang="ru"` on `<html>` element for proper hyphenation and spell-check:
  ```html
  <html lang="ru">
  ```

---

## Responsive Design (Mobile-First)

### Breakpoints
```css
/* Mobile: 320px - 767px (default styles) */
/* Tablet: 768px - 1023px */
@media (min-width: 768px) { /* tablet styles */ }

/* Desktop: 1024px+ */
@media (min-width: 1024px) { /* desktop styles */ }
```

### Mobile Priorities (70%+ traffic expected)
1. **Touch Targets:** All interactive elements minimum 44x44px (Apple HIG, Material Design)
2. **Readable Text:** Body text minimum 16px, line-height 1.5
3. **Simplified Navigation:** Hamburger menu or anchor links (avoid complex dropdowns)
4. **Optimized Images:** Serve smaller images to mobile (use `<picture>` or `srcset`)
5. **Vertical Timeline:** Convert horizontal timeline to vertical stacked layout on mobile

### Viewport Meta Tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## Form Submission (Static Site Constraint)

Since the site is static (no backend), choose one of these approaches:

### Option A: FormSubmit.co (Recommended for MVP)
- Free service that forwards form submissions to email
- Implementation:
  ```html
  <form action="https://formsubmit.co/your-email@example.com" method="POST">
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <input type="hidden" name="_next" value="https://yourdomain.com/thank-you.html">
    <input type="hidden" name="_subject" value="Новая заявка с сайта ParaguayDoc">
    <input type="hidden" name="_captcha" value="false">
    <button type="submit">Отправить</button>
  </form>
  ```
- Configure `_next` to redirect to a thank-you page after submission

### Option B: Formspree (Alternative)
- Similar to FormSubmit, requires email verification
- Implementation:
  ```html
  <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- form fields -->
  </form>
  ```

### Option C: Mailto Fallback (Least User-Friendly)
- Opens user's default email client
- Only use if no other option available:
  ```html
  <form action="mailto:your-email@example.com" method="POST" enctype="text/plain">
    <!-- fields -->
  </form>
  ```

### Form Validation
- Implement client-side validation with JavaScript before submission
- Provide inline error messages (don't rely solely on browser default validation)
- Example:
  ```javascript
  form.addEventListener('submit', (e) => {
    if (!validateEmail(emailInput.value)) {
      e.preventDefault();
      showError(emailInput, 'Пожалуйста, введите действительный email');
    }
  });
  ```

---

## Code Quality Standards

### HTML Validation
- All HTML must pass W3C Markup Validation Service
- Use semantic, well-structured markup
- Avoid deprecated tags or attributes

### CSS Validation
- All CSS must pass W3C CSS Validation Service
- Use consistent naming convention: **BEM (Block Element Modifier)**
  ```css
  .hero { }
  .hero__title { }
  .hero__title--large { }
  .button { }
  .button--primary { }
  .button--primary:hover { }
  ```

### JavaScript Best Practices
- Use `const` and `let` (avoid `var`)
- Write modular, reusable functions
- Comment complex logic:
  ```javascript
  // Debounce scroll events to improve performance on mobile
  const debouncedScroll = debounce(() => {
    updateActiveSection();
  }, 300);
  ```
- No console.log statements in production code
- Handle errors gracefully (try/catch for critical operations)

### Browser Compatibility
- Test in latest versions of:
  - Google Chrome
  - Mozilla Firefox
  - Apple Safari
  - Microsoft Edge
- Use Autoprefixer or manual vendor prefixes for CSS properties with limited support
- Avoid cutting-edge features without fallbacks

### Console Cleanliness
- Browser console must be free of errors and warnings in production
- Remove all debugging statements before delivery

---

## Recommended Tech Stack

**HTML5:** Semantic, accessible markup
**CSS3:** Custom properties (variables), Flexbox/Grid for layout, Mobile-First media queries
**Vanilla JavaScript (ES6+):** For interactions (scroll effects, form validation, timeline interactivity)

**Optional Enhancements:**
- **AOS (Animate On Scroll):** Lightweight library for scroll-triggered animations (~3KB gzipped)
- **SwiperJS:** If Designer requires a carousel/slider for testimonials (~30KB gzipped)

**Avoid:** jQuery, React, Vue (overkill for a static landing page and hurts performance)

---

## Interactive Elements to Implement

### Timeline Component
- **Desktop:** Horizontal scrollable timeline with clickable stages
- **Mobile:** Vertical stacked cards (no horizontal scroll)
- **Interaction:** Click/tap to expand details inline
- **Visual Feedback:** Hover state (desktop), active state (expanded), smooth transitions

### Service Tier Cards
- **Hover Effect:** Subtle lift + shadow on hover (desktop only)
- **CTA Buttons:** Clear hover/focus states
- **Responsive:** 3 columns on desktop, 1 column stacked on mobile

### Video Embed
- **Platform:** YouTube or Vimeo (preferred for performance)
- **Loading Strategy:** Lazy-load with facade (don't load iframe until user clicks play):
  ```html
  <div class="video-facade" data-video-id="YOUR_VIDEO_ID">
    <img src="video-thumbnail.jpg" alt="Видео-приветствие от ParaguayDoc">
    <button class="play-button" aria-label="Воспроизвести видео">▶</button>
  </div>
  ```
- Replace facade with iframe on click (saves bandwidth, improves LCP)

### Form Submission Feedback
- **Loading State:** Disable submit button + show spinner while submitting
- **Success State:** Show confirmation message, hide form
- **Error State:** Show error message, keep form visible for retry

---

## File Structure

```
output/
├── index.html              # Main landing page
├── styles.css              # All styles
├── script.js               # All JavaScript
├── images/
│   ├── hero.webp
│   ├── hero.jpg            # Fallback
│   ├── team-member-1.webp
│   └── ...
├── fonts/                  # If self-hosting fonts
│   ├── font-name.woff2
│   └── font-name.woff
└── README.md               # How to run/deploy the site
```

---

## Deliverables Expected

1. **index.html** — Fully semantic, accessible HTML structure
2. **styles.css** — Mobile-First responsive styles using BEM naming
3. **script.js** — Vanilla JavaScript for interactions (timeline, form validation, etc.)
4. **README.md** — Instructions for running locally and deploying
5. **Frontend Report** (`frontend_report.md`) — Summary of implementation decisions, performance results, accessibility testing outcomes

---

## Testing Checklist (Before Marking Complete)

- [ ] Lighthouse Performance score ≥ 90
- [ ] Lighthouse Accessibility score ≥ 95
- [ ] WAVE accessibility validation (0 errors)
- [ ] HTML passes W3C validation
- [ ] CSS passes W3C validation
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsive test (320px, 375px, 768px, 1024px, 1440px widths)
- [ ] Keyboard navigation test (Tab through all elements)
- [ ] Form submission test (successful submission → confirmation)
- [ ] Russian character rendering test (all Cyrillic characters display correctly)
- [ ] Console free of errors/warnings

---

## Final Notes

**Your goal:** Implement the designer's vision with pixel-perfect accuracy while maintaining bulletproof performance and accessibility. The page must load fast, work seamlessly on mobile, and feel professionally crafted — not like a generic template.

Remember: 70%+ of users will be on mobile, many on slower connections. Optimize aggressively. Every kilobyte matters.
