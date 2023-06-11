// 連結頁面
// function navigateToUrl() {
//   const selectElement = document.getElementById("choose");
//   const selectedValue = selectElement.value;
//   window.location.href = selectedValue;
// }


// 配件動態生成
$.ajax({
    method: "POST",
    url: "php/getMemberPackageForDiary.php",
    data:{},
    dataType: "json",
    success: function (response) {
        console.log(response);
        let str = "";

        for(let i = 0; i < response.length; i++){
            
            str += 
            `<li class="number">
                <div class="${response[i].itemType}" data-index="${response[i].storeID}" id="index${response[i].storeID}">
                    <img src="IMG/people/${response[i].itemImage}" alt="">
                </div>
                <div class="money">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 50 50"
                        .a{fill="none"
                        }
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                        class="a"
                        d="M26.875 31.3008H27.45C28.275 31.3008 28.975 30.5508 28.975 29.6258C28.975 28.4508 28.7 28.3008 27.9 28.0258L26.875 27.6758V31.3008Z"
                        fill="#000"
                        />
                        <path 
                        class="a"
                        d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM13.95 36.05C14.675 36.775 14.675 37.975 13.95 38.7C13.575 39.075 13.1 39.25 12.625 39.25C12.15 39.25 11.675 39.075 11.3 38.7C7.64997 35.05 5.625 30.175 5.625 25C5.625 19.825 7.64997 14.95 11.3 11.3C12.025 10.575 13.225 10.575 13.95 11.3C14.675 12.025 14.675 13.225 13.95 13.95C11 16.9 9.375 20.825 9.375 25C9.375 29.175 11 33.1 13.95 36.05ZM29.125 24.45C31.525 25.3 32.7 26.975 32.7 29.6C32.7 32.6 30.35 35.025 27.425 35.025H26.85V35.475C26.85 36.5 26 37.35 24.975 37.35C23.95 37.35 23.1 36.5 23.1 35.475V35.025H23.025C19.85 35.025 17.25 32.35 17.25 29.075C17.25 28.05 18.1 27.2 19.125 27.2C20.15 27.2 21 28.05 21 29.075C21 30.3 21.9 31.275 23.025 31.275H23.1V26.325L20.85 25.525C18.45 24.675 17.275 23 17.275 20.375C17.275 17.375 19.625 14.95 22.55 14.95H23.125V14.5C23.125 13.475 23.975 12.625 25 12.625C26.025 12.625 26.875 13.475 26.875 14.5V14.95H26.95C30.125 14.95 32.725 17.625 32.725 20.9C32.725 21.925 31.875 22.775 30.85 22.775C29.825 22.775 28.975 21.925 28.975 20.9C28.975 19.675 28.075 18.7 26.95 18.7H26.875V23.65L29.125 24.45ZM38.7 38.7C38.325 39.075 37.85 39.25 37.375 39.25C36.9 39.25 36.425 39.075 36.05 38.7C35.325 37.975 35.325 36.775 36.05 36.05C39 33.1 40.625 29.175 40.625 25C40.625 20.825 39 16.9 36.05 13.95C35.325 13.225 35.325 12.025 36.05 11.3C36.775 10.575 37.975 10.575 38.7 11.3C42.35 14.95 44.375 19.825 44.375 25C44.375 30.175 42.35 35.05 38.7 38.7Z"
                        fill="#000"
                        />
                        <path
                        class="a"
                        d="M21.0498 20.4012C21.0498 21.5762 21.3248 21.7262 22.1248 22.0012L23.1498 22.3512V18.7012H22.5748C21.7248 18.7012 21.0498 19.4762 21.0498 20.4012Z"
                        fill="#000"
                        />
                    </svg>
                </div>
            </li>`;

            
        }
  
        document.getElementById("nav_down_wrapper").innerHTML = str;
        
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

            // 延遲一下，待資料傳輸完成
            let t = setTimeout( function(){
                location.reload();
            }, 300)

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

                        console.log("--");
        
                        doll_box_hair.src = ""; // 圖片路徑移除
                        doll_lightbox_hair.src = ""; // 購物車內圖片路徑移除
                        
                    } else if ( doll.hair == -1 ) { //目前無試穿該類別物件
                        doll.hair = this.querySelector("div").getAttribute("data-index");

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

                    console.log("--");
        
                    doll_box_clothes.src = ""; // 圖片路徑移除
                    doll_lightbox_clothes.src = ""; // 購物車內圖片路徑移除
        
                    } else if ( doll.clothes == -1 ) { //目前無試穿該類別物件
                    doll.clothes = this.querySelector("div").getAttribute("data-index");

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

                    console.log("--");
        
                    doll_box_bottoms.src = ""; // 圖片路徑移除
                    doll_lightbox_bottoms.src = ""; // 購物車內圖片路徑移除
        
                    } else if ( doll.bottoms == -1 ) { //目前無試穿該類別物件
                    doll.bottoms = this.querySelector("div").getAttribute("data-index");

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

                    console.log("--");
        
                    doll_box_accessories1.src = ""; // 圖片路徑移除
                    doll_lightbox_accessories1.src = ""; // 購物車內圖片路徑移除
        
                    } else if ( doll.accessories1 == -1 ) { //目前無試穿該類別物件
                    doll.accessories1 = this.querySelector("div").getAttribute("data-index");

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

                    console.log("--");
        
                    doll_box_accessories2.src = ""; // 圖片路徑移除
                    doll_lightbox_accessories2.src = ""; // 購物車內圖片路徑移除
        
                    } else if ( doll.accessories2 == -1 ) { //目前無試穿該類別物件
                    doll.accessories2 = this.querySelector("div").getAttribute("data-index");

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

                    console.log("--");
        
                    doll_box_accessories3.src = ""; // 圖片路徑移除
                    doll_lightbox_accessories3.src = ""; // 購物車內圖片路徑移除
        
                    } else if ( doll.accessories3 == -1 ) { //目前無試穿該類別物件
                    doll.accessories3 = this.querySelector("div").getAttribute("data-index");

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

                    console.log("--");
        
                    doll_box_eyebrow.src = ""; // 圖片路徑移除
                    doll_lightbox_eyebrow.src = ""; // 購物車內圖片路徑移除
        
                    } else if ( doll.eyebrow == -1 ) { //目前無試穿該類別物件
                    doll.eyebrow = this.querySelector("div").getAttribute("data-index");

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

                    console.log("--");
        
                    doll_box_eye.src = ""; // 圖片路徑移除
                    doll_lightbox_eye.src = ""; // 購物車內圖片路徑移除
        
                    } else if ( doll.eye == -1 ) { //目前無試穿該類別物件
                    doll.eye = this.querySelector("div").getAttribute("data-index");

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

                    console.log("--");
        
                    doll_box_mouth.src = ""; // 圖片路徑移除
                    doll_lightbox_mouth.src = ""; // 購物車內圖片路徑移除
        
                    } else if ( doll.mouth == -1 ) { //目前無試穿該類別物件
                    doll.mouth = this.querySelector("div").getAttribute("data-index");

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

                    console.log("--");
        
                    doll_box_clothes.src = ""; // 圖片路徑移除
                    doll_lightbox_clothes.src = ""; // 購物車內圖片路徑移除
        
                    } else if ( doll.clothes == -1 ) { //目前無試穿該類別物件
                    doll.clothes = this.querySelector("div").getAttribute("data-index");

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

                    console.log("--");
        
                    doll_box_bottoms.src = ""; // 圖片路徑移除
                    doll_lightbox_bottoms.src = ""; // 購物車內圖片路徑移除
        
                    } else if ( doll.bottoms == -1 ) { //目前無試穿該類別物件
                    doll.bottoms = this.querySelector("div").getAttribute("data-index");

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

                    console.log("--");
        
                    doll_box_accessories1.src = ""; // 圖片路徑移除
                    doll_lightbox_accessories1.src = ""; // 購物車內圖片路徑移除
        
                    } else if ( doll.accessories1 == -1 ) { //目前無試穿該類別物件
                    doll.accessories1 = this.querySelector("div").getAttribute("data-index");

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

                    console.log("--");
        
                    doll_box_accessories2.src = ""; // 圖片路徑移除
                    doll_lightbox_accessories2.src = ""; // 購物車內圖片路徑移除
        
                    } else if ( doll.accessories2 == -1 ) { //目前無試穿該類別物件
                    doll.accessories2 = this.querySelector("div").getAttribute("data-index");

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

                    console.log("--");
        
                    doll_box_accessories3.src = ""; // 圖片路徑移除
                    doll_lightbox_accessories3.src = ""; // 購物車內圖片路徑移除
        
                    } else if ( doll.accessories3 == -1 ) { //目前無試穿該類別物件
                    doll.accessories3 = this.querySelector("div").getAttribute("data-index");

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

                    console.log("--");
        
                    doll_box_eyebrow.src = ""; // 圖片路徑移除
                    doll_lightbox_eyebrow.src = ""; // 購物車內圖片路徑移除
        
                    } else if ( doll.eyebrow == -1 ) { //目前無試穿該類別物件
                    doll.eyebrow = this.querySelector("div").getAttribute("data-index");

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

                    console.log("--");
        
                    doll_box_eye.src = ""; // 圖片路徑移除
                    doll_lightbox_eye.src = ""; // 購物車內圖片路徑移除
        
                    } else if ( doll.eye == -1 ) { //目前無試穿該類別物件
                    doll.eye = this.querySelector("div").getAttribute("data-index");

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

                    console.log("--");
        
                    doll_box_mouth.src = ""; // 圖片路徑移除
                    doll_lightbox_mouth.src = ""; // 購物車內圖片路徑移除
        
                    } else if ( doll.mouth == -1 ) { //目前無試穿該類別物件
                    doll.mouth = this.querySelector("div").getAttribute("data-index");

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

        // 重選
        reset.addEventListener("click", resetAll);
    
        function resetAll(){
            console.log(99);
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

        }

    },
    error: function(exception) {
        alert("數據載入失敗: " + exception.status);
    }
  });