/**
 * ParaguayDoc Landing Page - JavaScript
 * Handles timeline interactions, form validation, and smooth scrolling
 */

// ========================================
// Timeline Functionality
// ========================================

/**
 * Initialize timeline stage click handlers
 */
function initTimeline() {
  const stages = document.querySelectorAll('.timeline-stage');

  stages.forEach((stage) => {
    stage.addEventListener('click', () => {
      // Toggle active class
      stage.classList.toggle('timeline-stage--active');

      // Get the details element
      const details = stage.querySelector('.timeline-stage__details');

      // Expand or collapse
      if (stage.classList.contains('timeline-stage--active')) {
        details.style.maxHeight = details.scrollHeight + 'px';
      } else {
        details.style.maxHeight = '0';
      }
    });
  });
}

/**
 * Initialize path toggle (Standard vs Accelerated)
 */
function initPathToggle() {
  const toggleButtons = document.querySelectorAll('.path-toggle__button');
  const timeline = document.querySelector('.timeline');

  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Get selected path
      const selectedPath = button.dataset.path;

      // Update active button
      toggleButtons.forEach((btn) => btn.classList.remove('path-toggle__button--active'));
      button.classList.add('path-toggle__button--active');

      // Update timeline data attribute
      timeline.dataset.activePath = selectedPath;

      // Update timeline stage times
      updateTimelineStages(selectedPath);
    });
  });
}

/**
 * Update timeline stage time displays based on selected path
 * @param {string} path - "standard" or "accelerated"
 */
function updateTimelineStages(path) {
  const stages = document.querySelectorAll('.timeline-stage');

  stages.forEach((stage) => {
    const timeElement = stage.querySelector('.timeline-stage__time');
    if (timeElement) {
      const standardTime = timeElement.dataset.standard;
      const acceleratedTime = timeElement.dataset.accelerated;

      timeElement.textContent = path === 'standard' ? standardTime : acceleratedTime;
    }
  });

  // Toggle total timeline display
  const standardTotal = document.querySelector('.timeline-total--standard');
  const acceleratedTotal = document.querySelector('.timeline-total--accelerated');

  if (standardTotal && acceleratedTotal) {
    if (path === 'standard') {
      standardTotal.style.display = 'list-item';
      acceleratedTotal.style.display = 'none';
    } else {
      standardTotal.style.display = 'none';
      acceleratedTotal.style.display = 'list-item';
    }
  }
}

// ========================================
// Form Validation & Submission
// ========================================

/**
 * Validate email format
 * @param {string} email
 * @returns {boolean}
 */
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate Telegram handle format
 * @param {string} telegram
 * @returns {boolean}
 */
function validateTelegram(telegram) {
  // Should start with @ and have at least 5 characters
  return telegram.startsWith('@') && telegram.length >= 5;
}

/**
 * Show error message for a field
 * @param {HTMLElement} input
 * @param {string} message
 */
function showError(input, message) {
  input.classList.add('form-input--error');
  const errorElement = document.getElementById(input.id + '-error');
  if (errorElement) {
    errorElement.textContent = message;
  }
}

/**
 * Clear error message for a field
 * @param {HTMLElement} input
 */
function clearError(input) {
  input.classList.remove('form-input--error');
  const errorElement = document.getElementById(input.id + '-error');
  if (errorElement) {
    errorElement.textContent = '';
  }
}

/**
 * Initialize form validation
 */
