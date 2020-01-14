import readlineS from 'readline-sync';

import { car, cdr } from '@hexlet/pairs';

const start = (instruction, fun) => {
  console.log('Welcome to the Brain Games!!');
  console.log(instruction);
  const yourName = readlineS.question(' May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  for (let i = 0; i < 3; i += 1) {
    const gameData = fun();
    console.log(`${'Question: '}${car(gameData)}`);
    const yourAnswer = readlineS.question('Your answer: ');
    if (cdr(gameData) !== yourAnswer) {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${cdr(gameData)}'.
  Let's try again, ${yourName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations ${yourName}!`);
};
export default start;
