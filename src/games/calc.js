import start from '../start';

import { cons } from '../cons';

import { randomNum } from '../utils';

const instruction = 'What is the result of the expression?';
// в task отображаем примеры
const task = () => {
  const i = randomNum();
  if (i % 3 === 0) {
    return `${randomNum()}${'-'}${randomNum()}`;
  } if (i % 3 === 1) {
    return `${randomNum()}${'+'}${randomNum()}`;
  }
  return `${randomNum()}${'*'}${randomNum()}`;
};
const questionAnswer = () => {
  const question = task();
  const answer = String(eval(question));
  return cons(question, answer);
};
export default () => start(instruction, questionAnswer);
