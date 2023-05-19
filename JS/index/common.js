$(() => {
  let app = "40%";
  $(".fillBGC").each(function () {
    var width = $(this).siblings("div").text();
    width = isNaN(width) ? "0" : width;
    $(this).css({
      width: width + "%",
      backgroundColor: $(".abilityVal").eq(0).css("background-color"),
    });
  });
});
