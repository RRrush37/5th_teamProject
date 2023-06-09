<?php

    include('connectSQL.php');
    if ($_POST["itemType"] == "coin") {
        $sql = "SELECT * FROM store where storeID like ? and itemName like ? and startDate > ? and itemType = ? and itemDetail = ? ";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, '%'.$_POST["storeID"].'%');
        $statement->bindValue(2, '%'.$_POST["itemName"].'%');
        $statement->bindValue(3, $_POST["startDate"]);
        $statement->bindValue(4, $_POST["itemType"]);
        $statement->bindValue(5, $_POST["itemDetail"]);
        $statement->execute();
        $data = $statement->fetchAll();

    } else {
        $sql = "SELECT * FROM store where storeID like ? and itemName like ? and startDate > ? and itemType != ? and itemDetail = ? ";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, '%'.$_POST["storeID"].'%');
        $statement->bindValue(2, '%'.$_POST["itemName"].'%');
        $statement->bindValue(3, $_POST["startDate"]);
        $statement->bindValue(4, "coin");
        $statement->bindValue(5, $_POST["itemDetail"]);
        $statement->execute();
        $data = $statement->fetchAll();

    }

    echo json_encode($data);
?>