<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>

<body>
  <div>
    <!-- <form method="post" action="login.php"> -->
    email：<input id="email" type="text" name="account" /><br />密碼：<input id="password" type="password" name="password" /><br />
  </div>
  <!-- <input type="submit" value="送出" /> -->
  <div id="submit">送出</div>
  <div id="output"></div>
  <!-- </form> -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    $(function() {
      $("#submit").click(function(e) {
        $.ajax({
          url: "loginAjax.php",
          type: "POST",
          dataType: "json",
          // data: { email: $("#email").val(), password: $("#password").val() },
          data: {
            email: $("#email").val(),
            password: $("#password").val()
          },
          success: function(response) {
            // 在此處處理成功的情況
            if (response === -1) {
              $("#output").html(
                `帳號密碼錯誤`
              );
            } else {
              $("#output").html(
                `<h3>價格:${response}</h3><h3>庫存量:${response}</h3>`
              );

            }
          },
          error: function(xhr, status, error) {
            // 在此處處理錯誤情況
            console.log("Error: " + error);
          },
        });
      });
    });
  </script>
</body>

</html>