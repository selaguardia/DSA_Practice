/**
 * Arrays are mutables
 * push - to end
 * unshift - to begining
 * pop() - remove last element
 * shift() - removes first element
 * splice() - modifies array and returs new array
 * slice() - does not modify - copies or extracts a given number of elements to a new array
 * indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.
 * 
 * 
 */
 


const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

// const names = users.map(user => user.name);
// const ages = users.map((user, index) => {
//   console.log(index, user)
// })
// console.log(names);
// console.log(ages)

function palindrome(str) {

  let lower = str.toLowerCase();
  let reversed = lower.split('').reverse().join('');
  if(lower !== reversed){
    return false;
  }
  return true;
}

console.log(palindrome("sergres"));