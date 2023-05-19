<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>store_discount</title>
    <link rel="stylesheet" href="/CSS/global.css">
    <link rel="stylesheet" href="./CSS/store/store.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <!-- <div class="header"></div> 用來載入 common.html 裡頭的 header -->
    <div class="header">
        <div>
            <span>
                <div class="bar">
                    <ul class="ability">
                        <li><span>體力VIT</span><span>
                                <div>20</div>
                            </span></li>
                        <li><span>魅力CHR</span><span>
                                <div>20</div>
                            </span></li>
                        <li><span>智力INT</span><span>
                                <div>20</div>
                            </span></li>
                        <li><span>幸運LUK</span><span>
                                <div>20</div>
                            </span></li>
                    </ul>
                    <a href="#"><img class="logo" src="./IMG/logo_1.png" alt="" width="100"></a>
                    <div class="nav">
                        <a href="#"><img class="user" src="./IMG/coin.svg" alt="" width="80"></a>
                        <ul class="widget">
                            <a href="#">
                                <li><i class="fa-solid fa-bell"></i></li>
                            </a>
                            <a href="">
                                <li>
                                    <i class="fa-solid fa-sack-dollar"></i>
                                </li>
                            </a>
                            <a href="">
                                <li><i class="fa-solid fa-briefcase"></i></li>
                            </a>
                            <li><i class="fa-solid fa-compass" style="cursor: pointer;"></i>
                                <!-- <ol >
                                <a href="">
                                    <li>聊天室大廳 <h4> CHAT ROOM</h4>
                                    </li>
                                </a>
                                <a href="">
                                    <li>會員房間<h4>USER SPACE</h4>
                                    </li>
                                </a>
                                <a href="">
                                    <li>揪活動<h4>ACTIVITIES</h4>
                                    </li>
                                </a>
                                <a href="">
                                    <li>玩遊戲<h4>GAMES</h4>
                                    </li>
                                </a>
                                <a href="">
                                    <li>商城<h4>STORE</h4>
                                    </li>
                                </a>
                            </ol> -->
                            </li>
                        </ul>
                    </div>
                </div>
            </span>
        </div>
    </div>

    <!-- <div class="footer">
        <div>
            <span>我是AJAX載入共用檔案的 footer 內容</span>
        </div>
    </div> -->

    <div class="activity_title">
        <svg width="40" height="40" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_dd_668_6)">
                <path d="M9 37.5L34.2778 5V23.018L74 23.0556V51.9444H34.2778V70L9 37.5Z" fill="#A0C0E1" stroke="#A0C0E1" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
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
        </svg>
        <h1>商城</h1>
    </div>

    <div class="store_choose">
        <ul>
            <a href="./store_dress.html">
                <li>
                    <div class="img_wrapper">
                        <img src="./IMG/store/dress.png" alt="">
                    </div>
                    <h2>角色配件</h2>
                </li>
            </a>
            <a href="./store_value.html">
                <li>
                    <div class="img_wrapper">
                        <img src="./IMG/store/value.png" alt="">
                    </div>
                    <h2>遊戲能力值</h2>
                </li>
            </a>
            <a href="./store_sticker.html">
                <li>
                    <div class="img_wrapper">
                        <img src="./IMG/store/sticker.png" alt="">
                    </div>
                    <h2>貼圖</h2>
                </li>
            </a>
        </ul>
    </div>

    <!------------------------------------------- lightbox --------------------------------------------->

    <div class="activity_lightbox">
        <div class="activity">
            <div class="close1">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <article>
                <div class="discount">
                    <h1>活動優惠</h1>
                    <h2>折扣季</h2>
                    <p>5/6 ~ 6/6</p>
                </div>
                <img class="wooden" src="./IMG/store/wooden_house.png" alt="">
            </article>
        </div>
    </div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="./JS/store/store.js"></script>

</body>

</html>