'use strict';

// global variables :
var guessScore = 0;
var userName = prompt('Bonjour! What\'s your name?');
alert('Welcome ' + userName + ', let\'s see how well you know me! Answer yes or no to the following questions:');
var rightAnswer = '';


//functions :
function guessCount() {
  guessScore++;
  return guessScore;
}

function congratulate() {
  alert('You\'re right ' + userName + '!');
  alert(rightAnswer);
}

function wrongAnswer() {
  alert('Sorry, ' + userName + ', you\'re wrong!');
  alert(rightAnswer);
}

function wrongInput() {
  alert('Sorry, ' + userName + ' I didn\'t quite get that...');
  alert(rightAnswer);
}

function quizOne() {
  var questionOne = prompt('I went to nursing school').toLowerCase();
  rightAnswer = 'I did go to nursing school in France';
  console.log('user input question1: ' + questionOne);
  console.log('correct answer : yes');
  if (questionOne === 'y' || questionOne == 'yes') {
    congratulate();
    guessCount();
  }else if (questionOne === 'no' || questionOne === 'n') {
    wrongAnswer();
  }else {
    console.log('user input: ' + questionOne);
    wrongInput();
  }
}

function quizTwo() {
  var questionTwo = prompt('I am allergic to banana').toLowerCase();
  console.log('user input question2: ' + questionTwo);
  console.log('correct answer : yes');
  rightAnswer = 'As weird as it sounds, I am indeed allergic to banana';
  if (questionTwo === 'yes' || questionTwo === 'y') {
    congratulate();
    guessCount();
  }else if (questionTwo === 'no' || questionTwo === 'n') {
    wrongAnswer();
  }else {
    wrongInput();
  }
}

function quizThree() {
  var questionThree = prompt('I am half North African').toLowerCase();
  rightAnswer = 'My mother was born in Algeria and moved to France during the civil war. I am biracial and very proud of my Arab heritage.';
  console.log('user input question3: ' + questionThree);
  console.log('correct answer: yes');
  if (questionThree === 'yes' || questionThree === 'y' ) {
    congratulate();
    guessCount();
  }else if (questionThree === 'no' || questionThree === 'n') {
    wrongAnswer();
  }else {
    wrongInput();
  }
}

function quizFour() {
  var questionFour = prompt('I\'ve lived in 6 countries').toLowerCase();
  rightAnswer = 'I\'ve actually lived in 5: France, Germany, England, Canada and the US';
  console.log('user input question 4: ' + questionFour);
  console.log('correct answer : no');
  if (questionFour === 'yes' || questionFour === 'y') {
    wrongAnswer();
  }else if (questionFour === 'no' || questionFour === 'n') {
    congratulate();
    guessCount();
  }else {
    wrongInput();
  }
}

function quizFive() {
  var questionFive = prompt('In my spare time I golf').toLowerCase();
  rightAnswer = 'I do not golf, in my spare time you will most likely find me with a book!';
  console.log('user input question5: ' + questionFive) ;
  console.log('correct answer: no');
  if (questionFive === 'yes' || questionFive === 'y') {
    wrongAnswer();
  }else if (questionFive === 'no' || questionFive === 'n') {
    congratulate();
    guessCount();
  }else {
    wrongInput();
  }
}

function quizSix() {
  alert('Now let\'s play a little guessing game!');
  var randomNumber = Math.round(Math.random() * 10);
  rightAnswer = 'The number was ' + randomNumber;
  console.log('The random is number is ' + randomNumber);
  var goodGuess = false;
  var randomNumberGuess = 0;
  while (randomNumberGuess < 4 && goodGuess === false) {
    var questionSix = parseInt(prompt('Guess a number between 0 and 10!'));
    console.log('User input question6: ' + questionSix);
    if (isNaN(questionSix) === true) {
      alert('That\'s not even a number!');
      randomNumberGuess++;
    }else if (questionSix === randomNumber) {
      guessCount();
      goodGuess = true;
      congratulate();
    }else if (questionSix > randomNumber) {
      alert('That\'s too high!');
      randomNumberGuess++;
    }else if (questionSix < randomNumber) {
      alert('That\'s too low!');
      randomNumberGuess++;
    }
  }
  if (goodGuess === false) {
    wrongAnswer();
  }
}

function quizSeven() {
  alert('Last question, a little bit harder this time, you get 6 tries:');
  var city = ['soissons', 'lille', 'frankfurt', 'vancouver', 'york'];
  var cityGuess = 0;
  var goodGuess = false;
  rightAnswer = 'I have lived in Soissons, Lille, Frankfurt, Vancouver, York';
  while (cityGuess < 6 && goodGuess === false) {
    var questionSeven = prompt('Besides Seattle, in what other city have I lived in?').toLowerCase();
    console.log('user input question7: ' + questionSeven);
    for (var i = 0; i < city.length; i++) {
      if (questionSeven === city[i]) {
        guessCount();
        goodGuess = true;
      }
    }
    cityGuess++;
    if (goodGuess === false) {
    }else {
      congratulate();
    }
  }
  if (goodGuess === false) {
    wrongAnswer();
  }
  console.log('correct answer: ' + city);
}

function quiz() {
  quizOne();
  quizTwo();
  quizThree();
  quizFour();
  quizFive();
  quizSix();
  quizSeven();
  alert('You guessed ' + guessScore + ' out of 7');
}


// calling my quiz function :

quiz();
