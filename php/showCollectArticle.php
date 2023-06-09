<?php
  session_start();
  include('connectSQL.php');
  $sql = "SELECT *, a.articleID
            FROM article AS a
            JOIN articleCollect AS c ON a.articleID = c.articleID
            LEFT JOIN articleImage AS img ON a.articleID = img.articleID
            WHERE c.collectMemberID = ? order by a.articleTime desc ";

  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_SESSION["ID"]);
  // $statement->bindValue(2, $_SESSION["ID"]);
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
?>