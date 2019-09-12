$(function () {
  var setBodyPadding = function () {
    if ($('.header').is(':visible') && $(window).outerWidth() > 479) {
      $(document.body).css('padding-top', $('.header').outerHeight() + 'px');
    } else {
      $(document.body).css('padding-top', 0);
    }
  };

  setBodyPadding();

  $(window).resize(function () {
    setBodyPadding();
  });

  $(document).on('click', '.nav__link[href^="#"]', function (evt) {
    evt.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - $('.header').outerHeight() - 40
    }, 500);
  });
})