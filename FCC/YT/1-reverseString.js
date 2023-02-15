function reverseStr(string) {
  return string.split('').reverse().join('')
}
// console.log(reverseStr("Hello"))

// reverse a string
const reverseString = string => string.split("").reverse().join("");
// console.log(reverseString("Hello World"));

// without built-in method
const reverseString2 = (str) => {
  let final = "";
  for (let i = str.length -1; i >= 0; i--) {
    final += str[i];
  }
  return final;
};
console.log(reverseString2("hello"))








