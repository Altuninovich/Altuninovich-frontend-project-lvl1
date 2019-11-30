import readlineS from 'readline-sync';

import { car, cdr } from './cons';

const start = (instruction, fun) => {
  let i = 3;
  console.log('Welcome to the Brain Games!');
  console.log(instruction);
  const yourName = readlineS.question(' May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  while (i > 0) {
    i -= 1;
    const questionAnswer = fun();
    console.log(`${'Question: '}${car(questionAnswer)}`);
    const yourAnswer = readlineS.question('Your answer: ');
    if (cdr(questionAnswer) !== yourAnswer) {
      return console.log(`'${yourAnswer}' ${'is wrong answer ;(. Correct answer was'} '${cdr(questionAnswer)}'.
  ${"Let's try again,"} ${yourName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`${'Congratulations,'} ${yourName}!`);
};
export default start;
