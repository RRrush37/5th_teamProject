<?php
require("checkIfLogin.php");
session_start();
if (checkIfLogin()) {
    require("connectSQL.php");
    $sql = 'INSERT into activity(activityOrganiserID, activityTopic, activityTime,activityName, activityNote, activityLimit, activityStartDate, activityEndDate, activityPlace ,con_onlyMale,con_onlyFemale,con_motorLicense,con_ageGreaterThan18)
values(?, ?, now(),?,?,?,?,?,?,?,?,?,?)';

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_SESSION["ID"]);
    $statement->bindValue(2, $_POST["topic"]);
    $statement->bindValue(3, $_POST["title"]);
    $statement->bindValue(4, $_POST["content"]);
    $statement->bindValue(5, $_POST["count"]);
    $statement->bindValue(6, $_POST["depart"]);
    $statement->bindValue(7, $_POST["leave"]);
    $statement->bindValue(8, $_POST["loc"]);
    $statement->bindValue(9, in_array("限男", $_POST["criteria"]) ? 1 : 0);
    $statement->bindValue(10, in_array("限女", $_POST["criteria"]) ? 1 : 0);
    $statement->bindValue(11, in_array("須有機車駕照", $_POST["criteria"]) ? 1 : 0);
    $statement->bindValue(12, in_array("須年滿18", $_POST["criteria"]) ? 1 : 0);


    // $statement->bindValue(1, 1);
    // $statement->bindValue(2, 2);
    // $statement->bindValue(3, 555);
    // $statement->bindValue(4, 777);
    // $statement->bindValue(5, 777);
    // $statement->bindValue(6, "2023-06-06");
    // $statement->bindValue(7, "2023-06-06");
    // $statement->bindValue(8, 1);
    // $statement->bindValue(9, 0);
    // $statement->bindValue(10, 1);
    // $statement->bindValue(11, 0);
    // $statement->bindValue(12, 0);


    $go = $statement->execute();
    if ($go) {
        echo 1;
    } else
        echo 2;
} else {
    echo -1;
}
