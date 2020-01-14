import { cons } from '@hexlet/pairs';

import getRandomNum from '../utils';

import start from '../start';

const instruction = 'What number is missing in the progression?';
const progressionLength = 10;

const getDataForGames = () => {
  const begin = getRandomNum(1, 99);
  const step = getRandomNum(1, 10);
  const hideElementPosition = getRandomNum(0, progressionLength - 1);
  const correctAnswer = begin + hideElementPosition * step;

  let progression = '';

  for (let score = 0; score < progressionLength; score += 1) {
    const checkPoint = begin + step * score;
    if (score === hideElementPosition) {
      progression = `${progression} ${'..'}`;
    } else {
      progression = `${progression} ${checkPoint}`;
    }
  }
  const answer = String(correctAnswer);
  return cons(progression, answer);
};
export default () => start(instruction, getDataForGames);
