const generalInfo = document.getElementById('general-info');
const eventInfo = document.getElementById('event-info');
const draw = document.getElementById('draw');
const werewolf = document.getElementById('werewolf');

  // 点击general-info时显示search-bar，隐藏mallBar
  generalInfo.addEventListener('click', function() {

    werewolf.style.display = 'none';
    draw.style.display = 'block';
  });

  // 点击eventInfo时显示search-bar，隐藏mallBar
  eventInfo.addEventListener('click', function() {

    draw.style.display = 'none';
    werewolf.style.display = 'block';
  });

  generalInfo.addEventListener('click', function(){
    eventInfo.classList.remove("on");
    generalInfo.classList.add("on");
  });
  
  eventInfo.addEventListener('click', function(){
    eventInfo.classList.add("on");
    generalInfo.classList.remove("on");
  })
  