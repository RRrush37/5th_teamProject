
//取得bag_rule_lightbox 元素
let bag_rule_lightbox = document.getElementsByClassName("bag_rule_lightbox")[0];


//取得切換按鈕的部分
let fa_circle_exclamation = document.getElementsByClassName("fa-circle-exclamation")[0];

fa_circle_exclamation.addEventListener("click",function(){
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





//停止冒泡事件(下一層的div)
let bag = document.getElementsByClassName("bag")[0];

bag.addEventListener("click",function(e){
    e.stopPropagation();
});




