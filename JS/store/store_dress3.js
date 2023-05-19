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
  
  
  // 下面的js是給配件有滑動的
  let isDown = false;
  let startX;
  let scrollLeft;
  
  const nav_down_wrapper = document.querySelector(".nav_down_wrapper");
  const boxWrapper = document.querySelector(".box-wrapper");
  const scrollbar = document.querySelector(".scrollbar"); 
  
  nav_down_wrapper.addEventListener("mousedown", (e) => {
    isDown = true;
    nav_down_wrapper.classList.add("active");
    startX = e.pageX - nav_down_wrapper.offsetLeft;
    scrollLeft = nav_down_wrapper.scrollLeft;
  });
  
  nav_down_wrapper.addEventListener("mouseleave", () => {
    isDown = false;
    nav_down_wrapper.classList.remove("active");
  });
  
  nav_down_wrapper.addEventListener("mouseup", () => {
    isDown = false;
    nav_down_wrapper.classList.remove("active");
  });
  
  nav_down_wrapper.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - nav_down_wrapper.offsetLeft;
    const walk = (x - startX) * 3; // adjust scroll speed
    nav_down_wrapper.scrollLeft = scrollLeft - walk;
  
    updateScrollbar();
  });
  
  const updateScrollbar = () => {
    const scrollbarHeight = nav_down_wrapper.offsetHeight;
    const sliderHeight = nav_down_wrapper.scrollHeight;
  }