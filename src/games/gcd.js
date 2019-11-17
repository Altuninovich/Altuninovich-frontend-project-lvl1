import start from '../start';
const readlineSync = require('readline-sync');
const randomNum = () => {
  return Math.ceil(Math.random() * 100);
};
const task = () => `${Math.abs( randomNum())} ${Math.abs( randomNum())}`;
const num2 = (str) => {
  let i = str.length - 1;
  let res = ' ';
while (str[i] !== ' ') {
  res = `${str[i]}${res}`;
  i -= 1;
}
return res;
}
const num1 = (str) => {
  //const i = length.str -1;
  let res = ' ';
  let x = 0;
  while (str[x] !== ' ') {
    res += str[x];
    x += 1;
  }
  return res;
}
  const result = (str) => {
   const a = Number(num1(str));
   const b = Number(num2(str));
  let res = a > b ? a :b ;
  while (a % res !== 0 || b % res !== 0) {
    res -= 1;
  }
  return String(res);
}
console.log('Welcome to the Brain Games!');
console.log('Find the greatest common divisor of given numbers.')
const yourName = readlineSync.question(' May I have your name?');
console.log('Hello, ' + yourName + '!'); 
export const yourName2 = yourName;
export const startGcd = console.log(start(2,task , result, yourName2));