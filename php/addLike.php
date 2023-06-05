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
  $isLike = count($data) > 0; //有沒有對它按讚過，有讚有值，無讚無值
  if ($isLike) { //有按過，要移除
    $sql = "delete from articleThumbUp where articleID = ? and thumbUpMemberID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["articleID"]);
    $statement->bindValue(2, $_SESSION["ID"]);
    $statement->execute();
  } else { //沒按過，要加入
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

  echo json_encode([$likeNum[0][0], !$isLike]); // 返回總讚數，true/false
} else {
  echo -1;
}
