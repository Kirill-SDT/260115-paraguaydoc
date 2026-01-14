# Design Specifications: ParaguayDoc Landing Page

**Project:** ParaguayDoc Immigration Services
**Date:** 2026-01-15
**Designer:** E2 System

---

## Page Structure Overview

The landing page follows a single-page scroll layout with the following sections:

1. **Hero Section** — Fear-First introduction with video
2. **Timeline Section** — Interactive process visualization
3. **Service Tiers Section** — Three pricing options with comparison
4. **Social Proof Section** — Client testimonials and case studies
5. **Team & Trust Section** — Who we are, office location
6. **CTA/Form Section** — Consultation booking form
7. **Footer** — Contact info, legal links

**Total estimated height:** 6000-7000px (desktop), varies on mobile

---

## Section 1: Hero Section

### Purpose
Address the #1 fear immediately ("Will I get scammed?") and establish trust through transparency.

### Layout

**Desktop (1024px+):**
- Full viewport height (100vh, min 600px)
- Asymmetric 60/40 split layout
- Left side (60%): Text content
- Right side (40%): Video embed

**Mobile (< 768px):**
- Vertical stack
- Text content first
- Video embed below
- Total height: ~80vh

### Content Elements

#### Headline (H1)
```
"Боитесь, что вас обманут?"
```
- Font: Crimson Text Bold, 72px (desktop), 48px (mobile)
- Color: --color-text-primary
- Max-width: 600px
- Margin-bottom: 24px

#### Subheadline (Lead)
```
"Давайте говорить честно. Мы покажем реальный процесс, реальных людей и реальные сроки — без сюрпризов и без бюрократических кошмаров."
```
- Font: Source Sans 3 Regular, 20px
- Color: --color-text-secondary
- Max-width: 560px
- Line-height: 1.75
- Margin-bottom: 40px

#### CTA Button
```
"Начать честный разговор"
```
- Component: `.button--primary`
- Positioned below subheadline
- Min-width: 240px on desktop
- Full-width on mobile

#### Video Embed
- Platform: YouTube or Vimeo
- Aspect ratio: 16:9
- Max-width: 480px on desktop
- Full-width on mobile (with padding)
- Lazy-load with facade (thumbnail + play button until clicked)
- Border-radius: 12px
- Box-shadow: --shadow-lg

### Background
- Color: --color-bg-primary (warm cream)
- Optional: Subtle texture overlay (grain or gradient)
- **No hero image** unless real photo of Encarnación office is available

### Responsive Behavior
| Breakpoint | Layout | Video Size |
|-----------|--------|------------|
| < 768px | Stacked vertical | Full width |
| 768px - 1023px | 50/50 split | 400px wide |
| 1024px+ | 60/40 split | 480px wide |

---

## Section 2: Timeline Section

### Purpose
Show the entire immigration process visually to reduce anxiety and make the unknown known.

### Section Header
```
"Ваш путь к ПМЖ в Парагвае"
```
- Font: Crimson Text SemiBold, 48px (desktop), 32px (mobile)
- Color: --color-text-primary
- Text-align: center
- Margin-bottom: 64px

### Toggle Buttons
Located above timeline, centered:
```
[Standard путь] [Ускоренный путь]
```
- Two radio-style toggle buttons
- Active state: --color-primary background, white text
- Inactive state: transparent background, --color-text-primary text
- Clicking toggles between two timeline views (Standard vs Accelerated)

### Timeline Layout

**Desktop (768px+):**
- Horizontal layout
- 5 stages evenly spaced
- Connecting line between stage icons
- Each stage clickable/expandable

**Mobile (< 768px):**
- Vertical layout
- Vertical connecting line on left side
- Stages stacked with consistent spacing

### Timeline Stages

**Stage 1: Подготовка документов**
- Icon: 📄 (or document icon)
- Time (Standard): "До приезда"
- Time (Accelerated): "До приезда"
- Details (expandable):
  - List of required documents
  - Can get criminal record check in Paraguay (note about cost)

**Stage 2: Прилет и подача**
- Icon: ✈️ (or plane icon)
- Time (Standard): "День 1-3"
- Time (Accelerated): "День 1"
- Details:
  - Meeting at airport (optional service)
  - One visit to migration office with lawyer
  - Document submission

