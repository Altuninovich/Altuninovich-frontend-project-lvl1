import start from '../start';
const readlineSync = require('readline-sync');
const randomNum = () => {
  return Math.ceil(Math.random() * 100);
};//получаем случайное целое число 
//в task отображаем примеры
const task = () => {
  let i = randomNum();
  if(i % 3 === 0) {
    return `${randomNum()}${'-'}${randomNum()}`;
  }
  else if (i % 3 === 1) {
	  return `${randomNum()}${'+'}${randomNum()}`;
  }
 else {
	 return `${randomNum()}${'*'}${randomNum()}`;
 }
}


const answer = (example) => String(eval(example));

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?')
const yourName = readlineSync.question(' May I have your name?');
console.log('Hello, ' + yourName + '!'); 
export const yourName2 = yourName;
export const startCalc = console.log(start(2,task , answer, yourName2));