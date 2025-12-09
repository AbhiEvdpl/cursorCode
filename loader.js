class PageLoader {
  constructor(options = {}) {
    this.options = {
      minLoadTime: options.minLoadTime || 3000,
      exitDelay: options.exitDelay || 400,
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
          const increment = Math.max(0.8, diff * 0.15);
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
    }, 500);

    setTimeout(() => {
      this.loader.style.display = 'none';
      this.onComplete();
    }, 1300);
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
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.06}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.06}s`;
      
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new PageLoader({
    minLoadTime: 3000,
    exitDelay: 400
  });
});

document.addEventListener('loaderComplete', () => {
  console.log('Gadzoom loaded');
});
