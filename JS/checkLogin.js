if ( !window.location.pathname.includes("index2.html") && !window.location.pathname.includes("sign_up.html") && !window.location.pathname.includes("member_login.html")) {
    $.ajax({
        url: "php/back_checkLogin.php",
        type: "POST",
        dataType: "text",
        data: {},
        success: function (response) {

          if (response == true ) {
            // let member_logout = document.getElementsByClassName("member_logout")[0] ;
            // member_logout.querySelector("a").innerHTML = "登出" ;
          } else {
            alert("請先登入");
            location.href = "index2.html";
          }

        //   後台登出
        //   member_logout.querySelector("a").addEventListener("click", function(e){
        //     e.preventDefault();
        //     e.stopPropagation();
        //     $.ajax({
        //       url: "php/back_logout.php",
        //       type: "POST",
        //       dataType: "text",
        //       data: {},
        //       success: function (response) {
        //         location.href = "backstage_login.html";
        //       },
        //       error: function (xhr, status, error) {
        //         console.log("Error: " + error);
        //       },
        //     });
        //   });

        },
        error: function (xhr, status, error) {
          console.log("Error: " + error);
        },
    });
}