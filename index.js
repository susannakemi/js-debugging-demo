const maths = require('./maths.js');

console.log("sum: " + maths.sum(30, 20));
console.log("max: " + maths.max(10, 13));
console.log("factorial: " + maths.actorial(3));

const array1 = [1,2,3,4];
const array2 = [10,10,20,20];
console.log("arraySum: " + maths.arraySum(array1, array2));