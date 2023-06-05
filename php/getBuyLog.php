<?php
require("checkIfLogin.php");
session_start();
if (checkIfLogin()) {
  require("connectSQL.php");
  if ($_POST["type"] == 1) {
    $sql = "select itemID as date, buyAmount as coinChange, totalPrice as totalCoin from buyLog where 1 and itemIsCoin = 1";
    // $sql = "select itemID as date, buyAmount as coinChange, totalPrice as totalCoin from buyLog where memberID = ? and itemIsCoin = 1";
    $statement = $pdo->prepare($sql);
    // $statement->bindValue(1, $_SESSION("ID"));
    $statement->execute();
    $data = $statement->fetchAll();
    echo json_encode($data);
  } else if ($_POST["type"] == 2) {
    $sql = "select itemID as date, buyAmount as coinChange, totalPrice as totalCoin from buyLog where memberID = ? and itemIsCoin = 0";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_SESSION("ID"));
    $statement->execute();
    $data = $statement->fetchAll();
    echo json_encode($data);
  } else
    echo -2;
} else {
  echo -1;
}
