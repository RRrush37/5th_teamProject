
let active_box = document.getElementsByClassName("active_box")[0] ;
let active_box_body = active_box.querySelector(".body") ;

$.ajax({
    url: "php/back_showNewActivity.php",
    type: "POST",
    dataType: "json",
    data: {},
    success: function (response) {
        // response = JSON.parse(response);
        $.each(response, function(index, row) {
            active_box_body.innerHTML = `
            <div class="sub_title">
                <h2 class="left">類型:</h2>
                <p class="right">${row.activityTopic}</p>
            </div>

            <div class="sub_title">
                <h2 class="left">主題:</h2>
                <p class="right">${row.activityName}</p>
            </div>

            <div class="sub_title">
                <h2 class="left">人數:</h2>
                <p class="right">${row.activityLimit}</p>
            </div>

            <div class="sub_title">
                <h2 class="left">地點:</h2>
                <p class="right">${row.activityPlace}</p>
            </div>

            <div class="time">
                <h2 class="left">舉辦時間:</h2>
                <p class="right">${row.activityStartDate} ~ ${row.activityEndDate}</p>
            </div>

            <div class="description">
                <h2 class="left">活動內容:</h2>
                <p class="right">${row.activityNote}</p>
            </div>
            `;
        });
    },
    error: function (xhr, status, error) {
      // 在此處處理錯誤情況
      console.log("Error: " + error);
    },
});