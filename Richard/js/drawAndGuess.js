$(function () {
  // 宣告變數
  alert((Math.atan(1) * 180) / Math.PI);
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
    drawLine(startX, startY, startX + 0.1, startY + 0.1);
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
  let time = 10000;
  let deleteInterval = setInterval(() => {
    console.log(time);
    time -= 10;
    $(".innerTimer").width(time / 100 + "%");
    if (time < 0) clearInterval(deleteInterval);
  }, 10);
  $(".reset").click(() => {
    time = 10000;
    clearInterval(deleteInterval);
    deleteInterval = setInterval(() => {
      console.log(time);
      time -= 10;
      $(".innerTimer").width(time / 100 + "%");
      if (time < 0) clearInterval(deleteInterval);
    }, 10);
  });
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

      drawLine(startX, startY, lastX, lastY);
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
  function drawLine(startX, startY, lastX, lastY) {
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
    console.log(mouseX);
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
