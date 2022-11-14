const CHOICES = ["rock", "paper", "scissors"]

function getComputerChoice(CHOICES){
    let random = Math.floor(Math.random()*CHOICES.length) 
    return CHOICES[random]
}

function getPlayerChoice() {
    let choice = prompt("Choose: rock, paper, scissors").toLowerCase()
    return choice
}


function playRound() {
    let computer = getComputerChoice(CHOICES);
    let player = getPlayerChoice();
    if (computer === "scissors" && player === "paper" || computer === "rock" && player === "scissors" || computer === "paper" && player === "rock") {
        console.log(`You lose! ${computer.toUpperCase()} beats ${player.toUpperCase()}.`)
    } else if (computer === player){
        console.log("It's a tie!")
    } else if(computer === "paper" && player === "scissors" || computer === "scissors" && player === "rock" || computer === "rock" && player === "paper"){
        console.log(`You win! ${player.toUpperCase()} beats ${computer.toUpperCase()}.`)
    }

}

function game() {
    let rounds = 0;
    while (rounds < 5) {
        playRound();
        rounds ++;
    }
}

game()