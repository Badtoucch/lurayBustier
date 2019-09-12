$(function () {
  $('.review-button').click(function () {
    var $this = $(this);
    var $counter = $this.parents('.review').find('.like-counter');
    var counterValue = parseInt($counter.text(), 10);

    var upCounterValue = function () {
      return ++counterValue;
    };

    var downCounterValue = function () {
      return --counterValue;
    };

    if ($this.hasClass('review-button--like')) {
      $this.next().removeClass('active');
    }

    if ($this.hasClass('review-button--like') && $this.hasClass('active')) {
      $counter.text(downCounterValue());
    }

    if ($this.hasClass('review-button--like') && !$this.hasClass('active')) {
      $counter.text(upCounterValue());
    }

    if ($this.hasClass('review-button--unlike')) {
      $this.prev().removeClass('active');
    }

    $this.toggleClass('active');
  });
});