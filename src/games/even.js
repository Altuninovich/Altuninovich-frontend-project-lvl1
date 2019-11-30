import start from '../start';

import { cons } from '../cons';

import { randomNum } from '../utils';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';
// получаем конструктор с вопросом и ответом
const even = () => {
  const randomNum2 = randomNum();
  const answer = randomNum2 % 2 === 0 ? 'yes' : 'no';
  return cons(randomNum2, answer);
};
export default () => start(instruction, even);
