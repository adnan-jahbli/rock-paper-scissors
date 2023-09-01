/**
 * Generates a random integer between the specified minimum and maximum values.
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates a random choice for the computer: "Rock", "Paper", or "Scissors".
 */
function getComputerChoice() {
    const randomInt = getRandomInt(0, 2);
    return ["Rock", "Paper", "Scissors"][randomInt];
}

/**
 * Plays a single round of the game.
 */
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock') {
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
    else if (playerSelection === 'Paper') {
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
    else if (playerSelection === 'Scissors') {
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
}

let computerChoice = ""; 
let userChoice = "";
let computerScore = document.querySelector('.computer_score');
let userScore = document.querySelector('.user_score');
let msg = document.createElement('h3');
let scoreDiv = document.querySelector('.score');

buttons.forEach((button) => {
    button.addEventListener('click', function() {
        if (button.classList.contains('rock')) {
            userChoice = 'Rock';
        }
        else if (button.classList.contains('paper')) {
            userChoice = 'Paper';
        }
        else {
            userChoice = 'Scissors';
        }

        computerChoice = getComputerChoice();
        computerScore.setAttribute("style", `background-image: url(./images/${computerChoice}.png); background-size: 90px;`);
        userScore.setAttribute("style", `background-image: url(./images/${userChoice}.png); background-size: 90px;`);
        msg.textContent = playRound(userChoice, computerChoice);
        scoreDiv.appendChild(msg);
    })
});