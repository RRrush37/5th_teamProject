
export function getMemberPicture(user_img){
    $.ajax({
        url: "php/member_picture.php",
        type: "POST",
        data: {},
        dataType:"text",
        success: function(response) {
            user_img.setAttribute("src", response);
        },
        error: function(xhr, status, error) {
            console.error("error:", error);
        }
    });
}

