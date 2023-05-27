
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
        // 將Canvas元素轉換為Data URL
        var dataURL = canvas.toDataURL();
        console.log(dataURL);
        // 建立一個下載連結，將Data URL 設為下載連結的 href 屬性
        var downloadLink = document.createElement("a");
        downloadLink.href = dataURL;
        // 設定下載檔案的檔名
        downloadLink.download = Math.floor(Math.random() * 10000) + ".jpg";
        // 模擬點擊下載連結，觸發下載功能
        // (async () => {
        // fs.writeFileSync('IMG/foo.jpg', await download(dataURL));
        // })
        downloadLink.click();
    })
})
