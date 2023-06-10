//import express 和 ws 套件
const express = require("express");
const SocketServer = require("ws").Server;
const PORT = 3000; //指定 port

//創建 express 物件，綁定監聽  port , 設定開啟後在 console 中提示
const server = express().listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

//將 express 交給 SocketServer 開啟 WebSocket 的服務
const wss = new SocketServer({ server });
let deleteInterval, time, allTime;
let answer = [
  "狗",
  "丸子",
  "貓",
  "排球",
  "馬",
  "牛",
  "炸蝦",
  "籃球",
  "酒",
  "電腦",
  "冰塊",
  "滑鼠",
  "外套",
  "水壺",
  "薯條",
  "小熊維尼",
  "颱風",
  "便當",
  "巧克力",
  "保齡球",
  "撞球",
  "釣竿",
  "漁網",
  "鬧鐘",
  "帳篷",
  "鍋鏟",
  "老鼠",
  "龍",
  "羊",
  "猴子",
  "呼拉圈",
  "百香果",
  "奶嘴",
  "洗髮精",
  "地圖",
  "蚊子",
  "鞋櫃",
  "火鍋",
  "消防栓",
];
let id = 1;
let wsArr = [];
let nickname = [];
let idToNickname = [];
let roomState = [];
roomState["member"] = []; //[房名][userID、暱稱、分數、是否畫過]
roomState["startState"] = []; //房間是否開始遊戲
roomState["endGame"] = [];
roomState["whoseTurn"] = []; //輪到誰了
roomState["answer"] = []; //房間答案
roomState["allAnswer"] = [];
roomState["score"] = []; //答對時可獲得的分數
roomState["scored"] = []; //是否已經計分
roomState["time"] = []; //[時間上限, 剩餘時間, 時間函式]

//---------------------function合輯------------------------------
let sendMsg = (roomName, msg) => {
  for (let i = 0; i < roomState["member"][roomName]?.length; i++) {
    wsArr[roomState["member"][roomName][i][0]].send(msg);
  }
};
let startGame = (roomName) => {
  roomState["startState"][roomName] = "watching";
  roomState["allAnswer"][roomName] = answer.slice();
  roomState["allAnswer"][roomName].sort(() => Math.random() - 0.5);
  roomState["answer"][roomName] = roomState["allAnswer"][roomName].pop();
  roomState["member"][roomName].sort(() => Math.random() - 0.5);
  roomState["score"][roomName] = roomState["member"][roomName].length;
  roomState["time"][roomName] = [];
};
let nextStage = (roomName) => {
  switch (roomState["startState"][roomName]) {
    case "watching":
      roomState["score"][roomName] = roomState["member"][roomName].length;
      roomState["scored"][roomName] = [];
      roomState["startState"][roomName] = "drawing";

      sendMsg(
        roomName,
        JSON.stringify([
          idToNickname[roomState["whoseTurn"][roomName]] + "畫畫中",
          "gameState",
        ])
      );
      // allTime = 6000;
      roomState["time"][roomName][0] = 45000;
      resetTimer(roomName);
      break;
    case "drawing":
      roomState["startState"][roomName] = "showAnswer";
      sendMsg(roomName, JSON.stringify(["", "cleanAnswer"]));
      sendMsg(
        roomName,
        JSON.stringify([
          "答案是：" + roomState["answer"][roomName],
          "gameState",
        ])
      );
      roomState["answer"][roomName] = "";
      roomState["time"][roomName][0] = 5000;
      resetTimer(roomName);
      break;
    case "showAnswer":
      if (roomState["endGame"][roomName]) {
        roomState["endGame"][roomName] = false;
        sendMsg(
          roomName,
          JSON.stringify([
            roomState["member"][roomName][0],
            "countPoint",
            roomState["member"][roomName][1],
            roomState["member"][roomName][2],
          ])
        );
        roomState["startState"][roomName] = false;
      } else {
        roomState["startState"][roomName] = "watching";
        watchAnswer(roomName);
      }
      // allTime = 3000;
      // resetTimer(roomName);
      break;
  }
};

