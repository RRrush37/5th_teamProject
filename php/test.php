<?php
require("connectSQL.php");
$sql = "select * from article";
$statement = $pdo->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();
foreach ($data as $key => $value) {
  echo print_r($value) . "<br>";
}

echo print_r(["0" => "111", "2" => "rff"]) . "<br>";
