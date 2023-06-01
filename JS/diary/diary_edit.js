


        //1.按下編輯按鈕時,則可以進行修改
        var editBtn = document.querySelector('.editBtn');  // 選取編輯按鈕
        var confirmBtn = document.querySelector('.confirm');  // 選取確認修改按鈕
        var cancelBtn = document.querySelector('.cancel');  // 選取取消修改按鈕
        
        //type=text
        //未修整好
        //設定身高的值,把input的值丟回去aaa
        var input = document.getElementById('hight');
        let aaaa= input.value;



        //判斷身高填寫欄位是否為數字
        //判斷身高要三個數字
        //
            // ^ 表示匹配字符串的开始位置。
            // \d 表示匹配一个数字字符。
            // + 表示匹配一个或多个前面的元素。
            // $ 表示匹配字符串的结束位置

            // var input = document.getElementById('hight');

            // var inpur_text=^\d+$;
            
            input.addEventListener("keypress", function(e){
                // alert(ka);^\d+$ 
                console.log(input);
                if (inpur_text)
                
                // if else
                //console.log("觸發了 keyup 事件, 輸入的值: " + this.value);
                //key code
            });



            // var text_input = document.getElementById("text_input");

            //     text_input.addEventListener("keydown", function(e){
            //     //e.preventDefault();
            //     console.log(e.which);
                
            //     //console.log(e); // 觀察 e
            //     //console.log("觸發了 keydown 事件, key code: " + e.which);
                
            //     //console.log(e.which);
            //     if( (e.which >= 48 && e.which <= 57) || e.which == 8 ){ // 8 是刪除鍵
                
            //     }else{
            //         e.preventDefault(); // 停止預設行為(在欄位上出現所打的文字)
            //     }





        



        
        // console.log(confirmBtn);
        // // 隱藏確認修改和取消修改按鈕
        // confirmBtn.classList.add('none');
        
        // cancelBtn.classList.add('none');

        confirmBtn.style.display = 'none';
        cancelBtn.style.display = 'none';
        
        editBtn.addEventListener('click', function() {
            var fields = document.querySelectorAll('.introduce_right input, .introduce_left input');  // 選取欄位
            
            aaaa= input.value;
            //
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
            


            //按下取消修改按鈕後,就無法進行編輯動作
            //而且會
            var cancelBtn = document.querySelector('.cancel');  // 選取取消修改按鈕

            cancelBtn.addEventListener('click', function() {
                var fields = document.querySelectorAll('.introduce_right input, .introduce_left input');  // 選取欄位
                

                input.value= aaaa;
                //if else(點選sex變數時,儲存格就會進行顯示)
                // var userInput = document.querySelector('input[name="sex"]:checked');
                // let sex = userInput.value;
                // console.log(sex);
                // console.log(userInput.value);


                if ( sex == "m" ) {
                    // userInput.checked = false
                    document.getElementById("male").checked = true ;
                } else if ( sex == "f" ) {
                    // userInput.checked = true;
                    document.getElementById("female").checked = true ;
                }




                // 將欄位的 disabled 屬性設定為 true
                fields.forEach(function(field) {
                    field.disabled = true;
                });
                confirmBtn.style.display = 'none';
                cancelBtn.style.display = 'none';
            });
            


            //按下確認修改按鈕後,就無法進行編輯動作
            //field跟fields差異
            var confirmBtn = document.querySelector('.confirm');  // 選取取消修改按鈕
            
            confirmBtn.addEventListener('click',function(){
                var fields = document.querySelectorAll('.introduce_right input, .introduce_left input'); 

                userInput.value;
                input.value;

                fields.forEach(function(field){
                    field.disabled = true;
                });
                confirmBtn.style.display = 'none';
                cancelBtn.style.display = 'none';

            });

            //建立參數去儲值資料
            //傳回後端
            // var value = element.value;


            //type=radio
            //value 不能在外面

            // var inputElement = document.getElementById('male');

            //type=radio(男女)
            var userInput = document.querySelector('input[name="sex"]:checked');
            let sex = userInput;
            console.log(sex);
            console.log(userInput.value);




            //顯示值為new 





            //判別數值式子//欄位事件//key in &key up










    
    
    
    
    
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