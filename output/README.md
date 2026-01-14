# ParaguayDoc Landing Page

Статический landing page для иммиграционных услуг ParaguayDoc в Парагвае.

## Обзор

Этот сайт создан для привлечения русскоязычных клиентов, ищущих помощь в получении ВНЖ и ПМЖ в Парагвае. Дизайн фокусируется на прозрачности, надежности и человеческом подходе, избегая шаблонных решений.

**Ключевые особенности:**
- Редакционный стиль вместо типичных landing page шаблонов
- Интерактивный timeline процесса иммиграции
- Честные цены и реалистичные сроки
- Мобильная оптимизация (70%+ трафика с мобильных устройств)
- Соответствие WCAG 2.1 AA для доступности
- Высокая производительность (цель: Lighthouse 90+)

## Структура файлов

```
output/
├── index.html       # Основная страница
├── styles.css       # Все стили (дизайн-система)
├── script.js        # JavaScript для интерактивности
└── README.md        # Этот файл
```

## Локальный запуск

### Вариант 1: Прямое открытие файла

Просто откройте `index.html` в браузере:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Вариант 2: Локальный сервер (рекомендуется)

Для корректной работы некоторых функций (например, CORS) лучше использовать локальный сервер.

#### С помощью Python:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Затем откройте: http://localhost:8000

#### С помощью Node.js (http-server):

```bash
npx http-server -p 8000
```

#### С помощью VS Code:

Установите расширение "Live Server" и нажмите "Go Live" в правом нижнем углу.

## Настройка формы

Перед публикацией **обязательно** настройте форму обратной связи:

1. Откройте `index.html`
2. Найдите строку (около строки 317):
   ```html
   <form class="contact-form" action="https://formsubmit.co/your-email@example.com" method="POST">
   ```
3. Замените `your-email@example.com` на ваш реальный email
4. **При первой отправке:** FormSubmit.co отправит письмо с подтверждением на ваш email. Подтвердите его.

### Дополнительные настройки FormSubmit

Вы можете добавить redirect URL для страницы благодарности:

```html
<input type="hidden" name="_next" value="https://yourdomain.com/thank-you.html">
```

Или отключить капчу (не рекомендуется без спам-защиты):

```html
<input type="hidden" name="_captcha" value="false">
```

Документация: https://formsubmit.co

## Добавление видео

Чтобы добавить видео-приветствие от основателя:

1. Загрузите видео на YouTube или Vimeo
2. Скопируйте ID видео (для YouTube: `https://youtu.be/VIDEO_ID`)
3. В `index.html` найдите строку (около строки 34):
   ```html
   <div class="video-facade" data-video-id="placeholder">
   ```
4. Замените `placeholder` на реальный ID видео

## Деплой

### Вариант 1: GitHub Pages (бесплатно)

1. Создайте репозиторий на GitHub
2. Загрузите файлы из папки `output/` в корень репозитория
3. Перейдите в Settings → Pages
4. Выберите "Deploy from branch" → "main" → "/ (root)"
5. Сайт будет доступен по адресу `https://username.github.io/repository-name/`

### Вариант 2: Netlify (бесплатно, рекомендуется)

1. Перейдите на https://netlify.com
2. Перетащите папку `output/` в окно Netlify Drop
3. Сайт автоматически развернется за 30 секунд
4. Получите уникальный URL (можно настроить custom domain)

**Преимущества Netlify:**
- Автоматический HTTPS
- CDN для быстрой загрузки
- Встроенные формы (альтернатива FormSubmit)
- Custom domain поддержка

### Вариант 3: Vercel (бесплатно)

Аналогично Netlify, но с акцентом на скорость:

1. Перейдите на https://vercel.com
2. Импортируйте Git репозиторий или загрузите файлы
3. Автоматический деплой

### Вариант 4: Cloudflare Pages (бесплатно)

1. Перейдите на https://pages.cloudflare.com
2. Подключите Git репозиторий
3. Build command: (оставьте пустым, это статический сайт)
4. Output directory: `output`

## Оптимизация перед публикацией

### 1. Минификация CSS и JS

