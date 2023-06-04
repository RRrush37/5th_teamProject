<?php
    include "connectSQL.php" ;
    include "checkIfLogin.php" ;
    // // 自定義變數名稱 :account & :pwd
    // //建立SQL語法

    $roomList = [
        [
            "name" => "member1",
            "roomNum" => "9999",
            "password" => 5678,
            "person" => 1,
            "lock" => true,
            "player" => []
        ]
    ];
    session_start();
    if (checkIfLogin()) {
        $sql = "SELECT roomName, roomNum, roomPassword, person, `lock` FROM roomlist ";
        $statement = $pdo->prepare($sql);
        $statement->execute();
        $data = $statement->fetchAll();
        echo json_encode($data);
        // echo json_encode($roomList);
    } else {
        echo -1;
    }
?>