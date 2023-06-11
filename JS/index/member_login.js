
$(() => {
  $("#send").click(function (e) {

    if (!$("#email").val()?.length) {
      alert("請輸入信箱");
      email.focus();
      return false;
    }else{
      var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      if ($("#email").val().search(emailRule) !== -1) {
              // 電子信箱格式正確
      } else {
              alert('電子信箱格式錯誤');
              return false;
      }
    }


    if (!$("#password").val()?.length) {
      alert("請輸入密碼");
    }

    
    if (!/[a-z]/.test($("#password").val())) {
      alert('密碼必須包含至少一個小寫英文字母');
      return false;
  }

  
  if (!/[A-Z]/.test($("#password").val())) {
      alert('密碼必須包含至少一個大寫英文字母');
      return false;
  }
  
  if (!$("#password").val()?.length < 6) {
  alert('密碼至少為6位數字');
  passwordInput.focus();
      return false;
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
          //index_build_roles.html
          $.ajax({
            url: "php/checkCreateDoll.php",
            type: "POST",
            dataType: "json",
            data: {},
            success: (response) => {
              response = JSON.parse(response);
              if (response == -1) {
                alert("請先登入");
              } else if (!response) {
                location.href = "index_build_roles.html";
              } else {
                location.href = "index_map.html";
              }
            },
            error: (xhr, status, error) => {
              alert("error: " + error);
            },
          });
        }
      },
      error: function (xhr, status, error) {
        // 在此處處理錯誤情況
        console.log("Error: " + error);
      },
    });
  });
});

