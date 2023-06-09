
<?php
  session_start();
  include('connectSQL.php');
  $sql = "SELECT * FROM activity";
  
  $statement = $pdo->prepare($sql);
  $statement->execute();
  $data = $statement->fetchAll();
  echo json_encode($data);
?>