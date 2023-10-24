'use strict';

let userName = prompt('Hello. What is your name?');

alert(`Welcome to my site ${userName}. Let's play a guessing game. Please answer yes/no or y/n.`);

let correctCount = 0;

//Q1
let q1 = prompt ('Do I have a daughter?').toLowerCase();

if(q1 === 'y' || q1 === 'yes'){
  alert('You are correct! Next question!');
  correctCount += 1;
} else if(q1 === 'n' || q1 === 'no'){
  alert('Wrong! I do have a daughter. She\'s fabulous! Next question.');
}

//Class Demo
//if(q1 === 'y' || q1 === 'yes'){
//  console.log('You are correct! Next question...');
//} else if(q1 === 'n' || q1 === 'no'){
//  console.log('Wrong! I do have a daughter. She\'s fabulous! Next question...');
//}

//Q2
let q2 = prompt ('Do I have a son?').toLowerCase();

if(q2 === 'y' || q2 === 'yes'){
  alert('Correct again! Next question!');
  correctCount += 1;
} else if(q2 === 'n' || q2 === 'no'){
  alert('Fail! I do. He\'s a sweetie! Next question.');
}

//Q3
let q3 = prompt ('Do I have 12 kiddos?').toUpperCase();

if(q3 === 'Y' || q3 === 'YES'){
  alert('Pppphhhhfffwahahahaha! No way!! Next question.');
} else if( q3 === 'N' || q3 === 'NO'){
  alert('That\'s for darn certain. I\'m gonna leave that kind of child rearing to the great grandmothers. Next question.');
  correctCount += 1;
}

//Q4
let q4 = prompt ('Do I like Halloween?').toLowerCase();

if (q4 === 'y' || q4 === 'yes'){
  alert('Totally! Next question.');
  correctCount += 1;
} else if(q4 === 'n' || q4 === 'no'){
  alert('Booo! You are soo wrong. Next question.');
}

//Q5
let q5 = prompt ('Do I like Dia De Los Muertos?').toUpperCase();

if (q5 === 'Y' || q5 === 'YES'){
  alert('Si, es la verdad! It\'s my favorite!');
  correctCount += 1;
} else if(q5 === 'N' || q5 === 'NO'){
  alert('Ai caramba, pobrecito! You are very mistaken. Better luck next with the next question! LOL!');
}

//Q6 -
//let myAge = 37;

//for(let attempts = 4; attempts > 0; attempts--){
//  let guessMyAge = prompt('What is my age?');

//  if(guessMyAge > myAge){
//    alert('Sorry too high');
//  } else if(guessMyAge < myAge){
//    alert('Sorry too low');
//  } else if(Number(guessMyAge) === myAge){
//    alert('Yay! You are correct');
//    break;
//    attempt = 0
//  }
//
//   if(attempts === 1){
//     alert('Sorry, you are out of guesses. The answer was 37');
//    }
//}

//}
//OR
//for(let i = 0; i < 4; i++){
//  let guessMyAge = prompt('What is my age?');
//}

//For this one, I first consulted my notes, then Google, then chat GPT. Google helped me with figuring out how to code attempts. Chat GPT was the most helpful in dialoguing about options for making string and number work together. I used Replit, Go Live, and GitHub to check my work's functionability.

let attemptsQ6 = 4;
let q6;

while (attemptsQ6 > 0) {
  q6 = prompt (`My daughter loves guinea pigs. During pandemic, she convinced us to get a couple. That couple turned into more. How many guinea pigs do we have now? You have ${attemptsQ6} guesses!`);

  if (q6 < 6) {
    alert('Nope. Not enough. Try again.');
  } else if (q6 > 6) {
    alert('Nope. Too high. Try again.');
  } else if (Number(q6) === 6) {
    alert('Way to go! You got it!');
    correctCount += 1;
    break;
  }
  attemptsQ6--;
}

if (attemptsQ6 === 0) {
  alert('That was your last attempt. The answer is 6');
}



//Q7
//let boyBands = ['backstreet boys', 'take that','one direction', 'bts'];

//for(let attempts = 6; attempts > 0; attempts--){
//  let boyBandGuess = prompt('Guess one of my fav boybands!');
//
//  for(let i = 0; i < boyBands.length; i++){
//  if(boyBand Guess === boyBands[i]){
//    alert('OMG I love them!!');
//    attempts = 0;
//    break;
//    }
//  }
//}
// alert(`Here are all my fav boybands: ${boyBands}`);
//

let attemptsQ7 = 6;
let namesOG = ['Prince', 'Violet', 'Pigawig'];

for (let tries = attemptsQ7; tries > 0; tries--) {
  let q7 = prompt(`Now try to guess one of the three original guinea pigs's names! One is named after a former artist-musician of the 80s/90s. One is named after a flower. One's name is a play on the word "Pig". You have ${tries} tries left!`);
  q7 = q7.charAt(0).toUpperCase() + q7.slice(1).toLowerCase();

  let correctPiggyName = false; //Initializing a flag to check if the guess is correct, as per advice of ChatGPT

  for (let i = 0; i < namesOG.length; i++) {
    if (q7 === namesOG[i]){
      alert('Great guess!');
      correctCount += 1;
      correctPiggyName = true;
      break;
    }
  }

  if (!correctPiggyName){
    alert('Wrong! Guess again.');
  }

//  if (correctCount > 0){
//    break;
//  }
}

alert(`That was your last try. The original piggy names are ${namesOG}. Thank you for playing this guessing game with me, ${userName}! You got ${correctCount} out of 7 correct!`);

//for (let tries = attemptsQ7; tries > 0; tries--) {
//  let q7 = prompt(`Now try to guess one of the three original guinea pigs's names! One is named after a former artist-musician of the   80s/90s. One is named after a flower. One's name is a play on the word "Pig". You have ${tries} tries left!`);
//  q7 = q7.charAt(0).toUpperCase() + q7.slice(1).toLowerCase();

//  let correctPiggyName = false;

//  for (let i = 0; i < namesOG.length; i++) {
//    if (q7 === namesOG[i]){
//      alert('Great guess!');
//      correctPiggyName = true;
//      alert('You got it!');
//    }
//  }
//}

//  if (correctPiggyName){
//    alert('Great guess! You got it! Try guessing more!');
//  } else if (tries === 1) {
//    alert(`No more tries. The correct possible answers were ${namesOG}`);
//  } else {
//    alert(`Sorry, '${q7}' is not a correct answer. Try again!`);
//  }
//}

//if (tries === 0) {
//  alert('That was your last try. The original piggy names are [0][1] and [2]');
//}


