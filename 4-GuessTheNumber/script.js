
const form = document.querySelector('.form');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessField = document.querySelector('#guessField');

let randomNumber = Math.floor(Math.random()*100) + 1;

let previousGuesses = [];
let remainingGuesses = 10;
let gameOver = false;

form.addEventListener('submit', function(e){
    e.preventDefault();

    if (gameOver) return;
    const userGuesses = parseInt(guessField.value);

    if(isNaN(userGuesses) || userGuesses < 1 || userGuesses > 100){
        lowOrHi.innerHTML = "Please enter number between 1 to 100";
        return;
    }

    checkGuess(userGuesses);
})

function checkGuess(guess) {
    previousGuesses.push(guess);
    guesses.innerText = previousGuesses.join(', ');

    remainingGuesses--;
    lastResult.innerHTML = remainingGuesses;

    if(guess === randomNumber){
        lowOrHi.innerHTML = '🎉 Correct! You guessed the number!';
        endGame();
    }

    else if (remainingGuesses === 0){
        lowOrHi.innerHTML = `😢 Game Over! Number was ${randomNumber}`;
        endGame();
    }
    else if (guess < randomNumber){
        lowOrHi.innerHTML = '📉 Too low!';
    }
    else{
        lowOrHi.innerText = '📈 Too high!';
    }

    guessField.value = '';
}

function endGame(){
    gameOver = true;
    guessField.disabled = true;
    createRestartBtn();
}

function createRestartBtn(){
    // console.log("restart button created");
    if (document.querySelector('.restart-btn')) return;
    
    const restartBtn = document.createElement('button');
    restartBtn.innerText = 'Start New Game';
    restartBtn.classList.add('restart-btn');

    document.querySelector('#wrapper').appendChild(restartBtn);

    restartBtn.addEventListener('click' , function(){
        resetgame();
        restartBtn.remove();
    });
}

function resetgame(){
    randomNumber = Math.floor(Math.random()*100) + 1;
    previousGuesses = [];
    remainingGuesses = 10;
    gameOver = false;

    guesses.innerText = '';
    lastResult.innerText = '10';
    lowOrHi.innerText = '';
    guessField.value = '';
    guessField.disabled = false;
}
