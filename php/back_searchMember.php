
<?php
  session_start();
  require("connectSQL.php");
  $sql = "select * from memberData where memberID like ? and memberName like ? and email like ? and permissions = ?";

  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, '%'.$_POST["memberID"].'%');
  $statement->bindValue(2, '%'.$_POST["memberName"].'%');
  $statement->bindValue(3, '%'.$_POST["email"].'%');
  $statement->bindValue(4, $_POST["permissions"]);
  $statement->execute();
  $data = $statement->fetchAll();
  echo json_encode($data);
?>