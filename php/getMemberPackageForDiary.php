<?php
require("checkIfLogin.php");
session_start();
if (checkIfLogin()) {
    require("connectSQL.php");

    $sql = "SELECT * FROM package as p join store as s on p.itemID = s.storeID where memberID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_SESSION["ID"]);
    $statement->execute();
    $data = $statement->fetchAll();

    echo json_encode($data);

    // echo $success;
} else{
    echo -1;
}
    
