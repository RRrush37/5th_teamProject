$(function () {

    //取得bag_rule_lightbox 元素
    let bag_rule_lightbox = document.getElementsByClassName("bag_rule_lightbox")[0];

    //取得切換按鈕的部分
    let fa_pen_to_squaren = document.getElementsByClassName("fa-pen-to-square")[0];

    //到進入編輯按鈕時,燈箱不見
    //取得第一個關閉的元素
    let use_close = document.getElementsByClassName("use")[0].querySelector("input");
    let rule_checkbox = document.getElementById("rule");
    let notChecked = document.getElementsByClassName("notChecked")[0]; // 必需勾選

    fa_pen_to_squaren.addEventListener("click", function () {

        if (rule_checkbox.checked == false) {
            bag_rule_lightbox.classList.remove("none");
        } else {
            // 給 bag_rule_lightbox 元素新增 "none" 類別以隱藏燈箱
            bag_rule_lightbox.classList.add("none");
            // 移除 second_lightbox 元素的 "none" 類別以顯示第二個燈箱
            edit_lightbox.classList.remove("none");

        }

        // alert("lalalal"); 
    });


    bag_rule_lightbox.addEventListener("click", function () {
        this.classList.add("none");
    })

    bag_rule_lightbox.querySelector(".bag").addEventListener("click", function (e) {
        // e.stopPropagation();
    })

    // 取得第二個燈箱元素
    let edit_lightbox = document.getElementsByClassName("edit_lightbox")[0];

    // 當點擊關閉按鈕時觸發的事件處理函式
    use_close.addEventListener("click", function () {

        if (rule_checkbox.checked == false) {
            notChecked.classList.remove("none"); // 必需勾選
        } else {
            // 給 bag_rule_lightbox 元素新增 "none" 類別以隱藏燈箱
            bag_rule_lightbox.classList.add("none");
            // 移除 second_lightbox 元素的 "none" 類別以顯示第二個燈箱
            edit_lightbox.classList.remove("none");
            notChecked.classList.add("none");
        }


    });

    // 當點擊第二個燈箱時觸發的事件處理函式
    edit_lightbox.addEventListener("click", function () {
        // 給 second_lightbox 元素新增 "none" 類別以隱藏第二個燈箱
        this.classList.add("none");
    });

    //停止冒泡事件(下一層的div)
    edit_lightbox.querySelector(".wrapper1").addEventListener("click", function (e) {
        // 給 second_lightbox 元素新增 "none" 類別以隱藏第二個燈箱
        e.stopPropagation();

    });


    //停止冒泡事件(下一層的div)
    let bag = document.getElementsByClassName("bag")[0];

    bag.addEventListener("click", function (e) {
        e.stopPropagation();
    });



    let upload_input = document.getElementById("upload-input");
    let preview = document.getElementById("image-container");
    let files = upload_input.files;
    upload_input.style.opacity = 0;

    // 預覽圖片
    upload_input.addEventListener('change', function (e) {
        preview.innerHTML = "";

        let curFiles = e.target.files;
        if (curFiles.length !== 0) {
            for (let i = 0; i < curFiles.length; i++) {
                let src_str = URL.createObjectURL(curFiles[i]);
                let list = `<span style="width: 50%; display: inline-block;"><img src="${src_str}" style="width: 100%;"></span>`;
                preview.innerHTML += list;
            }
            files = curFiles;
            // console.log(files);
        }
    });

    let cancel = document.getElementById("cancel");
    let send = document.getElementById("send");
    let title = document.getElementById("title");
    let content = document.getElementById("content");

    cancel.addEventListener("click", function () {
        title.value = "";
        content.value = "";
        preview.innerHTML = "";
        upload_input.value = "";
    })

    content.addEventListener("keydown", function (e) {
        if (content.value.length >= 147 && e.key != "Backspace") {
            alert("內容長度不可超過150個字");
            e.preventDefault(); // 停止預設行為(在欄位上出現所打的文字)
        }
    })

    let create_list_el = document.getElementsByClassName("create_list")[0];
    let rifht_my_activity = document.getElementsByClassName("my_activity")[0];
    send.addEventListener("click", function () {
        if (title.value == "") {
            alert("請填寫標題");
        }

        if (content.value == "") {
            alert("請填寫內容");
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
                url: "php/renderArticle.php",
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
                    edit_lightbox.classList.add("none");

                    //新增文章進主頁
                    addArticle(response)
                },
                error: function (xhr, status, error) {
                    alert("error:" + error);
                }
            });


        }
    })

    function addArticle(articlID) {

        $.ajax({
            url: "php/showArticle.php",
            datatype: "json",
            method: "post",
            data: {},
            success: (response) => {
                response = JSON.parse(response);
                let article_id = articlID;


                // console.log(response);

                rifht_my_activity.innerHTML +=
                    `
                <h3>最新文章列表</h3>
                <p>${response[0].articleTime}<br>
                    ${response[0].articleTitle}</p>
                <section>
                    <p>
                        ${response[0].articleContent}
                    </p>
                </section>
                `;

                // 與上一篇文章為不同篇，加上內容
                create_list_el.insertAdjacentHTML("afterbegin",
                    `
                    <div class="cards_content">
                        <div class="articleID" data-id="${response[0].articleID}" style=" opacity : 0"></div>
                        <div class="card_user">
                            <div class="card_article">
                                <img src="IMG/diary/big_girl.png" alt="">
                                <h2>${response[0].articleTitle}</h2>
                            </div>
                        </div>

                        <div class="card_text">
                            <div class="text_image">
                            </div>
                            <div class="text_title">
                                <p>${response[0].articleContent}</p>
                            </div>
                        </div>

                        <div class="interact">
                            <div class="icon">
                                <i class="fa-regular fa-heart"></i><span>${response[0].likeNum}</span>
                                <i class="fa-regular fa-comment-dots"></i><span>${response[0].commentNum}</span>
                                <i class="fa-regular fa-bookmark"></i>
                            </div>
                                <button class="moreButton">Read more</button>
                        </div>
                    </div>
                    `);

                let text_image = 0;
                $.each(response, function (index, row) {

                    if (article_id == row.articleID) {
                        // 與上一篇文章為不同篇，重製圖片內容
                        article_id = row.articleID;
                        text_image = document.getElementsByClassName("text_image")[0];
                        if (row.imageURL) {
                            //此篇內文有圖片
                            text_image.innerHTML +=
                                `
                            <img src="IMG/${row.imageURL}" alt="">
                            `;
                        }
                    }

                })

                window.location.reload();
            },
            error: (xhr, status, error) => {
                alert("error:" + error)
            }

        });
    }

})