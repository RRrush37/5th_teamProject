<?php

    include "checkIfLogin.php" ;
    session_start();
    if (checkIfLogin()) {
        echo $_SESSION["ID"] ;
    } else {
        echo -1 ;
    }
?>