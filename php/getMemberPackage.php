<?php
require("checkIfLogin.php");
session_start();
if (checkIfLogin()) {
    require("connectSQL.php");

    $sql = "SELECT * FROM package where memberID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_SESSION["ID"]);
    $statement->execute();
    $data = $statement->fetchAll();

    $myitem = [
        "hair" => [],
        "clothes" => [],
        "bottoms" => [],
        "accessories1" => [],
        "accessories2" => [],
        "accessories3" => [],
        "eyebrow" => [],
        "eye" => [],
        "mouth" => []
    ];

    foreach ($data as $key => $value) {
        $itemCategory = $data[$key]['itemCategory'];
    
        if ($itemCategory == "hair") {
            array_push($myitem["hair"], $data[$key]['itemID']);
        } elseif ($itemCategory == "clothes") {
            array_push($myitem["clothes"], $data[$key]['itemID']);
        } elseif ($itemCategory == "bottoms") {
            array_push($myitem["bottoms"], $data[$key]['itemID']);
        } elseif ($itemCategory == "accessories1") {
            array_push($myitem["accessories1"], $data[$key]['itemID']);
        } elseif ($itemCategory == "accessories2") {
            array_push($myitem["accessories2"], $data[$key]['itemID']);
        } elseif ($itemCategory == "accessories3") {
            array_push($myitem["accessories3"], $data[$key]['itemID']);
        } elseif ($itemCategory == "eyebrow") {
            array_push($myitem["eyebrow"], $data[$key]['itemID']);
        } elseif ($itemCategory == "eye") {
            array_push($myitem["eye"], $data[$key]['itemID']);
        } elseif ($itemCategory == "mouth") {
            array_push($myitem["mouth"], $data[$key]['itemID']);
        }
    }

    echo json_encode($myitem);

    // echo $success;
} else
    echo -1;
