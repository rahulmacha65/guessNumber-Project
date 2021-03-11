'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct Number';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.again').textContent = 'your the winner';
// console.log(document.querySelector('.again').textContent);
// document.querySelector('.number').textContent = 7;
// console.log(document.querySelector('.number').textContent);
// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value);
let Score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let getMessage = function (message) {
  return (document.querySelector('.message').textContent = message);
};
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    getMessage('Not Number');
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Guess';
    //adding css styles
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';
    console.log((document.querySelector('.number').textContent = secretNumber));
    if (Score > highScore) {
      highScore = Score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess != secretNumber) {
    if (Score > 1) {
      getMessage(guess > secretNumber ? 'Too High' : 'Too Low');
      Score--;
      document.querySelector('.score').textContent = Score;
    } else {
      document.querySelector('.message').textContent = 'Game Over';
      document.querySelector('.score').textContent = 0;
    }
  }
  //Duplicate code
  // } else if (guess > secretNumber) {
  //   if (Score > 1) {
  //     document.querySelector('.message').textContent = 'Too High';
  //     Score--;
  //     document.querySelector('.score').textContent = Score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Game Over';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (Score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low';
  //     Score--;
  //     document.querySelector('.score').textContent = Score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Game Over';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
// Restting Game 

document.querySelector('.again').addEventListener('click', function () {
  Score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('.score').textContent = Score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
});
