let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const UpdateUserScore = document.querySelector("#userScore")
const UpdateCompScore = document.querySelector("#compScore")


// UserChoice
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const UserChoice = choice.getAttribute("id");
        playGame(UserChoice);

    })
})

// generating random computer choice.
const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    // if we want no from 0 to 2 then we mul random func with 3 if we want no from 0 to 9 then we mul with 10.
    const rndmIdx = Math.floor(Math.random()*3);
    return options[rndmIdx];
}

const gameDraw = ()=>{
    msg.innerText = "Game was Draw. Play again."
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
    userScore++;
    UpdateUserScore.innerText = userScore
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor = "green"
    }
    else{
    compScore++;
    UpdateCompScore.innerText = compScore;
    msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}`
    msg.style.backgroundColor = "red"
    }
} 

const playGame = (UserChoice)=>{
    const compChoice = genCompChoice();
    if(UserChoice === compChoice){
        gameDraw();
    }
    else{
        let userWin = true;
        // we can also use ternary operator 
        // let userWin = true;
        // if (userChoice === "rock") {
        //   //scissors, paper
        //   userWin = compChoice === "paper" ? false : true;
        // } else if (userChoice === "paper") {
        //   //rock, scissors
        //   userWin = compChoice === "scissors" ? false : true;
        // } else {
        //   //rock, paper
        //   userWin = compChoice === "rock" ? false : true;
        // }


        // using simple if else.
        if(UserChoice === "rock" && compChoice === "paper")// compChoice paper,scissors
        userWin = false;
        else if(UserChoice === "rock" && compChoice === "scissors")
        userWin = true;
        else if(UserChoice==="paper" && compChoice==="rock")//compChoice rock scissors
        userWin=true;
        else if(UserChoice==="paper" && compChoice === "scissors")
        userWin = false;
        else if(UserChoice === "scissors" && compChoice === "rock")
        userWin = false
        else
        userWin = true;
    showWinner(userWin,UserChoice,compChoice);
    }
}