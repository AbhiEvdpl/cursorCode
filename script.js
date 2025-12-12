// Hero Slider
const heroSlides = document.querySelectorAll('.hero-slide');
const heroDots = document.querySelectorAll('.hero-slider__dot');
const prevBtn = document.querySelector('.hero-slider__arrow--prev');
const nextBtn = document.querySelector('.hero-slider__arrow--next');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  if (index >= heroSlides.length) index = 0;
  if (index < 0) index = heroSlides.length - 1;
  
  heroSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  
  heroDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  
  currentSlide = index;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 6000);
}

function resetAutoSlide() {
  clearInterval(slideInterval);
  startAutoSlide();
}

// Event listeners for slider
prevBtn?.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

nextBtn?.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

heroDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
    resetAutoSlide();
  });
});

// Start auto-slide
if (heroSlides.length > 0) {
  startAutoSlide();
}

// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle?.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Header scroll effect
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 20px rgba(12, 30, 50, 0.3)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
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
  
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  alert('Thank you for your message! We will get back to you shortly.');
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

document.querySelectorAll('.category-tile, .value-card, .industry-card, .promise__item, .location-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Keyboard navigation for slider
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    prevSlide();
    resetAutoSlide();
  } else if (e.key === 'ArrowRight') {
    nextSlide();
    resetAutoSlide();
  }
});

// Touch swipe for slider
let touchStartX = 0;
let touchEndX = 0;

const heroSlider = document.querySelector('.hero-slider');

heroSlider?.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

heroSlider?.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
    resetAutoSlide();
  }
}
