<?php
  session_start();
  include('connectSQL.php');


  // // 刪除相關留言
  $sql = "DELETE FROM activityComment WHERE activityID = ? ";

  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_POST["activityID"]);
  $statement->execute();
  $data = $statement->fetchAll();

  // // 刪除相關讚數
  $sql = "DELETE FROM activityThumbUp WHERE activityID = ? ";

  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_POST["activityID"]);
  $statement->execute();
  $data = $statement->fetchAll();

  // // 刪除相關圖片表單
  $sql = "DELETE FROM activityImage WHERE activityID = ? ";

  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_POST["activityID"]);
  $statement->execute();
  $data = $statement->fetchAll();

  // // 刪除相關活動收藏表單
  $sql = "DELETE FROM activityCollect WHERE activityID = ? ";

  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_POST["activityID"]);
  $statement->execute();
  $data = $statement->fetchAll();

  // // 刪除參加活動表單
  $sql = "DELETE FROM activityParticipant WHERE activityID = ? ";

  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_POST["activityID"]);
  $statement->execute();
  $data = $statement->fetchAll();

  // // 刪除活動
  $sql = "DELETE FROM activity WHERE activityID = ? ";

  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_POST["activityID"]);
  $statement->execute();
  $data = $statement->fetchAll();

  echo "刪除成功";


?>