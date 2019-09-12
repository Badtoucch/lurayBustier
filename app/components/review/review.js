$(function () {
  $('.review-button').click(function () {
    var $this = $(this);
    var $counter = $this.parents('.review').find('.like-counter');

    var isLike = $this.hasClass('review-button--like');
    var isUnlike = $this.hasClass('review-button--unlike');
    var isPrevLikeActive = isUnlike && $this.prev().hasClass('active');
    var isActive = $this.hasClass('active');

    var getValue = function () {
      return parseInt($counter.text(), 10);
    };

    var upValue = function () {
      $counter.text(getValue() + 1);
    };

    var downValue = function () {
      $counter.text(getValue() - 1);
    };

    if (isLike) {
      $this.next().removeClass('active');
    }

    if (isLike && !isActive) {
      upValue();
    }
    
    if (isLike && isActive) {
      downValue();
    }

    if (isUnlike) {
      $this.prev().removeClass('active');
    }

    if (isUnlike && isPrevLikeActive) {
      downValue();
    }

    $this.toggleClass('active');
  });
});