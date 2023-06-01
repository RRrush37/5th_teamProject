<?php

    include "checkIfLogin.php" ;

    if (checkIfLogin()) {
        $filePath = "IMG/people/member1/image.png";
        echo $filePath ;
    } else {
        $filePath = "IMG/people/member1/image.png";
        echo $filePath ;
    }
?>