<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/global.css">
    <link rel="stylesheet" href="./css/wolf/wolf.css">
    <title>Wolf Rule</title>
</head>

<body>
    <?php require("common.php"); ?>
    <div class="activity_title">
        <svg width="40" height="40" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <a href="gameChoose.php">
                <g filter="url(#filter0_dd_668_6)">
                    <path d="M9 37.5L34.2778 5V23.018L74 23.0556V51.9444H34.2778V70L9 37.5Z" fill="#606C99" stroke="#606C99" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <filter id="filter0_dd_668_6" x="0" y="0" width="83" height="83" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_668_6" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="effect1_dropShadow_668_6" result="effect2_dropShadow_668_6" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_668_6" result="shape" />
                    </filter>
                </defs>
            </a>
        </svg>

        <h1>狼人殺</h1>
    </div>
    <div class="wrapper">
        <section class="rule">
            <div class="container">
                <div class="top">
                    <div class="left">
                        <div class="text_bg">
                            遊戲規則<br>
                            規則相當簡單，玩家被隨機平均分派到好人陣營或者狼人陣營，遊戲共分為晚上和早上兩部分，晚上就是狼人殺人的時間，而早上則是所有玩家輪流發言的機會， 遊戲中，狼人在晚上開眼時，可以知道自己同伴有誰，再一起投票將誰殺掉；相反，好人陣營只能透過早上的輪流發言機會，猜測推斷誰是好人或狼人，入夜前進行投票，說服大家殺掉狼人
                        </div>
                        <div class="text">遊戲規則<br>
                            規則相當簡單，玩家被隨機平均分派到好人陣營或者狼人陣營，遊戲共分為晚上和早上兩部分，晚上就是狼人殺人的時間，而早上則是所有玩家輪流發言的機會， 遊戲中，狼人在晚上開眼時，可以知道自己同伴有誰，再一起投票將誰殺掉；相反，好人陣營只能透過早上的輪流發言機會，猜測推斷誰是好人或狼人，入夜前進行投票，說服大家殺掉狼人
                        </div>
                    </div>

                    <div class="right">
                        <img src="img/wolf/little_red.jpg" alt="">
                    </div>

                </div>

                <div class="must_read">
                    <input type="checkbox" name="must_read" id="check_box" required>
                    <label for="check_box">已詳閱閱讀完畢並開始遊戲</label>
                </div>

            </div>

            <div class="enter">
                <a href="wolf_list.php"><input type="button" id="enter_btn" value="進入遊戲"></input></a>
            </div>

        </section>

        <div class="bottom_nav">
            <p>
                <span>
                    關於我們
                </span>
                <span>
                    使用常規
                </span>
                <span>
                    常見問題
                </span>
            </p>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/75e9abcec6.js" crossorigin="anonymous"></script>
</body>

</html>