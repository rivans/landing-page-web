/* ===========================
   MAIN JS — rivansyah.com
   Vanilla JavaScript
   =========================== */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Navbar Scroll Effect ----
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll to top button visibility
    if (scrollTopBtn) {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // ---- Scroll to Top ----
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- Mobile Menu Toggle ----
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuClose = document.getElementById('mobileMenuClose');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Active Nav Link on Scroll ----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');

  function updateActiveNav() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  // ---- Scroll Reveal (IntersectionObserver) ----
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // ---- Contact Form Validation ----
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const name = document.getElementById('formName');
      const email = document.getElementById('formEmail');
      const message = document.getElementById('formMessage');
      let isValid = true;

      // Reset errors
      [name, email, message].forEach(field => {
        if (field) {
          field.style.borderColor = '';
          const err = field.parentElement.querySelector('.form-error');
          if (err) err.remove();
        }
      });

      // Validate name
      if (name && !name.value.trim()) {
        showFieldError(name, 'Nama wajib diisi.');
        isValid = false;
      }

      // Validate email
      if (email && !isValidEmail(email.value)) {
        showFieldError(email, 'Masukkan alamat email yang valid.');
        isValid = false;
      }

      // Validate message
      if (message && !message.value.trim()) {
        showFieldError(message, 'Pesan wajib diisi.');
        isValid = false;
      }

      if (!isValid) {
        e.preventDefault();
      }
    });
  }

  function showFieldError(field, msg) {
    field.style.borderColor = '#f43f5e';
    const errorEl = document.createElement('p');
    errorEl.className = 'form-error';
    errorEl.style.cssText = 'color: #f43f5e; font-size: 0.75rem; margin-top: 0.25rem; font-weight: 500;';
    errorEl.textContent = msg;
    field.parentElement.appendChild(errorEl);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ---- Typed text effect for hero subtitle (optional, subtle) ----
  const typedElement = document.getElementById('heroTyped');
  if (typedElement) {
    const text = typedElement.getAttribute('data-text');
    if (text) {
      typedElement.textContent = '';
      let i = 0;
      function typeChar() {
        if (i < text.length) {
          typedElement.textContent += text.charAt(i);
          i++;
          setTimeout(typeChar, 30);
        }
      }
      setTimeout(typeChar, 1000);
    }
  }
});
