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
})