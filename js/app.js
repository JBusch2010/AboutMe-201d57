'use strict';

//Welcome prompt to the page
var username = prompt('Welcome! What that name is?');
alert('What up, ' + username + ' ! Sooooooo go ahead and take this little quiz that is selfishly all about me!');

var correctquestionsanswered = 0;
var totalQuestions = 7;

//Question1 Begins
var question1 = function(){
  var firstname = prompt('Did you know my first name is German?').toLowerCase();

  if(firstname === 'yes' || firstname === 'y' || firstname === 'Yes'){
    alert('Oh.. well look at you! being great!');
    correctquestionsanswered++;
  } else if(firstname === 'no' || firstname === 'n' || firstname === 'No'){
    alert('Well, now you know!');
  } else {
    alert('you didnt even try');
  }
  console.log(firstname + ' -Response to, Did you know my first name is German');

};

//Question2 Begins
var question2 = function(){
  var skateboard = prompt('Do you think I skateboard?').toLowerCase();

  if(skateboard === 'yes' || skateboard === 'y' || skateboard === 'Yes'){
    alert('*does kickflip on your desk* You are right!');
    correctquestionsanswered++;
  } else if(skateboard === 'no' || skateboard === 'n' || skateboard === 'No'){
    alert('Welp... *does double kickflip on your desk* I do!');
  } else {
    alert('did you even try...?');
  }
  console.log(skateboard + ' -Response to, Do you think I skateboard');

};

//Question3 Begins
var question3 = function(){
  var gummybears = prompt('Did you know my favorite candy is gummy bears?').toLowerCase();

  if(gummybears === 'yes' || gummybears === 'y' || gummybears === 'Yes'){
    alert('Good guess! I shall share them with you!');
    correctquestionsanswered++;
  } else if(gummybears === 'no' || gummybears === 'n' || gummybears === 'No'){
    alert('Welp no gummybears for you then!');
  } else {
    alert('you didnt even try.. you DEFINITELL aint gettin any gummybears');
  }
  console.log(gummybears + ' -Response to, Did you know my favorite candy is gummybears?');

};

//Question4 Begins
var question4 = function(){
  var Batman = prompt('Would you say my favorite superhero is Batman?').toLowerCase();

  if(Batman === 'yes' || Batman === 'y' || Batman === 'Yes'){
    alert('Good. This is the only answer to this question.');
    correctquestionsanswered++;
  } else if(Batman === 'no' || Batman === 'n' || Batman === 'No'){
    alert('You meant, yes. But thats okay!');
  } else {
    alert('Why you aint try? To arkham with you!');
  }
  console.log(Batman + ' -Response to, Would you say my favorite superhero is Batman?');

};

//Question5 Begins
var question5 = function(){
  var georgia = prompt('Did you know that I am from georgia?').toLowerCase();

  if(georgia === 'yes' || georgia === 'y' || georgia === 'Yes'){
    alert('You a real one!');
    correctquestionsanswered++;
  } else if( georgia === 'no' || georgia === 'n' || georgia === 'No'){
    alert('Well, now you know!');
  } else {
    alert('did you even try...?');
  }
  console.log(georgia + ' -Response to, Did you know that I am from georgia');

};

//Question6 Begins
var question6 = function(){
  var correctanswer = 4;
  var counter = 1;

  loop2:
  while (counter <= 4) {
    counter++;
    var tattooguess = prompt('How many tattoos do I have?');

    if (tattooguess === correctanswer || tattooguess === '4') {
      alert('Thats right!');
      correctquestionsanswered++;
      break loop2;
    } else{
      alert('Sorry, try again!');
    }
    if (counter > 4) {
      alert('Sorry, you didnt get it!');
    }
  }
};

//Question7 begins
var question7 = function(){
  var formercars = ['ford', 'chevy', 'kia', 'nissan'];
  var carsattempts = 0;

  loop1:
  while (carsattempts < 6) {carsattempts++;
    var carguess = prompt('Can you guess one of the 4 cars that I have previously drove? (Hint: Think Make, not Model)').toLowerCase(); //This will take the users answer and convert it into all lowercase.
    for (var i = 0; i < formercars.length; i++) {
      if (carguess === formercars[i]) {
        alert('You got it! I have drove in ' + carguess + '! In total, I have drove ' + formercars);
        correctquestionsanswered++;
        break loop1;
      }
    }
    alert('Sorry, try again!');
  }
  if (carsattempts > 5) {
    alert('Sorry you did not get it.  I have driven in a Ford, Chevy, Kia, and Nissan.'); //This is the message that will display if the user fails all 6 attempts.
  }

};
question1();
question2();
question3();
question4();
question5();
question6();
question7();

//This final alert will notificy the user how many questions they were asked, and how many they answered correctly.
alert('Thank you so much for to playing my game *mario vc* ' + username + ' you got ' + correctquestionsanswered + ' out of ' + totalQuestions + ' questions correct.');