let endGame = (roomName, reason) => {
  roomState["startState"][roomName] = false;
  for (let i = 0; i < roomState["member"][roomName].length; i++) {
    roomState["member"][roomName][i][2] = 0;
  }
  sendMsg(roomName, JSON.stringify([reason, "endGame"]));
};
// roomState["time"] = [] //[時間上限, 剩餘時間, 時間函式]
let resetTimer = (roomName) => {
  roomState["time"][roomName][1] = roomState["time"][roomName][0];
  // time = allTime;
  if (roomState["time"][roomName][2])
    clearInterval(roomState["time"][roomName][2]);
  roomState["time"][roomName][2] = setInterval(() => {
    roomState["time"][roomName][1] -= 50;
    sendMsg(
      roomName,
      JSON.stringify([
        roomState["time"][roomName][1],
        "time",
        (roomState["time"][roomName][1] * 100) / roomState["time"][roomName][0],
      ])
    );
    if (roomState["time"][roomName][1] <= 0) {
      nextStage(roomName);
      return;
    }
  }, 50);
};

let watchAnswer = (roomName) => {
  let allIsDrawed = true;
  console.log(roomState["member"][roomName]);
  for (let i = 0; i < roomState["member"][roomName].length; i++) {
    if (roomState["member"][roomName][i][3] === false) {
      roomState["whoseTurn"][roomName] = roomState["member"][roomName][i][0];
      roomState["member"][roomName][i][3] = true;
      allIsDrawed = false;
      break;
    }
  }
  if (allIsDrawed) {
    roomState["whoseTurn"][roomName] = roomState["member"][roomName][0][0];
    for (let i = 1; i < roomState["member"][roomName].length; i++) {
      roomState["member"][roomName][i][3] = false;
    }
  }
  // allTime = 3000;
  roomState["time"][roomName][0] = 3000;
  resetTimer(roomName);
  sendMsg(
    roomName,
    JSON.stringify([
      idToNickname[roomState["whoseTurn"][roomName]] + "觀看題目中",
      "gameState",
    ])
  );
  if (!roomState["allAnswer"][roomName].length) {
    roomState["allAnswer"][roomName] = answer.slice();
    roomState["allAnswer"][roomName].sort(() => Math.random() - 0.5);
  }
  roomState["answer"][roomName] = roomState["allAnswer"][roomName].pop();

  answer[Math.floor(Math.random() * answer.length)];
  sendMsg(roomName, JSON.stringify(["", "newQuestion"]));
  sendMsg(roomName, JSON.stringify(["", "cleanCanvas"]));
  for (let i = 0; i < roomState["member"][roomName].length; i++) {
    if (
      roomState["member"][roomName][i][0] === roomState["whoseTurn"][roomName]
    ) {
      wsArr[roomState["whoseTurn"][roomName]].send(
        JSON.stringify([roomState["answer"][roomName], "watchAnswer"])
      );
    }
  }
};

//---------------------------------------------------------------

