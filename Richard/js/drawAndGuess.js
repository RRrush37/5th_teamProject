$(function () {
  $("#nicknameInput").focus();
  //設定暱稱
  document.getElementById("setNickname").addEventListener("click", () => {
    let nickname = document.getElementById("nicknameInput").value;
    if (!nickname?.length) {
      alert("請輸入暱稱");
      return;
    } else {
      ws.send(JSON.stringify([nickname, "nickname", id]));
    }
  });
  document.addEventListener("keypress", (e) => {
    // alert(e.key);
    if (e.key === "Enter") {
      if ($("#fullScreen").css("display") !== "none") {
        $("#setNickname").click();
      }
    }
  });
  let keyinDom = document.querySelector("#txtInput");
  let showDom = document.querySelector("#txtShow");
  let id;
  let nowRoom = "大廳";
  let isRoomLeader = false;
  document.getElementById("enterRoom").addEventListener("click", () => {
    if (!document.getElementById("newRoomName").value?.length) {
      alert("請輸入欲進入房間名稱");
      return;
    }
    if (document.getElementById("newRoomName").value === nowRoom) {
      return;
    }
    if (
      confirm(
        "確定要進入 " + document.getElementById("newRoomName").value + " 嗎？"
      )
    ) {
      document.getElementById("roomName").innerHTML =
        document.getElementById("newRoomName").value;
      ws.send(JSON.stringify([nowRoom, "leaveRoom", id]));
      document.getElementById("roomLeader").innerHTML = "";
      nowRoom = document.getElementById("newRoomName").value;
      ws.send(
        JSON.stringify([
          document.getElementById("newRoomName").value,
          "enterRoom",
          id,
        ])
      );
    }
  });
  let sendMsg = () => {
    if (keyinDom.value.trim().length === 0) {
      alert("請輸入訊息");
      return;
    }
    let txt = keyinDom.value;
    ws.send(JSON.stringify([txt, "text", id, nowRoom]));
  };
  //傳送聊天訊息
  $("#btnSend").on("click", sendMsg);
  document
    .getElementsByClassName("resetQuestion")[0]
    .addEventListener("click", () => {
      ws.send(JSON.stringify(["", "resetQuestion"]));
    });
  document.getElementsByClassName("reset")[0].addEventListener("click", () => {
    ws.send(JSON.stringify([nowRoom, "resetTime"]));
  });
  document.addEventListener("keydown", (e) => {
    if (
      e.keyCode === 13 &&
      document.getElementById("txtInput") === document.activeElement
    )
      document.querySelector("#btnSend").click();
  });

  $("#resetQuestion").click(() => {
    ws.send(JSON.stringify(["", "nextQuestion"]));
  });

  // 建立 WebSocket (本例 server 端於本地運行)
  let url = "ws://192.168.50.168:3000";
  // let url = "ws://192.168.0.3:3000";
  // let url = "ws://192.168.1.103:3000";
  var ws = new WebSocket(url);
  // 監聽連線狀態
  ws.onopen = () => {
    console.log("open connection");
  };
  window.onbeforeunload = () => {
    ws.send(JSON.stringify([nowRoom, "leaveRoom", id]));
  };
  ws.onclose = () => {
    console.log("close connection");
  };
  //接收 Server 發送的訊息
  ws.onmessage = (event) => {
    let arr = JSON.parse(event.data);
    console.log(arr[0]);
    let txt;

    switch (arr[1]) {
      //設定ID回應
      case "ID":
        id = arr[0];
        document.getElementById("myName").innerHTML = id + "：";
        break;
      //同步聊天回應
      case "text":
        // if (arr[2] !== document.getElementById("roomName").innerHTML) {
        //   alert(
        //     arr[2] + "!=" + document.getElementById("roomName").innerHTML
        //   );
        //   return;
        // }
        txt = arr[0];
        if (!showDom.value) showDom.value = txt;
        else showDom.value = showDom.value + "\n" + txt;
        keyinDom.value = "";
        // if (arr[2] === id) {
        //   showDom.disable = true;
        // }
        break;
      //重設計時回應
      case "time":
        document.getElementsByClassName("innerTimer")[0].style.width =
          arr[2] + "%";
        break;
      //同步畫圖回應
      case "drawLine":
        drawLine(
          arr[0][0],
          arr[0][1],
          arr[0][2],
          arr[0][3],
          arr[0][4],
          arr[0][5]
        );
        break;
      //設定暱稱回應
      case "setNickname":
        if (!arr[0]) {
          alert("暱稱已被人使用");
        } else {
          alert("設定成功，您的暱稱為：" + arr[2]);
          document.getElementById("fullScreen").style.display = "none";
          $("#myNickName").html("您的暱稱是：" + arr[2]);
          ws.send(JSON.stringify([nowRoom, "enterRoom", id]));
        }
        break;
      //房間成員回應
      case "roomMember":
        let memberStr = "";
        arr[0].sort((a, b) => b[2] - a[2]);
        for (let i = 0; i < arr[0].length; i++) {
          if (arr[0][i][0] == id) {
            memberStr += `<div class="member" style="background-color:yellow">
            <img src="img/logo_1.png" alt="" class="sticker" />
            <span>${arr[0][i][1]}</span>
            <span>${arr[0][i][2]}</span>
            </div>`;
          } else {
            memberStr += `<div class="member">
                  <img src="img/logo_1.png" alt="" class="sticker" />
                  <span>${arr[0][i][1]}</span>
                  <span>${arr[0][i][2]}</span>
                  </div>`;
          }
        }
        $("#memberList").html(memberStr);
        break;
      case "roomLeader":
        isRoomLeader = true;
        let str = `<div>
          您是房長
          <button id="startGame">開始遊戲</button>
        </div>`;
        $("#roomLeader").html(str);
        $("#startGame").click(() => {
          ws.send(JSON.stringify([nowRoom, "startGame"]));
        });
        break;
      case "cannotStart":
        alert("滿3人才可開始");
        break;
      case "gameStart":
        $("#roomState").html("遊戲開始囉！！");
        alert("遊戲開始囉！！");
        $(".enterRoom").html("");
        $("#roomLeader").html("");
        break;
      case "gameState":
        $("#nowState").html(arr[0]);
        break;
      case "watchAnswer":
        $("#showAnswer").html("答案是：" + arr[0]);
        $("#txtInput").prop("disabled", true);
        $("#btnSend").prop("disabled", true);
        $("#btnSend").off("click", sendMsg);
        break;
      case "correct":
        $("#txtInput").prop("disabled", true);
        $("#btnSend").prop("disabled", true);
        $("#btnSend").off("click", sendMsg);
        break;
      case "newQuestion":
        $("#txtInput").prop("disabled", false);
        $("#btnSend").prop("disabled", false);
        $("#btnSend").on("click", sendMsg);
        break;
      case "cleanAnswer":
        $("#showAnswer").html("");
        break;
    }
  };

  //-----------------------圖板------------------------

  // 宣告變數
  var canvas = $("#canvas")[0];
  var ctx = canvas.getContext("2d");
  var isDrawing = false;
  var startX, startY, lastX, lastY;
  var color = "#000";
  var width = 1;
  var magnifierWidth = $("#magnifier").width();
  var magnifierHeight = $("#magnifier").height();

  // 獲取上下文
  var ctx = canvas.getContext("2d");

  // 設定canvas寬度與高度
  canvas.width = $("#canvas").outerWidth();
  canvas.height = $("#canvas").outerHeight();

  // 畫筆事件
  $("#canvas").mousedown(function (e) {
    isDrawing = true;
    startX = e.pageX - $(this).offset().left;
    startY = e.pageY - $(this).offset().top;
    ws.send(
      JSON.stringify([
        [startX, startY, startX + 0.1, startY + 0.1, color, width],
        "drawLine",
        nowRoom,
      ])
    );
    // drawLine(startX, startY, startX + 0.1, startY + 0.1);
  });

  //   $(".color-button").click(() => {
  //     $(".color-button").removeClass("active");
  //     $(this).addClass("active");
  //     color = $(this).css("background-color");
  //   });
  // 清除事件
  $("#clear-button").click(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  $("#canvas").mouseup(function () {
    isDrawing = false;
  });

  // $(".reset").click(() => {
  //   time = 10000;
  //   clearInterval(deleteInterval);
  //   deleteInterval = setInterval(() => {
  //     // console.log(time);
  //     time -= 10;
  //     $(".innerTimer").width(time / 100 + "%");
  //     if (time < 0) clearInterval(deleteInterval);
  //   }, 10);
  // });
  // 顏色選擇事件
  $(".color-button").click(function () {
    if ($(this).hasClass("active")) {
      return;
    }
    $(".color-button.active").removeClass("active").css("border", "none");
    $(this).addClass("active").css("border", "2px solid #fff");
    color = $(this).css("background-color");
    $("#magnifier").css("opacity", "0");
  });

  // 監聽滑鼠事件
  $("#canvas").mousedown(function (e) {
    // 當滑鼠按下時，開始繪製線條
    isDrawing = true;
    startX = e.pageX - $(this).offset().left;
    startY = e.pageY - $(this).offset().top;
  });
  $("#canvas").mousemove(function (e) {
    if (isDrawing) {
      // 當滑鼠按下時，開始繪製線條
      lastX = e.pageX - $(this).offset().left;
      lastY = e.pageY - $(this).offset().top;
      ws.send(
        JSON.stringify([
          [startX, startY, lastX, lastY, color, width],
          "drawLine",
        ])
      );
      // drawLine(startX, startY, lastX, lastY);
      startX = lastX;
      startY = lastY;
    }
  });
  $(window).mouseup(function (e) {
    // 當滑鼠按下時，開始繪製線條
    isDrawing = false;
  });
  window.addEventListener("blur", () => {
    isDrawing = false;
  });
  document.getElementById("myRange").addEventListener("input", function () {
    width = this.value;
    $("#magnifier").width($("#myRange").val());
    $("#magnifier").height($("#myRange").val());
    magnifierWidth = $("#magnifier").width();
    magnifierHeight = $("#magnifier").height();
  });
  function drawLine(startX, startY, lastX, lastY, color, width) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(lastX, lastY);
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
  }

  //橡皮擦效果

  var canvasContainer = $("#canvas");

  // 綁定滑鼠移入事件，顯示橡皮擦
  canvasContainer.mouseenter(function () {
    $("#magnifier").show();
  });

  // 綁定滑鼠移出事件，隱藏橡皮擦
  canvasContainer.mouseleave(function () {
    $("#magnifier").hide();
  });

  $(".eraser").click(() => {
    if ($("#myRange").val() < 20) {
      $("#myRange").val(20);
    }
    width = $("#myRange").val();
    $("#magnifier").width($("#myRange").val());
    $("#magnifier").height($("#myRange").val());
    magnifierWidth = $("#magnifier").width();
    magnifierHeight = $("#magnifier").height();
    $("#magnifier").css("opacity", "1");
  });

  // 綁定滑鼠移動事件，移動橡皮擦
  canvasContainer.mousemove(function (e) {
    // 取得橡皮擦寬高
    // 計算滑鼠在圖片容器中的位置
    var containerOffset = canvasContainer.offset();
    var mouseX = e.pageX - containerOffset.left;
    // console.log(mouseX);
    var mouseY = e.pageY - containerOffset.top;

    // 計算橡皮擦的位置
    // var magnifierX = mouseX - magnifierWidth / 2;
    var magnifierX = mouseX - magnifierWidth / 2;
    var magnifierY = mouseY - magnifierHeight / 2;

    // 計算橡皮擦背景的位置
    var bgPosX = -1 * (magnifierX * 2) - magnifierWidth / 2;
    var bgPosY = -1 * (magnifierY * 2) - magnifierHeight / 2;

    // 調整橡皮擦背景圖的大小
    // var bgWidth = canvasContainer.width() * 2;
    // var bgHeight = canvasContainer.height() * 2;
    // console.log("bg-w", bgWidth);
    // console.log("bg-h", bgHeight);
    // 移動橡皮擦
    $("#magnifier").css({
      left: magnifierX + "px",
      top: magnifierY + "px",
      "background-image": "url('" + canvasContainer.attr("src") + "')",
      "background-position": bgPosX + "px " + bgPosY + "px",
    });
  });
});
