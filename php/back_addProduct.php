<?php
       session_start();
       if (isset($_SESSION["ID"])) {
            $title = isset($_POST["itemName"]) ? htmlspecialchars($_POST["itemName"]) : "";
            $price = isset($_POST["itemPrice"]) ? htmlspecialchars($_POST["itemPrice"]) : "";
            if ( $title && $price ) {
                require("connectSQL.php");
                if (isset($_FILES['files'])) {

                    $fileName_arr = $_FILES["files"]["name"];
                    $tmpFilePath_arr =  $_FILES["files"]["tmp_name"];

                    $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
                    // Server上的暫存檔路徑含檔名
                    $tempFilePath = $fileName_arr;
                    if ($_POST["isCoin"] == "true" ) { // 是否為遊戲幣
                        $filePath = $ServerRoot."/team_5/IMG/store/".$fileName_arr;
                        $coinValue = 1;
                        // 檔案最終存放位置
                    } else { //非遊戲幣
                        $filePath = $ServerRoot."/team_5/IMG/people/".$fileName_arr;
                        $coinValue = 0;
                        $_POST["sellNum"] = 0 ;
                        // 檔案最終存放位置
                    }
                    // 在這裡處理上傳的圖片資料，例如保存到特定目錄或進行其他操作
                    move_uploaded_file($tmpFilePath_arr, $filePath);

                    $currentTime = date("Y-m-d H:i:s"); // 用現在的時間來取得articleID
                    //建立SQL
                    $sql = "INSERT into store(itemName, itemImage, itemPrice, startDate, itemType, sellNum, itemDetail, isCoin)
                            values(?, ?, ?, ?, ?, ?, ?,? )";

                    $statement = $pdo->prepare($sql);
                    $statement->bindValue(1, $_POST["itemName"]);
                    $statement->bindValue(2, $fileName_arr);
                    $statement->bindValue(3, $_POST["itemPrice"]);
                    $statement->bindValue(4, $currentTime);
                    $statement->bindValue(5, $_POST["itemType"]);
                    $statement->bindValue(6, $_POST["sellNum"]);
                    $statement->bindValue(7, $_POST["new_status"]);
                    $statement->bindValue(8, $coinValue);
                    $success = $statement->execute();

                    // 回應成功訊息
                    echo "上傳成功";

                } else {
                    // 沒有找到名為"files"的檔案上傳欄位
                    echo "找不到檔案欄位";
                }
     


                

                echo "新增成功" ;
            } else {
                echo "有問題的資料" ;
            }

       } else
              return -1;

?>
