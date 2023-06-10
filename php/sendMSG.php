<?php
require("checkIfLogin.php");
session_start();
if (checkIfLogin()) {
  require("connectSQL.php");
  $sql = 'INSERT into chattingRoomLog(chattingRoomID,sendMemberID,content,sendTime)
    values(1,?,?,now())';
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_SESSION["ID"]);
  $statement->bindValue(2, htmlspecialchars($_POST["chatroom_msg"]));
  $success = $statement->execute();
  echo $success;
} else {
  echo -1;
}
