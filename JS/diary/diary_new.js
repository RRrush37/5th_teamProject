import * as picture from "../../JS/member_picture.js";

let user_img = document.getElementsByClassName("big_girl")[0] ;
let user_img2 = document.getElementsByClassName("member_photo")[0] ;
let user_img3 = document.getElementsByClassName("avatar")[0] ;
picture.getMemberPicture(user_img.querySelector("img"));
picture.getMemberPicture(user_img2.querySelector("img"));
picture.getMemberPicture(user_img3);
// let card_article = document.getElementsByClassName("card_article");
// picture.getMemberPicture(card_article[0].querySelector("img"));

$(function(){
    $.ajax({
        url:"php/getUserData.php",
        datatype: "json",
        method:"post",
        data:{},
        success:(response)=>{
            if(response == -1){
                alert("請先登入")
            }
            else{
                response = JSON.parse(response)

                $("#username").html("暱稱:"+response[0]["memberName"])
                $("#idname").html("ID："+response[0]["memberID"])
                $("#sign").html(response[0]["personalSign"])
                $(".nickname").eq(0).html(response[0]["memberName"]);
                $(".greenleft").eq(0).find("h2").html(response[0]["memberName"]);
            }
        },
        error: (xhr, status, error)=>{
            alert("error:"+error)
        }
    })
})

// 透過 class 名稱取得 readmore_lightbox 元素
let readmore_lightbox = document.getElementsByClassName("readmore_lightbox")[0];
let create_list_el = document.getElementsByClassName("create_list")[0];
let rifht_my_activity = document.getElementsByClassName("my_activity")[0];
let green_img = document.getElementsByClassName("greenleft")[0].querySelector("img");
let green_name = document.getElementsByClassName("greenleft")[0].querySelector("h2");
picture.getMemberPicture(green_img);


