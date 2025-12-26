document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
      mobileNav.classList.toggle('active');
    });
  }

  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const parent = toggle.closest('.has-dropdown');
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      parent?.classList.toggle('open');
    });
  });
});
