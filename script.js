"use strict";
document.addEventListener('DOMContentLoaded', function() {
    let gameOver = false; // game over flag
    let number = Math.floor(Math.random() * 20) + 1; // random number between 1 and 20
    const message = document.querySelector('.message'); 
    const scoreElement = document.querySelector('.score');
    const highscoreElement = document.querySelector('.highscore');
    const checkButton = document.querySelector('.check');
    const guessInput = document.querySelector('.guess');
    const body = document.querySelector('body');
    const again = document.querySelector('.again');
    checkButton.addEventListener('click', function() { // check button click event
        if (guessInput.value === '') { // if no value entered
            return;
        }
        else if (!gameOver) { // if game is not over
            const guessValue = Number(guessInput.value);
            if (guessValue === number) { // if guess is correct
                message.textContent = 'Correct Number!';
                body.style.backgroundColor = '#60b347';
                checkButton.textContent = "Play Again!";
                gameOver = true; // set game over flag to true
                if (Number(scoreElement.textContent) > Number(highscoreElement.textContent)) {
                    highscoreElement.textContent = scoreElement.textContent; // update highscore if current score is greater
                }
            } else {
                message.textContent = guessValue > number ? 'Too High!' : 'Too Low!'; // display message based on guess
                scoreElement.textContent = Number(scoreElement.textContent) - 1; // decrement score
                guessInput.value = ''; // clear input
            }
        } else {
            resetGame(); // reset game if game is over
            return;
        }
    });
    again.addEventListener('click', function() { // reset game if again button is clicked
        resetGame();
    });
    function resetGame(){ // reset game function to clear all values and reset game
        number = Math.floor(Math.random() * 20) + 1;
        scoreElement.textContent = 20;
        message.textContent = 'Start guessing...';
        guessInput.value = '';
        body.style.backgroundColor = '#222';
        checkButton.textContent = "Check!";
        gameOver = false;
    }
});
