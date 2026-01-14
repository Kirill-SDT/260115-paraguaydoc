# Frontend Implementation Brief: ParaguayDoc Landing Page

**Project:** ParaguayDoc Immigration Services
**Date:** 2026-01-15
**From:** Designer Subagent
**For:** Frontend Developer Subagent

---

## Overview

You're implementing an editorial-style landing page that builds trust through transparency, warm aesthetics, and human connection. This is **not a generic template** — every design decision was made to differentiate ParaguayDoc from scammy competitors.

**Your Mission:** Preserve the distinctive visual identity while delivering excellent performance (<3sec load) and accessibility (WCAG 2.1 AA).

---

## Reference Documents

Read these in order:

1. **designer_report_design_system.md** — Your source of truth for all CSS variables, typography, colors, spacing, and components
2. **designer_report_design_specifications.md** — Section-by-section layout guide with responsive behavior
3. **analyst_for_frontend.md** — Technical requirements from Analyst (performance, accessibility, Russian language support)

---

## Critical Design Decisions (Do NOT Compromise)

### 1. Typography

**Fonts:**
```
Headline: Crimson Text (600 SemiBold, 700 Bold)
Body: Source Sans 3 (400 Regular, 600 SemiBold)
Data/Timeline: JetBrains Mono (400 Regular, 500 Medium)
```

**Load from Google Fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@600;700&family=JetBrains+Mono:wght@400;500&family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet">
```

**Critical:** Use `font-display: swap;` to prevent FOIT (already in URL above).

**Type Scale:**
- H1: 72px (desktop), 48px (mobile) — Crimson Text Bold
- H2: 48px (desktop), 32px (mobile) — Crimson Text SemiBold
- Body: 18px — Source Sans 3 Regular
- Timeline labels: 14px — JetBrains Mono Regular

**Why This Matters:** These fonts create editorial sophistication and avoid generic "AI slop" aesthetics. Do NOT substitute with Inter, Roboto, or system fonts.

---

### 2. Color Palette

**Primary Colors:**
```css
--color-primary: #D4734B;        /* Terracotta */
--color-secondary: #8FA888;      /* Sage Green */
--color-accent: #F2A950;         /* Warm Amber */
--color-bg-primary: #FAF7F2;     /* Warm Cream */
--color-text-primary: #2D2D2D;   /* Deep Charcoal */
```

**Why This Matters:** The warm, earthy palette creates trust and comfort. Do NOT change to blues, purples, or corporate grays.

**Verify Contrast:** All text-to-background combinations must meet:
- Body text (18px): 4.5:1 minimum
- Large text (24px+): 3:1 minimum

Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify.

---

### 3. Layout Philosophy

**Asymmetry Over Symmetry:**
- Hero section: 60/40 split (NOT centered)
- Staggered content blocks throughout
- Intentional whitespace (96px section padding on desktop)

**Mobile-First:**
- 70%+ traffic expected on mobile
- Design mobile layout first, enhance for desktop
- All interactive elements minimum 44x44px (touch-friendly)

**Why This Matters:** Asymmetric layouts create editorial sophistication and break away from generic templates.

---

## Implementation Priorities (In Order)

### Priority 1: Typography & Font Loading

1. **Load Google Fonts correctly** (see HTML snippet above)
2. **Define CSS custom properties** from `designer_report_design_system.md`
3. **Apply typographic styles** to all headings, body text, labels
4. **Test with Russian text** — Ensure Cyrillic characters render correctly

**Validation:**
- View page in browser, inspect fonts in DevTools
- All headings should show Crimson Text
- All body text should show Source Sans 3
- Timeline labels should show JetBrains Mono

---

### Priority 2: Color System & Backgrounds

1. **Define all CSS custom properties** for colors (see Design System)
2. **Apply background colors** to sections:
   - Hero: --color-bg-primary (warm cream)
   - Main sections: --color-bg-primary
   - Cards: --color-bg-tertiary (white)
   - Footer: --color-bg-secondary (slightly darker cream)
3. **Set text colors** according to hierarchy

**Validation:**
- Page should feel warm, not sterile
- No pure white (#FFFFFF) except on cards
- Run contrast checks on all text

---

### Priority 3: Timeline Component (Most Complex)

The timeline is the centerpiece of the design. It requires JavaScript for interactivity.

**Desktop (768px+):**
- Horizontal layout, 5 stages evenly spaced
- Connecting line between stage icons
- Click to expand details inline

**Mobile (< 768px):**
- Vertical layout, stages stacked
- Vertical connecting line on left
- Tap to expand details below

**Implementation:**
```javascript
// Pseudocode
document.querySelectorAll('.timeline-stage').forEach(stage => {
  stage.addEventListener('click', () => {
    // Toggle active class
    stage.classList.toggle('timeline-stage--active');
    // Expand/collapse details
    const details = stage.querySelector('.timeline-stage__details');
    details.style.maxHeight = stage.classList.contains('timeline-stage--active')
      ? details.scrollHeight + 'px'
      : '0';
  });
});
```

**Validation:**
- Click/tap each stage to expand
- Only one stage should be active at a time (optional: implement accordion behavior)
- Smooth height transition (0.4s ease)

---

### Priority 4: Service Tier Cards

Three cards side-by-side on desktop, stacked on mobile.

**Middle card (Ускоренный) must have:**
- `.tier-card--recommended` class
- Badge above card: "Рекомендуем"
- Stronger border color (--color-primary)

**Hover effect:**
- Lift 6px (`transform: translateY(-6px)`)
- Increase shadow (--shadow-lg)
- Border color intensifies

**Validation:**
- Hover over each card on desktop (should lift smoothly)
- Recommended card should be visually distinct
- Mobile: cards stack vertically with consistent spacing

---

### Priority 5: Form Submission

**Static Site Constraint:** Use FormSubmit.co or Formspree (see `analyst_for_frontend.md`).

**Recommended: FormSubmit.co**
```html
<form action="https://formsubmit.co/your-email@example.com" method="POST">
  <input type="hidden" name="_next" value="https://yourdomain.com/thank-you.html">
  <input type="hidden" name="_subject" value="Новая заявка с сайта ParaguayDoc">
  <input type="hidden" name="_captcha" value="false">
  <!-- form fields -->
