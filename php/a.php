<?php

    $roomList = [
        [
            "name" => "member1",
            "roomNum" => "9999",
            "password" => 5678,
            "person" => 1,
            "lock" => true,
            "player" => array()
        ]
    ];

    class room {
        public $name = "member1";
        public $roomNum ;
    }

    $b = new room("member1","9999");
    array_push($roomList[0]["player"],"blue","yellow");
    echo json_encode($roomList);
    echo "<br>" ;
    echo json_encode($b);
    echo "<br>" ;
    echo $b->name ;
?>