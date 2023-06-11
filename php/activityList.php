<?php

require("checkIfLogin.php");
session_start();
if (checkIfLogin()) {
  require("connectSQL.php");

  $sql = 'SELECT * FROM activity WHERE activityStartDate > CURRENT_DATE()';
  $statement = $pdo->prepare($sql);
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

    $sql = 'SELECT memberName FROM memberData where memberID = ?';
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $data[$i]["activityOrganiserID"]);
    $statement->execute();
    $name = $statement->fetchAll();
    $data[$i]["organiserName"] = $name[0][0];
  }


  if ($data) {
    echo json_encode($data);
  } else
    echo json_encode(2);
} else {
  echo -1;
}
