// created a variable called userName with a blank string.
let userName = ' ';
userName = 'Ashley';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = 'Is Italy really beautiful?';
console.log(userQuestion);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = ' ';
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
console.log(`The eight ball says: ${eightBall}`);