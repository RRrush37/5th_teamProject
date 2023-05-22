    let nav_hamburger_box_el = document.getElementsByClassName("nav_hamburger_box")[0];
    let navbar_nav = document.getElementsByClassName("navbar_nav")[0];
    let member = document.getElementsByClassName("member")[0];
    let member_logout = document.getElementsByClassName("member_logout")[0];

    nav_hamburger_box_el.addEventListener("click", function(e){
        e.stopPropagation();
        navbar_nav.classList.toggle("none");
    })

    member.addEventListener("click", function(e){
        e.stopPropagation();
        member_logout.classList.toggle("none");
    })

    window.addEventListener("click", function(){
        navbar_nav.classList.add("none");
        member_logout.classList.add("none");
    })