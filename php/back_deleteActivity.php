<?php
  session_start();
  include('connectSQL.php');
  $sql = "DELETE FROM activity WHERE activityID = ? ";

  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_POST["activityID"]);
  $statement->execute();
  $data = $statement->fetchAll();

  echo "刪除成功";


?>