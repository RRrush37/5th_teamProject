    // 透過 class 取得元素
    let edit_lightbox = document.getElementsByClassName("edit_lightbox")[0];

    // 切換按鈕的部分
    let fa_pen_tosquare = document.getElementsByClassName("fa-pen-to-square")[0];

    fa_pen_tosquare.addEventListener("click", function(){
        edit_lightbox.classList.remove("none");
        // alert("lalala");
    });



    // 進入取消按鈕時，燈箱不見
    let cancel_close = document.getElementsByClassName("cancel")[0];
    let send_close = document.getElementsByClassName("send")[0];

    cancel_close.addEventListener("click", function(){

        edit_lightbox.classList.add("none");
    });

    send_close.addEventListener("click", function(){

        edit_lightbox.classList.add("none");
    });


    edit_lightbox.addEventListener("click", function(){
    this.classList.add("none");
    });


    // 停止冒泡事件()   
    let wrapper1 = document.getElementsByClassName("wrapper1")[0];

    wrapper1.addEventListener("click", function (e) {
        e.stopPropagation();
    });