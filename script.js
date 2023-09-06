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
            return "You lose! Paper beats Rock.";
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
            return "You lose! Scissors beats Paper.";
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
            return "You lose! Rock beats Scissors.";
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
let cScore = 0, uScore = 0;
userScore.textContent += uScore.toString();
computerScore.textContent += cScore.toString();
const TRIES = 5;

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
        computerScore.setAttribute("style", `background-image: url(./images/${computerChoice.toLowerCase()}.png); background-size: 90px;`);
        userScore.setAttribute("style", `background-image: url(./images/${userChoice.toLowerCase()}.png); background-size: 90px;`);
        msg.textContent = playRound(userChoice, computerChoice);
        scoreDiv.appendChild(msg);

        let text;
        if (msg.textContent.startsWith("You wun")) {
            uScore += 1;
            text = userScore.textContent;
            userScore.textContent = text.slice(0, -1) + uScore;
        }
        else if (msg.textContent.startsWith("You lose")) {
            cScore += 1;
            text = computerScore.textContent;
            computerScore.textContent = text.slice(0, -1) + cScore;
        }

        if (uScore === TRIES || cScore === TRIES) {
            let container = document.querySelector('.container');
            let popUpContainer = document.createElement('div');
            let popUp = document.createElement('div');
            let popUpHeader = document.createElement('p');
            let popUpMsg = document.createElement('p');
            let popUpButton = document.createElement('button');

            popUpContainer.classList = "popUpContainer";
            popUp.classList = "popUp";
            popUpHeader.classList = "popUpHeader";
            popUpMsg.classList = "popUpMsg";
            popUpButton.classList = "popUpButton";
            popUpHeader.textContent = 'Game Over!';
            if (uScore > cScore) {
                popUpMsg.textContent = 'You wun! congrats :)';
            }
            else {
                popUpMsg.textContent = 'You lost, unfortunately :(';
            }
            popUpButton.textContent = 'Play again';
            container.appendChild(popUpContainer);
            container.appendChild(popUp);
            popUp.appendChild(popUpHeader);
            popUp.appendChild(popUpMsg);
            popUp.appendChild(popUpButton);

            popUpButton.addEventListener('click', function() {
                select_sound.currentTime = 0;
                select_sound.play();

                // reloading the page to start the game over
                location.reload();
            })
        }
    })
});
