

function getComputerChoice() {
    let rand = Math.round(Math.random() * 10)
    let str = ""
    if(rand % 2 == 0) {
        str = "Rock"
    }
    else if(rand % 3 ==0) {
        str = "Paper"
    }
    else {
        str = "Scissors"
    }
    console.log(rand)
    return str
}

function Round(playerSelection,computerSelection) {
    let result = ""
    let player = playerSelection.toLowerCase()
    let computer = computerSelection.toLowerCase()
    if(player == 'rock' & computer == 'rock') {
        result = "Its a DRAW!!!"
        return result
    }
    else if (player == "rock" & computer == "paper") {
        result = "Computer Wins!!!"
        return result
    }
    else if (player == "rock" & computer == "scissors") {
        result = "Player Wins!!!"
        return result
    }
    else if (player == "paper" & computer == "rock") {
        result = "Player Wins!!!"
        return result
    }
    else if (player == "paper" & computer == "paper") {
        result = "Its a Draw!!!"
        return result
    }
    else if (player == "paper" & computer == "scissors") {
        result = "Computer Wins!!!"
        return result
    }
    else if (player == "scissors" & computer == "rock") {
        result = "Computer Wins!!!"
        return result
    }
    else if (player == "scissors" & computer == "paper") {
        result = "Player Wins!!!"
        return result
    }
    else if (player == "scissors" & computer == "scissors") {
        result = "Its a Draw!!!"
        return result
    }
}

function game() {
    playerScore = 0
    computerScore = 0
    let computerSelection = getComputerChoice()
    let playerSelection = prompt("Choose Rock, Paper or Scissor")
    for (let round = 0;round<6;round++){
        result = Round(playerSelection,computerSelection)
        if(result == "Player Wins!!!") {
            playerScore++
        }
        else if(result == "Computer Wins!!!") {
            computerScore++
        }
    }
    console.log(`Player Score is ${playerScore} and Computer Score is ${computerScore}`)
}
console.log(game())