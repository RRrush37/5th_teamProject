<?php
    include "connectSQL.php" ;
    include "checkIfLogin.php" ;
    // // 自定義變數名稱 :account & :pwd
    // //建立SQL語法
    session_start();
    if (checkIfLogin()) {
        $sql = 'select * from roomList where roomNum = ? ';
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $_POST["roomNum"]);
        $statement->execute();
        $data = $statement->fetchAll();

        $str = "" ;
        $person = 0 ;
        foreach($data as $index => $row){
            if ( $_POST["memberID"] == $row["player2"] ) {
                $str = "player2" ;
                $person = $row["person"];
                $person--;
            } else if ( $_POST["memberID"] == $row["player3"] ){
                $str = "player3" ;
                $person = $row["person"];
                $person--;
            } else if ( $_POST["memberID"] == $row["player4"] ){
                $str = "player4" ;
                $person = $row["person"];
                $person--;
            } else if ( $_POST["memberID"] == $row["player5"] ){
                $str = "player5" ;
                $person = $row["person"];
                $person--;
            } else if ( $_POST["memberID"] == $row["player6"] ){
                $str = "player6" ;
                $person = $row["person"];
                $person--;
            } else if ( $_POST["memberID"] == $row["player7"] ){
                $str = "player7" ;
                $person = $row["person"];
                $person--;
            }
        }

        if ( isset($_POST["roomNum"])) {
            $sql = "UPDATE roomList SET person = ?, {$str} = '' WHERE roomNum = ?";
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1, $person);
            $statement->bindValue(2, $_POST["roomNum"]);
            $statement->execute();
            $data = $statement->fetchAll();
    
            if ( $data > 0 ) {
                echo 1 ;
            } else {
                echo 2 ;
            }
        } else {
            echo 2 ;
        }

        
    } else {
        echo -1 ;
    }
?>