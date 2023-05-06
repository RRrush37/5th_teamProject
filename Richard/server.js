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
let deleteInterval;
let answer = ["車子", "鴕鳥", "火柴"];
let nowAnswer = answer[Math.floor(Math.random() * 3)];
let id = 1;
let idArr = [];
//當有 client 連線成功時
wss.on("connection", (ws) => {
  console.log("Client connected");
  ws.send(JSON.stringify([id, "ID"]));
  id++;
  // 當收到client消息時
  ws.on("message", (data) => {
    // 收回來是 Buffer 格式、需轉成字串
    let newData = JSON.parse(data);

    /// 發送消息給client
    //ws.send(data);

    /// 發送給所有client：
    if (newData[1] === "text") {
      let clients = wss.clients; //取得所有連接中的 client
      if (newData[0] === nowAnswer) {
        clients.forEach((client) => {
          client.send(
            JSON.stringify([newData[2] + "猜到了答案！", "text", newData[2]])
          ); // 發送至每個 client
        });
      } else {
        clients.forEach((client) => {
          client.send(JSON.stringify([newData[2] + ":" + newData[0], "text"])); // 發送至每個 client
        });
      }
    } else if (newData[1] === "resetTime") {
      time = 10000;
      clearInterval(deleteInterval);
      deleteInterval = setInterval(() => {
        if (time == 0) {
          clearInterval(deleteInterval);
          return;
        }
        time -= 10;
        let clients = wss.clients;
        clients.forEach((client) => {
          client.send(JSON.stringify([time, "time"])); // 發送至每個 client
        });
      }, 10);
    }
  });
  let time = 10000;
  if (deleteInterval) clearInterval(deleteInterval);
  deleteInterval = setInterval(() => {
    if (time == 0) {
      clearInterval(deleteInterval);
      return;
    }
    time -= 10;
    let clients = wss.clients;
    clients.forEach((client) => {
      client.send(JSON.stringify([time, "time"])); // 發送至每個 client
    });
  }, 10);
  //當連線關閉;
  ws.on("close", () => {
    console.log("Close connected");
  });
});
