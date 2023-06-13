
<?php

    require("checkIfLogin.php");
    session_start();
    //找尋到可以編輯的欄位且成為空值
    if(checkIfLogin()){
        $_POST["hight"] = isset($_POST["hight"]) ? (int)$_POST["hight"] : null;
        $_POST["weight"] = isset($_POST["weight"]) ? (int)$_POST["weight"] : null;
        $_POST["constellation"] = isset($_POST["constellation"]) ? $_POST["constellation"] : "";
        // $_POST["introduce_right"]= isset($_POST["introduce_right"]) ? (int)$_POST["introduce_right"] : null;
        $_POST["birthday"]= isset($_POST["birthday"])&&$_POST["birthday"] ? $_POST["birthday"] : null;
        $_POST["interest"]= isset($_POST["interest"]) ? $_POST["interest"] : "";
        $_POST["soubriquet"]= isset($_POST["soubriquet"]) ? $_POST["soubriquet"] : "";
        $_POST["myselfsign"]= isset($_POST["myselfsign"]) ? $_POST["myselfsign"] : "";
        $_POST["email"]= isset($_POST["email"]) ? $_POST["email"] : "";

        // $_POST["starSign"]= isset($_POST["starSign"]) ? $_POST["starSign"] : "";
        $_POST["age"]= isset($_POST["age"]) ? $_POST["age"] : "";
        // $_POST["personalSign"]= isset($_POST["personalSign"]) ? $_POST["personalSign"] : "";

        if ( $_POST["gender"] == "m" ) {
            $_POST["gender"] = 1 ;
        } else if ( $_POST["gender"] == "f" ) {
            $_POST["gender"] = 0 ;
        }


        //更新資料庫
        require("connectSQL.php");
        $sql = "update memberData set memberName = ?, email = ?, gender = ?, height = ?, weight = ?,starSign = ?, age = ?, birthday = ?, interest = ?, personalSign = ? where memberID = ?";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $_POST["soubriquet"]);
        $statement->bindValue(2, $_POST["email"]);
        $statement->bindValue(3, $_POST["gender"]);
        $statement->bindValue(4, $_POST["hight"]);
        $statement->bindValue(5, $_POST["weight"]);
        $statement->bindValue(6, $_POST["constellation"]);
        $statement->bindValue(7, $_POST["age"]);
        $statement->bindValue(8, $_POST["birthday"]);
        $statement->bindValue(9, $_POST["interest"]);
        $statement->bindValue(10, $_POST["myselfsign"]);
        $statement->bindValue(11, $_SESSION["ID"]);

        $statement->execute();
        // $sql = "update memberData set height = ? where memberID = ?";
        // $statement = $pdo->prepare($sql);
        // $statement->bindValue(1, $_POST["hight"]);
        // $statement->bindValue(2, $_SESSION["ID"]);
        // $statement->execute();
        $affectedRows = $statement->rowCount();
        //修改幾列rowCount

    echo $affectedRows;
} else {
    echo -1;
}
