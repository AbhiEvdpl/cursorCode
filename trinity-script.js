document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  const yearSpan = document.getElementById('year');
  const contactForm = document.getElementById('contactForm');

  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('active');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      await new Promise(resolve => setTimeout(resolve, 1500));

      btn.textContent = 'Message Sent!';
      btn.style.background = '#10b981';
      contactForm.reset();

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    });
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.capability-card, .industry-card, .feature-card, .contact__item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  const style = document.createElement('style');
  style.textContent = `.animate-in { opacity: 1 !important; transform: translateY(0) !important; }`;
  document.head.appendChild(style);

  document.querySelectorAll('.material-tag').forEach((tag, i) => {
    tag.style.animationDelay = `${i * 0.05}s`;
  });

  const statNumbers = document.querySelectorAll('.stat__number');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateValue(entry.target);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(stat => statsObserver.observe(stat));

  function animateValue(el) {
    const text = el.textContent;
    const hasPlus = text.includes('+');
    const hasPercent = text.includes('%');
    const hasK = text.includes('K');
    let endValue = parseInt(text.replace(/[^0-9]/g, ''));
    
    if (hasK) endValue = endValue;
    
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * endValue);
      
      let display = current.toString();
      if (hasK) display += 'K';
      if (hasPlus) display += '+';
      if (hasPercent) display += '%';
      
      el.textContent = display;
      
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }
});
