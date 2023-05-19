<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/global.css">
    <link rel="stylesheet" href="./css/wolf/wolf_list.css">
    <title>Wolf Room List</title>
</head>

<body>
    <?php require("common.php"); ?>
    <div class="activity_title">
        <svg width="40" height="40" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <a href="wolf.html">
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
        <section class="room_list">
            <form class="search_box">
                <input type="search" name="search" id="search" placeholder="搜尋">
                <button type="submit" id="search_btn"></button>
            </form>
            <a href="wolf_create_room.html"><input type="button" name="create_room" id="create_room" value="創建房間"></a>


            <div class="room_password">
                <article>
                    <div class="close"></div>
                    <p>請輸入密碼:</p>
                    <div class="password_list">
                        <input type="text" name="1" maxlength="1">
                        <input type="text" name="2" maxlength="1">
                        <input type="text" name="3" maxlength="1">
                        <input type="text" name="4" maxlength="1">
                    </div>
                </article>
            </div>

            <div class="room_box">
                <div class="room">
                    <span class="name">XXX的遊戲室</span>
                    <span class="room_number">房號：1234</span>
                    <span class="num">人數1/7</span>
                    <span class="state lock"></span>
                </div>
                <div class="room">
                    <span class="name">XXX的遊戲室</span>
                    <span class="room_number">房號：1234</span>
                    <span class="num">人數1/7</span>
                    <span class="state unlock"></span>
                </div>
                <div class="room">
                    <span class="name">XXX的遊戲室</span>
                    <span class="room_number">房號：1234</span>
                    <span class="num">人數1/7</span>
                    <span class="state lock"></span>
                </div>
                <div class="room">
                    <span class="name">XXX的遊戲室</span>
                    <span class="room_number">房號：1234</span>
                    <span class="num">人數1/7</span>
                    <span class="state unlock"></span>
                </div>
                <div class="room">
                    <span class="name">XXX的遊戲室</span>
                    <span class="room_number">房號：1234</span>
                    <span class="num">人數1/7</span>
                    <span class="state lock"></span>
                </div>
                <div class="room">
                    <span class="name">XXX的遊戲室</span>
                    <span class="room_number">房號：1234</span>
                    <span class="num">人數1/7</span>
                    <span class="state unlock"></span>
                </div>
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

    <script>
        let room_list = document.getElementsByClassName("room");
        let room_password_el = document.getElementsByClassName("room_password")[0];
        let close = document.getElementsByClassName("close")[0];
        // console.log(room_password_el);

        for (let i = 0; i < room_list.length; i++) {
            room_list[i].addEventListener("click", function() {

                if (room_list[i].querySelectorAll("span")[3].classList.contains('lock')) {
                    //console.log("lock")
                    room_password_el.setAttribute("style", "display:block;");
                    room_password_el.querySelector("input").focus();
                } else {
                    //console.log("unlock")
                }
            })
        }

        room_password_el.addEventListener("click", function(e) {
            room_password_el.setAttribute("style", "display:none;");
        })

        room_password_el.querySelector("article").addEventListener("click", function(e) {
            e.stopPropagation();
        });

        close.addEventListener("click", function() {
            room_password_el.setAttribute("style", "display:none;");
        })
    </script>
</body>

</html>