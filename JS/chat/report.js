const reportMemberData = document.getElementById('report-memberdata');
const reportSearch = document.getElementById('report-search');
const reportSearchBtn = document.getElementById('report-search-btn');
const backBtn = document.getElementById('back-btn');

// 点击memberdataBtn时显示memberData，隐藏memberData
reportSearchBtn.addEventListener('click', function() {
    reportMemberData.style.display = 'block';
    reportSearch.style.display = 'none';
  });

  // 点击backBtn时显示memberText，隐藏memeberData
backBtn.addEventListener('click', function() {
    reportSearch.style.display = 'block';
    reportMemberData.style.display = 'none';
  });