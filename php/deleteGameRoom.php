<?php
    include "connectSQL.php" ;
    include "checkIfLogin.php" ;
    // // 自定義變數名稱 :account & :pwd
    // //建立SQL語法
    session_start();
    if (checkIfLogin()) {
        $sql = "delete from roomList where roomNum = ? ;";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $_POST["roomNum"]);
        $statement->execute();
        $data = $statement->fetchAll();
        if ( $data > 0 ) {
            echo 1 ;
        } else {
            echo 2 ;
        }
        
    } else {
        echo -1 ;
    }
?>