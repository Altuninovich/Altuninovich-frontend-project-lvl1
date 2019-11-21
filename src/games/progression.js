import start from '../start';
const readlineSync = require('readline-sync');
const getRandomNum = (min, max) => Math.floor(min + (Math.random() * (max + (1 - min))));
//отображает прогрессию
const progression = () => {
let res = '';
let begin = getRandomNum(1,69);
const end = begin + 20;
const pass = 2;
let passPosition =getRandomNum(1,9);
while (begin < end) {
  if (passPosition === 0) {
    res = `${res} ${'..'}`;
    begin += pass;
  }
  passPosition -= 1;
  begin += pass;
  res = `${res} ${begin}`;
}
return String(res);
}
//отображает пропущенный знак
const answer = ( str ) => {
  let i = 0;
  while (str[i] !== '.') {
    i += 1;
  }
  return  String(Number(str.substr(i - 3, 2)) + 2);
}
console.log('Welcome to the Brain Games!');
console.log('What number is missing in the progression?')
const yourName = readlineSync.question(' May I have your name?');
console.log('Hello, ' + yourName + '!'); 
export const yourName2 = yourName;
export const startProgression = console.log(start(2, progression, answer, yourName2));