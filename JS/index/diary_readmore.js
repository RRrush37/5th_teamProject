$(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const paramValue = urlParams.get("postID");
  let renderComment = () => {
    $.ajax({
      url: "php/loadComment.php",
      type: "POST",
      dataType: "json",
      data: { articleID: paramValue },
      success: (response) => {
        let str = `<p class="all">共${response.length}則留言</p>`;
        for (let i = 0; i < response.length; i++) {
          str += `<div class="feedback">
          <div class="feedbacktop">
              <div class="img">
                  <img src="IMG/diary/photo.png" alt="">
              </div>
                  <h2>${response[i]["name"]}</h2>
          </div>
          <div class="feedbackbottom">
              <p>${response[i]["content"]}</p>
              <p>B${i + 1} ${response[i]["time"]}</p>
          </div>
    
          <div class="clickbox">
              <div class="click">
                  <div class="clickedit">
                      <p>私訊這個人</p>
                      <p>刪除留言</p>
                      <p>！檢舉留言</p>
                      <p>！將這個人加入黑名單</p>
                  </div>
    
                  <img class="threepoint" src="IMG/diary/threepoint.png" alt="">
              </div>
    
          </div>
      </div>`;
        }
        $(".middlebottom").html(str);
      },
      error: (xhr, status, error) => {
        alert(error);
      },
    });
  };
  if (isNaN(paramValue)) {
    $("body").html("");
  } else {
    $.ajax({
      url: "php/getMainArticle.php",
      type: "POST",
      dataType: "json",
      data: { articleID: paramValue },
      success: function (response) {
        if (response === "-1") alert(response);
        else {
          console.log(response);
          $("#artAuthorName").html(response["memberName"]);
          $("#artAuthorID").html(response["memberID"]);
          $("#artTitle").html(response["articleTitle"]);
          $("#artTime").html(response["timeDiff"]);
          $("#artContent").html(response["articleContent"]);
          $("#love_number").html(response["thumbUpNum"]);
          $("#message_number").html(response["commentNum"]);
          $("#loginName").html(response["loginName"]);
          if (response["loginID"] === -1) {
            $("#commentForm").html("請登入以留言");
          }
          if (response["ILikeThis"]) {
            $("#like").css({ color: "red" });
          }

          // $("#artAuthorName").html(articleID);
        }
      },
      error: function (xhr, status, error) {
        alert(error);
      },
    });

    renderComment();

    $("#sendComment").click(() => {
      $.ajax({
        url: "php/addComment.php",
        method: "POST",
        dataType: "json",
        data: { commentText: $("#commentText").val(), articleID: paramValue },
        success: (response) => {
          if (response > 0) {
            renderComment();
            $("#message_number").html(response);
            $("#commentText").val("");
          } else alert("新增失敗");
        },
        error: (xhr, status, error) => {
          alert(error);
        },
      });
    });

    $("#like").click(() => {
      $.ajax({
        url: "php/addLike.php",
        method: "POST",
        dataType: "json",
        data: { articleID: paramValue },
        success: (response) => {
          $("#love_number").html(response[0]);
          if (response[1]) {
            $("#like").css({ color: "red" });
          } else {
            $("#like").css({ color: "" });
          }
        },
        error: (xhr, status, error) => {
          alert(error);
        },
      });
    });

    $("#keep").click(() => {
      $.ajax({
        url: "php/addKeep.php",
        method: "POST",
        dataType: "json",
        data: { articleID: paramValue },
        success: (response) => {
          if (!response) {
            $("#keep").css({ color: "blue" });
          } else {
            $("#keep").css({ color: "" });
          }
        },
        error: (xhr, status, error) => {
          alert(error);
        },
      });
    });
  }
});
