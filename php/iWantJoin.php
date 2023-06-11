<?php
session_start();
if (isset($_SESSION["ID"])) {
  require("connectSQL.php");

  $sql = "select count(*) from articleThumbUp where activityID = ? and participantMemberID = ?";
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_POST["activityID"]);
  $statement->bindValue(2, $_SESSION["ID"]);
  $statement->execute();
  $data = $statement->fetchAll();
  if (count($data)) {
    $sql = "delete from articleThumbUp where activityID = ? and participantMemberID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["activityID"]);
    $statement->bindValue(2, $_SESSION["ID"]);
    $success = $statement->execute();
    echo $success ? 0 : 1;
  } else {
    $sql = "select activityLimit from activity where activityID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["activityID"]);
    $statement->execute();
    $limit = count($statement->fetchAll());
    $sql = "select count(*) from activityParticipant where activityID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["activityID"]);
    $statement->execute();
    $count = count($statement->fetchAll());
    if ($count < $limit) {
      $sql = "insert into  activityParticipant(activityID,participantMemberID)
      values(?,?)";
      $statement = $pdo->prepare($sql);
      $statement->bindValue(1, $_POST["activityID"]);
      $statement->bindValue(2, $_SESSION["ID"]);
      $success  = $statement->execute();
      echo $success ? 1 : 0;
    } else {
      echo 0;
    }
  }
} else {
  echo -1;
}
