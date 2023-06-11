import * as picture from "../../JS/member_picture.js";

let user_img = document.getElementsByClassName("big_girl")[0] ;
let user_img1 = document.getElementsByClassName("member_photo")[0] ;
picture.getMemberPicture(user_img.querySelector("img"));
picture.getMemberPicture(user_img1.querySelector("img"));
let rifht_my_activity = document.getElementsByClassName("my_activity")[0];

$(()=>{
    $.ajax({
        url:"php/showArticle.php",
        datatype: "json",
        method:"post",
        data:{},
        success:(response)=>{
            response = JSON.parse(response);
            let article_id = -1 ;
            
            $.each(response, function(index, row) {
            // console.log(response);
                if( index == 0 ){
                    rifht_my_activity.innerHTML +=
                    `
                    <p>發佈:<br>${row.articleTime}</p>
                    <p>文章標題:<br>${row.articleTitle}</p>
                    <section>
                        <p>文章內容:<br>${row.articleContent}</p>
                    </section>
                    `;
    
                }
            });
        },
        error:(xhr, status, error)=>{
            alert("error: "+error)
        }
    })

    $.ajax({
        url:"php/getUserData.php",
        datatype:"json",
        method:"post",
        data:{},
        success:(response)=>{
            if(response == -1){
                alert("請先登入")
            }
            else{
                response = JSON.parse(response)
                response = response[0]
                if(response["gender"]==0){
                    //選女
                }
                else{
                    //選男
                }
                $("#hight").val(response["height"])
                $("#weight").val(response["weight"])
                $("#constellation").val(response["starSign"])
                $("#age").val(response["age"])
                $("#birthday").val(response["birthday"])
                $("#interest").val(response["interest"])
                $("#soubriquet").val(response["memberName"])
                $("#myselfsign").val(response["personalSign"])
                $("#email").val(response["email"])
                $("#username").html("暱稱:"+response["memberName"])
                $("#idname").html("ID:"+response["memberID"])
                $("#sign").html(response["personalSign"])
                
                
            }
        },
        error:(xhr, status, error)=>{
            alert("error: "+error)
        }
    })
})



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
        


        //修左右的變數!!!
        //type=text，設定身高的值,把input的值丟回去aaa
        var height = document.getElementById('hight');
        console.log(height);
        let aaaa = height.value;

        //興趣
        var interest = document.getElementById('interest');
        let bbbb = interest.value;

        //信箱
        var email = document.getElementById('email');
        let cccc = email.value;

        //暱稱
        var soubriquet = document.getElementById('soubriquet');
        let dddd = soubriquet.value;

        //年齡
        var age = document.getElementById('age');
        let eeee = age.value;

        //星座
        var constellation = document.getElementById('constellation');
        let ffff = constellation.value;

        //生日
        var birthday = document.getElementById('birthday');
        let gggg = birthday.value;

        //個性簽名
        var myselfsign = document.getElementById('myselfsign');
        let hhhh = myselfsign.value;

        //體重
        var weight = document.getElementById('weight');
        let iiii = weight.value;


            //身高限制要是數字
            // let height = document.getElementById("hight");
            //用keyup事件
            height.addEventListener("change", function(e){
                // alert(ka);^\d+$ 
                const str = height.value.toString();
                const isNumber = Number(str);
                // console.log();
                if(isNaN(height.value)){
                    alert("身高欄位請輸入數字唷");
                }
            });



            //年齡
            // let age = document.getElementById("age");
            age.addEventListener("keyup",function(e){
                const agenumber = age.value.toString();
                const isNumber = Number(agenumber);
                if(isNaN(age.value)){
                    alert("年齡欄位請輸入數字唷");
                }
            });


            //體重
            weight.addEventListener("keyup",function(e){
                const weightnumber = weight.value.toString();
                const isNumber = Number(weightnumber);
                if(isNaN(weight.value)){
                    alert("體重欄位請輸入數字唷");
                }
            });





            
            // age.addEventListener("keyup",function(e){
            //     const str = age.value.toString();
            //     const isNumber = Number(str);
            //     if(isNaN(age.value)){
            //         alert("請輸入數字");
            //     }
            // });




            //信箱驗證
            email.addEventListener("blur",function(){
                if(email==''){
                        alert('請輸入電子信箱');
                        document.getElementById('email').focus();
                        return false;
                }else{
                    var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
                    var str = email.value ;
                    if (str.search(emailRule)!= -1){
                        // document.getElementById('email').focus();
                        // document.getElementById('email').select();
                        // return false;
                    
                    } else {
                        alert('電子信箱格式錯誤');
                    }
                }
            });






        // // 隱藏確認修改和取消修改按鈕
        confirmBtn.style.display = 'none';
        cancelBtn.style.display = 'none';
        
        //編輯按鈕
        editBtn.addEventListener('click', function() {
            var fields = document.querySelectorAll('.introduce_right input, .introduce_left input .introduce_right select');  // 選取欄位
            
            aaaa = hight.value;
            bbbb = interest.value;
            cccc = email.value;
            dddd = soubriquet.value;
            eeee = age.value;
            ffff = constellation.value;
            gggg = birthday.value;
            hhhh = myselfsign.value;
            iiii = weight.value;


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
                editBtn.style.display = 'none';
            var fields = document.querySelectorAll('.introduce_right input, .introduce_left input, .introduce_right select');  // 選取欄位
            
                // 將欄位的 disabled 屬性設定為 false
                fields.forEach(function(field) {
                    field.disabled = false;
                });
            
            });
            


            //按下取消修改按鈕後,就無法進行編輯動作
            //而且會
            var cancelBtn = document.querySelector('.cancel');  // 選取取消修改按鈕

            cancelBtn.addEventListener('click', function() {
                editBtn.style.display = 'inline-block';
                var fields = document.querySelectorAll('.introduce_right input, .introduce_left input, .introduce_right select');  // 選取欄位
                

                hight.value= aaaa;
                interest.value= bbbb;
                email.value= cccc;
                soubriquet.value= dddd;
                age.value= eeee;
                constellation.value = ffff;
                birthday.value = gggg;
                myselfsign.value= hhhh;
                weight.value = iiii;

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
            

            //確認按鈕
            //按下確認修改按鈕後,就無法進行編輯動作
            //field跟fields差異
            //所有條件格式:(如果不ok的部分,要藉由css顯示紅框)
                    //1.身高限2~3位數
                    //2.年齡限1~3位數
                    //3.體重限1~3位數
                    //4.星座為下拉式選單
                    //5.信箱:信箱格式

            //綁定確認修改時 (在確認格式跟條件)               
            //     if(str.length != 3 ){
            //         alert("請輸入三位數");
            //     }

            // var height = document.getElementById('hight');
            // console.log(height);
            // let aaaa = height.value;

            var confirmBtn = document.querySelector('.confirm');  // 選取確認修改按紐
            confirmBtn.addEventListener('click',function(){
                const str = height.value.toString();
                //身高一定要是三位數
                if(str.length  !=3){
                    alert("身高欄位請輸入三位數");

                    height.focus();
                    height.classList.add("wrong");
                    return; // 如果身高不是3位數，停止後續操作
                }else{
                    height.classList.remove("wrong")
                };

                // 年齡一定要是二~三位數????沒有成功
                const agenumber = age.value.toString();
                console.log(agenumber);
                if (agenumber.length > 3){
                    alert("年齡欄位請輸入二到三位數");
                    
                    age.focus();//加上錯誤class ,如果錯誤的話加上ouline之類的
                    age.classList.add("wrong");
                    return;
                } else {
                    age.classList.remove("wrong");
                }

                
                const weightnumber = weight.value.toString();
                //身高一定要是三位數
                if(weightnumber.length  > 3){
                    alert("體重欄位請輸入小於等於三位數");
                    
                    weight.focus();
                    weight.classList.add("wrong");
                    return; // 如果體重不是3位數，停止後續操作
                } else {
                    weight.classList.remove("wrong");
                }

                // weight.addEventListener("keyup",function(e){
                //     const weightnumber = weight.value.toString();
                //     const isNumber = Number(weightnumber);
                //     if(isNaN(weight.value)){
                //         alert("體重欄位請輸入數字唷");
                //     }
                // });
                



                var fields = document.querySelectorAll('.introduce_right input, .introduce_left input, .introduce_right select'); 
                    fields.forEach(function(field){
                    field.disabled = true;
                        
                        confirmBtn.style.display = 'none';
                        cancelBtn.style.display = 'none';
                        editBtn.style.display = 'inline-block';
                });






                $.ajax({
                    url:"php/updateMemberDetail.php",
                    method:"post",
                    datatype:"json",
                    //傳送的資料值
                    //data傳送到php
                    data:{
                        //把height的val設置在height
                        hight:$("#hight").val(),
                        weight:$("#weight").val(),
                        constellation: $("#constellation").val(),
                        introduce_right:$("#introduce_right").val(),
                        birthday:$("#birthday").val(),
                        interest:$("#interest").val(),
                        soubriquet:$("#soubriquet").val(),
                        myselfsign:$("#myselfsign").val(),
                        email:$("#email").val(),
                    },
                    //傳送成功的話
                    success:(response)=>{
                        if(response ==-1)
                            alert( "請先登入")
                        else if(response > 0)
                            alert("修改成功")
                        else
                            alert("修改失敗")
                    },
                    //傳送失敗
                    error:(xhr, status, error) =>{
                        alert("error: " +error)
                    }
                })

            });