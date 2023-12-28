let mainn = document.querySelector(".main");
let crsrr = document.querySelector(".cursor");

mainn.addEventListener("mousemove",function(dets){
    crsrr.style.left = dets.x+'px'
    crsrr.style.top = dets.y+'px'
})