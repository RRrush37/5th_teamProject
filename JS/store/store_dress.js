// 連結頁面
// function navigateToUrl() {
//   const selectElement = document.getElementById("choose");
//   const selectedValue = selectElement.value;
//   window.location.href = selectedValue;
// }


// 先要錢金幣資料
// $.ajax({
//   url: "php/getBuyLog.php",
//   method: "post",
//   datatype: "json",
//   data: {
//     type: "1",
//   },
//   success: (response) => {
//     alert(response);
//     response = JSON.parse(response);
//     console.log(response[0].totalCoin);
//     console.log(response[0]);
//     let str = "";
    
//     for (let i = 0; i < response.length; i++) {
//       let month = Math.floor(response[i].date/100);
//       let day = response[i].date%100;
//       let str1 =
//       `
//         <li>
//             <p>${month}/${day}</p>
//             <p>${response[i].coinChange}</p>
//             <p>${response[i].totalCoin}</p>
//         </li>
//       `
//       str += str1;
//     }
//     document.querySelector(".stored").innerHTML = str
//     // $(".stored").html(str);
//   },
//   error: (xhr, status, error) => {
//     alert("error: " + error);
//   },
// });


// lightbox
// 確認配件
let dresss_lightbox = document.getElementsByClassName("dresss_lightbox")[0];
let check = document.getElementsByClassName("check")[0];
let reset = document.getElementsByClassName("reset")[0];
let selectedObject = document.getElementById("selectedObject");
let dresss = document.getElementsByClassName("dresss");
let doll = { //用來儲存data-index記錄小人身上穿戴的物件
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


// 確認
check.addEventListener("click", function(){
  let nochoose = true ;
  console.log(nochoose);

  Object.values(doll).forEach(element => {
    if ( element != -1 ) {
      nochoose = false ;
    }
  });

  if ( nochoose == false ) {
    dresss_lightbox.classList.remove("dresss_none");
  }else{
    alert("請選擇物件");
  }
    
});


// lightbox
// 確認配件
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


// 消費紀錄style更換
let pay_record = document.getElementById("pay_record");
pay_record.addEventListener("mouseenter", function() {
  if (pay_record.src.includes("pay_record3.png")) {
    pay_record.src = "IMG/store/pay_record1.png";
    pay_record.style.filter = 'drop-shadow(3px 3px 3px rgb(0, 0, 0))';
  }
});
pay_record.addEventListener("mouseleave", function() {
  if (pay_record.src.includes("pay_record1.png")) {
    pay_record.src = "IMG/store/pay_record3.png";
    pay_record.style.filter = 'drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.406))';
  }
});


// lightbox
// 消費紀錄燈箱
let pay_lightbox = document.getElementsByClassName("pay_lightbox")[0];
let pay_wrapper = document.getElementsByClassName("pay_wrapper");

pay_record.addEventListener("click", function(){
  pay_lightbox.classList.remove("pay_none");
});

let pay_close = document.getElementsByClassName("pay_close")[0];
pay_close.addEventListener("click", function(){
  pay_lightbox.classList.add("pay_none");
});

pay_lightbox.addEventListener("click", function(){
  this.classList.add("pay_none");
});

pay_lightbox.querySelector(".pay_wrapper").addEventListener("click", function(e){
  e.stopPropagation();
});


// 消費
$.ajax({
  url: "php/getBuyLog.php",
  method: "post",
  datatype: "json",
  data: {
    type: "1",
  },
  success: (response) => {
    alert(response);
    response = JSON.parse(response);
    console.log(response[0].totalCoin);
    console.log(response[0]);
    let str = "";
    
    for (let i = 0; i < response.length; i++) {
      let month = Math.floor(response[i].date/100);
      let day = response[i].date%100;
      let str1 =
      `
        <li>
            <p>${month}/${day}</p>
            <p>${response[i].coinChange}</p>
            <p>${response[i].totalCoin}</p>
        </li>
      `
      str += str1;
    }
    document.querySelector(".pay").innerHTML = str
  },
  error: (xhr, status, error) => {
    alert("error: " + error);
  },
});


// 下面的js是給配件有滑動的
let isDown = false;
let startX;
let scrollLeft;

const nav_down_wrapper = document.querySelector("#nav_down_wrapper");
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


  //下排物件
  let items = document.getElementsByClassName("number") ;

  //中間小人及物件
  let doll_box = document.getElementsByClassName("coutainer")[0];
  let doll_box_hair = doll_box.querySelector(".hair").querySelector("img");
  let doll_box_clothes = doll_box.querySelector(".clothes").querySelector("img");
  let doll_box_bottoms = doll_box.querySelector(".bottoms").querySelector("img");
  let doll_box_accessories1 = doll_box.querySelector(".accessories1").querySelector("img");
  let doll_box_accessories2 = doll_box.querySelector(".accessories2").querySelector("img");
  let doll_box_accessories3 = doll_box.querySelector(".accessories3").querySelector("img");
  let doll_box_eyebrow = doll_box.querySelector(".eyebrow").querySelector("img");
  let doll_box_eye = doll_box.querySelector(".eye").querySelector("img");
  let doll_box_mouth = doll_box.querySelector(".mouth").querySelector("img");

  // 購物車小人及物件
  let doll_lightbox = document.getElementsByClassName("doll_lightbox")[0];
  let doll_lightbox_hair = doll_lightbox.querySelector(".hair").querySelector("img");
  let doll_lightbox_clothes = doll_lightbox.querySelector(".clothes").querySelector("img");
  let doll_lightbox_bottoms = doll_lightbox.querySelector(".bottoms").querySelector("img");
  let doll_lightbox_accessories1 = doll_lightbox.querySelector(".accessories1").querySelector("img");
  let doll_lightbox_accessories2 = doll_lightbox.querySelector(".accessories2").querySelector("img");
  let doll_lightbox_accessories3 = doll_lightbox.querySelector(".accessories3").querySelector("img");
  let doll_lightbox_eyebrow = doll_lightbox.querySelector(".eyebrow").querySelector("img");
  let doll_lightbox_eye = doll_lightbox.querySelector(".eye").querySelector("img");
  let doll_lightbox_mouth = doll_lightbox.querySelector(".mouth").querySelector("img");


  for ( let i = 0 ; i < items.length ; i++) {
    items[i].addEventListener("click", function(){
      // 判斷目前是哪一個被點選到

      if ( this.querySelector("div").classList.contains("hair") ) {
        //判斷被點選的是否為頭髮類別

        if ( this.querySelector("div").getAttribute("data-index") == doll.hair ) {
          //經由data-index來記錄點選到的是哪一個物件
          // 當點擊了已試穿的物件，則要移除試穿物件並將金錢減去
          doll.hair = -1 ;
          addToTotal( this.querySelector("div").getAttribute("data-money"), false);
          console.log("--");

          doll_box_hair.src = ""; // 圖片路徑移除
          doll_lightbox_hair.src = ""; // 購物車內圖片路徑移除
          
        } else if ( doll.hair == -1 ) { //目前無試穿該類別物件
          doll.hair = this.querySelector("div").getAttribute("data-index");
          addToTotal( this.querySelector("div").getAttribute("data-money"), true);
          console.log("++");

        doll_box_hair.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_hair.src = this.querySelector("img").src; // 購物車內圖片路徑更換

      } else if ( doll.hair != -1 ) { //已有試穿該類別其他物件，要替換物件
        doll.hair = this.querySelector("div").getAttribute("data-index") ;
        console.log("更換");

        doll_box_hair.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_hair.src = this.querySelector("img").src; // 購物車內圖片路徑更換
      }

    } else if ( this.querySelector("div").classList.contains("clothes") ) {

      if ( this.querySelector("div").getAttribute("data-index") == doll.clothes ) {
        // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
        doll.clothes = -1 ;
        addToTotal( this.querySelector("div").getAttribute("data-money"), false);
        console.log("--");

        doll_box_clothes.src = ""; // 圖片路徑移除
        doll_lightbox_clothes.src = ""; // 購物車內圖片路徑移除

      } else if ( doll.clothes == -1 ) { //目前無試穿該類別物件
        doll.clothes = this.querySelector("div").getAttribute("data-index");
        addToTotal( this.querySelector("div").getAttribute("data-money"), true);
        console.log("++");

        doll_box_clothes.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_clothes.src = this.querySelector("img").src; // 購物車內圖片路徑更換

      } else if ( doll.clothes != -1 ) { //已有試穿該類別其他物件，要替換物件
        doll.clothes = this.querySelector("div").getAttribute("data-index") ;
        console.log("更換");
        console.log("doll.clothes"+doll.clothes);

        doll_box_clothes.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_clothes.src = this.querySelector("img").src; // 購物車內圖片路徑更換
      }

    } else if ( this.querySelector("div").classList.contains("bottoms") ) {

      if ( this.querySelector("div").getAttribute("data-index") == doll.bottoms ) {
        // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
        doll.bottoms = -1 ;
        addToTotal( this.querySelector("div").getAttribute("data-money"), false);
        console.log("--");

        doll_box_bottoms.src = ""; // 圖片路徑移除
        doll_lightbox_bottoms.src = ""; // 購物車內圖片路徑移除

      } else if ( doll.bottoms == -1 ) { //目前無試穿該類別物件
        doll.bottoms = this.querySelector("div").getAttribute("data-index");
        addToTotal( this.querySelector("div").getAttribute("data-money"), true);
        console.log("++");

        doll_box_bottoms.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_bottoms.src = this.querySelector("img").src; // 購物車內圖片路徑更換

      } else if ( doll.bottoms != -1 ) { //已有試穿該類別其他物件，要替換物件
        doll.bottoms = this.querySelector("div").getAttribute("data-index") ;
        console.log("更換");
        console.log("doll.bottoms"+doll.bottoms);

        doll_box_bottoms.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_bottoms.src = this.querySelector("img").src; // 購物車內圖片路徑更換
      }

    } else if ( this.querySelector("div").classList.contains("accessories1") ) {

      if ( this.querySelector("div").getAttribute("data-index") == doll.accessories1 ) {
        // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
        doll.accessories1 = -1 ;
        addToTotal( this.querySelector("div").getAttribute("data-money"), false);
        console.log("--");

        doll_box_accessories1.src = ""; // 圖片路徑移除
        doll_lightbox_accessories1.src = ""; // 購物車內圖片路徑移除

      } else if ( doll.accessories1 == -1 ) { //目前無試穿該類別物件
        doll.accessories1 = this.querySelector("div").getAttribute("data-index");
        addToTotal( this.querySelector("div").getAttribute("data-money"), true);
        console.log("++");

        doll_box_accessories1.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_accessories1.src = this.querySelector("img").src; // 購物車內圖片路徑更換

      } else if ( doll.accessories1 != -1 ) { //已有試穿該類別其他物件，要替換物件
        doll.accessories1 = this.querySelector("div").getAttribute("data-index") ;
        console.log("更換");
        console.log("doll.accessories1"+doll.accessories1);

        doll_box_accessories1.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_accessories1.src = this.querySelector("img").src; // 購物車內圖片路徑更換
      }

    } else if ( this.querySelector("div").classList.contains("accessories2") ) {

      if ( this.querySelector("div").getAttribute("data-index") == doll.accessories2 ) {
        // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
        doll.accessories2 = -1 ;
        addToTotal( this.querySelector("div").getAttribute("data-money"), false);
        console.log("--");

        doll_box_accessories2.src = ""; // 圖片路徑移除
        doll_lightbox_accessories2.src = ""; // 購物車內圖片路徑移除

      } else if ( doll.accessories2 == -1 ) { //目前無試穿該類別物件
        doll.accessories2 = this.querySelector("div").getAttribute("data-index");
        addToTotal( this.querySelector("div").getAttribute("data-money"), true);
        console.log("++");

        doll_box_accessories2.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_accessories2.src = this.querySelector("img").src; // 購物車內圖片路徑更換

      } else if ( doll.accessories2 != -1 ) { //已有試穿該類別其他物件，要替換物件
        doll.accessories2 = this.querySelector("div").getAttribute("data-index") ;
        console.log("更換");
        console.log("doll.accessories2"+doll.accessories2);

        doll_box_accessories2.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_accessories2.src = this.querySelector("img").src; // 購物車內圖片路徑更換
      }

    } else if ( this.querySelector("div").classList.contains("accessories3") ) {

      if ( this.querySelector("div").getAttribute("data-index") == doll.accessories3 ) {
        // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
        doll.accessories3 = -1 ;
        addToTotal( this.querySelector("div").getAttribute("data-money"), false);
        console.log("--");

        doll_box_accessories3.src = ""; // 圖片路徑移除
        doll_lightbox_accessories3.src = ""; // 購物車內圖片路徑移除

      } else if ( doll.accessories3 == -1 ) { //目前無試穿該類別物件
        doll.accessories3 = this.querySelector("div").getAttribute("data-index");
        addToTotal( this.querySelector("div").getAttribute("data-money"), true);
        console.log("++");

        doll_box_accessories3.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_accessories3.src = this.querySelector("img").src; // 購物車內圖片路徑更換

      } else if ( doll.accessories3 != -1 ) { //已有試穿該類別其他物件，要替換物件
        doll.accessories3 = this.querySelector("div").getAttribute("data-index") ;
        console.log("更換");

        doll_box_accessories3.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_accessories3.src = this.querySelector("img").src; // 購物車內圖片路徑更換
      }

    } else if ( this.querySelector("div").classList.contains("eyebrow") ) {

      if ( this.querySelector("div").getAttribute("data-index") == doll.eyebrow ) {
        // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
        doll.eyebrow = -1 ;
        addToTotal( this.querySelector("div").getAttribute("data-money"), false);
        console.log("--");

        doll_box_eyebrow.src = ""; // 圖片路徑移除
        doll_lightbox_eyebrow.src = ""; // 購物車內圖片路徑移除

      } else if ( doll.eyebrow == -1 ) { //目前無試穿該類別物件
        doll.eyebrow = this.querySelector("div").getAttribute("data-index");
        addToTotal( this.querySelector("div").getAttribute("data-money"), true);
        console.log("++");

        doll_box_eyebrow.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_eyebrow.src = this.querySelector("img").src; // 購物車內圖片路徑更換

      } else if ( doll.eyebrow != -1 ) { //已有試穿該類別其他物件，要替換物件
        doll.eyebrow = this.querySelector("div").getAttribute("data-index") ;
        console.log("更換");
        console.log("doll.eyebrow"+doll.eyebrow);

        doll_box_eyebrow.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_eyebrow.src = this.querySelector("img").src; // 購物車內圖片路徑更換
      }

    } else if ( this.querySelector("div").classList.contains("eye") ) {

      if ( this.querySelector("div").getAttribute("data-index") == doll.eye ) {
        // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
        doll.eye = -1 ;
        addToTotal( this.querySelector("div").getAttribute("data-money"), false);
        console.log("--");

        doll_box_eye.src = ""; // 圖片路徑移除
        doll_lightbox_eye.src = ""; // 購物車內圖片路徑移除

      } else if ( doll.eye == -1 ) { //目前無試穿該類別物件
        doll.eye = this.querySelector("div").getAttribute("data-index");
        addToTotal( this.querySelector("div").getAttribute("data-money"), true);
        console.log("++");

        doll_box_eye.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_eye.src = this.querySelector("img").src; // 購物車內圖片路徑更換

      } else if ( doll.eye != -1 ) { //已有試穿該類別其他物件，要替換物件
        doll.eye = this.querySelector("div").getAttribute("data-index") ;
        console.log("更換");
        console.log("doll.eye"+doll.eye);

        doll_box_eye.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_eye.src = this.querySelector("img").src; // 購物車內圖片路徑更換
      }

    } else if ( this.querySelector("div").classList.contains("mouth") ) {

      if ( this.querySelector("div").getAttribute("data-index") == doll.mouth ) {
        // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
        doll.mouth = -1 ;
        addToTotal( this.querySelector("div").getAttribute("data-money"), false);
        console.log("--");

        doll_box_mouth.src = ""; // 圖片路徑移除
        doll_lightbox_mouth.src = ""; // 購物車內圖片路徑移除

      } else if ( doll.mouth == -1 ) { //目前無試穿該類別物件
        doll.mouth = this.querySelector("div").getAttribute("data-index");
        addToTotal( this.querySelector("div").getAttribute("data-money"), true);
        console.log("++");

        doll_box_mouth.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_mouth.src = this.querySelector("img").src; // 購物車內圖片路徑更換

      } else if ( doll.mouth != -1 ) { //已有試穿該類別其他物件，要替換物件
        doll.mouth = this.querySelector("div").getAttribute("data-index") ;
        console.log("更換");
        console.log("doll.mouth"+doll.mouth);

        doll_box_mouth.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_mouth.src = this.querySelector("img").src; // 購物車內圖片路徑更換
      }

      } else if ( this.querySelector("div").classList.contains("clothes") ) {

      if ( this.querySelector("div").getAttribute("data-index") == doll.clothes ) {
        // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
        doll.clothes = -1 ;
        addToTotal( this.querySelector("div").getAttribute("data-money"), false);
        console.log("--");

        doll_box_clothes.src = ""; // 圖片路徑移除
        doll_lightbox_clothes.src = ""; // 購物車內圖片路徑移除

      } else if ( doll.clothes == -1 ) { //目前無試穿該類別物件
        doll.clothes = this.querySelector("div").getAttribute("data-index");
        addToTotal( this.querySelector("div").getAttribute("data-money"), true);
        console.log("++");

        doll_box_clothes.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_clothes.src = this.querySelector("img").src; // 購物車內圖片路徑更換

      } else if ( doll.clothes != -1 ) { //已有試穿該類別其他物件，要替換物件
        doll.clothes = this.querySelector("div").getAttribute("data-index") ;
        console.log("更換");
        console.log("doll.clothes"+doll.clothes);

        doll_box_clothes.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_clothes.src = this.querySelector("img").src; // 購物車內圖片路徑更換
      }

    } else if ( this.querySelector("div").classList.contains("bottoms") ) {

      if ( this.querySelector("div").getAttribute("data-index") == doll.bottoms ) {
        // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
        doll.bottoms = -1 ;
        addToTotal( this.querySelector("div").getAttribute("data-money"), false);
        console.log("--");

        doll_box_bottoms.src = ""; // 圖片路徑移除
        doll_lightbox_bottoms.src = ""; // 購物車內圖片路徑移除

      } else if ( doll.bottoms == -1 ) { //目前無試穿該類別物件
        doll.bottoms = this.querySelector("div").getAttribute("data-index");
        addToTotal( this.querySelector("div").getAttribute("data-money"), true);
        console.log("++");

        doll_box_bottoms.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_bottoms.src = this.querySelector("img").src; // 購物車內圖片路徑更換

      } else if ( doll.bottoms != -1 ) { //已有試穿該類別其他物件，要替換物件
        doll.bottoms = this.querySelector("div").getAttribute("data-index") ;
        console.log("更換");
        console.log("doll.bottoms"+doll.bottoms);

        doll_box_bottoms.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_bottoms.src = this.querySelector("img").src; // 購物車內圖片路徑更換
      }

    } else if ( this.querySelector("div").classList.contains("accessories1") ) {

      if ( this.querySelector("div").getAttribute("data-index") == doll.accessories1 ) {
        // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
        doll.accessories1 = -1 ;
        addToTotal( this.querySelector("div").getAttribute("data-money"), false);
        console.log("--");

        doll_box_accessories1.src = ""; // 圖片路徑移除
        doll_lightbox_accessories1.src = ""; // 購物車內圖片路徑移除

      } else if ( doll.accessories1 == -1 ) { //目前無試穿該類別物件
        doll.accessories1 = this.querySelector("div").getAttribute("data-index");
        addToTotal( this.querySelector("div").getAttribute("data-money"), true);
        console.log("++");

        doll_box_accessories1.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_accessories1.src = this.querySelector("img").src; // 購物車內圖片路徑更換

      } else if ( doll.accessories1 != -1 ) { //已有試穿該類別其他物件，要替換物件
        doll.accessories1 = this.querySelector("div").getAttribute("data-index") ;
        console.log("更換");
        console.log("doll.accessories1"+doll.accessories1);

        doll_box_accessories1.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_accessories1.src = this.querySelector("img").src; // 購物車內圖片路徑更換
      }

    } else if ( this.querySelector("div").classList.contains("accessories2") ) {

      if ( this.querySelector("div").getAttribute("data-index") == doll.accessories2 ) {
        // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
        doll.accessories2 = -1 ;
        addToTotal( this.querySelector("div").getAttribute("data-money"), false);
        console.log("--");

        doll_box_accessories2.src = ""; // 圖片路徑移除
        doll_lightbox_accessories2.src = ""; // 購物車內圖片路徑移除

      } else if ( doll.accessories2 == -1 ) { //目前無試穿該類別物件
        doll.accessories2 = this.querySelector("div").getAttribute("data-index");
        addToTotal( this.querySelector("div").getAttribute("data-money"), true);
        console.log("++");

        doll_box_accessories2.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_accessories2.src = this.querySelector("img").src; // 購物車內圖片路徑更換

      } else if ( doll.accessories2 != -1 ) { //已有試穿該類別其他物件，要替換物件
        doll.accessories2 = this.querySelector("div").getAttribute("data-index") ;
        console.log("更換");
        console.log("doll.accessories2"+doll.accessories2);

        doll_box_accessories2.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_accessories2.src = this.querySelector("img").src; // 購物車內圖片路徑更換
      }

    } else if ( this.querySelector("div").classList.contains("accessories3") ) {

      if ( this.querySelector("div").getAttribute("data-index") == doll.accessories3 ) {
        // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
        doll.accessories3 = -1 ;
        addToTotal( this.querySelector("div").getAttribute("data-money"), false);
        console.log("--");

        doll_box_accessories3.src = ""; // 圖片路徑移除
        doll_lightbox_accessories3.src = ""; // 購物車內圖片路徑移除

      } else if ( doll.accessories3 == -1 ) { //目前無試穿該類別物件
        doll.accessories3 = this.querySelector("div").getAttribute("data-index");
        addToTotal( this.querySelector("div").getAttribute("data-money"), true);
        console.log("++");

        doll_box_accessories3.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_accessories3.src = this.querySelector("img").src; // 購物車內圖片路徑更換

      } else if ( doll.accessories3 != -1 ) { //已有試穿該類別其他物件，要替換物件
        doll.accessories3 = this.querySelector("div").getAttribute("data-index") ;
        console.log("更換");

        doll_box_accessories3.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_accessories3.src = this.querySelector("img").src; // 購物車內圖片路徑更換
      }

    } else if ( this.querySelector("div").classList.contains("eyebrow") ) {

      if ( this.querySelector("div").getAttribute("data-index") == doll.eyebrow ) {
        // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
        doll.eyebrow = -1 ;
        addToTotal( this.querySelector("div").getAttribute("data-money"), false);
        console.log("--");

        doll_box_eyebrow.src = ""; // 圖片路徑移除
        doll_lightbox_eyebrow.src = ""; // 購物車內圖片路徑移除

      } else if ( doll.eyebrow == -1 ) { //目前無試穿該類別物件
        doll.eyebrow = this.querySelector("div").getAttribute("data-index");
        addToTotal( this.querySelector("div").getAttribute("data-money"), true);
        console.log("++");

        doll_box_eyebrow.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_eyebrow.src = this.querySelector("img").src; // 購物車內圖片路徑更換

      } else if ( doll.eyebrow != -1 ) { //已有試穿該類別其他物件，要替換物件
        doll.eyebrow = this.querySelector("div").getAttribute("data-index") ;
        console.log("更換");
        console.log("doll.eyebrow"+doll.eyebrow);

        doll_box_eyebrow.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_eyebrow.src = this.querySelector("img").src; // 購物車內圖片路徑更換
      }

    } else if ( this.querySelector("div").classList.contains("eye") ) {

      if ( this.querySelector("div").getAttribute("data-index") == doll.eye ) {
        // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
        doll.eye = -1 ;
        addToTotal( this.querySelector("div").getAttribute("data-money"), false);
        console.log("--");

        doll_box_eye.src = ""; // 圖片路徑移除
        doll_lightbox_eye.src = ""; // 購物車內圖片路徑移除

      } else if ( doll.eye == -1 ) { //目前無試穿該類別物件
        doll.eye = this.querySelector("div").getAttribute("data-index");
        addToTotal( this.querySelector("div").getAttribute("data-money"), true);
        console.log("++");

        doll_box_eye.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_eye.src = this.querySelector("img").src; // 購物車內圖片路徑更換

      } else if ( doll.eye != -1 ) { //已有試穿該類別其他物件，要替換物件
        doll.eye = this.querySelector("div").getAttribute("data-index") ;
        console.log("更換");
        console.log("doll.eye"+doll.eye);

        doll_box_eye.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_eye.src = this.querySelector("img").src; // 購物車內圖片路徑更換
      }

    } else if ( this.querySelector("div").classList.contains("mouth") ) {

      if ( this.querySelector("div").getAttribute("data-index") == doll.mouth ) {
        // 當點擊了以試穿的物件，則要移除試穿物件並將金錢減去
        doll.mouth = -1 ;
        addToTotal( this.querySelector("div").getAttribute("data-money"), false);
        console.log("--");

        doll_box_mouth.src = ""; // 圖片路徑移除
        doll_lightbox_mouth.src = ""; // 購物車內圖片路徑移除

      } else if ( doll.mouth == -1 ) { //目前無試穿該類別物件
        doll.mouth = this.querySelector("div").getAttribute("data-index");
        addToTotal( this.querySelector("div").getAttribute("data-money"), true);
        console.log("++");

        doll_box_mouth.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_mouth.src = this.querySelector("img").src; // 購物車內圖片路徑更換

      } else if ( doll.mouth != -1 ) { //已有試穿該類別其他物件，要替換物件
        doll.mouth = this.querySelector("div").getAttribute("data-index") ;
        console.log("更換");
        console.log("doll.mouth"+doll.mouth);

        doll_box_mouth.src = this.querySelector("img").src; // 圖片路徑更換
        doll_lightbox_mouth.src = this.querySelector("img").src; // 購物車內圖片路徑更換
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

// 重選
reset.addEventListener("click", resetAll())

function resetAll(){
  doll_box_hair.src = "";
  doll_box_clothes.src = "";
  doll_box_bottoms.src = "";
  doll_box_accessories1.src = "";
  doll_box_accessories2.src = "";
  doll_box_accessories3.src = "";
  doll_box_eyebrow.src = "";
  doll_box_eye.src = "";
  doll_box_mouth.src = "";

  doll_lightbox_hair.src = "";
  doll_lightbox_clothes.src = "";
  doll_lightbox_bottoms.src = "";
  doll_lightbox_accessories1.src = "";
  doll_lightbox_accessories2.src = "";
  doll_lightbox_accessories3.src = "";
  doll_lightbox_eyebrow.src = "";
  doll_lightbox_eye.src = "";
  doll_lightbox_mouth.src = "";
  doll = { 
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

  total = 0;
}

let sendCheck = document.getElementsByClassName('send_check')[0];

sendCheck.addEventListener('click',function(e){
  // let dresss_lightbox = document.getElementsByClassName('dresss_lightbox')[0];
  let money = document.getElementById('result').innerText;

  console.log(money);
  let myitem = { 
    "hair": [],
    "clothes": [],
    "bottoms": [],
    "accessories1": [],
    "accessories2": [],
    "accessories3": [],
    "eyebrow": [],
    "eye": [],
    "mouth": []
  }; 

  
  $.ajax({
    url: "php/getMemberPackage.php",
    method: "POST",
    dataType: "text",
    data: {},
    success: function(response) {
      response = JSON.parse(response);
      console.log(response);
  
      //將資料庫的資料放到myitem裡面
      $.each(response, function(index, row) {
        // console.log(row);
        if (index === "hair" && Array.isArray(row)) {
          myitem.hair = row;
        } else if (index === "clothes" && Array.isArray(row)) {
          myitem.clothes = row;
        } else if (index === "bottoms" && Array.isArray(row)) {
          myitem.bottoms = row;
        } else if (index === "accessories1" && Array.isArray(row)) {
          myitem.accessories1 = row;
        } else if (index === "accessories2" && Array.isArray(row)) {
          myitem.accessories2 = row;
        } else if (index === "accessories3" && Array.isArray(row)) {
          myitem.accessories3 = row;
        } else if (index === "eyebrow" && Array.isArray(row)) {
          myitem.eyebrow = row;
        } else if (index === "eye" && Array.isArray(row)) {
          myitem.eye = row;
        } else if (index === "mouth" && Array.isArray(row)) {
          myitem.mouth = row;
        }
      });
  
      console.log(myitem);

      //用myitem與這次購買doll的裝備做比較
      $.each(myitem, function(index, row) {

        if ( index === "hair" ) {
          $.each(row, function(index, row2) {
            if ( row2 == doll.hair ) {
              doll.hair = -1;
            }
          })
        } else if (index === "clothes" ) {
          $.each(row, function(index, row2) {
            if ( row == doll.clothes ) {
              doll.clothes = -1;
            }
          })
        } else if (index === "bottoms" ) {
          $.each(row, function(index, row2) {
            if ( row == doll.bottoms ) {
              doll.bottoms = -1;
            }
          })
        } else if (index === "accessories1" ) {
          $.each(row, function(index, row2) {
            if ( row == doll.accessories1 ) {
              doll.accessories1 = -1;
            }
          })
        } else if (index === "accessories2" ) {
          $.each(row, function(index, row2) {
            if ( row == doll.accessories2 ) {
              doll.accessories2 = -1;
            }
          })
        } else if (index === "accessories3") {
          $.each(row, function(index, row2) {
            if ( row == doll.accessories3 ) {
              doll.accessories3 = -1;
            }
          })
        } else if (index === "eyebrow" ) {
          $.each(row, function(index, row2) {
            if ( row == doll.eyebrow ) {
              doll.eyebrow = -1;
            }
          })
        } else if (index === "eye" ) {
          $.each(row, function(index, row2) {
            if ( row == doll.eye ) {
              doll.eye = -1;
            }
          })
        } else if (index === "mouth" ) {
          $.each(row, function(index, row2) {
            if ( row == doll.mouth ) {
              doll.mouth = -1;
            }
          })
        }
      });
      console.log(doll);

      let checkOK = false ;
      $.each(doll, function(index, row) {
        console.log(row);
        if ( row != -1 ) {
          checkOK = true ;
        }
      })

      if (checkOK) { // 至少有一項商品沒有買過
        $.ajax({
            url: "php/buy_dress.php",
            method: "POST",
            dataType: "text",
            data: {
              "money":money,
              // "doll_list" : doll,
              "hair" : doll.hair,
              "clothes": doll.clothes,
              "bottoms": doll.bottoms,
              "accessories1": doll.accessories1,
              "accessories2": doll.accessories2,
              "accessories3": doll.accessories3,
              "eyebrow": doll.eyebrow,
              "eye": doll.eye,
              "mouth": doll.mouth
            },
            success: function(response) {
              response = JSON.parse(response);
              console.log(response);
              if (response == "success") {

                alert("購買成功");
                resetAll();
                dresss_lightbox.classList.add("dresss_none");
              } else if (response == "balance") {
                alert("餘額不足");
                location.href = "store_pay_record.html";
              } else {
                alert("未知狀態");
                console.log(response);
              }
              // alert("確定購買");
            },
            error: function(exception) {
              alert("數據載入失敗: " + exception.status);
            
            }
          });
      } else {
        //全部都是購買過的東西，所以不存入資料庫
        resetAll();
      }


    },
    error: function(exception) {
      alert("數據載入失敗: " + exception.status);
    }
  });

 

})

