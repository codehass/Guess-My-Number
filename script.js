'use strict';     

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let heightScore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value) ;
  
  //When there is no input
  if(!guess){
    displayMessage('🛑 NO Number');

    //When player win
  }else if(guess === secretNumber){
    displayMessage('💪 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.background = 'green';
    document.querySelector('.number').style.width = '30rem';

    if(score > heightScore) {
      heightScore = score;
      document.querySelector('.highscore').textContent = heightScore;
    }
  }
  //When guess is wrong
  else if(guess !== secretNumber){
    if(score > 1){
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    }else{
      displayMessage('💥You lost the game');
      document.querySelector('.score').textContent = 0;
    }
    
  }
})

//Play again
  document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random()*20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';

  })