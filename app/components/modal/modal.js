$(function () {
  var $slider = $('.modal__slider');

  var sliderSettings = {
    fade: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in',
    slidesToShow: 1,
    responsive: [{
      breakpoint: 640,
      settings: 'unslick'
    }]
  };

  var fillCarouselNavigation = function () {
    $('.ever-popup .modal__slider-item img').each(function (index) {
      $('.ever-popup .slick-dots li')
          .eq(index)
          .find('button')
          .append('<img src="' + this.src + '" alt="" >');
    });
  };

  $slider.slick(sliderSettings);
  fillCarouselNavigation();

  $(window).resize(function () {
    if ($slider.hasClass('slick-initialized')) {
      return;
    }

    $slider.slick(sliderSettings);
    fillCarouselNavigation();
  });
});