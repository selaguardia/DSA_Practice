//! forEach
//! filter
//! map
//! sort
//! reduce

const companies = [
  { name: "Comapany One", category: "Finance", start: 1950, end: 2006 },
  { name: "Comapany Two", category: "Retail", start: 1980, end: 2000 },
  { name: "Comapany Three", category: "Tech", start: 1995, end: 2022 },
  { name: "Comapany Four", category: "Auto", start: 1950, end: 2010 },
  { name: "Comapany Five", category: "Tech", start: 1991, end: 2020 },
  { name: "Comapany Six", category: "Tech", start: 2004, end: 2010 },
  { name: "Comapany Seven", category: "Retail", start: 1995, end: 1999 },
  { name: "Comapany Eight", category: "Retail", start: 2010, end: 2015 },
  { name: "Comapany Nine", category: "Auto", start: 1980, end: 2010 },
];

//! forEach
// for(let i = 0; i < companies.length; i++) {
//   console.log(companies[i])
// }

companies.forEach((company, index, companies) => {
  // console.log('Company: ', company.name);
  // console.log('Index: ', index, company.name);
  // console.log(companies); // array of companies
});

//! filter
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

let canDrink = [];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}
// console.log('1', canDrink);

const canDrink2 = ages.filter((age) => {
  if (age >= 21) {
    return true;
  }
});
// console.log('2', canDrink2)

const canDrink3 = ages.filter((age) => age >= 21);
// console.log('3',canDrink3)

const oldTech = companies.filter((company) => {
  if (company.start < 2000 && company.category === "Tech") {
    return true;
  }
});
// console.log("OLD TECH: ", oldTech);
const oldTech2 = companies.filter(company => company.start < 2000 && company.category === "Tech");
// console.log("OLD TECH 2: ", oldTech2);

//! map
// Create array of company names
const companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log('C Names: ', companyNames);
const nums = [1,2,3,4,5,6,7,8,9,10]
const squared = nums.map(age => age ** 2);
// console.log(nums)
// console.log(squared)

//! sort
const sortedCompanies = companies.sort((c1, c2) => {
  if(c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});
// console.log(sortedCompanies);

const sortCompStartDate =companies.sort((a,b) => (a.start > b.start ? 1 : -1));
// console.log(sortCompStartDate);

const sortAgesASC = ages.sort((a,b) => a-b);
// console.log('ASC: \n',sortAgesASC)

const sortAgesDESC = ages.sort((a,b) => b-a);
// console.log('DESC: \n',sortAgesDESC)

//! reduce


const edads = [10,32,5,20,15,18]
let total = 0;
for(let i = 0; i < edads.length; i++) {
  total += edads[i];
}
console.log('Total Ages: ', total)





















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

const n = 5,
  a = [4, 0, 1, -2, 3];
function mutateArr(n, a) {
  let b = [];

  if (n === 1) {
    return a;
  }

  for (let i = 0; i < n; i++) {
    if (i === 0) {
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
var sheepArr = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}
// console.log(countSheeps(sheepArr))

// Count vowels

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
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
  console.log(firstLetter, typeof firstLetter);
  return firstLetter.toUpperCase() + restOfWord.join("");
};
// console.log(capitalize('sergio'))
