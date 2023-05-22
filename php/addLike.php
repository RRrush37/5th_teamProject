<?php
session_start();
if (isset($_SESSION["ID"])) {
  require("connectSQL.php");
  $sql = "select * from articleThumbUp where articleID = ? and thumbUpMemberID = ?";
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_POST["articleID"]);
  $statement->bindValue(2, $_SESSION["ID"]);
  $statement->execute();
  $data = $statement->fetchAll();
  $isLike = count($data) > 0;
  if ($isLike) {
    $sql = "delete from articleThumbUp where articleID = ? and thumbUpMemberID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["articleID"]);
    $statement->bindValue(2, $_SESSION["ID"]);
    $statement->execute();
  } else {
    $sql = "INSERT into articleThumbUp(thumbUpMemberID, articleID)
    values(?, ?)";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_SESSION["ID"]);
    $statement->bindValue(2, $_POST["articleID"]);
    $statement->execute();
  }
  $sql = "select count(*) from articleThumbUp where articleID = ?";
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_POST["articleID"]);
  $statement->execute();
  $likeNum =  $statement->fetchAll();

  echo json_encode([$likeNum[0][0], !$isLike]);
} else {
  echo -1;
}
