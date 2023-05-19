<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php 
  
    
    require("../checkIfLogin.php");
    if(!checkIfLogin()){
      echo "您無權訪問此頁面";
    }
    else{
      echo "歡迎回來，".$_COOKIE['ID']."號";
    }
  ?>
</body>
</html>


