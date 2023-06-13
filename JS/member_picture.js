
export function getMemberPicture(user_img){

    $.ajax({
        url: "php/member_picture.php",
        type: "POST",
        data: {},
        dataType:"text",
        success: function(response) {
            // console.log(response);
            if (response == -1) {
                alert("未讀取到使用者資料");
                user_img.setAttribute("src", "IMG/model2cut.jpg");
            } else {
                user_img.setAttribute("src", response+"?t="+Date.now());
            }
            
        },
        error: function(xhr, status, error) {
            console.error("error:", error);
        }
    });
}

export function getGameMemberPictureName(user_img, user_name, memberid){

    $.ajax({
        url: "php/member_picture_name.php",
        type: "POST",
        data: {
            "memberid" : memberid
        },
        dataType:"text",
        success: function(response) {

            response = JSON.parse(response);
            if ( response.length == 0) {
                user_img.setAttribute("src", "");
                user_name.innerHTML = "waitting";
            } else {
                $.each(response, function(index, row) {
                    user_name.innerHTML = row["memberName"];
                    user_img.setAttribute("src", row["memberPicture"]+"?t="+Date.now());
                });
            }
        },
        error: function(xhr, status, error) {
            console.error("error:", error);
        }
    });
}

export function getArticleMemberPicture(articleID, user_img){

    $.ajax({
        url: "php/getArticleMemberImg.php",
        type: "POST",
        data: {
            "articleID" : articleID
        },
        dataType:"text",
        success: function(response) {
            // console.log(response);
            if (response == -1) {
                alert("未讀取到使用者資料");
                user_img.setAttribute("src", "IMG/model2cut.jpg");
            } else {
                user_img.setAttribute("src", response+"?t="+Date.now());
            }
            
        },
        error: function(xhr, status, error) {
            console.error("error:", error);
        }
    });
}


export function getActivityMemberPicture(activityID, user_img){

    $.ajax({
        url: "php/getActivityMemberImg.php",
        type: "POST",
        data: {
            "activityID" : activityID
        },
        dataType:"text",
        success: function(response) {
            // console.log(response);
            if (response == -1) {
                alert("未讀取到使用者資料");
                // user_img.setAttribute("src", "IMG/model2cut.jpg");
            } else {
                user_img.setAttribute("src", response+"?t="+Date.now());
            }
            
        },
        error: function(xhr, status, error) {
            console.error("error:", error);
        }
    });
}