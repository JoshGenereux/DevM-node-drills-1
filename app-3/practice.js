const add = require('./addTwoFunctions')
const {minusOne, timesThree, ageText} = require('./functions');

add(10);

const minus = minusOne(6);
const three = timesThree(5);
const age = ageText(26);

console.log(minus)
console.log(three)
console.log(age)

