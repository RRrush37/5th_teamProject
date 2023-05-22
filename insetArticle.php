  <?php
      $memberID = isset($_POST["memberID"]) ? htmlspecialchars($_POST["memberID"]) : 1;
      $title = isset($_POST["title"]) ? htmlspecialchars($_POST["title"]) : "";
      $content = isset($_POST["content"]) ? htmlspecialchars($_POST["content"]) : "";

      require("connect.php");

       //建立SQL
      //  $sql = "INSERT INTO member(Account, PWD, CreateDate) VALUES ('王小明', 'abc123', NOW())";
       $sql = "INSERT into article(memberID, articleTitle, articleContent, articleTime, articleState)
       values(?, ?, ?, now(), 'public')";

       $statement = $pdo->prepare( $sql );
       $statement->bindValue(1, $memberID);
       $statement->bindValue(2, $title);
       $statement->bindValue(3, $content);
       $success = $statement->execute();
       //執行
       if($success){
              echo "新增成功!";
       }else{
              echo "新增失敗!";
       }

?>
