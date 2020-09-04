$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 100) { 
          
          $('.navbar').addClass('bg-panelblue');
      } else {
          $('.navbar').removeClass('bg-panelblue');
      }
    });
});