const header = document.getElementById('header');
const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
const particles = document.getElementById('particles');
const contactForm = document.getElementById('contact-form');
const yearEl = document.getElementById('year');
const sections = document.querySelectorAll('.section');

if (yearEl) yearEl.textContent = new Date().getFullYear();

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  header?.classList.toggle('scrolled', currentScroll > 50);
  lastScroll = currentScroll;
}, { passive: true });

// Mobile navigation
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

// Create particles
function createParticles() {
  if (!particles) return;
  const count = window.innerWidth < 768 ? 20 : 50;
  particles.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 8}s`;
    particle.style.animationDuration = `${6 + Math.random() * 4}s`;
    particles.appendChild(particle);
  }
}
createParticles();
window.addEventListener('resize', createParticles);

// Intersection Observer for section animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: '-10% 0px -10% 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      const content = entry.target.querySelector('.section-content');
      if (content) content.style.opacity = '1';
    }
  });
}, observerOptions);

sections.forEach(section => {
  const content = section.querySelector('.section-content');
  if (content) {
    content.style.opacity = '0';
    content.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
  }
  sectionObserver.observe(section);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form
contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  const input = contactForm.querySelector('input[type="email"]');
  const originalText = btn.textContent;
  
  btn.textContent = 'Sending...';
  btn.disabled = true;
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  btn.textContent = 'Success!';
  btn.style.background = '#10b981';
  input.value = '';
  
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
    btn.disabled = false;
  }, 3000);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    navToggle?.classList.remove('active');
    nav?.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// Add parallax effect to hero
const hero = document.querySelector('.hero');
if (hero && window.innerWidth > 768) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroContent = hero.querySelector('.hero-content');
    if (heroContent && scrolled < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
      heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
  }, { passive: true });
}

// Stats counter animation
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const stats = entry.target.querySelectorAll('.stat-value');
      stats.forEach(stat => {
        const text = stat.textContent;
        if (text.includes('M+')) {
          animateValue(stat, 0, 10, 1500, 'M+');
        } else if (text.includes('%')) {
          animateValue(stat, 99, 99.99, 1500, '%');
        } else if (text.includes('ms')) {
          animateValue(stat, 100, 10, 1500, 'ms', '<');
        }
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsRow = document.querySelector('.stats-row');
if (statsRow) statsObserver.observe(statsRow);

function animateValue(el, start, end, duration, suffix = '', prefix = '') {
  const startTime = performance.now();
  const isDecimal = String(end).includes('.');
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = start + (end - start) * eased;
    
    el.textContent = prefix + (isDecimal ? current.toFixed(2) : Math.floor(current)) + suffix;
    
    if (progress < 1) requestAnimationFrame(update);
  }
  
  requestAnimationFrame(update);
}

// Chart bars animation trigger
const chartObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.3 });

const chartContainer = document.querySelector('.chart-container');
if (chartContainer) chartObserver.observe(chartContainer);
