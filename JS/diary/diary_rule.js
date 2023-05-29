
//取得bag_rule_lightbox 元素
let bag_rule_lightbox = document.getElementsByClassName("bag_rule_lightbox")[0];




//取得切換按鈕的部分
let fa_pen_to_squaren = document.getElementsByClassName("fa-pen-to-square")[0];

fa_pen_to_squaren.addEventListener("click",function(){
    bag_rule_lightbox.classList.remove("none");
    // alert("lalalal"); 
});


//到進入編輯按鈕時,燈箱不見
//取得第一個關閉的元素
let use_close =document.getElementsByClassName("use")[0];
use_close.addEventListener("click",function(){

    bag_rule_lightbox.classList.add("none");

});

    bag_rule_lightbox.addEventListener("click",function(){
    this.classList.add("none");
})


    // // 取得第二個燈箱元素
    // let edit_lightbox = document.getElementsByClassName("edit_lightbox")[0];

    // // 當點擊關閉按鈕時觸發的事件處理函式
    // use_close.addEventListener("click", function() {
    // // 給 bag_rule_lightbox 元素新增 "none" 類別以隱藏燈箱
    // bag_rule_lightbox.classList.add("none");
    // // 移除 second_lightbox 元素的 "none" 類別以顯示第二個燈箱
    // edit_lightbox.classList.remove("none");
    // }); 

    // // 當點擊第二個燈箱時觸發的事件處理函式
    // edit_lightbox.addEventListener("click", function() {
    // // 給 second_lightbox 元素新增 "none" 類別以隱藏第二個燈箱
    // this.classList.add("none");
    // });

















//停止冒泡事件(下一層的div)
let bag = document.getElementsByClassName("bag")[0];

bag.addEventListener("click",function(e){
    e.stopPropagation();
});




