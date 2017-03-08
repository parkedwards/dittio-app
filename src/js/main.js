(function ($) {
  "use strict"; // Start of use strict

  // random header image generator
  var size = 3;
  var random = Math.floor(size * Math.random());
  var imgUrl = '../img/header/masthead-' + random + '.jpg';
  $('header').css('background-image', 'url(' + imgUrl + ')');

  // login form submission
  $('#login-form').on('submit', function (event) {
    event.preventDefault();
    $.post('/user/login/', $(this).serialize())
      .done(function (res) {
        window.location.href = res.redirect;
      })
      .fail(function () {
        alert('incorrect login or password');
      });
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 500, 'easeInOutExpo');
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
  });

  // Offset for Main Navigation
  $('#mainNav').affix({
    offset: {
      top: 100
    }
  })

})(jQuery); // End of use strict
