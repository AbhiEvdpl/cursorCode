const header = document.getElementById('header');
const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
const contactForm = document.getElementById('contact-form');
const yearEl = document.getElementById('year');
const sections = document.querySelectorAll('.section');

if (yearEl) yearEl.textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  nav?.classList.toggle('open');
  document.body.style.overflow = nav?.classList.contains('open') ? 'hidden' : '';
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle?.classList.remove('active');
    nav?.classList.remove('open');
    document.body.style.overflow = '';
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const observerOptions = {
  threshold: 0.15,
  rootMargin: '-5% 0px -5% 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, observerOptions);

document.querySelectorAll('.section-content, .service-card, .facility-card, .expert-feature, .region').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  fadeInObserver.observe(el);
});

const style = document.createElement('style');
style.textContent = `.in-view { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

document.querySelectorAll('.service-card, .facility-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
});

contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  
  btn.textContent = 'Sending...';
  btn.disabled = true;
  btn.style.opacity = '0.7';
  
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  btn.textContent = 'Request Submitted!';
  btn.style.background = '#1E4637';
  btn.style.opacity = '1';
  contactForm.reset();
  
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
    btn.disabled = false;
  }, 3000);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    navToggle?.classList.remove('active');
    nav?.classList.remove('open');
    document.body.style.overflow = '';
  }
});

const hero = document.querySelector('.hero');
if (hero && window.innerWidth > 768) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroContent = hero.querySelector('.hero-content');
    const scrollIndicator = hero.querySelector('.scroll-indicator');
    
    if (heroContent && scrolled < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
      heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.8));
    }
    
    if (scrollIndicator) {
      scrollIndicator.style.opacity = 1 - (scrolled / 200);
    }
  }, { passive: true });
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const stats = entry.target.querySelectorAll('.stat-value');
      stats.forEach(stat => {
        const text = stat.textContent;
        stat.style.opacity = '0';
        setTimeout(() => {
          stat.style.transition = 'opacity 0.5s ease';
          stat.style.opacity = '1';
        }, 300);
      });
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const coverageStats = document.querySelector('.coverage-stats');
if (coverageStats) statObserver.observe(coverageStats);

const pulses = document.querySelectorAll('.map-pulse');
pulses.forEach((pulse, i) => {
  pulse.style.animationDelay = `${i * 0.5}s`;
});
