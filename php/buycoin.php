<?php
require("checkIfLogin.php");
session_start();
if (checkIfLogin()) {
    require("connectSQL.php");
    $_POST["buyCash"] = isset($_POST["buyCash"]) ? (int)substr($_POST["buyCash"], 1) : 0;
    $_POST["buyCoin"] = isset($_POST["buyCoin"]) ? (int)$_POST["buyCoin"] : 0;

    $sql = "update memberData set coin = coin + ? where memberID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["buyCoin"]);
    $statement->bindValue(2, $_SESSION["ID"]);
    $success = $statement->execute();

    $sql = "select coin from memberData where memberID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_SESSION["ID"]);
    $statement->execute();
    $nowCoin = $statement->fetchAll();
    $nowCoin = $nowCoin[0][0];


    $sql = "INSERT into buyLog(memberID , itemID,itemIsCoin,buyAmount,price,totalPrice)
        values(?, MONTH(CURDATE())*100 + DAY(CURDATE()),1,?,?,?)";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_SESSION["ID"]);
    $statement->bindValue(2, $_POST["buyCoin"]);
    $statement->bindValue(3, $_POST["buyCash"]);
    $statement->bindValue(4, $nowCoin);
    $success = $statement->execute();
    echo $success;
} else
    echo -1;
