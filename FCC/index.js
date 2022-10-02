/**
 * Arrays
 *  - static vs dynamic
 * 
 * HASHTABLES
 * 
 * Linked List
 * 
 * Stacks & Queues
 * 
 * Trees
 *  - Binary Search Tree
 *  - AVL Trees
 * - Red Black Trees
 * 
 * Graphs
 * 
 * Recursion
 * 
 * Sorting
 *  - Bubble
 *  - Selection
 *  - QUICK SORT
 *  - MERGE SORT
 */



//! Stacks

// functions: push, pop, peek, length

let letters = [];
let word = 'racecar'
let rword = ''

for (let i = 0; i < word.length; i++) {
  letters.push(word[i])
}
console.log('before:',letters)
for (let i = 0; i < word.length; i++) {
  rword += letters.pop()
}
console.log('after:',letters)
console.log(rword)


if (rword === word) {
  console.log(word + ` is a palindrome`)
} else {
  console.log(`${word} is not a palindrome`)
}

// Create a stack
let Stack = function() {
  this.count = 0;
  this.storage = {}

  this.push = function(value) {
    this.storage[this.stora]
  }
}