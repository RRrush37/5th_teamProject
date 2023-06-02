// 获取元素
const generalInfo = document.getElementById('general-info');
const eventInfo = document.getElementById('event-info');
const mallDataBar = document.getElementById('malldata-bar');
const mallBar = document.getElementById('mall-bar');
const mallAddBar = document.getElementById('malladd-bar');
const generalSearch = document.getElementById('general-search');
const generalEditBar = document.getElementById('generalEdit-bar');
const mallcreateBtn = document.getElementById('mallcreate-btn');
const backBtn = document.getElementById('back-btn');
const backBtn2 = document.getElementById('back-btn2');


// 点击general-search时显示generalEdit-bar，隐藏mallDataBar
generalSearch.addEventListener('click', function() {
    generalEditBar.style.display = 'block';
    mallDataBar.style.display = 'none';
  });

// 点击general-info时显示search-bar，隐藏mallBar
generalInfo.addEventListener('click', function() {
 mallDataBar.style.display = 'block';
  mallBar.style.display = 'none';
  generalEditBar.style.display = 'none';
});

// 点击event-info时显示mallBar，隐藏mallDataBar
eventInfo.addEventListener('click', function() {
  mallBar.style.display = 'block';
  mallDataBar.style.display = 'none';
  generalEditBar.style.display = 'none';
});

// 点击backBtn时显示memberText，隐藏memeberData
backBtn.addEventListener('click', function() {
  mallDataBar.style.display = 'block';
  generalEditBar.style.display = 'none';
});

generalInfo.addEventListener('click', function(){
  eventInfo.classList.remove("on");
  generalInfo.classList.add("on");
});

eventInfo.addEventListener('click', function(){
  eventInfo.classList.add("on");
  generalInfo.classList.remove("on");
})

// 点击general-search时显示generalEdit-bar，隐藏mallDataBar
mallcreateBtn.addEventListener('click', function() {
  mallAddBar.style.display = 'block';
  mallDataBar.style.display = 'none';
});

// 点击backBtn时显示memberText，隐藏memeberData
backBtn2.addEventListener('click', function() {
  mallDataBar.style.display = 'block';
  mallAddBar.style.display = 'none';
});



