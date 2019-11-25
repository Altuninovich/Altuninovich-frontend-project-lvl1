import start from '../start';

const readlineSync = require('readline-sync');

const randomNum = () => Math.ceil(Math.random() * 100);
// В answer получаем yes если простое число , no если не простое
const answer = (number) => {
  if (number < 2) {
    return false;
  }
  const iter = (num, divider) => {
    if (num % divider === 0) {
      return 'no';
    }
    if (num / 2 <= divider) {
      return 'yes';
    }
    return iter(number, divider + 1);
  };
  return iter(number, 2);
};

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const yourName = readlineSync.question(' May I have your name?');
console.log(`Hello,'${yourName}!`);
export const yourName2 = yourName;
export const startPrime = () => start(2, randomNum, answer, yourName2);
