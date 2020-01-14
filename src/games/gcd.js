import { cons } from '@hexlet/pairs';

import getRandomNum from '../utils';

import start from '../start';

const instruction = 'Find the greatest common divisor of given numbers.';

const getGreatestDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGreatestDivisor(b, a % b);
};

const getDataForGames = () => {
  const firstRandonNum = getRandomNum(1, 100);
  const secondRandomNum = getRandomNum(1, 100);
  const question = `${firstRandonNum} ${secondRandomNum}`;
  const answer = `${getGreatestDivisor(firstRandonNum, secondRandomNum)}`;

  return cons(question, answer);
};
export default () => start(instruction, getDataForGames);
