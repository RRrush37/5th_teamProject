<?php 
    require("checkIfLogin.php");
    session_start();
    if(checkIfLogin()){
        require("connectSQL.php");

        $sql = "select * from memberData";
        $statement = $pdo->prepare($sql);
        $statement->execute();
    
        $data = $statement->fetchAll();
        echo json_encode($data);
    }
    else{
        echo -1;
    }
