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