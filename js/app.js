'use strict';

console.log('hello kitty:');

let userName = prompt('Hello. What is your name?');

alert('Welcome to my site ' + userName + '. Let\'s play a guessing game. Please answer yes/no or y/n.');

//Q1
let q1 = prompt ('Do I have a daughter?').toLowerCase();

if(q1 === 'y' || q1 === 'yes'){
  alert('You are correct! Next question...');
} else if(q1 === 'n' || q1 === 'no'){
  alert('Wrong! I do have a daughter. She\'s fabulous! Next question...');
}

//Q2
let q2 = prompt ('Do I have a son?').toLowerCase();

if(q2 === 'y' || q2 === 'yes'){
  alert('Correct again! Next question...');
} else if(q2 === 'n' || q2 === 'no'){
  alert('Fail! I do. He\'s a sweetie! Next question...');
}

//Q3
let q3 = prompt ('Do I have 12 kiddos?').toUpperCase();

if(q3 === 'Y' || q3 === 'YES'){
  alert('Pppphhhhfffwahahahaha! No way!! Next question...');
} else if( q3 === 'N' || q3 === 'NO'){
  alert('That\'s for darn certain. I\'m gonna leave that kind of child rearing to the great grandmothers. Next question...');
}


//Q4
let q4 = prompt ('Do I like Halloween?').toLowerCase();

if (q4 === 'y' || q4 === 'yes'){
  alert('Totally! Next question...');
} else if(q4 === 'n' || q4 === 'no'){
  alert('Booo! You are soo wrong. Next question...');
}

//Q5
let q5 = prompt ('Do I like Dia De Los Muertos?').toUpperCase();

if (q5 === 'Y' || q5 === 'YES'){
  alert('Si, es la verdad! It\'s my favorite!' + ' Thank you for playing this guessing game with me, ' + userName +'!');
} else if(q5 === 'N' || q5 === 'NO'){
  alert('Ai caramba, pobrecito! You are very mistaken.' + ' Thank you for playing this guessing game with me, ' + userName + '. Better luck next time! LOL!');
}










