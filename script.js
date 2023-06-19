/* Write a function called getComputerChoice to randomly select 
'Rock', 'Paper' or 'Scissors'. */

/* Write a function that plays a single round of rock-paper-scissors, 
The function should take two parameters - the playerSelection and computerSelection -
and then return a string that declares the winner of the round like so:
 "You Lose! Paper beats Rock" */

 /*The function should be case-insensitive*/

 function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice]
 }

 

 function playRound(playerSelection, computerSelection) {
    // your code here!
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper Beats Rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock Beats Scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper Beats Paper!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors Beats Paper!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock Beats Scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors Beats Paper!";
    } else {
        return "No Winner!";
    }
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

