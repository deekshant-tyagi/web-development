const hour = document.querySelector(".hour");
const minutes = document.querySelector(".min");
const seconds = document.querySelector(".sec");

const setClock=()=>{
    let day = new Date();
    let hh = day.getHours()*30;
    let mm = day.getMinutes()*6;
    let ss = day.getSeconds()*6;


    hour.style.transform =`rotateZ(${hh+mm/12}deg)`;
    minutes.style.transform =`rotateZ(${mm}deg)`;
    seconds.style.transform =`rotateZ(${ss}deg)`;
}


setInterval(() => {
    setClock();
}, 1000);

let currentTheme = "dark";

const switchTheme=(evt)=>{
    const switchBtn = evt.target;
    if(switchBtn.textContent.toLowerCase()==="light"){
        switchBtn.textContent = "dark";
        document.documentElement.setAttribute("data-theme","dark");
    }
    else{
        switchBtn.textContent = "light";
        document.documentElement.setAttribute("data-theme","light");
    }
}



const swithModeButton = document.querySelector(".switchButton");
swithModeButton.addEventListener("click",switchTheme,false);


if(currentTheme){
    document.documentElement.setAttribute("data-theme",currentTheme);
    switchBtn.textContent = currentTheme;
}