function initFormValidation() {
  const form = document.getElementById('contact-form-element');
  if (!form) return;

  const nameInput = document.getElementById('name');
  const telegramInput = document.getElementById('telegram');
  const emailInput = document.getElementById('email');
  const serviceInputs = document.querySelectorAll('input[name="service"]');

  // Real-time validation on blur
  if (nameInput) {
    nameInput.addEventListener('blur', () => {
      if (nameInput.value.trim().length < 2) {
        showError(nameInput, 'Пожалуйста, введите ваше имя');
      } else {
        clearError(nameInput);
      }
    });
  }

  if (telegramInput) {
    telegramInput.addEventListener('blur', () => {
      const value = telegramInput.value.trim();
      if (!value) {
        showError(telegramInput, 'Пожалуйста, введите ваш Telegram');
      } else if (!validateTelegram(value)) {
        showError(telegramInput, 'Telegram должен начинаться с @ и содержать минимум 5 символов');
      } else {
        clearError(telegramInput);
      }
    });
  }

  if (emailInput) {
    emailInput.addEventListener('blur', () => {
      const value = emailInput.value.trim();
      // Email is optional, so only validate if not empty
      if (value && !validateEmail(value)) {
        showError(emailInput, 'Пожалуйста, введите действительный email');
      } else {
        clearError(emailInput);
      }
    });
  }

  // Form submission
  form.addEventListener('submit', (e) => {
    let isValid = true;

    // Validate name
    if (nameInput && nameInput.value.trim().length < 2) {
      showError(nameInput, 'Пожалуйста, введите ваше имя');
      isValid = false;
    }

    // Validate Telegram
    if (telegramInput) {
      const telegramValue = telegramInput.value.trim();
      if (!telegramValue) {
        showError(telegramInput, 'Пожалуйста, введите ваш Telegram');
        isValid = false;
      } else if (!validateTelegram(telegramValue)) {
        showError(telegramInput, 'Telegram должен начинаться с @ и содержать минимум 5 символов');
        isValid = false;
      }
    }

    // Validate email (if provided)
    if (emailInput && emailInput.value.trim() && !validateEmail(emailInput.value.trim())) {
      showError(emailInput, 'Пожалуйста, введите действительный email');
      isValid = false;
    }

    // Validate service selection
    const serviceSelected = Array.from(serviceInputs).some(input => input.checked);
    const serviceError = document.getElementById('service-error');
    if (!serviceSelected) {
      if (serviceError) {
        serviceError.textContent = 'Пожалуйста, выберите интересующую услугу';
      }
      isValid = false;
    } else {
      if (serviceError) {
        serviceError.textContent = '';
      }
    }

    // If form is invalid, prevent submission
    if (!isValid) {
      e.preventDefault();
      return false;
    }

    // Show loading state
    const submitButton = form.querySelector('.form-submit');
    if (submitButton) {
      submitButton.textContent = 'Отправка...';
      submitButton.disabled = true;
    }

    // Note: FormSubmit.co handles the actual submission
    // The form will redirect to the _next URL or show success message
  });
}

// ========================================
// Smooth Scrolling for Anchor Links
// ========================================

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      // Skip if href is just "#"
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();

        // Smooth scroll to target
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update URL without jumping
        history.pushState(null, null, href);

        // Focus target for accessibility
        target.focus();
      }
    });
  });
}

// ========================================
// Scroll Animations (Optional Enhancement)
// ========================================

/**
 * Initialize scroll-triggered animations
 */
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-on-scroll');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  // Observe sections
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    observer.observe(section);
  });
}

// ========================================
// Video Facade (Lazy Load YouTube)
// ========================================

/**
 * Initialize video facade for lazy loading
 */
function initVideoFacade() {
  const facade = document.querySelector('.video-facade');
  if (!facade) return;

  const playButton = facade.querySelector('.video-facade__play-button');
  if (!playButton) return;

  playButton.addEventListener('click', () => {
    const videoId = facade.dataset.videoId;

    // Replace facade with actual YouTube iframe
    // Note: Replace 'placeholder' with actual YouTube video ID
    if (videoId && videoId !== 'placeholder') {
      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      iframe.style.position = 'absolute';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';

      facade.innerHTML = '';
      facade.appendChild(iframe);
    } else {
      alert('Видео будет добавлено позже. Пожалуйста, свяжитесь с нами через форму ниже.');
    }
  });
}

// ========================================
// Initialize All Features
// ========================================

/**
 * Initialize all JavaScript features when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
  initTimeline();
  initPathToggle();
  initFormValidation();
  initSmoothScrolling();
  initScrollAnimations();
  initVideoFacade();

  console.log('ParaguayDoc landing page initialized');
});

// ========================================
// Handle Form Success (if using FormSubmit redirect)
// ========================================

/**
 * Check URL parameters for form success
 */
window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const success = urlParams.get('success');

  if (success === 'true') {
    // Show success message
    const form = document.getElementById('contact-form-element');
    const successMessage = document.getElementById('form-success');

    if (form && successMessage) {
      form.style.display = 'none';
      successMessage.style.display = 'block';
    }

    // Scroll to form section
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
});
