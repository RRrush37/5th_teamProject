<?php
    session_start();
    include('connectSQL.php');

    // 刪除相關留言
    $sql = "DELETE FROM articleComment WHERE articleID = ? ";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["articleID"]);
    $statement->execute();
    $data = $statement->fetchAll();

    // 刪除相關讚數
    $sql = "DELETE FROM articleThumbUp WHERE articleID = ? ";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["articleID"]);
    $statement->execute();
    $data = $statement->fetchAll();

    // 刪除相關圖片表單
    $sql = "DELETE FROM articleImage WHERE articleID = ? ";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["articleID"]);
    $statement->execute();
    $data = $statement->fetchAll();

    // 刪除相關文章收藏表單
    $sql = "DELETE FROM articleCollect WHERE articleID = ? ";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["articleID"]);
    $statement->execute();
    $data = $statement->fetchAll();

    // 刪除文章
    $sql = "DELETE FROM article WHERE articleID = ? ";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["articleID"]);
    $statement->execute();
    $data = $statement->fetchAll();

    echo "刪除成功";


?>