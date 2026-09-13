/* ============================================================================
   bernardomcma.dev

   Four behaviours, no dependencies. The page is fully readable and navigable
   with this file blocked — everything here is enhancement only.

   1. Pin the masthead once the hero is scrolled past
   2. Reveal sections as they enter the viewport (once each)
   3. Mark the section currently being read in the nav
   4. Keep the language link pointing at the equivalent section
   ========================================================================= */

(function () {
  'use strict';

  var hasObserver = 'IntersectionObserver' in window;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function each(list, fn) {
    Array.prototype.forEach.call(list, fn);
  }


  /* -- 1. Masthead ---------------------------------------------------------
     The sentinel sits at the very bottom of the hero. The masthead pins when
     that point has travelled above the top of the viewport — not merely when
     it leaves the viewport, which would also be true on first paint. */

  var masthead = document.getElementById('masthead');
  var sentinel = document.querySelector('.sentinel');

  if (masthead && sentinel && hasObserver) {
    new IntersectionObserver(function (entries) {
      each(entries, function (entry) {
        masthead.classList.toggle('is-pinned', entry.boundingClientRect.top < 0);
      });
    }).observe(sentinel);
  }


  /* -- 2. Reveal ---------------------------------------------------------- */

  var revealables = document.querySelectorAll('.reveal');

  if (!hasObserver || reduceMotion) {
    each(revealables, function (el) { el.classList.add('is-visible'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      each(entries, function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

    each(revealables, function (el) { revealObserver.observe(el); });
  }


  /* -- 3 & 4. Reading position -------------------------------------------- */

  var hero = document.querySelector('.hero');
  var navLinks = document.querySelectorAll('.sections__list a');
  var langLink = document.querySelector('[data-lang-link]');
  var langBase = langLink ? langLink.getAttribute('data-lang-base') : '';
  var activeId = null;

  var sections = [];
  each(navLinks, function (link) {
    var target = document.querySelector(link.getAttribute('href'));
    if (target) sections.push(target);
  });

  function setActive(id) {
    if (id === activeId) return;
    activeId = id;

    each(navLinks, function (link) {
      if (link.getAttribute('href') === '#' + id) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    // Switching language mid-page lands on the same section.
    if (langLink) {
      langLink.setAttribute('href', langBase + (id ? '#' + id : ''));
    }
  }

  if (hasObserver && sections.length) {
    // A thin band across the upper third of the viewport: whatever crosses it
    // is what the reader is looking at. Sections here are shorter than a tall
    // viewport, so a band on the centre line would often sit in the section
    // *after* the one being read.
    var spy = new IntersectionObserver(function (entries) {
      each(entries, function (entry) {
        if (!entry.isIntersecting) return;
        setActive(entry.target === hero ? '' : entry.target.id);
      });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

    each(sections, function (section) { spy.observe(section); });
    if (hero) spy.observe(hero);
  }
}());
