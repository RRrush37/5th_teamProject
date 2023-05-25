const userProfileBtns = document.querySelectorAll('.userprofile-btn');
const userProfileBtnsArray = Array.from(userProfileBtns);
const userTextALL = document.getElementById('usertext-all');
const chatRoomInside = document.getElementById('chatroom-inside');
const searchUser = document.getElementById('search-user_box');
let search_user = document.getElementById("search-user");
const searchUserBtn = document.getElementById('search-user-btn');


userProfileBtns.forEach(function(userProfileBtn) {
    userProfileBtn.addEventListener('click', function() {
      userTextALL.style.display = 'block';
      chatRoomInside.style.display = 'none';
    //   searchUser.style.display = 'none';
    });
  });
  
  searchUserBtn.addEventListener('click', function() {
    
    searchUser.classList.remove("none");
    // chatRoomInside.style.display = 'none';

    // userTextALL.style.display = 'none';
  });

  searchUser.addEventListener('click', function() {
    
    searchUser.classList.add("none");
    // chatRoomInside.style.display = 'none';

    // userTextALL.style.display = 'none';
  });

  search_user.addEventListener("click",function(e){
    e.stopPropagation();
  })
  
  document.addEventListener('click', function(e) {
    const isUserTextAllClicked = userTextALL.contains(e.target);
    const isUserProfileBtnClicked = userProfileBtnsArray.some(function(userProfileBtn) {
      return userProfileBtn.contains(e.target);
    });
    const isSearchUserClicked = searchUser.contains(e.target) || e.target === searchUserBtn;
  
    if (!isUserTextAllClicked && !isUserProfileBtnClicked) {
      userTextALL.style.display = 'none';
      chatRoomInside.style.display = 'block';
    }
  
    if (!isSearchUserClicked && e.target !== searchUserBtn) {
      searchUser.style.display = 'none';
    }
  });
  
  userTextALL.addEventListener('click', function(e) {
    e.stopPropagation();
  });
  


  


  