const readlineSync = require('readline-sync');

const greeting = readlineSync.question(' Welcome to the Brain Games! May I have your name? ');
console.log('Hello,' + greeting + '!');

export default greeting;