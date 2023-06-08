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
          //index_build_roles.html
          $.ajax({
            url: "php/checkCreateDoll.php",
            type: "POST",
            dataType: "json",
            data: {},
            success: (response) => {
              if (response == -1) {
                alert("請先登入");
              } else if (response) {
                location.href = "index_build_roles.html";
              } else {
                location.href = "member_login.html";
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






//選取信箱元素，可以進行修改ok
// var email = document.getElementById("email");
// let email_login = email.value;

// email.addEventListener("blur",function(){
//   if(email_login ==''){
//           alert('請輸入電子信箱');
//           document.getElementById('email').focus();
//           return false;
//   }else{
//       var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
//       var email_login = email.value ;
//       if (email_login.search(emailRule)!= -1){
//           // document.getElementById('email').focus();
//           // document.getElementById('email').select();
//           // return false;
      
//       } else {
//           alert('電子信箱格式錯誤');
//       }
//   }
// });


var email = document.getElementById("email");
email.addEventListener("blur", function() {
  var email_login = email.value;
  
  if (email_login === '') {
    alert('請輸入電子信箱');
    email.focus();
    return false;
  } else {
    var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

    if (email_login.search(emailRule) !== -1) {
      // 電子信箱格式正確
    } else {
      alert('電子信箱格式錯誤');
    }
  }
});





