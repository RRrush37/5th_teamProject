<?php
    include "connectSQL.php" ;
    include "checkIfLogin.php" ;
    session_start();
    if (checkIfLogin()) {
        $sql = 'SELECT memberPicture from memberData WHERE memberID = ? ';
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $_SESSION["ID"]);
        $statement->execute();
        $data = $statement->fetchAll();

        if ( $data > 0 ) {
            foreach($data as $index => $row){
                $memberPicture = $row["memberPicture"];   //欄位名稱 // 取出玩家名稱用於遊戲房間名稱
            }
            $filePath = "IMG/people/member1/".$memberPicture;
            echo $filePath ;
        } else { // 未讀取到使用者資料
            echo -1 ;
        }
        
    } else {
        // $filePath = "IMG/people/member1/image.png";
        // echo $filePath ;
        echo -1 ;
    }
?>