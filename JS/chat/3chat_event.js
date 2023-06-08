

// ========================= 顯示全部行程 =========================

let list_box = document.getElementsByClassName("list_box")[0];
let ul_el = list_box.querySelector("ul");
ul_el.innerHTML = "" ;

$.ajax({
    url:"php/back_showAllActivity.php",
    datatype: "json",
    method:"post",
    data:{
    },
    success:(response)=>{
        response = JSON.parse(response);
        $.each(response, function(index, row) {
            ul_el.innerHTML += `
            <li>
                <span>${row.activityID}</span>
                <span>${row.activityName}</span>
                <span>${row.activityTopic}</span>
                <span>${row.activityStartDate}</span>
                <span>${row.activityPlace}</span>
                <a class="read" href="">查看</a>
            </li>`;
        });
        // console.log(comment_list);
        
        let read_btn = document.getElementsByClassName("read");
        const eventdata = document.getElementById('eventdata');
        const eventdata_search = document.getElementById('eventdata-search');
        const eventdata_create = document.getElementById('eventdata-create');
        for( let i = 0 ; i < read_btn.length ; i++ ){
            read_btn[i].addEventListener("click", function(e){
                e.preventDefault();
                eventdata.style.display = 'block';
                eventdata_search.style.display = 'none';
                eventdata_create.style.display = 'none';
                read_more(e.target.closest("li").querySelector("span").innerHTML);
            })
        }
    },
    error: (xhr, status, error)=>{
        alert("error:"+error)
    }
})
// ========================= 顯示全部行程 =========================

// // ========================= 查看單一行程 =========================

function read_more( activityID ){
    let eventdata = document.getElementById("eventdata");
    eventdata.querySelector("table").innerHTML = "" ;
    $.ajax({
        url:"php/back_showOneActivity.php",
        datatype: "json",
        method:"post",
        data:{
            "activityID" : activityID
        },
        success:(response)=>{
            response = JSON.parse(response);
            $.each(response, function(index, row) {
                eventdata.querySelector("table").innerHTML = `
                    <tr>
                        <td>活動編號</td>
                        <td>${row.activityID}</td>
                    </tr>
                    <tr>
                        <td>活動標籤</td>
                        <td>
                            <select name="edit_topic" id="edit_topic" disabled>
                                <option value="戶外" checked>戶外</option>
                                <option value="休閒">休閒</option>
                                <option value="室內">室內</option>
                                <option value="益智">益智</option>
                                <option value="手作">手作</option>
                                <option value="夜生活">夜生活</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>活動名稱</td>
                        <td>
                            <input type="text" id="edit_title" value="${row.activityName}" disabled>
                        </td>
                    </tr>
                    <tr>
                        <td>活動人數</td>
                        <td>
                            <input type="text" id="edit_person" name="edit_person" value="${row.activityLimit}" disabled>
                        </td>
                    </tr>
                    <tr>
                        <td>活動時間</td>
                        <td>
                            <input type="date" name="depart" id="depart_time" style="margin-right: 5px;" value="${row.activityStartDate}" disabled>到
                            <input type="date" name="leave" id="leave_time" style="margin-left: 5px;" value="${row.activityEndDate}" disabled>
                        </td>
                    </tr>
                    <tr>
                        <td>活動地點</td>
                        <td>
                            <select name="edit_loc" id="edit_loc" disabled>
                                <option value="北部">北部</option>
                                <option value="中部">中部</option>
                                <option value="南部">南部</option>
                                <option value="東部">東部</option>
                                <option value="離島">離島</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>活動內容</td>
                        <td>
                            <textarea name="edit_content" id="edit_content" style=" resize:none; width: 50%;" disabled>${row.activityNote}</textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>活動條件</td>
                        <td>
                            <label for="boyonly">
                                <input type="checkbox" id="boyonly" name="boyonly" value="限男" disabled>
                                <span class="check-button">限男</span>
                            </label>
                            <label for="girlonly">
                                <input type="checkbox" id="girlonly" name="girlonly" value="限女" disabled>
                                <span class="check-button">限女</span>
                            </label>
                            <label for="motorLicense">
                                <input type="checkbox" id="motorLicense" name="motorLicense" value="機車駕照" disabled>
                                <span class="check-button">機車駕照</span>
                            </label>
                            <label for="age18">
                                <input type="checkbox" id="age18" name="age18" value="限18以上" disabled>
                                <span class="check-button">限18以上</span>
                            </label>
                        </td>
                    </tr>
                `;


                let edit_loc = document.getElementById("edit_loc"); //地點
                let edit_topic = document.getElementById("edit_topic"); //類型

                let boyonly = document.getElementById("boyonly"); //限男
                let girlonly = document.getElementById("girlonly"); //限女
                let motorLicense = document.getElementById("motorLicense"); // 機車
                let age18 = document.getElementById("age18"); // 18限

                switch (row.activityPlace)  {
                    case "北部":
                        edit_loc.selectedIndex = 0;
                        break;
                    case "中部":
                        edit_loc.selectedIndex = 1;
                        break;
                    case "南部":
                        edit_loc.selectedIndex = 2;
                        break;
                    case "東部":
                        edit_loc.selectedIndex = 3;
                        break;
                    case "離島":
                        edit_loc.selectedIndex = 4;
                        break;
                }

                switch (row.activityTopic)  {
                    case "戶外":
                        edit_topic.selectedIndex = 0;
                        break;
                    case "休閒":
                        edit_topic.selectedIndex = 1;
                        break;
                    case "室內":
                        edit_topic.selectedIndex = 2;
                        break;
                    case "益智":
                        edit_topic.selectedIndex = 3;
                        break;
                    case "手作":
                        edit_topic.selectedIndex = 4;
                        break;
                    case "夜生活":
                        edit_topic.selectedIndex = 5;
                        break;
                }

                if ( row.con_onlyMale == 1 ) {
                    boyonly.checked = true ;
                }

                if ( row.con_onlyFemale == 1 ) {
                    girlonly.checked = true ;
                }

                if ( row.con_motorLicense == 1 ) {
                    motorLicense.checked = true ;
                }

                if ( row.con_ageGreaterThan18 == 1 ) {
                    age18.checked = true ;
                }
            });     
        },
        error: (xhr, status, error)=>{
            alert("error:"+error)
        }
    })
}

