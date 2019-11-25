import readlineS from 'readline-sync';

const start = (i, num, fun, yourName) => {
  const resultf1 = num();
  const resultf2 = fun(resultf1);
  console.log(`${'Question: '}${resultf1}`);
  const yourAnswer = readlineS.question('Your answer: ');
  if (resultf2 === yourAnswer) {
    console.log('Correct!');
    if (i > 0) {
      return start(i - 1, num, fun, yourName);
    }
    return console.log(`${'Congratulations,'} ${yourName}!`);
  }
  return console.log(`'${yourAnswer}' ${'is wrong answer ;(. Correct answer was'} '${resultf2}'.
  ${"Let's try again,"} ${yourName}!`);
};
export default start;
