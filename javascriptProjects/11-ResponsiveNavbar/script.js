const toggleBtn = document.querySelector(".menu")
const toggleBtnIcon = document.querySelector(".menu i")
const dropDown = document.querySelector(".dropDownMenu")

toggleBtn.onclick = function(){
    dropDown.classList.toggle('open');
    // when we click on toggle it add open class when we again click in toggle then it removes the open class.
    const isOpen = dropDown.classList.contains('open');
    // toggleBtnIcon.classList=isOpen?"fa-solid fa-xmark":"fa-solid fa-bars";
    if(isOpen){
        toggleBtnIcon.classList="fa-solid fa-xmark"
    }
    else{
        toggleBtnIcon.classList="fa-solid fa-bars"
    }
}