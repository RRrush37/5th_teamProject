<?php
    include "connectSQL.php" ;
    include "checkIfLogin.php" ;
    session_start();
    if (checkIfLogin()) {
        $sql = 'SELECT memberName, memberPicture from memberData WHERE memberID = ? ';
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $_POST["memberid"]);
        $statement->execute();
        $data = $statement->fetchAll();

        if ( $data > 0 ) {
            foreach($data as $index => $row){
                $memberPicture = $row["memberPicture"];   //欄位名稱
                $filePath = "IMG/people/member1/".$memberPicture;
                $data[$index]["memberPicture"] = $filePath;
            }
            echo json_encode($data) ;
        } else { // 未讀取到使用者資料
            echo json_encode(-1) ;
        }
        
    } else {
        // $filePath = "IMG/people/member1/image.png";
        // echo $filePath ;
        echo json_encode(-1) ;
    }
?>