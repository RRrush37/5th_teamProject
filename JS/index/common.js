$(() => {
  $.ajax({
    url: "php/getAttribute.php",
    type: "POST",
    dataType: "json",
    // data: { email: $("#email").val(), password: $("#password").val() },
    success: function (response) {
      // 在此處處理成功的情況
      if (response === -1) {
        alert("帳號或密碼錯誤");
        $(".abilityVal").html("-");
      } else {
        // location.href = "index_map.html";
        $("#vitVal").html(response["strength"]);
        $("#chrVal").html(response["charm"]);
        $("#intVal").html(response["intelligence"]);
        $("#lukVal").html(response["luck"]);
      }
      $(".fillBGC").each(function () {
        var width = $(this).siblings("div").text();
        width = isNaN(width) ? "0" : width;
        $(this).css({
          width: width + "%",
          backgroundColor: $(".abilityVal").eq(0).css("background-color"),
        });
      });
    },
    error: function (xhr, status, error) {
      // 在此處處理錯誤情況
      alert(error);
      console.log("Error: " + error);
    },
  });
});