</form>
```

**JavaScript Enhancement:**
1. Client-side validation before submission
2. Show loading state (disable button, show spinner)
3. Handle success/error states visually

**Validation:**
- Submit form with valid data → Success message appears
- Submit with invalid data → Inline error messages show
- Test on mobile (form should be easy to fill)

---

## Performance Targets

**Target Metrics:**
- Page Load Time: < 3 seconds (slow 3G)
- Lighthouse Performance: ≥ 90
- Lighthouse Accessibility: ≥ 95
- First Contentful Paint: < 1.5s

**Optimization Checklist:**
- [ ] Compress all images (WebP with JPEG/PNG fallbacks)
- [ ] Lazy-load video and below-the-fold images
- [ ] Inline critical CSS (above-the-fold styles in `<head>`)
- [ ] Defer non-critical JavaScript
- [ ] Minify CSS and JS for production
- [ ] Preload critical fonts

**Test with:**
- Chrome DevTools → Lighthouse
- Slow 3G throttling
- Mobile device (real or emulated)

---

## Accessibility Requirements (WCAG 2.1 AA)

**Must Have:**
- [ ] All images have meaningful `alt` text
- [ ] Form `<label>` elements properly associated with `<input>` fields
- [ ] Keyboard navigation works (Tab through all interactive elements)
- [ ] Visible focus indicators (2px solid --color-primary, 3px offset)
- [ ] Heading hierarchy is sequential (H1 → H2 → H3, no skipping)
- [ ] Color contrast verified (4.5:1 for body text, 3:1 for large text)

**Test with:**
- WAVE browser extension
- Keyboard-only navigation (unplug mouse)
- Screen reader (NVDA on Windows, VoiceOver on Mac)

---

## Russian Language Considerations

**Character Encoding:**
```html
<meta charset="UTF-8">
<html lang="ru">
```

**Font Testing:**
- Test all Russian characters: А Б В Г Д Е Ё Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ъ Ы Ь Э Ю Я
- Test lowercase: а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я
- Ensure ё (yo) renders correctly (often missing in bad font files)

**Typography Adjustments:**
- Russian text typically requires 1.15-1.2x more horizontal space
- Test line wrapping with actual Russian content
- Set appropriate line-height (1.5 for body text)

---

## Responsive Breakpoints

```css
/* Mobile: 320px - 767px (default styles) */
/* Tablet: 768px - 1023px */
@media (min-width: 768px) { /* tablet styles */ }

