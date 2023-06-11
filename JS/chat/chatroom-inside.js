const userProfileBtns = document.querySelectorAll(".userprofile-btn");
const userProfileBtnsArray = Array.from(userProfileBtns);
const userTextALL = document.getElementById("usertext-all");
const chatRoomInside = document.getElementById("chatroom-inside");
const searchUser = document.getElementById("search-user_box");
let search_user = document.getElementById("search-user");
const searchUserBtn = document.getElementById("search-user-btn");
const sendBtn = document.getElementById("send-btn");
const enterText = document.getElementById("enter-text");

userProfileBtns.forEach(function (userProfileBtn) {
  userProfileBtn.addEventListener("click", function () {
    userTextALL.style.display = "block";
    chatRoomInside.style.display = "none";
    //   searchUser.style.display = 'none';
  });
});
$.ajax({
  url: "php/getMSG.php",
  method: "post",
  datatype: "json",
  data: {},
  success: (response) => {
    response = JSON.parse(response);
    if (response) {
      console.log(response);
      let str = "";
      for (let i = 0; i < response.length; i++) {
        str += `<p style="padding:5px">${response[i].sendMemberID}：${response[i].content}</p><br>`;
      }
      let chatroom_middle = document.getElementById("chatroom-inside-middle");
      chatroom_middle.innerHTML = str;
      chatroom_middle.scrollTop = chatroom_middle.clientHeight + 100;
    } else {
    }
  },
  error: (xhr, status, error) => {
    alert("error: " + error);
  },
});
setInterval(() => {
  $.ajax({
    url: "php/getMSG.php",
    method: "post",
    datatype: "json",
    data: {},
    success: (response) => {
      response = JSON.parse(response);
      if (response) {
        console.log(response);
        let str = "";
        for (let i = 0; i < response.length; i++) {
          str += `<p style="padding:5px">${response[i].sendMemberID}：${response[i].content}</p><br>`;
        }
        let chatroom_middle = document.getElementById("chatroom-inside-middle");
        chatroom_middle.innerHTML = str;
        chatroom_middle.scrollTop = chatroom_middle.clientHeight + 100;
      } else {
      }
    },
    error: (xhr, status, error) => {},
  });
}, 1000);

// searchUserBtn.addEventListener('click', function() {

//   searchUser.classList.remove("none");
//   chatRoomInside.style.display = 'none';

//   userTextALL.style.display = 'none';
// });

searchUser.addEventListener("click", function () {
  searchUser.classList.add("none");
  // chatRoomInside.style.display = 'none';

  // userTextALL.style.display = 'none';
});

search_user.addEventListener("click", function (e) {
  e.stopPropagation();
});

document.addEventListener("click", function (e) {
  const isUserTextAllClicked = userTextALL.contains(e.target);
  const isUserProfileBtnClicked = userProfileBtnsArray.some(function (
    userProfileBtn
  ) {
    return userProfileBtn.contains(e.target);
  });
  const isSearchUserClicked =
    searchUser.contains(e.target) || e.target === searchUserBtn;

  if (!isUserTextAllClicked && !isUserProfileBtnClicked) {
    userTextALL.style.display = "none";
    chatRoomInside.style.display = "block";
  }

  if (!isSearchUserClicked && e.target !== searchUserBtn) {
    searchUser.style.display = "none";
  }
});

userTextALL.addEventListener("click", function (e) {
  e.stopPropagation();
});

sendBtn.addEventListener("click", function () {
  if (enterText.value == undefined || enterText.value == "") {
    alert("請輸入文字訊息");
  } else {
    $.ajax({
      url: "php/sendMSG.php",
      method: "post",
      datatype: "json",
      data: {
        chatroom_msg: enterText.value,
      },
      success: (response) => {
        if (response == -1) {
          alert("請先登入");
        } else if (response) {
          $.ajax({
            url: "php/getMSG.php",
            method: "post",
            datatype: "json",
            data: {},
            success: (response) => {
              response = JSON.parse(response);
              if (response) {
                console.log(response);
                let str = "";
                for (let i = 0; i < response.length; i++) {
                  str += `<p style="padding:5px">${response[i].sendMemberID}：${response[i].content}</p><br>`;
                }
                let chatroom_middle = document.getElementById(
                  "chatroom-inside-middle"
                );
                chatroom_middle.innerHTML = str;
                chatroom_middle.scrollTop = chatroom_middle.clientHeight + 100;
                enterText.value = "";
              } else alert("留言失敗");
            },
            error: (xhr, status, error) => {
              alert("error: " + error);
            },
          });
        } else alert("留言失敗");
      },
      error: (xhr, status, error) => {
        alert("error: " + error);
      },
    });
  }
});
