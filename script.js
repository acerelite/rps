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

function playRound(e) {
    let computerSelection = getComputerChoice();
    let playerSelection = e.target.textContent;
    playerSelection = format(playerSelection);

    if (playerSelection == computerSelection) {
        updateBoard(playerSelection, computerSelection);
    } else if (playerSelection == "Rock" && computerSelection == "Scissors" ||
        playerSelection == "Paper" && computerSelection == "Rock" ||
        playerSelection == "Scissors" && computerSelection == "Paper") {
        updateBoard(playerSelection, computerSelection, 'player');
    } else {
        updateBoard(playerSelection, computerSelection, 'computer');
    }
}

function updateScore(winner) {
    if (winner == 'player') {
        playerScore++;
        playerScoreDisp.textContent = playerScore;
    } else {
        computerScore++;
        computerScoreDisp.textContent = computerScore;
    }
    checkGameStatus();
}

function checkGameStatus() {
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            setTimeout(function () {
                alert('Player Won');
            }, 0)

        } else {
            setTimeout(function () {
                alert('Computer Won');
            }, 0)

        }

        btnSelections.forEach(btn => btn.disabled = true);
    }
}

function updateBoard(playerSelection, computerSelection, winner = null) {
    if (winner == null) {
        updateSelectDisplay(playerSelection, computerSelection);
        updateResultDisplay(playerSelection, computerSelection, winner);
        return;
    }

    if (winner == 'player') {
        updateScore('player');
        updateResultDisplay(playerSelection, computerSelection, winner);

    } else if (winner == 'computer') {
        updateScore('computer');
        updateResultDisplay(playerSelection, computerSelection, winner);
    }

    updateSelectDisplay(playerSelection, computerSelection);

}

function updateResultDisplay(playerSelection, computerSelection, winner) {
    let roundResultDisp = document.createElement('p');
    switch (winner) {
        case null:
            roundResultDisp.textContent = "It's a tie! "
            break;
        case 'player':
            roundResultDisp.textContent = `You Won! ${playerSelection} beats ${computerSelection}!`;
            break;
        case 'computer':
            roundResultDisp.textContent = `You Lose! ${computerSelection} beats ${playerSelection}!`;
            break;
        default:
            roundResultDisp.textContent = 'ERROR'
    }
    resultDisplay.append(roundResultDisp);
}

function updateSelectDisplay(playerSelection, computerSelection) {
    playerSelectDisp.textContent = playerSelection;
    computerSelectDisp.textContent = computerSelection;
}

let playerScore = 0;
let computerScore = 0;
let btnSelections = document.querySelectorAll('button');
let resultDisplay = document.querySelector('#roundResult')
let playerScoreDisp = document.querySelector('#playerScore');
let computerScoreDisp = document.querySelector('#computerScore');

let playerSelectDisp = document.querySelector('.playerSelect');
let computerSelectDisp = document.querySelector('.computerSelect');

btnSelections.forEach(btn => btn.addEventListener('click', playRound));
