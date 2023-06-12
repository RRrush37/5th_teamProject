////////////////////////////////////////
/////////////活動取得函式////////////////
////////////////////////////////////////
import * as picture from "../../JS/member_picture.js";

export function get_card() {
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
                                            <pan class="thetime1" style="display:none">${item.activityStartDate}</pan><pan class="thetime2" style="display:none">${item.activityEndDate}</pan>
                                            <pan class="location" style="display:none">${item.activityPlace}</pan>
                                            ${item.activityNote}
                                        </div>
                                    </div>
                                </div>
                                <div class="cards_actions">
                                    <div class="interact">
                                        <a href="#"><i class="fa-regular fa-heart ${item.item_id}"></i><span>${item.thumbUpNum}</span></a>
                                        <a href="#"><i class="fa-regular fa-comment-dots"></i><span class="howmany">${item.commentNum}</span></a>
                                    </div>
                                    <div class="join">
                                        <h3>參加人數：${item.joinNum
      }/<pan class="activityLimit">${item.activityLimit}</pan></h3>
                                        <span class="iwantjoin color-button">了解更多</span>
                                    </div>
                                </div>
                            </div>
    `;
        });

        let activity_article =
          document.getElementsByClassName("activity_article")[0];
        activity_article.innerHTML = card_html;

        get_lightbox();

        let activity_article_cards = document.getElementsByClassName("activity_article_cards");
        for ( let j = 0 ; j < activity_article_cards.length ; j++ ) {
          let activityID = activity_article_cards[j].getAttribute("data-id")

          // ================================ member img ==============================
          let user_img = activity_article_cards[j].querySelector(".user");
          picture.getActivityMemberPicture(activityID, user_img) ;
        }
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
            <img class="user" src="IMG/people/member1/${response[i].memberPicture}" alt="" width="60">
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
    },
    error(xhr, status, error) {
      alert("error: " + error);
    },
  });
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

// 燈箱出現消失

const get_lightbox = () => {
  let lightbox_background = document.getElementsByClassName(
    "lightbox_background"
  )[0];
  let activity_readmore =
    document.getElementsByClassName("activity_readmore")[0];
  let activity_article_cards = document.getElementsByClassName(
    "activity_article_cards"
  );

  const render_popup = (response) => {
    // console.log(response);
    let post_time_display = convertTimeToHumanReadable(response.activityTime);
    let spanClass1 = "-none";
    let ageGreaterThan18 = "";
    if (response.con_ageGreaterThan18 === 1) {
      ageGreaterThan18 = "須年滿18";
      spanClass1 = "";
    }

    let spanClass2 = "-none";
    let motorLicense = "";
    if (response.con_motorLicense === 1) {
      motorLicense = "須有機車駕照";
      spanClass2 = "";
    }
    let spanClass3 = "-none";
    let onlyFemale = "";
    if (response.con_onlyFemale === 1) {
      onlyFemale = "限女";
      spanClass3 = "";
    }
    let spanClass4 = "-none";
    let onlyMale = "";
    if (response.con_onlyMale === 1) {
      onlyMale = "限男";
      spanClass4 = "";
    }
    activity_readmore.innerHTML = `<div class="activity_readmore_wrap ">
                    <i class="fa-solid fa-xmark"></i>
                    <div class="activity_inf">
                        <div class="article_top_left">
                            <img class="user" id="activityOrganiserID_user" src="IMG/activity/lonely.png" alt="" width="60">
                            <div class="user_identity">
                                <p>${response.organiserName}</p>
                                <p>${response.activityOrganiserID}</p>
                            </div>
                        </div>
                        <span class="topic">${response.activityTopic}</span>
                    </div>
                    <div class="activity_content">
                        <h2>${response.activityName}</h2>
                        <h3>${post_time_display}發布</h3>
                        <p class="inf">活動時間:${response.activityStartDate
      }到${response.activityEndDate}</p>
                        <p class="inf">活動地點:<pan class="location">${response.activityPlace
      }</pan></p>
                        <p>${response.activityNote}</p>
                        <ul>
                            <li class="${spanClass1}"><span class="topic " >${ageGreaterThan18}</span></li>
                            <li class="${spanClass2}"><span class="topic">${motorLicense}</span></li>
                            <li class="${spanClass3}"><span class="topic">${onlyFemale}</span></li>
                            <li class="${spanClass4}"><span class="topic ">${onlyMale}</span></li>
                        </ul>
                    </div>
                    <div class="article_actions">
                        <div class="interact_lightbox">
                            <i id="like" style="color:${response.isThumbUp ? "red" : ""
      }" class="fa-regular fa-heart"></i><span id="likeNum">${response.thumbUpNum
      }</span>
                            <i class="fa-regular fa-comment-dots"></i><span class="howmany">${response.commentNum
      }</span>
                            <!-- <a href="#"><i class="fa-regular fa-bookmark"></i></a> -->
                        </div>
                        <div class="join">
                            <h3>參加人數：<pan id="joinNum">${response.joinNum
      }</pan>/${response.activityLimit}</h3>
                            <!--input type="checkbox" id="iwantjoin_lightbox"-->
                            <div for="iwantjoin_lightbox" class="iwantjoin color-button ${response.hasJoined ? "joined" : ""
      }" id="join" >${response.hasJoined ? "取消參加" : "我要參加"
      }</div>
                        </div>
                    </div>
                    <div class="activity_comment">
                        <h3>共<span class="howmany">${response.commentNum
      }</span>則留言</h3>
                        <div class="activity_commentbox">
                        </div>
                    </div>
                </div>
                <div class="activity_myaction">
                    <img class="user" id="Main_user" src="IMG/activity/lonely.png" alt="" width="40">
                    <div class="comment_keyin">
                        <textarea name="" id="comment" cols="30" rows="1" placeholder="留言..."></textarea>
                        <!-- <div class="paste">
                            <i class="fa-regular fa-image"></i>
                            <i class="fa-regular fa-face-laugh-squint"></i>
                        </div> -->
                    </div>
                    <button type="submit" class="comment_send selector_submit" id="comment_send" =>送出</button>
                    <div class="actions">
                        <a href="#"><i  id ="like2" style="color:${response.isThumbUp ? "red" : ""
      }" class="fa-regular fa-heart"></i></a>
                        <!-- <a href="#"><i class="fa-regular fa-bookmark"></i></a> -->
                        <!-- <span class="more_action">‧‧‧</span> -->
                    </div>
                </div>
                `;

    // user img 更新============================================================
    let Main_user = document.getElementById("Main_user");
    picture.getMemberPicture(Main_user);
    console.log(response.activityID); 
    let activityOrganiserID_user = document.getElementById("activityOrganiserID_user");
    picture.getActivityMemberPicture(response.activityID, activityOrganiserID_user) ;
    // user img 更新============================================================
    document.getElementById("join").addEventListener("click", () => {
      $.ajax({
        url: "php/iWantJoin.php",
        method: "post",
        dataType: "json",
        data: { activityID: response.activityID },
        success: (innerResponse) => {
          // alert(innerResponse);
          if (innerResponse) {
            document.getElementById("join").innerHTML = "取消參加";
            document.getElementById("join").classList.add("joined");
          } else {
            document.getElementById("join").innerHTML = "我要參加";
            document.getElementById("join").classList.remove("joined");
          }
          $.ajax({
            url: "php/getActivityJoinNum.php",
            method: "post",
            dataType: "json",
            data: { activityID: response.activityID },
            success: (response) => {
              if (response == -1) {
                alert("請先登入");
              } else {
                document.getElementById("joinNum").innerHTML = response;
                get_card();
              }
            },
            error: (xhr, status, error) => {
              alert("error: " + error);
            },
          });
        },
        error: (xhr, status, error) => {
          alert("error: " + error);
        },
      });
    });
    document.getElementById("like").addEventListener("click", () => {
      // alert(1)
      $.ajax({
        url: "php/likeActivity.php",
        method: "post",
        dataType: "json",
        data: { activityID: response.activityID },
        success: (innerResponse) => {
          if (innerResponse) {
            document.getElementById("like").style.color = "red";
            document.getElementById("like2").style.color = "red";

          } else {
            document.getElementById("like").style.color = "";
            document.getElementById("like2").style.color = "";

          }
          $.ajax({
            url: "php/countActivityLike.php",
            method: "post",
            dataType: "json",
            data: { activityID: response.activityID },
            success: (innerResponse) => {
              document.getElementById("likeNum").innerHTML = innerResponse;
              get_card();
            },
            error: (xhr, status, error) => {
              alert("error: " + error);
            },
          });
        },
        error: (xhr, status, error) => {
          alert("error: " + error);
        },
      });
    });
    document.getElementById("like2").addEventListener("click", () => {
      // alert(1)
      $.ajax({
        url: "php/likeActivity.php",
        method: "post",
        dataType: "json",
        data: { activityID: response.activityID },
        success: (innerResponse) => {
          if (innerResponse) {
            document.getElementById("like2").style.color = "red";
            document.getElementById("like").style.color = "red";

          } else {
            document.getElementById("like2").style.color = "";
            document.getElementById("like").style.color = "";

          }
          $.ajax({
            url: "php/countActivityLike.php",
            method: "post",
            dataType: "json",
            data: { activityID: response.activityID },
            success: (innerResponse) => {
              document.getElementById("likeNum").innerHTML = innerResponse;
              get_card();
            },
            error: (xhr, status, error) => {
              alert("error: " + error);
            },
          });
        },
        error: (xhr, status, error) => {
          alert("error: " + error);
        },
      });
    });

    lightbox_background.classList.remove("-none");
    let fa_xmark = document.getElementsByClassName("fa-xmark")[0];
    fa_xmark.addEventListener("click", function () {
      lightbox_background.classList.add("-none");
    });
    lightbox_background.addEventListener("click", function () {
      this.classList.add("-none");
    });

    lightbox_background
      .querySelector(".activity_readmore")
      .addEventListener("click", function (e) {
        e.stopPropagation();
      });
  };

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("activity_article_cards")) {
      const current_id = e.target.getAttribute("data-id");
      $.ajax({
        url: "php/activityList.php",
        method: "post",
        data: {},
        dataType: "json",
        success: (response) => {
          if (response) {
            // const all_card = JSON.parse(response);
            const all_card = response;

            for (let index = 0; index < all_card.length; index++) {
              const card = all_card[index];
              if (card.activityID === Number(current_id)) {
                render_popup(card);
                get_comment_card(card);
              }
            }
            let comment = document.getElementById("comment");
            let comment_send = document.getElementById("comment_send");
            comment_send.addEventListener("click", function (e) {
              e.preventDefault();
              if (comment.value != "") {
                let comment_content = comment.value;
                comment.value = "";

                $.ajax({
                  url: "php/activityComment.php",
                  method: "post",
                  dataType: "text",
                  data: {
                    commentContent: comment_content,
                    activityId: current_id,
                  },
                  success: (res) => {
                    if (res == -1) {
                      alert("請先登入");
                    } else if (res == 1) {
                      for (let index = 0; index < all_card.length; index++) {
                        let card = all_card[index];
                        if (card.activityID === Number(current_id)) {
                          get_comment_card(card);
                          let activity_readmore_wrap =
                            document.getElementsByClassName(
                              "activity_readmore_wrap"
                            )[0];
                          setTimeout(() => {
                            activity_readmore_wrap.scrollTop =
                              activity_readmore_wrap.scrollHeight;
                          }, 100);
                          let commentCount =
                            document.getElementsByClassName("howmany");
                          for (let i = 0; i < commentCount.length; i++) {
                            let howmany = parseInt(commentCount[i].innerHTML);
                            howmany++;
                            commentCount[i].innerHTML = howmany;
                          }
                        }
                      }
                    } else {
                      alert("發布失敗");
                    }
                  },
                  error: (xhr, status, error) => {
                    console.log("error:" + error);
                    alert("error:" + error);
                  },
                });
              } else {
                alert("請輸入留言");
              }
            });
            document.addEventListener("keyup", function (e) {
              if (e.key == "Enter") {
                comment_send.click();
              }
            });
          }
        },
        error: (xhr, status, error) => {
          alert("error:" + error);
        },
      });
    }
  });
};