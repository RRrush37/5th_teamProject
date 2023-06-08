<?php

  include('connectSQL.php');
  $sql = "SELECT * FROM store where storeID = ? ";

  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_POST["storeID"]);
  $statement->execute();
  $data = $statement->fetchAll();

  $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
  // Server上的暫存檔路徑含檔名

  if ($data[0]["isCoin"] == "0" ) { // 是否為遊戲幣
    $data[0]["sellNum"] = 0;
  }

  if ($data[0]["itemType"] == "coin") {
    $data[0]["itemType"] = "遊戲幣" ;
  } else if ($data[0]["itemType"] == "hair") {
    $data[0]["itemType"] = "髮型" ;
  } else if ($data[0]["itemType"] == "clothes") {
    $data[0]["itemType"] = "上衣" ;
  } else if ($data[0]["itemType"] == "'bottoms'") {
    $data[0]["itemType"] = "下裝" ;
  } else if ($data[0]["itemType"] == "'eye'") {
    $data[0]["itemType"] = "眼睛" ;
  } else if ($data[0]["itemType"] == "eyebrow") {
    $data[0]["itemType"] = "眉毛" ;
  } else if ($data[0]["itemType"] == "mouth") {
    $data[0]["itemType"] = "嘴巴" ;
  } else if ($data[0]["itemType"] == "accessories1") {
    $data[0]["itemType"] = "口罩" ;
  } else if ($data[0]["itemType"] == "accessories2") {
    $data[0]["itemType"] = "帽子" ;
  } else if ($data[0]["itemType"] == "accessories3") {
    $data[0]["itemType"] = "眼鏡" ;
  }

  echo json_encode($data);
?>