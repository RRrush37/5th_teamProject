

$.ajax({
    url: "php/getBuyLog.php",
    method: "post",
    datatype: "json",
    data: {
    type: "1",
    },
    success: (response) => {
    alert(response);
    response = JSON.parse(response);
    console.log(response[0].totalCoin);
    console.log(response[0]);
    let str = "";
    
    for (let i = 0; i < response.length; i++) {
        let month = Math.floor(response[i].date/100);
        let day = response[i].date%100;
        let str1 =
        `
        <tr>
            <th>${month}/${day}</th>
            <th>${response[i].coinChange}</th>
            <th>${response[i].totalCoin}</th>
        </tr>
        `
        str += str1;
    }
    document.querySelector(".tab_content").innerHTML = str
    // $(".stored").html(str);
    },
    error: (xhr, status, error) => {
    alert("error: " + error);
    },
});