// 燈箱出現消失

let lightbox_background = document.getElementsByClassName(
  "lightbox_background"
)[0];
let activity_article_cards = document.getElementsByClassName(
  "activity_article_cards"
);
let activity_readmore = document.getElementsByClassName("activity_readmore")[0];
// console.log(lightbox_background);
// console.log(activity_article_cards[0]);
// console.log(activity_readmore);

for (let i = 0; i < activity_article_cards.length; i++) {
  activity_article_cards[i].addEventListener("click", function () {
    let cards = JSON.parse(localStorage.getItem("cards"));
    let post_time_display = convertTimeToHumanReadable(cards[i].post_time);
    let criteria = "";
    cards[i].criteria.forEach((element) => {
      criteria += `<li><span class="topic">${element}</span>
                            </li > `;
    });
    // console.log(cards);
    activity_readmore.innerHTML = `                <div class="activity_readmore_wrap ">
                    <i class="fa-solid fa-xmark"></i>
                    <div class="activity_inf">
                        <div class="article_top_left">
                            <img class="user" src="./IMG/activity/lonely.png" alt="" width="60">
                            <div class="user_identity">
                                <p>暱稱</p>
                                <p>ID</p>
                            </div>
                        </div>
                        <span class="topic">${cards[i].topic}</span>
                    </div>
                    <div class="activity_content">
                        <h2>${cards[i].title}</h2>
                        <h3>${post_time_display}發布</h3>
                        <p class="inf">活動時間:${cards[i].depart}到${cards[i].leave}</p>
                        <p class="inf">活動地點:${cards[i].loc}</p>
                        <p>${cards[i].content}</p>
                        <ul>
                            ${criteria}
                        </ul>
                    </div>
                    <div class="article_actions">
                        <div class="interact_lightbox">
                            <i class="fa-regular fa-heart ${cards[i].item_id}"></i><span>66</span>
                            <i class="fa-regular fa-comment-dots"></i><span class="howmany">7</span>
                            <!-- <a href="#"><i class="fa-regular fa-bookmark"></i></a> -->
                        </div>
                        <div class="join">
                            <h3>參加人數：2/5</h3>
                            <input type="checkbox" id="iwantjoin_lightbox">
                            <label for="iwantjoin_lightbox" class="iwantjoin color-button">我要參加</label>
                        </div>
                    </div>
                    <div class="activity_comment">
                        <h3>共<span class="howmany">7</span>則留言</h3>
                        <div class="activity_commentbox">
                        </div>
                    </div>
                </div>
                <div class="activity_myaction">
                    <img class="user" src="./IMG/activity/lonely.png" alt="" width="40">
                    <div class="comment_keyin">
                        <textarea name="" id="comment" cols="30" rows="1" placeholder="留言..."></textarea>
                        <!-- <div class="paste">
                            <i class="fa-regular fa-image"></i>
                            <i class="fa-regular fa-face-laugh-squint"></i>
                        </div> -->
                    </div>
                    <button type="submit" class="comment_send selector_submit" id="comment_send" =>送出</button>
                    <div class="actions">
                        <a href="#"><i class="fa-regular fa-heart ${cards[i].item_id}"></i></a>
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

    // 從local抓彈窗留言
    let card = cards[i];
    get_comment_card(card);

    // 發留言
    let comment = document.getElementById("comment");
    let comment_send = document.getElementById("comment_send");

    // console.log(comment_send);
    comment_send.addEventListener("click", function (e) {
      e.preventDefault();
      let comment_id = Date.now();
      let comment_content = comment.value;
      let post_time = Date.now();
      let post_time_display = convertTimeToHumanReadable(post_time);
      // $.ajax({
      //     url: "php/activityComment.php",
      //     method: "post",
      //     dataType: "json",
      //     data: {
      //         "comment_id": comment_id,
      //         "comment_content": comment_content,
      //         "post_time": post_time
      //     },
      //     success: (response) => {
      //         if(response==-1){
      //             alert("請先登入");
      //         } else if(response == 1) {
      //             alert("發布成功");
      //         }else{
      //             alert("發布失敗");
      //         }

      //     },
      //     error: (xhr, status, error) => {
      //         alert("error:" + error)
      //     },
      // });

      //         let comment_html = `
      //                     <div class="comment_card">
      //                         <!-- <span class="more_action">‧‧‧</span> -->
      //                         <img class="user" src="./IMG/activity/lonely.png" alt="" width="60">
      //                         <div class="comment_text">
      //                             <h2>暱稱</h2>
      //                             <p>${comment_content}</p>
      //                             <h3>B1 ‧ ${post_time_display}</h3>
      //                         </div>
      //                     </div>
      // `;
      // let activity_commentbox = document.getElementsByClassName("activity_commentbox")[0];
      // activity_commentbox.insertAdjacentHTML("afterbegin", comment_html);

      let comment_card = {
        item_id: cards[i].item_id,
        comment_id: comment_id,
        comment_content: comment_content,
        post_time: post_time,
      };

      let comment_cards = JSON.parse(localStorage.getItem("comment_cards"));

      if (comment_cards) {
        // 若存在
        comment_cards.push(comment_card); // [{}, {}]
      } else {
        // 若不存在
        comment_cards = [comment_card]; // [{}]
      }
      localStorage.setItem("comment_cards", JSON.stringify(comment_cards));

      // 從local抓彈窗留言
      let card = cards[i];
      get_comment_card(card);
    });
    let like_activity = document.getElementsByClassName("fa-heart");
    like_activity1 = [...like_activity];
    like_activity1.forEach((item) => {
      item.addEventListener("click", function () {
        like_activity1.forEach((item1) => {
          if (1) {
          }
          item1.classList.toggle("fa-regular");
          item1.classList.toggle("fa-solid");
        });
      });
    });

    // console.log(like_activity);
  });
}

lightbox_background.addEventListener("click", function () {
  this.classList.add("-none");
});

lightbox_background
  .querySelector(".activity_readmore")
  .addEventListener("click", function (e) {
    e.stopPropagation();
  });

let join_btn = document.getElementsByClassName("join");

for (let j = 0; j < join_btn.length; j++) {
  join_btn[j].addEventListener("click", function (e) {
    e.stopPropagation();
  });
}