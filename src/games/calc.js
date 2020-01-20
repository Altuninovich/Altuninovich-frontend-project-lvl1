import { cons } from '@hexlet/pairs';

import getRandomNum from '../utils';

import start from '../play';

const instruction = 'What is the result of the expression?';
const operations = ['-', '+', '*'];
const highestValueRandomNum = operations.length - 1;
const getDataForGame = () => {
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(0, 100);
  const operatorNumber = getRandomNum(0, highestValueRandomNum);
  const operator = operations[operatorNumber];
  let result;
  switch (operator) {
    case '-':
      result = num1 - num2;
      break;
    case '+':
      result = num1 + num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return null;
  }
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(result);
  return cons(question, answer);
};
export default () => start(instruction, getDataForGame);
