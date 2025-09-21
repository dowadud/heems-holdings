/**
 * HEEMS HOLDINGS LLC - ENHANCED SCROLL EFFECTS
 * Professional interactions and scroll-based animations
 */

// Utility Functions
const utils = {
  // Debounce function for performance
  debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  },

  // Throttle function for scroll events
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  },

  // Check if element is in viewport with custom threshold
  isInViewport(element, threshold = 0.1) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const elementHeight = rect.bottom - rect.top;
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    return visibleHeight / elementHeight >= threshold;
  },

  // Linear interpolation for smooth animations
  lerp(start, end, factor) {
    return start + (end - start) * factor;
  },

  // Map value from one range to another
  mapRange(value, inMin, inMax, outMin, outMax) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  },

  // Get scroll percentage of document
  getScrollPercent() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  },

  // Format numbers with commas
  formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};

// Enhanced Navigation with Scroll Effects
class EnhancedNavigation {
  constructor() {
    this.nav = document.querySelector('.nav-header');
    this.navToggle = document.querySelector('.nav-toggle');
    this.navLinks = document.querySelector('.nav-links');
    this.mobileMenuOpen = false;
    this.lastScrollY = window.scrollY;
    this.scrollDirection = 'up';
    
    this.init();
  }

  init() {
    // Mobile menu toggle
    if (this.navToggle) {
      this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Close mobile menu on link click
    if (this.navLinks) {
      this.navLinks.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
          this.closeMobileMenu();
        }
      });
    }

    // Enhanced scroll effects
    this.initScrollEffects();
    this.initScrollSpy();
  }

  initScrollEffects() {
    const handleScroll = utils.throttle(() => {
      const currentScrollY = window.scrollY;
      this.scrollDirection = currentScrollY > this.lastScrollY ? 'down' : 'up';
      
      // Hide/show nav based on scroll direction
      if (currentScrollY > 100) {
        if (this.scrollDirection === 'down' && currentScrollY > this.lastScrollY + 10) {
          this.nav.style.transform = 'translateY(-100%)';
        } else if (this.scrollDirection === 'up') {
          this.nav.style.transform = 'translateY(0)';
        }
        
        // Enhanced background blur effect
        this.nav.style.backgroundColor = 'rgba(11, 13, 16, 0.98)';
        this.nav.style.backdropFilter = 'blur(20px)';
        this.nav.style.borderBottom = '1px solid rgba(165, 169, 179, 0.2)';
      } else {
        this.nav.style.transform = 'translateY(0)';
        this.nav.style.backgroundColor = 'rgba(11, 13, 16, 0.95)';
        this.nav.style.backdropFilter = 'blur(8px)';
        this.nav.style.borderBottom = '1px solid var(--border)';
      }
      
      this.lastScrollY = currentScrollY;
    }, 10);

    window.addEventListener('scroll', handleScroll);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.navLinks.style.display = this.mobileMenuOpen ? 'flex' : 'none';
    this.navToggle.textContent = this.mobileMenuOpen ? '✕' : '☰';
    
    if (this.mobileMenuOpen) {
      this.navLinks.style.position = 'absolute';
      this.navLinks.style.top = '100%';
      this.navLinks.style.left = '0';
      this.navLinks.style.right = '0';
      this.navLinks.style.backgroundColor = 'rgba(11, 13, 16, 0.98)';
      this.navLinks.style.backdropFilter = 'blur(20px)';
      this.navLinks.style.flexDirection = 'column';
      this.navLinks.style.padding = '1rem';
      this.navLinks.style.borderTop = '1px solid var(--border)';
    }
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
    this.navLinks.style.display = window.innerWidth <= 768 ? 'none' : 'flex';
    this.navToggle.textContent = '☰';
  }

  initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentLink = document.querySelector(`[href="#${entry.target.id}"]`);
          navLinks.forEach(link => link.classList.remove('active'));
          if (currentLink) {
            currentLink.classList.add('active');
          }
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
  }
}

// Scroll Progress Indicator
class ScrollProgress {
  constructor() {
    this.createProgressBar();
    this.init();
  }

  createProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    this.progressBar = progressBar;
  }

  init() {
    const updateProgress = utils.throttle(() => {
      const scrollPercent = utils.getScrollPercent();
      this.progressBar.style.width = `${scrollPercent}%`;
    }, 16);

    window.addEventListener('scroll', updateProgress);
  }
}

// Advanced Scroll Animations
class ScrollAnimations {
  constructor() {
    this.animatedElements = document.querySelectorAll(
      '.animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right, .animate-scale-in, .animate-slide-down, .animate-stagger, .image-reveal, .text-reveal'
    );
    this.init();
  }

  init() {
    // Create intersection observer with multiple thresholds
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.revealElement(entry.target);
          }
        });
      },
      { 
        threshold: [0.1, 0.3, 0.5],
        rootMargin: '0px 0px -50px 0px'
      }
    );

    this.animatedElements.forEach(element => {
      observer.observe(element);
    });
  }

  revealElement(element) {
    if (element.classList.contains('animate-stagger')) {
      // Staggered animation for multiple children
      setTimeout(() => {
        element.classList.add('revealed');
      }, 100);
    } else if (element.classList.contains('text-reveal')) {
      // Text reveal animation
      const content = element.querySelector('.text-reveal-content');
      if (!content) {
        element.innerHTML = `<span class="text-reveal-content">${element.innerHTML}</span>`;
      }
      element.classList.add('revealed');
    } else {
      // Standard reveal
      element.classList.add('revealed');
    }
  }
}

// Parallax Effects
class ParallaxEffects {
  constructor() {
    this.parallaxElements = document.querySelectorAll('.parallax-element, .parallax-slow, .parallax-medium, .parallax-fast');
    this.init();
  }

  init() {
    if (this.parallaxElements.length === 0) return;

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const handleScroll = utils.throttle(() => {
      const scrollY = window.pageYOffset;
      
      this.parallaxElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate if element is in viewport
        if (rect.bottom >= 0 && rect.top <= windowHeight) {
          let speed = 0.5; // Default speed
          
          if (element.classList.contains('parallax-slow')) speed = 0.3;
          else if (element.classList.contains('parallax-medium')) speed = 0.5;
          else if (element.classList.contains('parallax-fast')) speed = 0.8;
          
          const yPos = -(scrollY - elementTop) * speed;
          element.style.setProperty('--parallax-y-slow', `${yPos * 0.3}px`);
          element.style.setProperty('--parallax-y-medium', `${yPos * 0.5}px`);
          element.style.setProperty('--parallax-y-fast', `${yPos * 0.8}px`);
        }
      });
    }, 16);

    window.addEventListener('scroll', handleScroll);
  }
}

// Enhanced Counter Animation
class EnhancedCounterAnimation {
  constructor() {
    this.counters = document.querySelectorAll('.stat-value');
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          this.animateCounter(entry.target);
        }
      });
    }, { threshold: 0.7 });

    this.counters.forEach(counter => observer.observe(counter));
  }

  animateCounter(element) {
    element.dataset.animated = 'true';
    element.classList.add('counter-animate', 'counting');
    
    const target = parseInt(element.dataset.target) || parseInt(element.textContent.replace(/[^\d]/g, ''));
    const suffix = element.dataset.suffix || '';
    const duration = 1200;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Enhanced easing function (ease-out-expo)
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeOutExpo * target);
      
      element.textContent = utils.formatNumber(current) + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = utils.formatNumber(target) + suffix;
        element.classList.remove('counting');
      }
    };

    requestAnimationFrame(animate);
  }
}

// Section Highlighting
class SectionHighlight {
  constructor() {
    this.sections = document.querySelectorAll('.section-highlight, .section-transition');
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, { threshold: 0.3 });

    this.sections.forEach(section => observer.observe(section));
  }
}

// Enhanced Quote Slider with Smooth Transitions
class EnhancedQuoteSlider {
  constructor() {
    this.slider = document.querySelector('.quote-slider');
    this.quotes = document.querySelectorAll('.quote-slide');
    this.currentSlide = 0;
    this.autoplayInterval = null;
    this.isTransitioning = false;
    
    if (this.quotes.length > 0) {
      this.init();
    }
  }