// 刪除文章
let delete_btn = document.getElementById("delete-btn");

delete_btn.addEventListener("click", function(e){
    let activityID = e.target.closest("#eventdata").querySelectorAll("td")[1].innerHTML;
    delete_activity( activityID );
})

function delete_activity( activityID ){

    $.ajax({
        url:"php/back_deleteActivity.php",
        datatype: "text",
        method:"post",
        data:{
            "activityID" : activityID
        },
        success:(response)=>{
            alert(response);
            // window.location.reload();
        },
        error: (xhr, status, error)=>{
            alert("error:"+error)
        }
    })
}

// 編輯活動
let edit_activity_btn = document.getElementById("edit_activity_btn");
let canceledit_btn = document.getElementById("canceledit-btn");
let confirmedit_btn = document.getElementById("confirmedit_btn");

edit_activity_btn.addEventListener("click", function(e){

    let edit_title = e.target.closest("#eventdata").querySelector("#edit_title");
    let edit_content = e.target.closest("#eventdata").querySelector("#edit_content");
    let edit_person = e.target.closest("#eventdata").querySelector("#edit_person");
    let edit_title_value = edit_title.value ;
    let edit_content_value = edit_content.value ;
    let edit_person_value = edit_person.value ;

    let depart_time = e.target.closest("#eventdata").querySelector("#depart_time");
    let leave_time = e.target.closest("#eventdata").querySelector("#leave_time");
    let depart_time_value = depart_time.value ;
    let leave_time_value = leave_time.value ;

    let edit_loc = e.target.closest("#eventdata").querySelector("#edit_loc"); //地點
    let edit_topic = e.target.closest("#eventdata").querySelector("#edit_topic"); //類型
    let boyonly = e.target.closest("#eventdata").querySelector("#boyonly"); //限男
    let girlonly = e.target.closest("#eventdata").querySelector("#girlonly"); //限女
    let motorLicense = e.target.closest("#eventdata").querySelector("#motorLicense"); // 機車
    let age18 = e.target.closest("#eventdata").querySelector("#age18"); // 18限

    let edit_loc_selectedIndex = edit_loc.selectedIndex ;
    let edit_topic_selectedIndex = edit_topic.selectedIndex ;
    let boyonly_checked = boyonly.checked ;
    let girlonly_checked = girlonly.checked ;
    let motorLicense_checked = motorLicense.checked ;
    let age18_checked = age18.checked ;

    edit_title.disabled = false;
    edit_content.disabled = false;
    edit_person.disabled = false;
    depart_time.disabled = false;
    leave_time.disabled = false;
    edit_loc.disabled = false;
    edit_topic.disabled = false;
    boyonly.disabled = false;
    girlonly.disabled = false;
    motorLicense.disabled = false;
    age18.disabled = false;




    canceledit_btn.style.display = "block" ;
    confirmedit_btn.style.display = "block" ;
    edit_activity_btn.style.display = "none" ;

    //取消編輯
    canceledit_btn.addEventListener("click", function(){
        edit_title.value = edit_title_value ;
        edit_content.value = edit_content_value ;
        edit_person.value = edit_person_value  ;
        depart_time.value = depart_time_value ;
        leave_time.value = leave_time_value ;

        edit_loc.selectedIndex = edit_loc_selectedIndex ;
        edit_topic.selectedIndex = edit_topic_selectedIndex ;
        boyonly.checked = boyonly_checked  ;
        girlonly.checked = girlonly_checked ;
        motorLicense.checked = motorLicense_checked ;
        age18.checked = age18_checked ;

        edit_title.disabled = true;
        edit_content.disabled = true;
        edit_person.disabled = true;
        depart_time.disabled = true;
        leave_time.disabled = true;
        edit_loc.disabled = true;
        edit_topic.disabled = true;
        boyonly.disabled = true;
        girlonly.disabled = true;
        motorLicense.disabled = true;
        age18.disabled = true;

        canceledit_btn.style.display = "none" ;
        confirmedit_btn.style.display = "none" ;
        edit_activity_btn.style.display = "block" ;
    })

    edit_content.addEventListener("keydown", function (e) {
        if (edit_content.value.length >= 147 && e.key != "Backspace") {
            alert("內容長度不可超過150個字");
            e.preventDefault(); // 停止預設行為(在欄位上出現所打的文字)
        }
    })

    edit_person.addEventListener("keydown", function (e) {
        console.log(e.key);
        if ( e.key != "Backspace" && isNaN(Number(e.key))) {
            // alert("人數請輸入數字");
            e.preventDefault(); // 停止預設行為(在欄位上出現所打的文字)
            return ;
        }

        if ( edit_person.value.length >= 2 && e.key != "Backspace") {
            // alert("人數請輸入數字");
            e.preventDefault(); // 停止預設行為(在欄位上出現所打的文字)
            return ;
        }

        // if ( e.key < 0 || e.key > 9 ) {
        //     alert("人數請輸入數字");
        //     e.preventDefault(); // 停止預設行為(在欄位上出現所打的文字)
        //     return ;
        // }
    })

    confirmedit_btn.addEventListener("click", function(e){
        
        // edit_title.value = edit_title_value ;
        // edit_content.value = edit_content_value ;
        // edit_person.value = edit_person_value  ;
        // depart_time.value = depart_time_value ;
        // leave_time.value = leave_time_value ;

        // edit_loc.selectedIndex = edit_loc_selectedIndex ;
        // edit_topic.selectedIndex = edit_topic_selectedIndex ;
        // boyonly.checked = boyonly_checked  ;
        // girlonly.checked = girlonly_checked ;
        // motorLicense.checked = motorLicense_checked ;
        // age18.checked = age18_checked ;

        if ( edit_title.value == "" ) {
            alert("請輸入活動標題");
            edit_title.value = edit_title_value ;
            return;
        }

        if ( edit_person.value == "" ) {
            alert("請輸入活動人數");
            edit_person.value = edit_person_value  ;
            return;
        }

        if ( edit_content.value == "" ) {
            alert("請輸入活動內容");
            edit_content.value = edit_content_value ;
            return;
        }

        if (depart_time.value == "" || leave_time.value == "" ) {
            alert("請選擇活動時間");
        } else if ( depart_time.value > leave_time.value ) {
            alert("起始時間不得超過結束時間");
            depart_time.value = depart_time_value ;
            leave_time.value = leave_time_value ;
            return;
        }

        if ( edit_title.value != "" && edit_person.value != "" && edit_content.value != "" && depart_time.value != "" && leave_time.value != ""  ) {
            edit_title.disabled = true;
            edit_content.disabled = true;
            edit_person.disabled = true;
            depart_time.disabled = true;
            leave_time.disabled = true;
            edit_loc.disabled = true;
            edit_topic.disabled = true;
            boyonly.disabled = true;
            girlonly.disabled = true;
            motorLicense.disabled = true;
            age18.disabled = true;
    
            canceledit_btn.style.display = "none" ;
            confirmedit_btn.style.display = "none" ;
            edit_activity_btn.style.display = "block" ;
        
            // edit_article( articleID, article_Title.value, article_Content.value );
        }

    })
})



