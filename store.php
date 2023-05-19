<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>store_discount</title>
    <link rel="stylesheet" href="/css/global.css">
    <link rel="stylesheet" href="./css/store/store.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <?php require("common.php"); ?>

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
                        <img src="./img/store/dress.png" alt="">
                    </div>
                    <h2>角色配件</h2>
                </li>
            </a>
            <a href="./store_value.html">
                <li>
                    <div class="img_wrapper">
                        <img src="./img/store/value.png" alt="">
                    </div>
                    <h2>遊戲能力值</h2>
                </li>
            </a>
            <a href="./store_sticker.html">
                <li>
                    <div class="img_wrapper">
                        <img src="./img/store/sticker.png" alt="">
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
                <img class="wooden" src="./img/store/wooden_house.png" alt="">
            </article>
        </div>
    </div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="./js/store/store.js"></script>

</body>

</html>