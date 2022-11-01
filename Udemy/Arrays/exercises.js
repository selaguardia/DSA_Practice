//! reverse string

const message = 'Edward';

// function reverse(string) {
//   const array = string.split('');
//   let reversedString = [];
//   for (let i = array.length -1; i >= 0; i--) {
//     reversedString += array[i];
//   }
//   console.log(reversedString)
// }

// reverse(message);

function reverse2(str) {
  if(!str || str.length < 2 || typeof str !== 'string') {
    return console.log('Wrong input')
  }

  const backwards = [];
  const totalItems = str.length -1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join('');
}

// console.log(reverse2(message))

const reverseString = string => string.split("").reverse().join("");
// console.log(reverseString(message));

const reverseString2 = string => [...string].reverse().join("");
// console.log(reverseString2(message));

const reverseString3 = string => [...string].reverse().join("");
// console.log(reverseString3('Laguardia'));


//! merge sorted arrays
function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
   let array1Item = array1[0];
   let array2Item = array2[0];
   let i = 1;
   let j = 1;

   // Check input
   if(array1.length === 0) {
    return console.log(array2);
   }else if(array2.length === 0) {
    return console.log(array1);
   }

   while (array1Item || array2Item) {
    console.log(array1Item, array2Item)
    if(!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item)
      array1Item = array1[i]
      i++
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j]
      j++;
    }
   }
  return console.log(mergedArray);
}

mergeSortedArrays([0,3,4,31],[4,6,30]);
// [0,3,4,4,6,30,31]

