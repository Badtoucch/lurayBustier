$(function () {
  $('.help-box__title').click(function (evt){
    evt.preventDefault();
    var $this = $(this);
    var $parent = $this.parents('.help__box');

    $parent.siblings().removeClass('active');
    $parent.toggleClass('active');
    $parent.siblings().find('.help-box__text').slideUp(300);
    $this.next().slideToggle(300);
  })
});