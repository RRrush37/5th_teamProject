

// ========================= 顯示全部文章 =========================

let list_box = document.getElementsByClassName("list_box")[0];
let ul_el = list_box.querySelector("ul");
ul_el.innerHTML = "" ;

$.ajax({
    url:"php/back_showAllArticle.php",
    datatype: "json",
    method:"post",
    data:{
    },
    success:(response)=>{
        response = JSON.parse(response);
        $.each(response, function(index, row) {
            ul_el.innerHTML += `
            <li>
                <span>${row.articleID}</span>
                <span>${row.memberName}</span>
                <span>${row.articleTitle}</span>
                <span>${row.articleTime}</span>
                <a class="read" href="">查看</a>
            </li>`;
        });
        // console.log(comment_list);
        
        let read_btn = document.getElementsByClassName("read");
        const article_edit = document.getElementById('article-edit');
        const article_search = document.getElementById('article-search');
        const article_reate = document.getElementById('article-create');
        for( let i = 0 ; i < read_btn.length ; i++ ){
            read_btn[i].addEventListener("click", function(e){
                e.preventDefault();
                article_edit.style.display = 'block';
                article_search.style.display = 'none';
                article_reate.style.display = 'none';
                read_more(e.target.closest("li").querySelector("span").innerHTML);
            })
        }
    },
    error: (xhr, status, error)=>{
        alert("error:"+error)
    }
})
// ========================= 顯示全部文章 =========================

// // ========================= 查看單一文章 =========================

function read_more( articleID ){
    let article_edit = document.getElementById("article-edit");
    let article_edit_btn = document.getElementById("article_edit_btn");
    let article_canceledit_btn = document.getElementById("article_canceledit_btn");
    let article_confirmedit_btn = document.getElementById("article_confirmedit_btn");
    article_edit_btn.style.display = "block" ;
    article_canceledit_btn.style.display = "none" ;
    article_confirmedit_btn.style.display = "none" ;

    article_edit.querySelector("table").innerHTML = "" ;
    $.ajax({
        url:"php/back_showOneArticle.php",
        datatype: "json",
        method:"post",
        data:{
            "articleID" : articleID
        },
        success:(response)=>{
            response = JSON.parse(response);
            let article_id = -1 ;
            $.each(response, function(index, row) {
                if (article_id != row.articleID) {
                    // 與上一篇文章為不同篇，加上內容
                    article_id = row.articleID ;
                    // console.log(row.articleID);
                    article_edit.querySelector("table").innerHTML = `
                    <tr>
                        <td>文章編號</td>
                        <td>${row.articleID}</td>
                    </tr>
                        <td>會員名稱</td>
                        <td>${row.memberName}</td>
                    <tr>
                        <td>文章標題</td>
                        <td><input type="text" name="title" id="edit_article_title" value="${row.articleTitle}" disabled></td>
                    </tr>
                    <tr>
                        <td>文章刊登時間</td>
                        <td>${row.articleTime}</td>
                    </tr>
                    <tr>
                        <td>文章圖片</td>
                        <td>
                            <div id="read_more_image" style="width: 100%;">
                                
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>文章內容</td>
                        <td>
                            <textarea name="content" id="read_more_content" style=" width : 50%;" disabled >${row.articleContent}</textarea>
                        </td>
                    </tr>
                    `;
                }

            });

            let read_more_image = document.getElementById("read_more_image");
            read_more_image.innerHTML = "" ;

            $.each(response, function(index, row) {

                // console.log(response);
                if (row.imageURL) {
                    //此篇內文有圖片
                    read_more_image.innerHTML +=`
                        <img src="IMG/diary/member/${row.imageURL}" style="
                        width: 46% ;
                        height: 50% ;
                        margin : .5% 1% .5%;
                        display: inline-block;
                        " >`;
                }
     
            });

        },
        error: (xhr, status, error)=>{
            alert("error:"+error)
        }
    })
}

// 刪除文章
let article_delete_btn = document.getElementById("article_delete_btn");

article_delete_btn.addEventListener("click", function(e){
    let articleID = e.target.closest("#article-edit").querySelectorAll("td")[1].innerHTML;
    delete_article( articleID );
})

function delete_article( articleID ){

    $.ajax({
        url:"php/back_deleteArticle.php",
        datatype: "text",
        method:"post",
        data:{
            "articleID" : articleID
        },
        success:(response)=>{
            alert(response);
            window.location.reload();
        },
        error: (xhr, status, error)=>{
            alert("error:"+error)
        }
    })

}

// 編輯文章
let article_edit_btn = document.getElementById("article_edit_btn");
let article_canceledit_btn = document.getElementById("article_canceledit_btn");
let article_confirmedit_btn = document.getElementById("article_confirmedit_btn");

