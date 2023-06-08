<?php

    include('connectSQL.php');
    $sql = "SELECT a.*, m.memberName  FROM article AS a LEFT JOIN memberData AS m ON a.memberID = m.memberID where articleID like ? and a.memberID like ? and memberName like ? and email like ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, '%'.$_POST["articleID"].'%');
    $statement->bindValue(2, '%'.$_POST["memberID"].'%');
    $statement->bindValue(3, '%'.$_POST["memberName"].'%');
    $statement->bindValue(4, '%'.$_POST["email"].'%');
    $statement->execute();
    $data = $statement->fetchAll();

    echo json_encode($data);
?>