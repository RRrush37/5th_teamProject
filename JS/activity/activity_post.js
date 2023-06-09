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
    let criteria = [];
    criteria_from.forEach(e => {
        if (e.checked) {
            criteria.push(e.value);
        }
    });
    $.ajax({
        url: "php/activityPost.php",
        method: "post",
        dataType: "json",
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
            if(response==-1){
                alert("請先登入");
            } else if(response == 1) {
                alert("發布成功");
            }else{
                alert("發布失敗");
            }
            
        },
        error: (xhr, status, error) => {
            alert("error:" + error)
        },
    })

    // let card = {
    //     "item_id": item_id,
    //     "topic": topic,
    //     "post_time": post_time,
    //     "title": title,
    //     "content": content,
    //     "count": count,
    //     "depart": depart,
    //     "leave": leave,
    //     "loc": loc,
    //     "criteria": criteria
    // };

    // let cards = JSON.parse(localStorage.getItem("cards"));

    // if (cards) { // 若存在
    //     cards.unshift(card); // [{}, {}]
    // } else { // 若不存在
    //     cards = [card]; // [{}]
    // }
    // localStorage.setItem("cards", JSON.stringify(cards));

});



