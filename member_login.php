<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./css/index/member_login.css" />
  <link rel="stylesheet" href="./css/global.css" />
  <title>會員登入</title>
</head>

<body>

  <div class="return">
    <img src="./img/index/return.png" alt="" height="60" />
  </div>

  <!-- 上面是返回 -->

  <div class="box">
    <h2>會員登入</h2>
    <span>信箱:</span>
    <input type="text" id="email" />
    <span>密碼:</span>
    <input type="password" id="password" />
    <div class="push" id="send">送出</div>

    <div class="gf">
      <div class="google">
        <img src="./img/index/google.svg" alt="" width="20" />
        <p>登入</p>
      </div>
      <div class="facebook">
        <img src="./img/index/favebook.svg" alt="" width="20" />
        <p>登入</p>
      </div>
    </div>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="js/index/member_login.js"></script>
  <script src="https://kit.fontawesome.com/75e9abcec6.js" crossorigin="anonymous"></script>
</body>

</html>