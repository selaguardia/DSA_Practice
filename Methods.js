/*
METHODS:
.map()
.filter()
.reduce()
.some()
.every()
.includes()
.slice()
The slice method always returns a new array and does not mutate (change) the source array

.splice() ===> array.splice(start, deleteCount, newItem1, newItem2...)
The splice method always returns an array containing the removed elements.

.shift()
.unshift()
.reverse()
.sort()
[...spreadOperator]
*/

// forEach
// Although a for loop can be used to iterate over an array, if you know you want to iterate over all of the elements in an array, the forEach method is a better approach:
const array = [1, 2, 3];
array.forEach((item, index) => {
  // console.log("forEach\n", item, index);
});

// map
const three = [1, 2, 3];
const doubled = three.map((item) => {
  return item * 2;
});
// console.log("map\n", doubled);

// filter
const ints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = ints.filter((item) => {
  return item % 2 === 0;
});
// console.log("Filter\n", evens);

// reduce
const sumArray = [1, 2, 3, 4, 5];
const sum = sumArray.reduce((result, item) => {
  return result + item;
}, 0);
// console.log("Reduce\n", sum);

// some
// if any item meet the conditions, it will return true
const numsArray = [1, 2, 3, 4, 5, -4];
const hasNegNums = numsArray.some((item) => {
  return item < 0;
});
// console.log("Some\n", hasNegNums);

// every
// if all item meet the conditions, it will return true
const numsArray2 = [1, 2, 3, -4, 5, 4];
const hasPosNums = numsArray2.every((item) => {
  return item > 0;
});
// console.log("Every\n", hasPosNums);

// find
const objects = [{ id: "a" }, { id: "b" }, { id: "c" }];
const found = objects.find((item) => {
  return item.id === "b";
});
// console.log('Find\n', found);

// findIndex
const objects2 = [{ id: "a" }, { id: "b" }, { id: "c" }];
const foundIndex = objects2.findIndex((item) => {
  return item.id === "b";
});
// console.log('FindIndex\n',foundIndex);



const n = 5, a = [4, 0, 1, -2, 3];
function mutateArr(n, a) {
  let b = [];

  if(n === 1) {
    return a;
  }

  for (let i = 0; i < n; i++) {
    if(i === 0) {
      b[i] = 0 + a[i] + a[i + 1];
    } else if (i === n - 1) {
      b[i] = a[i - 1] + a[i] + 0;
    } else {
      b[i] = a[i - 1] + a[i] + a[i + 1];
    }
  }
  return b;
}
// console.log(mutateArr(n, a));



// Count sheep present, present = true
var sheepArr = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ];

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}
// console.log(countSheeps(sheepArr))

// Count vowels

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length
}

// (...||[]) gets added because failed test for length
// console.log(getCount("abracadabra")) // 5
// console.log(getCount("sergio")) // 3
  
// fnDeclaration();  // thank you function declarations :)
// fnExpression();  // TypeError: fnExpression is not a function

// function fnDeclaration() {
//   console.log("I'm coming from a function declaration");
// }

// const fnExpression = function() {
//   console.log("I'm coming from a function expression");
// };
// const getCapitalizedInitials = (name) => {
//   let initials = [];
//   console.log('1',initials, typeof initials)
//   name
//   .trim()
//   .split(" ")
//   .forEach(name => {
//     initials += name.charAt(0).toUpperCase()
//     console.log('forEach',initials, typeof initials)
//   })
//   console.log('2',initials, typeof initials)
//   return initials;
// }
// getCapitalizedInitials(' sergio laguardia  ')

const capitalize = ([firstLetter, ...restOfWord]) => {
  console.log(firstLetter, typeof firstLetter)
  return firstLetter.toUpperCase() + restOfWord.join('')
}
console.log(capitalize('sergio'))