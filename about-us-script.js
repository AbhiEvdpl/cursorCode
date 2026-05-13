(() => {
  'use strict';

  const header = document.getElementById('da-header');
  const navToggle = document.getElementById('da-nav-toggle');
  const nav = document.getElementById('da-nav');
  const yearEl = document.getElementById('da-year');
  const particlesContainer = document.getElementById('hero-particles');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky header
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header?.classList.toggle('is-scrolled', y > 50);
    lastScroll = y;
  }, { passive: true });

  // Mobile nav toggle
  navToggle?.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    nav?.classList.toggle('is-open');
    document.body.style.overflow = open ? '' : 'hidden';
  });

  nav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('is-open')) {
        navToggle?.click();
      }
    });
  });

  // Scroll-triggered animations
  const animatedElements = document.querySelectorAll('[data-animate]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    animatedElements.forEach(el => el.classList.add('is-visible'));
  }

  // Stat counter animation
  const statNumbers = document.querySelectorAll('[data-count]');
  if (statNumbers.length && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));
  }

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // Hero particles
  function createParticles() {
    if (!particlesContainer) return;
    const count = window.innerWidth < 768 ? 12 : 24;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 2 + 1;
      const x = Math.random() * 100;
      const delay = Math.random() * 15;
      const dur = Math.random() * 10 + 12;

      Object.assign(particle.style, {
        position: 'absolute',
        width: size + 'px',
        height: size + 'px',
        borderRadius: '50%',
        background: `rgba(0, 210, 255, ${Math.random() * 0.3 + 0.1})`,
        left: x + '%',
        bottom: '-10px',
        animation: `daParticleFloat ${dur}s linear ${delay}s infinite`,
        pointerEvents: 'none'
      });

      particlesContainer.appendChild(particle);
    }
  }

  createParticles();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--da-header-height'), 10) || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

})();