**Stage 3: Ожидание Admisión Temporaria**
- Icon: ⏳ (or clock icon)
- Time (Standard): "3-4 месяца"
- Time (Accelerated): "1.5-2 месяца"
- Details:
  - Can leave Paraguay during this period
  - We track status and notify you

**Stage 4: Подача на Cédula**
- Icon: 🆔 (or ID card icon)
- Time (Standard): "После получения AT"
- Time (Accelerated): "Ускоренная обработка"
- Details:
  - One visit to Identificación office
  - We can collect by power of attorney

**Stage 5: Получение Cédula**
- Icon: ✓ (or checkmark icon)
- Time (Standard): "2-3 месяца"
- Time (Accelerated): "2-3 дня"
- Details:
  - Total timeline: 6-7 months (Standard) or 2.5-4 months (Accelerated)
  - We can ship via DHL to any country

### Interactive Behavior
- **Click/Tap Stage:** Expands details below (mobile) or inline (desktop)
- **Hover (Desktop):** Icon scales 1.1x, background fills with --color-primary
- **Active State:** Icon filled with --color-primary, details visible

### Spacing
- Section padding: --section-padding (96px desktop, 64px mobile)
- Stage gap: 80px horizontal (desktop), 48px vertical (mobile)

---

## Section 3: Service Tiers Section

### Purpose
Present three pricing options with honest descriptions and clear trade-offs.

### Section Header
```
"Выберите ваш путь"
```
- Font: Crimson Text SemiBold, 48px (desktop), 32px (mobile)
- Color: --color-text-primary
- Text-align: center
- Margin-bottom: 64px

### Layout

**Desktop (1024px+):**
- Three cards side-by-side
- Equal width (with flex or grid)
- Gap: 32px

**Tablet (768px - 1023px):**
- Three cards in a row (narrower)
- Gap: 24px

**Mobile (< 768px):**
- Stacked vertically
- Gap: 24px
- Full width cards

### Tier Cards

#### Card 1: Базовый ($1,400)
- Component: `.tier-card`
- **Not marked as recommended**

**Content:**
```
Name: "Базовый"
Price: "$1,400"
Timeline: "6-7 месяцев"

Features:
✓ Admisión Temporaria
✓ Подача на Cédula
✓ Один визит в миграцию с юристом
✓ Один визит в Identificación
✓ Можем забрать Cédula по доверенности

Для кого: "Семьи и удаленные специалисты с бюджетом $5-10k, которым важна прозрачность и не критична скорость."

Disclaimer: "Занимает больше времени, но процесс честный и надежный."

[Button: "Записаться на консультацию"]
```

#### Card 2: Ускоренный ($2,200) **RECOMMENDED**
- Component: `.tier-card.tier-card--recommended`
- Badge above card: "Рекомендуем"

**Content:**
```
Name: "Ускоренный"
Price: "$2,200"
Timeline: "2.5-4 месяца"

Features:
✓ Ускоренная Admisión Temporaria (1.5-2 месяца)
✓ Ускоренная Cédula (1.5-2 месяца)
✓ Забираем Cédula по доверенности
✓ Меньше визитов, больше удобства

Для кого: "Предприниматели и семьи, которым важна скорость и готовы заплатить за комфорт."

Disclaimer: "Лучший баланс цены и скорости для большинства клиентов."

[Button: "Записаться на консультацию"]
```

#### Card 3: SUACE ПМЖ ($6,000 - $9,500)
- Component: `.tier-card`

**Content:**
```
Name: "SUACE (ПМЖ)"
Price: "$6,000 - $9,500"
Timeline: "Индивидуально"

Features:
✓ Открытие компании (опционально)
✓ Бухгалтерия 6 месяцев
✓ Разработка бизнес-проекта
✓ Сопровождение в SUACE
✓ Найм 5 работников
✓ Ускоренная Cédula (2-3 дня)

Для кого: "Инвесторы и предприниматели с капиталом $70k+, которым нужен ПМЖ и бизнес-инфраструктура."

Disclaimer: "Требует инвестиций от $70,000 в бизнес-проект."

[Button: "Записаться на консультацию"]
```

