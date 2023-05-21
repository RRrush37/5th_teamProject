<?php
require("checkIfLogin.php");
$isLogin = checkIfLogin();

if ($isLogin) {
    // session_start();
    require("connectSQL.php");
    $sql = "select * from Attributes where memberID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_SESSION["ID"]);
    $statement->execute();

    // $data = $statement->fetchAll();
    // $data = $data[0];
    // echo json_encode($data);
    echo 1;
}
