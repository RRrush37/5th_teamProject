let rifht_my_activity = document.getElementsByClassName("my_activity")[0];

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

// $.ajax({
//     url: "php/getBuyLog.php",
//     method: "post",
//     datatype: "json",
//     data: {
//     type: "2",
//     //對應到php的
//     },
//     success: (response) => {
//     // alert(response);
//     //測試
//     response = JSON.parse(response);


//     // console.log(response[0].totalCoin);
//     // console.log(response[0]);
    
//     let str = "";
    
//     for (let i = 0; i < response.length; i++) {
//         let month = Math.floor(response[i].date/100);
//         //取整數Math.floor
//         //reponse 是從php呼叫的值
//         //Math.floor() 函式會回傳小於等於所給數字的最大整數。
//         let day = response[i].date%100;
//         //取餘數
//         let str1 =
//         `
//         <tr>
//             <th>${month}/${day}</th>
//             <th>${response[i].coinChange}</th>
//             <th>${response[i].totalCoin}</th>
//         </tr>
//         `
//         str += str1;
//         //為了讓他有前面跟最後一筆(全部)的消費紀錄
//     }
//     document.querySelector(".tab_content").innerHTML += str;
//     // $(".stored").html(str);
//     },
//     error: (xhr, status, error) => {
//     alert("error: " + error);
//     //"error:" 裡面的資訊可以進行修改
//     },
// });


// $.ajax({
//     url: "php/getBuyLog.php",
//     method: "post",
//     datatype: "json",
//     data: {
//     type: "1",
//     //對應到php的
//     },
//     success: (response) => {
//     // alert(response);
//     //測試
//     response = JSON.parse(response);


//     // console.log(response[0].totalCoin);
//     // console.log(response[0]);
    
//     let str = "";
    
//     for (let i = 0; i < response.length; i++) {
//         let month = Math.floor(response[i].date/100);
//         //取整數Math.floor
//         //reponse 是從php呼叫的值
//         //Math.floor() 函式會回傳小於等於所給數字的最大整數。
//         let day = response[i].date%100;
//         //取餘數
//         let str1 =
//         `
//         <tr>
//             <th>${month}/${day}</th>
//             <th>${response[i].coinChange}</th>
//             <th>${response[i].totalCoin}</th>
//         </tr>
//         `
//         str += str1;
//         //為了讓他有前面跟最後一筆(全部)的消費紀錄
//     }
//     document.querySelector(".tab2_content").innerHTML += str;
//     // $(".stored").html(str);
//     },
//     error: (xhr, status, error) => {
//         alert("error: " + error);
//     //"error:" 裡面的資訊可以進行修改
//     },
// });