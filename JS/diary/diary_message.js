
// //?未成功//

// //用變數 readmore_lightbox取得 readmore_lightbox元素
// let readmore_lightbox = document.getElementsByClassName("readmore_lightbox")[0];


// let fa_comment_dot = document.getElementsByClassName("fa-comment-dot")[0];

// fa_comment_dot.addEventListener("click",function(){
//     readmore_lightbox.classList.remove("none");
//         // alert("lalalalaaaaa"); 
// });



//取得bag_rule_lightbox 元素
let readmore_open = document.getElementsByClassName("readmore_lightbox")[0];




//取得切換按鈕的部分
let a = document.getElementsByClassName("fa-comment-dots")[0];

a.addEventListener("click",function(){
    
    console.log(a);
    readmore_open.classList.remove("none");
    // alert("lalalal"); 
});

