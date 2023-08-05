// GAME

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = 'tie';
  }
  if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK')
  ) {
    playerScore++;
    roundWinner = 'player';
  } 
  if (
    (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
    (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
    (computerSelection === "PAPER" && playerSelection === 'ROCK') 
  ) {
    computerScore++;
    roundWinner = 'computer';
  }
  updateScoreMessage(roundWinner, playerSelection, computerSelection);
}

function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'ROCK';
    case 1:
      return 'PAPER';
    case 2:
      return 'SCISSORS';
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

// DOM Manipulation & UI
const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
const scoreInfo = document.getElementById('scoreInfo');
const scoreMessage = document.getElementById('scoreMessage');
const playerScorePara = document.getElementById('playerScore');
const computerScorePara = document.getElementById('computerScore');
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');
const endgameModal = document.getElementById('endgameModal');
const endgameMsg = document.getElementById('endgameMsg');
const overlay = document.getElementById('overlay');
const restartButton = document.getElementById('restartButton');

rockButton.addEventListener('click', () => handleClick('ROCK'));
paperButton.addEventListener('click', () => handleClick('PAPER'));
scissorsButton.addEventListener('click', () => handleClick('SCISSORS'));
restartButton.addEventListener('click', restartGame);
overlay.addEventListener('click', closeEndgameModal);

function handleClick(playerSelection) {
  if (isGameOver()) {
    openEndgameModal();
    return;
  }

  const computerSelection = getRandomChoice();
  playRound(playerSelection, computerSelection);
  updateChoices(playerSelection,computerSelection);
  updateScore();

  if (isGameOver()) {
    openEndgameModal();
    setFinalMessage();
  }
}

function updateChoices(playerSelection,computerSelection) {
  switch (playerSelection) {
    case 'ROCK':
      playerSign.textContent = 'ROCK';
      break;
    case 'PAPER':
      playerSign.textContent = 'PAPER';
      break;
    case 'SCISSORS':
      playerSign.textContent = 'SCISSORS';
      break;
  }

  switch (computerSelection) {
    case 'ROCK':
      computerSign.textContent = 'ROCK';
      break;
    case 'PAPER':
      computerSign.textContent = 'PAPER';
      break;
    case 'SCISSORS':
      computerSign.textContent = 'SCISSORS';
      break;
  }
}

function updateScore() {
  if (roundWinner === 'tie') {
    scoreInfo.textContent = "It's a tie";
  } else if (roundWinner === 'player') {
    scoreInfo.textContent = 'You won!';
  } else if (roundWinner === 'computer') {
    scoreInfo.textContent = 'You lost!';
  }
  
  playerScorePara.textContent = `Player: ${playerScore}`;
  computerScorePara.textContent = `Computer: ${computerScore}`;
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
  if (winner === 'player') {
    scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} beats ${computerSelection.toLowerCase()}`;
    return;
  }
  if (winner === 'computer') {
    scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} is beaten by ${computerSelection.toLowerCase()}`;
    return;
  }

  scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} ties with ${computerSelection.toLowerCase()}`;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function openEndgameModal() {
  endgameModal.classList.add('active');
  overlay.classList.add('active');
}

function closeEndgameModal() {
  endgameModal.classList.remove('active');
  overlay.classList.remove('active');
}

function setFinalMessage() {
  return playerScore > computerScore
    ? (endgameMsg.textContent = 'You won!')
    : (endgameMsg.textContent = 'You lost...')
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  scoreInfo.textContent = 'Choose wisely';
  scoreMessage.textContent = 'First to score 5 points wins the game!';
  playerScorePara.textContent = 'Player: 0';
  computerScorePara.textContent = 'Computer: 0';
  playerSign.textContent = ' ? ';
  computerSign.textContent = ' ? ';
  endgameModal.classList.remove('active');
  overlay.classList.remove('active');
}