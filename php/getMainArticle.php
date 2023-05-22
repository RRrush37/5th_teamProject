<?php

if (isset($_POST["articleID"])) {
  session_start();
  require('connectSQL.php');
  $sql = "select * from article where articleID = ?";
  // echo $_POST["articleID"];
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $_POST["articleID"]);
  $statement->execute();

  $data = $statement->fetchAll();

  if (count($data) > 0) {
    $data = $data[0];

    if (isset($_SESSION["ID"])) {
      $sql = "select memberName from memberData where memberID = ?";
      $statement = $pdo->prepare($sql);
      $statement->bindValue(1, $_SESSION["ID"]);
      $statement->execute();

      $loginInform = $statement->fetchAll();
      $data["loginID"] = $_SESSION["ID"];
      $data["loginName"] = $loginInform[0][0];
    } else {
      $data["loginID"] = -1;
      $data["loginName"] = "訪客";
    }

    $sql = "select memberName from memberData where memberID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $data["memberID"]);
    $statement->execute();

    $memberName = $statement->fetchAll();
    $data['memberName'] = $memberName[0][0];
    // echo json_encode(gettype($data));
    require('countTimeDiff.php');
    $timeDiff = countTimeDiff($data["articleTime"]);
    $data["timeDiff"] = $timeDiff;

    $sql = "select count(*) from articleThumbUp where articleID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["articleID"]);
    $statement->execute();
    $thumbUpNum = $statement->fetchAll();
    $data["thumbUpNum"] = $thumbUpNum[0][0];



    $sql = "select count(*) from articleComment where articleID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["articleID"]);
    $statement->execute();
    $commentNum = $statement->fetchAll();
    $data["commentNum"] = $commentNum[0][0];

    if (isset($_SESSION["ID"])) {
      $sql = "select count(*) from articleThumbUp where articleID = ? and thumbUpMemberID = ?";
      $statement = $pdo->prepare($sql);
      $statement->bindValue(1, $_POST["articleID"]);
      $statement->bindValue(2, $_SESSION["ID"]);
      $statement->execute();
      $commentNum = $statement->fetchAll();
      $data["ILikeThis"] = $commentNum[0][0];
    }



    echo json_encode($data);
  } else {
    echo "-1";
  }
}
