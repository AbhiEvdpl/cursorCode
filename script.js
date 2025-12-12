// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle?.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 100) {
    header.style.boxShadow = '0 4px 20px rgba(12, 30, 50, 0.3)';
  } else {
    header.style.boxShadow = 'none';
  }
  lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const headerHeight = header.offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Form submission
const contactForm = document.querySelector('.contact__form');
contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());
  
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  alert('Thank you for your inquiry! Our team will contact you shortly.');
  contactForm.reset();
  submitBtn.textContent = originalText;
  submitBtn.disabled = false;
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.product-card, .industry, .feature, .about__content, .about__visual').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
