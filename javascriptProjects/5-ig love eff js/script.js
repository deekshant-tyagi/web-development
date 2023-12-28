let containerrr = document.querySelector("#container")

let lobhh = document.querySelector("i");

containerrr.addEventListener("dblclick",function(){
    lobhh.style.opacity = "0.8"
    lobhh.style.transform = "translate(-50%,-50%) scale(1)"

    setTimeout(function () {
        lobhh.style.opacity = "0"
    }, 1000);
    setTimeout(function() {
        lobhh.style.transform = "translate(-50%,-50%) scale(0)"
    }, 2000);
})