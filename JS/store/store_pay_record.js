let buy_cash = 0  ;
function toggleCheckboxes(checkboxId) {

  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  console.log(checkboxes);
    checkboxes.forEach(function(checkbox) {
        if (checkbox.id !== checkboxId) {
            checkbox.checked = false;
            checkbox.disabled = false;
        } else {
            if (checkbox.checked) {
              checkboxes.forEach(function(otherCheckbox) {
                  if (otherCheckbox.id !== checkboxId) {
                  otherCheckbox.checked = false;
                  }
              });
            }
        }
    });

    let e0 = document.querySelectorAll('li.checkbox_money');
    e0.forEach(element => {
      element.style.backgroundColor = '';
      element.style.borderRadius = '';
    });

    let e1 = document.getElementById(`${checkboxId}`);
    let liElement = e1.closest('li');
    if(e1.checked){ 
      liElement.style.backgroundColor = '#ffffff30';
      liElement.style.borderRadius = '10px';
    }

    if( checkboxes.length > 0){
      console.log("1");
      buy_cash = liElement;
    }else{
      console.log("2");
      buy_cash = 0;
    }
} 

function buy(){
  if(buy_cash.tagName === "LI"){
    console.log(buy_cash.querySelectorAll("span")[1].innerText);
    console.log(buy_cash.getAttribute("data-money"));
    $.ajax({
      url: "php/buycoin.php",
      method: "POST",
      dataType: "json",
      data:{
        buyCash: buy_cash.querySelectorAll("span")[1].innerText,
        buyCoin: buy_cash.getAttribute("data-money")
      },
      success: function (response) {
          alert("購買成功");
          // window.location.href = '../../ECPayAIO_PHP-master/AioSDK/example/sample_Credit_CreateOrder.php';
          // window.location.href = 'https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5';
      },
      error: function(xhr, status, error) {
          alert("數據載入失敗: " + error);
      }
  });
  console.log(buy_cash);
  }else{
    alert("請選擇金幣");
  }
}


// 儲值紀錄style更換
let stored_record = document.getElementById("stored_record");
stored_record.addEventListener("mouseenter", function() {
  if (stored_record.src.includes("stored_record3.png")) {
    stored_record.src = "IMG/store/stored_record1.png";
    stored_record.style.filter = 'drop-shadow(3px 3px 3px rgb(0, 0, 0))';
  }
});
stored_record.addEventListener("mouseleave", function() {
  if (stored_record.src.includes("stored_record1.png")) {
    stored_record.src = "IMG/store/stored_record3.png";
    stored_record.style.filter = 'drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.406))';
  }
});


// 儲值紀錄燈箱
let stored_lightbox = document.getElementsByClassName("stored_lightbox")[0];
let stored_wrapper = document.getElementsByClassName("stored_wrapper");

stored_record.addEventListener("click", function(){
  stored_lightbox.classList.remove("stored_none");
});

let stored_close = document.getElementsByClassName("stored_close")[0];
stored_close.addEventListener("click", function(){
  stored_lightbox.classList.add("stored_none");
});

stored_lightbox.addEventListener("click", function(){
  this.classList.add("stored_none");
});

stored_lightbox.querySelector(".stored_wrapper").addEventListener("click", function(e){
  e.stopPropagation();
});


// 儲值
$.ajax({
  url: "php/getBuyLog.php",
  method: "post",
  datatype: "json",
  data: {
    type: "1",
  },
  success: (response) => {
    // alert(response);
    response = JSON.parse(response);
    // console.log(response[0].totalCoin);
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
    document.querySelector(".stored").innerHTML = str
    // $(".stored").html(str);
  },
  error: (xhr, status, error) => {
    alert("error: " + error);
  },
});

let stored_container = document.getElementsByClassName("stored_container")[0];

$.ajax({
  url: "php/getStoreDetail.php",
  method: "post",
  data: {},
  dataType: "json",
  success: function(response) {
      // response = JSON.parse(response);
      // console.log(response);
      for ( let i = 0 ; i < response.length ; i++ ) {
        if ( response[i].isCoin == 1 ) { // 必須是金幣
          stored_container.innerHTML += `
            <li class="checkbox_money" data-index="${response[i].storeID}" data-money="${response[i].itemPrice}">
                <label for="checkbox${i}">
                    <img class="money_${response[i].itemPrice}" src="IMG/store/${response[i].itemImage}" alt="">
                    <div class="in">    
                        <input type="checkbox" id="checkbox${i}" onclick="toggleCheckboxes('checkbox${i}')"/>
                        <span class="checkbox"></span>
                        <span>$${response[i].sellNum}</span>
                    </div>
                </label>
            </li>`;
        }
      }

      // console.log(comment_list);

  },
  error: function(xhr, status, error) {
      alert("error:" + error);
  }
});








