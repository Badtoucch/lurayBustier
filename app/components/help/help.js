$(function () {
  $(document).on("click", ".help-box__title", function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this)
      .parent()
      .find(".help-box__text")
      .first()
      .slideToggle(300);
  });
});