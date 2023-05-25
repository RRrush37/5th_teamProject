<?php
// 在 post_success.php 中

// 將資料編碼為 JSON 並返回給前端
header('Content-Type: application/json');

//MySQL相關資訊
$db_host = "127.0.0.1";
$db_user = "root";
$db_pass = "password";
$db_select = "5th_project";

//建立資料庫連線物件
$dsn = "mysql:host=" . $db_host . ";dbname=" . $db_select . ";charset=utf8";

//建立PDO物件，並放入指定的相關資料
$pdo = new PDO($dsn, $db_user, $db_pass);
$name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : "";
$email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : "";
$password = isset($_POST['password']) ? htmlspecialchars($_POST['password']) : "";
//---------------------------------------------------

$sql = "SELECT * FROM memberData where memberName = ?";
$statement = $pdo->prepare($sql);
$statement->bindValue(1, $name);
$statement->execute();
$data = $statement->fetchAll();
if (count($data) > 0) {
  // echo json_encode([$data["0"]["memberID"]]);
  echo -1;
} else {

  $sql = "SELECT * FROM memberData where email = ?";
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $email);
  $statement->execute();
  $data = $statement->fetchAll();
  if (count($data) > 0) {
    // echo json_encode([$data["0"]["memberID"]]);
    echo -2;
  } else {
    $sql = "INSERT into memberData(memberName, email, gender,permissions,state,password,coin,punishmentCount,wolfkillWin,wolfkillLose,signinDaysInThisMonth)
       values(?, ?, 1,'normal','normal', ? ,0,0,0,0,0)";

    //    $sql = 'INSERT into memberData(memberName, email, permissions, state, `password`, coin, punishmentCount, wolfkillWin, wolfkillLose, signinDaysInThisMonth) 
    //    values (?, ?, "user", "normal", dd, 0, 0, 0, 0, 0)';
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $name);
    $statement->bindValue(2, $email);
    $statement->bindValue(3, password_hash($password, PASSWORD_DEFAULT));
    $success = $statement->execute();
    // $statement->bindValue(2 , $table); 

    if ($success) {
      $sql = "SELECT memberID FROM memberData where email = ?";
      $statement = $pdo->prepare($sql);
      $statement->bindValue(1, $email);
      $statement->execute();
      $data = $statement->fetchAll();

      $sql = "INSERT into Attributes(`memberID`, `luck`, `strength`, `intelligence`, `charm`)
                     values(?, Round(RAND() * 100, 0) , Round(RAND() * 100, 0) , Round(RAND() * 100, 0) , Round(RAND() * 100, 0) )";
      $statement = $pdo->prepare($sql);
      $statement->bindValue(1, $data[0][0]);
      $statement->execute();

      $sql = "INSERT into dollData(memberID) values(?)";
      $statement = $pdo->prepare($sql);
      $statement->bindValue(1, $data[0][0]);
      $statement->execute();

      echo 1;
    }
  }
  /*foreach($data as $index => $row){
                     echo $row["password"];   //欄位名稱
                     echo '<br>';
                     echo $row["memberID"];    //欄位名稱
                     echo '<br>';
                     echo count($data);
                     // echo $row["email"];    //欄位名稱
                     // echo '<br>';
              }*/
}
