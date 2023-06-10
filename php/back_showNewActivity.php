<?php

  include('connectSQL.php');
  $sql = "SELECT * FROM activity ORDER BY activityTime DESC LIMIT 1";

  $statement = $pdo->prepare($sql);
  $statement->execute();
  $data = $statement->fetchAll();

  echo json_encode($data);
?>