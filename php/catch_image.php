<?php
    if ($_FILES["imageFile"]) {
        $file = $_FILES["imageFile"];
        $filename = $file["name"];
        $tmpFilePath = $file["tmp_name"];
        

        //Web根目錄真實路徑
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];

        date_default_timezone_set("Asia/Taipei"); //台北時間
        $filename = date("YmdHis").".png" ; //年月日時分秒
        //檔案最終存放位置
        $filePath = $ServerRoot."/team_5/IMG/people/member1/".$filename;

        move_uploaded_file($tmpFilePath, $filePath);
        
        // 在此處執行其他相關處理，例如將圖片路徑存入資料庫等
        // ...
        echo "檔案存放位置：".$filePath;
        echo "<br/>";
        // 回傳成功訊息給前端
        // $response = array("success" => true);
        // echo json_encode($response);
    } else {
        // 回傳失敗訊息給前端
        $response = array("success" => false);
        echo json_encode($response);
    }

?>