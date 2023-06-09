

let nav_hamburger_box_el = document.getElementsByClassName("nav_hamburger_box")[0];
let navbar_nav = document.getElementsByClassName("navbar_nav")[0];
let member = document.getElementsByClassName("member")[0];
let member_logout = document.getElementsByClassName("member_logout")[0];

nav_hamburger_box_el.addEventListener("click", function(e){
    e.stopPropagation();
    navbar_nav.classList.toggle("none");
})

member.addEventListener("click", function(e){
    e.stopPropagation();
    member_logout.classList.toggle("none");
})

window.addEventListener("click", function(){
    navbar_nav.classList.add("none");
    member_logout.classList.add("none");
})

// console.log(window.location.href);
// console.log(window.location.host);
// console.log(window.location.pathname);
// console.log(window.location.search);
// console.log(window.location.hash);
if ( !window.location.pathname.includes("backstage_login.html") ) {
    $.ajax({
        url: "php/back_checkLogin.php",
        type: "POST",
        dataType: "text",
        data: {},
        success: function (response) {
          // 在此處處理成功的情況
          if (response === true ) {
          } else {
            alert("請先登入");
            location.href = "backstage_login.html";
          }
        },
        error: function (xhr, status, error) {
          // 在此處處理錯誤情況
          console.log("Error: " + error);
        },
    });
}
