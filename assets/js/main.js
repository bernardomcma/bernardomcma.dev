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

  try {
    var pageLang = (document.documentElement.lang || '').toLowerCase().indexOf('pt') === 0 ? 'pt' : 'en';
    localStorage.setItem('bm_lang', pageLang);
  } catch (e) {}

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


  /* -- 5. Copy handle ----------------------------------------------------- */

  var copyBtns = document.querySelectorAll('[data-copy]');

  each(copyBtns, function (btn) {
    var target = btn.querySelector('[data-copy-target]');
    var original = target ? target.textContent : '';
    var timer = null;

    btn.addEventListener('click', function () {
      var val = btn.getAttribute('data-copy');
      var label = btn.getAttribute('data-copy-label') || 'copied';
      if (!val || !navigator.clipboard) return;

      navigator.clipboard.writeText(val).then(function () {
        if (!target) return;
        clearTimeout(timer);
        btn.classList.add('is-copied');
        target.textContent = label;
        timer = setTimeout(function () {
          btn.classList.remove('is-copied');
          target.textContent = original;
        }, 1600);
      });
    });
  });


  /* -- 6. Live CyberCAT fork stats ----------------------------------------
     The HTML carries the numbers at the time of the last edit so the section
     is complete with JS disabled or when the GitHub API rate-limits. When the
     API responds, replace them with the current compare + latest release. */

  var commitsEl = document.querySelector('[data-cyber-commits]');

  if (commitsEl && 'fetch' in window) {
    var numFmt = new Intl.NumberFormat(pageLang === 'pt' ? 'pt-BR' : 'en-US');

    fetch('https://api.github.com/repos/Deweh/CyberCAT-SimpleGUI/compare/master...bernardomcma:CyberCAT-SimpleGUI:master')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d || typeof d.ahead_by !== 'number' || !Array.isArray(d.files)) return;

        var files = 0, add = 0, del = 0;
        each(d.files, function (f) {
          if (f.filename && /\.cs$/.test(f.filename)) {
            files++;
            add += f.additions || 0;
            del += f.deletions || 0;
          }
        });

        commitsEl.textContent = numFmt.format(d.ahead_by);
        var filesEl = document.querySelector('[data-cyber-files]');
        var addEl = document.querySelector('[data-cyber-add]');
        var delEl = document.querySelector('[data-cyber-del]');
        if (filesEl) filesEl.textContent = numFmt.format(files);
        if (addEl) addEl.textContent = '+' + numFmt.format(add);
        if (delEl) delEl.textContent = '\u2212' + numFmt.format(del);
      })
      .catch(function () {});

    fetch('https://api.github.com/repos/bernardomcma/CyberCAT-SimpleGUI/releases/latest')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d || !d.tag_name) return;
        var ver = d.tag_name.replace(/^v?(\d+\.\d+)\.0$/, 'v$1');
        each(document.querySelectorAll('[data-cyber-ver]'), function (el) {
          el.textContent = ver;
        });
      })
      .catch(function () {});
  }
}());
