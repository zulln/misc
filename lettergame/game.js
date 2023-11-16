const letterDisplay = document.getElementById('letter');
const scoreDisplay = document.getElementById('score');
const checkButton = document.getElementById('checkButton');

let currentLetter = '';
let previousLetters = [];
let score = 0;
let gameInterval;
let buttonClicked = false;

function generateRandomLetter() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function updateLetter() {
    // Check if the player missed clicking the button
    if (previousLetters.length >= 4 && currentLetter === previousLetters[0] && !buttonClicked) {
        gameOver();
        return;
    }

    currentLetter = generateRandomLetter();
    letterDisplay.textContent = currentLetter;
    previousLetters.push(currentLetter);
    buttonClicked = false; // Reset button click flag

    // Keep only the last 4 letters
    if (previousLetters.length > 4) {
        previousLetters.shift();
    }

    // Update score for each new character displayed
    score++;
    scoreDisplay.textContent = 'Score: ' + score;
}

function checkLetter() {
    // Check if the fourth last letter matches the current letter
    if (previousLetters.length >= 4 && currentLetter === previousLetters[0]) {
        buttonClicked = true;
    } else {
        gameOver();
    }
}

function gameOver() {
    clearInterval(gameInterval);
    alert('Game Over! Your final score was: ' + score);
}

checkButton.addEventListener('click', checkLetter);

gameInterval = setInterval(updateLetter, 1600);