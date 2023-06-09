<?php

require("checkIfLogin.php");
session_start();
if (checkIfLogin()) {
  require("connectSQL.php");
  $sql = 'SELECT * FROM activity where activityOrganiserID= ?';

  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, 2);

  $statement->execute();

  $data = $statement->fetchAll();

  if ($data) {
    echo json_encode($data);
  } else
    echo 2;
} else {
  echo -1;
}
