export function getMemberID(callback) {
    return new Promise(function(resolve, reject) {
      $.ajax({
        url: "php/getMemberId.php",
        type: "POST",
        data: {},
        dataType: "text",
        success: function(response) {
            if (response == -1) { // 使用者未登入
                resolve(response)
            } else {
                resolve(response);
            }
        },
        error: function(xhr, status, error) {
          reject(error);
        }
      });
    }).then(function(response) {
      if (typeof callback === "function") {
        callback(response);
      }
      return response;
    });
  }
