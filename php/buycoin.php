<?php
    require("checkIfLogin.php");
    session_start();
    if(checkIfLogin()){
        require("connectSQL.php");
        $_POST["buyCash"] = isset($_POST["buyCash"]) ? (int)$_POST["buyCash"] : 0;
        $_POST["buyCoin"] = isset($_POST["buyCoin"]) ? (int)$_POST["buyCoin"] : 0;
        
        $sql = "INSERT into buyLog(memberID , itemID,itemIsCoin,buyAmount,price,totalPrice)
        values(?, 0,1,?,?,?)";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $_SESSION["ID"]);
        $statement->bindValue(2, $_POST["buyCoin"]);
        $statement->bindValue(3, $_POST["buyCash"]);
        $statement->bindValue(4, $_POST["buyCash"]);
        $success = $statement->execute();
        echo $success;

        $sql = "update memberData set coin = coin + ? where memberID = ?";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $_POST["buyCoin"]);
        $statement->bindValue(2, $_SESSION["ID"]);
        $success = $statement->execute();
    }
    else
        echo -1;
