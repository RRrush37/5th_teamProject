<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>揪活動</title>
    <link rel="stylesheet" href="css/activity/activity.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <div class="page">
        <?php require("common.php"); ?>
        <div class="activity">
            <span>
                <div class="activity_title">
                    <svg width="40" height="40" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    </svg>
                    <h1>揪夥伴</h1>
                </div>
                <div class="activity_main">
                    <div class="left">
                        <h2>活動主題篩選</h2>
                        <label for="count">
                            <p>人數：</p>
                            <select name="count" id="count">
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </label>
                        <br>
                        <p>主題：</p>
                        <br>
                        <label for="outdoor"><input type="checkbox" id="outdoor" name="">戶外</label>
                        <label for="leisure"><input type="checkbox" id="leisure" name="">休閒</label>
                        <label for="indoor"><input type="checkbox" id="indoor" name="">室內</label>
                        <label for="puzzle"><input type="checkbox" id="puzzle" name="">益智</label>
                        <label for="handcraft"><input type="checkbox" id="handcraft" name="">手作</label>
                        <label for="chill"><input type="checkbox" id="chill" name="">夜生活</label>
                        <br>
                        <label for="count">
                            <p>時長：</p>
                            <select name="count" id="count">
                                <option value="1">一天內</option>
                                <option value="2">二天</option>
                                <option value="3">三天</option>
                                <option value="4">四天</option>
                                <option value="5">五天</option>
                            </select>
                        </label>
                        <br>
                        <p>出發日期：</p>
                        <br>
                        <label for="aweek"><input type="radio" id="aweek" name="depart">一周內</label>
                        <br>
                        <label for="amonth"><input type="radio" id="amonth" name="depart">一周～一個月</label>
                        <br>
                        <label for="months"><input type="radio" id="months" name="depart">一個月以上</label>
                        <br>
                        <label for="place">
                            <p>地點：</p>
                            <select name="place" id="place">
                                <option value="">北部</option>
                                <option value="">中部</option>
                                <option value="">南部</option>
                                <option value="">東部</option>
                                <option value="">離島</option>
                            </select>
                            <br>
                            <p>特殊條件：</p>
                            <br>
                            <label for="chr_restrict"><input type="checkbox" id="chr_restrict" name="">魅力值不得低於70</label>
                            <br>
                            <label for="boyonly"><input type="checkbox" id="boyonly" name="">限男</label>
                            <br>
                            <label for="girlonly"><input type="checkbox" id="girlonly" name="">限女</label>
                            <br>
                            <label for="licence"><input type="checkbox" id="licence" name="">須有機車駕照</label>
                            <br>
                            <label for="adult"><input type="checkbox" id="adult" name="">須年滿18</label>
                            <br>
                            <button type="submit">確認</button>
                    </div>
                    <div class="middle">
                        <div class="activity_tab">
                            <span>
                                <a href="">
                                    <h2 class="activity_tab_active">最新</h2>
                                </a>
                                <a href="">
                                    <h2>熱門</h2>
                                </a>
                                <a href="">
                                    <h2>好友</h2>
                                </a>
                            </span>
                            <a href="#">
                                <input type="checkbox" id="displayAScalendar">
                                <label for="displayAScalendar">日曆顯示</label>
                            </a>
                        </div>
                        <div class="activity_article">
                            <div class="activity_article_cards">
                                <div class="cards_top">
                                    <span class="topic">好邊緣</span>
                                    <section class="post_time">2小時前發布</section>
                                    <span class="more_action">...</span>>
                                </div>
                                <div class="cards_content">
                                    <div class="card_user"></div>
                                    <div class="card_text">
                                        <div class="text_title"></div>
                                        <div class="text_content"></div>
                                    </div>
                                    <div class="card_pics"></div>
                                </div>
                                <div class="cards_actions">
                                    <div class="interact">
                                        <a href="#"><i class="fa-regular fa-heart"></i><span>66</span></a>
                                        <a href="#"><i class="fa-regular fa-comment-dots"></i><span>7</span></a>
                                        <a href="#"><i class="fa-regular fa-bookmark"></i></a>
                                    </div>
                                    <div class="join">
                                        <h3>參加人數：2/5</h3>
                                        <input type="checkbox" id>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="calendar">
                            <div class="title">
                                <h1 class="main_color" id="calendar-title" style="text-align: center;">Month</h1>
                                <h2 class="main_color small" id="calendar-year" style="text-align: center;">Year</h2>
                                <a href="" id="prev"><i class="fa-solid fa-angle-left"></i> Prev Month</a>
                                <a href="" id="next" style="float: right;">Next Month <i class="fa-solid fa-angle-right"></i></a>
                            </div>
                            <div class="body">
                                <div class="dark body-list">
                                    <ul class="weekdays">
                                        <li>MON</li>
                                        <li>TUE</li>
                                        <li>WED</li>
                                        <li>THU</li>
                                        <li>FRI</li>
                                        <li>SAT</li>
                                        <li>SUN</li>
                                    </ul>
                                </div>
                                <div class="dark body-list">
                                    <ul id="days">
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="my_activity">
                            <h2>我的活動</h2>
                            <p>6月1日<br>
                                活動標題</p>
                            <section>
                                沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我
                            </section>
                            <a href="#">管理我的活動</a>
                        </div>
                        <div class="my_activity">
                            <h3>廣告</h3>
                            <a href=""><img src="./img/activity/ad1.jpg" alt=""></a>
                            <a href=""><img src="./img/activity/ad2.jpg" alt=""></a>
                        </div>
                    </div>
                </div>
            </span>
        </div>
        <div class="footer"></div> <!-- 用來載入 common.html 裡頭的 footer -->
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
        var month_olympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var month_normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var month_name = ["January", "Febrary", "March", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December"];
        var holder = document.getElementById("days");
        var prev = document.getElementById("prev");
        var next = document.getElementById("next");
        var ctitle = document.getElementById("calendar-title");
        var cyear = document.getElementById("calendar-year");
        var my_date = new Date();
        var my_year = my_date.getFullYear();
        var my_month = my_date.getMonth();
        var my_day = my_date.getDate();

        function dayStart(month, year) {
            var tmpDate = new Date(year, month, 1);
            return (tmpDate.getDay());
        }

        function daysMonth(month, year) {
            var tmp = year % 4;
            if (tmp == 0) {
                return (month_olympic[month]);
            } else {
                return (month_normal[month]);
            }
        }

        function refreshDate() {
            var str = "";
            var totalDay = daysMonth(my_month, my_year); //取得該月總天數
            var firstDay = dayStart(my_month, my_year); //取得該月第一天是星期幾
            var myclass;
            for (var i = 1; i < firstDay; i++) {
                str += "<li></li>"; //為起始日之前的日期創造空白節點
            }
            for (var i = 1; i <= totalDay; i++) {
                if ((i < my_day && my_year == my_date.getFullYear() && my_month == my_date.getMonth()) || my_year < my_date.getFullYear() || (my_year == my_date.getFullYear() && my_month < my_date.getMonth())) {
                    myclass = " class='light'"; //日期在今天之前時，以淺色字表示
                } else if (i == my_day && my_year == my_date.getFullYear() && my_month == my_date.getMonth()) {
                    myclass = " class='main_color todaybox'"; //當天顯示
                } else {
                    myclass = " class='dark'"; //今天之後，深色字體
                }
                str += "<li" + myclass + ">" + i + "</li>"; //日期節點
            }
            holder.innerHTML = str; //設置日期顯示
            ctitle.innerHTML = month_name[my_month]; //設置英文月份顯示
            cyear.innerHTML = my_year; //設置年分顯示
        }
        refreshDate(); //執行
        prev.onclick = function(e) {
            e.preventDefault();
            my_month--;
            if (my_month < 0) {
                my_year--;
                my_month = 11;
            }
            refreshDate();
        }
        next.onclick = function(e) {
            e.preventDefault();
            my_month++;
            if (my_month > 11) {
                my_year++;
                my_month = 0;
            }
            refreshDate();
        }
    </script>

</body>

</html>