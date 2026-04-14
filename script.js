/* ============================================================
   Abbas Raza Portfolio — script.js
   ============================================================ */

/* ─── Typed Text Effect ─────────────────────────────────────── */
(function initTyped() {
  const words = ['Developer', 'Blockchain Dev', 'Web3 Engineer', 'Problem Solver'];
  const el = document.getElementById('typed-text');
  if (!el) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = words[wordIndex];
    if (isDeleting) {
      el.textContent = current.slice(0, charIndex--);
    } else {
      el.textContent = current.slice(0, charIndex++);
    }

    let delay = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === current.length + 1) {
      delay = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === -1) {
      isDeleting = false;
      charIndex = 0;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
})();

/* ─── Navbar: scroll state & active link ────────────────────── */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  const sections = document.querySelectorAll('section[id]');
  const hamburger = document.getElementById('hamburger');
  const navLinksContainer = document.getElementById('nav-links');

  // Scroll → scrolled class
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
    highlightActiveNav();
  }, { passive: true });

  // Active nav link
  function highlightActiveNav() {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === current);
    });
  }

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinksContainer.classList.toggle('open');
    document.body.style.overflow = navLinksContainer.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile nav on link click
  navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinksContainer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  highlightActiveNav();
})();

/* ─── Intersection Observer: Reveal on scroll ───────────────── */
(function initReveal() {
  const targets = document.querySelectorAll(
    '.timeline-item, .skill-category, .project-card, .faq-item'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger children
        const siblings = [...entry.target.parentElement.children];
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => observer.observe(el));
})();

/* ─── FAQ accordion ─────────────────────────────────────────── */
(function initFAQ() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      items.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Toggle clicked
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();

/* ─── Contact Form ───────────────────────────────────────────── */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  const successEl = document.getElementById('form-success');
  const submitBtn = document.getElementById('submit-contact');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation
    const name = form.querySelector('#contact-name').value.trim();
    const email = form.querySelector('#contact-email').value.trim();
    const message = form.querySelector('#contact-message').value.trim();

    if (!name || !email || !message) {
      shakeForm();
      return;
    }

    // Simulate send
    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = 'Sending…';

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.querySelector('span').textContent = 'Send Message';
      successEl.classList.add('show');
      setTimeout(() => successEl.classList.remove('show'), 4000);
    }, 1200);
  });

  function shakeForm() {
    form.style.animation = 'none';
    void form.offsetWidth; // reflow
    form.style.animation = 'shake 0.4s ease';
  }
})();

/* ─── Smooth parallax on hero orbs ──────────────────────────── */
(function initParallax() {
  const orb1 = document.querySelector('.hero-orb-1');
  const orb2 = document.querySelector('.hero-orb-2');
  const orb3 = document.querySelector('.hero-orb-3');

  if (!orb1) return;

  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    orb1.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    orb2.style.transform = `translate(${-x * 15}px, ${-y * 15}px)`;
    orb3.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
  }, { passive: true });
})();

/* ─── Shake keyframe injection ───────────────────────────────── */
(function injectShake() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%       { transform: translateX(-8px); }
      40%       { transform: translateX(8px); }
      60%       { transform: translateX(-6px); }
      80%       { transform: translateX(6px); }
    }
  `;
  document.head.appendChild(style);
})();

/* ─── Count-up animation for stat cards ─────────────────────── */
(function initCountUp() {
  const stats = [
    { id: 'stat-projects', target: 20, suffix: '+', label: 'Projects Delivered' },
    { id: 'stat-uptime',   target: 80, suffix: '%', label: 'Uptime Achieved' },
    { id: 'stat-speed',    target: 60, suffix: '%', label: 'Faster Deployments' },
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);

      const stat = stats.find(s => s.id === entry.target.id);
      if (!stat) return;

      const numberEl = entry.target.querySelector('.stat-number');
      let start = 0;
      const duration = 1400;
      const step = 16;
      const increment = stat.target / (duration / step);

      const interval = setInterval(() => {
        start += increment;
        if (start >= stat.target) {
          start = stat.target;
          clearInterval(interval);
        }
        numberEl.textContent = Math.round(start) + stat.suffix;
      }, step);
    });
  }, { threshold: 0.5 });

  stats.forEach(s => {
    const el = document.getElementById(s.id);
    if (el) observer.observe(el);
  });
})();
