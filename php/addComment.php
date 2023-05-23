<?php
session_start();
if (isset($_POST["articleID"]) && isset($_SESSION["ID"])) {
  require('connectSQL.php');
  $sql = 'INSERT into articleComment(commentMemberID,articleID,content,time)
  values(?,?,?,now())';
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_SESSION["ID"]);
  $statement->bindValue(2, htmlspecialchars($_POST["articleID"]));
  if (!isset($_POST["commentText"])) {
    $_POST["commentText"]  = "";
  }
  $statement->bindValue(3, htmlspecialchars($_POST["commentText"]));
  $result = $statement->execute();

  $sql = 'select count(*) from articleComment where articleID = ?';
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, htmlspecialchars($_POST["articleID"]));
  $statement->execute();
  $commentNum = $statement->fetchAll();

  echo $commentNum[0][0];
} else {
  echo -1;
}
