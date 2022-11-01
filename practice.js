// /* Google Interview Question
// first recurring character
// Given an array = [2,5,1,2,3,5,1,2,4];
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4];
// It should return 1

// Given an array = [2,3,4,5];
// It should return undefined
// */

// const firstRecChar = (arr) => {
//   for(let i = 0; i < arr.length; i ++) {
//     for( let j = i + 1; j < arr.length; j++) {
//       if(arr[i] === arr[j]) {
//         return arr[i]
//       }
//     }
//   }
//   return undefined;
// }
// // console.log(firstRecChar([2,5,1,2,3,5,1,2,4]));

// const firstRecChar2 = (input) => {
//   let map = {};
//   for(let i = 0; i < input.length; i++) {
//     // console.log(map)
//     if(map[input[i]] !== undefined) {
//       return input[i]
//     } else {
//       map[input[i]] = i;
//     }
//   }
//   console.log(map);
//   return undefined;
// }
// console.log(firstRecChar2([2,5,5,2,3,5,1,2,4]));

//! create stack supports push and pop with the ave runtime
//! make method returns max value within the stack

class Node {
  constructor(value){
    this.head = value;
    this.tail = null;
  }
  push() {}
  pop() {}
  getMax() {}
}

const myStack = new Node();

myStack.push(5)
