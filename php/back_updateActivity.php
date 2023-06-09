<?php
    session_start();
    include('connectSQL.php');

    $_POST["activityLimit"] = intval($_POST["activityLimit"]);

    if ( $_POST["con_onlyMale"] == "true" ) {
        $_POST["con_onlyMale"] = 1 ;
    } else {
        $_POST["con_onlyMale"] = 0 ;
    }

    if ( $_POST["con_onlyFemale"] == "true" ) {
        $_POST["con_onlyFemale"] = 1 ;
    } else {
        $_POST["con_onlyFemale"] = 0 ;
    }

    if ( $_POST["con_motorLicense"] == "true" ) {
        $_POST["con_motorLicense"] = 1 ;
    } else {
        $_POST["con_motorLicense"] = 0 ;
    }

    if ( $_POST["con_ageGreaterThan18"] == "true" ) {
        $_POST["con_ageGreaterThan18"] = 1 ;
    } else {
        $_POST["con_ageGreaterThan18"] = 0 ;
    }
    // 更新活動
    $sql = "UPDATE activity SET activityTopic = ? , activityStartDate = ? , activityEndDate = ? , activityName = ? , activityNote = ? , activityLimit = ? , activityPlace = ? ,con_onlyMale = ?, con_onlyFemale = ?,con_motorLicense = ?, con_ageGreaterThan18 = ? WHERE activityID = ?";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["activityTopic"]);
    $statement->bindValue(2, $_POST["activityStartDate"]);
    $statement->bindValue(3, $_POST["activityEndDate"]);
    $statement->bindValue(4, $_POST["activityName"]);
    $statement->bindValue(5, $_POST["activityNote"]);
    $statement->bindValue(6, $_POST["activityLimit"]);
    $statement->bindValue(7, $_POST["activityPlace"]);
    $statement->bindValue(8, $_POST["con_onlyMale"]);
    $statement->bindValue(9, $_POST["con_onlyFemale"]);
    $statement->bindValue(10, $_POST["con_motorLicense"]);
    $statement->bindValue(11, $_POST["con_ageGreaterThan18"]);
    $statement->bindValue(12, $_POST["activityID"]);
    $statement->execute();
    $data = $statement->fetchAll();

    // echo json_encode($data) ;
    // echo "更新成功";

?>