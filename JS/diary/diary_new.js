





// 透過 class 名稱取得 readmore_lightbox 元素
let readmore_lightbox = document.getElementsByClassName("readmore_lightbox")[0];


// 頁面上的按鈕//因為不只一個所以不用[0]
// 取得頁面上所有具有 "moreButton" class 名稱的按鈕元素
let moreButton = document.getElementsByClassName("moreButton");

console.log("aa");
//要用for迴圈去判斷目前是哪個//之後要去尋找哪個按鈕跟哪篇文章
for ( let i = 0 ; i < moreButton.length ; i++ ) {
     // 在每個按鈕上加入點擊事件監聽器
    moreButton[i].addEventListener("click", function(){
        // 移除 readmore_lightbox 元素的 "none" class，使其顯示出來
        readmore_lightbox.classList.remove("none");
    });
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

