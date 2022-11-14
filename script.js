const CHOICES = ["rock", "paper", "scissors"]

const playerPoints = document.querySelector('#pscore');
const computerPoints = document.querySelector('#cscore');

let cscore = 0;
let pscore = 0;

let butts = document.querySelectorAll('button');
for (x = 0; x < butts.length; x++) {
    butts[x].addEventListener('click', function(event){
    let player = (event.target.innerHTML);
    playRound(player.toLowerCase(),getComputerChoice(CHOICES));
    })}


function getComputerChoice(CHOICES){
    let random = Math.floor(Math.random()*CHOICES.length) 
    return CHOICES[random]
}


function playRound(player,computer) {

    if (computer === "scissors" && player === "paper" || computer === "rock" && player === "scissors" || computer === "paper" && player === "rock") {

        document.querySelector("#message").innerHTML = `You lose! ${computer.toUpperCase()} beats ${player.toUpperCase()}.`

        computerPoints.textContent = ++cscore;

        document.querySelector("#cscore").innerHTML = `${cscore}`



    } else if (computer === player){

        document.querySelector("#message").innerHTML = "It's a tie!"

    } else if(computer === "paper" && player === "scissors" || computer === "scissors" && player === "rock" || computer === "rock" && player === "paper"){

        document.querySelector("#message").innerHTML = `You win! ${player.toUpperCase()} beats ${computer.toUpperCase()}.`;

        playerPoints.textContent = ++pscore;

        document.querySelector("#pscore").innerHTML = `${pscore}`

    }
    checkWinner();

}

function checkWinner() {
    if (pscore ===5) {
        document.querySelector("#message").innerHTML = `You WIN the game! Congratulations!`
        toggler()
    } else if (cscore ===5) {
        document.querySelector("#message").innerHTML = `You LOSE, BOO YOU SUCK!`
        toggler()
    }

}

function toggler(){
    document.querySelector("#body").classList.toggle("gameover");
    }
