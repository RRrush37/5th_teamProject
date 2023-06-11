

let email_el = document.getElementById("email");
let password_el = document.getElementById("password");
let submit_btn = document.getElementById("submit");


submit_btn.addEventListener("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    let email_login = email_el.value;
    let password = password_el.value;

    if ( emailChecked( email_login ) && PasswordChecked( password ) ) {
        $.ajax({
            url: "php/loginAjax.php",
            type: "POST",
            dataType: "json",
            data: { email: $("#email").val(), password: $("#password").val() },
            success: function (response) {
              // 在此處處理成功的情況
              if (response === -1) {
                alert("帳號或密碼錯誤");
              } else {

                location.href = "Backstage_Home.html";
                
              }
            },
            error: function (xhr, status, error) {
              // 在此處處理錯誤情況
              console.log("Error: " + error);
            },
        });
    }

})

function emailChecked( email_login ){
    if (email_login === '') {
        alert('請輸入電子信箱');
        // email_el.focus();
        return false ;
    } else {
        let emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    
        if (email_login.search(emailRule) !== -1) {
            // 電子信箱格式正確
            return true ;
        } else {
            alert('電子信箱格式錯誤');
        }
    }
}

function PasswordChecked( password ){
    if (password === '') {
        alert('請輸入密碼');
        // passwordInput.focus();
        return false;
    }

    if (password.length < 6) {
        alert('密碼至少為6位數字');
        // passwordInput.focus();
        return false;
    }

    if (!/[a-z]/.test(password)) {
        alert('密碼必須包含至少一個小寫英文字母');
        // passwordInput.focus();
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        alert('密碼必須包含至少一個大寫英文字母');
        // passwordInput.focus();
        return false;
    } 

    return true ;
}
