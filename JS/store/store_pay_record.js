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
          window.location.href = 'https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5';
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


// $.ajax({
//   method: "POST",
//   url: "",
//   data:{},
//   dataType: "json",
//   success: function (response) {

//       $.each(response, function(index, row) {

//           $(".pay").append(
//               `
//               <li>
//                    <p>${row.date}</p>
//                    <p>${row.buy}</p>
//                    <p>${row.balance}</p>
//               </li>
//               `
//           );
//       });
//   },
//   error: function(exception) {
//       alert("數據載入失敗: " + exception.status);
//   }
// });


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

// $.ajax({
//   method: "POST",
//   url: "",
//   data:{},
//   dataType: "json",
//   success: function (response) {

//       $.each(response, function(index, row) {

//           $(".stored").append(
//               `
//               <li>
//                    <p>${row.date}</p>
//                    <p>${row.coin}</p>
//                    <p>${row.remain}</p>
//               </li>
//               `
//           );
//       });
//   },
//   error: function(exception) {
//       alert("數據載入失敗: " + exception.status);
//   }
// });













