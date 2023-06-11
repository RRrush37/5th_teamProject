<?php
require("checkIfLogin.php");
session_start();
if (checkIfLogin()) {
  require("connectSQL.php");
  $sql = "SELECT count(*) FROM memberData WHERE memberID = ? AND memberPicture IS NOT NULL";
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_SESSION["ID"]);
  $statement->execute();
  $data = $statement->fetchAll();
  echo $data[0]["count(*)"] ;
  // if (count($data)) {
  //   echo true;
  // } else {
  //   echo false;
  // }
} else {
  echo -1;
}
?>