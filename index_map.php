<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/index/map.css">
    <link rel="stylesheet" href="./css/global.css">
    <title>地圖</title>
</head>

<body>
    <?php require("common.php"); ?>

    <div class="return">
        <img src="./img/index/return.png" alt="" height="40">
    </div>

    <!-- 上面是返回 -->

    <div class="map">


        <img class="map_1" src="./img/index/map/map_1.png" alt="">



        <img class="house_1" src="./img/index/map/house_1.png" alt="">

        <img class="house_2" src="./img/index/map/house_2.png" alt="">
        <img class="house_3" src="./img/index/map/house_3.png" alt="">
        <img class="house_4" src="./img/index/map/house_4.png" alt="">
        <img class="house_5" src="./img/index/map/house_5.png" alt="">
        <img class="house_6" src="./img/index/map/house_6.png" alt="">



        <img class="bulletin_board_2" src="./img/index/map/bulletin_board.png" alt="">
        <img class="bulletin_board_3" src="./img/index/map/bulletin_board.png" alt="">
        <img class="bulletin_board_4" src="./img/index/map/bulletin_board.png" alt="">
        <img class="bulletin_board_5" src="./img/index/map/bulletin_board.png" alt="">
        <img class="bulletin_board_6" src="./img/index/map/bulletin_board.png" alt="">


        <img src="./img/index/map/think_2.png" class="think_2">
        <img src="./img/index/map/think_6.png" class="think_6">
        <img src="./img/index/map/think_5.png" class="think_5">
        <img src="./img/index/map/think_4.png" class="think_4">
        <img src="./img/index/map/think_3.png" class="think_3">
    </div>

    <!-- 上面是地圖 -->










    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/75e9abcec6.js" crossorigin="anonymous"></script>
    <script>
        // 下面是地圖
        const house_2 = document.querySelector(".house_2");
        const map = document.querySelector(".map_1");
        const think_2 = document.querySelector(".think_2");

        house_2.addEventListener("mouseenter", function() {
            console.log(123);
            map.src = "./img/index/map/map_4.png";
            house_2.src = "./img/index/map/house_1.png";
            think_2.style.display = "block";
            setTimeout(function() {
                think_2.style.opacity = 1;
            }, 10);
        });

        house_2.addEventListener("mouseleave", function() {
            think_2.style.opacity = 0;
            setTimeout(function() {
                think_2.style.display = "none";
            }, 300);
        });

        house_2.addEventListener("mouseout", function() {
            console.log(123);
            map.src = "./img/index/map/map_1.png";
            house_2.src = "./img/index/map/house_2.png";
        });

        const house_5 = document.querySelector(".house_5");
        const map_5 = document.querySelector(".map_1");
        const think_5 = document.querySelector(".think_5");

        house_5.addEventListener("mouseenter", function() {
            console.log(123);
            map_5.src = "./img/index/map/map_6.png";
            house_5.src = "./img/index/map/house_5_2.png";
            think_5.style.opacity = "1";
        });

        house_5.addEventListener("mouseout", function() {
            console.log(123);
            map_5.src = "./img/index/map/map_1.png";
            house_5.src = "./img/index/map/house_5.png";
            think_5.style.opacity = "0";
        });



        const house_3 = document.querySelector(".house_3");
        const map_d = document.querySelector(".map_1");
        const think_3 = document.querySelector(".think_3");

        house_3.addEventListener("mouseenter", function() {
            console.log(123);
            house_3.src = "./img/index/map/house_3_2.png";
            map.src = "./img/index/map/map_5.png";
            think_3.style.opacity = "1";
        });

        house_3.addEventListener("mouseout", function() {
            console.log(123);
            map.src = "./img/index/map/map_1.png";
            house_3.src = "./img/index/map/house_3.png";
            think_3.style.opacity = "0";
        });



        const house_6 = document.querySelector(".house_6");
        const map_3 = document.querySelector(".map_1");
        const think_6 = document.querySelector(".think_6");

        house_6.addEventListener("mouseenter", function() {
            console.log(123);
            map_3.src = "./img/index/map/map_3.png";
            think_6.style.display = "block";
            setTimeout(function() {
                think_6.style.opacity = 1;
            }, 10);
        });

        house_6.addEventListener("mouseleave", function() {
            console.log(123);
            map_3.src = "./img/index/map/map_1.png";
            think_6.style.opacity = 0;
            setTimeout(function() {
                think_6.style.display = "none";
            }, 300);
        });


        const house_4 = document.querySelector(".house_4");
        const map_2 = document.querySelector(".map_1");
        const think_4 = document.querySelector(".think_4");

        house_4.addEventListener("mouseenter", function() {
            console.log(123);
            map_2.src = "./img/index/map/map_2.png";
            think_4.style.opacity = "1";
        });

        house_4.addEventListener("mouseout", function() {
            console.log(123);
            map_2.src = "./img/index/map/map_1.png";
            house_4.src = "./img/index/map/house_4.png";
            think_4.style.opacity = "0";
        });





        // 上面是建築物的監聽事件

        const bulletin_board_2 = document.querySelector(".bulletin_board_2");
        const map_a = document.querySelector(".map_1");

        bulletin_board_2.addEventListener("mouseenter", function() {
            console.log(123);
            map.src = "./img/index/map/map_4.png";
        });
        bulletin_board_2.addEventListener("mouseout", function() {
            console.log(123);
            map.src = "./img/index/map/map_1.png";
        });


        const bulletin_board_6 = document.querySelector(".bulletin_board_6");
        const map_b = document.querySelector(".map_1");

        bulletin_board_6.addEventListener("mouseenter", function() {
            console.log(123);
            map.src = "./img/index/map/map_3.png";
        });
        bulletin_board_6.addEventListener("mouseout", function() {
            console.log(123);
            map.src = "./img/index/map/map_1.png";
        });


        const bulletin_board_4 = document.querySelector(".bulletin_board_4");
        const map_c = document.querySelector(".map_1");

        bulletin_board_4.addEventListener("mouseenter", function() {
            console.log(123);
            map.src = "./img/index/map/map_2.png";
        });
        bulletin_board_4.addEventListener("mouseout", function() {
            console.log(123);
            map.src = "./img/index/map/map_1.png";
        });





        // 上面是木板的監聽事件

        // 下面是顯示雲朵的事件

        // 取得兩張圖片的元素
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');

        // 監聽滑鼠移動事件
        img1.addEventListener('mouseenter', function() {
            img2.classList.remove('hidden');
        });

        // 監聽滑鼠移出事件
        img1.addEventListener('mouseleave', function() {
            img2.classList.add('hidden');
        });

        // 監聽滾動事件
        window.addEventListener('scroll', function() {
            // 取得img1元素的座標位置和視窗高度
            const img1Top = img1.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // 如果img1元素進入視窗，顯示img2
            if (img1Top < windowHeight) {
                img2.classList.remove('hidden');
            } else {
                img2.classList.add('hidden');
            }
        });
    </script>

</body>

</html>