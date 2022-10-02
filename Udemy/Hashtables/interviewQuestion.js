/* Google Interview Question
first recurring character
Given an array = [2,5,1,2,3,5,1,2,4];
It should return 2

Given an array = [2,1,1,2,3,5,1,2,4];
It should return 1

Given an array = [2,3,4,5];
It should return undefined
*/

// Doesnt work, checks first index for recurring char. Doesnt pass array 2 above

const firstRecurringChar = (input) => {
  for(let i = 0; i < input.length; i++) {
    for(let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return `${input[i]}`;
      }
    }
  }
  return undefined;
}
// console.log('Test 1: ', firstRecurringChar([2,5,1,2,3,5,1,2,4]));
// console.log('Test 2: ', firstRecurringChar([2,1,1,2,3,5,1,2,4]));
// console.log('Test 3: ', firstRecurringChar([2,3,4,5]));


const firstRecurringCharacter = (input) => {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if(map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
}
// console.log('Test 4: ', firstRecurringCharacter([2,5,1,2,3,5,1,2,4]));
// console.log('Test 5: ', firstRecurringCharacter([2,1,1,2,3,5,1,2,4]));
// console.log('Test 6: ', firstRecurringCharacter([2,3,4,5]));

let n = 123.4545;
let s1 = n.toString(); // "123.456"
let s2 = parseFloat(n.toFixed(2)); // "123.46"
console.log(n, typeof n)
console.log(s1, typeof s1)
console.log(s2, typeof s2)