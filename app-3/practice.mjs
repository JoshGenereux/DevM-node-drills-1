import add from './addTwoFunctions.js'
import functions from './functions.js';
const {minusOne, timesThree, ageText} = functions;


add(5);
const minus = minusOne(6);
const three = timesThree(5);
const age = ageText(26);

console.log(minus)
console.log(three)
console.log(age)