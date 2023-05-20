const ArticleSearch = document.getElementById('article-search');
const memberArticleSearchBtn = document.getElementById('member-article-search-btn');
const memberArticleSearch = document.getElementById('member-article-search');
const articleEdit = document.getElementById('article-edit');
const articleCreate = document.getElementById('article-create');
const memberArticleBtn = document.getElementById('member-article-btn');
const memberArticleEdit = document.getElementById('member-article-edit');
const ArticleCreateBtn = document.getElementById('article-create-btn');
const generalInfo = document.getElementById('general-info');
const eventInfo = document.getElementById('event-info');
const elementsToHide = document.querySelectorAll('.hide-bar');
const backBtn = document.getElementById('back-btn');
const backBtn2 = document.getElementById('back-btn2');
const backBtn3 = document.getElementById('back-btn3');

// 点击memberdataBtn时显示eventData，隐藏eventDataSearch
memberArticleBtn.addEventListener('click', function() {
    articleEdit.style.display = 'block';
    ArticleSearch.style.display = 'none';
  });

  // 点击backBtn时显示eventDataSearch，隐藏
backBtn.addEventListener('click', function() {
    ArticleSearch.style.display = 'block';
    articleEdit.style.display = 'none';
    articleCreate.style.display = 'none';
    
  });

  // 点击addBtn时显示eventDataSearch，隐藏
  ArticleCreateBtn.addEventListener('click', function() {
    articleCreate.style.display = 'block';
    ArticleSearch.style.display = 'none';  
  });

    // 点击backBtn时显示eventDataSearch，隐藏
backBtn2.addEventListener('click', function() {
    ArticleSearch.style.display = 'block';
    articleCreate.style.display = 'none'; 
  });

  // 点击general-info时显示search-bar，隐藏mallBar
  generalInfo.addEventListener('click', function() {

    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = 'none';
    }
    memberArticleSearch.style.display = 'none';
    ArticleSearch.style.display = 'block';
  });

  // 点击eventInfo时显示search-bar，隐藏mallBar
  eventInfo.addEventListener('click', function() {
    
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = 'none';
    }
    ArticleSearch.style.display = 'none';
    memberArticleSearch.style.display = 'block';
  });

//   点击memberdataBtn时显示eventData，隐藏eventDataSearch
memberArticleSearchBtn.addEventListener('click', function() {
    memberArticleEdit.style.display = 'block';
    memberArticleSearch.style.display = 'none';
  });

      // 点击backBtn时显示eventDataSearch，隐藏
backBtn3.addEventListener('click', function() {
    memberArticleSearch.style.display = 'block';
    memberArticleEdit.style.display = 'none'; 
  });