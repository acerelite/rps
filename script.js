function format(word) {
    return word.at(0).toUpperCase() + word.slice(1).toLowerCase();
}

function displayResult(playerScore, computerScore) {
    if (playerScore == computerScore) {
        console.log(`It's a TIE! Final Score: Player: ${playerScore} || Computer: ${computerScore}`);
    } else if (playerScore > computerScore) {
        console.log(`Player Won! Final Score: Player: ${playerScore} || Computer: ${computerScore}`);
    } else {
        console.log(`Computer Won! Final Score: Player: ${playerScore} || Computer: ${computerScore}`);
    }

}

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3));
    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Scissors";
        case 2:
            return "Paper";
        default:
            return "invalid choice";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = format(playerSelection)
    if (playerSelection == computerSelection) {
        console.log("It's a tie!");
        return "tie"
    } else if (playerSelection == "Rock" && computerSelection == "Scissors" ||
        playerSelection == "Paper" && computerSelection == "Rock" ||
        playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log(`You Won! ${playerSelection} beats ${computerSelection}!`)
        return "player";
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
        return "computer"
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let index = 0; index < 5; index++) {
        let playerSelection = prompt("ROCK | PAPER | SCISSORS");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result == "tie") {
            continue;
        } else if (result == "player") {
            playerScore++;
        } else {
            computerScore++;
        }
    }

    displayResult(playerScore, computerScore);
}

game();
