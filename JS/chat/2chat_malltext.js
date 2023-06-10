

// ========================= 顯示全部商品 =========================

let list_box = document.getElementsByClassName("list_box")[0];
let ul_el = list_box.querySelector("ul");
ul_el.innerHTML = "" ;
$.ajax({
    url:"php/back_showAllStore.php",
    datatype: "json",
    method:"post",
    data:{
    },
    success:(response)=>{
        response = JSON.parse(response);
        $.each(response, function(index, row) {
            ul_el.innerHTML += `
            <li>
                <span>${row.storeID}</span>
                <span>${row.itemType}</span>
                <span>${row.itemName}</span>
                <span>${row.itemDetail}</span>
                <span>${row.startDate}</span>
                <a class="read" href="">查看</a>
            </li>`;
        });
        // console.log(comment_list);
        
        let read_btn = document.getElementsByClassName("read");
        const generalEditBar = document.getElementById('generalEdit-bar');
        const mallDataBar = document.getElementById('malldata-bar');
        const mallAddBar = document.getElementById('malladd-bar');
        for( let i = 0 ; i < read_btn.length ; i++ ){
            read_btn[i].addEventListener("click", function(e){
                e.preventDefault();
                generalEditBar.style.display = 'block';
                mallDataBar.style.display = 'none';
                mallAddBar.style.display = 'none';
                read_more(e.target.closest("li").querySelector("span").innerHTML);
            })
        }
    },
    error: (xhr, status, error)=>{
        alert("error:"+error)
    }
})
// ========================= 顯示全部商品 =========================

// ========================= 查看單一商品 =========================

function read_more( productID ){
    let generalEdit_bar = document.getElementById("generalEdit-bar");
    // console.log(productID);
    // let mall_bar.querySelector("table");
    // console.log(generalEdit_bar.querySelector("table"));
    $.ajax({
        url:"php/back_showOneProduct.php",
        datatype: "json",
        method:"post",
        data:{
            "storeID" : productID
        },
        success:(response)=>{
            response = JSON.parse(response);
            $.each(response, function(index, row) {
                generalEdit_bar.querySelector("table").innerHTML = `
                    <tr>
                        <td>商品編號</td>
                        <td>${row.storeID}</td>
                    </tr>
                        <td>商品類別</td>
                        <td>${row.itemType}</td>
                    <tr>
                        <td>商品狀態</td>
                        <td>${row.itemDetail}</td>
                    </tr>
                    <tr>
                        <td>商品圖片</td>
                        <td>
                            <div id="read_more_image" style="width: 50%; margin: 0 auto ;">
                                
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>商品銷售起始時間</td>
                        <td>${row.startDate}</td>
                    </tr>
                    <tr>
                        <td>商品價格</td>
                        <td>${row.itemPrice}</td>
                    </tr>
                    <tr>
                        <td>商品現金售價</td>
                        <td>${row.sellNum}</td>
                    </tr>
                    `;
                    // console.log(row.itemImage);

                    let read_more_image = document.getElementById("read_more_image");

                    if ( row.isCoin == "1" ) { // 是否為遊戲幣
                        read_more_image.innerHTML =`
                                <img src="IMG/store/${row.itemImage}" style="
                                width: 50% ;
                                height: 50% ;
                                display: inline-block;
                                " >`;
                    } else { //非遊戲幣
                        read_more_image.innerHTML =`
                                <img src="IMG/people/${row.itemImage}" style="
                                width: 50% ;
                                height: 50% ;
                                display: inline-block;
                                " >`;
                        // 檔案最終存放位置
                    }
            });

        },
        error: (xhr, status, error)=>{
            alert("error:"+error)
        }
    })
}

// 刪除商品
let read_More_delete_btn = document.getElementById("read_More_delete");

read_More_delete_btn.addEventListener("click", function(e){
    let productID = e.target.closest("#generalEdit-bar").querySelectorAll("td")[1].innerHTML;
    delete_product( productID );
})

