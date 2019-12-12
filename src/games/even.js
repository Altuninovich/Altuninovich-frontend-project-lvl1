import { cons } from 'hexlet-pairs';

import getRandomNum from '../utils';

import start from '../start';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';
// получаем конструктор с вопросом и ответом
const getResultGames = () => {
  const question = getRandomNum(0, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return cons(question, answer);
};
export default () => start(instruction, getResultGames);
