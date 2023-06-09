
$(function(){
    // const fs = require('fs');
    // const download = require('download');

    $('.check').click(function(){
        // 獲取所有照片
        var photos = $(".coutainer").find("div");
        // 建立一個Canvas元素
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        // 設定Canvas元素的寬高為照片區域的寬高
        canvas.width =  $('.coutainer').width();
        canvas.height =  $('.coutainer').height();
        // 將所有照片繪製到Canvas元素上
        photos.each(function (index, photo) {
            // 獲取照片在photoArea中的相對位置和大小
            var img = $(photo).find("img")[0]
            var position = $(photo).position();
            var width = $(photo).width();
            var height = $(photo).height();
            // 繪製照片到Canvas元素上
            ctx.drawImage(img, position.left, position.top, width, height);
        });

        canvas.toBlob(function(blob) {
          // 使用 Blob 物件建立 File 物件
          var file = new File([blob], "image.png", { type: "image/png" });
        
          // 建立 FormData 物件並將 File 物件添加到其中
          var formData = new FormData();
          formData.append("imageFile", file);
        
          // 使用 AJAX 傳送 FormData 至後端
          $.ajax({
            url: "php/catch_image.php",  // 請更改為後端接收請求的 URL
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
              console.log("圖片上傳成功");
            },
            error: function(xhr, status, error) {
              console.error("圖片上傳失敗:", error);
            }
          });
        
        }, "image/png");

    })
})
