<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>商城資料查詢</title>
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
                <span id="general-info">一般商品資料查詢</span>
                <span id="event-info">活動商品資料查詢</span>
            </div>
            <div id="malldata-bar" class="search-bar">
                <h2>商城資料查詢</h2>
                <table>
                    <tr>
                        <td>商品編號</td>
                        <td><input type="text"></td>
                    </tr>
                    <tr>
                        <td>商品類別</td>
                        <td>
                            <select>
                                <option selected>客製化角色裝備</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>商品狀態</td>
                        <td><input type="text"></td>
                    </tr>
                    <tr>
                        <td>商品狀態</td>
                        <td>
                            <select>
                                <option selected>上架中</option>
                                <option>未上架</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>銷售時間</td>
                        <td>
                            <input type="date" id="myDate" name="myDate" value="2023-01-01">
                        </td>
                    </tr>
                </table>
                <button id="general-search" class="search-btn">查看</button>
            </div>
            <div id="generalEdit-bar" class="hide-bar">
                <h2>一般商品資料編輯</h2>
                <table>
                    <tr>
                        <td>商品編號</td>
                        <td>111111111111111</td>
                    </tr>
                    <td>商品類別</td>
                    <td>1</td>
                    <tr>
                        <td>商品狀態</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>商品圖片</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>商品紀念時間</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>商品原價格</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>商品折扣價格</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>活動消息說明</td>
                        <td>1</td>
                    </tr>
                </table>
                <button class="search-btn">變更</button>
            </div>
            <div id="mall-bar" class="hide-bar">
                <h2>活動商品資料編輯</h2>
                <table>
                    <tr>
                        <td>商品編號</td>
                        <td>111111111111111</td>
                    </tr>
                    <td>商品類別</td>
                    <td>1</td>
                    <tr>
                        <td>商品狀態</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>商品圖片</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>商品紀念時間</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>商品原價格</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>商品折扣價格</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>活動消息說明</td>
                        <td>1</td>
                    </tr>
                </table>
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

        </div>
</body>
<script src="JS/chat/script.js"></script>

</html>