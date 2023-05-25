<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>活動列表</title>

    <link rel="stylesheet" href="./CSS/global.css" />
    <link rel="stylesheet" href="./CSS/diary/diary_new.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
  </head>

  <body>
    <div class="page">
      <div class="header"></div>
      <!-- 用來載入 common.html 裡頭的 header -->
      <div class="activity">
        <span>
          <div class="activity_title">
            <svg
              width="40"
              height="40"
              viewBox="0 0 83 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dd_668_6)">
                <path
                  d="M9 37.5L34.2778 5V23.018L74 23.0556V51.9444H34.2778V70L9 37.5Z"
                  fill="#634921"
                  stroke="#634921"
                  stroke-width="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_dd_668_6"
                  x="0"
                  y="0"
                  width="83"
                  height="83"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_668_6"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_668_6"
                    result="effect2_dropShadow_668_6"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_668_6"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <h1>文章列表</h1>
          </div>
          <!-----主要版面------------------->
          <div class="activity_main">
            <!----左方欄位----------->
            <div class="left">
              <div class="member_photo">
                <img src="./IMG/diary/girl.png" alt="" />
              </div>

              <div class="text_nav">
                <div>個人文章</div>
                <div>會員個人資料</div>
                <div>我的活動</div>
                <div>我的衣櫃</div>
              </div>
            </div>

            <div class="middle">
              <div class="activity_tab">
                <span>
                  <a href="">
                    <h2 class="activity_tab_active">創作列表</h2>
                  </a>
                  <a href="">
                    <h2>收藏</h2>
                  </a>
                </span>
              </div>

              <!-----中間頁面----------->
              <div class="activity_article">
                <div class="pen">
                  <!--編輯頁面-->
                  <i
                    class="fa-solid fa-pen-to-square"
                    style="color: #665448"
                  ></i>
                  <i
                    class="fa-solid fa-circle-exclamation"
                    style="color: #665448"
                  ></i>
                </div>

                <div class="activity_article_cards">
                  <div class="cards_top">
                    <!------最上方--------->
                    <div class="middletop">
                      <div class="big_girl">
                        <img src="./IMG/diary/big_girl.png" alt="" />
                      </div>
                      <div class="idsign">
                        <h1>e44444444</h1>
                        <p id="username">ID:44444</p>
                        <p id="sign">夢想這條路跪著也要走完</p>
                      </div>
                    </div>

                    <!--搜尋框框-->
                    <form class="search">
                      <input
                        class="search-bar"
                        type="text"
                        name="search"
                        id="search"
                        placeholder="輸入文字內容"
                      />
                      <button class="search-btn">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </form>
                  </div>
                  <?php 
                    include('connect.php');
                    $sql = "SELECT * FROM article where memberID = 1 order by articleTime desc";

                    $statement = $pdo->prepare( $sql );
                    $statement->execute();
                    $data = $statement->fetchAll();
                    foreach($data as $key => $value){
                  ?>
                    <div class="cards_content">
                      <div class="card_user">
                        <div class="card_article">
                          <img src="./IMG/diary/big_girl.png" alt="" />
                          <h2><?= $value["articleTitle"];?></h2>
                        </div>
                        <span class="more_action">...</span>
                      </div>
                        
                      <div class="card_text">
                        <div class="text_title">
                          <p>
                          <?= $value["articleContent"];?>
                          </p>
                        </div>
                      <div class="text_content"></div>
                    </div>
                    
                    
                    <!-- <div class="card_pics">
                                    </div> -->

                    <div class="interact">
                      <div class="icon">
                        <a href="#"
                          ><i class="fa-regular fa-heart"></i><span>66</span></a
                        >
                        <a href="#"
                          ><i class="fa-regular fa-comment-dots"></i
                          ><span>7</span></a
                        >
                        <a href="#"><i class="fa-regular fa-bookmark"></i></a>
                      </div>
                      <button
                        class="moreButton"
                        style="
                          background-color: #90a349;
                          color: white;
                          border-radius: 30px;
                        "
                      >
                        Read more
                      </button>
                    </div>
                  </div>
                  <?php } ?>
                  <div class="cards_content">
                    <div class="card_user">
                      <div class="card_article">
                        <img src="./IMG/diary/big_girl.png" alt="" />
                        <h2>文章標題</h2>
                      </div>
                      <span class="more_action">...</span>
                    </div>

                    <div class="card_text">
                      <div class="text_title">
                        <p>
                          內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文
                        </p>
                      </div>

                      <div class="text_content"></div>
                    </div>
                    <!-- <div class="card_pics">
                                    </div> -->

                    <div class="interact">
                      <div class="icon">
                        <a href="#"
                          ><i class="fa-regular fa-heart"></i><span>66</span></a
                        >
                        <a href="#"
                          ><i class="fa-regular fa-comment-dots"></i
                          ><span>7</span></a
                        >
                        <a href="#"><i class="fa-regular fa-bookmark"></i></a>
                      </div>
                      <button
                        class="moreButton"
                        style="
                          background-color: #90a349;
                          color: white;
                          border-radius: 30px;
                        "
                      >
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--右側欄位--->
            <div class="right">
              <div class="calendar">
                <div class="title">
                  <h1
                    class="main_color"
                    id="calendar-title"
                    style="text-align: center"
                  >
                    Month
                  </h1>
                  <h2
                    class="main_color small"
                    id="calendar-year"
                    style="text-align: center"
                  >
                    Year
                  </h2>
                  <a href="" id="prev"
                    ><i class="fa-solid fa-angle-left"></i> Prev Month</a
                  >
                  <a href="" id="next" style="float: right"
                    >Next Month <i class="fa-solid fa-angle-right"></i
                  ></a>
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
                    <ul id="days"></ul>
                  </div>
                </div>
              </div>
              <div class="my_activity">
                <h3>我的文章列表</h3>
                <p>
                  6月1日<br />
                  文章標題
                </p>
                <section>
                  沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我沒人約我
                </section>
              </div>

              <div class="my_activity">
                <h3>廣告</h3>
                <a href=""><img src="./IMG/activity/ad1.jpg" alt="" /></a>
                <a href=""><img src="./IMG/activity/ad2.jpg" alt="" /></a>
              </div>
            </div>
          </div>
        </span>
      </div>
      <div class="footer"></div>
      <!-- 用來載入 common.html 裡頭的 footer -->
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
      $(function () {
        $(".header").load("common.html .header>div");
        $(".footer").load("common.html .footer>div");
      });

      var month_olympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      var month_normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      var month_name = [
        "January",
        "Febrary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Auguest",
        "September",
        "October",
        "November",
        "December",
      ];
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
        return tmpDate.getDay();
      }
      function daysMonth(month, year) {
        var tmp = year % 4;
        if (tmp == 0) {
          return month_olympic[month];
        } else {
          return month_normal[month];
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
          if (
            (i < my_day &&
              my_year == my_date.getFullYear() &&
              my_month == my_date.getMonth()) ||
            my_year < my_date.getFullYear() ||
            (my_year == my_date.getFullYear() && my_month < my_date.getMonth())
          ) {
            myclass = " class='light'"; //日期在今天之前時，以淺色字表示
          } else if (
            i == my_day &&
            my_year == my_date.getFullYear() &&
            my_month == my_date.getMonth()
          ) {
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
      prev.onclick = function (e) {
        e.preventDefault();
        my_month--;
        if (my_month < 0) {
          my_year--;
          my_month = 11;
        }
        refreshDate();
      };
      next.onclick = function (e) {
        e.preventDefault();
        my_month++;
        if (my_month > 11) {
          my_year++;
          my_month = 0;
        }
        refreshDate();
      };
    </script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
      $(function () {
        $(".header").load("common.html .header>div");
        $(".footer").load("common.html .footer>div");
      });
    </script>
  </body>
</html>
