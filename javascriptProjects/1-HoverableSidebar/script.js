let sideBar = document.querySelector(".sideBar");
let closeBtn = document.querySelector("#btn"); // hamburger btn
let searchBtn = document.querySelector(".bx-search");


closeBtn.addEventListener("click",()=>{
    sideBar.classList.toggle('open');
    menuBtnChanger();
})

function menuBtnChanger(){
    if(sideBar.classList.contains('open')){
        closeBtn.classList.replace("bx-menu","bx-menu-alt-right");
    }
    else{
        closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
    }
}

searchBtn.addEventListener("click",()=>{
    sideBar.classList.toggle('open');
    menuBtnChanger();
})