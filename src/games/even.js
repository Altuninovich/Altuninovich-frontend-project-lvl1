import start from '../start';
const readlineSync = require('readline-sync');
const randomNum = () => {
  return Math.ceil(Math.random() * 100);
};//получаем случайное целое число 

 const yesNo = (number) => {
  if (number % 2 === 0) {
    return "yes";
  }

  return "no";
};//получаем 'no' если нечетное, 'yes' если четноe
console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".')
const yourName = readlineSync.question(' May I have your name?');
console.log('Hello, ' + yourName + '!'); 
export const yourName2 = yourName;
export const startEven = console.log(start(2, randomNum, yesNo, yourName2));