// function edit_article( articleID, articleTitle, articleContent){
//     let article_edit = document.getElementById("article-edit");
//     $.ajax({
//         url:"php/back_updateArticle.php",
//         datatype: "text",
//         method:"post",
//         data:{
//             "articleID" : articleID,
//             "articleTitle" : articleTitle,
//             "articleContent" : articleContent
//         },
//         success:(response)=>{
//             alert("修改成功");
//             window.location.reload();
//         },
//         error: (xhr, status, error)=>{
//             alert("error:"+error)
//         }
//     })
// }

// // ========================= 查看單一文章 =========================

// // =================================== 新增文章 ===========================

// let send = document.getElementById("create_article_btn");
// let title = document.getElementById("create_article_title");
// let content = document.getElementById("create_article_content");

// content.addEventListener("keydown", function(e){
//     if (content.value.length >= 147 && e.key != "Backspace" ){
//         alert("內容長度不可超過150個字");
//         e.preventDefault(); // 停止預設行為(在欄位上出現所打的文字)
//     }
// })

// let upload_input = document.getElementById("file-upload");
// let preview = document.getElementById("preview-image");
// let files = upload_input.files ;
// upload_input.style.opacity = 0;

// // 預覽圖片
// upload_input.addEventListener('change', function(e) {
//     preview.src = "";

