import { cons } from 'hexlet-pairs';

import getRandomNum from '../utils';

import start from '../start';

const instruction = 'What is the result of the expression?';
const operations = ['-', '+', '*'];
const lengthArray = operations.length - 1;
const getResultGames = () => {
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(0, 100);
  const numOperator = getRandomNum(0, lengthArray);
  let results;
  switch (numOperator) {
    case 0:
      results = num1 - num2;
      break;
    case 1:
      results = num1 + num2;
      break;
    case 2:
      results = num1 * num2;
      break;
    default:
      results = 'null';
  }
  const question = `${num1} ${operations[numOperator]} ${num2}`;
  const answer = String(results);
  return cons(question, answer);
};
export default () => start(instruction, getResultGames);
