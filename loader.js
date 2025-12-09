class PageLoader {
  constructor(options = {}) {
    this.options = {
      minLoadTime: options.minLoadTime || 3000,
      progressSpeed: options.progressSpeed || 30,
      exitDelay: options.exitDelay || 500,
      ...options
    };

    this.loader = document.getElementById('loader');
    this.progressBar = document.getElementById('progress-bar');
    this.progressText = document.getElementById('progress-text');
    this.pageContent = document.getElementById('page-content');

    this.progress = 0;
    this.targetProgress = 0;
    this.isComplete = false;
    this.startTime = Date.now();

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
        const increment = Math.max(0.5, diff * 0.1);
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
          const increment = Math.max(1, diff * 0.15);
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
    }, 1600);
  }

  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  onComplete() {
    document.dispatchEvent(new CustomEvent('loaderComplete'));
    this.animatePageContent();
  }

  animatePageContent() {
    const elements = document.querySelectorAll('.hero__title, .hero__text, .hero__cta, .nav__brand, .nav__links li');
    
    elements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
      
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  }
}

class LoaderEffects {
  constructor() {
    this.createParticles();
    this.createGlow();
  }

  createParticles() {
    const loader = document.getElementById('loader');
    const particleContainer = document.createElement('div');
    particleContainer.className = 'loader__particles';
    particleContainer.style.cssText = `
      position: absolute;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
    `;

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('span');
      const size = Math.random() * 3 + 1;
      const x = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 10 + 10;

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
        border-radius: 50%;
        left: ${x}%;
        bottom: -10px;
        animation: floatUp ${duration}s linear ${delay}s infinite;
      `;
      particleContainer.appendChild(particle);
    }

    const style = document.createElement('style');
    style.textContent = `
      @keyframes floatUp {
        0% {
          transform: translateY(0) scale(1);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh) scale(0.5);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    loader.appendChild(particleContainer);
  }

  createGlow() {
    const icon = document.querySelector('.loader__icon');
    if (!icon) return;

    const glow = document.createElement('div');
    glow.style.cssText = `
      position: absolute;
      width: 120px;
      height: 120px;
      background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: pulse 3s ease-in-out infinite;
      pointer-events: none;
    `;

    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0%, 100% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.5;
        }
        50% {
          transform: translate(-50%, -50%) scale(1.2);
          opacity: 0.8;
        }
      }
    `;
    document.head.appendChild(style);

    const logoContainer = document.querySelector('.loader__logo');
    if (logoContainer) {
      logoContainer.style.position = 'relative';
      logoContainer.insertBefore(glow, icon);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new LoaderEffects();
  new PageLoader({
    minLoadTime: 3500,
    progressSpeed: 25,
    exitDelay: 400
  });
});

document.addEventListener('loaderComplete', () => {
  console.log('Page loaded successfully');
});
