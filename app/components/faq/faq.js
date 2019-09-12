$(function () {
  $('.faq__item-toggler').click(function (evt) {
    evt.preventDefault();
    $(this)
        .toggleClass('show')
        .next('.faq__item-description')
        .slideToggle(300);
  });

  // $('.faq__button').click(function (evt) {
  //   evt.preventDefault();
  //   $('.faq-modal').fadeIn();
  // });
});