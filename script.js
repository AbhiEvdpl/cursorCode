const vpLoader = document.getElementById('vp-loader');
const hideLoader = () => {
  if (vpLoader) {
    vpLoader.classList.add('is-hidden');
    vpLoader.addEventListener('animationend', () => {
      vpLoader.remove();
      initGSAP();
    }, { once: true });
  }
};
if (document.readyState === 'complete') {
  hideLoader();
} else {
  window.addEventListener('load', hideLoader);
}

function initGSAP() {
  if (typeof gsap === 'undefined') return;
  
  gsap.registerPlugin(ScrollTrigger);
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  gsap.defaults({ ease: 'power3.out', duration: 0.8 });

  const heroContent = document.querySelector('.hero__content');
  const heroVisual = document.querySelector('.hero__visual');
  
  if (heroContent) {
    gsap.from(heroContent.querySelectorAll('.eyebrow, h1, .hero__subhead, .hero__body, .hero__actions, .hero__list li'), {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6
    });
  }
  
  if (heroVisual) {
    gsap.from(heroVisual, {
      x: 60,
      opacity: 0,
      duration: 1,
      delay: 0.3
    });
    gsap.from('.hero__quote', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: 0.8
    });
  }

  document.querySelectorAll('.intro, .why, .serving, .experts, .contact, .cta').forEach(section => {
    const eyebrow = section.querySelector('.eyebrow');
    const heading = section.querySelector('h2');
    const content = section.querySelectorAll('p:not(.eyebrow), .facility-chips, .serving__list, .experts__actions, .cta__actions, .contact-info, .contact-form');
    
    if (eyebrow) {
      gsap.from(eyebrow, {
        y: 20,
        opacity: 0,
        scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' }
      });
    }
    
    if (heading) {
      gsap.from(heading, {
        y: 30,
        opacity: 0,
        delay: 0.1,
        scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' }
      });
    }
    
    if (content.length) {
      gsap.from(content, {
        y: 25,
        opacity: 0,
        stagger: 0.08,
        delay: 0.2,
        scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none none' }
      });
    }
  });

  gsap.from('.service-card', {
    y: 50,
    opacity: 0,
    stagger: { amount: 0.6, from: 'start' },
    scrollTrigger: { trigger: '.card-grid', start: 'top 80%', toggleActions: 'play none none none' }
  });

  gsap.from('.expert-card', {
    y: 40,
    opacity: 0,
    stagger: 0.12,
    scrollTrigger: { trigger: '.experts__cards', start: 'top 80%', toggleActions: 'play none none none' }
  });

  gsap.from('.badge-card', {
    scale: 0.9,
    opacity: 0,
    stagger: 0.15,
    scrollTrigger: { trigger: '.serving__badges', start: 'top 85%', toggleActions: 'play none none none' }
  });

  gsap.from('.intro__map', {
    x: 50,
    opacity: 0,
    scrollTrigger: { trigger: '.intro__map', start: 'top 80%', toggleActions: 'play none none none' }
  });

  gsap.from('.serving__map', {
    x: -50,
    opacity: 0,
    scrollTrigger: { trigger: '.serving__map', start: 'top 80%', toggleActions: 'play none none none' }
  });

  gsap.from('.experts__photo', {
    x: -50,
    opacity: 0,
    scrollTrigger: { trigger: '.experts__photo', start: 'top 80%', toggleActions: 'play none none none' }
  });

  gsap.from('.map-pin', {
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    ease: 'back.out(1.7)',
    scrollTrigger: { trigger: '.serving__map', start: 'top 70%', toggleActions: 'play none none none' }
  });

  gsap.from('.footer__grid > div', {
    y: 30,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: { trigger: '.site-footer', start: 'top 90%', toggleActions: 'play none none none' }
  });

  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { scale: 1.03, duration: 0.2, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { scale: 1, duration: 0.2, ease: 'power2.out' });
    });
  });

  document.querySelectorAll('.service-card, .expert-card, .badge-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -6, duration: 0.3, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
    });
  });
}

const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('.primary-nav');
const header = document.querySelector('.site-header');
const tooltip = document.querySelector('.map-tooltip');
const mapPins = document.querySelectorAll('.map-pin');
const modal = document.getElementById('onboarding-modal');
const modalForm = modal?.querySelector('form');
const modalFormContainer = modal?.querySelector('.modal__form');
const modalTemplate = document.getElementById('onboarding-form-template');
const openModalButtons = document.querySelectorAll('[data-open-modal="onboarding"]');
const modalCloseBtn = modal?.querySelector('.modal__close');
const yearEl = document.getElementById('year');
const contactForm = document.querySelector('.contact-form');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (modalTemplate && modalFormContainer && modalFormContainer.children.length === 0) {
  modalFormContainer.appendChild(modalTemplate.content.cloneNode(true));
}

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  primaryNav?.classList.toggle('open');
  document.body.classList.toggle('nav-open');
});

primaryNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 960 && primaryNav.classList.contains('open')) {
      navToggle?.click();
    }
  });
});

window.addEventListener('scroll', () => {
  const offset = window.scrollY;
  header?.classList.toggle('is-scrolled', offset > 10);
});

mapPins.forEach((pin) => {
  const showTooltip = () => {
    if (!tooltip) return;
    tooltip.textContent = pin.dataset.region || '';
    tooltip.style.opacity = '1';
  };
  const hideTooltip = () => {
    if (!tooltip) return;
    tooltip.style.opacity = '0';
  };
  pin.addEventListener('mouseenter', showTooltip);
  pin.addEventListener('focus', showTooltip);
  pin.addEventListener('mouseleave', hideTooltip);
  pin.addEventListener('blur', hideTooltip);
});

const openModal = () => {
  if (!modal) return;
  if (typeof modal.showModal === 'function') {
    modal.showModal();
  } else {
    modal.setAttribute('open', 'true');
  }
};

const closeModal = () => {
  if (!modal) return;
  if (typeof modal.close === 'function') {
    modal.close();
  }
  modal.removeAttribute('open');
};

openModalButtons.forEach((btn) => btn.addEventListener('click', openModal));
modalCloseBtn?.addEventListener('click', (event) => {
  event.preventDefault();
  closeModal();
});

modal?.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

const statusMessage = document.createElement('p');
statusMessage.className = 'form-status';
statusMessage.setAttribute('role', 'status');
statusMessage.setAttribute('aria-live', 'polite');
contactForm?.appendChild(statusMessage);

const modalStatus = document.createElement('p');
modalStatus.className = 'form-status';
modalStatus.setAttribute('role', 'status');
modalStatus.setAttribute('aria-live', 'polite');
modalForm?.appendChild(modalStatus);

const fakeSubmit = () => new Promise((resolve) => setTimeout(resolve, 600));

const handleFormSubmit = async (form, messageEl) => {
  if (!form.reportValidity()) {
    return false;
  }
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());
  messageEl.textContent = 'Sending…';
  form.classList.add('is-submitting');
  try {
    await fakeSubmit(payload);
    messageEl.textContent = 'Thank you! Our onboarding team will reach out shortly.';
    form.reset();
    return true;
  } catch (error) {
    console.error(error);
    messageEl.textContent = 'Something went wrong. Please try again.';
    return false;
  } finally {
    form.classList.remove('is-submitting');
  }
};

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  handleFormSubmit(contactForm, statusMessage);
});

modalForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const success = await handleFormSubmit(modalForm, modalStatus);
  if (success) {
    setTimeout(closeModal, 400);
  }
});
*** End of File