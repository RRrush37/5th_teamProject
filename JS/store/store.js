
let activity_lightbox = document.getElementsByClassName("activity_lightbox")[0];
let close1 = document.getElementsByClassName("close1")[0];

close1.addEventListener("click", function(){
    activity_lightbox.classList.add("activity_none");
});

activity_lightbox.addEventListener("click", function(){
  this.classList.add("activity_none");
});

activity_lightbox.querySelector("activity").addEventListener("click", function(e){
  e.stopPropagation();
});
