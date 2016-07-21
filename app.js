'use strict';
var guessScore = 0;
var userName = prompt("Bonjour! What's your name?");
alert("ok " + userName + ", let's play a guessing game! Answer yes or no to the following questions:");

//functions :

function congratulate() {
  alert("You're right " + userName +"!");
}
function wrongAnswer() {
  alert("Sorry, " + userName+ ", you're wrong!");
}
function wrongInput() {
  alert("Sorry, " + userName + " I didn't quite get that...");
}

//Quizz :
var questionOne = prompt("I went to nursing school").toLowerCase();
console.log("user input question1: " + questionOne);
if (questionOne=== 'y' || questionOne == 'yes') {
  congratulate();
  guessScore = guessScore + 1;
}else if (questionOne === 'no' || questionOne=== 'n') {
  wrongAnswer();
  alert("I went to nursing school in France!");
}else {
  console.log("user input: " + questionOne);
  wrongInput();
  alert("The answer was yes!");
}

var questionTwo = prompt("I am allergic to bananas").toLowerCase();
console.log("user input question2: " + questionTwo);
if (questionTwo === 'yes' || questionTwo === 'y') {
  congratulate();
  guessScore = guessScore + 1;
}else if (questionTwo === 'no' || questionTwo === 'n') {
  console.log("user input: " + questionTwo);
  wrongAnswer();
  alert("I'm actually pretty allergic to bananas. Weird, eh.");
}else {
  console.log("user input question2: " + questionTwo);
  wrongInput();
  alert("As weird as it sounds, I am indeed allergic to bananas");
}

var questionThree = prompt("I speak 4 languages").toLowerCase();
console.log("user input question3: " + questionThree);
if (questionThree=== 'yes'|| questionThree === 'y' ) {
  congratulate();
  guessScore = guessScore + 1;
}else if (questionThree=== 'no' || questionThree === 'n') {
  wrongAnswer();
  alert("I speak French, English, German and Latin!");
}else {
  wrongInput();
  alert("The answer was yes, I speak French, English, German and Latin");
}

var questionFour = prompt("I've lived in 6 countries").toLowerCase();
console.log("user input question 4: " + questionFour);
if (questionFour === 'yes' || questionFour === 'y') {
  wrongAnswer();
  alert("I've actually lived in 5 : France, Germany, England, Canada and the US");
}else if (questionFour === 'no' || questionFour === 'n') {
  congratulate();
  guessScore = guessScore + 1;
}else {
  wrongInput();
  alert("The answer was no, I lived in 5 countries : France, Germany, England, Canada and the US");
}

var questionFive = prompt("In my spare time I golf").toLowerCase()
console.log("user input question5: " + questionFive) ;
if (questionFive === 'yes' || questionFive === 'y') {
  wrongAnswer();
  alert("I don't golf, but I read a lot!");
}else if (questionFive === 'no' || questionFive ==='n') {
  congratulate();
  guessScore = guessScore + 1
}else {
  wrongInput();
  alert("The answer was no, I do not golf, I read!");
}

alert("Now let's play a guessing game!");
var childrenGuess=0
while(childrenGuess<4) {
  var questionSix = parseInt(prompt("How many children do I have?"));
  console.log("user input question6: " + questionSix);
  if (isNaN(questionSix) === true ) {
    alert("That's not even a number!");
    childrenGuess++;
  }else if (questionSix === 2) {
      alert("You're right!");
      guessScore = guessScore+1;
      childrenGuess = 4;
  }else if (questionSix < 2) {
      alert("You forgot some :)");
      childrenGuess++;
  }else {
      alert("That's way too many!");
      childrenGuess++;
    }
}
console.log("guess score: " + guessScore);
alert("I have two children, Juliet and Charles.");

var city = ['soissons', 'lille', 'frankfurt', 'vancouver', 'york'];
var cityGuess = 0;
while (cityGuess<6) {
  var questionSeven = prompt("Besides Seattle, in what other city have I lived in?").toLowerCase();
  console.log("user input question7: " + questionSeven);
  var goodGuess = false;
  for (var i=0; i<city.length; i++) {
    if (questionSeven === city[i]) {
      guessScore = guessScore + 1;
      goodGuess = true;
    }
  }
  cityGuess++;
  if (goodGuess === false) {
    alert("I've never lived there.");
  }else {
    alert("You're right!");
    cityGuess = 6;
  }
}

alert("You guessed " + guessScore + " out of 7 answers!")
