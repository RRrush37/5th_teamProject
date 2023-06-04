<?php

    include "connectSQL.php" ;
    include "checkIfLogin.php" ;
    session_start();
    if (checkIfLogin()) {
        $sql = 'SELECT memberName from memberData WHERE memberID = ? ';
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $_SESSION["ID"]);
        $statement->execute();
        $data = $statement->fetchAll();

        if ( $data > 0 ) { // 找到該使用者
            //將二維陣列取出顯示其值
            foreach($data as $index => $row){
                $roomName = $row["memberName"];   //欄位名稱 // 取出玩家名稱用於遊戲房間名稱
            }

                $sql = 'INSERT into roomList( roomNum, roomPassword, `lock`, person, player1, roomName)
                        values(?, ?, ?, ?, ?, ?)';
                $statement = $pdo->prepare($sql);
                $statement->bindValue(1, $_POST["roomNum"]);
                $statement->bindValue(2, $_POST["roomPassword"]);
                $statement->bindValue(3, $_POST["lock"]);
                $statement->bindValue(4, 1);
                $statement->bindValue(5, $_POST["id"]);
                $statement->bindValue(6, $roomName);
                $statement->execute();
                $data = $statement->fetchAll();

                if ( $data > 0 ) {
                    echo 1;
                } else { //存入遊戲失敗再試一次
                    echo -1 ;
                }
                
        } else {  // 找不到該使用者
            echo -2 ;
        }

    } else {
        echo -3;
    }

?>