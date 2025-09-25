(function ($) {    

      $(document).ready(function(){
        $("#sticky-header").sticky({topSpacing:0});
         // Show scroll-to-top button when user scrolls down
          $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.digitalgrove-scrool-top').fadeIn();
            } else {
                $('.digitalgrove-scrool-top').fadeOut();
            }
        });
        
          // Scroll to top when button is clicked
          $('.digitalgrove-scrool-top').click(function() {
              $('html, body').animate({ scrollTop: 0 }, 'slow');
          });   
          
          wow = new WOW(
            {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
          }
          )
          wow.init();
      });
  
  
  })(jQuery);
