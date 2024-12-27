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


  function closePreferences() {
    document.querySelector('.preferences-content').parentElement.style.display = 'none';
  }

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

  // Accept selected cookies
  function acceptSelected() {
    const preferences = {
      functional: true, // Always required
      statistics: document.getElementById('statisticsCookies').checked,
      advertising: document.getElementById('advertisingCookies').checked
    };

    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    closePreferences();
  }

  function checkCookieConsent() {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      document.getElementById('cookieConsent').style.display = 'block';
    }
  }

  function loadSavedPreferences() {
    const preferences = JSON.parse(localStorage.getItem('cookiePreferences') || '{}');

    if (preferences.statistics !== undefined) {
      document.getElementById('statisticsCookies').checked = preferences.statistics;
    }
    if (preferences.advertising !== undefined) {
      document.getElementById('advertisingCookies').checked = preferences.advertising;
    }
  }

  function updatePreferences(type, value) {
    const preferences = JSON.parse(localStorage.getItem('cookiePreferences') || '{}');
    preferences[type] = value;
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
  }

  document.addEventListener('DOMContentLoaded', function() {
    checkCookieConsent();

    const statisticsSwitch = document.getElementById('statisticsCookies');
    const advertisingSwitch = document.getElementById('advertisingCookies');

    // Load saved preferences
    loadSavedPreferences();

    // Add change event listeners
    statisticsSwitch.addEventListener('change', function() {
      updatePreferences('statistics', this.checked);
    });

    advertisingSwitch.addEventListener('change', function() {
      updatePreferences('advertising', this.checked);
    });
  });


// Initialize EmailJS
(function() {
  // Replace with your EmailJS public key
  emailjs.init("gCKfKIFeKaNHagEPv");
})();

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form elements
  const form = this;
  const loadingIndicator = form.querySelector('.loading');
  const errorMessage = form.querySelector('.error-message');
  const sentMessage = form.querySelector('.sent-message');
  const submitButton = form.querySelector('button[type="submit"]');

  // Show loading indicator
  loadingIndicator.classList.remove('d-none');
  submitButton.disabled = true;

  // Hide previous messages
  errorMessage.classList.add('d-none');
  sentMessage.classList.add('d-none');

  // Prepare template parameters
  const templateParams = {
    from_name: document.getElementById('name').value,
    from_email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };

  // Send email using EmailJS
  emailjs.send(
      'service_3h6ltlq', // Replace with your EmailJS service ID
      'template_t53gzyr', // Replace with your EmailJS template ID
      templateParams
  )
      .then(function(response) {
        // Hide loading indicator
        loadingIndicator.classList.add('d-none');

        // Show success message
        sentMessage.classList.remove('d-none');

        // Reset form
        form.reset();

        // Re-enable submit button
        submitButton.disabled = false;
      })
      .catch(function(error) {
        // Hide loading indicator
        loadingIndicator.classList.add('d-none');

        // Show error message
        errorMessage.textContent = 'Error sending message. Please try again later.';
        errorMessage.classList.remove('d-none');

        // Re-enable submit button
        submitButton.disabled = false;

        console.error('EmailJS error:', error);
      });
});
