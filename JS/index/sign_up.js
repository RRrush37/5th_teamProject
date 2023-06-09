
// / console.log("aaa");
//要把ajax 跟js何在一起



// // 選取註冊按鈕
// var sendbtn = document.getElementById("send");
// var email_login = email.value;



// sendbtn.addEventListener("click",function(){

//     console.log("aaa");

    // if (email_sign_up === '') {
    //     alert('請輸入正確的電子信箱格式');
    //     email.focus();
    //     return false;
    // } else {
    //     var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

    //     if (email_login.search(emailRule) !== -1) {
    //         // 電子信箱格式正確
    //     } else {
    //         alert('電子信箱格式錯誤');
    //         return false;
    //     }
    // }

// 密碼至少要有大小寫英文字母
    // var passwordInput = document.getElementById("password");
    // var password = passwordInput.value;
    
    //     if (password === '') {
    //     alert('請輸入密碼');
    //     passwordInput.focus();
    //     return false;
    //     }
    
    //     if (password.length !== 6) {
    //     alert('密碼必須為6位數字');
    //     passwordInput.focus();
    //     return false;
    //     }

    //     if (!/[a-z]/.test(password)) {
    //     alert('密碼必須包含至少一個小寫英文字母');
    //     passwordInput.focus();
    //     return false;
    //     }
    
    //     if (!/[A-Z]/.test(password)) {
    //     alert('密碼必須包含至少一個大寫英文字母');
    //     passwordInput.focus();
    //     return false;
    // }


// })








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



// //信箱符合格式//按下去的時候是否可以那個
// var email = document.getElementById('email');
// let email_sign_up= email.value;

// email.addEventListener("blur",function(){
//   if(email_sign_up ==''){
//           alert('請輸入電子信箱');
//           document.getElementById('email').focus();
//           return false;
//   }else{
//       var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
//       var email_sign_up = email.value ;
//       if (email_sign_up.search(emailRule)!= -1){
//           // document.getElementById('email').focus();
//           // document.getElementById('email').select();
//           // return false;

//       } else {
//           alert('電子信箱格式錯誤');
//       }
//   }
// });
