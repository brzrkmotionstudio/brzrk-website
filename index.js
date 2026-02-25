(function () {
  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  function openMenu() {
    menu.classList.remove('menu-closed');
    menu.classList.add('menu-open', 'flex');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    menu.classList.remove('menu-open');
    menu.classList.add('menu-closed');
    toggle.setAttribute('aria-expanded', 'false');
    menu.addEventListener('transitionend', function handler() {
      if (menu.classList.contains('menu-closed')) {
        menu.classList.remove('flex');
      }
      menu.removeEventListener('transitionend', handler);
    });
  }

  toggle.addEventListener('click', function () {
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    if (expanded) closeMenu();
    else openMenu();
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });
})();

(function () {
  var nav = document.querySelector('.page-nav');
  var hero = document.getElementById('hero');
  if (!nav || !hero) return;

  var heroHeight = hero.offsetHeight;

  window.addEventListener('scroll', function () {
    if (window.scrollY > heroHeight * 0.3) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });
})();

(function () {
  var form = document.getElementById('hire-contact-form');
  if (!form) return;

  var email = 'brzrk@brzrkmotion.com';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var first = (form.querySelector('[name="firstName"]') || {}).value || '';
    var last = (form.querySelector('[name="lastName"]') || {}).value || '';
    var msg = (form.querySelector('[name="message"]') || {}).value || '';
    var subject = 'Contact from BRZRK website – ' + first + ' ' + last;
    var body = 'First name: ' + first + '\nLast name: ' + last + '\n\nMessage:\n' + msg;
    var mailto = 'mailto:' + encodeURIComponent(email) + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = mailto;
  });
})();

(function () {
  var reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(function (el) { observer.observe(el); });
})();
