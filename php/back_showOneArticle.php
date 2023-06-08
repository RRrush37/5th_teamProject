<?php

  include('connectSQL.php');
  $sql = "SELECT a.*, m.memberName, img.imageURL
            FROM article AS a
            LEFT JOIN memberData AS m ON a.memberID = m.memberID
            LEFT JOIN articleImage AS img ON a.articleID = img.articleID
            WHERE a.articleID = ?";

  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_POST["articleID"]);
  $statement->execute();
  $data = $statement->fetchAll();

  echo json_encode($data);
?>