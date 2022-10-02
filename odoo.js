// let amount = 125;
// const TAX_PERCENTAGE = .09;
// const taxInCents = [];

// const taxAmount = (dollars, tax) => {
//   let taxInDollars = dollars * tax;
//   taxInCents.push(taxInDollars * 100)
//   console.log(`$${taxInDollars} dollars is equal to ${taxInCents} cents`);
//   return taxInCents;
// }
// taxAmount(amount, TAX_PERCENTAGE);

// const deck = ['A',1,2,3,4,5,6,7,8,9,10,'J','K','Q']

// const shuffleDeck = (array) => {
//   return array.sort((a,b) => 0.5 - Math.random())
// }
// shuffleDeck(deck);

const string = "Welcome to Indonesia";

const sumOfVowels = (string) => {
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case string[i] === 'A' || 'a':
        sum += 1;
        break;
      case string[i] === 'E' || 'e':
        sum += 2;
        break;
      case string[i] === 'I' || 'i':
        sum += 3;
        break;
      case string[i] === 'O' || 'o':
        sum += 4;
        break;
      case string[i] === 'U' || 'u':
        sum += 5;
        break;
    }
  }
  return sum;
};

console.log(sumOfVowels(string))