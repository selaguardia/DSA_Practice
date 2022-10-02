const strings = ['a','b','c','d'];

// accessing === O(1)
strings[2];

// push === O(1)
strings.push('e');

// pop === O(1)
strings.pop();
strings.pop();

// unshift === O(n)
strings.unshift('x');

// shift === O(n)
strings.shift();

// splice === O(n/2) => O(n)
// can also delete with splice
strings.splice(2, 0, 'alien');

console.log(strings);

// ====================================================
// arrays in js are objects with interger based keys that act like indexes

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const deletedItem = this.data[index];
    this.shiftItems(index);
    return deletedItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
// method is a function in class
const newArray = new MyArray();
newArray.push("Eddie");
newArray.push("Rica");
newArray.push("Arya");
// newArray.pop()
newArray.delete(2);
newArray.push("Chico");
newArray.push("Yesenia");
newArray.push("Sergio");
newArray.delete(2);
console.log(newArray);

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

// const isDivisible = (n, x, y) => {
//   console.log(`n%x ${n%x}`);
//   console.log(`n%y ${n%y}`);
// }
// isDivisible(5,1,2);

