import { cons } from '@hexlet/pairs';

import getRandomNum from '../utils';

import start from '../play';

const instruction = 'Find the greatest common divisor of given numbers.';

const getGreatestDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGreatestDivisor(b, a % b);
};

const getDataForGame = () => {
  const firstRandonNum = getRandomNum(1, 100);
  const secondRandomNum = getRandomNum(1, 100);
  const question = `${firstRandonNum} ${secondRandomNum}`;
  const answer = toString(getGreatestDivisor(firstRandonNum, secondRandomNum));

  return cons(question, answer);
};
export default () => start(instruction, getDataForGame);
