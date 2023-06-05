<?php
require("checkIfLogin.php");
session_start();
if (checkIfLogin()) {
  require("connectSQL.php");
  $sql = "select count(*) from memberData where memberID = ? and memberPicture is not null";
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_SESSION["ID"]);
  $statement->execute();
  $data = $statement->fetchAll();
  if (count($data)) {
    echo true;
  } else {
    echo false;
  }
} else {
  echo -1;
}
