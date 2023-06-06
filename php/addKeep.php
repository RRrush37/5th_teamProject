<?php
session_start();
if (isset($_SESSION["ID"])) {
  require("connectSQL.php");
  $sql = "select * from articleCollect where articleID = ? and collectMemberID = ?";
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_POST["articleID"]);
  $statement->bindValue(2, $_SESSION["ID"]);
  $statement->execute();
  $data = $statement->fetchAll();
  $isKeep = count($data) > 0;
  if ($isKeep) {
    $sql = "delete from articleCollect where articleID = ? and collectMemberID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["articleID"]);
    $statement->bindValue(2, $_SESSION["ID"]);
    $statement->execute();
  } else {
    $sql = "INSERT into articleCollect(collectMemberID, articleID)
    values(?, ?)";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_SESSION["ID"]);
    $statement->bindValue(2, $_POST["articleID"]);
    $statement->execute();
  }

  echo json_encode(!$isKeep);
} else {
  echo -1;
}
