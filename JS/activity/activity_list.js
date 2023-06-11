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
                            <img class="user" src="IMG/activity/lonely.png" alt="" width="60">
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
                        <p class="inf">活動時間:${response.activityStartDate}到${response.activityEndDate}</p>
                        <p class="inf">活動地點:<pan class="location">${response.activityPlace}</pan></p>
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
                            <i class="fa-regular fa-heart"></i><span>${response.thumbUpNum}</span>
                            <i class="fa-regular fa-comment-dots"></i><span class="howmany">${response.commentNum}</span>
                            <!-- <a href="#"><i class="fa-regular fa-bookmark"></i></a> -->
                        </div>
                        <div class="join">
                            <h3>參加人數：2/${response.activityLimit}</h3>
                            <input type="checkbox" id="iwantjoin_lightbox">
                            <label for="iwantjoin_lightbox" class="iwantjoin color-button">我要參加</label>
                        </div>
                    </div>
                    <div class="activity_comment">
                        <h3>共<span class="howmany">${response.commentNum}</span>則留言</h3>
                        <div class="activity_commentbox">
                        </div>
                    </div>
                </div>
                <div class="activity_myaction">
                    <img class="user" src="IMG/activity/lonely.png" alt="" width="40">
                    <div class="comment_keyin">
                        <textarea name="" id="comment" cols="30" rows="1" placeholder="留言..."></textarea>
                        <!-- <div class="paste">
                            <i class="fa-regular fa-image"></i>
                            <i class="fa-regular fa-face-laugh-squint"></i>
                        </div> -->
                    </div>
                    <button type="submit" class="comment_send selector_submit" id="comment_send" =>送出</button>
                    <div class="actions">
                        <a href="#"><i class="fa-regular fa-heart"></i></a>
                        <!-- <a href="#"><i class="fa-regular fa-bookmark"></i></a> -->
                        <!-- <span class="more_action">‧‧‧</span> -->
                    </div>
                </div>
                `;

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
                          let activity_readmore_wrap = document.getElementsByClassName("activity_readmore_wrap")[0];
                          setTimeout(() => {
                            activity_readmore_wrap.scrollTop = activity_readmore_wrap.scrollHeight;
                          }, 100);
                          let commentCount = document.getElementsByClassName("howmany");
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
            document.addEventListener("keyup",function(e){
              if(e.key=="Enter"){
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

//篩選器
let countFilter = "0";
let locFilter = "0";
let durFilter = "0";
let topicFilter1 = document.getElementsByClassName("byebye");
let topicFilter2 = [...topicFilter1];


let fromnowon = document.getElementsByName("depart");
let fromnowonValue = "";

window.document.addEventListener("click", function (e) {

  if (e.target.classList.contains("left"))
    for (let i = 0; i < fromnowon.length; i++) {
      fromnowon[i].checked = false;
      if (!fromnowon[i].checked) {

      }
    }
  fromnowonValue = "";
  applyFilters();

});


$(fromnowon).click((e) => {
  e.stopPropagation();
  for (let i = 0; i < fromnowon.length; i++) {
    if (fromnowon[i].checked) {
      fromnowonValue = fromnowon[i].value;
      break;
    }
  }
  applyFilters();
});




$("#count").change(() => {
  countFilter = document.getElementById("count").value;
  applyFilters();
});

$(".byebye").click(() => {
  let topicFilter = [];
  topicFilter2.forEach((e) => {
    if (e.checked) {
      topicFilter.push(e.value);
    }
  });
  applyFilters();
});

$("#during").change(() => {
  durFilter = document.getElementById("during").value;
  applyFilters();
});

$("#place").change(() => {
  locFilter = document.getElementById("place").value;
  applyFilters();
});

function applyFilters() {
  let activity_article_cards = document.getElementsByClassName("activity_article_cards");

  if (countFilter === "0" && !hasCheckedTopics() && locFilter === "0" && durFilter === "0" && fromnowonValue === "") {
    showAllCards(activity_article_cards);
    return;
  }

  for (let i = 0; i < activity_article_cards.length; i++) {
    let activityCard = activity_article_cards[i];
    let activityCount = activityCard.querySelector(".activityLimit").innerHTML;
    let topic = activityCard.querySelector(".topic").innerHTML;
    let location = activityCard.querySelector(".location").innerHTML;
    let startDate = activityCard.querySelector('.thetime1').innerHTML;
    startDate = new Date(startDate);
    let endDate = activityCard.querySelector('.thetime2').innerHTML;
    endDate = new Date(endDate);

    // 計算兩個日期之間的毫秒差異
    var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    // 將毫秒差異轉換為天數
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    diffDays += 1;

    let go = getDateDiff(startDate);
    let afterDays = "";
    if (go < 7) {
      afterDays = "aweek";
    } else if (go >= 7 && go <= 30) {
      afterDays = "amonth";
    } else if (go > 30) {
      afterDays = "months";
    }


    let countMatch = countFilter === "0" || countFilter === activityCount;
    let topicMatch = topicFilterContains(topic);
    let locMatch = locFilter === "0" || locFilter === location;
    let durMatch = durFilter === "0" || parseInt(durFilter) === parseInt(diffDays);
    let startMatch = fromnowonValue === "" || fromnowonValue === afterDays;

    if (countMatch && topicMatch && locMatch && durMatch && startMatch) {
      activityCard.style.display = "flex";
    } else if (countMatch && !hasCheckedTopics() && locMatch && durMatch && startMatch) {
      activityCard.style.display = "flex";
    } else {
      activityCard.style.display = "none";
    }
  }
}

function hasCheckedTopics() {
  for (let i = 0; i < topicFilter2.length; i++) {
    if (topicFilter2[i].checked) {
      return true;
    }
  }
  return false;
}

function topicFilterContains(topic) {
  for (let i = 0; i < topicFilter2.length; i++) {
    if (topicFilter2[i].value === topic && topicFilter2[i].checked) {
      return true;
    }
  }
  return false;
}

function showAllCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "flex";
  }
}

function getDateDiff(startDate) {
  // 取得今日日期
  let today = new Date();

  // 計算時間差（毫秒）
  let timeDiff = startDate.getTime() - today.getTime();

  // 計算時間差的天數
  let DateDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return DateDiff;
}