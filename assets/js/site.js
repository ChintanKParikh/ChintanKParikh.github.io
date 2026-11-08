/*
 * KCP Interia website script
 * --------------------------
 * 1. Opening animation ("sketch to reality"): plays once per visit (per browser tab).
 * 2. Page changes: the lamp switches off, the next page opens, the lamp switches on.
 *    Going to the Contact page uses the sliding doors instead.
 * 3. Mobile menu, photo viewer (lightbox) and the contact form.
 *
 * Visitors whose device asks for reduced motion get no animations at all.
 * Timings are in the TIMING object below if you want to make anything faster or slower.
 */
(function () {
  'use strict';

  var TIMING = {
    lampOff: 320,        // light going out before leaving a page
    lampOn: 800,         // light spreading over the new page
    doorsClose: 900,     // doors gliding shut before leaving for Contact
    doorsHold: 450,      // pause with the doors closed on the Contact page
    doorsOpen: 1100      // doors parting
  };

  var root = document.documentElement;
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (id) { return document.getElementById(id); };
  var wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
  var done = function (anims) { return Promise.all(anims.map(function (a) { return a.finished; })); };
  function store(key, value) { try { sessionStorage.setItem(key, value); } catch (e) {} }

  /* ---------- top bar height (the lamp, dimmer and doors sit just below it) ---------- */
  var nav = document.querySelector('nav');
  function setNavHeight() { if (nav) root.style.setProperty('--navh', nav.offsetHeight + 'px'); }
  setNavHeight();
  window.addEventListener('resize', setNavHeight);
  window.addEventListener('load', setNavHeight);

  /* ---------- mobile menu ---------- */
  var menuBtn = $('mobileMenuBtn'), navLinks = $('navLinks');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function () {
      var open = navLinks.classList.toggle('active');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---------- the lamp ---------- */
  function setLight(pct) { var d = $('kcpDim'); if (d) d.style.setProperty('--r', pct + '%'); }
  function tween(from, to, ms, ease) {
    return new Promise(function (resolve) {
      var start = null;
      function frame(t) {
        if (start === null) start = t;
        var k = Math.min(1, (t - start) / ms);
        setLight(from + (to - from) * ease(k));
        if (k < 1) requestAnimationFrame(frame); else resolve();
      }
      requestAnimationFrame(frame);
    });
  }
  var easeOut = function (k) { return 1 - Math.pow(1 - k, 3); };
  var easeIn = function (k) { return k * k * k; };

  function lampOff() {
    var dim = $('kcpDim'), lamp = $('kcpLamp');
    dim.style.display = 'block'; lamp.style.display = 'block';
    lamp.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200, fill: 'both' });
    setLight(160);
    return tween(160, 0, TIMING.lampOff, easeIn).then(function () { lamp.classList.remove('is-on'); });
  }
  function lampOn() {
    var dim = $('kcpDim'), lamp = $('kcpLamp');
    dim.style.display = 'block'; lamp.style.display = 'block';
    setLight(0);
    lamp.animate([
      { transform: 'translateX(-50%) rotate(-6deg)' }, { transform: 'translateX(-50%) rotate(4deg)' },
      { transform: 'translateX(-50%) rotate(-1.5deg)' }, { transform: 'translateX(-50%) rotate(0deg)' }
    ], { duration: 800, easing: 'ease-out' });
    return wait(140).then(function () {
      lamp.classList.add('is-on');
      return tween(0, 160, TIMING.lampOn, easeOut);
    }).then(function () { return wait(250); }).then(function () {
      return lamp.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 400, fill: 'both' }).finished;
    }).then(function () {
      dim.style.display = 'none'; lamp.style.display = 'none'; lamp.classList.remove('is-on');
      lamp.getAnimations().forEach(function (a) { a.cancel(); });
      root.classList.remove('kcp-arrive-lamp');
    });
  }

  /* ---------- the sliding doors (Contact) ---------- */
  function doorParts() {
    return { L: $('kcpDoorL'), R: $('kcpDoorR'), S: $('kcpSeam'), marks: Array.prototype.slice.call(document.querySelectorAll('.kcp-door .kcp-crest, .kcp-door .kcp-doorname')) };
  }
  function doorsClose() {
    var p = doorParts();
    p.L.style.display = p.R.style.display = 'block';
    var settle = function (sign) {
      return [{ transform: 'translateX(' + (sign * 101) + '%)', offset: 0 }, { transform: 'translateX(0)', offset: 0.86 },
              { transform: 'translateX(' + (-sign * 0.35) + '%)', offset: 0.94 }, { transform: 'translateX(0)', offset: 1 }];
    };
    var anims = [
      p.L.animate(settle(-1), { duration: TIMING.doorsClose, easing: 'cubic-bezier(.65,0,.35,1)', fill: 'both' }),
      p.R.animate(settle(1), { duration: TIMING.doorsClose, easing: 'cubic-bezier(.65,0,.35,1)', fill: 'both' })
    ];
    p.marks.forEach(function (m, i) {
      anims.push(m.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }],
        { duration: 500, delay: TIMING.doorsClose * 0.7 + (i % 2) * 100, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'both' }));
    });
    return done(anims);
  }
  function doorsOpen() {
    var p = doorParts();
    p.L.style.display = p.R.style.display = 'block'; p.S.style.display = 'block';
    p.marks.forEach(function (m) { m.style.opacity = '1'; });
    return wait(TIMING.doorsHold).then(function () {
      return p.S.animate([{ opacity: 0, transform: 'translateX(-50%) scaleY(.2)' }, { opacity: 1, transform: 'translateX(-50%) scaleY(1)' }],
        { duration: 380, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'both' }).finished;
    }).then(function () {
      var ease = 'cubic-bezier(.7,0,.25,1)';
      return done([
        p.L.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-101%)' }], { duration: TIMING.doorsOpen, easing: ease, fill: 'both' }),
        p.R.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(101%)' }], { duration: TIMING.doorsOpen, easing: ease, fill: 'both' }),
        p.S.animate([{ opacity: 1, width: '2px' }, { opacity: 0.75, width: '10%', offset: 0.35 }, { opacity: 0, width: '22%' }], { duration: 900, easing: 'ease-out', fill: 'both' })
      ]);
    }).then(function () {
      [p.L, p.R, p.S].concat(p.marks).forEach(function (el) { el.getAnimations().forEach(function (a) { a.cancel(); }); el.style.display = ''; el.style.opacity = ''; });
      root.classList.remove('kcp-arrive-doors');
    });
  }

  /* ---------- opening animation: sketch to reality ---------- */
  function playIntro() {
    var loader = $('kcpLoader');
    if (!loader) return Promise.resolve();
    store('kcp-seen', '1');
    var draws = Array.prototype.slice.call(loader.querySelectorAll('.draw'));
    var fills = Array.prototype.slice.call(loader.querySelectorAll('.fillin'));
    var letters = Array.prototype.slice.call(loader.querySelectorAll('.kcp-loader-name .c'));
    var tag = loader.querySelector('.kcp-loader-tag'), glow = loader.querySelector('.glow'), sketch = loader.querySelector('svg');
    var easeOutCss = 'cubic-bezier(.2,.8,.2,1)', easeInCss = 'cubic-bezier(.6,0,.8,.2)';
    var anims = [], skipped = false;

    draws.forEach(function (p, i) {
      anims.push(p.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], { duration: 700, delay: i * 75, easing: 'cubic-bezier(.45,0,.2,1)', fill: 'both' }));
    });
    var t = draws.length * 75 + 350;
    fills.forEach(function (f, i) { anims.push(f.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 400, delay: t + i * 90, fill: 'both' })); });
    anims.push(glow.animate([{ opacity: 0, transform: 'scale(.6)' }, { opacity: 0.9, transform: 'scale(1)' }, { opacity: 0.6, transform: 'scale(1)' }], { duration: 800, delay: t + 200, fill: 'both' }));
    letters.forEach(function (c, i) { anims.push(c.animate([{ transform: 'translateY(105%)' }, { transform: 'translateY(0)' }], { duration: 650, delay: t + 350 + i * 40, easing: easeOutCss, fill: 'both' })); });
    anims.push(tag.animate([{ opacity: 0, letterSpacing: '.2em' }, { opacity: 1, letterSpacing: '.42em' }], { duration: 800, delay: t + 800, easing: easeOutCss, fill: 'both' }));

    var skipBtn = loader.querySelector('.kcp-skip');
    if (skipBtn) skipBtn.addEventListener('click', function () { skipped = true; anims.forEach(function (a) { a.finish(); }); });

    return done(anims).then(function () { return wait(skipped ? 0 : 450); }).then(function () {
      var out = letters.map(function (c, i) {
        return c.animate([{ transform: 'translateY(0)', opacity: 1 }, { transform: 'translateY(-105%)', opacity: 0 }], { duration: 460, delay: i * 45, easing: easeInCss, fill: 'both' });
      });
      out.push(tag.animate([{ opacity: 1, letterSpacing: '.42em' }, { opacity: 0, letterSpacing: '.6em' }], { duration: 450, delay: 120, easing: 'ease-in', fill: 'both' }));
      out.push(sketch.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'scale(.97)' }], { duration: 520, delay: letters.length * 45, easing: 'ease-in', fill: 'both' }));
      return done(out);
    }).then(function () {
      return loader.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(-3%)' }], { duration: 650, easing: 'cubic-bezier(.7,0,.3,1)', fill: 'both' }).finished;
    }).then(function () {
      loader.style.display = 'none';
      root.classList.remove('kcp-intro');
    });
  }

  /* ---------- on arrival ---------- */
  if (root.classList.contains('kcp-intro')) playIntro();
  else if (root.classList.contains('kcp-arrive-doors')) doorsOpen();
  else if (root.classList.contains('kcp-arrive-lamp')) lampOn();

  /* ---------- on leaving: intercept links to the other pages ---------- */
  var PAGES = ['index.html', 'about.html', 'work.html', 'services.html', 'contact.html'];
  function pageOf(url) {
    var file = url.pathname.split('/').pop() || 'index.html';
    return PAGES.indexOf(file) >= 0 ? file : null;
  }
  var here = pageOf(window.location);
  var leaving = false;
  document.addEventListener('click', function (e) {
    if (reduced || leaving || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest ? e.target.closest('a[href]') : null;
    if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
    var url = new URL(a.getAttribute('href'), window.location.href);
    if (url.origin !== window.location.origin) return;
    var target = pageOf(url);
    if (!target || target === here) return;          // same page (or a #section on it): normal behaviour
    e.preventDefault();
    leaving = true;
    if (navLinks) navLinks.classList.remove('active');
    var go = function () { window.location.href = url.href; };
    if (target === 'contact.html') { store('kcp-arrive', 'doors'); doorsClose().then(go, go); }
    else { store('kcp-arrive', 'lamp'); lampOff().then(go, go); }
  });
  // coming back with the browser's Back button: make sure nothing is left covering the page
  window.addEventListener('pageshow', function (ev) {
    if (!ev.persisted) return;
    leaving = false;
    ['kcpDim', 'kcpLamp', 'kcpDoorL', 'kcpDoorR', 'kcpSeam'].forEach(function (id) {
      var el = $(id); if (!el) return; el.getAnimations().forEach(function (a) { a.cancel(); }); el.style.display = '';
    });
    root.classList.remove('kcp-arrive-lamp', 'kcp-arrive-doors');
  });

  /* ---------- photo viewer ---------- */
  var box = $('kcpLightbox');
  if (box) {
    var img = $('kcpLightboxImg'), count = $('kcpLightboxCount'), list = [], index = 0, opener = null;
    function show(i) {
      index = (i + list.length) % list.length;
      img.src = list[index].getAttribute('data-full');
      img.alt = list[index].querySelector('img').alt;
      count.textContent = (index + 1) + ' / ' + list.length;
    }
    function open(tile) {
      list = Array.prototype.slice.call(tile.closest('.kcp-gallery').querySelectorAll('.kcp-tile'));
      opener = tile; show(list.indexOf(tile));
      box.hidden = false; document.body.style.overflow = 'hidden';
      $('kcpLightboxClose').focus();
    }
    function close() { box.hidden = true; document.body.style.overflow = ''; if (opener) opener.focus(); }
    document.querySelectorAll('.kcp-tile').forEach(function (t) { t.addEventListener('click', function () { open(t); }); });
    $('kcpLightboxClose').addEventListener('click', close);
    $('kcpLightboxPrev').addEventListener('click', function () { show(index - 1); });
    $('kcpLightboxNext').addEventListener('click', function () { show(index + 1); });
    box.addEventListener('click', function (e) { if (e.target === box) close(); });
    document.addEventListener('keydown', function (e) {
      if (box.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(index - 1);
      else if (e.key === 'ArrowRight') show(index + 1);
    });
  }

  /* ---------- only one video plays at a time ---------- */
  var videos = Array.prototype.slice.call(document.querySelectorAll('.kcp-video video'));
  videos.forEach(function (v) { v.addEventListener('play', function () { videos.forEach(function (o) { if (o !== v) o.pause(); }); }); });

  /* ---------- contact form (sends to the existing Google Sheet script) ---------- */
  var form = $('contactForm');
  if (form) {
    var status = $('kcpFormStatus');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var button = form.querySelector('button[type="submit"]');
      if (button) button.disabled = true;
      status.textContent = 'Sending…';
      fetch(form.action, { method: 'POST', body: new FormData(form), mode: 'no-cors' })
        .then(function () {
          status.textContent = 'Thank you. We will be in touch shortly.';
          form.reset();
        })
        .catch(function () {
          status.textContent = 'Sorry, the message could not be sent. Please call or WhatsApp us on +91 98490 77702.';
        })
        .then(function () { if (button) button.disabled = false; });
    });
  }
})();
