let boxes =  document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");
let turn0 = true;
let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}




boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        if(turn0 === true){
            box.innerText = "0";
            box.style.color = "#b0413e";
            turn0 = false;
            // count++;

        }
        else{
            box.textContent = "X";
            box.style.color = "green";
            turn0 = true;
            // count++;

        }
        count++;
        box.disabled = true; // to stop alternate changing.
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
           gameDraw();
        }
        })
})



const gameDraw = () => {
    msg.innerText = `Game Draw`
    msgContainer.classList.remove("hide");
    disabledBoxes();
}




const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulation Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if( pos1 != "" && pos2 != "" && pos3 != ""){
        if( pos1 === pos2 && pos2 === pos3){
            showWinner(pos1);
            return true;
        }
    }
    }
}

resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);


let dialogg = document.querySelector(".dialog");

