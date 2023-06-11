<?php
require("checkIfLogin.php");
session_start();
if (checkIfLogin()) {
  require("connectSQL.php");
  $sql = "select count(*) from activityThumbUp where activityID = ? and thumbUpMemberID = ?";
  $statement = $pdo->prepare($sql);
  // $statement->bindValue(1, "1");
  $statement->bindValue(1, $_POST["activityID"]);
  $statement->bindValue(2, $_SESSION["ID"]);
  $statement->execute();
  $data = $statement->fetchAll();
  if ($data[0][0]) {
    $sql = "delete from activityThumbUp where activityID = ? and thumbUpMemberID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["activityID"]);
    // $statement->bindValue(1, "1");
    $statement->bindValue(2, $_SESSION["ID"]);
    $success = $statement->execute();
    echo $success ? 0 : 1;
  } else {
    $sql = "INSERT into activityThumbUp(activityID, thumbUpMemberID)
      values(?,?);";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["activityID"]);
    // $statement->bindValue(1, "1");
    $statement->bindValue(2, $_SESSION["ID"]);
    $success  = $statement->execute();
    echo $success ? 1 : 0;
  }
} else {
  echo -1;
}
