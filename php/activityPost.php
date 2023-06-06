<?php
require("checkLogin.php");
if (checkLogin()) {
  require("connectSQL.php");
  $sql = 'INSERT into article(memberID, articleTitle, articleContent, articleTime, articleState)
  values(?, ?, ?, now(), "public")';
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_SESSION["login"]);
  $statement->bindValue(2, $_POST["title"]);
  $statement->bindValue(3, $_POST["content"]);
  $go = $statement->execute();
  if ($go) {
    echo 1;
  } else
    echo 2;
} else {
  echo -1;
}

INSERT into activity(activityOrganiserID,activityName,activityStartDate,activityEndDate,activityState,activityNote,activityPlace,con_charmGreaterThan70,con_onlyMale,con_onlyFemale,con_motorLicense,con_ageGreaterThan18)
values(1,"一筒去郊遊","2020-04-12","2020-04-19","close","汐止雨不停","汐止",0,0,0,0,0);
