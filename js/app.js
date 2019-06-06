'use strict';

var username = prompt('Welcome! What that name is?');
alert('What up, ' + username + ' ! Sooooooo go ahead and take this little quiz that is selfishly all about me!')

var correctanswers = 0;
var totalquestions = 7;

var firstname = prompt('Did you know my first name is German?').toLowerCase();

if(firstname === 'yes' || firstname === 'y' || firstname === 'Yes'){
  alert('Oh.. well look at you! being great!');
  correctanswers++;
} else if(firstname === 'no' || firstname === 'n' || firstname === 'No'){
  alert('Well, now you know!');
} else {
  alert('you didnt even try');
}
console.log(firstname + ' -Response to, Did you know my first name is German');

var skateboard = prompt('Do you think I skateboard?').toLowerCase();

if(skateboard === 'yes' || skateboard === 'y' || skateboard === 'Yes'){
  alert('*does kickflip on your desk* You are right!');
  correctanswers++;
} else if(skateboard === 'no' || skateboard === 'n' || skateboard === 'No'){
  alert('Welp... *does double kickflip on your desk* I do!');
} else {
  alert('did you even try...?');
}
console.log(skateboard + ' -Response to, Do you think I skateboard');

var gummybears = prompt('Did you know my favorite candy is gummy bears?').toLowerCase();

if(gummybears === 'yes' || gummybears === 'y' || skateboard === 'Yes'){
  alert('Good guess! I shall share them with you!');
  correctanswers++;
} else if(gummybears === 'no' || gummybears === 'n' || gummybears === 'No'){
  alert('Welp no gummybears for you then!');
} else {
  alert('you didnt even try.. you DEFINITELL aint gettin any gummybears');
}
console.log(gummybears + ' -Response to, Did you know my favorite candy is gummybears?');

var Batman = prompt('Would you say my favorite superhero is Batman?').toLowerCase();

if(Batman === 'yes' || Batman === 'y' || Batman === 'Yes'){
  alert('Good. This is the only answer to this question.');
  correctanswers++;
} else if(Batman === 'no' || Batman === 'n' || Batman === 'No'){
  alert('You meant, yes. But thats okay!');
} else {
  alert('Why you aint try? To arkham with you!');
}
console.log(Batman + ' -Response to, Would you say my favorite superhero is Batman?');

var georgia = prompt('Did you know that I am from georgia?').toLowerCase();

if(georgia === 'yes' || georgia === 'y' || georgia === 'Yes'){
  alert('You a real one!');
  correctanswers++;
} else if( georgia === 'no' || georgia === 'n' || georgia === 'No'){
  alert('Well, now you know!');
} else {
  alert('did you even try...?');
}
console.log(georgia + ' -Response to, Did you know that I am from georgia');

var favoriteNumber = Math.floor((Math.random() * 10 + 1)); //Assigned my favorite number to a variable so that it could be easily changed later.  Source: https://www.w3schools.com/jsref/jsref_random.asp compliments of Chris!
for (var attempt = 0; attempt < 4; attempt++) {
  var usersGuess = prompt('Can you guess my favorite number? (HINT: It\'s somewhere between 1-10)');

  if (usersGuess < favoriteNumber) {
    alert('Nice try, guy! You are too low!');
  } else if (usersGuess > favoriteNumber) {
    alert('Nice try, guy! You are too high!');
  } else {
    alert('The gods have looked down upon you and smiled! You got it right!');
    correctAnswers++;
    break;
  }
  console.log(favoriteNumber + ' -Answer to favoriteNumber');

  var formercars = ['ford', 'chevy', 'kia', 'nissan'];
  var carsattempts = 0;
  
  loop1: //source: https://stackoverflow.com/questions/183161/whats-the-best-way-to-break-from-nested-loops-in-javascript
  while (carsattempts < 6) {
    carsattempts++;
    var carguess = prompt('Can you guess one of the 4 cars that I have previously drove?').toLowerCase(); //This will take the users answer and convert it into all lowercase.
    for (var i = 0; i < formercars.length; i++) {
      if (carguess === formercars[i]) { //TODO: add state initials
        alert('You got it! I have drove in ' + carguess + '! In total, I have drove ' + formercars);
        correctAnswers++;
        break loop1;
      }
    }
    alert('Sorry, try again!');
  }
  if (carsattempts > 5) {
    alert('Sorry you did not get it.  I have lived in ford, chevy, kia, and nissan.'); //This is the message that will display if the user fails all 6 attempts.
  }
  
  //This final alert will notificy the user how many questions they answered correctly.
  alert('Thank you so much for to playing my game *mario vc* ' + username + ' you got ' + correctAnswers + ' out of ' + totalQuestions + ' questions correct.');
}
