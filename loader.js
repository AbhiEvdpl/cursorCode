class PageLoader {
  constructor(options = {}) {
    this.options = {
      minLoadTime: options.minLoadTime || 4000,
      progressSpeed: options.progressSpeed || 30,
      exitDelay: options.exitDelay || 600,
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
        const increment = Math.max(0.3, diff * 0.08);
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
          const increment = Math.max(0.8, diff * 0.12);
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
      '.hero__eyebrow, .hero__title, .hero__text, .hero__cta, .nav__logo, .nav__links li'
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

class LoaderEffects {
  constructor() {
    this.addFloatingShapes();
    this.addLogoGlow();
  }

  addFloatingShapes() {
    const loader = document.getElementById('loader');
    const container = document.createElement('div');
    container.className = 'loader__shapes';
    container.style.cssText = `
      position: absolute;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
      opacity: 0.4;
    `;

    const colors = ['#1E4637', '#224E7A', '#C89F4A', '#88C0E6'];

    for (let i = 0; i < 15; i++) {
      const shape = document.createElement('span');
      const size = Math.random() * 8 + 4;
      const x = Math.random() * 100;
      const delay = Math.random() * 8;
      const duration = Math.random() * 15 + 20;
      const color = colors[Math.floor(Math.random() * colors.length)];

      shape.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        left: ${x}%;
        bottom: -20px;
        opacity: ${Math.random() * 0.5 + 0.2};
        animation: floatShape ${duration}s ease-in-out ${delay}s infinite;
      `;
      container.appendChild(shape);
    }

    const style = document.createElement('style');
    style.textContent = `
      @keyframes floatShape {
        0% {
          transform: translateY(0) translateX(0) scale(1);
          opacity: 0;
        }
        10% {
          opacity: 0.6;
        }
        50% {
          transform: translateY(-50vh) translateX(${Math.random() * 40 - 20}px) scale(0.8);
        }
        90% {
          opacity: 0.6;
        }
        100% {
          transform: translateY(-100vh) translateX(${Math.random() * 60 - 30}px) scale(0.3);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    loader.insertBefore(container, loader.firstChild);
  }

  addLogoGlow() {
    const logoIcon = document.querySelector('.loader__logo-icon');
    if (!logoIcon) return;

    const glow = document.createElement('div');
    glow.style.cssText = `
      position: absolute;
      width: 140px;
      height: 120px;
      background: radial-gradient(ellipse at center, rgba(30, 70, 55, 0.15) 0%, transparent 70%);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: logoGlow 3s ease-in-out infinite;
      pointer-events: none;
      z-index: -1;
    `;

    const style = document.createElement('style');
    style.textContent = `
      @keyframes logoGlow {
        0%, 100% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.5;
        }
        50% {
          transform: translate(-50%, -50%) scale(1.15);
          opacity: 0.8;
        }
      }
    `;
    document.head.appendChild(style);

    logoIcon.style.position = 'relative';
    logoIcon.appendChild(glow);
  }
}

class LogoAnimator {
  constructor() {
    this.paths = document.querySelectorAll('.loader__path');
    this.dots = document.querySelectorAll('.loader__dot');
    this.addPulseEffect();
  }

  addPulseEffect() {
    const style = document.createElement('style');
    style.textContent = `
      .loader__dot {
        animation-fill-mode: forwards;
      }
      
      .loader__dot.pulse {
        animation: dotPulse 2s ease-in-out infinite;
      }
      
      @keyframes dotPulse {
        0%, 100% {
          transform: scale(1);
          filter: drop-shadow(0 0 0 rgba(200, 159, 74, 0));
        }
        50% {
          transform: scale(1.2);
          filter: drop-shadow(0 0 8px rgba(200, 159, 74, 0.6));
        }
      }
    `;
    document.head.appendChild(style);

    setTimeout(() => {
      this.dots.forEach((dot, index) => {
        setTimeout(() => {
          dot.classList.add('pulse');
        }, index * 200);
      });
    }, 2000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new LoaderEffects();
  new LogoAnimator();
  new PageLoader({
    minLoadTime: 4500,
    progressSpeed: 20,
    exitDelay: 500
  });
});

document.addEventListener('loaderComplete', () => {
  console.log('Idaho Pharmacy page loaded successfully');
});
