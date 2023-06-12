<?php
session_start();
if (isset($_SESSION["ID"])) {
  require("connectSQL.php");
  $sql = "select * from activityThumbUp at join activity a on at.activityID = a.activityID where thumbUpMemberID = ?";
  $statement = $pdo->prepare($sql);
  // $statement->bindValue(1, "17");
  $statement->bindValue(1, $_SESSION["ID"]);
  $statement->execute();
  $data = $statement->fetchAll();
  for ($i = 0; $i < count($data); $i++) {
    $sql = 'SELECT count(*) FROM activityComment where activityID = ?';
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $data[$i]["activityID"]);
    $statement->execute();
    $count = $statement->fetchAll();
    $data[$i]["commentNum"] = $count[0][0];

    $sql = 'SELECT count(*) FROM activityThumbUp where activityID = ?';
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $data[$i]["activityID"]);
    $statement->execute();
    $count = $statement->fetchAll();
    $data[$i]["thumbUpNum"] = $count[0][0];

    $sql = 'SELECT count(*) FROM activityThumbUp where activityID = ? and thumbUpMemberID = ?';
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $data[$i]["activityID"]);
    $statement->bindValue(2, $_SESSION["ID"]);
    $statement->execute();
    $count = $statement->fetchAll();
    $data[$i]["isThumbUp"] = $count[0][0] > 0;

    $sql = 'SELECT memberName FROM memberData where memberID = ?';
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $data[$i]["activityOrganiserID"]);
    $statement->execute();
    $name = $statement->fetchAll();
    $data[$i]["organiserName"] = $name[0][0];

    $sql = 'SELECT count(*) FROM activityParticipant where activityID = ?';
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $data[$i]["activityID"]);
    $statement->execute();
    $name = $statement->fetchAll();
    $data[$i]["joinNum"] = $name[0][0];

    $sql = 'SELECT count(*) FROM activityParticipant where activityID = ? and participantMemberID = ?';
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $data[$i]["activityID"]);
    $statement->bindValue(2, $_SESSION["ID"]);
    $statement->execute();
    $name = $statement->fetchAll();
    $data[$i]["hasJoined"] = $name[0][0] > 0;
  }


  if ($data) {
    echo json_encode($data);
  } else
    echo json_encode(2);
} else {
  echo -1;
}
