<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>活動資料查詢</title>
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/chat/style3.css">

</head>

<body>
    <div id="wrapper">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="1chat_memberdata-search.html">
                    <span>會員中心</span>
                </a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="2chat_malltext-search.html">
                    <span>商城管理</span>
                </a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="3chat_eventext-search.html">
                    <span>行程管理</span>
                </a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="4chat_chatroomdata-search.html">
                    <span>聊天室管理</span>
                </a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="5chat_member-article-search.html">
                    <span>會員文章管理</span>
                </a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="6chat_gamedata-search.html">
                    <span>遊戲管理</span>
                </a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="7chat_reportsystem-search.html">
                    <span>檢舉管理</span>
                </a>
            </li>
        </ul>

        <div class="m-text-search">
           
                <div class="m-text-search-banner">
                    <ul>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>
                </div>

                <div id="mix-bar">
                    <span id="general-info">官方行程查詢</span>
                    <span id="event-info">會員查詢</span>
                </div> 
                <div id="eventdata-search" class="search-bar">
                    <h2></h2>
                    <table>
                        <button id="eventcreate-btn" class="add-btn">新增</button>
                        <tr>
                            <td>活動編號</td>
                            <td><input type="text"></td>
                        </tr>
                        <tr>
                            <td>活動名稱</td>
                                <td><input type="text"></td>
                       </tr>
                        <tr>
                            <td>活動時間</td>
                            <td>
                                <input type="date" id="myDate" name="myDate" value="2023-01-01">
                            </td>
                        </tr>
                        <tr>
                            <td>活動類型</td>
                            <td><input type="text"></td>
                        </tr>
                        <tr>
                            <td>活動狀態</td>
                            <td>
                                <input type="radio" checked>開啟
                                <input type="radio">關閉
                            </td>
                        </tr>
                    </table>
                    <button id="eventdata-btn" class="search-btn">查看</button>

                </div>

                <div id="eventdata" class="membertext hide-bar">
                    <h2>官方活動編輯</h2>                      
                        <img id="back-btn" src="IMG/chat/Vector.svg" alt="">                       
                    <div class="membertext-left">
                        <table>
                            <tr>
                                <td>活動編號</td>
                                <td>男/女</td>
                            </tr>
                            <td>活動名稱</td>
                            <td>202CM</td>
                            <tr>
                                <td>活動時間</td>
                                <td>nehao@gmail.com</td>
                            </tr>
                            <tr>
                                <td>活動類型</td>
                                <td>背ABC</td>
                            </tr>
                            <tr>
                                <td>活動狀態</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>活動人數</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>活動標籤</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>活動地點</td>
                                <td>1</td>
                            </tr>
                        </table>
                    </div>

                    <div class="membertext-right">
                        <table>
                            <tr>
                                <td>活動限制</td>
                                <td>11111111111</td>
                            </tr>
                            <tr>
                                <td>活動圖片</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>會員星座</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>會員年齡</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>會員生日</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>會員興趣</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>個性簽名</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>遊戲幣</td>
                                <td>1</td>
                            </tr>
                        </table>
                        
                    </div>
                    <button class="search-btn">變更</button>
                </div>

                <div id="eventdata-create" class="membertext hide-bar">
                    <h2>新增活動資料</h2>                      
                        <img id="back-btn2" src="IMG/chat/Vector.svg" alt="">                       
                    <div class="membertext-left">
                        <table>
                            <tr>
                                <td>活動編號</td>
                                <td>男/女</td>
                            </tr>
                            <td>活動名稱</td>
                            <td>202CM</td>
                            <tr>
                                <td>活動時間</td>
                                <td>nehao@gmail.com</td>
                            </tr>
                            <tr>
                                <td>活動類型</td>
                                <td>背ABC</td>
                            </tr>
                            <tr>
                                <td>活動狀態</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>活動人數</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>活動標籤</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>活動地點</td>
                                <td>1</td>
                            </tr>
                        </table>
                    </div>

                    <div class="membertext-right">
                        <table>
                            <tr>
                                <td>活動限制</td>
                                <td>11111111111</td>
                            </tr>
                            <tr>
                                <td>活動圖片</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>會員星座</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>會員年齡</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>會員生日</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>會員興趣</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>個性簽名</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>遊戲幣</td>
                                <td>1</td>
                            </tr>
                        </table>
                        
                    </div>
                    <button class="search-btn">變更</button>
                </div>

                <div id="memberdata-search" class="hide-bar">
                    <h2>會員資料查詢</h2>
                    <table>
                        <tr>
                            <td>會員編號</td>
                            <td><input type="text"></td>
                        </tr>
                        <tr>
                            <td>會員名稱</td>
                            <td><input type="text"></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><input type="text"></td>
                        </tr>
                        <tr>
                            <td>會員身分</td>
                            <td>
                                <select>
                                    <option selected>一般</option>
                                    <option>管理員</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>會員狀態</td>
                            <td>
                                <select>
                                    <option selected>正常</option>
                                    <option>警告</option>
                                    <option>禁言</option>
                                    <option>封鎖</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                    <button id="memberdata-btn" class="search-btn">查看</button>
                </div>
                <div id="memberdata" class="membertext hide-bar">
                    <h2>會員資料</h2>                      
                        <img id="back-btn" src="IMG/chat/Vector.svg" alt="">                       
                    <div class="membertext-left">
                        <table>
                            <tr>
                                <td>會員編號</td>
                                <td>男/女</td>
                            </tr>
                            <td>會員暱稱</td>
                            <td>202CM</td>
                            <tr>
                                <td>EMAIL</td>
                                <td>nehao@gmail.com</td>
                            </tr>
                            <tr>
                                <td>會員身分</td>
                                <td>背ABC</td>
                            </tr>
                            <tr>
                                <td>會員狀態</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>遊戲紀錄</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>會員備註</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td></td>
                                
                            </tr>
                        </table>
                    </div>

                    <div class="membertext-right">
                        <table>
                            <tr>
                                <td>會員身高</td>
                                <td>11111111111</td>
                            </tr>
                            <tr>
                                <td>會員體重</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>會員星座</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>會員年齡</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>會員生日</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>會員興趣</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>個性簽名</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>遊戲幣</td>
                                <td>1</td>
                            </tr>
                        </table>
                        
                    </div>
                    <button class="search-btn">變更</button>
                </div>
                <div class="list-bottom">
                    <h3>會員列表</h3>
                    <div class="list-bottom-first">
                       <div>
                        <span>會員編號</span>
                        <span>會員名稱</span>
                        <span>Email</span>
                        <span>會員身分</span>
                        <span>會員狀態</span>
                        <span>處罰紀錄</span>
                        <span>查看</span>
                       </div> 
                        
                        
                    </div>
                    <ul>                       
                        <li>
                            <span>會員編號</span>
                            <span>會員名稱</span>
                            <span>Email</span>
                            <span>會員身分</span>
                            <span>會員狀態</span>
                            <span>處罰紀錄</span>
                            <a href="#">查看</a>
                        </li>
                        <li>
                            <span>會員編號</span>
                            <span>會員名稱</span>
                            <span>Email</span>
                            <span>會員身分</span>
                            <span>會員狀態</span>
                            <span>處罰紀錄</span>
                            <a href="#">查看</a>
                        </li>
                        <li>
                            <span>會員編號</span>
                            <span>會員名稱</span>
                            <span>Email</span>
                            <span>會員身分</span>
                            <span>會員狀態</span>
                            <span>處罰紀錄</span>
                            <a href="#">查看</a>
                        </li>
                        <li>
                            <span>會員編號</span>
                            <span>會員名稱</span>
                            <span>Email</span>
                            <span>會員身分</span>
                            <span>會員狀態</span>
                            <span>處罰紀錄</span>
                            <a href="#">查看</a>
                        </li>
                        <li>
                            <span>會員編號</span>
                            <span>會員名稱</span>
                            <span>Email</span>
                            <span>會員身分</span>
                            <span>會員狀態</span>
                            <span>處罰紀錄</span>
                            <a href="#">查看</a>
                        </li>
                        <li>
                            <span>會員編號</span>
                            <span>會員名稱</span>
                            <span>Email</span>
                            <span>會員身分</span>
                            <span>會員狀態</span>
                            <span>處罰紀錄</span>
                            <a href="#">查看</a>
                        </li>
                        <li>
                            <span>會員編號</span>
                            <span>會員名稱</span>
                            <span>Email</span>
                            <span>會員身分</span>
                            <span>會員狀態</span>
                            <span>處罰紀錄</span>
                            <a href="#">查看</a>
                        </li>
                    </ul>
                </div>

                <div class="list-bottom">
                    <h3>會員列表</h3>
                    <div class="list-bottom-first">
                        <div>
                            <span>會員編號</span>
                            <span>會員名稱</span>
                            <span>Email</span>
                            <span>會員身分</span>
                            <span>會員狀態</span>
                            <span>處罰紀錄</span>
                            <span>查看</span>
                        </div>
    
                    </div>
                    <ul>                       
                        <li>
                            <span>會員編號</span>
                            <span>會員名稱</span>
                            <span>Email</span>
                            <span>會員身分</span>
                            <span>會員狀態</span>
                            <span>處罰紀錄</span>
                            <a href="#">查看</a>
                        </li>
                        <li>
                            <span>會員編號</span>
                            <span>會員名稱</span>
                            <span>Email</span>
                            <span>會員身分</span>
                            <span>會員狀態</span>
                            <span>處罰紀錄</span>
                            <a href="#">查看</a>
                        </li>
                        <li>
                            <span>會員編號</span>
                            <span>會員名稱</span>
                            <span>Email</span>
                            <span>會員身分</span>
                            <span>會員狀態</span>
                            <span>處罰紀錄</span>
                            <a href="#">查看</a>
                        </li>
                        <li>
                            <span>會員編號</span>
                            <span>會員名稱</span>
                            <span>Email</span>
                            <span>會員身分</span>
                            <span>會員狀態</span>
                            <span>處罰紀錄</span>
                            <a href="#">查看</a>
                        </li>
                        <li>
                            <span>會員編號</span>
                            <span>會員名稱</span>
                            <span>Email</span>
                            <span>會員身分</span>
                            <span>會員狀態</span>
                            <span>處罰紀錄</span>
                            <a href="#">查看</a>
                        </li>
                        <li>
                            <span>會員編號</span>
                            <span>會員名稱</span>
                            <span>Email</span>
                            <span>會員身分</span>
                            <span>會員狀態</span>
                            <span>處罰紀錄</span>
                            <a href="#">查看</a>
                        </li>
                        <li>
                            <span>會員編號</span>
                            <span>會員名稱</span>
                            <span>Email</span>
                            <span>會員身分</span>
                            <span>會員狀態</span>
                            <span>處罰紀錄</span>
                            <a href="#">查看</a>
                        </li>
                    </ul>
                </div>
            
        </div>
</body>
    <script src="js/chat/event.js"></script>
</html>