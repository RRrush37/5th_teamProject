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
  "killed": [], // 用於讓伺服器知道夜晚殺人狀態
  "player_state": [],// 用於讓伺服器知道玩家狀態
  "gameover":[], //用於儲存遊戲是否結束
  "speaker" : [], //用於儲存發言序列
  "num_of_speaker" : 0,  //用於儲存發言人數
  "isvoted" : false  //用於儲存是否已投過票
}]

let first = true ; // go階段使用
let isvoted = false ;// 紀錄有沒有投過票使用

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
        
      } else {
        isstart = false ;
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
        "killed": [], // 用於讓伺服器知道夜晚殺人狀態
        "player_state": [],// 用於讓伺服器知道玩家狀態
        "gameover":[], //用於儲存遊戲是否結束
        "speaker" : [], //用於儲存發言序列
        "num_of_speaker" : 0,  //用於儲存發言人數
        "isvoted" : false  //用於儲存是否已投過票
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
            first = true ;

            let data2 = JSON.stringify(data);
            let clients = wss.clients  //取得所有連接中的 client
            clients.forEach(client => {
              client.send(data2)  // 發送至每個 client
            })
          }
        }
      }

    } else if ( data[0] == "start" ) {

      if ( data[1].round[1] == "狼人回合" ) {
        for ( let i = 0 ; i < room_start.length ; i++) { //找同房號
          if ( data[1].num == room_start[i].num ) { //找到同房號
            for ( let j = 0 ; j < data[1].player_state.length ; j++) {

              if ( data[1].second[j] == 0 ) {
                room_start[i].second[j] = data[1].second[j] ;
              }

              if ( data[1].player_state[j].vote > 0 ) {
                //將投票紀錄累計存起來
                room_start[i].player_state[j].vote += data[1].player_state[j].vote;
                room_start[i].player_state[j].record = data[1].player_state[j].record+ " " + room_start[i].player_state[j].record;
                console.log("room_start[i].player_state[j].vote"+room_start[i].player_state[j].vote);
                console.log("room_start[i].player_state[j].record"+room_start[i].player_state[j].record);
              }
              
            }
            console.log("找到同房號");
            console.log("room_start[i].second"+room_start[i].second);
            console.log("first"+first);
            if ( room_start[i].second.toString() == "0,0,0,0,0,0,0" && first ) {
              // 第一次全部都回來了
              //進入狼人投票結算
              first = false ;
              //=================================
              let out_num = 0, out_index = -1, no_one_out = false ;
              for ( let k = 0 ; k < room_start[i].player_state.length ; k++) {
                console.log(" no_one_out:"+no_one_out+" out_index"+out_index);

                if ( room_start[i].player_state[k].alive == true &&
                    room_start[i].player_state[k].vote > 0 &&
                    room_start[i].player_state[k].vote > out_num ) {

                    out_num = room_start[i].player_state[k].vote; //玩家票數定為目前最高票
                    // room_start[i].player_state[k].vote = 0 ;//將票數歸零
                    out_index = k ;
                    no_one_out = false ;
                } else if( room_start[i].player_state[k].alive == true &&
                    room_start[i].player_state[k].vote > 0 &&
                    room_start[i].player_state[k].vote == out_num ) {
                    // 檢查是否平票

                    no_one_out = true ;
                    // room_start[i].player_state[k].vote = 0 ;//將票數歸零

                }
              }

              if ( no_one_out == false && out_index > -1 ) { // 有投票且票數集中
                  room_start[i].player_state[out_index].out = true ;
                  console.log("room_start[i].player_state[out_index].record:"+room_start[i].player_state[out_index].record);
              }
              //=================================


              
              room_start[i].wait = true ;
              room_start[i].second = [10,10,10,10,10,10,10] ;
              room_start[i].round[1] = "狼人回合結算";
              data[1] = room_start[i] ; //更新資料
              first = true ;
              console.log("data[1].round[1]"+data[1].round[1]);

              // 發送給所有client： 
              let data2 = JSON.stringify(data);
              let clients = wss.clients  //取得所有連接中的 client
              clients.forEach(client => {
                client.send(data2)  // 發送至每個 client
              })
  
            }
          }
        }
      } else if ( data[1].round[1] == "狼人回合結算" ) {

        for ( let i = 0 ; i < room_start.length ; i++) { //找同房號
          if ( data[1].num == room_start[i].num ) { //找到同房號
            for ( let j = 0 ; j < data[1].player_state.length ; j++) {

              if ( data[1].second[j] == 0 ) {
                room_start[i].second[j] = data[1].second[j] ;
              }
            }

            if ( data[1].killed.toString() != room_start[i].killed.toString() && first ) {
              //第一次有異動
              room_start[i].killed = data[1].killed ;
              first = false ;
              console.log("room_start[i].killed "+ room_start[i].killed);
            }
            console.log("找到同房號");
            console.log("room_start[i].second"+room_start[i].second);
            if ( room_start[i].second.toString() == "0,0,0,0,0,0,0" ) {
              // 全部都回來了
              //進入女巫回合
              
              data[1].killed = room_start[i].killed ; // 更新夜晚殺人資訊
              room_start[i] = data[1]; //更新資料
              room_start[i].wait = true ;
              room_start[i].second = [10,10,10,10,10,10,10] ;
              room_start[i].round[1] = "女巫回合";
              data[1] = room_start[i] ;
              first = true ;
              console.log("data[1].round[1]"+data[1].round[1]);
              console.log("room_start[i].killed: "+room_start[i].killed);
              // 發送給所有client： 
              let data2 = JSON.stringify(data);
              let clients = wss.clients  //取得所有連接中的 client
              clients.forEach(client => {
                client.send(data2)  // 發送至每個 client
              })
  
            }
          }
        }
      } else if ( data[1].round[1] == "女巫回合" ) {

        for ( let i = 0 ; i < room_start.length ; i++) { //找同房號
          if ( data[1].num == room_start[i].num ) { //找到同房號
            for ( let j = 0 ; j < data[1].player_state.length ; j++) {

              if ( data[1].second[j] == 0 ) {
                room_start[i].second[j] = data[1].second[j] ;
              }

              if ( data[1].player_state[j].out == true ) {
                room_start[i].player_state[j].out = true ;
              }
              console.log("data[1].player_state[j].out"+data[1].player_state[j].out);
            }

            if ( data[1].killed.toString() != room_start[i].killed.toString() && first ) {
              //第一次有異動//救人
              room_start[i].killed = data[1].killed ;
              first = false ;
              console.log("room_start[i].killed "+ room_start[i].killed);
            }

            console.log("找到同房號");
            console.log("room_start[i].second"+room_start[i].second);
            if ( room_start[i].second.toString() == "0,0,0,0,0,0,0" ) {
              // 第一次全部都回來了
              //進入預言家回合

              if ( data[1].killed.toString() != room_start[i].killed.toString() ) {
                //第一次有異動//救人
                room_start[i].killed = data[1].killed ;
                first = false ;
                console.log("room_start[i].killed "+ room_start[i].killed);
                for ( let j = 0 ; j < data[1].player_state.length ; j++) {
                  room_start[i].player_state[j].out = false ;
                  console.log("solve");
                }
              }

              data[1].killed = room_start[i].killed ; // 更新夜晚女巫是否救人
              data[1].player_state = room_start[i].player_state; // 更新夜晚女巫是否殺人
              room_start[i] = data[1]; //更新資料
              room_start[i].wait = true ;
              room_start[i].second = [10,10,10,10,10,10,10] ;
              room_start[i].round[1] = "預言家回合";
              data[1] = room_start[i] ;
              first = true ;
              console.log("data[1].round[1]"+data[1].round[1]);
              console.log("room_start[i].killed: "+room_start[i].killed);
              //發送給所有client： 
              let data2 = JSON.stringify(data);
              let clients = wss.clients  //取得所有連接中的 client
              clients.forEach(client => {
                client.send(data2)  // 發送至每個 client
              })
            }
          }
        }
      } else if ( data[1].round[1] == "預言家回合" ) {

        for ( let i = 0 ; i < room_start.length ; i++) { //找同房號
          if ( data[1].num == room_start[i].num ) { //找到同房號
            for ( let j = 0 ; j < data[1].player_state.length ; j++) {

              if ( data[1].second[j] == 0 ) {
                room_start[i].second[j] = data[1].second[j] ;
              }

            }

            console.log("找到同房號");
            console.log("room_start[i].second"+room_start[i].second);
            if ( room_start[i].second.toString() == "0,0,0,0,0,0,0" ) {
              // 第一次全部都回來了
              //進入預言家回合
              room_start[i] = data[1]; //更新資料

              room_start[i].round[1] = "夜晚出局回合";
              data[1] = room_start[i];
              settleOut(); //結算出局玩家
              //發送給所有client： 
              let data2 = JSON.stringify(data);
              let clients = wss.clients  //取得所有連接中的 client
              clients.forEach(client => {
                client.send(data2)  // 發送至每個 client
              })

              // 清空投票紀錄
              for ( let j = 0 ; j < data[1].player_state.length ; j++) {
                room_start[i].player_state[j].record = "" ;
                room_start[i].player_state[j].out = false ;
                room_start[i].player_state[j].vote = 0 ; // 清空
              }

              //檢查是否已結束比賽
              if ( isgameover() ) {
                room_start[i].round[1] = "結算";
              } else {
                //天黑，進入預言家回合
                //用於儲存目前回合狀態，{開局階段、抿牌階段、狼人回合、女巫回合、預言家回合、夜晚出局回合、發言回合、投票回合、白天出局回合、遊戲結束、結算回合}
                room_start[i].round[1] = "發言回合";
                speakList();
              }

              room_start[i].wait = true ;
              room_start[i].second = [5,5,5,5,5,5,5] ;
              first = true ;
              data[1] = room_start[i];
              console.log("room_start[i].player_state[0].record"+room_start[i].player_state[0].record);
              console.log("6666666666");
              //發送給所有client： 
              data2 = JSON.stringify(data);
              clients = wss.clients  //取得所有連接中的 client
              clients.forEach(client => {
                client.send(data2)  // 發送至每個 client
              })
            }
          }
        }
      } else if ( data[1].round[1] == "發言回合" ) {

        for ( let i = 0 ; i < room_start.length ; i++) { //找同房號
          if ( data[1].num == room_start[i].num ) { //找到同房號
            for ( let j = 0 ; j < data[1].player_state.length ; j++) {
              if ( data[1].second[j] == 0 ) {
                room_start[i].second[j] = data[1].second[j] ;
                room_start[i].player_state[j].vote = 0 ; // 清空
              }
            }

            console.log("找到同房號");
            console.log("room_start[i].second"+room_start[i].second);
            if ( room_start[i].second.toString() == "0,0,0,0,0,0,0" ) {
              // 全部都回來了
              //進入預言家回合
              if ( room_start[i].num_of_speaker == room_start[i].speaker.length-1) {
                // 最後一位發言完畢
                room_start[i].round[1] = "投票回合";
              }
              
              data[1].round[1] = room_start[i].round[1] ;
              room_start[i] = data[1]; //更新資料
              room_start[i].second = [10,10,10,10,10,10,10] ;
              data[1] = room_start[i];
              console.log("6666666666");
              console.log(room_start[i].round[1]);
              console.log(room_start[i].num_of_speaker);
              //發送給所有client： 
              let data2 = JSON.stringify(data);
              let clients = wss.clients  //取得所有連接中的 client
              clients.forEach(client => {
                client.send(data2)  // 發送至每個 client
              })

              first = true ;
            }
          }
        }
      } else if ( data[1].round[1] == "投票回合" ) {

        for ( let i = 0 ; i < room_start.length ; i++) { //找同房號
          if ( data[1].num == room_start[i].num ) { //找到同房號
            for ( let j = 0 ; j < data[1].player_state.length ; j++) {

              if ( data[1].second[j] == 0 ) {
                room_start[i].second[j] = data[1].second[j] ;
              }

              if ( data[1].player_state[j].vote > 0 ) {
                //將投票紀錄累計存起來
                room_start[i].player_state[j].vote += data[1].player_state[j].vote;
                room_start[i].player_state[j].record = data[1].player_state[j].record+ " " + room_start[i].player_state[j].record;
                console.log("room_start[i].player_state[j].vote"+room_start[i].player_state[j].vote);
                console.log("room_start[i].player_state[j].record"+room_start[i].player_state[j].record);
              }
              
            }
            console.log("找到同房號");
            console.log("room_start[i].second"+room_start[i].second);
            console.log("first"+first);
            
            if ( room_start[i].second.toString() == "0,0,0,0,0,0,0" && first ) {
              // 第一次全部都回來了
              //進入驗票投票結算
              first = false ;
              //=================================
              let vote_num = 0, out_index = -1, no_one_out = false ;
              for ( let k = 0 ; k < room_start[i].player_state.length ; k++) {
                if (  room_start[i].player_state[k].alive == true &&
                      room_start[i].player_state[k].vote > 0 &&
                      room_start[i].player_state[k].vote > vote_num ) {

                    vote_num = room_start[i].player_state[k].vote; //票數定為目前最高票
                    out_index = k ;
                    no_one_out = false ;
                } else if( room_start[i].player_state[k].alive == true &&
                            room_start[i].player_state[k].vote > 0 &&
                            room_start[i].player_state[k].vote == vote_num ) {

                    // 檢查是否平票
                    no_one_out = true ;
                }

                console.log("no_one_out"+no_one_out);
              }

              console.log("驗票"+room_start[i].round[1]);
              //驗票

              if ( no_one_out == false && out_index > -1 ) { // 有投票且票數集中
                console.log("out_index"+out_index);

                room_start[i].player_state[out_index].out = true ;
                room_start[i].round[1] = "白天回合結算"; // 再進到出局發言
                 
              } else { // 票數相同
                // 洗掉票數最低的玩家
                for ( let j = 0 ; j < room_start[i].player_state.length ; j++) {
                    if ( room_start[i].player_state[j].vote < vote_num ) {
                      room_start[i].player_state[j].vote = 0 ; //非最高票的玩家票數歸零
                    }
                    room_start[i].player_state[j].record = "" ;
                }
                console.log("票數相同再進發言回合");
                //票數相同者再發言投票
                room_start[i].round[1] = "發言回合";
                if ( vote_num == 0 ) { // 無人投票
                    isvoted = false ;
                } else { // 有人投票
                    isvoted = true ;
                }
                speakList();
              }
              //=================================

              room_start[i].isvoted = isvoted ;
              room_start[i].wait = true ;
              room_start[i].second = [5,5,5,5,5,5,5] ;
              data[1] = room_start[i] ; //更新資料
              first = true ;
              console.log("data[1].round[1]"+data[1].round[1]);
              console.log("room_start[i].player_state[0].record:"+room_start[i].player_state[0].record);
              // 發送給所有client： 
              let data2 = JSON.stringify(data);
              let clients = wss.clients  //取得所有連接中的 client
              clients.forEach(client => {
                client.send(data2)  // 發送至每個 client
              })
            }
          }
        }
      } else if ( data[1].round[1] == "白天回合結算" ) {
        for ( let i = 0 ; i < room_start.length ; i++) { //找同房號
          if ( data[1].num == room_start[i].num ) { //找到同房號
            for ( let j = 0 ; j < data[1].player_state.length ; j++) {

              if ( data[1].second[j] == 0 ) {
                room_start[i].second[j] = data[1].second[j] ;
                room_start[i].player_state[j].vote = 0 ;
                room_start[i].player_state[j].record = "" ;
              }
            }
            console.log("找到同房號");
            console.log("room_start[i].second"+room_start[i].second);
            console.log("白天出局回合");
            
            if ( room_start[i].second.toString() == "0,0,0,0,0,0,0" ) {
              // 第一次全部都回來了

              room_start[i].wait = true ;
              room_start[i].second = [5,5,5,5,5,5,5] ;
              data[1] = room_start[i] ; //更新資料
              first = true ;
              data[1].round[1] = "白天出局回合"
              console.log("data[1].round[1]"+data[1].round[1]);
              console.log("ddddddddddddddddd");
              //room_start[i].round[1] = "白天出局回合"; // 再進到出局發言
              settleOut() ;
              isvoted = false ;
              room_start[i].isvoted = isvoted ;

              //檢查是否已結束比賽
              if ( isgameover() ) {
                room_start[i].round[1] = "結算";
              }

              // 發送給所有client： 
              let data2 = JSON.stringify(data);
              let clients = wss.clients  //取得所有連接中的 client
              clients.forEach(client => {
                client.send(data2)  // 發送至每個 client
              })

            }
          }
        }
      } else if ( data[1].round[1] == "白天出局回合" ) {
        for ( let i = 0 ; i < room_start.length ; i++) { //找同房號
          if ( data[1].num == room_start[i].num ) { //找到同房號
            for ( let j = 0 ; j < data[1].player_state.length ; j++) {

              if ( data[1].second[j] == 0 ) {
                room_start[i].second[j] = data[1].second[j] ;
                room_start[i].player_state[j].vote = 0 ;
                room_start[i].player_state[j].record = "";
                room_start[i].player_state[j].out = false ;
              }
            }
            console.log("找到同房號");
            console.log("room_start[i].second"+room_start[i].second);
            console.log("出局發言結束");
            
            if ( room_start[i].second.toString() == "0,0,0,0,0,0,0" ) {
              // 第一次全部都回來了

              room_start[i].wait = true ;
              room_start[i].second = [10,10,10,10,10,10,10] ;
              room_start[i].round[0]++;

              data[1] = room_start[i] ; //更新資料
              first = true ;
              data[1].round[1] = "狼人回合";
              console.log("data[1].round[1]"+data[1].round[1]);
              //room_start[i].round[1] = "白天出局回合"; // 再進到出局發言
              
              // 發送給所有client： 
              let data2 = JSON.stringify(data);
              let clients = wss.clients  //取得所有連接中的 client
              clients.forEach(client => {
                client.send(data2)  // 發送至每個 client
              })

            }
          }
        }
      } else {
        console.log("what");
        console.log("data[1].round[1]"+data[1].round[1]);
      }
    }

    function isgameover(){
      //檢查是否已遊戲結束
      let good_group = 0 ;
      let werewolve_group = 0 ;
    
      for ( let i = 0 ; i < room_start.length; i++ ) {
    
        if ( data[1].num == room_start[i].num ) { // 找到同房間
          for ( let j = 0 ; j < room_start[i].player_state.length ; j++ ){
    
            if ( room_start[i].player_state[j].role == "狼人" ) {
                if( room_start[i].player_state[j].alive == true ) {
                    werewolve_group++ ;
                }
            } else {
                if( room_start[i].player_state[j].alive == true ) {
                    good_group++ ;
                }
            }
            console.log("room_start[i].player_state[j].role"+room_start[i].player_state[j].role);
          }
          console.log("good_group"+good_group);
          console.log("werewolve_group"+werewolve_group);
          if ( good_group == 0 ) {
            room_start[i].gameover = [true,"狼人獲勝"] ;
            return true ;
          } else if ( werewolve_group == 0 ) {
            room_start[i].gameover = [true,"好人獲勝"] ;
            return true ;
          } else {
            return false ;
          }
        }
      }
    }
    
    // =======================================================================
    function settleOut(){
      console.log("settleOut");
      //結算出局玩家，並判定死亡
      let no_one_out = true;
      let out_player = [];
      for (let i = 0 ; i < room_start.length ; i++) {
    
        if ( data[1].num == room_start[i].num ) { //找到同房號
          for ( let j = 0 ; j < data[1].player_state.length ; j++) {
    
            if ( room_start[i].player_state[j].out == true ) {
              console.log("out=true");
              // playerID[i].querySelector("div.player_img").classList.add("out");
              room_start[i].player_state[j].alive = false ; // 判定死亡
              // room_start[i].player_state[j].out = false ; // 重製出局
              out_player.push(j+1) ;
              no_one_out = false ;
            }
            room_start[i].player_state[j].vote = 0 ; // 重新歸零票數
          }
    
          if (room_start[i].round[1] == "夜晚出局回合") {
            for ( let j = 0 ; j < data[1].player_state.length ; j++ ) {
              room_start[i].player_state[j].record += `第${room_start[i].round[0]}夜出局的玩家為:<br>`; 
              if ( !no_one_out ) {
                for ( let k = 0 ; k < out_player.length ; k++) {
                  room_start[i].player_state[j].record += `玩家${out_player[k]} `
                }
                room_start[i].player_state[j].record += `<br>`
              } else {
                room_start[i].player_state[j].record += `無人出局<br>`
              }
            }
            console.log("room_start[i].player_state[0].record"+room_start[i].player_state[0].record);
          } else if (room_start[i].round[1] == "白天出局回合") {
            for ( let j = 0 ; j < data[1].player_state.length ; j++ ) {
              room_start[i].player_state[j].record += `第${room_start[i].round[0]}天出局的玩家為:<br>`;
              if ( !no_one_out ) {
                for ( let k = 0 ; k < out_player.length ; k++) {
                  room_start[i].player_state[j].record += `玩家${out_player[k]} `
                }
                room_start[i].player_state[j].record += `<br>`
              } else {
                room_start[i].player_state[j].record += `無人出局<br>`
              }
            }
            console.log("room_start[i].player_state[0].record"+room_start[i].player_state[0].record);
          }
        }
      }
    }

    function speakList(){ // 發言序列排列
      // 尚未投出出局玩家
      let begin_speaker = Math.ceil(Math.random() * 7)-1; //0~6

      for ( let i = 0 ; i < room_start.length ; i++ ) {
        if ( data[1].num == room_start[i].num ) { //找到同房號
          room_start[i].num_of_speaker = 0 ; //歸0
          room_start[i].speaker = [] ; //歸0

          for ( let j = 0 ; j < 7 ; j++) {
            // 第一次進入發言，將尚未死亡的玩家存入發言名單中
            // 已發言過但投票數為0也再重新排列發言序列
            if ( room_start[i].player_state[begin_speaker].alive == true && isvoted == false ) {
              room_start[i].speaker.push(begin_speaker)  ;

            } else if ( isvoted == true && room_start[i].player_state[begin_speaker].vote > 0) {
              // 已投過但尚未選出玩家，將有票數的玩家存入發言名單中
              room_start[i].speaker.push(begin_speaker)  ;
            }
            begin_speaker++ ;
            if ( begin_speaker == 7 ) {
              begin_speaker = 0 ;
            }
          }
        }
      }
    }
    // =======================================================================

  })


  // 當連線關閉
  ws.on('close', () => {
    console.log('Close connected')
  })
})


    

    
