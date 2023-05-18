// 連結頁面
function navigateToUrl() {
  const selectElement = document.getElementById("choose");
  const selectedValue = selectElement.value;
  window.location.href = selectedValue;
}


// lightbox
// text
let sticker_lightbox1 = document.getElementsByClassName("sticker_lightbox1")[0];
let buy = document.getElementsByClassName("buy");
let sticker_text = document.getElementsByClassName("sticker_text");

for (let i = 0; i < buy.length; i++) {
  buy[i].addEventListener("click", function() {
    sticker_lightbox1.classList.remove("text_none");
    for (let j = 0; j < sticker_text.length; j++) {
      sticker_text[j].style.display = "none";
    }
    sticker_text[i].style.display = "block";
  });
}

let close1 = sticker_lightbox1.querySelectorAll(".close1");
for(let i = 0; i < close1.length; i++){
  close1[i].addEventListener("click",function(){
    sticker_lightbox1.classList.add("text_none")
  });
}

let cancel1 = sticker_lightbox1.querySelectorAll(".cancel1");
for(let i = 0; i < cancel1.length; i++){
  cancel1[i].addEventListener("click", function() {
    sticker_lightbox1.classList.add("text_none");
  });
}

sticker_lightbox1.addEventListener("click", function() {
  this.classList.add("text_none");
});

sticker_lightbox1.querySelectorAll(".sticker_text");
for(let i=0; i < sticker_text.length; i++){
  sticker_text[i].addEventListener("click", function(e) {
    e.stopPropagation();
  });
}

// gift
let sticker_lightbox2 = document.getElementsByClassName("sticker_lightbox2")[0];
let gift = document.getElementsByClassName("gift");
let sticker_gift = document.getElementsByClassName("sticker_gift");

for (let i = 0; i < gift.length; i++) {
  gift[i].addEventListener("click", function() {
    sticker_lightbox2.classList.remove("gift_none");
    for (let j = 0; j < sticker_gift.length; j++) {
      sticker_gift[j].style.display = "none";
    }
    sticker_gift[i].style.display = "block";
  });
}

let close2 = sticker_lightbox2.querySelectorAll(".close2");
for(let i = 0; i < close2.length; i++){
  close2[i].addEventListener("click", function() {
    sticker_lightbox2.classList.add("gift_none")
});
}


let cancel2 = sticker_lightbox2.querySelectorAll(".cancel2");
for(let i = 0; i < cancel2.length; i++){
  cancel2[i].addEventListener("click", function() {
    sticker_lightbox2.classList.add("gift_none")
  });
}

sticker_lightbox2.addEventListener("click", function() {
  this.classList.add("gift_none");
});

sticker_lightbox2.querySelectorAll(".sticker_gift");
for(let i=0; i < sticker_gift.length; i++){
  sticker_gift[i].addEventListener("click", function(e) {
    e.stopPropagation();
  });
}


// 點擊完成後關閉輸入框
for(let i = 0; i < sticker_gift.length; i++){
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
    document.getElementsByClassName("num2")[i].innerHTML = Number(document.getElementsByClassName("num2")[i].innerHTML)-1
    if(document.getElementsByClassName("num2")[i].innerHTML<=0){
      document.getElementsByClassName("num2")[i].innerHTML = 0
    }
    document.getElementsByClassName("money_num")[i].innerHTML = Number(document.getElementsByClassName("num2")[i].innerHTML) * 10
  });
}


let addition = document.getElementsByClassName("addition");
for(let i = 0; i < addition.length; i++){
  addition[i].addEventListener("click",function(){
    document.getElementsByClassName("num2")[i].innerHTML = Number(document.getElementsByClassName("num2")[i].innerHTML)+1
    if(document.getElementsByClassName("num2")[i].innerHTML<=0){
      document.getElementsByClassName("num2")[i].innerHTML = 0
    }
    document.getElementsByClassName("money_num")[i].innerHTML = Number(document.getElementsByClassName("num2")[i].innerHTML) * 10
  });
}
