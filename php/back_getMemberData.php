<?php 
    require("checkIfLogin.php");
    session_start();
    if(checkIfLogin()){
        require("connectSQL.php");

        $sql = "select * from memberData where memberID = ?";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $_POST["memberID"]);
        $statement->execute();
        $data = $statement->fetchAll();

        if ( $data[0]["height"] == null) {
            $data[0]["height"] = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" ;
        }

        if ( $data[0]["weight"] == null) {
            $data[0]["weight"] = "" ;
        }

        if ( $data[0]["starSign"] == null) {
            $data[0]["starSign"] = "       " ;
        }

        if ( $data[0]["age"] == null) {
            $data[0]["age"] = "" ;
        }

        if ( $data[0]["birthday"] == null) {
            $data[0]["birthday"] = "" ;
        }

        if ( $data[0]["interest"] == null) {
            $data[0]["interest"] = "" ;
        }

        if ( $data[0]["personalSign"] == null) {
            $data[0]["personalSign"] = "" ;
        }

        echo json_encode($data);
    }
    else{
        echo -1;
    }
