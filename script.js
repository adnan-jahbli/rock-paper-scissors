/**
 * Generates a random integer between the specified minimum and maximum values.
 *
 * @param {number} min - Minimum value.
 * @param {number} max - Maximum value.
 * @returns {number} Random integer between min and max.
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates a random choice for the computer: "Rock", "Paper", or "Scissors".
 *
 * @returns {string} Random computer choice.
 */
function getComputerChoice() {
    const randomInt = getRandomInt(0, 2);
    return ["Rock", "Paper", "Scissors"][randomInt];
}

/**
 * Plays a single round of the game.
 *
 * @param {string} playerSelection - Player's choice: "Rock", "Paper",or "Scissors".
 * @param {string} computerSelection - Computer's choice.
 * @returns {string} Result of the round.
 */
function playRound(playerSelection, computerSelection) {
    let rockChoice = ["rock", "Rock", "ROCK"],
    paperChoice = ["paper", "Paper", "PAPER"],
    scissorsChoice = ["scissors", "Scissors", "SCISSORS"];

    if (rockChoice.includes(playerSelection)) {
        if (computerSelection === "Rock") {
            return "A wonderful tie";
        }
        else if(computerSelection == "Paper") {
            return "You Lose! Paper beats Rock.";
        }
        else {
            return "You wun! Rock beats Scissors.";
        }
    }
    else if (paperChoice.includes(playerSelection)) {
        if (computerSelection === "Paper") {
            return "A wonderful tie";
        }
        else if(computerSelection == "Scissors") {
            return "You Lose! Scissors beats Paper.";
        }
        else {
            return "You wun! Paper beats Rock.";
        }
    }
    else if (scissorsChoice.includes(playerSelection)) {
        if (computerSelection === "Scissors") {
            return "A wonderful tie";
        }
        else if(computerSelection == "Rock") {
            return "You Lose! Rock beats Scissors.";
        }
        else {
            return "You wun! Scissors beats Paper.";
        }
    }
    else {
        return "Please enter a valid choice!";
    }
}

/**
 * Simulates the game for a specified number of rounds.
 *
 * @param {number} n - Number of rounds.
 */
function game(n) {
    let computerChoice, userChoice;

    for (let i = 0; i < n; i++) {
        computerChoice = getComputerChoice();
        userChoice = prompt("Enter your choice: ");
        console.log("Computer's choice is: " + computerChoice);
        console.log("Your choice is: " + userChoice);
        console.log(playRound(userChoice, computerChoice));
    }
}

// Play the game for 5 rounds
game(5);