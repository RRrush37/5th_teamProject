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


// 角色配件金額
  let total = 0;
  let result_el = document.getElementById("result");
  let lastClickedNumber = null;
  let doll = {
    "hair": -1,
    "clothes": -1,
    "bottoms": -1,
    "accessories1": -1,
    "accessories2": -1,
    "accessories3": -1,
    "eyebrow": -1,
    "eye": -1,
    "mouth": -1
  };

  let items = document.getElementsByClassName("number") ;

  for ( let i = 0 ; i < items.length ; i++) {
    items[i].addEventListener("click", function(){
      // console.log(this);
      // console.log(this.querySelector("div")) ;

      if ( this.querySelector("div").classList.contains("hair") ) {
        // console.log(this.querySelector("div").getAttribute("data-index"));

        if ( this.querySelector("div").getAttribute("data-index") == doll.hair ) {
          // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
          doll.hair = -1 ;
          addToTotal( this.querySelector("div").getAttribute("data-money"), false);
          console.log("--");

        } else if ( doll.hair == -1 ) { //目前無試穿該類別物件
          doll.hair = this.querySelector("div").getAttribute("data-index");
          addToTotal( this.querySelector("div").getAttribute("data-money"), true);
          console.log("++");

        } else if ( doll.hair != -1 ) { //已有試穿該類別其他物件，要替換物件
          doll.hair = this.querySelector("div").getAttribute("data-index") ;
          console.log("更換");
          console.log("doll.hair"+doll.hair);
        }

      } else if ( this.querySelector("div").classList.contains("clothes") ) {

        if ( this.querySelector("div").getAttribute("data-index") == doll.clothes ) {
          // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
          doll.clothes = -1 ;
          addToTotal( this.querySelector("div").getAttribute("data-money"), false);
          console.log("--");

        } else if ( doll.clothes == -1 ) { //目前無試穿該類別物件
          doll.clothes = this.querySelector("div").getAttribute("data-index");
          addToTotal( this.querySelector("div").getAttribute("data-money"), true);
          console.log("++");

        } else if ( doll.clothes != -1 ) { //已有試穿該類別其他物件，要替換物件
          doll.clothes = this.querySelector("div").getAttribute("data-index") ;
          console.log("更換");
          console.log("doll.clothes"+doll.clothes);
        }

      } else if ( this.querySelector("div").classList.contains("bottoms") ) {

        if ( this.querySelector("div").getAttribute("data-index") == doll.bottoms ) {
          // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
          doll.bottoms = -1 ;
          addToTotal( this.querySelector("div").getAttribute("data-money"), false);
          console.log("--");

        } else if ( doll.bottoms == -1 ) { //目前無試穿該類別物件
          doll.bottoms = this.querySelector("div").getAttribute("data-index");
          addToTotal( this.querySelector("div").getAttribute("data-money"), true);
          console.log("++");

        } else if ( doll.bottoms != -1 ) { //已有試穿該類別其他物件，要替換物件
          doll.bottoms = this.querySelector("div").getAttribute("data-index") ;
          console.log("更換");
          console.log("doll.bottoms"+doll.bottoms);
        }

      } else if ( this.querySelector("div").classList.contains("accessories1") ) {

        if ( this.querySelector("div").getAttribute("data-index") == doll.accessories1 ) {
          // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
          doll.accessories1 = -1 ;
          addToTotal( this.querySelector("div").getAttribute("data-money"), false);
          console.log("--");

        } else if ( doll.accessories1 == -1 ) { //目前無試穿該類別物件
          doll.accessories1 = this.querySelector("div").getAttribute("data-index");
          addToTotal( this.querySelector("div").getAttribute("data-money"), true);
          console.log("++");

        } else if ( doll.accessories1 != -1 ) { //已有試穿該類別其他物件，要替換物件
          doll.accessories1 = this.querySelector("div").getAttribute("data-index") ;
          console.log("更換");
          console.log("doll.accessories1"+doll.accessories1);
        }

      } else if ( this.querySelector("div").classList.contains("accessories2") ) {

        if ( this.querySelector("div").getAttribute("data-index") == doll.accessories2 ) {
          // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
          doll.accessories2 = -1 ;
          addToTotal( this.querySelector("div").getAttribute("data-money"), false);
          console.log("--");

        } else if ( doll.accessories2 == -1 ) { //目前無試穿該類別物件
          doll.accessories2 = this.querySelector("div").getAttribute("data-index");
          addToTotal( this.querySelector("div").getAttribute("data-money"), true);
          console.log("++");

        } else if ( doll.accessories2 != -1 ) { //已有試穿該類別其他物件，要替換物件
          doll.accessories2 = this.querySelector("div").getAttribute("data-index") ;
          console.log("更換");
          console.log("doll.accessories2"+doll.accessories2);
        }

      } else if ( this.querySelector("div").classList.contains("accessories3") ) {

        if ( this.querySelector("div").getAttribute("data-index") == doll.accessories3 ) {
          // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
          doll.accessories3 = -1 ;
          addToTotal( this.querySelector("div").getAttribute("data-money"), false);
          console.log("--");

        } else if ( doll.accessories3 == -1 ) { //目前無試穿該類別物件
          doll.accessories3 = this.querySelector("div").getAttribute("data-index");
          addToTotal( this.querySelector("div").getAttribute("data-money"), true);
          console.log("++");

        } else if ( doll.accessories3 != -1 ) { //已有試穿該類別其他物件，要替換物件
          doll.accessories3 = this.querySelector("div").getAttribute("data-index") ;
          console.log("更換");
          console.log("doll.accessories3"+doll.accessories3);
        }

      } else if ( this.querySelector("div").classList.contains("eyebrow") ) {

        if ( this.querySelector("div").getAttribute("data-index") == doll.eyebrow ) {
          // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
          doll.eyebrow = -1 ;
          addToTotal( this.querySelector("div").getAttribute("data-money"), false);
          console.log("--");

        } else if ( doll.eyebrow == -1 ) { //目前無試穿該類別物件
          doll.eyebrow = this.querySelector("div").getAttribute("data-index");
          addToTotal( this.querySelector("div").getAttribute("data-money"), true);
          console.log("++");

        } else if ( doll.eyebrow != -1 ) { //已有試穿該類別其他物件，要替換物件
          doll.eyebrow = this.querySelector("div").getAttribute("data-index") ;
          console.log("更換");
          console.log("doll.eyebrow"+doll.eyebrow);
        }

      } else if ( this.querySelector("div").classList.contains("eye") ) {

        if ( this.querySelector("div").getAttribute("data-index") == doll.eye ) {
          // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
          doll.eye = -1 ;
          addToTotal( this.querySelector("div").getAttribute("data-money"), false);
          console.log("--");

        } else if ( doll.eye == -1 ) { //目前無試穿該類別物件
          doll.eye = this.querySelector("div").getAttribute("data-index");
          addToTotal( this.querySelector("div").getAttribute("data-money"), true);
          console.log("++");

        } else if ( doll.eye != -1 ) { //已有試穿該類別其他物件，要替換物件
          doll.eye = this.querySelector("div").getAttribute("data-index") ;
          console.log("更換");
          console.log("doll.eye"+doll.eye);
        }

      } else if ( this.querySelector("div").classList.contains("mouth") ) {

        if ( this.querySelector("div").getAttribute("data-index") == doll.mouth ) {
          // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
          doll.mouth = -1 ;
          addToTotal( this.querySelector("div").getAttribute("data-money"), false);
          console.log("--");

        } else if ( doll.mouth == -1 ) { //目前無試穿該類別物件
          doll.mouth = this.querySelector("div").getAttribute("data-index");
          addToTotal( this.querySelector("div").getAttribute("data-money"), true);
          console.log("++");

        } else if ( doll.mouth != -1 ) { //已有試穿該類別其他物件，要替換物件
          doll.mouth = this.querySelector("div").getAttribute("data-index") ;
          console.log("更換");
          console.log("doll.mouth"+doll.mouth);
        }

      }

    })
  }

  function addToTotal(number, addOrMinus) {
    console.log("total:"+total);

    if ( addOrMinus == false ) { // false
      console.log("false");
      total -= Number(number) ;
      // lastClickedNumber = null;

    } else if ( addOrMinus == true ) {
      console.log("true");
      total += Number(number);
      // lastClickedNumber = index;
    }

    result.innerText = total;
    console.log("total:"+total);
    console.log("result.innerText"+result.innerText);

  }

  function resetTotal() {
    total = 0;
    lastClickedNumber = null;
    result.innerText = total;
  }