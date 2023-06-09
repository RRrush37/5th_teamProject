
<?php
  session_start();
  include('connectSQL.php');
  $sql = "SELECT a.*, m.memberName FROM article AS a LEFT JOIN memberData AS m ON a.memberID = m.memberID";
  
  $statement = $pdo->prepare($sql);
  $statement->execute();
  $data = $statement->fetchAll();
  echo json_encode($data);
?>