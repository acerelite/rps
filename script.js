function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(choiceSelected) {
  const computerSelection = getComputerChoice();
  const playerSelection = choiceSelected.target.innerText;

  if (playerSelection === computerSelection) {
    updateGame("tie", playerSelection, computerSelection, true);
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    playerScore++;
    updateGame("player", playerSelection, computerSelection);
  } else {
    computerScore++;
    updateGame("computer", playerSelection, computerSelection);
  }
}

function updateGame(winner, playerSelection, computerSelection, isTie = false) {
  displayRoundResult(winner, playerSelection, computerSelection);
  displayRoundChoices(playerSelection, computerSelection);
  if (!isTie) updateScoreboard();
  checkScore();
}

function displayRoundResult(result, playerSelection, computerSelection) {
  const resultDisplay = document.createElement("p");

  if (result === "player") {
    resultDisplay.textContent = `Player Won! ${playerSelection} beats ${computerSelection}`;
  } else if (result === "computer") {
    resultDisplay.textContent = `Computer Won! ${computerSelection} beats ${playerSelection}`;
  } else {
    resultDisplay.textContent = "It's a tie!";
  }

  gameLog.appendChild(resultDisplay);
}

function displayRoundChoices(player, computer) {
  playerChoice.textContent = player;
  computerChoice.textContent = computer;
}

function updateScoreboard() {
  playerScoreDisplay.textContent = playerScore;
  compScoreDisplay.textContent = computerScore;
}

function checkScore() {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      winner.textContent = "PLAYER";
    } else if (computerScore > playerScore) {
      winner.textContent = "COMPUTER";
    } else {
      winner.textContent = "ERROR";
    }
    disableChoices();
  }
}

function disableChoices() {
  choices.forEach((choice) => choice.setAttribute("disabled", true));
  winnerDisplay.style.visibility = "visible";
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = "0";
  compScoreDisplay.textContent = "0";
  playerChoice.textContent = "";
  computerChoice.textContent = "";
  winner.textContent = "";
  while (gameLog.firstChild) {
    gameLog.removeChild(gameLog.firstChild);
  }
  choices.forEach((choice) => choice.removeAttribute("disabled"));
  winnerDisplay.style.visibility = "hidden";
}

let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.querySelector("#playerScore");
const compScoreDisplay = document.querySelector("#computerScore");

const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");
const gameLog = document.querySelector("#gameLog");
const winnerDisplay = document.querySelector("#winnerDisplay");
const winner = document.querySelector("#winner");
const resetBtn = document.querySelector("#reset");

const container = document.querySelector("body");
const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => choice.addEventListener("click", playRound));
resetBtn.addEventListener("click", resetGame);
