<?php

    include('connectSQL.php');
    $sql = "SELECT a.*, m.memberName  FROM article AS a LEFT JOIN memberData AS m ON a.memberID = m.memberID where articleID like ? and a.articleTitle like ? and memberName like ? and articleTime > ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, '%'.$_POST["articleID"].'%');
    $statement->bindValue(2, '%'.$_POST["articleTitle"].'%');
    $statement->bindValue(3, '%'.$_POST["memberName"].'%');
    $statement->bindValue(4, $_POST["articleTime"] );
    $statement->execute();
    $data = $statement->fetchAll();

    echo json_encode($data);
?>