import readlineS from 'readline-sync';

import { car, cdr } from '@hexlet/pairs';

const numberOfRounds = 3;
const start = (instruction, getDataForGame) => {
  console.log('Welcome to the Brain Games!!');
  console.log(instruction);
  const yourName = readlineS.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const dataForTheGameQuestionAnswer = getDataForGame();
    const question = car(dataForTheGameQuestionAnswer);
    const answer = cdr(dataForTheGameQuestionAnswer);
    console.log(`Question: ${question}`);
    const yourAnswer = readlineS.question('Your answer: ');
    if (answer !== yourAnswer) {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${yourName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations ${yourName}!`);
};
export default start;
