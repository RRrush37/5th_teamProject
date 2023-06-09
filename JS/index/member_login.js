//     } else {
//     alert('電子信箱格式錯誤');
//     return false;
//     }
// }




// 密碼至少6位數跟大小寫英文字母
//     var passwordInput = document.getElementById("password");
//     var password = passwordInput.value;
    
//         if (password === '') {
//         alert('請輸入密碼');
//         passwordInput.focus();
//         return false;
//         }
    
//         if (password.length !== 6) {
//         alert('密碼必須為6位數字');
//         passwordInput.focus();
//         return false;
//         }

//         if (!/[a-z]/.test(password)) {
//         alert('密碼必須包含至少一個小寫英文字母');
//         passwordInput.focus();
//         return false;
//         }
    
//         if (!/[A-Z]/.test(password)) {
//         alert('密碼必須包含至少一個大寫英文字母');
//         passwordInput.focus();
//         return false;
//     } 
// })

// var sendbtn = document.getElementById("send");
// var email_member_login = email.value;


















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




// //選取信箱元素，可以進行修改ok
// var email = document.getElementById("email");
// let email_login = email.value;

// email.addEventListener("blur",function(){
//   if(email_login ==''){
//           alert('請輸入電子信箱');
//           document.getElementById('email').focus();
//           return false;
// }else{
//   var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
//   var email_login = email.value ;

//   if (email_login.search(emailRule)!= -1){
//         // document.getElementById('email').focus();
//           // document.getElementById('email').select();
//           // return false;
      
// } else {
//           alert('電子信箱格式錯誤');
// }
//   }
// });


// // //信箱格式限制
// var email = document.getElementById("email");
// email.addEventListener("blur", function() {
//   var email_login = email.value;
  
//   if (email_login === '') {
//     alert('請輸入電子信箱');
//     email.focus();
//     return false;
//   } else {
//     var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

//     if (email_login.search(emailRule) !== -1) {
//       // 電子信箱格式正確
//     } else {
//       alert('電子信箱格式錯誤');
//     }
//   }
// });








// //密碼限制(6位數大小寫)
// //密碼必須為6位數字。
// //密碼必須包含至少一個小寫英文字母。
// //密碼必須包含至少一個大寫英文字母。

// var passwordInput = document.getElementById("password");
// var password = passwordInput.value;


// passwordInput.addEventListener("blur", function() {
  
  
//   if (password === '') {
//     alert('請輸入密碼');
//     passwordInput.focus();
//     return false;
//   }
  
//   if (password.length !== 6) {
//     alert('密碼必須為6位數字');
//     passwordInput.focus();
//     return false;
//   }
  
//   if (!/[a-z]/.test(password)) {
//     alert('密碼必須包含至少一個小寫英文字母');
//     passwordInput.focus();
//     return false;
//   }
  
//   if (!/[A-Z]/.test(password)) {
//     alert('密碼必須包含至少一個大寫英文字母');
//     passwordInput.focus();
//     return false;
//   }
  

  
// });


// //取得送出按鈕的元素，並且放到"送出"事件
//   var submitBtn = document.getElementById("send");
//   var email_login = email.value;


//   submitBtn.addEventListener("click",function(){

//     if (email_login === '') {
//       alert('請輸入電子信箱');
//       email.focus();
//       return false;
//     } else {
//       var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  
//       if (email_login.search(emailRule) !== -1) {
//         // 電子信箱格式正確
//       } else {
//         alert('電子信箱格式錯誤');
//         return false;
        
//       }
//     }



//     var passwordInput = document.getElementById("password");
//     var password = passwordInput.value;
  
//     if (password === '') {
//       alert('請輸入密碼');
//       passwordInput.focus();
//       return false;
//     }
  
//     if (password.length !== 6) {
//       alert('密碼必須為6位數字');
//       passwordInput.focus();
//       return false;
//     }
  
//     if (!/[a-z]/.test(password)) {
//       alert('密碼必須包含至少一個小寫英文字母');
//       passwordInput.focus();
//       return false;
//     }
  
//     if (!/[A-Z]/.test(password)) {
//       alert('密碼必須包含至少一個大寫英文字母');
//       passwordInput.focus();
//       return false;
//     }
  
//   // 如果通過驗證，可以執行其他操作或提交表單等


//   });


