<?php
// 處理資料
    // $jsonData = file_get_contents('php://input');
    // $data = json_decode($jsonData);
    // $activityID = $data->activityID;
    // $comment_content = $data->comment_content;

// require("checkLogin.php");
// session_start();
// if (!checkLogin()) {
    require("connectSQL.php");
    $sql = 'INSERT into activityComment(activityID, content,`time`)
values(?,?,now())';
    $statement = $pdo->prepare($sql);
    // $statement->bindValue(1, $_SESSION["login"]);
    // $statement->bindValue(1, 2);

    $statement->bindValue(1, $activityId);
    $statement->bindValue(2, $commentContent);

    // var_dump($_POST); 
    // $statement->bindValue(1, 1);
    // $statement->bindValue(2, 2);
    // $statement->bindValue(3, 555);
    // $statement->bindValue(4, 777);
    // $statement->bindValue(5, 777);
    // $statement->bindValue(6, "2023-06-06");
    // $statement->bindValue(7, "2023-06-06");
    // $statement->bindValue(8, 1);
    // $statement->bindValue(9,0);
    // $statement->bindValue(10,1);
    // $statement->bindValue(11,0);
    // $statement->bindValue(12,0);


    $go = $statement->execute();
    if ($go) {
    echo 1;
    } else
    echo 2;
// } else {
//     echo -1;
// }
?>