$(function () {
  var $togglersCollection = $('.faq__item-toggler');

  $togglersCollection.click(function (evt) {
    evt.preventDefault();
    var $this = $(this);

    $togglersCollection
        .not(this)
        .removeClass('show');

    $this
        .parent('.faq__item')
        .siblings()
        .find('.faq__item-description')
        .slideUp(300);

    $this
        .toggleClass('show')
        .next('.faq__item-description')
        .slideToggle(300);
  });
});