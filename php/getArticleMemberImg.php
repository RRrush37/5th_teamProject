<?php
    include "connectSQL.php" ;
    include "checkIfLogin.php" ;
    session_start();
    if (checkIfLogin()) {
        $sql = 'SELECT * FROM memberData AS m JOIN article AS a ON m.memberID = a.memberID WHERE articleID = ? ORDER BY a.articleTime DESC';
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $_POST["articleID"]);
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