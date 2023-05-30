$(() => {
  $("#send").click(function (e) {
    if (!$("#name").val()?.length) {
      alert("請輸入暱稱");
      return;
    }
    if (!$("#email").val()?.length) {
      alert("請輸入信箱");
      return;
    }
    if (!$("#pwd").val()?.length) {
      alert("請輸入密碼");
      return;
    }
    if (!$("#pwdConfirm").val()?.length) {
      alert("請輸入確認密碼");
      return;
    }
    if ($("#pwdConfirm").val() !== $("#pwd").val()) {
      alert("密碼與確認密碼不符");
      return;
    }
    $.ajax({
      url: "php/register.php",
      type: "POST",
      dataType: "json",
      // data: { email: $("#email").val(), password: $("#password").val() },
      data: {
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#pwd").val(),
      },
      success: function (response) {
        // 在此處處理成功的情況
        if (response === 1) {
          alert("註冊成功");
          location.href = "member_login.html";
        } else if (response === -1) {
          alert("暱稱已被使用");
        } else if (response === -2) {
          alert("email已被使用");
        }
      },
      error: function (xhr, status, error) {
        // 在此處處理錯誤情況
        console.log("Error: " + error);
      },
    });
  });
});
