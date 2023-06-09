<?php
    session_start();
    if (isset($_SESSION["ID"])) {


        $title = isset($_POST["activityName"]) ? htmlspecialchars($_POST["activityName"]) : "";
        $content = isset($_POST["activityNote"]) ? htmlspecialchars($_POST["activityNote"]) : "";

        require("connectSQL.php");

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
        $currentTime = date("Y-m-d H:i:s"); // 用現在的時間來取得articleID
        //建立SQL
        
        $sql = "INSERT into activity( activityOrganiserID, activityTime, activityTopic, activityStartDate, activityEndDate, activityName, activityNote, activityLimit, activityPlace, con_onlyMale, con_onlyFemale, con_motorLicense, con_ageGreaterThan18)
                values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $_SESSION["ID"]);
        $statement->bindValue(2, $currentTime);
        $statement->bindValue(3, $_POST["activityTopic"]);
        $statement->bindValue(4, $_POST["activityStartDate"]);
        $statement->bindValue(5, $_POST["activityEndDate"]);
        $statement->bindValue(6, $_POST["activityName"]);
        $statement->bindValue(7, $_POST["activityNote"]);
        $statement->bindValue(8, $_POST["activityLimit"]);
        $statement->bindValue(9, $_POST["activityPlace"]);
        $statement->bindValue(10, $_POST["con_onlyMale"]);
        $statement->bindValue(11, $_POST["con_onlyFemale"]);
        $statement->bindValue(12, $_POST["con_motorLicense"]);
        $statement->bindValue(13, $_POST["con_ageGreaterThan18"]);
        $success = $statement->execute();
        
        echo "新增成功!";


    } else
        return -1;

?>