article_edit_btn.addEventListener("click", function(e){

    let article_Title = e.target.closest("#article-edit").querySelector("#edit_article_title");
    let article_Content = e.target.closest("#article-edit").querySelector("#read_more_content");
    let article_Title_value = article_Title.value ;
    let article_Content_value = article_Content.value ;


    article_Title.disabled = false;
    article_Content.disabled = false;
    article_canceledit_btn.style.display = "block" ;
    article_confirmedit_btn.style.display = "block" ;
    article_edit_btn.style.display = "none" ;

    function cancel_func(e){
        e.stopPropagation();
        article_Title.value = article_Title_value;
        article_Content.value = article_Content_value;

        article_Title.disabled = true;
        article_Content.disabled = true;
        article_canceledit_btn.style.display = "none" ;
        article_confirmedit_btn.style.display = "none" ;
        article_edit_btn.style.display = "block" ;

        article_canceledit_btn.removeEventListener("click", cancel_func);
        // 移除確認編輯事件監聽器
        article_confirmedit_btn.removeEventListener("click", confirm_func);
    }
    //取消編輯
    article_canceledit_btn.addEventListener("click", cancel_func)


    function confirm_func(e){
        e.stopPropagation();
        let articleID = e.target.closest("#article-edit").querySelectorAll("td")[1].innerHTML;

        let article_Title = e.target.closest("#article-edit").querySelector("#edit_article_title");
        let article_Content = e.target.closest("#article-edit").querySelector("#read_more_content");

        article_Title.disabled = true;
        article_Content.disabled = true;
        article_canceledit_btn.style.display = "none" ;
        article_confirmedit_btn.style.display = "none" ;
        article_edit_btn.style.display = "block" ;

        edit_article( articleID, article_Title.value, article_Content.value );

        article_canceledit_btn.removeEventListener("click", cancel_func);
        // 移除確認編輯事件監聽器
        article_confirmedit_btn.removeEventListener("click", confirm_func);
    }
    article_confirmedit_btn.addEventListener("click", confirm_func )

})



function edit_article( articleID, articleTitle, articleContent){

    $.ajax({
        url:"php/back_updateArticle.php",
        datatype: "text",
        method:"post",
        data:{
            "articleID" : articleID,
            "articleTitle" : articleTitle,
            "articleContent" : articleContent
        },
        success:(response)=>{
            alert("修改成功");
            window.location.reload();
        },
        error: (xhr, status, error)=>{
            alert("error:"+error)
        }
    })
}

// ========================= 查看單一文章 =========================

// =================================== 新增文章 ===========================

let send = document.getElementById("create_article_btn");
let title = document.getElementById("create_article_title");
let content = document.getElementById("create_article_content");

content.addEventListener("keydown", function(e){
    if (content.value.length >= 147 && e.key != "Backspace" ){
        alert("內容長度不可超過150個字");
        e.preventDefault(); // 停止預設行為(在欄位上出現所打的文字)
    }
})

let upload_input = document.getElementById("file-upload");
let preview = document.getElementById("preview-image");
let files = upload_input.files ;
upload_input.style.opacity = 0;

// 預覽圖片
upload_input.addEventListener('change', function(e) {
    preview.src = "";
    preview.innerHTML = "" ;
    
    let curFiles = e.target.files;
    if (curFiles.length !== 0) {
        for (let i = 0; i < curFiles.length; i++) {
            let src_str = URL.createObjectURL(curFiles[i]);
            let list = `<img src="${src_str}" style="
            width: 50% ;
            height: 50% ;
            display: inline-block;
            " >`;
            preview.innerHTML += list;
        }
        files = curFiles;
        // console.log(files);
    }
});

let create_list_el = document.getElementsByClassName("create_list")[0];
let rifht_my_activity = document.getElementsByClassName("my_activity")[0];
send.addEventListener("click", function () {
    if (title.value == "") {
        alert("請填寫標題");
        return;
    }

    if (content.value == "") {
        alert("請填寫內容");
        return;
    }

    if (title.value != "" && content.value != "") {
        // 都有填寫，可將資料輸入資料庫

        let form = new FormData();
        form.append("title", title.value);
        form.append("content", content.value);
        for (let i = 0; i < files.length; i++) {
            form.append("edit_files[file][]", files[i]);
            // console.log(files[i]);
        }
        // console.log(form);

        $.ajax({
            url: "php/back_addArticle.php",
            method: "post",
            data: form,
            dataType: "text",
            processData: false,
            contentType: false,
            success: function (response) {
                alert("新增成功");
                title.value = "";
                content.value = "";
                upload_input.value = "";
                preview.innerHTML = "";
                window.location.reload();
            },
            error: function (xhr, status, error) {
                alert("error:" + error);
            }
        });
    }
})

// =================================== 新增文章 ===========================

// =================================== 搜尋文章 ===========================
const member_articleSearch = document.getElementById('member-article-btn');

member_articleSearch.addEventListener( "click", function(){
    ul_el.innerHTML = "" ;
    $.ajax({
        url: "php/back_searchArticle.php",
        method: "post",
        data: {
            "articleID" : $("#search_articleID").val(),
            "memberName" : $("#search_name").val(),
            "articleTitle" : $("#search_title").val(),
            "articleTime" : $("#search_myDate").val()
        },
        dataType: "json",
        success: function(response) {
            // response = JSON.parse(response);
            console.log(response);
            $.each(response, function(index, row) {
                ul_el.innerHTML += `
                <li>
                    <span>${row.articleID}</span>
                    <span>${row.memberName}</span>
                    <span>${row.articleTitle}</span>
                    <span>${row.articleTime}</span>
                    <a class="read" href="">查看</a>
                </li>`;
            });
            
            let read_btn = document.getElementsByClassName("read");
            const article_edit = document.getElementById('article-edit');
            const article_search = document.getElementById('article-search');
            const article_reate = document.getElementById('article-create');
            for( let i = 0 ; i < read_btn.length ; i++ ){
                read_btn[i].addEventListener("click", function(e){
                    e.preventDefault();
                    article_edit.style.display = 'block';
                    article_search.style.display = 'none';
                    article_reate.style.display = 'none';
                    read_more(e.target.closest("li").querySelector("span").innerHTML);
                })
            }
        },
        error: function(xhr, status, error) {
            alert("error:" + error);
        }
    });
})
// // =================================== 搜尋文章 ===========================