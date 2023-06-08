<?php
  session_start();
  include('connectSQL.php');
  $sql = "SELECT * FROM store ";

  $statement = $pdo->prepare($sql);
  $statement->execute();
  $data = $statement->fetchAll();
  echo json_encode($data);
?>