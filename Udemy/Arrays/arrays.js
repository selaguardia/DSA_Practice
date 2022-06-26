// const strings = ['a','b','c','d'];

// // accessing === O(1)
// strings[2];

// // push === O(1)
// strings.push('e');

// // pop === O(1)
// strings.pop();
// strings.pop();

// // unshift === O(n)
// strings.unshift('x');

// // splice === O(n/2) => O(n)
// strings.splice(2, 0, 'alien');

// console.log(strings);

// const arrayOfSheep = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
//   null,
//   undefined
// ];

// const countSheep = (arrayOfSheep) => {
//   let count = 0;
//   for (let i = 0; i < arrayOfSheep.length; i++) {
//     if(!null && !undefined && arrayOfSheep[i] === true) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countSheep(arrayOfSheep));

// const countSheep2 = (arrayOfSheep) => {
//   return arrayOfSheep.filter(Boolean).length;
// }
// console.log(countSheep2(arrayOfSheep));

// // count vowels
// const getCount = (str) => {
//   let vowels = ['a','e','i','o','u'];
//   return str.split('').filter(letter => {
//     return vowels.includes(letter) ? true : false;
//   }).length
// }
// console.log(getCount('abracadabra'))

// const getCount2 = (str) => {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }
// console.log(getCount2('abracadabra'));


const isDivisible = (n, x, y) => {
  console.log(`n%x ${n%x}`);
  console.log(`n%y ${n%y}`);
}
isDivisible(5,1,2);