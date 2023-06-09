////////////////////////////////////////
/////////////活動取得函式////////////////
////////////////////////////////////////

function get_card() {
  // let cards = JSON.parse(localStorage.getItem("cards"));
  $.ajax({
    url: "php/activityList.php",
    method: "post",
    dataType: "json",
    data: {},
    success: (response) => {
      if (response) {
        // console.log(response);
        let card_html = "";
        response.reverse().forEach(function (item, i) {
          // [{}, {}]
          // console.log(item);。
          let post_time_display = convertTimeToHumanReadable(item.activityTime);
          card_html += `
                            <div class="activity_article_cards " data-id="${item.activityID}">
                                <div class="cards_top">
                                    <div class="cards_top_left">
                                        <span class="topic">${item.activityTopic}</span>
                                        <section class="post_time">${post_time_display}發布</section>
                                    </div>
                                </div>
                                <div class="cards_content">
                                    <div class="card_user"><img class="user" src="IMG/activity/lonely.png" alt=""
                                            width="60">
                                    </div>
                                    <div class="card_text">
                                        <div class="text_title">
                                            <h2>${item.activityName}</h2>
                                        </div>
                                        <div class="text_content">
                                            ${item.activityNote}
                                        </div>
                                    </div>
                                </div>
                                <div class="cards_actions">
                                    <div class="interact">
                                        <a href="#"><i class="fa-regular fa-heart ${item.item_id}"></i><span>66</span></a>
                                        <a href="#"><i class="fa-regular fa-comment-dots"></i><span>${}</span></a>
                                    </div>
                                    <div class="join">
                                        <h3>參加人數：2/${item.activityLimit}</h3>
                                        <button type="submit" class="iwantjoin color-button">我要參加</button>
                                    </div>
                                </div>
                            </div>
    `;
        });

        let activity_article =
          document.getElementsByClassName("activity_article")[0];
        activity_article.innerHTML = card_html;

        get_lightbox();
      }
    },
    error: (xhr, status, error) => {
      alert("error:" + error);
    },
  });
}

////////////////////////////////////////
/////////////留言取得函式////////////////
////////////////////////////////////////

function get_comment_card(card) {
  //   let comment_cards = JSON.parse(localStorage.getItem("comment_cards"));
  //   if (comment_cards) {
  //     let comment_cards1 = comment_cards.filter((item) => {
  //       if (card.item_id === item.item_id) {
  //         return item;
  //       }
  //   console.log(card);
  //   //     });
  //   alert(card.activityID);
  $.ajax({
    url: "php/loadActivityComment.php",
    method: "post",
    dataType: "json",
    data: { articleID: card.activityID },
    success: (response) => {
      let str = "";
      for (let i = 0; i < response.length; i++) {
        str += `<div class="comment_card">
            <!-- <span class="more_action">‧‧‧</span> -->
            <img class="user" src="./IMG/activity/lonely.png" alt="" width="60">
            <div class="comment_text">
                <h2>${response[i].name}</h2>
                <p>${response[i].content}</p>
                <h3>B${i + 1} ‧ ${response[i].time}</h3>
            </div>
        </div>`;
      }
      let activity_commentbox = document.getElementsByClassName(
        "activity_commentbox"
      )[0];
      activity_commentbox.innerHTML = str;
      activity_commentbox.scrollTop = activity_commentbox.scrollHeight;
    },
    error(xhr, status, error) {
      alert("error: " + error);
    },
  });

  // let comment_cards1 = [];
  // for (let j = 0; j < comment_cards.length; j++) {
  //     if (card.item_id === comment_cards[j].item_id) {
  //         comment_cards1.push(comment_cards[j]);
  //     }
  // }

  //   let comment_card_html = "";
  //   let howmany1 = document.getElementsByClassName("howmany")[0];
  //   let howmany2 = document.getElementsByClassName("howmany")[1];
  //   howmany1.innerHTML = comment_cards1.length;
  //   howmany2.innerHTML = comment_cards1.length;

  //   comment_cards1.forEach(function (item, i) {
  //     // [{}, {}]
  //     let post_time_display = convertTimeToHumanReadable(item.post_time);
  //     comment_card_html += `
  //                         <div class="comment_card">
  //                             <!-- <span class="more_action">‧‧‧</span> -->
  //                             <img class="user" src="./IMG/activity/lonely.png" alt="" width="60">
  //                             <div class="comment_text">
  //                                 <h2>暱稱</h2>
  //                                 <p>${item.comment_content}</p>
  //                                 <h3>B${i + 1} ‧ ${post_time_display}</h3>
  //                             </div>
  //                         </div>
  //     `;
  //   });

  // let activity_commentbox = document.getElementsByClassName(
  //   "activity_commentbox"
  // )[0];

  //   activity_commentbox.innerHTML = comment_card_html;
}

////////////////////////////////////////
/////////////時間轉換函式////////////////
////////////////////////////////////////

// 用毫秒表示分鐘、小時、天、周、月
let minute = 1000 * 60;
let hour = minute * 60;
let day = hour * 24;
let week = day * 7;
let month = day * 30;

// 傳入時間格式或時間戳，這裡傳入的時間格式: 2022-08-05T08:17:14.000+00:00
function convertTimeToHumanReadable(dateTime) {
  // 取得當前時間並轉換為時間戳，方便計算
  let timestamp_current = new Date().getTime();

  // 將傳入的時間格式字串解析為Date對象
  let _date = new Date(dateTime);

  // 將Date對象轉換為時間戳，方便計算
  let timestamp_input = _date.getTime();

  // 計算當前時間與傳入的時間之間相差的時間戳
  let timestamp_diff = timestamp_current - timestamp_input;

  // 計算時間差共有多少個分鐘
  let minC = timestamp_diff / minute;
  // 計算時間差共有多少個小時
  let hourC = timestamp_diff / hour;
  // 計算時間差共有多少個天
  let dayC = timestamp_diff / day;
  // 計算時間差共有多少個周
  let weekC = timestamp_diff / week;
  // 計算時間差共有多少個月
  let monthC = timestamp_diff / month;

  if (monthC >= 1 && monthC < 4) {
    return parseInt(monthC) + "月前";
  } else if (weekC >= 1 && weekC < 4) {
    return parseInt(weekC) + "周前";
  } else if (dayC >= 1 && dayC < 7) {
    return parseInt(dayC) + "天前";
  } else if (hourC >= 1 && hourC < 24) {
    return parseInt(hourC) + "小時前";
  } else if (minC >= 1 && minC < 60) {
    return parseInt(minC) + "分鐘前";
  } else if (timestamp_diff >= 0 && timestamp_diff <= minute) {
    // 時間差大於0並且小於1分鐘
    return "剛剛";
  } else {
    return (
      _date.getFullYear() +
      "年" +
      _date.getMonth() +
      "月" +
      _date.getDate() +
      "日"
    );
  }
}

////////////////////////////////////////
/////////////////月曆///////////////////
////////////////////////////////////////

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
// more action

let more_action = document.getElementsByClassName("more_action");
let more_action_list = document.getElementsByClassName("more_action_list");
let list = document.getElementsByClassName("list");

for (let k = 0; k < more_action.length; k++) {
  more_action[k].addEventListener("click", function (e) {
    e.stopPropagation();
    for (let m = 0; m < list.length; m++) {
      list[m].classList.remove("-none");
    }
  });
}
for (let n = 0; n < more_action_list.length; n++) {
  more_action_list[n].addEventListener("click", function (e) {
    e.stopPropagation();
    for (let p = 0; p < list.length; p++) {
      list[p].classList.add("-none");
    }
  });
}
