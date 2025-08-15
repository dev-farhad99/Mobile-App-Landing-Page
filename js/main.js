/* 

Table of content
1.SlickNav responsive
2.Counter js
3.Slick Slider (All)
4.Countdown js for Comingsoon page
5.Light gallery js for product gallery
6.Specific Hover Zoom js for  product single page
7.Account page password toggle js

*/

/* SlickNav responsive */

(function($) {
  "use strict";


  // Custom-mav js//
  $(window).on('scroll', function(event) {
      var scrollValue = $(window).scrollTop();
      if (scrollValue > 100) {
          $('.header-nav-menu').addClass('fixed-top animated slideInDown');
      } else {
          $('.header-nav-menu').removeClass('fixed-top animated slideInDown');
      }
  });



  "use strict";


  /*======== Doucument Ready Function =========*/
  jQuery(document).ready(function() {

      // slicknav
      /**
       * Slicknav - a Mobile Menu
       */
      var $slicknav_label;
      $('#responsive-menu').slicknav({
          duration: 500,
          easingOpen: 'easeInExpo',
          easingClose: 'easeOutExpo',
          closedSymbol: '<i class="arrow-indicator fa fa-angle-down"></i>',
          openedSymbol: '<i class="arrow-indicator fa fa-angle-up"></i>',
          prependTo: '#slicknav-mobile',
          allowParentLinks: true,
          label: ""
      });


      /**
       * Sticky Header
       */

      $(window).scroll(function() {

          if ($(window).scrollTop() > 10) {

              $('.header-nav-menu-inner').addClass('navbar-sticky-in')

          } else {
              $('.header-nav-menu-inner').removeClass('navbar-sticky-in')
          }

      })

      /**
       * Main Menu Slide Down Effect
       */

      var selected = $('#navbar li');
      // Mouse-enter dropdown
      selected.on("mouseenter", function() {
          $(this).find('ul').first().stop(true, true).delay(350).slideDown(500, 'easeInOutQuad');
      });

      // Mouse-leave dropdown
      selected.on("mouseleave", function() {
          $(this).find('ul').first().stop(true, true).delay(100).slideUp(150, 'easeInOutQuad');
      });

      /**
       *  Arrow for Menu has sub-menu
       */
      if ($(window).width() > 992) {
          $(".navbar-arrow ul ul > li").has("ul").children("a").append("<i class='arrow-indicator fa fa-angle-right'></i>");
      }

  });


  (function() {

      var doc = document.documentElement;
      var w = window;

      /*
      define four variables: curScroll, prevScroll, curDirection, prevDirection
      */

      var curScroll;
      var prevScroll = w.scrollY || doc.scrollTop;
      var curDirection = 0;
      var prevDirection = 0;

      /*
      how it works:
      -------------
      create a scroll event listener
      create function to check scroll position on each scroll event,
      compare curScroll and prevScroll values to find the scroll direction
      scroll up - 1, scroll down - 2, initial - 0
      then set the direction value to curDirection
      compare curDirection and prevDirection
      if it is different, call a function to show or hide the header
      example:
      step 1: user scrolls down: curDirection 2, prevDirection 0 > hide header
      step 2: user scrolls down again: curDirection 2, prevDirection 2 > already hidden, do nothing
      step 3: user scrolls up: curDirection 1, prevDirection 2 > show header
      */

      var header = document.getElementById('header-nav-menu');
      var toggled;
      var threshold = 200;

      var checkScroll = function() {
          curScroll = w.scrollY || doc.scrollTop;
          if (curScroll > prevScroll) {
              // scrolled down
              curDirection = 2;
          } else {
              //scrolled up
              curDirection = 1;
          }

          if (curDirection !== prevDirection) {
              toggled = toggleHeader();
          }

          prevScroll = curScroll;
          if (toggled) {
              prevDirection = curDirection;
          }
      };

      var toggleHeader = function() {
          toggled = true;
          if (curDirection === 2 && curScroll > threshold) {
              header.classList.add('hide');
              jQuery('.sticky1').addClass('tab-sticky');
          } else if (curDirection === 1) {
              header.classList.remove('hide');
              jQuery('.sticky1').removeClass('tab-sticky');
          } else {
              toggled = false;
          }
          return toggled;
      };

      window.addEventListener('scroll', checkScroll);

  })();

  /* SlickNav responsive End*/


  /* Counter js Start */
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 1000;

    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function() {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }
        }, duration);
    });
  /* Counter js end */


    /* Slick slider Start*/

    // Slick slider for Screenshot section
    $('.screenshot-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    // Slick slider for Testimonial section

    $('.testimonial-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Slick slider for Partner section

    $('.partner-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: false,
        responsive: [{
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Slick slider for Testimonial Page

    $('.testimonial-slider1').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    /* Slick slider for Screenshot section End*/


    /* Back-to-top js Start */
    $(document).on('click', '#back-to-top, .back-to-top', () => {
        $('html, body').animate({
            scrollTop: 0
        }, '500');
        return false;
    });
    $(window).on('scroll', () => {
        if ($(window).scrollTop() > 500) {
            $('#back-to-top').fadeIn(200);
        } else {
            $('#back-to-top').fadeOut(200);
        }
    });
    /* Back-to-top js end  */


    /* Back-to-top js end  Countdown js for Comingsoon page Start*/

    document.addEventListener('DOMContentLoaded', function() {
        const days = document.getElementById('days');
        const hours = document.getElementById('hours');
        const minutes = document.getElementById('minutes');
        const seconds = document.getElementById('seconds');
  
        // Check if all elements are found
        const elementsExist = days && hours && minutes && seconds;
  
        // If any element is missing, log a warning and return
        if (!elementsExist) {
            console.warn('One or more countdown elements not found.');
            return;
        }
  
        // Get current date and time
        const currentTime = new Date();
  
        // Set new date 30 days from now
        const targetTime = new Date(currentTime.getTime() + (100 * 24 * 60 * 60 * 1000));
  
        // Update countdown time
        function updateCountdown() {
            const currentTime = new Date();
            const diff = targetTime - currentTime;
  
            const d = Math.floor(diff / 1000 / 60 / 60 / 24);
            const h = Math.floor((diff / 1000 / 60 / 60) % 24);
            const m = Math.floor((diff / 1000 / 60) % 60);
            const s = Math.floor((diff / 1000) % 60);
  
            // Update elements if they exist
            if (days) days.innerHTML = d;
            if (hours) hours.innerHTML = h < 10 ? '0' + h : h;
            if (minutes) minutes.innerHTML = m < 10 ? '0' + m : m;
            if (seconds) seconds.innerHTML = s < 10 ? '0' + s : s;
        }
  
        // Call updateCountdown initially and set it to run every second
        updateCountdown();
        setInterval(updateCountdown, 1000);
    });

    /* Back-to-top js end  Countdown js for Comingsoon page End*/


    /* Light gallery js for product gallery Start*/

    lightGallery(document.getElementById('selector1'), {
        plugins: [lgThumbnail],
        allowMediaOverlap: true,
        toggleThumb: true,
    });

    /* Light gallery js for product gallery End*/


    /* Specific Hover Zoom js for  product single page Start*/

    document.addEventListener("DOMContentLoaded", function() {
        const image = document.querySelector('.zoom-image');
    
        // Check if the image element exists
        if (image) {
            image.addEventListener('mousemove', function(e) {
                // Get the dimensions and position of the image
                const rect = image.getBoundingClientRect();
    
                // Calculate the position of the mouse relative to the image
                const x = e.clientX - rect.left; // x position within the image
                const y = e.clientY - rect.top;  // y position within the image
    
                // Calculate percentages
                const xPercent = (x / rect.width) * 100;
                const yPercent = (y / rect.height) * 100;
    
                // Set the transform-origin based on mouse position
                image.style.transformOrigin = `${xPercent}% ${yPercent}%`;
            });
        }
    });
    
    /* Specific Hover Zoom js for  product single page End*/


    /* Account page password toggle js Start*/

    document.addEventListener('DOMContentLoaded', function () {
        const togglePassword = document.querySelector('#togglePassword');
        const password = document.querySelector('#password');
    
        // Check if togglePassword and password elements exist
        if (togglePassword && password) {
            const eyeIcon = togglePassword.querySelector('i');
    
            // Check if eyeIcon exists
            if (eyeIcon) {
                togglePassword.addEventListener('click', function () {
                    // Toggle the type attribute
                    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
                    password.setAttribute('type', type);
    
                    // Toggle the eye icon class between 'fa-eye' and 'fa-eye-slash'
                    eyeIcon.classList.toggle('fa-eye');
                    eyeIcon.classList.toggle('fa-eye-slash');
                });
            }
        }
    });
    

    document.addEventListener('DOMContentLoaded', function () {
        const togglePassword = document.querySelector('#togglePassword1');
        const password = document.querySelector('#password1');
    
        // Check if togglePassword and password elements exist
        if (togglePassword && password) {
            const eyeIcon = togglePassword.querySelector('i');
    
            // Check if eyeIcon exists
            if (eyeIcon) {
                togglePassword.addEventListener('click', function () {
                    // Toggle the type attribute
                    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
                    password.setAttribute('type', type);
    
                    // Toggle the eye icon class between 'fa-eye' and 'fa-eye-slash'
                    eyeIcon.classList.toggle('fa-eye');
                    eyeIcon.classList.toggle('fa-eye-slash');
                });
            }
        }
    });
    
      /* Account page password toggle js End*/

})(jQuery);