//當有 client 連線成功時
wss.on("connection", (ws) => {
  console.log("Client connected");
  ws.send(JSON.stringify([id, "ID"]));
  wsArr[id] = ws;
  id++;
  //let clients = wss.clients; //取得所有連接中的 client
  // 當收到client消息時
  ws.on("message", (data) => {
    // 收回來是 Buffer 格式、需轉成字串
    let newData = JSON.parse(data);
    /// 發送消息給client

    /*
    roomState["member"] = []; //[房名][userID、暱稱、分數、是否畫過]
    roomState["startState"] = []; //房間是否開始遊戲
    roomState["whoseTurn"] = []; //輪到誰了
    roomState["answer"] = []; //房間答案
    roomState["score"] = []; //答對時可獲得的分數
    roomState["scored"] = []; //是否已經計分
    */
    switch (newData[1]) {
      case "text": //newData[訊息內容, "text", 玩家ID, 房間名稱]
        if (
          roomState["startState"][newData[3]] &&
          newData[0] === roomState["answer"][newData[3]]
        ) {
          roomState["time"][newData[3]][1] -=
            roomState["time"][newData[3]][0] /
            roomState["member"][newData[3]].length;
          for (let i = 0; i < roomState["member"][newData[3]].length; i++) {
            if (roomState["member"][newData[3]][i][0] === newData[2]) {
              roomState["member"][newData[3]][i][2] +=
                roomState["score"][newData[3]];
              if (roomState["member"][newData[3]][i][2] > 7) {
                roomState["endGame"][newData[3]] = true;
              }

              roomState["score"][newData[3]]--;
            }
            if (
              roomState["member"][newData[3]][i][0] ===
              roomState["whoseTurn"][newData[3]]
            ) {
              roomState["member"][newData[3]][i][2] += 2;
            }
            sendMsg(
              newData[3],
              JSON.stringify([roomState["member"][newData[3]], "roomMember"])
            );
          }
          sendMsg(
            newData[3],
            JSON.stringify([
              "[" +
                newData[3] +
                "] " +
                idToNickname[newData[2]] +
                " 猜到了答案！",
              "text",
              newData[2],
              newData[3],
            ])
          );
          wsArr[newData[2]].send(JSON.stringify(["", "correct"]));
        } else {
          sendMsg(
            newData[3],
            JSON.stringify([
              "[" +
                newData[3] +
                "] " +
                idToNickname[newData[2]] +
                ": " +
                newData[0],
              "text",
              newData[3],
            ])
          );
        }
        break;
      // case "resetTime": //newData[房間名稱, "resetTime"]
      //   // allTime = 10000;
      //   roomState["time"][newData[0]][0] = 10000;
      //   resetTimer(newData[0]);
      //   break;
      case "drawLine": //newData[[畫線資料], "drawLine", roomName, ID]
        if (
          !roomState["startState"][newData[2]] ||
          roomState["whoseTurn"][newData[2]] === newData[3]
        )
          sendMsg(newData[2], JSON.stringify([newData[0], "drawLine"]));
        break;
      case "nickname": //newData[暱稱, "nickname", 玩家id]
        if (nickname[newData[0]]) {
          ws.send(JSON.stringify([false, "setNickname"]));
        } else {
          idToNickname[newData[2]] = newData[0];
          nickname[newData[0]] = true;
          ws.send(JSON.stringify([true, "setNickname", newData[0]]));
        }
        break;
      case "enterRoom": //newData[房間名稱, "enterRoom", 玩家ID]
        if (!roomState["member"][newData[0]]) {
          roomState["member"][newData[0]] = [
            [newData[2], idToNickname[newData[2]], 0, false],
          ];
        } else {
          roomState["member"][newData[0]].push([
            newData[2],
            idToNickname[newData[2]],
            0,
            false,
          ]);
        }
        sendMsg(
          newData[0],
          JSON.stringify([roomState["member"][newData[0]], "roomMember"])
        );
        sendMsg(
          newData[0],
          JSON.stringify([
            "[系統訊息] " +
              idToNickname[newData[2]] +
              " 進入了 [" +
              newData[0] +
              "]",
            "text",
          ])
        );
        if (!roomState["startState"][newData[0]]) {
          if (newData[0] != "大廳")
            wsArr[roomState["member"][newData[0]][0][0]].send(
              JSON.stringify(["", "roomLeader"])
            );
        } else {
          ws.send(JSON.stringify(["", "gameStart"]));
        }
        // ws.send(JSON.stringify([roomState["member"][newData[0]], "roomState["member"]"]));
        break;
      case "leaveRoom": //newData[房間名稱, "leaveRoom", 玩家ID]
        console.log(roomState["member"][newData[0]]);
        for (let i = 0; i < roomState["member"][newData[0]]?.length; i++) {
          if (roomState["member"][newData[0]][i][0] == newData[2]) {
            roomState["member"][newData[0]].splice(i, 1);
            break;
          }
        }
        sendMsg(
          newData[0],
          JSON.stringify([roomState["member"][newData[0]], "roomMember"])
        );
        if (
          roomState["startState"][newData[0]] &&
          roomState["member"][newData[0]].length < 1
        ) {
          endGame(newData[0], "playerNotEnough");
          roomState["startState"][newData[0]] = "";
        }
        if (!roomState["startState"][newData[0]] && newData[0] != "大廳") {
          if (roomState["member"][newData[0]][0]) {
            wsArr[roomState["member"][newData[0]][0][0]].send(
              JSON.stringify(["", "roomLeader"])
            );
          }
        }
        break;
      case "startGame": // newData[房間名稱, "startGame"]
        //最少開始人數調整
        if (roomState["member"][newData[0]].length < 1) {
          ws.send(JSON.stringify(["playerLessThan5", "cannotStart"]));
        } else {
          sendMsg(newData[0], JSON.stringify(["", "gameStart"]));
          startGame(newData[0]);
          watchAnswer(newData[0]);
        }
        break;
      case "cleanCanvas": // newData[房間名稱, cleanCanvas, id]
        if (
          !roomState["startState"][newData[0]] ||
          roomState["whoseTurn"][newData[0]] === newData[2]
        )
          sendMsg(newData[0], JSON.stringify(["", "cleanCanvas"]));
        break;
    }
  });

  // resetTimer();
  //當連線關閉;
  ws.on("close", () => {
    console.log("Close connected");
  });
});
