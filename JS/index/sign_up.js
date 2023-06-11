


var sendbtn = document.getElementById("send");
var email_login = email.value;



    $(() => {
    $("#send").click(function (e) {
        if (!$("#name").val()?.length) {
        alert("請輸入暱稱");
        return;
        }


        
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



        if (!$("#pwd").val()?.length) {
        alert("請輸入密碼");
        return;
        }

        if (!/[a-z]/.test($("#pwd").val())) {
            alert('密碼必須包含至少一個小寫英文字母');
            return false;
        }

        
        if (!/[A-Z]/.test($("#pwd").val())) {
            alert('密碼必須包含至少一個大寫英文字母');
            return false;
        }
        
        if (!$("#pwd").val()?.length < 6) {
        alert('密碼至少為6位數字');
        passwordInput.focus();
            return false;
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



