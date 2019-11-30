import start from '../start';

import { cons } from '../cons';

import { randomNum } from '../utils';

const instruction = 'Find the greatest common divisor of given numbers.';

const answer = () => {
  const num1 = randomNum();
  const num2 = randomNum();
  const task = `${num1} ${num2}`;
  let res = num1 > num2 ? num1 : num2;
  while (num1 % res !== 0 || num2 % res !== 0) {
    res -= 1;
  }
  return cons(task, String(res));
};
export default () => start(instruction, answer);
