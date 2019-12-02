import start from '../start';

import { cons } from '../cons';

import { randomNum, getRandomNum } from '../utils';

const instruction = 'What is the result of the expression?';
const calc = () => {
  const num1 = randomNum();
  const num2 = randomNum();
  const operator = ['-', '+', '*'];
  const numOperator = getRandomNum(0, 2);
  let question;
  switch (numOperator) {
    case 0:
      question = num1 - num2;
      break;
    case 1:
      question = num1 + num2;
      break;
    case 2:
      question = num1 * num2;
      break;
    default:
      question = 'ups';
  }
  return cons(`${num1} ${operator[numOperator]} ${num2}`, String(question));
};
export default () => start(instruction, calc);
