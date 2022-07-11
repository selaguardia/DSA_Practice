/*
METHODS:
.map()
.filter()
.reduce()
.some()
.every()
.includes()
.slice()
.splice()
.shift()
.unshift()
.reverse()
.sort()
[...spreadOperator]
*/

let myArray = [9,10,11,12];
let myTotal = 0;

for (let i = 0; i< myArray.length; i++) {
  myTotal += myArray[i]
}
// myArray.shift();
console.log(myTotal);
