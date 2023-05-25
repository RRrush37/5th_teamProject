const chatroomSearch = document.getElementById('chatroomdata-search');
const chatroomDataBtn = document.getElementById('chatroomdata-btn');
const chatroomData = document.getElementById('chatroom-data');
const chatroomCreate = document.getElementById('chatroom-create');
const chatroomCreateBtn = document.getElementById('chatroom-create-btn');
const backBtn = document.getElementById('back-btn');
const backBtn2 = document.getElementById('back-btn2');

// 点击memberdataBtn时显示eventData，隐藏eventDataSearch
chatroomDataBtn.addEventListener('click', function() {
    chatroomData.style.display = 'block';
    chatroomSearch.style.display = 'none';
  });

  // 点击backBtn时显示eventDataSearch，隐藏
backBtn.addEventListener('click', function() {
    chatroomSearch.style.display = 'block';
    chatroomCreate.style.display = 'none';
    chatroomData.style.display = 'none';
    
  });

   // 点击addBtn时显示eventDataSearch，隐藏
   chatroomCreateBtn.addEventListener('click', function() {
    chatroomSearch.style.display = 'none';
    chatroomCreate.style.display = 'block';
    chatroomData.style.display = 'none';
    
  });

   // 点击backBtn时显示eventDataSearch，隐藏
backBtn2.addEventListener('click', function() {
    chatroomSearch.style.display = 'block';
    chatroomCreate.style.display = 'none';
    chatroomData.style.display = 'none';
    
  });