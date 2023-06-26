/* Write a function called getComputerChoice to randomly select 
'Rock', 'Paper' or 'Scissors'. */

/* Write a function that plays a single round of rock-paper-scissors, 
The function should take two parameters - the playerSelection and computerSelection -
and then return a string that declares the winner of the round like so:
 "You Lose! Paper beats Rock" */


// Function to generate computer's choice
function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // Convert player's selection to lowercase
  playerSelection = playerSelection.toLowerCase();

  // Check for a tie
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  // Check all possible player choices and determine the winner
  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      return 'You lose! Paper beats rock.';
    } else {
      return 'You win! Rock beats scissors.';
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      return 'You lose! Scissors beat paper.';
    } else {
      return 'You win! Paper beats rock.';
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      return 'You lose! Rock beats scissors.';
    } else {
      return 'You win! Scissors beat paper.';
    }
  } else {
    return 'Invalid selection. Please choose rock, paper, or scissors.';
  }
}

// Function to start the game
function game() {
  let playerScore = 0;
  let computerScore = 0;

  // Play 5 rounds
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Enter your choice: rock, paper, or scissors');
    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);

    // Update scores
    if (roundResult.includes('win')) {
      playerScore++;
    } else if (roundResult.includes('lose')) {
      computerScore++;
    }
  }

  // Determine the winner of the game
  if (playerScore > computerScore) {
    console.log('Congratulations! You won the game.');
  } else if (playerScore < computerScore) {
    console.log('Sorry! You lost the game.');
  } else {
    console.log("It's a tie game.");
  }
}

// Start the game
game();
