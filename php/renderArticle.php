  <?php
       session_start();
       if (isset($_SESSION["ID"])) {
              $title = isset($_POST["title"]) ? htmlspecialchars($_POST["title"]) : "";
              $content = isset($_POST["content"]) ? htmlspecialchars($_POST["content"]) : "";

              require("connectSQL.php");

              $currentTime = date("Y-m-d H:i:s"); // 用現在的時間來取得articleID
              //建立SQL
              $sql = "INSERT into article(memberID, articleTitle, articleContent, articleTime, articleState)
                     values(?, ?, ?, ?, 'public')";

              $statement = $pdo->prepare($sql);
              $statement->bindValue(1, $_SESSION["ID"]);
              $statement->bindValue(2, $_POST["title"]);
              $statement->bindValue(3, $_POST["content"]);
              $statement->bindValue(4, $currentTime);
              $success = $statement->execute();
              //存入文章內容

              if ($success) {
                     //取得此篇文章ID
                     $sql = "SELECT * FROM article where articleTime = ?";
                     $statement = $pdo->prepare($sql);
                     $statement->bindValue(1, $currentTime);
                     $statement->execute();
                     $data = $statement->fetchAll();
                     // echo json_encode($data[0]["articleID"]);

                     //取得此篇文章內的所有圖片
                     if (isset($_FILES["edit_files"])) {
                            $file = $_FILES["edit_files"];
                            $fileName_arr =  $_FILES["edit_files"]["name"];
                            $fileName_arr = $fileName_arr["file"];
                            $tmpFilePath_arr =  $_FILES["edit_files"]["tmp_name"];
                            $tmpFilePath_arr = $tmpFilePath_arr["file"];
       
                            $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
                            for ($i=0; $i < count($fileName_arr); $i++) { 
                                   // Server上的暫存檔路徑含檔名
                                   $filePath = $ServerRoot."/team_5/IMG/diary/member/".$fileName_arr[$i];
                                   // 檔案最終存放位置
                                   move_uploaded_file($tmpFilePath_arr[$i], $filePath);
                                   // echo $filePath;
       
                                   $sql = "INSERT into articleImage(articleID, imageURL)
                                   values(?,?)";
       
                                   $statement = $pdo->prepare($sql);
                                   $statement->bindValue(1, $data[0]["articleID"]);
                                   $statement->bindValue(2, $fileName_arr[$i]);
                                   $success = $statement->execute();
                            }
                     }
                     

                     echo $data[0]["articleID"];
              } else {
                     echo "新增失敗!";
              }

       } else
              return -1;

?>
