        


        //1.按下編輯按鈕時,則可以進行修改
        var editBtn = document.querySelector('.editBtn');  // 選取編輯按鈕
        var confirmBtn = document.querySelector('.confirm');  // 選取確認修改按鈕
        var cancelBtn = document.querySelector('.cancel');  // 選取取消修改按鈕
        
        // console.log(confirmBtn);
        // // 隱藏確認修改和取消修改按鈕
        // confirmBtn.classList.add('none');
        
        // cancelBtn.classList.add('none');

        confirmBtn.style.display = 'none';
        cancelBtn.style.display = 'none';
        
        editBtn.addEventListener('click', function() {
            var fields = document.querySelectorAll('.introduce_right input, .introduce_left input');  // 選取欄位
        
            // 將欄位的 disabled 屬性設定為 false
            fields.forEach(function(field) {
                field.disabled = false;
            });
        
            // 顯示確認修改和取消修改按鈕
            confirmBtn.style.display = 'inline-block';
            cancelBtn.style.display = 'inline-block';
        });


        
        
        // 获取按钮元素
        // var editBtn = document.querySelector('.editBtn');
        // // var reviseBtns = document.querySelector('.revise');

        // // 添加点击事件监听器
        // editBtn.addEventListener('click', function() {
        // // 隐藏"editBtn"
        // editBtn.style.display = 'none';
        // // 显示"revise"按钮
        // reviseBtns.style.display = 'block';
        // });    


        
        // 获取按钮元素
        // var editBtn = document.querySelector('.editBtn');
        // var reviseBtns = document.querySelector('.revise');
        // var cancelBtn = document.querySelector('.cancel');

        // // 添加点击事件监听器
        // editBtn.addEventListener('click', function() {
        // // 隐藏"editBtn"
        // editBtn.style.display = 'none';
        // // 显示"revise"按钮
        // reviseBtns.style.display = 'block';
        // });

        // cancelBtn.addEventListener('click', function() {
        // // 显示"editBtn"
        // editBtn.style.display = 'block';
        // // 隐藏"revise"按钮
        // reviseBtns.style.display = 'none';
        // });


            //按下編輯按鈕後,選取introduce_right 和 introduce_left 中的所有input欄位都可以進行編輯,
            //使用js中querySelectorAll選取這些欄位,將他們的欄位選取,將他們的disable屬性設定false
            var editBtn = document.querySelector('.editBtn');  // 選取編輯按鈕

            editBtn.addEventListener('click', function() {
            var fields = document.querySelectorAll('.introduce_right input, .introduce_left input');  // 選取欄位

                // 將欄位的 disabled 屬性設定為 false
                fields.forEach(function(field) {
                    field.disabled = false;
                });
                
            });
            


            //按下取消修改後,就無法進行編輯動作
            var cancelBtn = document.querySelector('.cancel');  // 選取取消修改按鈕

            cancelBtn.addEventListener('click', function() {
                var fields = document.querySelectorAll('.introduce_right input, .introduce_left input');  // 選取欄位
            
                // 將欄位的 disabled 屬性設定為 true
                fields.forEach(function(field) {
                    field.disabled = true;
                });
                confirmBtn.style.display = 'none';
                cancelBtn.style.display = 'none';
            });
            



    
    
    
    
    
    // // 透過 class 取得元素
    // let edit_lightbox = document.getElementsByClassName("edit_lightbox")[0];

    // // 切換按鈕的部分
    // let fa_pen_tosquare = document.getElementsByClassName("fa-pen-to-square")[0];

    // fa_pen_tosquare.addEventListener("click", function(){
    //     edit_lightbox.classList.remove("none");
    //     // alert("lalala");
    // });



    // // 進入取消按鈕時，燈箱不見
    // let cancel_close = document.getElementsByClassName("cancel")[0];
    // let send_close = document.getElementsByClassName("send")[0];

    // cancel_close.addEventListener("click", function(){

    //     edit_lightbox.classList.add("none");
    // });

    // send_close.addEventListener("click", function(){

    //     edit_lightbox.classList.add("none");
    // });


    // edit_lightbox.addEventListener("click", function(){
    // this.classList.add("none");
    // });


    // // 停止冒泡事件()   
    // let wrapper1 = document.getElementsByClassName("wrapper1")[0];

    // wrapper1.addEventListener("click", function (e) {
    //     e.stopPropagation();
    // });