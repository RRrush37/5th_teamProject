<?php
session_start();
include('connectSQL.php');
$sql = "SELECT * FROM article where memberID = ? order by articleTime desc";

$statement = $pdo->prepare($sql);
$statement->bindValue(1, $_POST['memberID']);
$statement->execute();
$data = $statement->fetchAll();
foreach ($data as $key => $value) {
  $sql = "SELECT count(*) FROM articleThumbUp where articleID = ?";
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $value['articleID']);
  $statement->execute();
  $likeNum = $statement->fetchAll();
  $data[$key]["likeNum"] = $likeNum[0][0];

  $sql = "SELECT count(*) FROM articleComment where articleID = ?";
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $value['articleID']);
  $statement->execute();
  $commentNum = $statement->fetchAll();
  $data[$key]["commentNum"] = $commentNum[0][0];
}
echo json_encode($data);
