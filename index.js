$(".navlist li").hover(
  function () {
    $(".dropdown", this).slideDown(100);
  },
  function () {
    $(".dropdown", this).slideUp(100);
  }
);