function delete_product( productID ){

    $.ajax({
        url:"php/back_deleteProduct.php",
        datatype: "text",
        method:"post",
        data:{
            "storeID" : productID
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

// ========================= 查看單一商品 =========================

// =================================== 新增商品===========================

let select_new_type = document.getElementById("new_type");

select_new_type.addEventListener("change", function(){
    if (select_new_type.value == "coin" ) {
        document.getElementById("new_price").disabled = false ;
        document.getElementById("new_initial").disabled = true ;
        $("#new_initial").prop("checked", false);
    } else {
        document.getElementById("new_price").disabled = true ;
        document.getElementById("new_initial").disabled = false ;
        $("#new_price").val("");
    }
    console.log(select_new_type.value);
})

let upload_input = document.getElementById("file-upload");
let preview = document.getElementById("preview-image");
let files = upload_input.files ;
upload_input.style.opacity = 0;

// 預覽圖片
upload_input.addEventListener('change', function(e) {
    preview.src = "";

    let curFiles = e.target.files;
    if (curFiles.length !== 0) {
        // console.log(curFiles);
        let src_str = URL.createObjectURL(curFiles[0]);
        let list = `<img src="${src_str}" style="
                    width: 50% ;
                    height: 50% ;
                    display: inline-block;
                    " >`;
        preview.innerHTML += list;

        files = curFiles;
    }
});

$(function(){
    $("#addProduct-btn").click(() => {
        if (!$("#new_name").val()) {
            alert("請輸入商品名稱");
            return;
        }
    
        if (!$("#new_coinprice").val()) {
            alert("請輸入商品價格");
            return
        }
    
        if (select_new_type.value == "coin" ) {
            if (!$("#new_price").val()) {
                alert("請輸入商品現金價格");
                return;
            }
        }
    
        if (!$("#file-upload").val()) {
            alert("請上傳商品圖片");
            return;
        }
    
        if ( $("#new_name").val() && $("#new_coinprice").val() && $("#file-upload").val()) {
            // 都有填寫，可將資料輸入資料庫
            
            let form = new FormData();
            form.append("itemName", $("#new_name").val());
            form.append("new_status", $("#new_status").val());
            form.append("itemPrice", $("#new_coinprice").val());
            form.append("sellNum", $("#new_price").val());
            form.append("itemType", $("#new_type").val());
            form.append("initialItem", $("#new_initial").prop("checked"));
            form.append("isCoin", select_new_type.value == "coin" );
            for (let i = 0; i < files.length; i++) {
                form.append("files", files[i]);
            }

            console.log(files);
            console.log(form);
    
            $.ajax({
                url: "php/back_addProduct.php",
                method: "post",
                data: form,
                dataType: "text",
                processData: false,
                contentType: false,
                success: function(response) {
                    alert("新增成功");
                    $("#new_name").val("");
                    $("#new_coinprice").val("");
                    $("#new_price").val();
                    upload_input.value = "" ;
                    preview.innerHTML = "";
                    //新增文章進主頁
                    // addArticle( response )
                },
                error: function(xhr, status, error) {
                    alert("error:" + error);
                }
            });
        }
    });
})

// =================================== 新增商品===========================

// =================================== 搜尋商品===========================
// const generalSearch = document.getElementById('general-search');

generalSearch.addEventListener( "click", function(){
    ul_el.innerHTML = "" ;
    // console.log("$('#search_id').val())"+$("#search_id").val());
    // console.log("$('#search_type').val()"+$("#search_type").val());
    // console.log("$('#search_name').val()"+$("#search_name").val());
    // console.log("$('#search_status').val()"+$("#search_status").val());
    // console.log("$('#myDate').val()"+$("#myDate").val());
    
    $.ajax({
        url: "php/back_searchProduct.php",
        method: "post",
        data: {
            "storeID" : $("#search_id").val(),
            "itemType" : $("#search_type").val(),
            "itemName" : $("#search_name").val(),
            "itemDetail" : $("#search_status").val(),
            "startDate" : $("#myDate").val()
        },
        dataType: "json",
        success: function(response) {
            // response = JSON.parse(response);
            // console.log(response);
            $.each(response, function(index, row) {
                ul_el.innerHTML += `
                <li>
                    <span>${row.storeID}</span>
                    <span>${row.itemType}</span>
                    <span>${row.itemName}</span>
                    <span>${row.itemDetail}</span>
                    <span>${row.startDate}</span>
                    <a class="read" href="">查看</a>
                </li>`;
            });
            // console.log(comment_list);
            
            let read_btn = document.getElementsByClassName("read");
            const generalEditBar = document.getElementById('generalEdit-bar');
            const mallDataBar = document.getElementById('malldata-bar');
            const mallAddBar = document.getElementById('malladd-bar');
            for( let i = 0 ; i < read_btn.length ; i++ ){
                read_btn[i].addEventListener("click", function(e){
                    e.preventDefault();
                    generalEditBar.style.display = 'block';
                    mallDataBar.style.display = 'none';
                    mallAddBar.style.display = 'none';
                    read_more(e.target.closest("li").querySelector("span").innerHTML);
                })
            }
        },
        error: function(xhr, status, error) {
            alert("error:" + error);
        }
    });
})
// =================================== 搜尋商品===========================