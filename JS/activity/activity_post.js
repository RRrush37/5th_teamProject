var boyOnlyCheckbox = document.getElementById("boyonly");
var girlOnlyCheckbox = document.getElementById("girlonly");

boyOnlyCheckbox.addEventListener("change", function () {
    if (this.checked) {
        girlOnlyCheckbox.disabled = true;
    } else {
        girlOnlyCheckbox.disabled = false;
    }
});

girlOnlyCheckbox.addEventListener("change", function () {
    if (this.checked) {
        boyOnlyCheckbox.disabled = true;
    } else {
        boyOnlyCheckbox.disabled = false;
    }
});



// 取得當前日期
var currentDate = new Date();


// 將當前日期增加
currentDate.setDate(currentDate.getDate() + 1);


// 格式化日期為 YYYY-MM-DD 格式
var formattedDate = currentDate.toISOString().split("T")[0];

// 將日期設定為 `min` 屬性值
$("#depart").prop("min", formattedDate);

$("#depart").change(() => {
    let start = new Date($("#depart").val()); // 將 #depart 的值轉換為日期物件
    let formattedDate = start.toISOString().split("T")[0];

    $("#leave").prop("min", formattedDate); // 將 #depart 的日期設定為 #leave 的 min 屬性值

    start.setDate(start.getDate() + 4); // 將 #depart 的日期加上四天
    let formattedDate2 = start.toISOString().split("T")[0];
    $("#leave").prop("max", formattedDate2);
});


let post_btn = document.getElementById("post_btn");

post_btn.addEventListener("click", function (e) {
    e.preventDefault();
    let item_id = Date.now();
    let topic = document.getElementById("topic").value;
    let title = document.getElementsByClassName("title")[0].value;
    let post_time = Date.now();
    let post_time_display = convertTimeToHumanReadable(post_time);
    let count = document.getElementById("count").value;
    let content = document.getElementsByClassName("words")[0].value;
    let depart = document.getElementById("depart").value;
    let leave = document.getElementById("leave").value;
    let loc = document.getElementById("loc").value;
    let criteria_from1 = document.getElementsByClassName("criteria");
    let criteria_from = [...criteria_from1];
    let criteria = [""];
    criteria_from.forEach(e => {
        if (e.checked) {
            criteria.push(e.value);
        }
    });

    let sent = true;

    if (leave < depart) {
        alert("結束時間不能早於開始時間的吧～");
        depart_input = "";
        leave_input = "";
        sent = false;
    }

    if (title === "") {
        alert("請輸入活動標題");
        sent = false;
    }
    if (depart === "") {
        alert("請輸入活動開始日期");
        sent = false;
    }
    if (leave === "") {
        alert("請輸入活動結束日期");
        sent = false;
    }

    if (content === "") {
        alert("請輸入活動說明");
        sent = false;
    }

    if (sent) {
        $.ajax({
            url: "php/activityPost.php",
            method: "post",
            dataType: "text",
            data: {
                "item_id": item_id,
                "topic": topic,
                "post_time": post_time,
                "title": title,
                "content": content,
                "count": count,
                "depart": depart,
                "leave": leave,
                "loc": loc,
                "criteria": criteria
            },
            success: (response) => {
                if (response == -1) {
                    alert("請先登入");
                } else if (response == 1) {
                    alert("發布成功");
                } else {
                    alert("發布失敗");
                }

            },
            error: (xhr, status, error) => {
                alert("error:" + error)
            },
        });
        // }else{
        //     alert("請輸入完整資料");
    }
});

let cancel_btn = document.getElementById("cancel_btn");

cancel_btn.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "activity_my_post.html";
});