$.ajax({
    url:"php/showArticle.php",
    datatype: "json",
    method:"post",
    data:{},
    success:(response)=>{
        response = JSON.parse(response);
        let article_id = -1 ;
        
        $.each(response, function(index, row) {
        // console.log(response);
            if( index == 0 ){
                rifht_my_activity.innerHTML +=
                `
                <h3>最新文章列表</h3>
                <p>${row.articleTime}<br>
                    ${row.articleTitle}</p>
                <section>
                    <p>
                        ${row.articleContent}
                    </p>
                </section>
                `;

            }

            if (article_id != row.articleID) {
                // 與上一篇文章為不同篇，加上內容
                article_id = row.articleID ;
                console.log(row.articleID);
                create_list_el.innerHTML +=
                `
                <div class="cards_content">
                    <div class="articleID" data-id="${row.articleID}" style=" opacity : 0"></div>
                    <div class="card_user">
                        <div class="card_article">
                            <img src="IMG/diary/big_girl.png" alt="">
                            <h2>${row.articleTitle}</h2>
                        </div>
                    </div>

                    <div class="card_text">
                        <div class="text_image">
                        </div>
                        <div class="text_title">
                            <p>${row.articleContent}</p>
                        </div>
                    </div>

                    <div class="interact">
                        <div class="icon">
                            <i class="fa-regular fa-heart"></i><span>${row.likeNum}</span>
                            <i class="fa-regular fa-comment-dots"></i><span>${row.commentNum}</span>
                            <i class="fa-regular fa-bookmark"></i>
                        </div>
                            <button class="moreButton">Read more</button>
                    </div>
                </div>
                `;
            }
                
        });
        
        let text_image = 0;
        article_id = -1 ;
        let j = 0 ;
        $.each(response, function(index, row) {

            if (article_id != row.articleID) {
                // 與上一篇文章為不同篇，重製圖片內容
                article_id = row.articleID ;
                text_image = document.getElementsByClassName("text_image")[j];

                text_image.innerHTML = "" ;
                j++ ;
            }

            // console.log(response);
            if (row.imageURL) {
                //此篇內文有圖片
                text_image.innerHTML +=
                `
                <img src="IMG/${row.imageURL}" alt="">
                `;
            }

                        
        });

        let card_article = document.getElementsByClassName("card_article");
        for ( let i = 0 ; i < card_article.length ; i++ ) {
            getImg(card_article[i].querySelector("img"))
        }

        // 頁面上的按鈕//因為不只一個所以不用[0]
        // 取得頁面上所有具有 "moreButton" class 名稱的按鈕元素
        let moreButton = document.getElementsByClassName("moreButton");
        let articleID_list = document.getElementsByClassName("articleID");
        let index_article = -1 ;
        //要用for迴圈去判斷目前是哪個//之後要去尋找哪個按鈕跟哪篇文章
        for ( let i = 0 ; i < moreButton.length ; i++ ) {
            // 在每個按鈕上加入點擊事件監聽器
            moreButton[i].addEventListener("click", function(){
                index_article = i ; //紀錄目前點到的是哪一篇文章

                // 移除 readmore_lightbox 元素的 "none" class，使其顯示出來
                readmore_lightbox.classList.remove("none");
                // console.log(articleID_list[i].getAttribute("data-id"));
                let white = document.getElementsByClassName("white")[0]; //readmore內文
                text_image = document.getElementsByClassName("text_image")[i];
                white.innerHTML = "" ;
                $.ajax({
                    url:"php/getMainArticle.php",
                    datatype: "json",
                    method:"post",
                    data:{
                        "articleID":articleID_list[i].getAttribute("data-id")
                    },
                    success:(response)=>{
                        response = JSON.parse(response);
                        console.log(response);
                        
                        white.innerHTML =`
                            <div class="top">
                                <div class="img">
                                    <img src="IMG/diary/forest.png" alt="">
                                </div>
                                <div id="readmore_id" data-id="${response.articleID}">
                                    <h2>暱稱:${response.memberName}</h1>
                                    <p>ID:${response.memberID}</p>
                                </div>
                            </div>
                            
                            <div class="title">
                                <h2 class="article">文章標題:${response.articleTitle}</h2>
                                <p class="hour">發佈:${response.timeDiff}</p>
                                <div id="readmore_article_img"></div>
                                <p class="text">內文:${response.articleContent}</p>
                            </div>
                            <!------中間版面------------->
                            <div class="middle"> 
                                <div class="message">
                                    <i class="fa-sharp fa-regular fa-heart"></i>
                                    <span id="love_number">${response.thumbUpNum}</span>    
                                    <i class="fa-regular fa-comment-dots"></i>
                                    <span id="message_number">${response.commentNum}</span>
                                </div>

                                <i class="fa-regular fa-bookmark"></i>
                                <!-- <i class="fa-solid fa-bookmark"></i> -->
                            </div>

                            <div class="middlebottom">
                                <p class="all">共${response.commentNum}則留言</p>
                            </div>
                        `
                        let top_img = document.getElementsByClassName("white")[0].querySelector(".top .img");
                        getImg(top_img.querySelector("img")); //補大頭貼

                        
                        get_Comment_list(response.articleID); //加入留言

                        let readmore_article_img_el = document.getElementById("readmore_article_img"); // 文章圖片

                        for ( let j = 0 ; j < text_image.querySelectorAll("img").length ; j++) {
                            readmore_article_img_el.innerHTML += text_image.querySelectorAll("img")[j].outerHTML;
                        }

                        let send_message_btn = document.getElementById("send_message"); //留言送出按鈕
                        let text_message = document.getElementById("message"); //留言內容
                        let readmore_id = document.getElementById("readmore_id");
                        text_message.addEventListener("change",function(e){
                            if ( text_message.value.length >= 147 && e.key != "Backspace" ){
                                alert("內容長度不可超過150個字");
                                e.preventDefault(); // 停止預設行為(在欄位上出現所打的文字)
                            }
                        })

                        send_message_btn.addEventListener("click", function(e){
                            e.preventDefault();
                            if ( text_message.value.trim() == "" ) { //空的內容
                                alert("請填寫留言內容");
                            } else {

                                send_comment(readmore_id.getAttribute("data-id"), text_message.value)
                                .then((response) => {
                                    // 在此處理成功回傳的 response
                                    articleID_list[i].closest(".cards_content").querySelector(".icon").querySelectorAll("span")[1].innerHTML = response ;
                                    // console.log("dadsa:"+articleID_list[i].closest(".cards_content").querySelector(".icon").querySelectorAll("span")[1].innerHTML);
                                    
                                    text_message.value = "" ; //清空內容
                                    readmore_lightbox.classList.add("none"); // 關閉燈箱
                                })
                                .catch((error) => {
                                    // 在此處理錯誤情況
                                });
                                
                            }
                        })

                    },
                    error: (xhr, status, error)=>{
                        alert("error:"+error)
                    }
                })
            });
        }

        // ============================= addlike ================================

        let like = document.getElementsByClassName("fa-heart");
        for ( let i = 0 ; i < like.length ; i++ ) {
            like[i].addEventListener("click", function(e){

                let article_id = e.target.closest(".cards_content").querySelector(".articleID").getAttribute("data-id");
                let numOfLike = e.target.closest(".icon").querySelectorAll("span")[0];

                // like[i].classList.toggle("on");
                addLike(article_id)
                .then((response) => {
                    // 在此處理成功回傳的 response
                    response = JSON.parse(response);
                    // articleID_list[i].closest(".cards_content").querySelector(".icon").querySelectorAll("span")[1].innerHTML = response ;
                    
                    // text_message.value = "" ; //清空內容

                })
                .catch((error) => {
                    // 在此處理錯誤情況
                });
            })
        }

    },
    error: (xhr, status, error)=>{
        alert("error:"+error)
    }
})

