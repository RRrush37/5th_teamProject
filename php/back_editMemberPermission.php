
<?php
  session_start();
  require("connectSQL.php");
  $sql = "update memberData set permissions = ? where memberID = ? ";

  $statement = $pdo->prepare($sql);

  $statement->bindValue(1, $_POST["permissions"]);
  $statement->bindValue(2, $_POST["memberID"]);
  $statement->execute();
  $data = $statement->fetchAll();
  echo json_encode($data);
?>