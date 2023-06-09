const eventDataSearch = document.getElementById('eventdata-search');
const eventDataBtn = document.getElementById('eventdata-btn');
const eventData = document.getElementById('eventdata');
const backBtn = document.getElementById('back-btn');
const backBtn2 = document.getElementById('back-btn2');
const backBtn3 = document.getElementById('back-btn3');
const eventCreateBtn = document.getElementById('eventcreate-btn');
const eventDataCreate = document.getElementById('eventdata-create');
const generalInfo = document.getElementById('general-info');
// const eventInfo = document.getElementById('event-info');
const elementsToHide = document.querySelectorAll('.hide-bar');
const memberDataSearch = document.getElementById('memberdata-search');
const memberData = document.getElementById('memberdata');
const memberDataBtn = document.getElementById('memberdata-btn');

// 点击memberdataBtn时显示eventData，隐藏eventDataSearch
// eventDataBtn.addEventListener('click', function() {
//     eventData.style.display = 'block';
//     eventDataSearch.style.display = 'none';
//   });

// 点击backBtn时显示eventDataSearch，隐藏
backBtn.addEventListener('click', function() {
    eventDataSearch.style.display = 'block';
    eventDataCreate.style.display = 'none';
    eventData.style.display = 'none';
    
  });

// 点击eventCreateBtn时显示eventDataCreate，隐藏eventDataSearch
eventCreateBtn.addEventListener('click', function() {
    eventDataCreate.style.display = 'block';
    eventDataSearch.style.display = 'none';
  });

  // 点击backBtn时显示eventDataSearch，隐藏
backBtn2.addEventListener('click', function() {
    eventDataSearch.style.display = 'block';
    eventDataCreate.style.display = 'none';
    
  });

   // 点击general-info时显示search-bar，隐藏mallBar
   generalInfo.addEventListener('click', function() {

    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = 'none';
    }
    memberDataSearch.style.display = 'none';
    eventDataSearch.style.display = 'block';
  });

  // 点击eventInfo时显示search-bar，隐藏mallBar
  // eventInfo.addEventListener('click', function() {
    
  //   for (var i = 0; i < elementsToHide.length; i++) {
  //     elementsToHide[i].style.display = 'none';
  //   }
  //   eventDataSearch.style.display = 'none';
  //   memberDataSearch.style.display = 'block';
  // });

  // 点击memberdataBtn时显示memberData，隐藏memberData
memberDataBtn.addEventListener('click', function() {
    
    memberData.style.display = 'block';
    memberDataSearch.style.display = 'none';
  });

    // 点击backBtn时显示eventDataSearch，隐藏
backBtn3.addEventListener('click', function() {
    memberDataSearch.style.display = 'block';
    memberData.style.display = 'none';
    
  });

  generalInfo.addEventListener('click', function(){
    // eventInfo.classList.remove("on");
    generalInfo.classList.add("on");
  });
  
  // eventInfo.addEventListener('click', function(){
  //   eventInfo.classList.add("on");
  //   generalInfo.classList.remove("on");
  // })
  