### Card Styling
- All cards use `.tier-card` component from design system
- Recommended card has additional visual emphasis (border color, badge)
- All buttons link to form section (#contact-form)

---

## Section 4: Social Proof Section

### Purpose
Build trust through real client testimonials and case studies.

### Section Header
```
"Реальные истории наших клиентов"
```
- Font: Crimson Text SemiBold, 48px (desktop), 32px (mobile)
- Color: --color-text-primary
- Text-align: center
- Margin-bottom: 64px

### Layout

**Testimonial Blocks:**
- 2-3 testimonials displayed vertically
- Gap: 48px between testimonials
- Each uses `.testimonial` component

### Testimonial 1 (Example)
```
Photo: [Client photo if available, otherwise placeholder with initials]
Quote: "Мы переехали с двумя детьми и боялись, что застрянем в документах на годы. ParaguayDoc провели нас за руку через весь процесс. Через 6 месяцев у нас была Cédula."
Author: "Иван и Мария И."
Meta: "Семья из Москвы, Базовый тариф, 2025"
```

### Testimonial 2 (Example)
```
Photo: [Client photo if available]
Quote: "Мне нужен был ПМЖ для бизнеса. Ускоренный тариф сработал идеально — через 3 месяца я уже мог вести дела легально."
Author: "Дмитрий К."
Meta: "Предприниматель из СПб, Ускоренный тариф, 2025"
```

### Case Study Block (Optional Enhancement)
If detailed case study is available, display as article-style block:
- Headline: "Кейс: От первого звонка до Cédula за 3.5 месяца"
- Timeline with dates
- Photos from process (office visits, document photos with redactions)
- Outcome summary

---

## Section 5: Team & Trust Section

### Purpose
Humanize the service by showing real people and real location.

### Section Header
```
"Кто мы такие"
```
- Font: Crimson Text SemiBold, 48px (desktop), 32px (mobile)
- Color: --color-text-primary
- Text-align: center
- Margin-bottom: 64px

### Layout

**Desktop:**
- 60/40 split (similar to hero but reversed)
- Left: Text content
- Right: Photo or map

**Mobile:**
- Stacked vertical

### Content

#### Introduction Text
```
"Мы — не безликое агентство. Мы живем в Энкарнасьон, работаем здесь каждый день и лично провели более 100 семей через процесс иммиграции."
```
- Font: Source Sans 3 Regular, 18px
- Max-width: 560px

#### Team Photo / Office Photo
- If available: Real photo of team or office exterior
- If not available: Skip this subsection or use map of Encarnación with pin
- Border-radius: 12px
- Box-shadow: --shadow-md

#### Credentials (Optional)
List any licenses, certifications, or official registrations:
```
✓ Зарегистрированная юридическая фирма
✓ Член [relevant association if applicable]
✓ Более 100 успешных кейсов
```

#### Telegram Channel Link
```
"Посмотрите наши реальные отзывы и обновления: @Paraguaydoc"
```
- Display as clickable link or button
- Icon: Telegram logo

---

## Section 6: CTA / Form Section

### Purpose
Convert visitors into consultation leads with low-friction form.

### Section Header
```
"Начните ваш путь"
```
- Font: Crimson Text SemiBold, 48px (desktop), 32px (mobile)
- Color: --color-text-primary
- Text-align: center
- Margin-bottom: 24px

### Subheadline
```
"Запишитесь на бесплатную 30-минутную консультацию в Telegram. Мы разберем вашу ситуацию и предложим оптимальный маршрут."
```
- Font: Source Sans 3 Regular, 18px
- Color: --color-text-secondary
- Text-align: center
- Max-width: 640px, centered
- Margin-bottom: 48px

### Form Layout

**Container:**
- Max-width: 600px
- Centered on page
- Background: --color-bg-tertiary (white card)
- Padding: 48px
- Border-radius: 12px
- Box-shadow: --shadow-md

**Fields:**

1. **Name**
   - Label: "Ваше имя"
   - Input type: text
   - Required: yes
   - Placeholder: "Иван Иванов"

2. **Telegram Handle**
   - Label: "Ваш Telegram (основной способ связи)"
   - Input type: text
   - Required: yes
   - Placeholder: "@username"

3. **Email**
   - Label: "Email (опционально)"
   - Input type: email
   - Required: no
   - Placeholder: "ivan@example.com"

4. **Service Interest**
   - Label: "Какая услуга вас интересует?"
   - Input type: radio group
   - Required: yes
   - Options:
     - ○ Базовый ВНЖ ($1,400)
     - ○ Ускоренный ВНЖ ($2,200)
     - ○ SUACE ПМЖ ($6,000-$9,500)
     - ○ Пока не знаю

5. **Message (Optional)**
   - Label: "Расскажите немного о вашей ситуации (опционально)"
   - Input type: textarea
   - Required: no
   - Rows: 4
   - Placeholder: "Например: Семья из трех человек, планируем переезд в марте..."

**Submit Button:**
```
"Отправить заявку"
```
- Component: `.button--primary`
- Full width
- Min-height: 56px (extra touch-friendly)

### Form States

**Loading State:**
- Button disabled
- Text changes to "Отправка..."
- Spinner icon next to text

**Success State:**
- Form hides
- Success message appears:
  ```
  "✓ Заявка отправлена!

  Мы свяжемся с вами в Telegram в течение 24 часов. Проверьте @username на наличие сообщений."
  ```
- Green background (--color-success-bg)

**Error State:**
- Error message appears above form:
  ```
  "⚠ Что-то пошло не так. Пожалуйста, попробуйте еще раз или напишите напрямую в @Paraguaydoc"
  ```
- Red background (--color-error-bg)

---

## Section 7: Footer

### Layout

**Desktop:**
- Three-column layout
- Equal width columns
- Gap: 48px

**Mobile:**
- Stacked vertical
- Gap: 32px

### Column 1: About
```
Headline: "ParaguayDoc"
Text: "Прозрачная иммиграционная помощь для русскоязычных семей и предпринимателей."
```

### Column 2: Contact
```
Headline: "Контакты"
- Telegram: @Paraguaydoc
- Email: info@paraguaydoc.com (if applicable)
- Location: Энкарнасьон, Парагвай
```

### Column 3: Legal
```
Headline: "Юридическая информация"
- Политика конфиденциальности
- Условия использования
- Регистрация компании: [if applicable]
```

### Footer Bottom
- Copyright: "© 2026 ParaguayDoc. Все права защищены."
- Font: Source Sans 3 Regular, 14px
- Color: --color-text-tertiary
- Text-align: center
- Padding: 24px 0

### Background
- Color: --color-bg-secondary (slightly darker cream)
- Top border: 1px solid --color-border-light

---

## Responsive Behavior Summary

| Section | Mobile (< 768px) | Tablet (768-1023px) | Desktop (1024px+) |
|---------|------------------|---------------------|-------------------|
| Hero | Stacked vertical | 50/50 split | 60/40 split |
| Timeline | Vertical list | Horizontal (compact) | Horizontal (spacious) |
| Service Tiers | Stacked | 3 cards row (tight) | 3 cards row (wide) |
| Social Proof | Full width | Full width | Max-width 900px centered |
| Team | Stacked | 50/50 split | 60/40 split |
| Form | Full width (padded) | Max-width 600px | Max-width 600px |
| Footer | Stacked | 3 columns | 3 columns |

---

## Animation & Scroll Effects

### Scroll-Triggered Animations
- All sections fade in from below as user scrolls (`animate-on-scroll` class)
- Stagger delays:
  - Section header: 0ms
  - First child: 100ms
  - Second child: 200ms
  - Third child: 300ms

### Hover Effects
- Buttons: lift 2px, increase shadow
- Cards: lift 4-6px, increase shadow, border color change
- Timeline stages: icon scales 1.1x, background fills
- Links: color change to --color-primary-dark

---

## Performance Considerations

1. **Hero Video:** Lazy-load with facade (thumbnail until play clicked)
2. **Images:** All below-the-fold images use `loading="lazy"`
3. **Fonts:** Preload critical fonts (Crimson Text Bold, Source Sans 3 Regular)
4. **Critical CSS:** Inline above-the-fold styles in `<head>`
5. **JavaScript:** Defer non-critical scripts

---

## Accessibility Checklist

- [ ] All images have meaningful alt text
- [ ] Form labels properly associated with inputs
- [ ] Color contrast meets WCAG AA (4.5:1 for body text)
- [ ] Keyboard navigation works for all interactive elements
- [ ] Focus indicators visible on all interactive elements
- [ ] Heading hierarchy is sequential (H1 → H2 → H3, no skipping)
- [ ] ARIA attributes used where semantic HTML isn't sufficient

---

This specification provides complete layout guidance for frontend implementation. All components reference the Design System for styling consistency.
