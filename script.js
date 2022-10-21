'use strict';

// genrating random number
// random genrate a number between 0.0 - 1
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let higeScore = 0;
// trunc convert number to integer

// Fuction
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  // if  displays no number when no number is passed if(guess) = false if(!guess) = true
  if (!guess) {
    //   changeing DOM text dynamicaly
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === secretNumber) {
    // wins
    // document.querySelector('.message').textContent = 'Correct Number !';
    displayMessage('No number');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (higeScore < score) {
      higeScore = score;
      document.querySelector('.highscore').textContent = higeScore;
    }
  } else if (guess !== secretNumber) {
    // Game lost
    if (score > 0) {
      // condition ? exprIfTrue : exprIfFalse

      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'Too High' : 'Too Low';

      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You Losed The Game';
      displayMessage('You Losed The Game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#d90b0e';
    }
  }
});

//     JavaScript in the Browser: DOM and Events
// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)

// 1. Select the element with the 'again' class and attach a click event handler
document.querySelector('.btn').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  // changeing value of input feild value
  document.querySelector('.guess').value = '';
  // css changes
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
