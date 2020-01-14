import { cons } from '@hexlet/pairs';

import getRandomNum from '../utils';

import start from '../start';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrimeNum = (number) => {
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
const getDataForGames = () => {
  const question = getRandomNum(0, 100);
  const answer = isPrimeNum(question) ? 'yes' : 'no';
  return cons(question, answer);
};
export default () => start(instruction, getDataForGames);
