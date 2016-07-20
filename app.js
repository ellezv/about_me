'use strict'
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
console.log("user input: " + questionOne);
if (questionOne=== 'y' || questionOne == 'yes') {
  congratulate();
}else if (questionOne === 'no' || questionOne=== 'n') {
  wrongAnswer();
  alert("I went to nursing school in France!");
}else {
  console.log("user input: " + questionOne);
  wrongInput();
  alert("The answer was yes!");
}

var questionTwo = prompt("I am allergic to bananas").toLowerCase();
console.log("user input: " + questionTwo);
if (questionTwo === 'yes' || questionTwo === 'y') {
  congratulate();
}else if (questionTwo === 'no' || questionTwo === 'n') {
  console.log("user input: " + questionTwo);
  wrongAnswer();
  alert("I'm actually pretty allergic to bananas. Weird, eh.");
}else {
  console.log("user input: " + questionTwo);
  wrongInput();
  alert("As weird as it sounds, I am indeed allergic to bananas");
}

var questionThree = prompt("I speak 4 languages").toLowerCase();
console.log("user input: " + questionThree);
if (questionThree=== 'yes'|| questionThree === 'y' ) {
  congratulate();
}else if (questionThree=== 'no' || questionThree === 'n') {
  wrongAnswer();
  alert("I speak French, English, German and Latin!");
}else {
  wrongInput();
  alert("The answer was yes, I speak French, English, German and Latin");
  }

var questionFour = prompt("I've lived in 6 countries").toLowerCase();
console.log("user input: " + questionFour);
if (questionFour === 'yes' || questionFour === 'y') {
  wrongAnswer();
  alert("I've actually lived in 5 : France, Germany, England, Canada and the US");
}else if (questionFour === 'no' || questionFour === 'n') {
  congratulate();
}else {
  wrongInput();
  alert("The answer was no, I lived in 5 countries : France, Germany, England, Canada and the US");
}

var questionFive = prompt("In my spare time I golf").toLowerCase()
console.log("user input: " + questionFive) ;
if (questionFive === 'yes' || questionFive === 'y') {
  wrongAnswer();
  alert("I don't golf, but I read a lot!")
}else if (questionFive === 'no' || questionFive ==='n') {
  congratulate();
}else {
  wrongInput();
  alert("The answer was no, I do not golf, I read!");
}
