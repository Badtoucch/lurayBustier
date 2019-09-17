$(function() {
  // var setBodyPadding = function() {
  //   if ($(".header").is(":visible") && $(window).outerWidth() > 479) {
  //     $(document.body).css("padding-top", $(".header").outerHeight() + "px");
  //   } else {
  //     $(document.body).css("padding-top", 0);
  //   }
  // };

  // setBodyPadding();

  // $(window).resize(function() {
  //   setBodyPadding();
  // });

  function addMargin() {
    let header = document.querySelector(".header");
    let height = header.offsetHeight;
    let nav = document.querySelector("body");
    nav.style.marginTop = `${height}px`;
  }
  addMargin();
  window.addEventListener("resize", addMargin);

  $(document).on("click", '.nav__link[href^="#"]', function(evt) {
    evt.preventDefault();
    $("html, body").animate(
      {
        scrollTop:
          $($.attr(this, "href")).offset().top - $(".header").outerHeight() - 50
      },
      500
    );
  });
});
