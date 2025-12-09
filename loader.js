class PageLoader {
  constructor(options = {}) {
    this.options = {
      minLoadTime: options.minLoadTime || 4500,
      exitDelay: options.exitDelay || 600,
      ...options
    };

    this.loader = document.getElementById('loader');
    this.progressBar = document.getElementById('progress-bar');
    this.progressText = document.getElementById('progress-text');
    this.progressStatus = document.getElementById('progress-status');
    this.pageContent = document.getElementById('page-content');

    this.progress = 0;
    this.targetProgress = 0;
    this.isComplete = false;
    this.startTime = Date.now();

    this.statusMessages = [
      { threshold: 0, message: 'Initializing...' },
      { threshold: 15, message: 'Loading assets...' },
      { threshold: 35, message: 'Preparing components...' },
      { threshold: 55, message: 'Almost there...' },
      { threshold: 75, message: 'Finalizing...' },
      { threshold: 95, message: 'Ready!' }
    ];

    this.init();
  }

  init() {
    document.body.classList.add('loading');
    this.simulateProgress();
    this.trackResourceLoading();
  }

  simulateProgress() {
    const animate = () => {
      if (this.isComplete) return;

      const elapsed = Date.now() - this.startTime;
      const naturalProgress = Math.min((elapsed / this.options.minLoadTime) * 100, 90);

      this.targetProgress = Math.max(this.targetProgress, naturalProgress);

      if (this.progress < this.targetProgress) {
        const diff = this.targetProgress - this.progress;
        const increment = Math.max(0.2, diff * 0.06);
        this.progress = Math.min(this.progress + increment, this.targetProgress);
        this.updateProgress(this.progress);
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }

  trackResourceLoading() {
    const resources = [
      ...Array.from(document.images),
      ...Array.from(document.querySelectorAll('link[rel="stylesheet"]')),
      ...Array.from(document.querySelectorAll('script[src]'))
    ];

    let loaded = 0;
    const total = resources.length || 1;

    const checkComplete = () => {
      loaded++;
      const resourceProgress = (loaded / total) * 30;
      this.targetProgress = Math.max(this.targetProgress, 60 + resourceProgress);

      if (loaded >= total) {
        this.completeLoading();
      }
    };

    if (resources.length === 0) {
      setTimeout(() => this.completeLoading(), this.options.minLoadTime);
    } else {
      resources.forEach(resource => {
        if (resource.complete || resource.loaded) {
          checkComplete();
        } else {
          resource.addEventListener('load', checkComplete);
          resource.addEventListener('error', checkComplete);
        }
      });
    }

    window.addEventListener('load', () => {
      setTimeout(() => {
        if (!this.isComplete) {
          this.completeLoading();
        }
      }, Math.max(0, this.options.minLoadTime - (Date.now() - this.startTime)));
    });
  }

  updateProgress(value) {
    const rounded = Math.round(value);
    this.progressBar.style.width = `${value}%`;
    this.progressText.textContent = `${rounded}%`;

    const status = [...this.statusMessages].reverse().find(s => rounded >= s.threshold);
    if (status && this.progressStatus.textContent !== status.message) {
      this.progressStatus.style.opacity = '0';
      setTimeout(() => {
        this.progressStatus.textContent = status.message;
        this.progressStatus.style.opacity = '1';
      }, 150);
    }
  }

  async completeLoading() {
    if (this.isComplete) return;
    this.isComplete = true;

    await this.animateToComplete();
    await this.wait(this.options.exitDelay);
    this.hideLoader();
  }

  animateToComplete() {
    return new Promise(resolve => {
      const animate = () => {
        if (this.progress < 100) {
          const diff = 100 - this.progress;
          const increment = Math.max(0.5, diff * 0.1);
          this.progress = Math.min(this.progress + increment, 100);
          this.updateProgress(this.progress);
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };
      requestAnimationFrame(animate);
    });
  }

  hideLoader() {
    this.loader.classList.add('hidden');
    
    setTimeout(() => {
      this.loader.classList.add('exit');
      this.pageContent.classList.add('visible');
      document.body.classList.remove('loading');
    }, 600);

    setTimeout(() => {
      this.loader.style.display = 'none';
      this.onComplete();
    }, 1800);
  }

  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  onComplete() {
    document.dispatchEvent(new CustomEvent('loaderComplete'));
    this.animatePageContent();
  }

  animatePageContent() {
    const elements = document.querySelectorAll(
      '.hero__badge, .hero__title, .hero__text, .hero__cta, .nav__brand, .nav__links li, .nav__cta'
    );
    
    elements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s`;
      
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      });
    });
  }
}

class ParticleSystem {
  constructor() {
    this.container = document.getElementById('particles');
    this.particles = [];
    this.colors = ['#6366F1', '#8B5CF6', '#EC4899', '#FF6B35'];
    this.init();
  }

  init() {
    for (let i = 0; i < 30; i++) {
      this.createParticle();
    }
  }

  createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 6 + 2;
    const x = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 20 + 15;
    const color = this.colors[Math.floor(Math.random() * this.colors.length)];

    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      left: ${x}%;
      bottom: -10px;
      opacity: ${Math.random() * 0.6 + 0.2};
      box-shadow: 0 0 ${size * 2}px ${color};
      animation: floatParticle ${duration}s ease-in-out ${delay}s infinite;
    `;

    this.container.appendChild(particle);
    this.particles.push(particle);
  }
}

class MagneticEffect {
  constructor() {
    this.logo = document.querySelector('.loader__logo-mark');
    if (!this.logo) return;
    
    this.bounds = null;
    this.mouseX = 0;
    this.mouseY = 0;
    
    this.init();
  }

  init() {
    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      this.updatePosition();
    });
  }

  updatePosition() {
    if (!this.logo) return;
    
    this.bounds = this.logo.getBoundingClientRect();
    const centerX = this.bounds.left + this.bounds.width / 2;
    const centerY = this.bounds.top + this.bounds.height / 2;
    
    const deltaX = this.mouseX - centerX;
    const deltaY = this.mouseY - centerY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    const maxDistance = 300;
    const maxMove = 15;
    
    if (distance < maxDistance) {
      const factor = 1 - (distance / maxDistance);
      const moveX = (deltaX / distance) * maxMove * factor;
      const moveY = (deltaY / distance) * maxMove * factor;
      
      this.logo.style.transform = `translate(${moveX}px, ${moveY}px)`;
    } else {
      this.logo.style.transform = 'translate(0, 0)';
    }
  }
}

const style = document.createElement('style');
style.textContent = `
  @keyframes floatParticle {
    0% {
      transform: translateY(0) translateX(0) scale(1);
      opacity: 0;
    }
    10% {
      opacity: 0.8;
    }
    90% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px) scale(0.5);
      opacity: 0;
    }
  }
  
  .loader__progress-status {
    transition: opacity 0.15s ease;
  }
  
  .loader__logo-mark {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => {
  new ParticleSystem();
  new MagneticEffect();
  new PageLoader({
    minLoadTime: 5000,
    exitDelay: 500
  });
});

document.addEventListener('loaderComplete', () => {
  console.log('Gadzoom page loaded successfully');
});
