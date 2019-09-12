$(function () {
  var $desktopCarousel = $('.feedbacks__desktop .feedbacks__items');
  var $reviewsCollection = $desktopCarousel.find('.review');
  var $names = $desktopCarousel.find('.review__name');
  var $total = $('.feedbacks__list-total .total-counter');

  $names.each(function () {
    $('<span>', {
      class: 'review__thumb',
      text: $(this).text()[0]
    }).insertBefore($(this));
  });

  if ($reviewsCollection.length) {
    $total.text($reviewsCollection.length);
    $reviewsCollection.each(function () {
      $(this)
          .clone(true)
          .appendTo('.feedbacks__adaptive .feedbacks__items')
          .wrap('<div class="feedback__item">');
    });
  }

  var $adaptiveCarousel = $('.feedbacks__adaptive .feedbacks__items');

  var desktopCarouselSettings = {
    fade: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: $('.feedbacks__desktop .feedbacks__nav'),
    appendArrows: $('.feedbacks__desktop .feedbacks__nav')
  };
  var adaptiveCarouselSettings = {
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: $('.feedbacks__adaptive .feedbacks__nav')
  };

  $desktopCarousel.slick(desktopCarouselSettings);
  $adaptiveCarousel.slick(adaptiveCarouselSettings);
});