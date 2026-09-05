(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* -------------------------------------------------------
     Menú móvil accesible
  ------------------------------------------------------- */
  var navToggle = document.getElementById('nav-toggle');
  var mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Abrir menú de navegación' : 'Cerrar menú de navegación');
      mainNav.classList.toggle('is-open', !isOpen);
    });

    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.matchMedia('(max-width: 768px)').matches) {
          navToggle.setAttribute('aria-expanded', 'false');
          navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
          mainNav.classList.remove('is-open');
        }
      });
    });
  }

  /* -------------------------------------------------------
     Contador animado de cifras (respeta reduced-motion)
  ------------------------------------------------------- */
  function animateCount(el, target, duration) {
    if (prefersReducedMotion) {
      el.textContent = target;
      return;
    }
    var start = 0;
    var startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(start + (target - start) * eased);
      if (progress < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  var statEls = document.querySelectorAll('.stat[data-count]');
  if (statEls.length && 'IntersectionObserver' in window) {
    var statObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var target = parseInt(entry.target.getAttribute('data-count'), 10) || 0;
          var countEl = entry.target.querySelector('.count');
          if (countEl) animateCount(countEl, target, 1200);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    statEls.forEach(function (el) { statObserver.observe(el); });
  } else {
    statEls.forEach(function (el) {
      var countEl = el.querySelector('.count');
      if (countEl) countEl.textContent = el.getAttribute('data-count');
    });
  }

  /* -------------------------------------------------------
     Animaciones de scroll (GSAP) — se omiten con reduced-motion
  ------------------------------------------------------- */
  if (!prefersReducedMotion && window.gsap && window.ScrollTrigger) {
    document.documentElement.classList.add('js-anim');
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.hero-inner > *', {
      opacity: 0,
      y: 24,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    });

    gsap.from('.pleat-group path', {
      scaleY: 0,
      transformOrigin: 'top',
      duration: 1.1,
      stagger: 0.08,
      ease: 'power2.out',
      delay: 0.15
    });

    document.querySelectorAll('.reveal-stagger').forEach(function (group) {
      gsap.from(group.children, {
        opacity: 0,
        y: 24,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: group,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    document.querySelectorAll('.process-step').forEach(function (step, i) {
      gsap.from(step, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: step,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        },
        delay: i * 0.05
      });
    });
  } else {
    document.querySelectorAll('.reveal-stagger > *, .hero-inner > *, .process-step').forEach(function (el) {
      el.style.opacity = '1';
    });
  }

  /* -------------------------------------------------------
     Header: sombra al hacer scroll
  ------------------------------------------------------- */
  var header = document.getElementById('site-header');
  if (header) {
    var onScroll = function () {
      header.style.boxShadow = window.scrollY > 8 ? '0 1px 0 rgba(28,25,23,0.06)' : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* -------------------------------------------------------
     Validación de formulario accesible
     (front-end únicamente: no hay backend conectado todavía)
  ------------------------------------------------------- */
  var form = document.getElementById('contact-form');
  if (form) {
    var summary = document.getElementById('form-summary');
    var summaryList = document.getElementById('form-summary-list');
    var successMsg = document.getElementById('form-success');

    var rules = {
      'f-name': { required: true, label: 'Nombre completo' },
      'f-hotel': { required: true, label: 'Hotel / Empresa' },
      'f-email': { required: true, email: true, label: 'Correo electrónico' },
      'f-phone': { required: false },
      'f-rooms': { required: false },
      'f-message': { required: true, label: 'Mensaje' }
    };

    function validateField(id) {
      var input = document.getElementById(id);
      var rule = rules[id];
      var errorEl = document.getElementById(id + '-error');
      var field = input.closest('.field');
      var value = input.value.trim();
      var message = '';

      if (rule.required && !value) {
        message = rule.label + ' es obligatorio.';
      } else if (rule.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        message = 'Ingrese un correo electrónico válido.';
      }

      if (message) {
        field.classList.add('has-error');
        errorEl.textContent = message;
      } else {
        field.classList.remove('has-error');
        errorEl.textContent = '';
      }
      return message;
    }

    Object.keys(rules).forEach(function (id) {
      var input = document.getElementById(id);
      if (input) {
        input.addEventListener('blur', function () { validateField(id); });
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      successMsg.hidden = true;

      var errors = [];
      Object.keys(rules).forEach(function (id) {
        var message = validateField(id);
        if (message) errors.push({ id: id, message: message });
      });

      if (errors.length) {
        summaryList.innerHTML = '';
        errors.forEach(function (err) {
          var li = document.createElement('li');
          var a = document.createElement('a');
          a.href = '#' + err.id;
          a.textContent = err.message;
          a.addEventListener('click', function (evt) {
            evt.preventDefault();
            document.getElementById(err.id).focus();
          });
          li.appendChild(a);
          summaryList.appendChild(li);
        });
        summary.hidden = false;
        summary.focus();
        return;
      }

      summary.hidden = true;

      var submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.classList.add('is-loading');
      submitBtn.disabled = true;

      // Simulación de envío: reemplazar por la llamada real al backend/servicio de correo.
      window.setTimeout(function () {
        submitBtn.classList.remove('is-loading');
        submitBtn.disabled = false;
        successMsg.hidden = false;
        form.reset();
      }, 900);
    });
  }

  /* -------------------------------------------------------
     Año dinámico en el footer
  ------------------------------------------------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
