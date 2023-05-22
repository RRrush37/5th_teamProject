$(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const paramValue = urlParams.get("memberID");
  if (!paramValue) {
    $("body").html("");
  } else {
    $.ajax({
      url: "php/showArticle.php",
      method: "post",
      dataType: "json",
      data: { memberID: paramValue },
      success: (response) => {
        console.log(response);
        let str = "";
        for (let i = 0; i < response.length; i++) {
          str += `<div class="cards_content">
          <div class="card_user">
            <div class="card_article">
              <img src="./IMG/diary/big_girl.png" alt="" />
              <h2>${response[i]["articleTitle"]}</h2>
            </div>
            <span class="more_action">...</span>
          </div>

          <div class="card_text">
            <div class="text_title">
              <p>
              ${response[i]["articleContent"]}
              </p>
            </div>
          </div>
          <!-- <div class="card_pics">
                          </div> -->

          <div class="interact">
            <div class="icon">
              <a href="#"
                ><i class="fa-regular fa-heart"></i><span>${response[i]["likeNum"]}</span></a
              >
              <a href="#"
                ><i class="fa-regular fa-comment-dots"></i
                ><span>${response[i]["commentNum"]}</span></a
              >
              <a href="#"><i class="fa-regular fa-bookmark"></i></a>
            </div>
            <button class="moreButton" postid="${response[i]["articleID"]}">Read more</button>
          </div>
        </div>`;
        }
        $(".myPost").html($(".myPost").html() + str);
        $(".moreButton").click(function () {
          location.assign(
            "diary_readmore.html?postID=" + $(this).attr("postid")
          );
        });
      },
      error: (xhr, status, error) => {
        alert(error);
      },
    });
  }
});
