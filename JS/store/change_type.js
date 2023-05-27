

let number_list = document.getElementsByClassName("number"); // 下排li物件>class陣列
let nav_left_list = document.getElementsByClassName("nav_left")[0].querySelector("ul").querySelectorAll("li");
// 左邊項目的li>querySelectorAll陣列

for ( let i = 0 ; i < nav_left_list.length ; i++ ) {

    nav_left_list[i].addEventListener("click",function(){ //對左側欄位做監聽

        if ( this.classList.contains("all_type") ) { //確認使用者點選的物件是否包含"all_type"這個class名稱即點選到"全部"
            // alert("all_type");
            for ( let j = 0 ; j < number_list.length ; j++ ) { // 將全部下方li物件移除none這個class即全部顯示出來
                number_list[j].classList.remove("none");
            }

        } else if ( this.classList.contains("hair_type") ) { //確認使用者點選的物件是否包含"hair_type"這個class名稱即點選到"頭髮"
            // alert("hair_type");
            for ( let j = 0 ; j < number_list.length ; j++ ) {
                if ( number_list[j].querySelector("div").classList.contains("hair") ) {
                // 檢查下方li物件底下第一個div是否含有"hair"這個class名稱，如果有則移除none這個class即顯示出來
                    number_list[j].classList.remove("none");
                } else {
                // 如果沒有則加上none這個class即隱藏起來
                    number_list[j].classList.add("none");
                }
            }

        } else if ( this.classList.contains("clothes_type") ) { //確認使用者點選的物件是否包含"clothes_type"這個class名稱即點選到"上衣"
            // alert("clothes_type");
            for ( let j = 0 ; j < number_list.length ; j++ ) {
                if ( number_list[j].querySelector("div").classList.contains("clothes") ) {
                    // 檢查下方li物件底下第一個div是否含有"clothes"這個class名稱，如果有則移除none這個class即顯示出來
                    number_list[j].classList.remove("none");
                } else {
                    // 如果沒有則加上none這個class即隱藏起來
                    number_list[j].classList.add("none");
                }
            }
        } else if ( this.classList.contains("bottoms_type") ) { //確認使用者點選的物件是否包含"bottoms_type"這個class名稱即點選到"下裝"
            // alert("bottoms_type");
            for ( let j = 0 ; j < number_list.length ; j++ ) {
                if ( number_list[j].querySelector("div").classList.contains("bottoms") ) {
                    // 檢查下方li物件底下第一個div是否含有"bottoms"這個class名稱，如果有則移除none這個class即顯示出來
                    number_list[j].classList.remove("none");
                } else {
                    // 如果沒有則加上none這個class即隱藏起來
                    number_list[j].classList.add("none");
                }
            }
        } else if ( this.classList.contains("accessories_type") ) { //確認使用者點選的物件是否包含"accessories_type"這個class名稱即點選到"配件"
            // alert("accessories_type");
            for ( let j = 0 ; j < number_list.length ; j++ ) {
                if ( number_list[j].querySelector("div").classList.contains("accessories1") ||
                number_list[j].querySelector("div").classList.contains("accessories2") ||
                number_list[j].querySelector("div").classList.contains("accessories3") ) {
                    // 檢查下方li物件底下第一個div是否含有"accessories1 or 2 or 3"這個class名稱，如果有則移除none這個class即顯示出來
                    number_list[j].classList.remove("none");
                } else {
                    // 如果沒有則加上none這個class即隱藏起來
                    number_list[j].classList.add("none");
                }
            }
        }
    })
}
