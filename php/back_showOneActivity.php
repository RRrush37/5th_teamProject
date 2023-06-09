<?php

  include('connectSQL.php');
  $sql = "SELECT * FROM activity WHERE activityID = ?";

  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_POST["activityID"]);
  $statement->execute();
  $data = $statement->fetchAll();

  echo json_encode($data);
?>