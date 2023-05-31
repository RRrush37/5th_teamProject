function toggleCheckboxes(checkboxId) {

  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
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
} 


let pay_record = document.getElementById("pay_record");
pay_record.addEventListener("click", function() {
  if (pay_record.src.includes("pay_record3.png")) {
    pay_record.src = "IMG/store/pay_record1.png";
    pay_record.style.filter = 'drop-shadow(3px 3px 3px rgb(0, 0, 0))';
  } else {
    pay_record.src = "IMG/store/pay_record3.png";
    pay_record.style.filter = 'drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.406))';
  }
});


let stored_record = document.getElementById("stored_record");
stored_record.addEventListener("click", function() {
  if (stored_record.src.includes("stored_record3.png")) {
    stored_record.src = "IMG/store/stored_record1.png";
    stored_record.style.filter = 'drop-shadow(3px 3px 3px rgb(0, 0, 0))';
  } else {
    stored_record.src = "IMG/store/stored_record3.png";
    stored_record.style.filter = 'drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.406))';
  }
});


// lightbox

// 消費紀錄
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

// 儲值紀錄
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













