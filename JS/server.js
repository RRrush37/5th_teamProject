//import express 和 ws 套件
const { json } = require('body-parser')
const express = require('express')
const SocketServer = require('ws').Server
const PORT = 3000 //指定 port
let room_ready = [{
  "num": "",
  "player": 0,
  "ready": "",
  "id":["","","","","","",""]
}] ;

let room_start = [{ // 用來儲存遊戲開始後的資訊
  "num": "", // 用於讓伺服器知道房間號碼
  "wait": false, // 用來告訴等待倒計時中的伺服器已結束倒計時
  "second": [0,0,0,0,0,0,0], // 用於讓伺服器知道現在跑到第幾秒鐘
  "round": [], // 用於讓伺服器知道目前的階段
  "player_state": [],// 用於讓伺服器知道玩家狀態
}]

let first = true ; // go階段使用

//創建 express 物件，綁定監聽  port , 設定開啟後在 console 中提示
const server = express().listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})

//將 express 交給 SocketServer 開啟 WebSocket 的服務
const wss = new SocketServer({ server })

//當有 client 連線成功時
wss.on('connection', ws => {
  console.log('Client connected')
  // 當收到client消息時
  ws.on('message', data => {
    data = JSON.parse(data); // 轉格式

    if ( data[0] == "connect" ) {
      let find = false ;
      let isstart = false ;
      for( let i = 0 ; i < room_start.length ; i++ ) {
        if ( data[1].num == room_start[i].num) {
          //找到已開始遊戲
          isstart = true ;

          //有此房間
          data[1] = room_start[i] ;
          data[0] = "start" ;
        }
      }

      if ( isstart != true ) {
        for ( let i = 0 ; i < room_ready.length ; i++ ) { // 確認是否有此房號
          if ( data[1].num == room_ready[i].num ) {
            //有此房間
            room_ready[i].player++; //新增一位玩家
            room_ready[i].id[room_ready[i].player-1] = room_ready[i].player // 新增一個ID
            data[1].player = room_ready[i].player; //新玩家數量
            data[1].ready = room_ready[i].ready ; //存既有ready
            data[1].id = room_ready[i].id ;//存既有id
            room_ready[i].id[data.player-1] = data[1].player;//+新id
            find = true ;
            console.log("room_ready[i].id"+room_ready[i].id);
          }
        }
  
        if ( !find ) { //查無此房號，第一次登入
          room_ready[room_ready.length-1] = {
            "num": "",
            "player": 0,
            "ready": "",
            "id":["","","","","","",""]
          }
          room_ready[room_ready.length-1].num = data[1].num ;
          room_ready[room_ready.length-1].player = 1 ;
          room_ready[room_ready.length-1].ready = [0,0,0,0,0,0,0];
          
          data[1].player = room_ready[room_ready.length-1].player;
          data[1].ready = room_ready[room_ready.length-1].ready;
  
          room_ready[room_ready.length-1].id[data[1].player-1] = data[1].player;
          data[1].id = room_ready[room_ready.length-1].id ;
          console.log("room_ready[room_ready.length-1].id[data.player-1]"+room_ready[room_ready.length-1].id[data.player-1])
          console.log("room_ready[room_ready.length-1].id"+room_ready[room_ready.length-1].id)
          console.log("data.player-1"+data[1].player-1)
        }
        console.log("data.num"+data[1].num);
        console.log("data.player"+data[1].player);
        console.log("data.ready"+data[1].ready);
        console.log("data.id"+data[1].id);
        console.log("room_ready[0].ready"+room_ready[0].ready);
        console.log("room_ready[0].id"+room_ready[0].id);
        /// 發送給所有client： 
        
      }

      data = JSON.stringify(data);
      let clients = wss.clients  //取得所有連接中的 client
      clients.forEach(client => {

          client.send(data)  // 發送至每個 client
          console.log("client"+client);

      })
      
    } else if ( data[0] == "ready") {

      for ( let i = 0 ; i < room_ready.length ; i++ ) { // 確認是否有此房號
        if ( data[1].num == room_ready[i].num ) {
          //有此房間
          room_ready[i].ready = data[1].ready ; // 存起來後可用於給後面新連線的玩家更新資料
          console.log("room_ready[i].ready"+room_ready[i].ready);
        }
      }

      /// 發送給所有client： 
      data = JSON.stringify(data);
      let clients = wss.clients  //取得所有連接中的 client
        clients.forEach(client => {
          if ( client !== ws) {
            client.send(data)  // 發送至每個 client
            console.log("client"+client);
          }
       
      })
    } else if ( data[0] == "prepare" ) {
      // 進來的為房主傳送的第一筆資料
      console.log("prepare");
      room_start[room_start.length-1] = {
        "num": "", // 用於讓伺服器知道房間號碼
        "wait": false, // 用來告訴等待倒計時中的伺服器已結束倒計時
        "second": [0,0,0,0,0,0,0], // 用於讓伺服器知道現在跑到第幾秒鐘
        "round": [], // 用於讓伺服器知道目前的階段
        "player_state": [],// 用於讓伺服器知道玩家狀態
      }
      data[1].wait = true ;
      data[1].second = [3,3,3,3,3,3,3] ;
      data[1].round[1] == "開局階段";
      room_start[room_start.length-1] = data[1] ;
      console.log("room_start[room_start.length-1].num"+room_start[room_start.length-1].num);
      
      let data2 = JSON.stringify(data);
      let clients = wss.clients  //取得所有連接中的 client
      clients.forEach(client => {
        client.send(data2)  // 發送至每個 client
      })

    } else if ( data[0] == "go") {
      if ( data[1].wait == true) { // 等待倒計時
        console.log("go2");
        
        for ( let i = 0 ; i < room_start.length ; i++) { //找同房號
          if ( data[1].num == room_start[i].num ) { //找到同房號
            for ( let j = 0 ; j < data[1].player_state.length ; j++) {
              if (data[1].second[j] == 0 ) {
                room_start[i].second[j] = data[1].second[j] ;
              }
            }
            console.log("找到同房號");
            console.log("room_start[i].second"+room_start[i].second);
            console.log(Array.isArray(room_start[i].second)) ;
            console.log("first"+first);
            if ( room_start[i].second.toString() == "0,0,0,0,0,0,0" && first) { // 第一次全部都回來了
              data[1].wait = true ;
              data[1].second = [10,10,10,10,10,10,10] ;
              data[1].round[1] = "抿牌階段";
              data[0] = "go" ;
              room_start[i] = data[1] ;
              first = false ;
              console.log("first"+first);
              // 發送給所有client： 
              let data2 = JSON.stringify(data);
              let clients = wss.clients  //取得所有連接中的 client
              clients.forEach(client => {
                client.send(data2)  // 發送至每個 client
              })

            } else if ( room_start[i].second.toString() == "0,0,0,0,0,0,0" && !first) { //第二次全部都回來了
              data[1].wait = true ;
              data[1].second = [10,10,10,10,10,10,10] ;
              data[1].round[1] = "狼人回合";
              data[0] = "start" ;
              room_start[i] = data[1] ;
              console.log("6666666666");

              let data2 = JSON.stringify(data);
              let clients = wss.clients  //取得所有連接中的 client
              clients.forEach(client => {
                client.send(data2)  // 發送至每個 client
              })
            }
          }
        }
      }
    } else if ( data[0] == "start" ) {

      let find = false ;
      for ( let i = 0 ; i < room_start.length ; i++ ) { // 確認是否有此房號
        if ( data[1].num == room_start[i].num ) {
          //有此房間
          data[1].num = room_start[i].num ;
          data[1].second = room_start[i].second ;
          data[1].round = room_start[i].round ;
          data[1].player_state = room_start[i].player_state ;
          find = true ;
          console.log("room_start[i].num"+room_start[i].num);
        }
      }

      if ( !find ) { //查無此房號，第一次登入
        room_start[room_start.length-1] = {
          "num": "", // 用於讓伺服器知道房間號碼
          "wait": false, // 用來告訴等待倒計時中的伺服器已結束倒計時
          "second": [0,0,0,0,0,0,0], // 用於讓伺服器知道現在跑到第幾秒鐘
          "round": [], // 用於讓伺服器知道目前的階段
          "player_state": [],// 用於讓伺服器知道玩家狀態
        }
        room_start[room_start.length-1].num = data[1].num ;
        room_start[room_start.length-1].second = data[1].second ;
        room_start[room_start.length-1].round = data[1].round;
        room_start[room_start.length-1].player_state = data[1].player_state;
        console.log("room_start[room_start.length-1].num"+room_start[room_start.length-1].num);
      }

      /// 發送給所有client： 
      data = JSON.stringify(data);
      let clients = wss.clients  //取得所有連接中的 client
      clients.forEach(client => {
        if ( client !== ws) {
          client.send(data)  // 發送至每個 client
        }
      })

    }

  })


  // 當連線關閉
  ws.on('close', () => {
    console.log('Close connected')
  })
})