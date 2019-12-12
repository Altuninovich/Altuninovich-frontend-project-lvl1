import { cons } from 'hexlet-pairs';

import getRandomNum from '../utils';

import start from '../start';

const instruction = 'What number is missing in the progression?';
const getResultGames = () => {
  let missedNumber;
  let res = '';
  let begin = getRandomNum(1, 69);
  const end = begin + 20;
  const pass = 2;
  let passPosition = getRandomNum(1, 9);
  while (begin < end) {
    if (passPosition === 0) {
      res = `${res} ${'..'}`;
      begin += pass;
      missedNumber = begin;
    }
    passPosition -= 1;
    begin += pass;
    res = `${res} ${begin}`;
  }
  const answer = String(missedNumber);
  return cons(res, answer);
};
export default () => start(instruction, getResultGames);
