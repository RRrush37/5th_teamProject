
<?php
require("checkIfLogin.php");
session_start();
if (checkIfLogin()) {
    require("connectSQL.php");

    $sql = "select coin from memberData where memberID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_SESSION["ID"]);
    $statement->execute();
    $nowCoin = $statement->fetchAll();
    $nowCoin = $nowCoin[0][0];

    if ( $nowCoin >= $_POST["money"] ) { //餘額足夠
        $nowCoin = $nowCoin-$_POST["money"] ;

        $sql = "update memberData set coin = coin - ? where memberID = ?";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $_POST["money"]);
        $statement->bindValue(2, $_SESSION["ID"]);
        $success = $statement->execute();

        $sql = "INSERT into buyLog(memberID , itemID, itemIsCoin,buyAmount,price,totalPrice)
        values(?, MONTH(CURDATE())*100 + DAY(CURDATE()), 0, ?, 0, ?)";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $_SESSION["ID"]);
        $statement->bindValue(2,  $_POST["money"]);
        $statement->bindValue(3, $nowCoin);
        $success = $statement->execute();

        if ( $_POST["hair"] != -1 ) {
            $sql = "INSERT into package(memberID , itemID, itemNum, itemCategory)
                    values(?, ?, 1,'hair')";
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1, $_SESSION["ID"]);
            $statement->bindValue(2, $_POST["hair"]);
            $success = $statement->execute();
        }

        if ( $_POST["clothes"] != -1 ) {
            $sql = "INSERT into package(memberID , itemID, itemNum, itemCategory)
                    values(?, ?, 1,'clothes')";
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1, $_SESSION["ID"]);
            $statement->bindValue(2, $_POST["clothes"]);
            $success = $statement->execute();
        }

        if ( $_POST["bottoms"] != -1 ) {
            $sql = "INSERT into package(memberID , itemID, itemNum, itemCategory)
                    values(?, ?, 1,'bottoms')";
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1, $_SESSION["ID"]);
            $statement->bindValue(2, $_POST["bottoms"]);
            $success = $statement->execute();
        }

        if ( $_POST["accessories1"] != -1 ) {
            $sql = "INSERT into package(memberID , itemID, itemNum, itemCategory)
                    values(?, ?, 1,'accessories1')";
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1, $_SESSION["ID"]);
            $statement->bindValue(2, $_POST["accessories1"]);
            $success = $statement->execute();
        }

        if ( $_POST["accessories2"] != -1 ) {
            $sql = "INSERT into package(memberID , itemID, itemNum, itemCategory)
                    values(?, ?, 1,'accessories2')";
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1, $_SESSION["ID"]);
            $statement->bindValue(2, $_POST["accessories2"]);
            $success = $statement->execute();
        }

        if ( $_POST["accessories3"] != -1 ) {
            $sql = "INSERT into package(memberID , itemID, itemNum, itemCategory)
                    values(?, ?, 1,'accessories3')";
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1, $_SESSION["ID"]);
            $statement->bindValue(2, $_POST["accessories3"]);
            $success = $statement->execute();
        }

        if ( $_POST["eyebrow"] != -1 ) {
            $sql = "INSERT into package(memberID , itemID, itemNum, itemCategory)
                    values(?, ?, 1,'eyebrow')";
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1, $_SESSION["ID"]);
            $statement->bindValue(2, $_POST["eyebrow"]);
            $success = $statement->execute();
        }

        if ( $_POST["eye"] != -1 ) {
            $sql = "INSERT into package(memberID , itemID, itemNum, itemCategory)
                    values(?, ?, 1,'eye')";
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1, $_SESSION["ID"]);
            $statement->bindValue(2, $_POST["eye"]);
            $success = $statement->execute();
        }

        if ( $_POST["mouth"] != -1 ) {
            $sql = "INSERT into package(memberID , itemID, itemNum, itemCategory)
                    values(?, ?, 1,'mouth')";
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1, $_SESSION["ID"]);
            $statement->bindValue(2, $_POST["mouth"]);
            $success = $statement->execute();
        }

        echo json_encode("success") ;
    } else { //餘額不足
        echo "balance";
    }

    
} else
    echo -1;
