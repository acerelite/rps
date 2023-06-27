function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
    return null;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    console.log(`Player Won! ${playerSelection} beats ${computerSelection}`);
    return true;
  } else {
    console.log(`Computer Won! ${computerSelection} beats ${playerSelection}`);
    return false;
  }
}

function getPlayerChoice() {
  let userInput = "";
  do {
    userInput = prompt("Enter (Rock - Paper - Scissors)");
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors"
    ) {
      return userInput.charAt(0).toUpperCase() + userInput.substring(1);
    }
  } while (true);
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let gameCounter = 5;
  do {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    const hasWon = playRound(playerSelection, computerSelection);

    if (hasWon) {
      playerScore++;
    } else if (hasWon === false) {
      computerScore++;
    }
    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
    console.log("---------------------------------------------------");
    gameCounter--;
  } while (gameCounter > 0);

  if (playerScore > computerScore) {
    console.log("WINNER: Player");
  } else if (computerScore > playerScore) {
    console.log("WINNER: Computer");
  } else {
    console.log("TIE: NO WINNER");
  }
}

game();
