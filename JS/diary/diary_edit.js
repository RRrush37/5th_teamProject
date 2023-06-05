// $(()=>{
//     $.ajax({
//         url:"php/getUserData.php",
//         datatype:"json",
//         method:"post",
//         data:{},
//         success:(response)=>{
//             if(response == -1){
//                 alert("請先登入")
//             }
//             else{
//                 response = JSON.parse(response)
//                 response = response[0]
//                 if(response["gender"]==0){
//                     //選女
//                 }
//                 else{
//                     //選男
//                 }
//                 $("#hight").val(response["height"])
//                 $("#weight").val(response["weight"])
//                 $("#constellation").val(response["starSign"])
//                 $("#age").val(response["age"])
//                 $("#birthday").val(response["birthday"])
//                 $("#interest").val(response["interest"])
//                 $("#soubriquet").val(response["memberName"])
//                 $("#myselfsign").val(response["personalSign"])
//                 $("#email").val(response["email"])
//                 $("#username").html(response["memberName"])
//                 $("#idname").html(response["memberID"])
//                 $("#sign").html(response["personalSign"])
                
                
//             }
//         },
//         error:(xhr, status, error)=>{
//             alert("error: "+error)
//         }
//     })
// })



//js

        //1.按下編輯按鈕時,則可以進行修改
        var editBtn = document.querySelector('.editBtn');  // 選取編輯按鈕
        var confirmBtn = document.querySelector('.confirm');  // 選取確認修改按鈕
        var cancelBtn = document.querySelector('.cancel');  // 選取取消修改按鈕
        
        
        //type=radio(男女)
        var userInput = document.querySelector('input[name="sex"]:checked');
        let sex = userInput;
        // console.log(sex);
        // console.log(userInput.value);
        


        //type=text，設定身高的值,把input的值丟回去aaa
        var input = document.getElementById('hight');
        let aaaa = input.value;

        //興趣
        var input = document.getElementById('interest');
        let bbbb = input.value;

        //信箱
        var input = document.getElementById('email');
        let cccc = input.value;

        //暱稱
        var input = document.getElementById('soubriquet');
        let dddd = input.value;

        //年齡
        var input = document.getElementById('age');
        let eeeee = input.value;

        //星座
        var input = document.getElementById('constellation');
        let ffff = input.value;

        //生日
        var input = document.getElementById('birthday');
        let gggg = input.value;

        //個性簽名
        var input = document.getElementById('myselfsign');
        let hhhh = input.value;









        //判斷身高填寫欄位是否為數字
        //判斷身高要三個數字

            // var input = document.getElementById('hight');

            // var inpur_text=^\d+$;
            
            input.addEventListener("keypress", function(e){
                // alert(ka);^\d+$ 
                console.log(input);
                if (inpur_text){ }
                
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


        confirmBtn.style.display = 'none';
        cancelBtn.style.display = 'none';
        
        editBtn.addEventListener('click', function() {
            var fields = document.querySelectorAll('.introduce_right input, .introduce_left input');  // 選取欄位
            
            aaaa = input.value;
            bbbb = input.value;
            cccc = input.value;
            dddd = input.value;
            eeee = input.value;
            ffff = input.value;
            gggg = input.value;
            hhhh = input.value;



            // 將欄位的 disabled 屬性設定為 false
            fields.forEach(function(field) {
                field.disabled = false;
            });
        
            // 顯示確認修改和取消修改按鈕
            confirmBtn.style.display = 'inline-block';
            cancelBtn.style.display = 'inline-block';
        });


        
        



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
                input.value= bbbb;
                input.value= cccc;
                input.value= dddd;
                input.value= eeee;
                input.value= ffff;
                input.value= gggg;
                input.value= hhhh;

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
                //身高、體重、年齡須為數字
                //身高限2~3位數
                //年齡限1~3位數
                //體重限1~3位數
                //星座為下拉式選單

                var fields = document.querySelectorAll('.introduce_right input, .introduce_left input'); 

                userInput.value;
                input.value;

                fields.forEach(function(field){
                    field.disabled = true;
            });
                confirmBtn.style.display = 'none';
                cancelBtn.style.display = 'none';





                // $.ajax({
                //     url:"php/updateMemberDetail.php",
                //     method:"post",
                //     datatype:"json",
                //     //傳送的資料值
                //     //data傳送到php
                //     data:{
                //         //把height的val設置在height
                //         hight:$("#hight").val(),
                //         weight:$("#weight").val(),
                //         constellation: $("#constellation").val(),
                //         introduce_right:$("#introduce_right").val(),
                //         birthday:$("#birthday").val(),
                //         interest:$("#interest").val(),
                //         soubriquet:$("#soubriquet").val(),
                //         myselfsign:$("#myselfsign").val(),
                //         email:$("#email").val(),
                //     },
                //     //傳送成功的話
                //     success:(response)=>{
                //         if(response ==-1)
                //             alert( "請先登入")
                //         else if(response > 0)
                //             alert("修改成功")
                //         else
                //             alert("修改失敗")
                //     },
                //     //傳送失敗
                //     error:(xhr, status, error) =>{
                //         alert("error: " +error)
                //     }
                // })

            });

            //建立參數去儲值資料
            //傳回後端
            // var value = element.value;


            //type=radio
            //value 不能在外面

            // var inputElement = document.getElementById('male');






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