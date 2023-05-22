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
        alert(response);
        let str = "";
        for (let i = 0; i < response.length; i++) {
          str += `<div class="feedback">
              <div class="feedbacktop">
                <div class="img">
                  <img src="./IMG/diary/photo.png" alt="" />
                </div>
                <h2>用戶暱稱</h2>
              </div>
              <div class="feedbackbottom">
                <p>
                  留言留言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留留言言留言留言留言留言留言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留留言言留言留言留留言留言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留留言言留言留言留留言留言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留言言留留言言留言留言留
                </p>
                <p>B1 1小時前</p>
              </div>

              <div class="clickbox">
                <div class="click">
                  <div class="clickedit">
                    <p>私訊這個人</p>
                    <p>刪除留言</p>
                    <p>！檢舉留言</p>
                    <p>！將這個人加入黑名單</p>
                  </div>

                  <img
                    class="threepoint"
                    src="./IMG/diary/threepoint.png"
                    alt=""
                  />
                </div>
              </div>
            </div>`;
        }
        $(".middlebottom").html($(".middlebottom").html() + str);
      },
      error: (xhr, status, error) => {
        alert(error);
      },
    });
  }
});
