<?php
session_start();
if (isset($_SESSION["ID"])) {
  require("connectSQL.php");
  $sql = "select * from activityParticipant ap join activity a on ap.activityID = a.activityID where participantMemberID = ?";
  $statement = $pdo->prepare($sql);
  // $statement->bindValue(1, "17");
  $statement->bindValue(1, $_SESSION["ID"]);
  $statement->execute();
  $data = $statement->fetchAll();
  foreach ($data as $key => $value) {
    echo print_r($value) . "<br>";
  }
}
