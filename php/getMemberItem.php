<?php
    require("checkIfLogin.php");
    session_start();
    if (checkIfLogin()) {
        require("connectSQL.php");

        $sql = "SELECT * FROM package AS p JOIN store AS s ON p.itemID = s.storeID WHERE memberID = ? ;";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $_SESSION["ID"]);
        $statement->execute();
        $data = $statement->fetchAll();
        echo json_encode($data);

    } else {
        echo -1;
    }
?>