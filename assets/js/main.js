/**
* Template Name: iLanding
* Template URL: https://bootstrapmade.com/ilanding-bootstrap-landing-page-template/
* Updated: Nov 12 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);


  function servicelistToggle() {
    // Get all nav links
    const navLinks = document.querySelectorAll('.services-list .nav-link');

    // Add click event listener to each link
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));

        // Add active class to clicked link
        this.classList.add('active');

        // Show corresponding tab content
        const tabId = this.getAttribute('data-bs-target');
        const tabContent = document.querySelector(tabId);

        if (tabContent) {
          document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('show', 'active');
          });
          tabContent.classList.add('show', 'active');
        }
      });
    });
  }
  window.addEventListener('load', servicelistToggle);
  document.addEventListener('scroll', servicelistToggle);



})();


  // Open preferences modal
  function openPreferences() {
    document.getElementById('preferencesModal').style.display = 'flex';
    document.getElementById('cookieConsent').style.display = 'none';
  }
  // window.addEventListener('load', openPreferences);
  // document.addEventListener('scroll', openPreferences);

  // Close preferences modal
  function closePreferences() {
    document.getElementById('preferencesModal').style.display = 'none';
    document.getElementById('cookieConsent').style.display = 'block';
  }
  // window.addEventListener('load', closePreferences);
  // document.addEventListener('scroll', closePreferences);

  // Accept all cookies
  function acceptAll() {
    localStorage.setItem('cookieConsent', 'all');
    localStorage.setItem('functionalCookies', 'true');
    localStorage.setItem('statisticsCookies', 'true');
    localStorage.setItem('advertisingCookies', 'true');
    document.getElementById('cookieConsent').style.display = 'none';
  }
  // window.addEventListener('load', acceptAll);
  // document.addEventListener('scroll', acceptAll);

  // Accept only required cookies
  function acceptRequired() {
    localStorage.setItem('cookieConsent', 'required');
    localStorage.setItem('functionalCookies', 'true');
    localStorage.setItem('statisticsCookies', 'false');
    localStorage.setItem('advertisingCookies', 'false');
    document.getElementById('cookieConsent').style.display = 'none';
  }
  // window.addEventListener('load', acceptRequired);
  // document.addEventListener('scroll', acceptRequired);

  // Accept selected cookies
  function acceptSelected() {
    localStorage.setItem('cookieConsent', 'selected');
    localStorage.setItem('functionalCookies', 'true');
    localStorage.setItem('statisticsCookies',
        document.getElementById('statisticsCookies').checked);
    localStorage.setItem('advertisingCookies',
        document.getElementById('advertisingCookies').checked);
    document.getElementById('preferencesModal').style.display = 'none';
    document.getElementById('cookieConsent').style.display = 'none';
  }
  // window.addEventListener('load', acceptSelected);
  // document.addEventListener('scroll', acceptSelected);

function checkCookieConsent() {
  const cookieConsent = localStorage.getItem('cookieConsent');
  if (!cookieConsent) {
    document.getElementById('cookieConsent').style.display = 'block';
  }
}

  document.addEventListener('DOMContentLoaded', function() {
    checkCookieConsent();

    // Load saved preferences
    const statisticsCookies = localStorage.getItem('statisticsCookies') === 'true';
    const advertisingCookies = localStorage.getItem('advertisingCookies') === 'true';

    document.getElementById('statisticsCookies').checked = statisticsCookies;
    document.getElementById('advertisingCookies').checked = advertisingCookies;
  });
