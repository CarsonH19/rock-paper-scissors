/* Write a function called getComputerChoice to randomly select 
'Rock', 'Paper' or 'Scissors'. */

/* Write a function that plays a single round of rock-paper-scissors, 
The function should take two parameters - the playerSelection and computerSelection -
and then return a string that declares the winner of the round like so:
 "You Lose! Paper beats Rock" */

 /*The function should be case-insensitive*/

 function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex]
 }

 function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper Beats Rock!";
    }

    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win! Rock Beats Scissors!";
    }

    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Win! Rock Beats Paper!";
    }

    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors Beats Paper!"
    }

    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You Lose! Rock Beats Scissors!";
    }

    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Win! Scissors Beats Paper!"
    }

    else {
        return "No Winner!";
    }
       

  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

