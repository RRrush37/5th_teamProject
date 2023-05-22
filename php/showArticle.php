<?php
session_start();
include('connectSQL.php');
$sql = "SELECT * FROM article where memberID = ? order by articleTime desc";

$statement = $pdo->prepare($sql);
$statement->bindValue(1, $_POST['memberID']);
$statement->execute();
$data = $statement->fetchAll();
echo json_encode($data);
