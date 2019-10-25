$(".reviews-content").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
	slidesToScroll: 3,
	nextArrow: '.reviews__arrow-right',
  prevArrow: '.reviews__arrow-left',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
      }
    }
  ]
});
