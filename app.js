alert('Hey, let\'s play a guessing game about me!');

alert('Before we get started, make sure to note that your answers must be either \'yes\' or \'no\'.');

var totalCorrect = 0;
var totalWrong = 0;
var answer1 = prompt('Does Rafi have a bike?').toUpperCase();

if(answer1 === 'Y' || answer1 === 'YES') {
  alert('You bet, he rides all the time!');
  totalCorrect++;
  console.log('Does Rafi have a bike:' + answer1.toUpperCase());
} else if(answer1 === 'N' || answer1 === 'NO'){
  alert('He actually does!');
  totalWrong++;
  console.log('So, does Rafi have a bike?:' + answer1.toUpperCase());
} else{
  alert('sorry, try a yes/no answer!');
}

var answer2 = prompt('Will Rafi be an expert coder?').toUpperCase();

if(answer2 === 'Y' || answer2 === 'YES'){
  alert('Yes! You are an expert at predicting the future!');
  totalCorrect++;
  console.log('Is this person great at predicting the future:' + answer2.toUpperCase());
}
else if(answer2 === 'N' || answer2 === 'NO'){
  alert('Have faith!');
  console.log('This person is ' + answer2 + ' very smart');
}
else{
  alert('Sorry, try again!');
}

var answer3 = prompt('Does slow and steady win the race?').toUpperCase();

if(answer3 === 'Y' || answer3 === 'YES'){
  alert('That is a very wise perspective');
  totalCorrect++;
  console.log('Slow and steady works?: ' + answer3);
}
else if( answer3 === 'N' || answer3 === 'NO'){
  alert('Might want to think again there, buddy');
  console.log('Is this a patient person?' + answer3);
}
else{
  alert('try again!');
}

var answer4 = prompt('Does Rafi live in Seattle?').toUpperCase();

if(answer4 === 'Y' || answer4 === 'YES'){
  alert('You\'re right, how did you know?');
  totalCorrect++;
  console.log('Did they know you live in Seattle? ' + answer4);
}
else if( answer4 === 'N' || answer4 === 'NO'){
  alert('Of course Rafi lives in Seattle!');
  console.log('Do they know where you live?' + answer3);
}
else{
  alert('try again!');
}

var answer5 = prompt('Does Rafi have a cat?').toUpperCase();

if(answer5 === 'Y' || answer5 === 'YES'){
  alert('He doesn\'t have one yet, but maybe soon.');
  totalCorrect++;
  console.log('Does he have a cat? ' + answer4);
}
else if( answer5 === 'N' || answer5 === 'NO'){
  alert('You\'re right, there\'s not a cat to be found!');
  console.log('No cat?' + answer3);
} else {
  alert('try again!');
}

/* Made a question involving a while loop with 4 chances for the user to get the correct answer
*/
var guessTry = 0;
var age = 24;
var question6;

while(guessTry < 4){
  question6 = parseInt(prompt('What\'s my age again?'));
  if(isNaN(question6)){
    alert('Try guessing a number!');
  }
  else if(question6 === 24){
    alert('You\'re right! congrats!');
    totalCorrect++;
    break;
  }
  else if(question6 > 24){
    alert('Too high, try again!');
  }
  else{
    alert('Too low, try a little higher!');
  }

  guessTry++;
}

alert('Now on to the next round! Can you guess which pizza toppings I like? You have 6 tries to guess right, and you can guess multiple toppings at once, by separating them with commas!');
var guessNumber = 0;
var pizzaToppings = ['mushrooms', 'sausage','cheese','pepperoni'];

while(guessNumber < 6){
  var pizzaQuestion = prompt('What would I include on my dream pizza?');
  if(pizzaQuestion === pizzaToppings[0]){
    alert('You\'re right! I do love those toppings');
    totalCorrect++;
    break;
  }
  else if(pizzaQuestion === pizzaToppings[1]){
    alert('You\'re right! I do love those toppings');
    totalCorrect++;
    break;
  }
  else if(pizzaQuestion === pizzaToppings[2]){
    alert('You\'re right! I do love those toppings');
    totalCorrect++;
    break;
  }
  else if(pizzaQuestion === pizzaToppings[3]){
    alert('You\'re right! I do love those toppings');
    totalCorrect++;
    break;
  }
  else{
    alert('Woops, try another topping!');
    guessNumber++;
    totalWrong++;
  }

}

alert('Thanks for playing! You got ' + totalCorrect + ' right and ' + totalWrong + ' wrong.');