/* Desktop: 1024px+ */
@media (min-width: 1024px) { /* desktop styles */ }
```

**Test at These Widths:**
- 320px (iPhone SE)
- 375px (iPhone X/11/12/13)
- 768px (iPad portrait)
- 1024px (iPad landscape / small desktop)
- 1440px (standard desktop)

---

## Code Quality Standards

**HTML:**
- Valid semantic HTML5
- Pass W3C Markup Validator
- Use BEM naming convention for CSS classes

**CSS:**
- Use CSS custom properties (variables) from Design System
- Mobile-First media queries
- Pass W3C CSS Validator
- BEM naming: `.block__element--modifier`

**JavaScript:**
- Vanilla ES6+ (no jQuery)
- Modular, commented code
- No console.log in production

**Browser Compatibility:**
- Latest Chrome, Firefox, Safari, Edge
- Test on real mobile devices if possible

---

## Files to Deliver

1. **index.html** — Semantic, accessible HTML
2. **styles.css** — Mobile-First responsive CSS with BEM naming
3. **script.js** — Vanilla JavaScript for timeline, form validation, scroll animations
4. **README.md** — How to run locally and deploy
5. **images/** — Optimized images (if any provided)
6. **frontend_report.md** — Summary of implementation, testing results, any deviations from design

---

## Critical "Do NOT" List

**Do NOT:**
- ❌ Change fonts to Inter, Roboto, or system fonts
- ❌ Change color palette (especially to blues, purples, or corporate grays)
- ❌ Center the hero layout (must be 60/40 asymmetric)
- ❌ Remove the timeline component or simplify it to a boring list
- ❌ Use stock photos (unless real photos are unavailable, in which case omit images)
- ❌ Add fake urgency elements ("Only 2 spots left!")
- ❌ Hide pricing or use "от $X" ranges (must show exact figures)

**Why This Matters:** These design decisions are intentional differentiators from generic competitor sites.

---

## Questions or Clarifications

If any design specification is unclear:

1. **First:** Refer to `designer_report_design_system.md` for detailed specs
2. **Second:** Check `designer_report_design_specifications.md` for section-by-section guidance
3. **Third:** Use your best judgment based on the overall design philosophy (editorial, asymmetric, warm, transparent)

**Guiding Principle:** When in doubt, choose the option that feels more editorial, more human, and less template-like.

---

## Final Notes

This design is **intentionally distinctive** to stand out from generic immigration agency sites. Your implementation should preserve:

1. **Editorial typography** (Crimson Text + Source Sans 3)
2. **Warm color palette** (terracotta, sage, cream)
3. **Asymmetric layouts** (60/40 splits, staggered blocks)
4. **Trust-building transparency** (exact pricing, realistic timelines, real people)

If the final implementation looks like it could have come from a free template, something went wrong. It should feel bespoke, human, and trustworthy.

**Good luck with the implementation!** The design system and specifications provide everything you need for pixel-perfect execution.
