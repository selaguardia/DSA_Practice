const findLongestWord = (str) => {
  let words = str.split(' ');
  let longest = '';
  for(let word of words) {
    if(word.length > longest.length) {
      longest = word;
    }
  }return longest.length;
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

const findLongestWord2 = (str) => {
  return str.split(' ').sort((a,b) => b.length - a.length)[0].length;
}
console.log(findLongestWord2('The quick brown fox jumped over the lazy dog'));