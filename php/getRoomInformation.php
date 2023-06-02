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
                if ( $_POST["memberID"] == $row["player1"]) { // 確認為房主，直接返還值
                    $isRoomOwnner = true ;
                    echo json_encode($data);
                    break;
                } else if ( !$row["player2"] ) {
                    $data[$index]["player2"] = $_POST["memberID"] ;
                    $data[$index]["person"] ++ ;
                    $sql = "UPDATE roomList SET person = ? , player2 = ? WHERE roomNum = ?";
                    $statement = $pdo->prepare($sql);
                    $statement->bindValue(1, $data[$index]["person"]);
                    $statement->bindValue(2, $data[$index]["player2"]);
                    $statement->bindValue(3, $_POST["roomNum"]);
                    $statement->execute();
                    $data2 = $statement->fetchAll();

                    echo json_encode($data);
                    break;
                } else if ( !$row["player3"] ) {
                    $data[$index]["player3"] = $_POST["memberID"] ;
                    $data[$index]["person"] ++ ;
                    $sql = "UPDATE roomList SET person = ? , player3 = ? WHERE roomNum = ?";
                    $statement = $pdo->prepare($sql);
                    $statement->bindValue(1, $data[$index]["person"]);
                    $statement->bindValue(2, $data[$index]["player3"]);
                    $statement->bindValue(3, $_POST["roomNum"]);
                    $statement->execute();
                    $data2 = $statement->fetchAll();

                    echo json_encode($data);
                    break;
                } else if ( !$row["player4"] ) {
                    $data[$index]["player4"] = $_POST["memberID"] ;
                    $data[$index]["person"] ++ ;
                    $sql = "UPDATE roomList SET person = ? , player4 = ? WHERE roomNum = ?";
                    $statement = $pdo->prepare($sql);
                    $statement->bindValue(1, $data[$index]["person"]);
                    $statement->bindValue(2, $data[$index]["player4"]);
                    $statement->bindValue(3, $_POST["roomNum"]);
                    $statement->execute();
                    $data2 = $statement->fetchAll();

                    echo json_encode($data);
                    break;
                } else if ( !$row["player5"] ) {
                    $data[$index]["player5"] = $_POST["memberID"] ;
                    $data[$index]["person"] ++ ;
                    $sql = "UPDATE roomList SET person = ? , player5 = ? WHERE roomNum = ?";
                    $statement = $pdo->prepare($sql);
                    $statement->bindValue(1, $data[$index]["person"]);
                    $statement->bindValue(2, $data[$index]["player5"]);
                    $statement->bindValue(3, $_POST["roomNum"]);
                    $statement->execute();
                    $data2 = $statement->fetchAll();

                    echo json_encode($data);
                    break;
                } else if ( !$row["player6"] ) {
                    $data[$index]["player6"] = $_POST["memberID"] ;
                    $data[$index]["person"] ++ ;
                    $sql = "UPDATE roomList SET person = ? , player6 = ? WHERE roomNum = ?";
                    $statement = $pdo->prepare($sql);
                    $statement->bindValue(1, $data[$index]["person"]);
                    $statement->bindValue(2, $data[$index]["player6"]);
                    $statement->bindValue(3, $_POST["roomNum"]);
                    $statement->execute();
                    $data2 = $statement->fetchAll();

                    echo json_encode($data);
                    break;
                } else if ( !$row["player7"] ) {
                    $data[$index]["player7"] = $_POST["memberID"] ;
                    $data[$index]["person"] ++ ;
                    $sql = "UPDATE roomList SET person = ? , player7 = ? WHERE roomNum = ?";
                    $statement = $pdo->prepare($sql);
                    $statement->bindValue(1, $data[$index]["person"]);
                    $statement->bindValue(2, $data[$index]["player7"]);
                    $statement->bindValue(3, $_POST["roomNum"]);
                    $statement->execute();
                    $data2 = $statement->fetchAll();

                    echo json_encode($data);
                    break;
                }
            }

        } else {  //找不到房間
            echo -2;
        }

    } else { // 找不到該使用者
        echo json_encode(-1);
    }

?>