function get_Comment_list(articleID){ // 取得留言
    let comment_list = document.getElementsByClassName("middlebottom")[0] ;

    $.ajax({
        url:"php/loadComment.php",
        datatype: "json",
        method:"post",
        data:{
            "articleID":articleID
        },
        success:(response)=>{
            response = JSON.parse(response);
            $.each(response, function(index, row) {
                comment_list.innerHTML += `
                <div class="feedback">
                    <div class="feedbacktop">
                        <div class="img">
                            <img src="IMG/people/member1/${row.memberPicture}" alt="">
                        </div>
                            <h2>${row.name}</h2>
                    </div>
                    <div class="feedbackbottom">
                        <p>${row.content}</p>
                        <p>B${index+1} ${row.time}</p>
                    </div>
                </div>`;
            });
            // console.log(comment_list);
            
        },
        error: (xhr, status, error)=>{
            alert("error:"+error)
        }
    })

    //
}

function send_comment(articleID, message) { //送出留言
    console.log("message"+message);
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "php/addComment.php",
            datatype: "text",
            method: "post",
            data: {
                "articleID": articleID,
                "commentText": message
            },
            success: (response) => {
                alert("新增成功");
                resolve(response); // 回傳留言數
                console.log("response"+response);
            },
            error: (xhr, status, error) => {
                alert("error:" + error);
                reject(error);
            }
        });
    });
}



function getImg(user_img){ // 換上大頭貼
    picture.getMemberPicture(user_img);
}

function addLike( articleID ) { //按讚或取消讚

    return new Promise((resolve, reject) => {
        $.ajax({
            url: "php/addLike.php",
            datatype: "json",
            method: "post",
            data: {
                "articleID": articleID
            },
            success: (response) => {
                resolve(response); // 回傳留言數
                console.log("response"+response);
            },
            error: (xhr, status, error) => {
                alert("error:" + error);
                reject(error);
            }
        });
    });
}
function addKeep(){

}

//按下x的時候要不見
// 取得具有 "fas" class 的第一個元素，通常用於表示關閉的按鈕
let fas_close = document.getElementsByClassName("fas")[0];
fas_close.addEventListener("click", function(){
    // 當按下關閉按鈕時，為 readmore_lightbox 元素新增 "none" class，使其隱藏起來
    readmore_lightbox.classList.add("none");
});


 // 當點擊 readmore_lightbox 元素時，為自身新增 "none" class，使其隱藏起來
readmore_lightbox.addEventListener("click", function(){
    this.classList.add("none");
});

// 取得具有 "wrapper02" class 的第一個元素，通常用於包含 lightbox 的容器元素
//停止冒泡事件
let wrapper02 = document.getElementsByClassName("wrapper02")[0];
// 點擊 lightbox 中的白色區域，不會關掉 modal
wrapper02.addEventListener("click", function(e){
    // 防止事件向上冒泡，以避免觸發其他元素的點擊事件
    e.stopPropagation();
});

