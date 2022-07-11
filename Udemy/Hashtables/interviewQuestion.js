/* Google Interview Question
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
    console.log(`[index] ${input[i]}`)
    for(let j = i + 1; j < input.length; j++) {
      console.log(input[j])
      if (input[i] === input[j]) {
        return `answer ${input[i]}`;
      }
    }
  }
  return undefined;
}
// console.log(firstRecurringChar([2,1,1,2,3,5,1,2,4]));

const firstRecurringCharacter = (input) => {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if(map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map)
  }
  return undefined;
}
console.log(firstRecurringCharacter([2,5,1,1,2,3,5,1,2,4]));