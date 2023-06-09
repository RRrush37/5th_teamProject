<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/global.css">
    <link rel="stylesheet" href="./css/wolf/wolf_room.css">
    <title>Wolf Room</title>

</head>

<body>
    <?php require("common.php"); ?>
    <div class="activity_title">
        <svg width="40" height="40" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <a href="wolf_list.html">
                <g filter="url(#filter0_dd_668_6)">
                    <path d="M9 37.5L34.2778 5V23.018L74 23.0556V51.9444H34.2778V70L9 37.5Z" fill="#606C99" stroke="#606C99" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <filter id="filter0_dd_668_6" x="0" y="0" width="83" height="83" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_668_6" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="effect1_dropShadow_668_6" result="effect2_dropShadow_668_6" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_668_6" result="shape" />
                    </filter>
                </defs>
            </a>
        </svg>

        <h1>狼人殺</h1>
    </div>
    <div class="wrapper">
        <section class="room">
            <p class="room_num" data-num="1234">房號:</p>
            <p class="room_password" data-password="5678">密碼:</p>

            <!-- 遊戲狀態 -->
            <div id="game_state_box">
                <h2 id="game_state">等待開局</h2>
            </div>

            <!-- 玩家狀態 -->
            <div id="player">
                <div class="left_player">
                    <div id="player1" data-index="1" class="seat haveplayer">
                        <div class="vote_box none">Vote:<br></div>
                        <div class="player_img">
                            <img src="../../img/wolf/little_red.jpg" alt="">
                            <div class="name">Apple</div>
                        </div>
                        <div class="player_state_box">
                            <div class="player_name" data-name="玩家1">
                                玩家1
                            </div>
                            <div class="player_state" data-ready="已準備" data-prepare="準備中" data-out="已出局">
                                準備中
                            </div>
                            <button class="v_btn none">Vote</button>
                        </div>
                    </div>
                    <div id="player2" data-index="2" class="seat haveplayer">
                        <div class="vote_box none">Vote:<br></div>
                        <div class="player_img">
                            <img src="../../img/wolf/little_red.jpg" alt="">
                            <div class="name">Banana</div>
                        </div>
                        <div class="player_state_box">
                            <div class="player_name" data-name="玩家2">
                                玩家2
                            </div>
                            <div class="player_state " data-ready="已準備" data-prepare="準備中" data-out="已出局">
                                準備中
                            </div>
                            <button class="v_btn none">Vote</button>
                        </div>
                    </div>
                    <div id="player3" data-index="3" class="seat haveplayer">
                        <div class="vote_box none">Vote:<br></div>
                        <div class="player_img">
                            <img src="../../img/wolf/little_red.jpg" alt="">
                            <div class="name">Cindy</div>
                        </div>
                        <div class="player_state_box">
                            <div class="player_name" data-name="玩家3">
                                玩家3
                            </div>
                            <div class="player_state " data-ready="已準備" data-prepare="準備中" data-out="已出局">
                                準備中
                            </div>
                            <button class="v_btn none">Vote</button>
                        </div>
                    </div>
                    <div id="player4" data-index="4" class="seat haveplayer">
                        <div class="vote_box none">Vote:<br></div>
                        <div class="player_img">
                            <img src="../../img/wolf/little_red.jpg" alt="">
                            <div class="name">Dan</div>
                        </div>
                        <div class="player_state_box">
                            <div class="player_name" data-name="玩家4">
                                玩家4
                            </div>
                            <div class="player_state " data-ready="已準備" data-prepare="準備中" data-out="已出局">
                                準備中
                            </div>
                            <button class="v_btn none">Vote</button>
                        </div>
                    </div>
                </div>

                <div class="right_player">
                    <div id="player5" data-index="5" class="seat haveplayer">
                        <div class="player_state_box">
                            <div class="player_name" data-name="玩家5">
                                玩家5
                            </div>
                            <div class="player_state " data-ready="已準備" data-prepare="準備中" data-out="已出局">
                                準備中
                            </div>
                            <button class="v_btn none">Vote</button>
                        </div>
                        <div class="player_img">
                            <img src="../../img/wolf/little_red.jpg" alt="">
                            <div class="name">Ellen</div>
                        </div>
                        <div class="vote_box none">Vote:<br></div>
                    </div>
                    <div id="player6" data-index="6" class="seat haveplayer">
                        <div class="player_state_box">
                            <div class="player_name" data-name="玩家6">
                                玩家6
                            </div>
                            <div class="player_state " data-ready="已準備" data-prepare="準備中" data-out="已出局">
                                準備中
                            </div>
                            <button class="v_btn none">Vote</button>
                        </div>
                        <div class="player_img">
                            <img src="../../img/wolf/little_red.jpg" alt="">
                            <div class="name">Fiona</div>
                        </div>
                        <div class="vote_box none">Vote:<br></div>
                    </div>
                    <div id="player7" data-index="7" class="seat haveplayer">
                        <div class="player_state_box">
                            <div class="player_name" data-name="玩家7">
                                玩家7
                            </div>
                            <div class="player_state " data-ready="已準備" data-prepare="準備中" data-out="已出局">
                                準備中
                            </div>
                            <button class="v_btn none">Vote</button>
                        </div>
                        <div class="player_img">
                            <img src="../../img/wolf/little_red.jpg" alt="">
                            <div class="name">George</div>
                        </div>
                        <div class="vote_box none">Vote:<br></div>
                    </div>
                    <div id="player8" data-index="8" class="seat">
                        <div class="player_state_box">
                            <div class="player_name" data-name="玩家8">
                                玩家8
                            </div>
                            <div class="player_state none" data-ready="已準備" data-prepare="準備中" data-out="已出局">

                            </div>
                            <button class="v_btn none">Vote</button>
                        </div>
                        <div class="player_img out">
                            <img src="" alt="">
                            <div class="name">Hawk</div>
                        </div>
                        <div class="vote_box none"></div>
                    </div>

                </div>
            </div>

            <!-- 遊戲資訊、倒計時及選擇按鈕 -->
            <div id="center_box">

                <div id="time_box" class="none">
                    <h2>倒數計時:</h2>
                    <div id="time"></div>
                </div>

                <div id="ready_box">
                    <p>此局遊戲角色設定<br>
                        狼人*2<br>
                        村民*3<br>
                        預言家<br>
                        女巫<br></p>
                    <div class="btn_box">
                        <button id="ready" class="confirm" data-ready="準備" data-cancel="取消準備">準備</button>
                        <button id="start" class="confirm">GO</button>
                    </div>
                </div>

                <div id="text" class="none" data-dark="天黑請閉眼" data-vote="請選擇要投票的對象" data-speak="請{{player_seat}}發言" data-out="{{player_seat}}出局">天黑請閉眼</div>

                <div id="seer_box" class="none">
                    <div id="seer_text" data-see="請選擇想查看的玩家" data-rule="">請選擇想查看的玩家</div>
                    <div class="btn_box">
                        <button id="seer_btn" class="confirm">確定</button>
                    </div>
                </div>

                <div id="werewolve_box" class="none">
                    <div id="werewolve_text" data-kill="請選擇<br>要排除的對象" data-rule="">請選擇<br>要排除的對象</div>
                    <div class="btn_box">
                        <button id="kill" class="confirm">確定</button>
                    </div>
                </div>

                <div id="witch_box" class="none">
                    <div id="witch_text" data-poison="請選擇投毒對象" data-death="昨晚死亡的玩家為 {{player_seat}}" data-antidote="是否要給予解藥?"></div>
                    <div class="btn_box">
                        <button id="no" class="confirm">NO</button>
                        <button id="yes" class="confirm">YES</button>
                        <button id="poison" class="confirm">確認</button>
                    </div>
                </div>

            </div>
            <!-- 遊戲說明按鈕 -->
            <div id="record_btn"></div>
            <div id="game_instruction"></div>

            <!-- 卡片 -->
            <div id="not_ready_box" class="none">
                <div class="not_ready">尚有玩家準備中</div>
            </div>
            <div class="card_box none">
                <div>
                    <div class="close"></div>
                    <article class="card">
                        <div id="card_back"></div>

                        <div id="game_rule" class="none">
                            <h3>規則相當簡單，玩家被隨機平均分派到好人陣營或者狼人陣營，遊戲共分為晚上和早上兩部分，晚上就是狼人殺人的時間，而早上則是所有玩家輪流發言的機會。 遊戲中，狼人在晚上開眼時，可以知道自己同伴有誰，再一起投票將誰殺掉；相反，好人陣營只能透過早上的輪流發言機會，猜測推斷誰是好人或狼人，入夜前進行投票，說服大家殺掉狼人。</h3>
                            <button class="rule_btn none">身分</button>
                        </div>

                        <div id="game_box" class="none">
                            <h3 id="game_record">
                                遊戲紀錄...
                            </h3>
                        </div>

                        <div id="werewolve_card" class="none">
                            <button class="rule_btn">規則</button>
                        </div>
                        <div id="villager_card" class="none">
                            <button class="rule_btn">規則</button>
                        </div>
                        <div id="witch_card" class="none">
                            <button class="rule_btn">規則</button>
                        </div>
                        <div id="seer_card" class="none">
                            <button class="rule_btn">規則</button>
                        </div>

                    </article>
                </div>
            </div>

        </section>

        <section class="gameover none">
            <div id="winner_box" data-winScore="智力+5">
                <h2>勝利玩家</h2>

            </div>

            <div id="loser_box" data-loseScore="智力-1">
                <h2>失敗玩家</h2>

            </div>
        </section>

        <div class="bottom_nav">
            <p>
                <span>
                    關於我們
                </span>
                <span>
                    使用常規
                </span>
                <span>
                    常見問題
                </span>
            </p>
        </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/75e9abcec6.js" crossorigin="anonymous"></script>

    <script>
        //結算面板
        let settle_game_el = document.getElementsByClassName("gameover")[0];
        let winner_box = document.getElementById("winner_box");
        let loser_box = document.getElementById("loser_box");
        //遊戲區面板
        let room_el = document.getElementsByClassName("room")[0];

        //陣列設計
        let player_index = -1; //用來儲存目前玩家的座位
        let idArr = []; //儲存目前已進入玩家的ID
        let isvoted = false;
        let game_role = ["預言家", "女巫", "狼人", "狼人", "平民", "平民", "平民"]; //用於初始化遊戲身份
        let viewed = []; //預言家陣列: 存放已查看過玩家，並標示該玩家陣營= [{"player_index": -1, "group":""}]
        let witchArr = {
            "saved": -1,
            "poisoned": -1
        };
        // 女巫陣列:saved(playerid):用來存放救過誰，poisoned(playerid):用來存放毒過誰
        let killed = []; //狼人陣列:存放狼人階段殺誰
        //let player_role ;//用於儲存玩家身份
        // let player_role = [ "狼人","女巫","預言家","狼人","平民","平民","平民"] ;

        let round = [1, "開局前階段"]; //用於儲存目前回合狀態，{開局階段、狼人回合、女巫回合、預言家回合、夜晚出局回合、發言回合、投票回合、白天出局回合、遊戲結束、結算回合}
        let gameover = [false, "好人獲勝"]; //用於查看遊戲是否結束
        let speakerPlayer = Math.ceil(Math.random() * 7); //用於儲存目前發言玩家，隨機抽出第一位玩家
        let player_state_el = document.getElementsByClassName("player_state"); // 用於儲存所有玩家的準備狀態
        //console.log("speakerPlayer:" + speakerPlayer);

        // "index": 同座位> 可作為發言順序判定
        // "id": 用來存入玩家會員id> 以變結算後更新會員資訊
        // "role": 角色身份> 用來作為每階段判斷執行動作用
        // "alive": 是否出局> 用來判斷是否需要做動作，並判斷陣營存活人數
        // "vote": 投票對象> 用於存放玩家投給誰並顯示於畫面上
        // "out": 此階段出局> 依照白天階段或天黑階段不同出局狀況影響可否發言
        // "record(html)": 用來存放遊戲紀錄> 將每次過程存入已顯示於畫面上
        let player_state = [{
            "id": 1,
            "role": "",
            "alive": true,
            "vote": 0,
            "out": false,
            "record": ``
        }, {
            "id": 2,
            "role": "",
            "alive": true,
            "vote": 0,
            "out": false,
            "record": ``
        }, {
            "id": 3,
            "role": "",
            "alive": true,
            "vote": 0,
            "out": false,
            "record": ``
        }, {
            "id": 4,
            "role": "",
            "alive": true,
            "vote": 0,
            "out": false,
            "record": ``
        }, {
            "id": 5,
            "role": "",
            "alive": true,
            "vote": 0,
            "out": false,
            "record": ``
        }, {
            "id": 6,
            "role": "",
            "alive": true,
            "vote": 0,
            "out": false,
            "record": ``
        }, {
            "id": 7,
            "role": "",
            "alive": true,
            "vote": 0,
            "out": false,
            "record": ``
        }]; //用於儲存遊戲中玩家資訊


        // 遊戲中的物件
        let game_instruction = document.getElementById("game_instruction"); // 遊戲規則說明按鈕
        let record_btn = document.getElementById("record_btn"); // 遊戲紀錄按鈕
        let game_start_btn = document.getElementById("start"); //遊戲開始按鈕
        let game_ready_btn = document.getElementById("ready"); //遊戲準備按鈕
        let vote_btn = document.getElementsByClassName("v_btn"); //用於儲存投票區按鈕
        let vote_box_el = document.getElementsByClassName("vote_box"); //用於儲存投票區玩家投票面板
        let ready_box_el = document.getElementById("ready_box"); //準備期間顯示面板
        let not_ready_box = document.getElementById("not_ready_box"); //用於儲存準備中背板
        let not_ready = document.getElementsByClassName("not_ready")[0]; //用於儲存準備中面板
        let text_el = document.getElementById("text"); // 用於儲存中間顯示文字

        let werewolve_box_el = document.getElementById("werewolve_box"); // 用於儲存狼人面板
        let kill_btn = document.getElementById("kill"); // 用於儲存狼人殺人確認按鈕

        let witch_box_el = document.getElementById("witch_box"); // 用於儲存女巫面板
        let witch_text = document.getElementById("witch_text"); // 用於儲存女巫面板文字
        let witch_no_btn = document.getElementById("no"); // 用於儲存女巫面板救人按鈕
        let witch_yes_btn = document.getElementById("yes"); // 用於儲存女巫面板救人按鈕
        let witch_poison_btn = document.getElementById("poison"); // 用於儲存女巫面板下毒按鈕

        let seer_box_el = document.getElementById("seer_box"); // 用於儲存預言家面板
        let seer_text_el = document.getElementById("seer_text"); // 用於儲存預言家面板文字
        let seer_btn = document.getElementById("seer_btn"); // 用於儲存預言家確認按鈕

        //燈箱物件
        let card_box = document.getElementsByClassName("card_box")[0];
        let close_el = document.getElementsByClassName("close")[0];

        //各類燈箱卡片
        let game_rule = document.getElementById("game_rule");
        let werewolve_card = document.getElementById("werewolve_card");
        let villager_card = document.getElementById("villager_card");
        let witch_card = document.getElementById("witch_card");
        let seer_card = document.getElementById("seer_card");
        let rule_btn_el = document.getElementsByClassName("rule_btn");
        let game_box = document.getElementById("game_box");
        let game_record = document.getElementById("game_record");

        //儲存玩家ID
        let playerID = document.getElementsByClassName("seat");
        for (let i = 0; i < player_state.length; i++) {
            idArr.push(playerID[i].id);
            player_state[i].id = playerID[i].id;
        }

        let text = [""]; // 用來儲存送出伺服器的資料
        let room_num = document.getElementsByClassName("room_num")[0]; //房間號碼
        let room_password = document.getElementsByClassName("room_password")[0]; //房間密碼
        let room_imformation = { // 用來儲存遊戲開始前的資訊
            "num": room_num.getAttribute("data-num"), // 用於讓伺服器知道房間號碼
            "player": 0, // 用於讓伺服器知道房間人數
            "ready": [0, 0, 0, 0, 0, 0, 0], // 用於讓伺服器知道玩家準備狀態
            "id": ["", "", "", "", "", "", ""] // 用於讓伺服器知道玩家準備狀態
        }

        let room_start = { // 用來儲存遊戲開始後的資訊
            "num": room_num.getAttribute("data-num"), // 用於讓伺服器知道房間號碼
            "wait": false, // 用來告訴等待倒計時中的伺服器已結束倒計時
            "second": [0, 0, 0, 0, 0, 0, 0], // 用於讓伺服器知道現在跑到第幾秒鐘
            "round": round, // 用於讓伺服器知道目前的階段
            "player_state": player_state, // 用於讓伺服器知道玩家狀態
        }

        //倒計時
        let time_box_el = document.getElementById("time_box");
        let time_el = document.getElementById("time");
        time_box_el.classList.add("none");

        room_num.innerHTML += room_num.getAttribute("data-num");
        room_password.innerHTML += room_password.getAttribute("data-password");


        // =====================================================================================
        //連線

        document.addEventListener("DOMContentLoaded", event => {

            // 建立 WebSocket (本例 server 端於本地運行)
            let url = 'ws://localhost:3000'
            var ws = new WebSocket(url)
            //============================================= 監聽連線狀態
            ws.onopen = () => {
                console.log('open connection')
                text[0] = "connect";
                text[1] = room_imformation;
                console.log(room_imformation);
                let data = jsON.stringify(text);
                ws.send(data);
            }
            //============================================= 監聽離線狀態
            ws.onclose = () => {
                console.log('close connection');
            }

            //--------------------------------------------- 遊戲準備按鈕監聽
            game_ready_btn.addEventListener("click", function() {
                console.log("player_index" + player_index);
                console.log("player_state_el[player_index].classList" + player_state_el[player_index].classList);

                if (player_state_el[player_index].classList.contains("ready")) { // 已準備-取消準備
                    player_state_el[player_index].classList.remove("ready");
                    player_state_el[player_index].innerHTML = player_state_el[player_index].getAttribute("data-prepare");
                    ready.classList.remove("ready");
                    ready.innerHTML = ready.getAttribute("data-ready");
                    text[1].ready[player_index] = 0;
                } else { // 未準備-按下準備
                    player_state_el[player_index].classList.add("ready");
                    player_state_el[player_index].innerHTML = player_state_el[player_index].getAttribute("data-ready");
                    ready.classList.add("ready");
                    ready.innerHTML = ready.getAttribute("data-cancel");
                    text[1].ready[player_index] = 1;
                }

                text[0] = "ready";

                let data = jsON.stringify(text);
                ws.send(data);
            })

            //--------------------------------------------- 開始遊戲監聽
            game_start_btn.addEventListener("click", function(e) {
                e.stopPropagation()
                let all_ready = true;
                for (let i = 0; i < player_state.length; i++) { // 檢查是否都已準備
                    if (!player_state_el[i].classList.contains("ready")) {
                        not_ready_box.classList.remove("none");
                        all_ready = false;
                        break;
                    }

                    console.log("player_state_el[i].classList" + player_state_el[i].classList);
                }
                console.log("all_ready" + all_ready);
                if (all_ready) {
                    text[0] = "prepare";

                    //只有房主排亂數
                    player_role = game_role;
                    player_role.sort(() => Math.random() - 0.5); // 亂數排列陣列元素

                    console.log("text[1].id[1]" + text[1].id[1]);
                    // 腳色牌洗牌，並更新到玩家資訊上
                    for (let i = 0; i < player_state.length; i++) {
                        player_state[i].id = text[1].id[i];
                        player_state[i].role = player_role[i];
                        room_start.player_state[i].role = player_state[i].role;
                    }

                    room_start.num = room_imformation.num;
                    room_start.round = round;
                    text[1] = room_start; // room_start更新了玩家資訊並傳給所有使用者
                    console.log("text[1].round" + text[1].round);
                    let data = jsON.stringify(text);
                    ws.send(data);

                }
            })


            //============================================= 接收 Server 發送的訊息
            ws.onmessage = event => {

                text = jsON.parse(event.data);

                if (text[0] == "connect") {

                    if (player_index == -1) { //更新本次連線自己的資料
                        player_index = text[1].player - 1;
                        console.log("connect" + text[1].player);
                        console.log("connect" + player_index);
                        room_imformation = text[1];
                        for (let i = 0; i < 7; i++) {
                            if (text[1].ready[i] == 0) {
                                player_state_el[i].classList.remove("ready");
                            } else {
                                player_state_el[i].classList.add("ready");
                            }
                        }
                    } else { //更新其他連線資料
                        room_imformation = text[1];
                    }

                    console.log("connect text[1].ready" + text[1].ready);

                } else if (text[0] == "ready") {

                    for (let i = 0; i < 7; i++) {
                        if (text[1].ready[i] == 0) {
                            player_state_el[i].classList.remove("ready");
                            player_state_el[i].innerHTML = player_state_el[i].getAttribute("data-prepare");
                        } else {
                            player_state_el[i].classList.add("ready");
                            player_state_el[i].innerHTML = player_state_el[i].getAttribute("data-ready");
                        }
                    }
                    room_imformation = text[1];
                    console.log("ready text[1].ready" + text[1].ready);

                } else if (text[0] == "prepare") {
                    prepare(); //跑倒計時
                } else if (text[0] == "go") {
                    room_start = text[1];
                    round = room_start.round;
                    second = room_start.second;
                    player_state = room_start.player_state;

                    console.log("go room_start.player_state" + room_start.player_state);
                    console.log("go player_state[1].id" + player_state[1].id);
                } else if (text[0] == "start") {
                    room_start = text[1];
                    round = room_start.round;
                    second = room_start.second;
                    player_state = room_start.player_state;

                    console.log("start room_start.player_state" + room_start.player_state);
                    console.log("start player_state[1].id" + player_state[1].id);
                }

                if (round[1] == "開局前階段") {

                    let second = 3; //3秒
                    if (player_index != 0) {
                        game_start_btn.classList.add("none");
                    }
                    console.log("player_index" + player_index);

                } else if (round[1] == "抿牌階段") {
                    console.log("抿牌階段");
                    viewCard();
                } else if (round[1] == "狼人回合") {
                    console.log("狼人回合");
                    werewolveRound();
                }

                // if ( round[1] == "開局階段") {
                //     startGame();
                // } else


                // if ( round[1] == "女巫回合" ) {
                //     witchRound();
                // }

                // if ( round[1] == "預言家回合" ) {
                //     seerRound();
                // }

                // if ( round[1] == "發言回合" ) {
                //     daySpeaking(isvoted);
                // }

                // if ( round[1] == "投票回合" ) {
                //     vote(isvoted);
                // }

                // if ( round[1] == "結算" ) {
                //     settle_game();
                // }

                function prepare() { //遊戲開始前倒計時

                    for (let i = 0; i < player_state.length; i++) { //將準備加上none並初始化
                        player_state_el[i].classList.add("none");
                        player_state_el[i].classList.toggle("ready");
                        player_state_el[i].innerHTML = player_state_el[i].getAttribute("data-prepare");
                        ready.classList.toggle("ready");
                        ready.innerHTML = ready.getAttribute("data-cancel");
                    }

                    //用於儲存目前回合狀態，{開局階段、狼人回合、女巫回合、預言家回合、夜晚出局回合、發言回合、投票回合、白天出局回合、遊戲結束、結算回合}
                    round[1] = ["開局階段"];
                    ready_box_el.classList.add("none"); // 關閉ready面板
                    time_box_el.classList.remove("none"); // 打開計時面板
                    time_box_el.querySelector("h2").innerHTML = `遊戲即將開始<br>倒數計時:`

                    second = text[1].second[player_index]; //3秒

                    time_el.innerText = second;
                    time_el.classList.add("ani");
                    time_el.style.animationDuration = second + 1 + "s";
                    let t = setInterval(function() {

                        second--;
                        time_el.innerText = second;
                        if (second < 0) {
                            clearInterval(t);
                            time_el.classList.remove("ani");
                            void time_el.offsetWidth;

                            console.log("prepare room_start.num" + room_start.num);
                            text[1].second[player_index] = 0;
                            text[0] = "go";
                            let data = jsON.stringify(text);
                            ws.send(data);

                        }
                    }, 1000);
                }

                // function startGame(){
                //     //用於儲存目前回合狀態，{開局階段、抿牌階段、狼人回合、女巫回合、預言家回合、夜晚出局回合、發言回合、投票回合、白天出局回合、遊戲結束、結算回合}
                //     round[1] = ["抿牌階段"];
                //     text[1].round = round ;
                //     console.log("text[1].round[1]"+text[1].round[1]);
                //     //viewCard();
                // };

                function viewCard() { //依位置查看角色牌身份

                    time_box_el.classList.remove("none");
                    time_box_el.querySelector("h2").innerHTML = `查看遊戲角色身份倒數計時:`
                    second = text[1].second[player_index]; // 10秒
                    // text[1].second = second ;

                    time_el.innerText = second;
                    time_el.classList.add("ani");
                    time_el.style.animationDuration = second + 1 + "s";
                    let t = setInterval(function() {
                        second--;

                        time_el.innerText = second;
                        if (second < 0) {
                            clearInterval(t);
                            time_el.classList.remove("ani");
                            void time_el.offsetWidth;
                            card_box.classList.add("none");

                            //用於儲存目前回合狀態，{開局階段、抿牌階段、狼人回合、女巫回合、預言家回合、夜晚出局回合、發言回合、投票回合、白天出局回合、遊戲結束、結算回合}
                            // round[1] = "狼人回合";

                            console.log("go room_start.num" + room_start.num);
                            console.log("go text[1].round" + text[1].round);
                            console.log("go text[1].second" + text[1].second);

                            // text[0] = "start" ;
                            text[1].second[player_index] = 0;
                            let data = jsON.stringify(text);
                            ws.send(data);

                            //werewolveRound();
                        }
                    }, 1000);
                    //console.log("tetet")

                    //依照身分可察看相符的角色牌
                    //[ "預言家","女巫","狼人","狼人","平民","平民","平民"]
                    card_box.classList.remove("none");
                    game_rule.classList.add("none");
                    //console.log(player_role[player_index]);
                    switch (player_state[player_index].role) {

                        case "預言家":
                            seer_card.classList.remove("none");
                            game_record.innerHTML = `你的身分是預言家<br>`;
                            break;
                        case "女巫":
                            witch_card.classList.remove("none");
                            game_record.innerHTML = `你的身分是女巫<br>`;
                            break;
                        case "狼人":
                            werewolve_card.classList.remove("none");
                            game_record.innerHTML = `你的身分是狼人<br>`;
                            break;
                        case "平民":
                            villager_card.classList.remove("none");
                            game_record.innerHTML = `你的身分是平民<br>`;
                            break;
                        default:
                            break;
                    }


                    for (let i = 0; i < rule_btn_el.length; i++) {
                        rule_btn_el[i].classList.remove("none");
                        // 檢查玩家是否有點選規則按鈕
                        rule_btn_el[i].addEventListener("click", function(e) {
                            e.stopPropagation();
                            switch (player_state[player_index].role) {

                                case "預言家":
                                    seer_card.classList.toggle("none");
                                    game_rule.classList.remove("none");
                                    game_box.classList.add("none");
                                    break;
                                case "女巫":
                                    witch_card.classList.toggle("none");
                                    game_rule.classList.remove("none");
                                    game_box.classList.add("none");
                                    break;
                                case "狼人":
                                    werewolve_card.classList.toggle("none");
                                    game_rule.classList.remove("none");
                                    game_box.classList.add("none");
                                    break;
                                case "平民":
                                    villager_card.classList.toggle("none");
                                    game_rule.classList.remove("none");
                                    game_box.classList.add("none");
                                    break;
                                default:
                                    break;
                            }


                        })
                    }

                }

                function werewolveRound() { // 狼人回合，狼人開始投票

                    console.log("werewolveRound" + round[0]);
                    time_box_el.classList.remove("none");
                    time_box_el.querySelector("h2").innerHTML = `天黑倒數計時:`
                    second = text[1].second[player_index]; // 10s
                    time_el.innerText = second;
                    time_el.classList.add("ani");
                    time_el.style.animationDuration = second + 1 + "s";

                    let t = setInterval(function() {
                        console.log("werewolve" + second);
                        second--;
                        time_el.innerText = second;
                        if (second < 0) {
                            clearInterval(t);
                            time_el.classList.remove("ani");
                            void time_el.offsetWidth;

                            text[1].second[player_index] = 0;

                            // let out_num = 0, out_index = -1, no_one_out = false ;
                            // for ( let i = 0 ; i < player_state.length ; i++) {
                            //     console.log(" no_one_out:"+no_one_out+" out_index"+out_index);
                            //     if ( player_state[i].alive == true && player_state[i].vote > 0 && player_state[i].vote > out_num ) {
                            //         out_num = player_state[i].vote; //玩家票數定為目前最高票
                            //         player_state[i].vote = 0 ;//將票數歸零
                            //         out_index = i ;
                            //     } else if( player_state[i].alive == true && player_state[i].vote > 0 && player_state[i].vote == out_num ) {
                            //         // 檢查是否平票
                            //         no_one_out = true ;
                            //         player_state[i].vote = 0 ;//將票數歸零
                            //     }
                            // }

                            // if ( no_one_out == false && out_index > -1 ) { // 有投票且票數集中
                            //     player_state[out_index].out = true ;
                            //     killed.push(out_index+1);
                            //     console.log("killed:"+killed);
                            // } else { // 無投票或票數相同
                            //     killed.push(-1);
                            // }
                            // console.log("killed"+killed+" no_one_out:"+no_one_out+" out_index"+out_index);
                            //重製-------------------------------------------------------
                            for (let j = 0; j < vote_box_el.length - 1; j++) {
                                vote_box_el[j].classList.add("none");
                                vote_box_el[j].innerHTML = `Vote: <br>`;
                                vote_btn[j].disabled = false;
                                vote_btn[j].classList.remove("select");
                                vote_btn[j].classList.remove("kill");
                                vote_btn[j].classList.remove("vote");
                                vote_btn[j].classList.remove("look");
                                vote_btn[j].classList.add("none");
                                vote_btn[j].innerHTML = "";
                            }
                            kill_btn.classList.remove("select");
                            werewolve_box_el.classList.add("none");
                            //重製-------------------------------------------------------

                            // //檢查是否已結束比賽
                            // if ( isgameover() ) {
                            //     round[1] = "結算";
                            // } else {
                            //     //天黑，進入女巫回合
                            //     //用於儲存目前回合狀態，{開局階段、抿牌階段、狼人回合、女巫回合、預言家回合、夜晚出局回合、發言回合、投票回合、白天出局回合、遊戲結束、結算回合}
                            //     round[1] = "女巫回合";
                            //     witchRound();
                            // }

                            text[1].second[player_index] = 0;
                            text[1].player_state = player_state;
                            let data = jsON.stringify(text);
                            ws.send(data);
                        }
                    }, 1000);

                    let werewolve_text = document.getElementById("werewolve_text");
                    switch (player_state[player_index].role) {

                        case "狼人": //狼人顯示狼人面板
                            text_el.classList.add("none");
                            werewolve_box_el.classList.remove("none");
                            break;
                        default: //其他人顯示文字面板
                            text_el.classList.remove("none");
                            text_el.innerHTML = text_el.getAttribute("data-dark");
                            break;
                    }

                    let have_been_vote = false,
                        have_been_confirm = false;
                    let kill_player_index;
                    if (player_state[player_index].role == "狼人" && player_state[player_index].alive == true) {
                        for (let i = 0; i < player_state.length; i++) {

                            if (player_state[i].alive == true) {

                                vote_btn[i].classList.remove("none");
                                vote_btn[i].classList.add("kill");
                                vote_btn[i].innerHTML = "Kill";

                                vote_btn[i].addEventListener("click", function() { //監聽是否被投票
                                    if (have_been_confirm == false) {
                                        for (let j = 0; j < vote_btn.length - 1; j++) {
                                            vote_btn[j].classList.remove("select");
                                        }

                                        vote_btn[i].classList.add("select");
                                        kill_player_index = i;
                                        have_been_vote = true;
                                    }
                                })

                                kill_btn.addEventListener("click", function() { //監聽是否確認kill該玩家

                                    if (have_been_vote && !have_been_confirm) {

                                        kill_btn.classList.add("select");
                                        vote_btn[kill_player_index].disabled = true;
                                        player_state[kill_player_index].vote++;
                                        have_been_confirm = true;

                                        if (player_state[player_index].role == "狼人") {
                                            player_state[player_index].record = kill_player_index; // 將票投給其他玩家
                                            // vote_box_el[kill_player_index].classList.remove("none");
                                            // vote_box_el[kill_player_index].innerHTML += `玩家${player_index+1}`;

                                        }
                                    }

                                })
                            }

                        }
                    }


                }

                // function witchRound(){

                //     console.log("witchRound"+round[0]);
                //     time_box_el.classList.remove("none");
                //     time_box_el.querySelector("h2").innerHTML = `天黑倒數計時:`
                //     second = 5 ;
                //     time_el.innerText = second ;
                //     time_el.classList.add("ani");
                //     time_el.style.animationDuration = second+1+"s";
                //     witch_poison_btn.classList.add("none");
                //     switch (player_state[player_index].role){

                //         case "女巫": //女巫顯示女巫面板
                //             text_el.classList.add("none");
                //             witch_box_el.classList.remove("none");
                //             break;
                //         default: //其他人顯示文字面板
                //             text_el.classList.remove("none");
                //             text_el.innerHTML = text_el.getAttribute("data-dark");
                //             break;
                //     }

                //     let t = setInterval(function() {
                //         console.log("witch"+second);
                //         second--;
                //         time_el.innerText = second ;

                //         if (second < 0) {
                //             clearInterval(t);
                //             time_el.classList.remove("ani");
                //             void time_el.offsetWidth;
                //             //重製-------------------------------------------------------
                //             for( let j = 0 ; j < vote_box_el.length-1; j++) {
                //                 vote_box_el[j].classList.add("none");
                //                 vote_box_el[j].innerHTML = `Vote: <br>`;
                //                 vote_btn[j].disabled = false ;
                //                 vote_btn[j].classList.remove("select");
                //                 vote_btn[j].classList.remove("kill");
                //                 vote_btn[j].classList.remove("vote");
                //                 vote_btn[j].classList.remove("look");
                //                 vote_btn[j].classList.add("none");
                //                 vote_btn[j].innerHTML = "" ;
                //             }
                //             witch_poison_btn.classList.remove("select");
                //             witch_poison_btn.classList.add("none");
                //             witch_yes_btn.classList.remove("select") ;
                //             witch_no_btn.classList.remove("select") ;
                //             witch_yes_btn.disabled = false ;
                //             witch_no_btn.disabled = false ;
                //             witch_yes_btn.classList.add("none");
                //             witch_no_btn.classList.add("none");
                //             witch_box_el.classList.add("none");
                //             witch_text.innerHTML = `已使用過解藥及毒藥`
                //             //重製-------------------------------------------------------

                //             //天黑，進入預言家回合
                //             //用於儲存目前回合狀態，{開局階段、抿牌階段、狼人回合、女巫回合、預言家回合、夜晚出局回合、發言回合、投票回合、白天出局回合、遊戲結束、結算回合}
                //             round[1] = "預言家回合";
                //             seerRound();

                //         }
                //     }, 1000);
                //     //console.log("witchArr.saved:"+witchArr.saved+" killed[round[0]-1]:"+killed[round[0]-1]+" player_state[1].alive:"+player_state[1].alive);
                //     if (player_state[player_index].role == "女巫" && player_state[player_index].alive == true) {
                //         if ( witchArr.saved == -1 && killed[round[0]-1] > -1 ){
                //             //有人死亡 //還沒使用過解藥
                //             console.log("witchArr.saved"+witchArr.saved);

                //             witch_text.innerHTML = `昨晚死亡的玩家為 玩家${killed[round[0]-1]} <br>是否要給予解藥?`

                //             //重製按鈕
                //             witch_yes_btn.classList.remove("none") ;
                //             witch_no_btn.classList.remove("none") ;


                //             //監聽按鈕是否有按下
                //             witch_no_btn.addEventListener("click", function(){
                //                 witch_no_btn.classList.add("select");
                //                 witch_yes_btn.disabled = true ;

                //                 if ( witchArr.poisoned == -1 ) { // 不救人且尚未下毒
                //                     poison(); // 詢問是否要下毒

                //                     //console.log("witchArr.poisoned1:"+witchArr.poisoned);
                //                 }
                //             })
                //             witch_yes_btn.addEventListener("click", function(){
                //                 witch_yes_btn.classList.add("select");
                //                 witch_no_btn.disabled = true ;
                //                 player_state[killed[round[0]-1]-1].out = false ;
                //                 witchArr.saved = killed[round[0]-1] ;
                //                 killed[round[0]] = -1 ; // 此局無人死亡
                //                 this_round_save = true ;
                //             })

                //         } else if ( witchArr.poisoned == -1 ) {
                //             // 不救人且尚未下毒

                //             poison(); // 詢問是否要下毒
                //             //wolf_list.html.log("witchArr.poisoned2:"+witchArr.poisoned);
                //         }
                //     }

                // }

                // function poison(){
                //     console.log("witchArr.poisoned"+witchArr.poisoned);
                //     //還沒使用過毒藥
                //     witch_text.innerHTML = witch_text.getAttribute("data-poison");
                //     witch_poison_btn.classList.remove("none") ;
                //     witch_yes_btn.classList.add("none") ;
                //     witch_no_btn.classList.add("none") ;

                //     let have_been_vote = false, have_been_confirm = false, kill_player_index = -1 ;
                //     for( let i = 0 ; i < vote_btn.length-1 ; i++) {
                //         //player_state[player_index].role == "女巫" &&
                //         if ( player_state[i].alive == true && player_state[i].role != "女巫" ) {
                //             // 將還未死亡的玩家顯示按鈕
                //             vote_btn[i].classList.remove("none");
                //             vote_btn[i].classList.add("kill");
                //             vote_btn[i].innerHTML = "Kill" ;
                //         }

                //         vote_btn[i].addEventListener("click", function(){ //監聽是否投票

                //             if (have_been_confirm == false) { // 尚未確認則重製選擇
                //                 for( let j = 0 ; j < vote_btn.length-1 ; j++ ){
                //                     vote_btn[j].classList.remove("select");
                //                 }

                //                 vote_btn[i].classList.add("select");
                //                 kill_player_index = i ;
                //                 have_been_vote = true ;

                //             }
                //         })

                //         witch_poison_btn.addEventListener("click", function(){
                //             //監聽是否確認kill該玩家

                //             if ( have_been_vote && !have_been_confirm ) {
                //                 witch_poison_btn.classList.add("select");
                //                 player_state[kill_player_index].out = true;
                //                 have_been_confirm = true ;

                //                 witchArr.poisoned = kill_player_index+1 ;

                //                 for( let j = 0 ; j < player_state.length ; j++) { //將其他按鈕鎖住
                //                     vote_btn[j].disabled = true ;
                //                 }
                //             }
                //         })
                //     }
                // }

                // function seerRound(){

                //     console.log("seerRound"+round[0]);

                //     time_box_el.classList.remove("none");
                //     time_box_el.querySelector("h2").innerHTML = `天黑倒數計時:`
                //     second = 5 ;
                //     time_el.innerText = second ;
                //     time_el.classList.add("ani");
                //     time_el.style.animationDuration = second+1+"s";
                //     switch (player_state[player_index].role){

                //         case "預言家": //預言家顯示預言家面板
                //             text_el.classList.add("none");
                //             seer_box_el.classList.remove("none");
                //             break;
                //         default: //其他人顯示文字面板
                //             text_el.classList.remove("none");
                //             text_el.innerHTML = text.getAttribute("data-dark");
                //             break;
                //     }

                //     let t = setInterval(function() {
                //         console.log("seer"+second);
                //         second--;
                //         time_el.innerText = second ;

                //         if (second < 0) {
                //             clearInterval(t);
                //             time_el.classList.remove("ani");
                //             void time_el.offsetWidth;
                //             //重製-------------------------------------------------------
                //             for( let j = 0 ; j < vote_box_el.length-1; j++) {
                //                 vote_box_el[j].classList.add("none");
                //                 vote_box_el[j].innerHTML = `Vote: <br>`;
                //                 vote_btn[j].disabled = false ;
                //                 vote_btn[j].classList.remove("select");
                //                 vote_btn[j].classList.remove("kill");
                //                 vote_btn[j].classList.remove("vote");
                //                 vote_btn[j].classList.remove("look");
                //                 vote_btn[j].classList.add("none");
                //                 vote_btn[j].innerHTML = "" ;
                //             }
                //             seer_btn.classList.remove("select");
                //             seer_text_el.innerText = seer_text_el.getAttribute("data-see") ;
                //             seer_box_el.classList.add("none");
                //             //重製-------------------------------------------------------

                //             round[1] = "夜晚出局回合";
                //             settleOut(); //結算出局玩家

                //             //檢查是否已結束比賽
                //             if ( isgameover() ) {
                //                 round[1] = "結算";
                //                 settle_game();//進入結算面板
                //             } else {
                //                 //天黑，進入預言家回合
                //                 //用於儲存目前回合狀態，{開局階段、抿牌階段、狼人回合、女巫回合、預言家回合、夜晚出局回合、發言回合、投票回合、白天出局回合、遊戲結束、結算回合}
                //                 round[1] = "發言回合";
                //                 daySpeaking(isvoted);
                //             }

                //         }
                //     }, 1000);

                //     if ( player_state[player_index].alive == true && player_state[player_index].role == "預言家") {
                //         //預言家尚存活，晚上出局仍可查看

                //         let have_been_look = false, have_been_confirm = false, look_player_index = -1 ;
                //         for( let i = 0 ; i < player_state.length ; i++) {
                //             //player_state[player_index].role == "預言家" &&
                //             if (  player_state[i].alive == true && player_state[i].role != "預言家") {
                //                 // 將還未死亡的玩家顯示按鈕
                //                 vote_btn[i].classList.remove("none");
                //                 vote_btn[i].classList.add("look");
                //                 vote_btn[i].innerHTML = "look" ;
                //             }


                //             vote_btn[i].addEventListener("click", function(){ //監聽是否投票

                //                 if (!have_been_confirm) { // 尚未確認則重製選擇
                //                     for( let j = 0 ; j < vote_btn.length-1 ; j++ ){
                //                         vote_btn[j].classList.remove("select");
                //                     }

                //                     vote_btn[i].classList.add("select");
                //                     look_player_index = i ;
                //                     have_been_look = true ;

                //                 }
                //             })

                //             seer_btn.addEventListener("click", function(){
                //                 //監聽是否確認look該玩家

                //                 if ( have_been_look && !have_been_confirm && look_player_index!= -1) {
                //                     seer_btn.classList.add("select");
                //                     have_been_confirm = true;

                //                     for( let j = 0 ; j < player_state.length ; j++) { //將其他按鈕鎖住
                //                         vote_btn[j].disabled = true ;
                //                     }

                //                     if ( player_state[look_player_index].role != "狼人") {
                //                         seer_text_el.innerText = "好人";

                //                         // viewed.push({"player_index": -1, "group":""}) ;
                //                         // viewed[round[0]-1] = look_player_index+1 ;
                //                         // viewed[round[0]-1].group = "好人" ;
                //                     } else {
                //                         seer_text_el.innerText = "狼人";

                //                         // viewed.push({"player_index": -1, "group":""}) ;
                //                         // viewed[round[0]-1].player_index = look_player_index+1 ;
                //                         // viewed[round[0]-1].group = "狼人" ;
                //                     }
                //                     // console.log(viewed.group);
                //                     console.log("have_been_look: "+have_been_look+"have_been_confirm: "+have_been_confirm);
                //                 }
                //             })
                //         }
                //     }
                // }

                // function daySpeaking(isvoted){
                //     // 白天發言
                //     console.log("daySpeaking"+round[1]);
                //     text_el.classList.add("none") ;
                //     time_box_el.classList.remove("none");

                //     if ( round[1] == "白天出局回合") {
                //         //出局發言

                //         for( let i = 0 ; i < player_state.length ; i++ ) {
                //             if ( player_state[i].out == true ) {

                //                 settleOut(); //結算出局玩家

                //                 if ( isgameover() ) {
                //                     round[1] = "結算";
                //                     settle_game();//進入結算面板
                //                 } else {
                //                     //找出出局的人並開始發言
                //                     time_box_el.querySelector("h2").innerHTML = `本次出局為玩家${i+1}<br>出局發言倒數計時:` ;
                //                     second = 5 ;
                //                     time_el.innerText = second ;
                //                     time_el.classList.add("ani");
                //                     time_el.style.animationDuration = second+1+"s";
                //                     // speaking~~~~~
                //                     let t = setInterval(() => {
                //                         console.log("out"+second);
                //                         second--;
                //                         time_el.innerText = second ;
                //                         if ( second < 0 ) {
                //                             clearInterval(t) ;
                //                             time_el.classList.remove("ani");
                //                             void time_el.offsetWidth;
                //                             player_state[i].out = false ;

                //                             //天黑，進入預言家回合
                //                             //用於儲存目前回合狀態，{開局階段、抿牌階段、狼人回合、女巫回合、預言家回合、夜晚出局回合、發言回合、投票回合、白天出局回合、遊戲結束、結算回合}
                //                             round[1] = "狼人回合";
                //                             round[0]++;
                //                             console.log("投票結束再進到狼人回合"+round[0]);
                //                             werewolveRound();
                //                         }
                //                     }, 1000);
                //                 }

                //             }
                //         }

                //     } else {
                //         // 尚未投出出局玩家
                //         let begin_speaker = Math.ceil(Math.random() * 7)-1; //0~6
                //         let last_speaker ;
                //         let speaker = [] ;
                //         let num_of_speaker = 0 ;

                //         for ( let i = 0 ; i < 7 ; i++) {

                //             // 第一次進入發言，將尚未死亡的玩家存入發言名單中
                //             if ( player_state[begin_speaker].alive == true && isvoted == false ) {
                //                 speaker.push(begin_speaker)  ;
                //                 num_of_speaker++;
                //             } else if ( isvoted == true && player_state[begin_speaker].vote > 0) {
                //                 // 已投過但尚未選出玩家，將有票數的玩家存入發言名單中
                //                 speaker.push(begin_speaker)  ;
                //                 num_of_speaker++;
                //             }

                //             begin_speaker++ ;
                //             if ( begin_speaker == 7 ) {
                //                 begin_speaker = 0 ;
                //             }

                //         }

                //         if ( isvoted == true && speaker == [] ) {
                //             //上一局無人投票
                //             if ( player_state[begin_speaker].alive == true ) {
                //                 speaker.push(begin_speaker)  ;
                //                 num_of_speaker++;
                //             } 

                //             begin_speaker++ ;
                //             if ( begin_speaker == 7 ) {
                //                 begin_speaker = 0 ;
                //             }
                //         }

                //         //投票環節發言
                //         time_box_el.querySelector("h2").innerHTML = `玩家${speaker[0]+1}發言<br>倒數計時:`
                //         second = 3 ;
                //         time_el.innerText = second ;
                //         time_el.classList.add("ani");
                //         time_el.style.animationDuration = second+1+"s";
                //         let i = 0 ;
                //         let t = setInterval(() => {
                //             console.log("speak"+second);
                //             second--;
                //             time_el.innerText = second ;
                //             if ( second < 0 && num_of_speaker != i) {
                //                 i++;
                //                 second = 3 ;
                //                 time_el.innerText = second ;
                //                 time_el.classList.remove("ani");
                //                 void time_el.offsetWidth;
                //                 time_el.classList.add("ani");
                //                 time_el.style.animationDuration = second+1+"s";
                //                 time_box_el.querySelector("h2").innerHTML = `玩家${speaker[i]+1}發言<br>倒數計時:`
                //             }

                //             if ( num_of_speaker == i ) {
                //                 clearInterval(t);
                //                 time_el.classList.remove("ani");
                //                 void time_el.offsetWidth;
                //                 //投票環節
                //                 //用於儲存目前回合狀態，{開局階段、抿牌階段、狼人回合、女巫回合、預言家回合、夜晚出局回合、發言回合、投票回合、白天出局回合、遊戲結束、結算回合}
                //                 round[1] = "投票回合";
                //                 vote(isvoted) ; // 投票
                //             }
                //         }, 1000);
                //     }
                // }

                // var count = 0 ;
                // function vote(isvoted){
                //     // 投票
                //     console.log("vote"+round[1]);

                //     //開啟所有存活玩家投票按鈕

                //     for( let i = 0 ; i < player_state.length ; i++) {

                //         if ( player_state[player_index].alive == true && player_state[i].alive == true && isvoted == false ) {
                //             //第一次投票，將全部人票箱開啟
                //             vote_btn[i].classList.remove("none");
                //             vote_btn[i].classList.add("vote");
                //             vote_btn[i].innerHTML = "Vote" ;
                //         } else if ( player_state[player_index].alive == true && player_state[i].alive == true && player_state[i].vote > 0  && isvoted == true ) {
                //             //再次投票，將候選人投票箱開啟
                //             vote_btn[i].classList.remove("none");
                //             vote_btn[i].classList.add("vote");
                //             vote_btn[i].innerHTML = "Vote" ;
                //             player_state[i].vote = 0 ; //歸零票數
                //         }

                //         //重製-------------------------------------------------------
                //         vote_box_el[i].innerHTML = `Vote: <br>`;
                //         //重製-------------------------------------------------------

                //     }

                //     time_box_el.querySelector("h2").innerHTML = `開始投票倒數計時:` ;
                //     second = 5 ;
                //     time_el.innerText = second ;
                //     time_el.classList.add("ani");
                //     time_el.style.animationDuration = second+1+"s";
                //     let have_been_vote = false ;

                //     let t = setInterval(() => {
                //         console.log("vote"+second);
                //         second--;
                //         time_el.innerText = second ;
                //         // vote_btn.addEventListener("click", function(e){ //監聽是否被投票
                //         //     if ( have_been_vote == false) {
                //         //         //console.log(e.target) ;
                //         //         e.target.classList.add("select");

                //         //         player_state[e.target.closest("seat").getAttribute("data-index")-1].vote++;
                //         //         have_been_vote = true ;

                //         //         e.target.closest("seat").querySelector("vote_box").classList.remove("none");
                //         //         e.target.closest("seat").querySelector("vote_box").innerHTML += `玩家${player_index+1}`;

                //         //         for( let j = 0 ; j < player_state.length ; j++) { //將其他按鈕鎖住
                //         //             vote_btn[j].disabled = true ;
                //         //         }
                //         //         //console.log(i+vote_box_el[i].innerHTML+count);
                //         //     }

                //         // })
                //         for( let i = 0 ; i < player_state.length ; i++) {
                //             //投票
                //             vote_btn[i].addEventListener("click", function(e){ //監聽是否被投票
                //                 if ( have_been_vote == false) {
                //                     //console.log(e.target) ;
                //                     e.target.classList.add("select");

                //                     player_state[e.target.closest(".seat").getAttribute("data-index")-1].vote++;
                //                     have_been_vote = true ;

                //                     e.target.closest(".seat").querySelector(".vote_box").classList.remove("none");
                //                     e.target.closest(".seat").querySelector(".vote_box").innerHTML += `玩家${player_index+1}`;

                //                     for( let j = 0 ; j < player_state.length ; j++) { //將其他按鈕鎖住
                //                         vote_btn[j].disabled = true ;
                //                     }
                //                     console.log(i+vote_box_el[i].innerHTML+count);
                //                 }
                //             })
                //         }
                //         //時間到，停止投票，驗票
                //         if ( second < 0 ) {
                //             clearInterval(t) ;
                //             time_el.classList.remove("ani");
                //             void time_el.offsetWidth;
                //             console.log("驗票"+round[1]);
                //             //驗票
                //             let vote_num = 0, out_index = -1, no_one_out = false ;
                //             for ( let i = 0 ; i < player_state.length ; i++) {
                //                 if ( player_state[i].vote > 0 && player_state[i].vote > vote_num ) {
                //                     vote_num = player_state[i].vote; //票數定為目前最高票
                //                     out_index = i ;
                //                 } else if( player_state[i].vote > 0 && player_state[i].vote == vote_num ) {
                //                     // 檢查是否平票
                //                     no_one_out = true ;
                //                 }
                //             }

                //             //重製-------------------------------------------------------
                //             for( let j = 0 ; j < vote_box_el.length-1; j++) {
                //                 vote_box_el[j].classList.add("none");
                //                 vote_box_el[j].innerHTML = `Vote: <br>`;
                //                 vote_btn[j].disabled = false ;
                //                 vote_btn[j].classList.remove("select");
                //                 vote_btn[j].classList.remove("kill");
                //                 vote_btn[j].classList.remove("vote");
                //                 vote_btn[j].classList.remove("look");
                //                 vote_btn[j].classList.add("none");
                //                 vote_btn[j].innerHTML = "" ;
                //             }
                //             //重製-------------------------------------------------------

                //             if ( no_one_out == false && out_index > -1 ) { // 有投票且票數集中
                //                 player_state[out_index].out = true ;
                //                 player_state[out_index].alive = false ;
                //                 // 最高票出局玩家發言

                //                 round[1] = "白天出局回合";
                //                 console.log("有投票且票數集中:"+round[1]);
                //                 daySpeaking(isvoted);//出局者發言
                //                 isvoted = false ;

                //             } else { // 票數相同
                //                 // 洗掉票數最低的玩家
                //                 for ( let i = 0 ; i < player_state.length ; i++) {
                //                     if ( player_state[i].vote < vote_num ) {
                //                         player_state[i].vote = 0 ; //非最高票的玩家票數歸零
                //                     }
                //                 }
                //                 console.log("票數相同再進發言回合");
                //                 //票數相同者再發言投票
                //                 round[1] = "發言回合";
                //                 if ( vote_num == 0 ) { // 無人投票
                //                     isvoted = false ;
                //                 } else { // 有人投票
                //                     isvoted = true ;
                //                 }

                //                 daySpeaking(isvoted);
                //                 count++;
                //             }
                //         }
                //     }, 1000);
                // }

                // function isgameover(){
                //     //檢查是否已遊戲結束
                //     let good_group = 0 ;
                //     let werewolve_group = 0 ;

                //     for ( let i = 0 ; i < player_state.length ; i++ ){

                //         if ( player_state[i].role == "狼人" ) {
                //             if( player_state[i].alive == true ) {
                //                 werewolve_group++ ;
                //             }
                //         } else {
                //             if( player_state[i].alive == true ) {
                //                 good_group++ ;
                //             }
                //         }

                //     }

                //     if ( good_group == 0 ) {
                //         gameover = [true,"狼人獲勝"] ;
                //         return true ;
                //     } else if ( werewolve_group == 0 ) {
                //         gameover = [true,"好人獲勝"] ;
                //         return true ;
                //     } else {
                //         return false ;
                //     }

                // }

                // function settleOut(){
                //     console.log("settleOut");
                //     //結算出局玩家，並判定死亡
                //     let no_one_out = true;
                //     let out_player = [];
                //     for ( let i = 0 ; i < player_state.length ; i++ ){
                //         if ( player_state[i].out == true ) {
                //             console.log("out=true");
                //             playerID[i].querySelector("div.player_img").classList.add("out");
                //             player_state[i].alive = false ; // 判定死亡
                //             player_state[i].out = false ; // 重製出局
                //             out_player.push(i+1) ;
                //             no_one_out = false ;
                //         }
                //         player_state[i].vote = 0 ; // 重新歸零票數
                //     }

                //     if (round[1] == "夜晚出局回合") {
                //         game_record.innerHTML += `第${round[0]}夜出局的玩家為:<br>` 
                //     } else if (round[1] == "白天出局回合") {
                //         game_record.innerHTML += `第${round[0]}天出局的玩家為:<br>`
                //     }

                //     if ( !no_one_out ) {
                //         for ( let j = 0 ; j < out_player.length ; j++) {
                //             game_record.innerHTML += `玩家${out_player[j]} `
                //         }
                //         game_record.innerHTML += `<br>`
                //     } else {
                //         game_record.innerHTML += `無人出局<br>`
                //     }
                // }

                // function settle_game(){
                //     // 結算遊戲勝負
                //     settle_game_el.classList.remove("none");
                //     room_el.classList.add("none");
                //     for ( let i = 0 ; i < player_state.length ; i++ ){

                //         if ( gameover[1] == "好人獲勝") { //好人勝利
                //             if ( player_state[i].role != "狼人" ) {
                //                 winner_box.insertAdjacentHTML( "beforeend", `
                //                 <div class="player_img">
                //                     <img src="../../img/wolf/little_red.jpg" alt="">
                //                     <div class="ban"></div>
                //                     <div class="add"></div>
                //                     <div class="name">Hawk</div>
                //                 </div>` )
                //             } else {
                //                 loser_box.insertAdjacentHTML( "beforeend", `
                //                 <div class="player_img">
                //                     <img src="../../img/wolf/little_red.jpg" alt="">
                //                     <div class="ban"></div>
                //                     <div class="add"></div>
                //                     <div class="name">Hawk</div>
                //                 </div>` )
                //             }
                //         } else {
                //             if ( player_state[i].role == "狼人" ) { // 狼人勝利
                //                 winner_box.insertAdjacentHTML( "beforeend", `
                //                 <div class="player_img">
                //                     <img src="../../img/wolf/little_red.jpg" alt="">
                //                     <div class="ban"></div>
                //                     <div class="add"></div>
                //                     <div class="name">Hawk</div>
                //                 </div>` )
                //             } else {
                //                 loser_box.insertAdjacentHTML( "beforeend", `
                //                 <div class="player_img">
                //                     <img src="../../img/wolf/little_red.jpg" alt="">
                //                     <div class="ban"></div>
                //                     <div class="add"></div>
                //                     <div class="name">Hawk</div>
                //                 </div>` )
                //             }
                //         }
                //     }

                //     // ban & add
                //     let ban_el = document.getElementsByClassName("ban");
                //     let add_el = document.getElementsByClassName("add");

                //     for ( let i = 0 ; i < ban_el.length ; i++ ) {
                //         ban_el[i].addEventListener("click", function(){
                //             ban_el[i].classList.toggle("on");
                //         })

                //         add_el[i].addEventListener("click", function(){
                //             add_el[i].classList.toggle("on");
                //         })
                //     }
                // }
            }
        });





        // =====================================================================================
        // 遊戲開始前&遊戲中
        game_instruction.addEventListener("click", function() { // 點擊遊戲說明按鈕
            card_box.classList.remove("none");
            game_rule.classList.remove("none");
            game_box.classList.add("none");
        })

        record_btn.addEventListener("click", function() { // 點擊遊戲紀錄按鈕
            card_box.classList.remove("none");
            game_box.classList.remove("none");
            game_rule.classList.add("none");
        })

        not_ready_box.addEventListener("click", function(e) { // 點擊燈箱外部
            not_ready_box.classList.add("none");
        })

        not_ready.addEventListener("click", function(e) { // 點擊卡片
            e.stopPropagation();
        });

        //燈箱相關監聽----------------------------------------------------------------------------
        card_box.addEventListener("click", function(e) { // 點擊燈箱外部
            card_box.classList.add("none");
            // game_rule.classList.remove("none");
            seer_card.classList.add("none");
            witch_card.classList.add("none");
            werewolve_card.classList.add("none");
            villager_card.classList.add("none");
            card_box.querySelector("article").classList.remove("rotate");
        })

        card_box.querySelector("article").addEventListener("click", function(e) { // 點擊卡片
            e.stopPropagation();
            card_box.querySelector("article").classList.toggle("rotate");
        });

        close_el.addEventListener("click", function() { // 點擊燈箱關閉鍵
            card_box.classList.add("none");
            // game_rule.classList.add("none");
            card_box.querySelector("article").classList.remove("rotate");
        })
        //燈箱相關監聽----------------------------------------------------------------------------
    </script>
</body>

</html>