//     let curFiles = e.target.files;
//     if (curFiles.length !== 0) {
//         for (let i = 0; i < curFiles.length; i++) {
//             let src_str = URL.createObjectURL(curFiles[i]);
//             let list = `<img src="${src_str}" style="
//             width: 50% ;
//             height: 50% ;
//             display: inline-block;
//             " >`;
//             preview.innerHTML += list;
//         }
//         files = curFiles;
//         // console.log(files);
//     }
// });

// let create_list_el = document.getElementsByClassName("create_list")[0];
// let rifht_my_activity = document.getElementsByClassName("my_activity")[0];
// send.addEventListener("click", function () {
//     if (title.value == "") {
//         alert("請填寫標題");
//         return;
//     }

//     if (content.value == "") {
//         alert("請填寫內容");
//         return;
//     }

//     if (title.value != "" && content.value != "") {
//         // 都有填寫，可將資料輸入資料庫

//         let form = new FormData();
//         form.append("title", title.value);
//         form.append("content", content.value);
//         for (let i = 0; i < files.length; i++) {
//             form.append("edit_files[file][]", files[i]);
//             // console.log(files[i]);
//         }
//         // console.log(form);

//         $.ajax({
//             url: "php/back_addArticle.php",
//             method: "post",
//             data: form,
//             dataType: "text",
//             processData: false,
//             contentType: false,
//             success: function (response) {
//                 alert("新增成功");
//                 title.value = "";
//                 content.value = "";
//                 upload_input.value = "";
//                 preview.innerHTML = "";
//                 window.location.reload();
//             },
//             error: function (xhr, status, error) {
//                 alert("error:" + error);
//             }
//         });
//     }
// })

// // =================================== 新增文章 ===========================

// // =================================== 搜尋文章 ===========================
// const member_articleSearch = document.getElementById('member-article-btn');

// member_articleSearch.addEventListener( "click", function(){
//     ul_el.innerHTML = "" ;
//     // console.log("$('#search_articleID').val())"+$("#search_articleID").val());
//     // console.log("$('#search_type').val()"+$("#search_type").val());
//     // console.log("$('#search_name').val()"+$("#search_name").val());
//     // console.log("$('#search_status').val()"+$("#search_status").val());
//     // console.log("$('#myDate').val()"+$("#myDate").val());
    
//     $.ajax({
//         url: "php/back_searchArticle.php",
//         method: "post",
//         data: {
//             "articleID" : $("#search_articleID").val(),
//             "memberID" : $("#search_memberID").val(),
//             "memberName" : $("#search_name").val(),
//             "email" : $("#search_email").val()
//         },
//         dataType: "json",
//         success: function(response) {
//             // response = JSON.parse(response);
//             console.log(response);
//             $.each(response, function(index, row) {
//                 ul_el.innerHTML += `
//                 <li>
//                     <span>${row.articleID}</span>
//                     <span>${row.memberName}</span>
//                     <span>${row.articleTitle}</span>
//                     <span>${row.articleTime}</span>
//                     <a class="read" href="">查看</a>
//                 </li>`;
//             });
            
//             let read_btn = document.getElementsByClassName("read");
//             const article_edit = document.getElementById('article-edit');
//             const article_search = document.getElementById('article-search');
//             const article_reate = document.getElementById('article-create');
//             for( let i = 0 ; i < read_btn.length ; i++ ){
//                 read_btn[i].addEventListener("click", function(e){
//                     e.preventDefault();
//                     article_edit.style.display = 'block';
//                     article_search.style.display = 'none';
//                     article_reate.style.display = 'none';
//                     read_more(e.target.closest("li").querySelector("span").innerHTML);
//                 })
//             }
//         },
//         error: function(xhr, status, error) {
//             alert("error:" + error);
//         }
//     });
// })
// // // =================================== 搜尋文章 ===========================