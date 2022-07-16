// Created a variable called userName with a blank string. Then set the variable userName to a string called Ashley. 
let userName = ' ';
userName = 'Ashley';

// If the userName is assigned the console will print: Hello Ashley! If the userName variable has a blank string the console will only print: Hello!
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Used an unchangable variable (const) to ask a question from the user to the Magic Eight Ball. Prints: Is Itally really beautiful?
const userQuestion = 'Is Italy really beautiful?';
console.log(userQuestion);

// Created a constant variable named randomNumber to generate a random number from 0-7. 
const randomNumber = Math.floor(Math.random() * 8);

// Used a switch statement instead of if/else so that the code is easier to read and write for the user and participants. 
switch(randomNumber){
    case 0:
        eightBall = 'It is certain'
        break;
    case 1:
        eightBall ='It is decidedly so'
        break;
    case 2:
        eightBall = 'Reply hazy try again'
        break;
    case 3:
        eightBall = 'Cannot predit now'
        break;
    case 4:
        eightBall = 'Do not count on it'
        break;
    case 5:
        eightBall = 'My souces say no'
        break;
    case 6:
        eightBall = 'Outlook not so good'
        break;
    case 7:
        eightBall = 'Signs point to yes'
        break;
}
// Used a string interpolation (template literal) to print out the results. 
console.log(`The eight ball says: ${eightBall}`);
