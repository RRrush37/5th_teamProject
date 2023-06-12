<?php
require("checkIfLogin.php");
session_start();
if (checkIfLogin()) {
    require("connectSQL.php");

    $sql = "select * from memberData where memberID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_SESSION["ID"]);
    $statement->execute();

    $data = $statement->fetchAll();
    echo json_encode($data);
} else {
    echo -1;
}
