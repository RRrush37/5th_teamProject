<?php
    require("checkIfLogin.php");
    session_start();
    if (checkIfLogin()) {
        require("connectSQL.php");

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

    } else
        echo -1;

?>