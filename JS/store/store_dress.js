// 連結頁面
function navigateToUrl() {
  const selectElement = document.getElementById("choose");
  const selectedValue = selectElement.value;
  window.location.href = selectedValue;
}


// lightbox
let dresss_lightbox = document.getElementsByClassName("dresss_lightbox")[0];
let check = document.getElementsByClassName("check")[0];
let dresss = document.getElementsByClassName("dresss");

check.addEventListener("click", function(){
    dresss_lightbox.classList.remove("dresss_none");
});

let send = document.getElementsByClassName("send")[0];
send.addEventListener("click", function(){
    dresss_lightbox.classList.add("dresss_none");
});

let fa_xmark = document.getElementsByClassName("fa-xmark")[0];
fa_xmark.addEventListener("click", function(){
    dresss_lightbox.classList.add("dresss_none");
});

dresss_lightbox.addEventListener("click", function(){
  this.classList.add("dresss_none");
});

dresss_lightbox.querySelector(".dresss").addEventListener("click", function(e){
  e.stopPropagation();
});