<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
require("checkIfLogin.php");
$isLogin = checkIfLogin();

if ($isLogin) {
    // session_start();
    require("connectSQL.php");
    $sql = "select * from Attributes where memberID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_SESSION["ID"]);
    $statement->execute();

    $data = $statement->fetchAll();
    $data = $data[0];
    echo json_encode($data);
} else {
    echo -1;
}
