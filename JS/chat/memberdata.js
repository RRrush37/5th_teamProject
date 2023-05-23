const memeberDataSearch = document.getElementById('memberdata-search');
const memberDataBtn = document.getElementById('memberdata-btn');
const memberData = document.getElementById('memberdata');
const backBtn = document.getElementById('back-btn');


// 点击memberdataBtn时显示memberData，隐藏memberData
memberDataBtn.addEventListener('click', function() {
    memberData.style.display = 'block';
    memeberDataSearch.style.display = 'none';
  });

// 点击backBtn时显示memberText，隐藏memeberData
backBtn.addEventListener('click', function() {
    memeberDataSearch.style.display = 'block';
    memberData.style.display = 'none';
  });
