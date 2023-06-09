<?php

    include('connectSQL.php');
    $sql = "SELECT *  FROM activity where activityID like ? and activityName like ? and activityTopic like ? and activityStartDate > ? and activityPlace like ?" ;
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, '%'.$_POST["activityID"].'%');
    $statement->bindValue(2, '%'.$_POST["activityName"].'%');
    $statement->bindValue(3, '%'.$_POST["activityTopic"].'%');
    $statement->bindValue(4, $_POST["activityStartDate"]);
    $statement->bindValue(5, '%'.$_POST["activityPlace"].'%');
    $statement->execute();
    $data = $statement->fetchAll();

    echo json_encode($data);
?>