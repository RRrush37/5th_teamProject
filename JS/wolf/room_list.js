import * as getID from "../../JS/get_memberID.js";

$.ajax({
    url: "php/room_list.php",
    type: "POST",
    data: {},
    dataType:"json",
    success: function(response) {
        // response = JSON.parse(response);

        if ( response != -1) {
            $.each(response, function(index, row) {
                // console.log(response);
                $(".room_box").append(
                    `
                    <div class="room">
                        <span class="name" data-name="${row.roomName}的遊戲室"></span>
                        <span class="room_number" data-roomNum="${row.roomNum}" data-password="${row.roomPassword}">房號：</span>
                        <span class="num" data-player="${row.person}">人數</span>
                        <span class="state" data-lock="${row.lock}"></span>
                    </div>
                    `
                );
            });
    
    
            let room_list = document.getElementsByClassName("room");
            roomImformation();
    
            let search_room_list = [];
            let search_btn = document.getElementById("search_btn");
            let search_el = document.getElementById("search") ;
    
            search_btn.addEventListener("click", function(e){
                e.preventDefault();
                search( search_el.value, search_room_list );
                console.log(search_el.value);
            })
            
    
            let room_password_close = document.querySelector(".room_password > article > .close");
            let room_full_close = document.querySelector(".room_full > article > .close");
    
            let room_password_el = document.getElementsByClassName("room_password")[0];
            let room_full_el = document.getElementsByClassName("room_full")[0];
            let password_list = document.getElementsByClassName("password") ;
            let incorrect = document.getElementById("incorrect");
            let roomNum;
            let memberID;

            room_password_el.addEventListener("click", function (e) {
                room_password_el.classList.add("none");
                incorrect.classList.add("none");
                for( let i = 0 ; i < password_list.length ; i++ ){
                    password_list[i].value = "" ;
                }
            });
    
            room_full_el.addEventListener("click", function (e) {
                room_full_el.classList.add("none");
            });
    
            room_password_el.querySelector("article").addEventListener("click", function (e) {
                e.stopPropagation();
            });
    
            room_full_el.querySelector("article").addEventListener("click", function (e) {
                e.stopPropagation();
            });
    
            room_password_close.addEventListener("click", function () {
                room_password_el.classList.add("none");
                incorrect.classList.add("none");
                
                for( let i = 0 ; i < password_list.length ; i++ ){
                    password_list[i].value = "" ;
                }
            });
    
            room_full_close.addEventListener("click", function () {
                room_full_el.classList.add("none");
            });


            function roomImformation(){ // 依照資料庫提供的房間資訊，將其
                let room_list = document.getElementsByClassName("room");

                
                for (let i = 0; i < room_list.length; i++) {
            
                    //加上房間設定
                    room_list[i].querySelectorAll("span")[0].innerHTML = room_list[i].querySelectorAll("span")[0].innerHTML+room_list[i].querySelectorAll("span")[0].getAttribute("data-name");
                    room_list[i].querySelectorAll("span")[1].innerHTML = room_list[i].querySelectorAll("span")[1].innerHTML+room_list[i].querySelectorAll("span")[1].getAttribute("data-roomNum");
                    room_list[i].querySelectorAll("span")[2].innerHTML = room_list[i].querySelectorAll("span")[2].innerHTML+room_list[i].querySelectorAll("span")[2].getAttribute("data-player")+"/7";
                    
                    if (room_list[i].querySelectorAll("span")[3].getAttribute("data-lock") == 1 ) {
                        room_list[i].querySelectorAll("span")[3].classList.add("lock") ;
                    } else {
                        room_list[i].querySelectorAll("span")[3].classList.add("unlock") ;
                    }
                    //加上房間設定
            
                    room_list[i].addEventListener("click", function (e) {
    
                        if ( e.target.closest(".room").querySelectorAll("span")[2].getAttribute("data-player") < 7 ) {
                            roomNum = e.target.closest(".room").querySelectorAll("span")[1].getAttribute("data-roomNum");
                            console.log(roomNum);
                            if ( room_list[i].querySelectorAll("span")[3].classList.contains("lock")) {
                                room_password_el.classList.remove("none");
                                room_password_el.querySelector("input").focus();
                
                                keydownPassword( room_list[i].querySelectorAll("span")[1].getAttribute("data-password") );
                            } else {
                                //無密碼的房間直接進入
    
                                let roomInfor = { //餘用戶端建立遊戲室資訊存於ssesionstorage
                                    "roomID": "",
                                    "roomName": "",
                                    "roomNum" : "",
                                    "roomPassword" : "",
                                    "lock" : "",
                                    "person" : 1,
                                    "player1" : "",
                                    "player2" : "",
                                    "player3" : "",
                                    "player4" : "",
                                    "player5" : "",
                                    "player6" : "",
                                    "player7" : "",
                                };
                
                                getID.getMemberID().then(function(response2) {
                                    memberID = response2;
                                    
                                    $.ajax({
                                        url: "php/getRoomInformation.php",
                                        type: "POST",
                                        data: { 
                                            "roomNum" : roomNum,
                                            "memberID" : memberID
                                        },
                                        dataType:"json",
                                        success: function(response) {
                    
                                            roomInfor.roomID = response[0].roomID ;
                                            roomInfor.roomName = response[0].roomName ;
                                            roomInfor.roomNum = response[0].roomNum ;
                                            roomInfor.roomPassword = response[0].roomPassword ;
                                            roomInfor.lock = response[0].lock ;
                                            roomInfor.person = response[0].person ;
                                            roomInfor.player1 = response[0].player1 ;
                                            roomInfor.player2 = response[0].player2 ;
                                            roomInfor.player3 = response[0].player3 ;
                                            roomInfor.player4 = response[0].player4 ;
                                            roomInfor.player5 = response[0].player5 ;
                                            roomInfor.player6 = response[0].player6 ;
                                            roomInfor.player7 = response[0].player7 ;
                    
                                            sessionStorage.setItem("roomInfor", JSON.stringify(roomInfor));
                                            console.log(roomInfor);
                                            location.href= "wolf_room.html" ;
                    
                                        },
                                        error: function(xhr, status, error) {
                                            console.error("error:", error);
                                        }
                                    })
                                }).catch(function(error) {
                                    console.error("error:", error);
                                });
                                
    
                            }
                        } else {
                            room_full_el.classList.remove("none");
                        }
                        
                    });
                }
            }
    
            function keydownPassword( room_password ){
              for ( let i = 0 ; i < password_list.length ; i++ ) {
                password_list[i].addEventListener("keydown", function(e){
                  if( (e.which >= 48 && e.which <= 57) || e.which == 8 ){ // 8 是刪除鍵
                    if( e.which == 8 && e.target.value.length == 0 ){ //檢查是否為刪除建
                        let previous_el = e.target.previousElementSibling ;
                        previous_el.focus() ;
                    }
                  }else{
                    e.preventDefault(); // 停止預設行為(在欄位上出現所打的文字)
                  }
                })
            
                password_list[i].addEventListener("keyup", function(e){
            
                  let str = e.target.value.replace(/\D/g,""); //正規表達式
                  e.target.value = str ;
            
                  if( e.target.value.length == 1 ){ //檢查是否有值
                      let next_el = e.target.nextElementSibling ;
                      if(next_el != null ) { // 檢查是否為最後一個，不是的話就往後移一個兄弟元素
                          next_el.focus() ;
                      }
                  } else {
                      e.preventDefault() ;
                  }
            
                  let password = "" ;
                  for( let i = 0 ; i < password_list.length ; i++ ) {
                    password += password_list[i].value ;
                  }
            
                  if ( password.length == 4 ) {
                    checkPassword( room_password );
                  }
                })
              }
            }
    
            function checkPassword( room_password ){
                let str = "" ;
                for( let i = 0 ; i < password_list.length ; i++ ) {
                    str += password_list[i].value ;
                }
                
                if ( str == room_password ) {
                    console.log("correct");
                    let roomInfor = { //餘用戶端建立遊戲室資訊存於ssesionstorage
                        "roomID": "",
                        "roomName": "",
                        "roomNum" : "",
                        "roomPassword" : "",
                        "lock" : "",
                        "person" : 1,
                        "player1" : "",
                        "player2" : "",
                        "player3" : "",
                        "player4" : "",
                        "player5" : "",
                        "player6" : "",
                        "player7" : "",
                    };
    
                    getID.getMemberID().then(function(response2) {
                        memberID = response2;
                        console.log(memberID);
                        $.ajax({
                            url: "php/getRoomInformation.php",
                            type: "POST",
                            data: { 
                                "roomNum" : roomNum,
                                "memberID" : memberID
                            },
                            dataType:"json",
                            success: function(response) {
        
                                roomInfor.roomID = response[0].roomID ;
                                roomInfor.roomName = response[0].roomName ;
                                roomInfor.roomNum = response[0].roomNum ;
                                roomInfor.roomPassword = response[0].roomPassword ;
                                roomInfor.lock = response[0].lock ;
                                roomInfor.person = response[0].person ;
                                roomInfor.player1 = response[0].player1 ;
                                roomInfor.player2 = response[0].player2 ;
                                roomInfor.player3 = response[0].player3 ;
                                roomInfor.player4 = response[0].player4 ;
                                roomInfor.player5 = response[0].player5 ;
                                roomInfor.player6 = response[0].player6 ;
                                roomInfor.player7 = response[0].player7 ;
        
                                sessionStorage.setItem("roomInfor", JSON.stringify(roomInfor));
                                console.log(roomInfor);
                                location.href= "wolf_room.html" ;
        
                            },
                            error: function(xhr, status, error) {
                                console.error("error:", error);
                            }
                        })
                    }).catch(function(error) {
                        console.error("error:", error);
                    });
    
                    // let roomInfor = { //餘用戶端建立遊戲室資訊存於ssesionstorage
                    //     "roomID": "",
                    //     "roomName": "",
                    //     "roomNum" : "",
                    //     "roomPassword" : "",
                    //     "lock" : "",
                    //     "person" : 1,
                    //     "player1" : "",
                    //     "player2" : "",
                    //     "player3" : "",
                    //     "player4" : "",
                    //     "player5" : "",
                    //     "player6" : "",
                    //     "player7" : "",
                    // };
    
                    // $.ajax({
                    //     url: "php/getRoomInformation.php",
                    //     type: "POST",
                    //     data: { 
                    //         "roomNum" : roomNum
                    //     },
                    //     dataType:"json",
                    //     success: function(response) {
    
                    //         roomInfor.roomID = response[0].roomID ;
                    //         roomInfor.roomName = response[0].roomName ;
                    //         roomInfor.roomNum = response[0].roomNum ;
                    //         roomInfor.roomPassword = response[0].roomPassword ;
                    //         roomInfor.lock = response[0].lock ;
                    //         roomInfor.person = response[0].person ;
                    //         roomInfor.player1 = response[0].player1 ;
                    //         roomInfor.player2 = response[0].player2 ;
                    //         roomInfor.player3 = response[0].player3 ;
                    //         roomInfor.player4 = response[0].player4 ;
                    //         roomInfor.player5 = response[0].player5 ;
                    //         roomInfor.player6 = response[0].player6 ;
                    //         roomInfor.player7 = response[0].player7 ;
    
                    //         sessionStorage.setItem("roomInfor", JSON.stringify(roomInfor));
                    //         console.log(roomInfor);
                    //         location.href= "wolf_room.html" ;
    
                    //     },
                    //     error: function(xhr, status, error) {
                    //         console.error("error:", error);
                    //     }
                    // })
    
                } else {
                    incorrect.classList.remove("none");
                }
            }
    
            
    
            function search( str, search_room_list ){
                search_room_list = [] ;
                Array.from(room_list).filter( item => {
                    for ( let i = 0 ; i < room_list.length ; i++ ) {
                        // console.log(item.querySelectorAll("span")[0].innerHTML.includes(str));
                        if (item.querySelectorAll("span")[0].innerHTML.includes(str) == true) {
                            console.log(item.querySelectorAll("span")[0].getAttribute("data-name"));
                            search_room_list.push(i);
                        }
                    }
                } );
    
                for ( let i = 0 ; i < room_list.length ; i++ ) {
                    if ( search_room_list.includes(i) ) {
                        room_list[i].classList.remove("none");
                    } else {
                        room_list[i].classList.add("none");
                    }
                }
    
            }
            
        } else {
            alert("請先登入帳號");
            location.href = "member_login.html" ;
        }
       
        
    },
    error: function(xhr, status, error) {
        console.error("error:", error);
    }
});

