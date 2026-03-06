const userCh = document.getElementById("userCh");
const cmtCh = document.getElementById("cmtCh");
const result = document.getElementById("result");

let countWin = Number(localStorage.getItem("countWin")) || 0;
let countLoss = Number(localStorage.getItem("countLoss")) || 0;
let countDraw = Number(localStorage.getItem("countDraw")) || 0;

const choice =["Rock", "Paper", "Scissors"];
function playGame(userChoice){
    
    
    userCh.innerText =userChoice;
    let random = Math.floor(Math.random()*3);
    let cmtChoice = choice[random];

    cmtCh.innerText = cmtChoice;

    console.log("User Choice : " ,userChoice );
    console.log("Computer Choice : " ,cmtChoice );

    if(userChoice===cmtChoice){
        result.innerText="Draw";
        countDraw++;
        localStorage.setItem("countDraw", countDraw);
    }
    else if(userChoice==="Rock" && cmtChoice==="Scissors" ||
         userChoice==="Scissors" && cmtChoice==="Paper" ||
         userChoice==="Paper" && cmtChoice==="Rock")
         {
        result.innerText="You Won";

        countWin++;
        localStorage.setItem("countWin", countWin);
    }
    else{
        result.innerText ="You Loss"
        countLoss++;
        localStorage.setItem("countLoss", countLoss);
    }

}

function showHistory(){

    const box = document.getElementById("historyBox");

    document.getElementById("winCount").innerText = countWin;
    document.getElementById("lossCount").innerText = countLoss;
    document.getElementById("drawCount").innerText = countDraw;

    box.style.display = "inline";

}
function reset(){
    localStorage.clear();
}