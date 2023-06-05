<?php

    include "connectSQL.php" ;
    include "checkIfLogin.php" ;
    session_start();
    if (checkIfLogin()) {
        //透過roomNum確認玩家進入的是哪一個房間
        $sql = 'select * from roomList where roomNum = ? ';
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $_POST["roomNum"]);
        $statement->execute();
        $data = $statement->fetchAll();

        if ( $data ) { // 找到該房間
            $isRoomOwnner = false ;
            //將二維陣列取出顯示其值
            
            foreach($data as $index => $row){ //確認該玩家是否是房主

                foreach($row as $key => $value){ // 先檢查是否有出現在遊戲裡面
                    if ( $_POST["memberID"] == $value &&
                    ( $key == "player1" ||
                    $key == "player2" ||
                    $key == "player3" ||
                    $key == "player4"||
                    $key == "player5" ||
                    $key == "player6"||
                    $key == "player7")) { // 確認是否存在，直接返還值
                        echo json_encode($data);
                        break 2;
                    }
                }

                foreach($row as $key => $value){
                    if ( (!$value || $value = "") && 
                    ( $key == "player2" ||
                     $key == "player3" ||
                     $key == "player4"||
                     $key == "player5" ||
                     $key == "player6"||
                     $key == "player7")) {
                        $data[$index][$key] = $_POST["memberID"];
                        $data[$index]["person"] ++ ;
                        $sql = "UPDATE roomList SET person = ?, {$key} = ? WHERE roomNum = ?";
                        $statement = $pdo->prepare($sql);
                        $statement->bindValue(1, $data[$index]["person"]);
                        $statement->bindValue(2, $_POST["memberID"]);
                        $statement->bindValue(3, $_POST["roomNum"]);
                        $statement->execute();
                        $data2 = $statement->fetchAll();
                        echo json_encode($data);
                        break 2;
                    }
                }

                echo 2;
            }

        } else {  //找不到房間
            echo -2;
        }

    } else { // 找不到該使用者
        echo json_encode(-1);
    }

?>