<?php
       // 在 post_success.php 中
       session_start();
       // 將資料編碼為 JSON 並返回給前端
       header('Content-Type: application/json');
       
       //MySQL相關資訊
       include("../connectSQL.php");
       $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : "" ;
       $password = "2";
       //---------------------------------------------------

       //建立SQL語法
       // $sql = "SELECT * FROM member where Account = '".$_POST['account']."' and PWD = '".
       // $_POST['password']."'";

       $sql = "SELECT memberID, `password` FROM memberData where email = ?" ;
       //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       // $statement = $pdo->query($sql);
       $statement = $pdo->prepare($sql);
       $statement->bindValue(1, "2");
       // $statement->bindParam(":password", $password);
       $statement->execute();
       
       //抓出全部且依照順序封裝成一個二維陣列
       $data = $statement->fetchAll();
       
       // 將二維陣列取出顯示其值
       if(count($data) > 0){
              // echo json_encode([$data["0"]["memberID"]]);
              if (password_verify($password, $data[0][1])){
                     echo json_encode($data[0][0]);
                     setcookie("sessionID",session_id(),time()+360000, '/');
                    $_SESSION["ID".$data[0][0]] = session_id();
                    
                    //  $_SESSION[strval($data[0][0])] = session_id();
                     setcookie("ID",$data[0][0],time()+360000, '/');
                     session_regenerate_id(true);
              }
              else
                     echo -1;
       }
       else{
              echo -1;
       }
       /*foreach($data as $index => $row){
	       echo $row["password"];   //欄位名稱
	       echo '<br>';
	       echo $row["memberID"];    //欄位名稱
              echo '<br>';
              echo count($data);
              // echo $row["email"];    //欄位名稱
              // echo '<br>';
       }*/

?>
