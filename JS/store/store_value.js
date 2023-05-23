// 連結頁面
function navigateToUrl() {
  const selectElement = document.getElementById("choose");
  const selectedValue = selectElement.value;
  window.location.href = selectedValue;
}


// lightbox
// main
let value_lightbox = document.getElementsByClassName("value_lightbox")[0];
let box = document.getElementsByClassName("box");
let value_main = document.getElementsByClassName("value_main");

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", function() {
    value_lightbox.classList.remove("main_none");
    for (let j = 0; j < value_main.length; j++) {
      value_main[j].style.display = "none";
    }
    value_main[i].style.display = "block";
  });
  
}

let fa_xmark = value_lightbox.querySelectorAll(".fa-xmark");
for(let i = 0; i < fa_xmark.length; i++){
  fa_xmark[i].addEventListener("click",function(){
    value_lightbox.classList.add("main_none")
  });
}

value_lightbox.addEventListener("click", function() {
  this.classList.add("main_none");
});

value_lightbox.querySelectorAll(".value_main");
for(let i=0; i < value_main.length; i++){
  value_main[i].addEventListener("click", function(e) {
    e.stopPropagation();
  });
}



// text
let value_lightbox1 = document.getElementsByClassName("value_lightbox1")[0];
let buy = document.getElementsByClassName("buy");
let value_text = document.getElementsByClassName("value_text");

for (let i = 0; i < buy.length; i++) {
  buy[i].addEventListener("click", function() {
    value_lightbox1.classList.remove("text_none");
    for (let j = 0; j < value_text.length; j++) {
      value_text[j].style.display = "none";
    }
    value_text[i].style.display = "block";
  });
}

let close1 = value_lightbox1.querySelectorAll(".close1");
for(let i = 0; i < close1.length; i++){
  close1[i].addEventListener("click",function(){
    value_lightbox1.classList.add("text_none")
  });
}

let cancel1 = value_lightbox1.querySelectorAll(".cancel1");
for(let i = 0; i < close1.length; i++){
  cancel1[i].addEventListener("click", function() {
    value_lightbox1.classList.add("text_none");
  });
}

value_lightbox1.addEventListener("click", function() {
  this.classList.add("text_none");
});

value_lightbox1.querySelectorAll(".value_text");
for(let i=0; i < value_text.length; i++){
  value_text[i].addEventListener("click", function(e) {
    e.stopPropagation();
  });
}

// gift
let value_lightbox2 = document.getElementsByClassName("value_lightbox2")[0];
let gift = document.getElementsByClassName("gift");
let value_gift = document.getElementsByClassName("value_gift");

for (let i = 0; i < gift.length; i++) {
  gift[i].addEventListener("click", function() {
    value_lightbox2.classList.remove("gift_none");
    for (let j = 0; j < value_gift.length; j++) {
      value_gift[j].style.display = "none";
    }
    value_gift[i].style.display = "block";
  });
}

let close2 = value_lightbox2.querySelectorAll(".close2");
for(let i = 0; i < close2.length; i++){
  close2[i].addEventListener("click", function() {
  value_lightbox2.classList.add("gift_none")
});
}


let cancel2 = value_lightbox2.querySelectorAll(".cancel2");
for(let i = 0; i < cancel2.length; i++){
  cancel2[i].addEventListener("click", function() {
    value_lightbox2.classList.add("gift_none")
  });
}

value_lightbox2.addEventListener("click", function() {
  this.classList.add("gift_none");
});

value_lightbox2.querySelectorAll(".value_gift");
for(let i=0; i < value_gift.length; i++){
  value_gift[i].addEventListener("click", function(e) {
    e.stopPropagation();
  });
}


// 點擊完成後關閉輸入框
for(let i = 0; i < value_gift.length; i++){
  let finish = document.getElementsByClassName("finish")[i];
finish.addEventListener("click", function(e) {
  e.preventDefault();

  // 輸入框
  let talk = document.getElementsByClassName("talk")[i];
  
    if(this.value == "完成"){
      talk.disabled = true;
      this.value = "繼續編輯";
    }else{
      talk.disabled = false;
      this.value = "完成";
    }
  });
};



// num
let minus = document.getElementsByClassName("minus");
for(let i = 0; i < minus.length; i++){
  minus[i].addEventListener("click",function(){
    document.getElementsByClassName("num1")[i].innerHTML = Number(document.getElementsByClassName("num1")[i].innerHTML)-1
    if(document.getElementsByClassName("num1")[i].innerHTML<=0){
      document.getElementsByClassName("num1")[i].innerHTML = 0
    }
    document.getElementsByClassName("money_num")[i].innerHTML = Number(document.getElementsByClassName("num1")[i].innerHTML) * 100
  });
}


let addition = document.getElementsByClassName("addition");
for(let i = 0; i < addition.length; i++){
  addition[i].addEventListener("click",function(){
    document.getElementsByClassName("num1")[i].innerHTML = Number(document.getElementsByClassName("num1")[i].innerHTML)+1
    if(document.getElementsByClassName("num1")[i].innerHTML<=0){
      document.getElementsByClassName("num1")[i].innerHTML = 0
    }
    document.getElementsByClassName("money_num")[i].innerHTML = Number(document.getElementsByClassName("num1")[i].innerHTML) * 100
  });
}


