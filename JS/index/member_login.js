
$(() => {
  $("#send").click(function (e) {
    if (!$("#email").val()?.length) {
      alert("請輸入信箱");
      return;
    }
    if (!$("#password").val()?.length) {
      alert("請輸入密碼");
    }
    $.ajax({
      url: "php/loginAjax.php",
      type: "POST",
      dataType: "json",
      // data: { email: $("#email").val(), password: $("#password").val() },
      data: { email: $("#email").val(), password: $("#password").val() },
      success: function (response) {
        // 在此處處理成功的情況
        if (response === -1) {
          alert("帳號或密碼錯誤");
        } else {
          location.href = "index_map.html";
        }
      },
      error: function (xhr, status, error) {
        // 在此處處理錯誤情況
        console.log("Error: " + error);
      },
    });
  });
});

