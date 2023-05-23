// 获取元素
const generalInfo = document.getElementById('general-info');
const eventInfo = document.getElementById('event-info');
const mallDataBar = document.getElementById('malldata-bar');
const mallBar = document.getElementById('mall-bar');
const generalSearch = document.getElementById('general-search');
const generalEditBar = document.getElementById('generalEdit-bar');
const chatroomBtn = document.getElementById('chatroom-btn');
const chatroomData = document.getElementById('chatroom-data');
const chatroomSearch = document.getElementById('chatroomdata-search');


// 点击general-search时显示generalEdit-bar，隐藏mallDataBar
generalSearch.addEventListener('click', function() {
    generalEditBar.style.display = 'block';
    mallDataBar.style.display = 'none';
  });

// 点击general-info时显示search-bar，隐藏mallBar
// generalInfo.addEventListener('click', function() {
//  mallDataBar.style.display = 'block';
//   mallBar.style.display = 'none';
//   generalEditBar.style.display = 'none';
// });

// 点击event-info时显示mallBar，隐藏mallDataBar
// eventInfo.addEventListener('click', function() {
//   mallBar.style.display = 'block';
//   mallDataBar.style.display = 'none';
//   generalEditBar.style.display = 'none';
// });



// 点击chatroom-btn时显示chatroom-data，隐藏chatroomdata-search
// chatroomBtn.addEventListener('click', function() {
//     chatroomData.style.display = 'block';
//     chatroomSearch.style.display = 'none';
// });

generalSearch.addEventListener('click', function() {
  chatroomData.style.display = 'block';
  chatroomSearch.style.display = 'none';
});