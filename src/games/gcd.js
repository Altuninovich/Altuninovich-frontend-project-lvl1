import { cons } from '@hexlet/pairs';

import getRandomNum from '../utils';

import start from '../start';

const instruction = 'Find the greatest common divisor of given numbers.';

const getResultGames = () => {
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(0, 100);
  const task = `${num1} ${num2}`;
  let result = num1 > num2 ? num1 : num2;
  while (num1 % result !== 0 || num2 % result !== 0) {
    result -= 1;
  }
  const answer = String(result);
  return cons(task, answer);
};
export default () => start(instruction, getResultGames);
