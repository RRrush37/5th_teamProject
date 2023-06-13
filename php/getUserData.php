<?php
require("checkIfLogin.php");
session_start();
if (checkIfLogin()) {
    require("connectSQL.php");

        $sql = "select * from memberData where memberID = ?";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $_SESSION["ID"]);
        $statement->execute();
    
        $data = $statement->fetchAll();

         // 将日期值格式化为适当的字符串格式（YYYY-MM-DD）
        $data[0]['birthday'] = date("Y-m-d", strtotime($data[0]['birthday']));
        echo json_encode($data);
    }
    else{
        echo -1;
    }
