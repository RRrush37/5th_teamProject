<?php
  session_start();
  include('connectSQL.php');
  $sql = "DELETE FROM store WHERE storeID = ? ";

  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_POST["storeID"]);
  $statement->execute();
  $data = $statement->fetchAll();

  echo "刪除成功";


?>