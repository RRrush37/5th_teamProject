<?php
    session_start();
    require("checkIfLogin.php");

    if(checkIfLogin()){
        if ($_FILES["imageFile"]) {
            $file = $_FILES["imageFile"];
            $filename = $file["name"];
            $tmpFilePath = $file["tmp_name"];
    
            //Web根目錄真實路徑
            $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
    
            // date_default_timezone_set("Asia/Taipei"); //台北時間
            $filename = $_SESSION["ID"].".png" ; //年月日時分秒
            //檔案最終存放位置
            $filePath = "../IMG/people/member1/".$filename;
    
            move_uploaded_file($tmpFilePath, $filePath);
            require("connectSQL.php");

            $sql = "UPDATE memberData SET memberPicture = ? WHERE memberID = ?";
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1, $filename);
            $statement->bindValue(2, $_SESSION["ID"]);
            $statement->execute();
            $data = $statement->fetchAll();

            // 在此處執行其他相關處理，例如將圖片路徑存入資料庫等
            // ...
            echo "檔案存放位置：".$filePath;
            echo "<br/>";
            // 回傳成功訊息給前端
            // $response = array("success" => true);
            // echo json_encode($response);
        } else {
            // 回傳失敗訊息給前端
            // $response = array("success" => false);
            // echo json_encode($response);
        }
    }
    else{
        echo -1;
    }
        

?>
