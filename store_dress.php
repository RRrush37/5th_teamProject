<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>store_dress</title>
    <link rel="stylesheet" href="/css/global.css">
    <link rel="stylesheet" href="./css/store/store_dress.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <?php require("common.php"); ?>

    <div class="activity_title">
        <a href="/store.html">
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
        </a>
        <div class="choose_wrapper">
            <select id="choose" onchange="navigateToUrl()">
                <option value="/store_dress.html">角色配件</option>
                <option value="/store_value.html">遊戲能力值</option>
                <option value="/store_sticker.html">貼圖</option>
            </select>
        </div>
    </div>


    <div class="wrapper">

        <!-- 左邊選單 -->
        <div class="nav_left">
            <ul>
                <a href="">
                    <li>
                        <h2 class="current">頭髮</h2>
                    </li>
                </a>
                <a href="">
                    <li>
                        <h2>上衣</h2>
                    </li>
                </a>
                <a href="">
                    <li>
                        <h2>下裝</h2>
                    </li>
                </a>
                <a href="">
                    <li>
                        <h2>配件</h2>
                    </li>
                </a>
            </ul>
        </div>

        <!-- 人偶 -->
        <div class="main">

            <div class="coutainer">
                <img class="people" src="/img/store/people.png" alt="">
            </div>

            <div class="buy">
                <input class="check" type="submit" value="確認">
            </div>

            <!-- 下方選單 -->
            <div class="nav_down">
                <ul>
                    <li>
                        <img class="commodity" src="./img/store/commodity1.png" alt="">
                        <div class="money">
                            <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.875 31.3008H27.45C28.275 31.3008 28.975 30.5508 28.975 29.6258C28.975 28.4508 28.7 28.3008 27.9 28.0258L26.875 27.6758V31.3008Z" fill="#fff" />
                                <path d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM13.95 36.05C14.675 36.775 14.675 37.975 13.95 38.7C13.575 39.075 13.1 39.25 12.625 39.25C12.15 39.25 11.675 39.075 11.3 38.7C7.64997 35.05 5.625 30.175 5.625 25C5.625 19.825 7.64997 14.95 11.3 11.3C12.025 10.575 13.225 10.575 13.95 11.3C14.675 12.025 14.675 13.225 13.95 13.95C11 16.9 9.375 20.825 9.375 25C9.375 29.175 11 33.1 13.95 36.05ZM29.125 24.45C31.525 25.3 32.7 26.975 32.7 29.6C32.7 32.6 30.35 35.025 27.425 35.025H26.85V35.475C26.85 36.5 26 37.35 24.975 37.35C23.95 37.35 23.1 36.5 23.1 35.475V35.025H23.025C19.85 35.025 17.25 32.35 17.25 29.075C17.25 28.05 18.1 27.2 19.125 27.2C20.15 27.2 21 28.05 21 29.075C21 30.3 21.9 31.275 23.025 31.275H23.1V26.325L20.85 25.525C18.45 24.675 17.275 23 17.275 20.375C17.275 17.375 19.625 14.95 22.55 14.95H23.125V14.5C23.125 13.475 23.975 12.625 25 12.625C26.025 12.625 26.875 13.475 26.875 14.5V14.95H26.95C30.125 14.95 32.725 17.625 32.725 20.9C32.725 21.925 31.875 22.775 30.85 22.775C29.825 22.775 28.975 21.925 28.975 20.9C28.975 19.675 28.075 18.7 26.95 18.7H26.875V23.65L29.125 24.45ZM38.7 38.7C38.325 39.075 37.85 39.25 37.375 39.25C36.9 39.25 36.425 39.075 36.05 38.7C35.325 37.975 35.325 36.775 36.05 36.05C39 33.1 40.625 29.175 40.625 25C40.625 20.825 39 16.9 36.05 13.95C35.325 13.225 35.325 12.025 36.05 11.3C36.775 10.575 37.975 10.575 38.7 11.3C42.35 14.95 44.375 19.825 44.375 25C44.375 30.175 42.35 35.05 38.7 38.7Z" fill="#fff" />
                                <path d="M21.0498 20.4012C21.0498 21.5762 21.3248 21.7262 22.1248 22.0012L23.1498 22.3512V18.7012H22.5748C21.7248 18.7012 21.0498 19.4762 21.0498 20.4012Z" fill="#fff" />
                            </svg>
                            <p>100</p>
                        </div>
                    </li>
                    <li>
                        <img class="commodity" src="./img/store/commodity1.png" alt="">
                        <div class="money">
                            <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.875 31.3008H27.45C28.275 31.3008 28.975 30.5508 28.975 29.6258C28.975 28.4508 28.7 28.3008 27.9 28.0258L26.875 27.6758V31.3008Z" fill="#fff" />
                                <path d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM13.95 36.05C14.675 36.775 14.675 37.975 13.95 38.7C13.575 39.075 13.1 39.25 12.625 39.25C12.15 39.25 11.675 39.075 11.3 38.7C7.64997 35.05 5.625 30.175 5.625 25C5.625 19.825 7.64997 14.95 11.3 11.3C12.025 10.575 13.225 10.575 13.95 11.3C14.675 12.025 14.675 13.225 13.95 13.95C11 16.9 9.375 20.825 9.375 25C9.375 29.175 11 33.1 13.95 36.05ZM29.125 24.45C31.525 25.3 32.7 26.975 32.7 29.6C32.7 32.6 30.35 35.025 27.425 35.025H26.85V35.475C26.85 36.5 26 37.35 24.975 37.35C23.95 37.35 23.1 36.5 23.1 35.475V35.025H23.025C19.85 35.025 17.25 32.35 17.25 29.075C17.25 28.05 18.1 27.2 19.125 27.2C20.15 27.2 21 28.05 21 29.075C21 30.3 21.9 31.275 23.025 31.275H23.1V26.325L20.85 25.525C18.45 24.675 17.275 23 17.275 20.375C17.275 17.375 19.625 14.95 22.55 14.95H23.125V14.5C23.125 13.475 23.975 12.625 25 12.625C26.025 12.625 26.875 13.475 26.875 14.5V14.95H26.95C30.125 14.95 32.725 17.625 32.725 20.9C32.725 21.925 31.875 22.775 30.85 22.775C29.825 22.775 28.975 21.925 28.975 20.9C28.975 19.675 28.075 18.7 26.95 18.7H26.875V23.65L29.125 24.45ZM38.7 38.7C38.325 39.075 37.85 39.25 37.375 39.25C36.9 39.25 36.425 39.075 36.05 38.7C35.325 37.975 35.325 36.775 36.05 36.05C39 33.1 40.625 29.175 40.625 25C40.625 20.825 39 16.9 36.05 13.95C35.325 13.225 35.325 12.025 36.05 11.3C36.775 10.575 37.975 10.575 38.7 11.3C42.35 14.95 44.375 19.825 44.375 25C44.375 30.175 42.35 35.05 38.7 38.7Z" fill="#fff" />
                                <path d="M21.0498 20.4012C21.0498 21.5762 21.3248 21.7262 22.1248 22.0012L23.1498 22.3512V18.7012H22.5748C21.7248 18.7012 21.0498 19.4762 21.0498 20.4012Z" fill="#fff" />
                            </svg>
                            <p>100</p>
                        </div>
                    </li>
                    <li>
                        <img class="commodity" src="./img/store/commodity1.png" alt="">
                        <div class="money">
                            <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.875 31.3008H27.45C28.275 31.3008 28.975 30.5508 28.975 29.6258C28.975 28.4508 28.7 28.3008 27.9 28.0258L26.875 27.6758V31.3008Z" fill="#fff" />
                                <path d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM13.95 36.05C14.675 36.775 14.675 37.975 13.95 38.7C13.575 39.075 13.1 39.25 12.625 39.25C12.15 39.25 11.675 39.075 11.3 38.7C7.64997 35.05 5.625 30.175 5.625 25C5.625 19.825 7.64997 14.95 11.3 11.3C12.025 10.575 13.225 10.575 13.95 11.3C14.675 12.025 14.675 13.225 13.95 13.95C11 16.9 9.375 20.825 9.375 25C9.375 29.175 11 33.1 13.95 36.05ZM29.125 24.45C31.525 25.3 32.7 26.975 32.7 29.6C32.7 32.6 30.35 35.025 27.425 35.025H26.85V35.475C26.85 36.5 26 37.35 24.975 37.35C23.95 37.35 23.1 36.5 23.1 35.475V35.025H23.025C19.85 35.025 17.25 32.35 17.25 29.075C17.25 28.05 18.1 27.2 19.125 27.2C20.15 27.2 21 28.05 21 29.075C21 30.3 21.9 31.275 23.025 31.275H23.1V26.325L20.85 25.525C18.45 24.675 17.275 23 17.275 20.375C17.275 17.375 19.625 14.95 22.55 14.95H23.125V14.5C23.125 13.475 23.975 12.625 25 12.625C26.025 12.625 26.875 13.475 26.875 14.5V14.95H26.95C30.125 14.95 32.725 17.625 32.725 20.9C32.725 21.925 31.875 22.775 30.85 22.775C29.825 22.775 28.975 21.925 28.975 20.9C28.975 19.675 28.075 18.7 26.95 18.7H26.875V23.65L29.125 24.45ZM38.7 38.7C38.325 39.075 37.85 39.25 37.375 39.25C36.9 39.25 36.425 39.075 36.05 38.7C35.325 37.975 35.325 36.775 36.05 36.05C39 33.1 40.625 29.175 40.625 25C40.625 20.825 39 16.9 36.05 13.95C35.325 13.225 35.325 12.025 36.05 11.3C36.775 10.575 37.975 10.575 38.7 11.3C42.35 14.95 44.375 19.825 44.375 25C44.375 30.175 42.35 35.05 38.7 38.7Z" fill="#fff" />
                                <path d="M21.0498 20.4012C21.0498 21.5762 21.3248 21.7262 22.1248 22.0012L23.1498 22.3512V18.7012H22.5748C21.7248 18.7012 21.0498 19.4762 21.0498 20.4012Z" fill="#fff" />
                            </svg>
                            <p>100</p>
                        </div>
                    </li>
                    <li>
                        <img class="commodity" src="./img/store/commodity1.png" alt="">
                        <div class="money">
                            <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.875 31.3008H27.45C28.275 31.3008 28.975 30.5508 28.975 29.6258C28.975 28.4508 28.7 28.3008 27.9 28.0258L26.875 27.6758V31.3008Z" fill="#fff" />
                                <path d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM13.95 36.05C14.675 36.775 14.675 37.975 13.95 38.7C13.575 39.075 13.1 39.25 12.625 39.25C12.15 39.25 11.675 39.075 11.3 38.7C7.64997 35.05 5.625 30.175 5.625 25C5.625 19.825 7.64997 14.95 11.3 11.3C12.025 10.575 13.225 10.575 13.95 11.3C14.675 12.025 14.675 13.225 13.95 13.95C11 16.9 9.375 20.825 9.375 25C9.375 29.175 11 33.1 13.95 36.05ZM29.125 24.45C31.525 25.3 32.7 26.975 32.7 29.6C32.7 32.6 30.35 35.025 27.425 35.025H26.85V35.475C26.85 36.5 26 37.35 24.975 37.35C23.95 37.35 23.1 36.5 23.1 35.475V35.025H23.025C19.85 35.025 17.25 32.35 17.25 29.075C17.25 28.05 18.1 27.2 19.125 27.2C20.15 27.2 21 28.05 21 29.075C21 30.3 21.9 31.275 23.025 31.275H23.1V26.325L20.85 25.525C18.45 24.675 17.275 23 17.275 20.375C17.275 17.375 19.625 14.95 22.55 14.95H23.125V14.5C23.125 13.475 23.975 12.625 25 12.625C26.025 12.625 26.875 13.475 26.875 14.5V14.95H26.95C30.125 14.95 32.725 17.625 32.725 20.9C32.725 21.925 31.875 22.775 30.85 22.775C29.825 22.775 28.975 21.925 28.975 20.9C28.975 19.675 28.075 18.7 26.95 18.7H26.875V23.65L29.125 24.45ZM38.7 38.7C38.325 39.075 37.85 39.25 37.375 39.25C36.9 39.25 36.425 39.075 36.05 38.7C35.325 37.975 35.325 36.775 36.05 36.05C39 33.1 40.625 29.175 40.625 25C40.625 20.825 39 16.9 36.05 13.95C35.325 13.225 35.325 12.025 36.05 11.3C36.775 10.575 37.975 10.575 38.7 11.3C42.35 14.95 44.375 19.825 44.375 25C44.375 30.175 42.35 35.05 38.7 38.7Z" fill="#fff" />
                                <path d="M21.0498 20.4012C21.0498 21.5762 21.3248 21.7262 22.1248 22.0012L23.1498 22.3512V18.7012H22.5748C21.7248 18.7012 21.0498 19.4762 21.0498 20.4012Z" fill="#fff" />
                            </svg>
                            <p>100</p>
                        </div>
                    </li>
                    <li>
                        <img class="commodity" src="./img/store/commodity1.png" alt="">
                        <div class="money">
                            <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.875 31.3008H27.45C28.275 31.3008 28.975 30.5508 28.975 29.6258C28.975 28.4508 28.7 28.3008 27.9 28.0258L26.875 27.6758V31.3008Z" fill="#fff" />
                                <path d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM13.95 36.05C14.675 36.775 14.675 37.975 13.95 38.7C13.575 39.075 13.1 39.25 12.625 39.25C12.15 39.25 11.675 39.075 11.3 38.7C7.64997 35.05 5.625 30.175 5.625 25C5.625 19.825 7.64997 14.95 11.3 11.3C12.025 10.575 13.225 10.575 13.95 11.3C14.675 12.025 14.675 13.225 13.95 13.95C11 16.9 9.375 20.825 9.375 25C9.375 29.175 11 33.1 13.95 36.05ZM29.125 24.45C31.525 25.3 32.7 26.975 32.7 29.6C32.7 32.6 30.35 35.025 27.425 35.025H26.85V35.475C26.85 36.5 26 37.35 24.975 37.35C23.95 37.35 23.1 36.5 23.1 35.475V35.025H23.025C19.85 35.025 17.25 32.35 17.25 29.075C17.25 28.05 18.1 27.2 19.125 27.2C20.15 27.2 21 28.05 21 29.075C21 30.3 21.9 31.275 23.025 31.275H23.1V26.325L20.85 25.525C18.45 24.675 17.275 23 17.275 20.375C17.275 17.375 19.625 14.95 22.55 14.95H23.125V14.5C23.125 13.475 23.975 12.625 25 12.625C26.025 12.625 26.875 13.475 26.875 14.5V14.95H26.95C30.125 14.95 32.725 17.625 32.725 20.9C32.725 21.925 31.875 22.775 30.85 22.775C29.825 22.775 28.975 21.925 28.975 20.9C28.975 19.675 28.075 18.7 26.95 18.7H26.875V23.65L29.125 24.45ZM38.7 38.7C38.325 39.075 37.85 39.25 37.375 39.25C36.9 39.25 36.425 39.075 36.05 38.7C35.325 37.975 35.325 36.775 36.05 36.05C39 33.1 40.625 29.175 40.625 25C40.625 20.825 39 16.9 36.05 13.95C35.325 13.225 35.325 12.025 36.05 11.3C36.775 10.575 37.975 10.575 38.7 11.3C42.35 14.95 44.375 19.825 44.375 25C44.375 30.175 42.35 35.05 38.7 38.7Z" fill="#fff" />
                                <path d="M21.0498 20.4012C21.0498 21.5762 21.3248 21.7262 22.1248 22.0012L23.1498 22.3512V18.7012H22.5748C21.7248 18.7012 21.0498 19.4762 21.0498 20.4012Z" fill="#fff" />
                            </svg>
                            <p>100</p>
                        </div>
                    </li>
                    <li>
                        <img class="commodity" src="./img/store/commodity1.png" alt="">
                        <div class="money">
                            <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.875 31.3008H27.45C28.275 31.3008 28.975 30.5508 28.975 29.6258C28.975 28.4508 28.7 28.3008 27.9 28.0258L26.875 27.6758V31.3008Z" fill="#fff" />
                                <path d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM13.95 36.05C14.675 36.775 14.675 37.975 13.95 38.7C13.575 39.075 13.1 39.25 12.625 39.25C12.15 39.25 11.675 39.075 11.3 38.7C7.64997 35.05 5.625 30.175 5.625 25C5.625 19.825 7.64997 14.95 11.3 11.3C12.025 10.575 13.225 10.575 13.95 11.3C14.675 12.025 14.675 13.225 13.95 13.95C11 16.9 9.375 20.825 9.375 25C9.375 29.175 11 33.1 13.95 36.05ZM29.125 24.45C31.525 25.3 32.7 26.975 32.7 29.6C32.7 32.6 30.35 35.025 27.425 35.025H26.85V35.475C26.85 36.5 26 37.35 24.975 37.35C23.95 37.35 23.1 36.5 23.1 35.475V35.025H23.025C19.85 35.025 17.25 32.35 17.25 29.075C17.25 28.05 18.1 27.2 19.125 27.2C20.15 27.2 21 28.05 21 29.075C21 30.3 21.9 31.275 23.025 31.275H23.1V26.325L20.85 25.525C18.45 24.675 17.275 23 17.275 20.375C17.275 17.375 19.625 14.95 22.55 14.95H23.125V14.5C23.125 13.475 23.975 12.625 25 12.625C26.025 12.625 26.875 13.475 26.875 14.5V14.95H26.95C30.125 14.95 32.725 17.625 32.725 20.9C32.725 21.925 31.875 22.775 30.85 22.775C29.825 22.775 28.975 21.925 28.975 20.9C28.975 19.675 28.075 18.7 26.95 18.7H26.875V23.65L29.125 24.45ZM38.7 38.7C38.325 39.075 37.85 39.25 37.375 39.25C36.9 39.25 36.425 39.075 36.05 38.7C35.325 37.975 35.325 36.775 36.05 36.05C39 33.1 40.625 29.175 40.625 25C40.625 20.825 39 16.9 36.05 13.95C35.325 13.225 35.325 12.025 36.05 11.3C36.775 10.575 37.975 10.575 38.7 11.3C42.35 14.95 44.375 19.825 44.375 25C44.375 30.175 42.35 35.05 38.7 38.7Z" fill="#fff" />
                                <path d="M21.0498 20.4012C21.0498 21.5762 21.3248 21.7262 22.1248 22.0012L23.1498 22.3512V18.7012H22.5748C21.7248 18.7012 21.0498 19.4762 21.0498 20.4012Z" fill="#fff" />
                            </svg>
                            <p>100</p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>

    </div>

    <!---------------------------------------- lightbox --------------------------------------------->

    <div class="dresss_lightbox dresss_none">
        <div class="dresss">
            <i class="fa-solid fa-xmark"></i>
            <article>

                <div class="dresss_choose">
                    <img class="people_choose" src="/img/store/people1.png" alt="">
                </div>

                <div class="buy_wrapper">
                    <div class="money1">
                        <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.875 31.3008H27.45C28.275 31.3008 28.975 30.5508 28.975 29.6258C28.975 28.4508 28.7 28.3008 27.9 28.0258L26.875 27.6758V31.3008Z" fill="black" />
                            <path d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM13.95 36.05C14.675 36.775 14.675 37.975 13.95 38.7C13.575 39.075 13.1 39.25 12.625 39.25C12.15 39.25 11.675 39.075 11.3 38.7C7.64997 35.05 5.625 30.175 5.625 25C5.625 19.825 7.64997 14.95 11.3 11.3C12.025 10.575 13.225 10.575 13.95 11.3C14.675 12.025 14.675 13.225 13.95 13.95C11 16.9 9.375 20.825 9.375 25C9.375 29.175 11 33.1 13.95 36.05ZM29.125 24.45C31.525 25.3 32.7 26.975 32.7 29.6C32.7 32.6 30.35 35.025 27.425 35.025H26.85V35.475C26.85 36.5 26 37.35 24.975 37.35C23.95 37.35 23.1 36.5 23.1 35.475V35.025H23.025C19.85 35.025 17.25 32.35 17.25 29.075C17.25 28.05 18.1 27.2 19.125 27.2C20.15 27.2 21 28.05 21 29.075C21 30.3 21.9 31.275 23.025 31.275H23.1V26.325L20.85 25.525C18.45 24.675 17.275 23 17.275 20.375C17.275 17.375 19.625 14.95 22.55 14.95H23.125V14.5C23.125 13.475 23.975 12.625 25 12.625C26.025 12.625 26.875 13.475 26.875 14.5V14.95H26.95C30.125 14.95 32.725 17.625 32.725 20.9C32.725 21.925 31.875 22.775 30.85 22.775C29.825 22.775 28.975 21.925 28.975 20.9C28.975 19.675 28.075 18.7 26.95 18.7H26.875V23.65L29.125 24.45ZM38.7 38.7C38.325 39.075 37.85 39.25 37.375 39.25C36.9 39.25 36.425 39.075 36.05 38.7C35.325 37.975 35.325 36.775 36.05 36.05C39 33.1 40.625 29.175 40.625 25C40.625 20.825 39 16.9 36.05 13.95C35.325 13.225 35.325 12.025 36.05 11.3C36.775 10.575 37.975 10.575 38.7 11.3C42.35 14.95 44.375 19.825 44.375 25C44.375 30.175 42.35 35.05 38.7 38.7Z" fill="black" />
                            <path d="M21.0498 20.4012C21.0498 21.5762 21.3248 21.7262 22.1248 22.0012L23.1498 22.3512V18.7012H22.5748C21.7248 18.7012 21.0498 19.4762 21.0498 20.4012Z" fill="black" />
                        </svg>
                        <h2>300</h2>
                    </div>
                    <div class="buy_choose">
                        <input class="send" type="submit" value="取消">
                        <input class="send_check" type="submit" value="購買">
                    </div>
                </div>

            </article>
        </div>
    </div>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="./js/store/store_dress.js"></script>

</body>

</html>