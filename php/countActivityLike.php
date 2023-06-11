<?php
require("checkIfLogin.php");
session_start();
if (checkIfLogin()) {
  require("connectSQL.php");
  $sql = "select count(*) from activityThumbUp where activityID = ?";
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_POST["activityID"]);
  $statement->execute();
  $data = $statement->fetchAll();
  echo $data[0][0];
}
