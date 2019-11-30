import start from '../start';

import { cons } from '../cons';

import { randomNum } from '../utils';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const prime = (number) => {
  if (number < 2) {
    return false;
  }
  const iter = (num, divider) => {
    if (num % divider === 0) {
      return false;
    }
    if (num / 2 <= divider) {
      return true;
    }
    return iter(number, divider + 1);
  };
  return iter(number, 2);
};
const answer = () => {
  const num = randomNum();
  const yesNo = prime(num) ? 'yes' : 'no';
  return cons(num, yesNo);
};
export default () => start(instruction, answer);
