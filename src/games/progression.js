import start from '../start';

import { cons } from '../cons';

import { getRandomNum } from '../utils';

const instruction = 'What number is missing in the progression?';
const progression = () => {
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
  return cons(res, String(missedNumber));
};
export default () => start(instruction, progression);
