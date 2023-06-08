<?php
    session_start();
    include('connectSQL.php');

    // 更新文章
    $sql = "UPDATE article SET articleTitle = ? , articleContent = ? WHERE articleID = ?";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["articleTitle"]);
    $statement->bindValue(2, $_POST["articleContent"]);
    $statement->bindValue(3, $_POST["articleID"]);
    $statement->execute();
    $data = $statement->fetchAll();

    echo "更新成功";

?>