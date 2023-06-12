<?php
require("checkIfLogin.php");
session_start();
if (checkIfLogin()) {
  require("connectSQL.php");
  $sql = "select count(*) from activityParticipant where activityID = ? and participantMemberID = ?";
  $statement = $pdo->prepare($sql);
  // $statement->bindValue(1, "1");
  $statement->bindValue(1, $_POST["activityID"]);
  $statement->bindValue(2, $_SESSION["ID"]);
  $statement->execute();
  $data = $statement->fetchAll();
  if ($data[0][0]) {
    $sql = "delete from activityParticipant where activityID = ? and participantMemberID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["activityID"]);
    // $statement->bindValue(1, "1");
    $statement->bindValue(2, $_SESSION["ID"]);
    $success = $statement->execute();
    echo $success ? 0 : 1;
  } else {
    $sql = "select activityLimit from activity where activityID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["activityID"]);
    // $statement->bindValue(1, "1");
    $statement->execute();
    $limit = $statement->fetchAll();
    $sql = "select count(*) from activityParticipant where activityID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["activityID"]);
    // $statement->bindValue(1, "1");
    $statement->execute();
    $count = $statement->fetchAll();
    if ($count[0][0] < $limit[0][0]) {
      $sql = "insert into  activityParticipant(activityID,participantMemberID)
      values(?,?)";
      $statement = $pdo->prepare($sql);
      $statement->bindValue(1, $_POST["activityID"]);
      // $statement->bindValue(1, "1");
      $statement->bindValue(2, $_SESSION["ID"]);
      $success  = $statement->execute();
      echo $success ? 1 : 0;
    } else {
      echo -2;
    }
  }
} else {
  echo -1;
}
