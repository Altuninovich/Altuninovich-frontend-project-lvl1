import { cons } from '@hexlet/pairs';

import getRandomNum from '../utils';

import start from '../start';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
// получаем конструктор с вопросом и ответом
const getDataForGames = () => {
  const question = getRandomNum(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};
export default () => start(instruction, getDataForGames);
