<?php

session_start();
require("connectSQL.php");
require("countTimeDiff.php");
$sql = "select * from articleComment where articleID = ?";
$statement = $pdo->prepare($sql);
$statement->bindValue(1, $_POST['articleID']);
$statement->execute();
$data = $statement->fetchAll();
foreach ($data as $key => $value) {
  $sql = "select memberName, memberPicture from memberData where memberID = ?";
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $value["commentMemberID"]);
  $statement->execute();
  $name = $statement->fetchAll();
  $data[$key]["name"] = $name[0]["memberName"];
  $data[$key]["memberPicture"] = $name[0]["memberPicture"];
  $data[$key]["time"] = countTimeDiff($value["time"]);
}
echo json_encode($data);
