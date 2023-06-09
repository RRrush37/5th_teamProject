<?php
// 處理資料
// $jsonData = file_get_contents('php://input');
// $data = json_decode($jsonData);
// $activityID = $data->activityID;
// $comment_content = $data->comment_content;

require("checkIfLogin.php");
session_start();
if (checkIfLogin()) {
    require("connectSQL.php");
    $sql = 'INSERT into activityComment(commentID, activityID, content, `time`)
values(?, ?,?,now())';
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_SESSION["ID"]);
    $statement->bindValue(2, (int)$_POST["activityId"]);
    $statement->bindValue(3, $_POST["commentContent"]);

    // $statement->bindValue(1, $_SESSION["ID"]);
    // $statement->bindValue(2, "20000");
    // $statement->bindValue(3, "23122");
    $go = $statement->execute();
    if ($go) {
        echo 1;
    } else
        echo 2;
} else {
    echo -1;
}
