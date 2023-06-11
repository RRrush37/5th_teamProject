<?php
require("connectSQL.php");
$sql = "select * from chattingRoomLog";
$statement = $pdo->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();
echo json_encode($data);