Для продакшена рекомендуется сжать файлы:

```bash
# Используйте онлайн-инструменты:
# CSS: https://cssminifier.com
# JS: https://javascript-minifier.com

# Или через NPM:
npx clean-css-cli -o styles.min.css styles.css
npx terser script.js -o script.min.js -c -m
```

Затем обновите ссылки в `index.html`:
```html
<link rel="stylesheet" href="styles.min.css">
<script src="script.min.js" defer></script>
```

### 2. Добавление изображений

Если у вас есть реальные фото команды, офиса или клиентов:

1. Оптимизируйте изображения (TinyPNG, ImageOptim)
2. Используйте WebP формат с JPEG/PNG fallback
3. Добавьте в HTML:
   ```html
   <picture>
     <source srcset="image.webp" type="image/webp">
     <img src="image.jpg" alt="Описание" loading="lazy">
   </picture>
   ```

### 3. Favicon

Добавьте favicon в `<head>`:

```html
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
```

Сгенерируйте favicon: https://realfavicongenerator.net

## Тестирование

### Accessibility (Доступность)

- Проверка WAVE: https://wave.webaim.org
- Проверка цветового контраста: https://webaim.org/resources/contrastchecker/
- Тест клавиатурной навигации: пройдитесь по сайту только с помощью Tab

### Performance (Производительность)

- Google Lighthouse (в Chrome DevTools):
  - Правый клик → Inspect → Lighthouse → Analyze page
  - Цель: Performance 90+, Accessibility 95+
- PageSpeed Insights: https://pagespeed.web.dev
- WebPageTest: https://www.webpagetest.org

### Кроссбраузерность

Протестируйте в:
- Chrome (Windows/Mac)
- Firefox
- Safari (Mac/iOS)
- Edge
- Мобильные браузеры (iOS Safari, Chrome Android)

### Валидация кода

- HTML: https://validator.w3.org
- CSS: https://jigsaw.w3.org/css-validator/

## Поддержка и обновления

### Изменение контента

Весь текстовый контент находится в `index.html`. Основные разделы:

- **Hero (строки 30-45):** Главный заголовок и призыв к действию
- **Timeline (строки 50-125):** Процесс иммиграции по этапам
- **Pricing (строки 130-215):** Три тарифа с ценами
- **Testimonials (строки 220-245):** Отзывы клиентов
- **Team (строки 250-280):** Информация о команде
- **Form (строки 285-365):** Форма обратной связи
- **Footer (строки 370-395):** Контактная информация

### Изменение дизайна

Все стили находятся в `styles.css` в виде CSS-переменных:

```css
:root {
  --color-primary: #D4734B;     /* Основной цвет (терракота) */
  --color-secondary: #8FA888;   /* Вторичный цвет (зеленый) */
  --font-headline: 'Crimson Text', serif;
  --font-body: 'Source Sans 3', sans-serif;
  /* ... */
}
```

Измените переменные для глобальных изменений цветов, шрифтов и отступов.

## Troubleshooting (Решение проблем)

### Шрифты не загружаются

Проверьте подключение Google Fonts в `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@600;700&family=JetBrains+Mono:wght@400;500&family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet">
```

### Форма не отправляется

1. Проверьте, что заменили `your-email@example.com` на реальный email
2. Убедитесь, что подтвердили email в FormSubmit
3. Проверьте console в DevTools на наличие ошибок

### Timeline не раскрывается

Убедитесь, что `script.js` загружается:
```html
<script src="script.js" defer></script>
```

Проверьте console на наличие JavaScript ошибок (F12 → Console).

### Плохая производительность

1. Сожмите CSS и JS (см. "Оптимизация")
2. Оптимизируйте изображения (если есть)
3. Используйте CDN (Netlify, Vercel, Cloudflare Pages)

## Лицензия

Этот код создан для ParaguayDoc и может быть свободно использован владельцем проекта.

## Контакты

Для вопросов по сайту свяжитесь с ParaguayDoc:
- Telegram: @Paraguaydoc
- Местоположение: Энкарнасьон, Парагвай
