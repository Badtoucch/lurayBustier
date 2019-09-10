$(function () {
  var $slider = $('.modal__slider');

  var sliderSettings = {
    fade: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in',
    slidesToShow: 1
  };

  $slider.slick(sliderSettings);
  $('.ever-popup .modal__slider-item img').each(function (index) {
    $('.ever-popup .slick-dots li').eq(index).find('button').append('<img src="' + this.src + '" alt="" >');
  });
});