  init() {
    // Set up initial state
    this.quotes.forEach((quote, index) => {
      quote.style.position = 'absolute';
      quote.style.top = '0';
      quote.style.left = '0';
      quote.style.width = '100%';
      quote.style.opacity = index === 0 ? '1' : '0';
      quote.style.transform = index === 0 ? 'translateY(0)' : 'translateY(20px)';
      quote.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });

    // Make container relative
    if (this.slider) {
      const quoteContent = this.slider.querySelector('.quote-content');
      if (quoteContent) {
        quoteContent.style.position = 'relative';
        quoteContent.style.minHeight = '200px'; // Prevent layout shifts
      }
    }

    this.startAutoplay();

    // Pause on hover
    if (this.slider) {
      this.slider.addEventListener('mouseenter', () => this.stopAutoplay());
      this.slider.addEventListener('mouseleave', () => this.startAutoplay());
    }
  }

  nextSlide() {
    if (this.isTransitioning) return;
    
    this.isTransitioning = true;
    const currentQuote = this.quotes[this.currentSlide];
    
    // Fade out current
    currentQuote.style.opacity = '0';
    currentQuote.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
      this.currentSlide = (this.currentSlide + 1) % this.quotes.length;
      const nextQuote = this.quotes[this.currentSlide];
      
      // Reset position and fade in next
      nextQuote.style.transform = 'translateY(20px)';
      setTimeout(() => {
        nextQuote.style.opacity = '1';
        nextQuote.style.transform = 'translateY(0)';
        this.isTransitioning = false;
      }, 50);
    }, 400);
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }
}

// Smooth Scroll Enhancement
class SmoothScrollEnhancement {
  constructor() {
    this.init();
  }

  init() {
    document.addEventListener('click', (e) => {
      if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerHeight = document.querySelector('.nav-header').offsetHeight;
          this.smoothScrollTo(targetElement, headerHeight + 20);
        }
      }
    });
  }

  smoothScrollTo(element, offset = 0) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = Math.min(Math.abs(distance) * 0.5, 1000); // Max 1 second
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Ease-in-out cubic
      const ease = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }
}

// Performance Monitor with Enhanced Tracking
class EnhancedPerformanceMonitor {
  constructor() {
    this.scrollDepth = 0;
    this.timeOnPage = Date.now();
    this.init();
  }

  init() {
    this.trackScrollDepth();
    this.trackTimeOnPage();
    this.trackInteractions();
  }

  trackScrollDepth() {
    let maxScroll = 0;
    const milestones = [25, 50, 75, 90, 100];
    const reached = [];
    
    const trackScroll = utils.throttle(() => {
      const scrollPercent = Math.round(utils.getScrollPercent());
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        milestones.forEach(milestone => {
          if (scrollPercent >= milestone && !reached.includes(milestone)) {
            reached.push(milestone);
            console.log(`Scroll milestone reached: ${milestone}%`);
            // Here you would send to analytics
          }
        });
      }
    }, 500);

    window.addEventListener('scroll', trackScroll);
  }

  trackTimeOnPage() {
    window.addEventListener('beforeunload', () => {
      const timeSpent = Date.now() - this.timeOnPage;
      console.log(`Time on page: ${Math.round(timeSpent / 1000)} seconds`);
      // Here you would send to analytics
    });
  }

  trackInteractions() {
    // Track CTA clicks
    document.addEventListener('click', (e) => {
      if (e.target.matches('.btn, .nav-link, .footer-links a')) {
        console.log(`Interaction: ${e.target.textContent.trim()}`);
        // Here you would send to analytics
      }
    });
  }
}

// Initialize all enhanced components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize enhanced components
  new EnhancedNavigation();
  new ScrollProgress();
  new ScrollAnimations();
  new ParallaxEffects();
  new EnhancedCounterAnimation();
  new SectionHighlight();
  new EnhancedQuoteSlider();
  new SmoothScrollEnhancement();
  new EnhancedPerformanceMonitor();
  
  console.log('Heems Holdings LLC - Enhanced scroll effects initialized');
});

// Handle window resize with enhanced responsiveness
window.addEventListener('resize', utils.debounce(() => {
  const nav = new EnhancedNavigation();
  if (window.innerWidth > 768) {
    nav.closeMobileMenu();
    nav.navLinks.style.display = 'flex';
  }
  
  // Recalculate parallax on resize
  window.dispatchEvent(new Event('scroll'));
}, 250));