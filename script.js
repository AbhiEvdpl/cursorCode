document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollEffects();
  initAnimations();
  initMapInteraction();
  initContactForm();
  initYear();
});

function initNavigation() {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link');

  navToggle?.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 960) {
        navMenu?.classList.remove('open');
        navToggle?.classList.remove('active');
        navToggle?.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 960 && navMenu?.classList.contains('open')) {
      if (!navMenu.contains(e.target) && !navToggle?.contains(e.target)) {
        navMenu.classList.remove('open');
        navToggle?.classList.remove('active');
        navToggle?.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      }
    }
  });

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    header?.classList.toggle('scrolled', currentScroll > 50);
    lastScroll = currentScroll;
  }, { passive: true });
}

function initScrollEffects() {
  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        smoothScroll(href);
      }
    });
  });
}

function initAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-fade-up').forEach((el, index) => {
    el.dataset.delay = index * 100;
    observer.observe(el);
  });

  const sectionElements = document.querySelectorAll(
    '.service-card, .facility-chip, .region-card, .expert-card, .contact__detail'
  );

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        sectionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  sectionElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index % 7 * 0.1}s, transform 0.6s ease ${index % 7 * 0.1}s`;
    sectionObserver.observe(el);
  });
}

function initMapInteraction() {
  const pins = document.querySelectorAll('.coverage__pin');
  const tooltip = document.querySelector('.coverage__tooltip');

  pins.forEach(pin => {
    const showTooltip = () => {
      if (tooltip) {
        tooltip.textContent = pin.dataset.tooltip;
        tooltip.classList.add('visible');
      }
    };

    const hideTooltip = () => {
      tooltip?.classList.remove('visible');
    };

    pin.addEventListener('mouseenter', showTooltip);
    pin.addEventListener('focus', showTooltip);
    pin.addEventListener('mouseleave', hideTooltip);
    pin.addEventListener('blur', hideTooltip);
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusEl = form?.querySelector('.form-status');

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending...</span>';
    submitBtn.disabled = true;

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      statusEl.textContent = 'Thank you! Our onboarding team will reach out within one business day.';
      statusEl.className = 'form-status visible success';
      form.reset();

      setTimeout(() => {
        statusEl.classList.remove('visible');
      }, 5000);
    } catch (error) {
      statusEl.textContent = 'Something went wrong. Please try again or call us directly.';
      statusEl.className = 'form-status visible error';
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });

  const inputs = form?.querySelectorAll('input, select, textarea');
  inputs?.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });
    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('focused');
    });
  });
}

function initYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      if (img.dataset.src) img.src = img.dataset.src;
    });
  });
}
