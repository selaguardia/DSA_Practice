/**
 * Both are linear data structures, allow us to traverse one by one. Where only one data element can be reached.
 *
 * Difference are how items are removes. Unlike arrays theres no random access operation.
 * Use Stack and Queues to run push, peek, pop. Which are in the begging or end.
 *
 * Unlike arrays or Linked List we have less methods or less actions to performs. Which is a benefit to have this limiting ability, bc you can control that the person can only perform the right operations that are efficient
 */

//! Stacks
/**
 * LIFO = books stacked. Can only access the top/end.
 * useful for: browser history, writing text: undo / redo
 *
 * lookup O(n) // dont want to traverse/ heavy operation
 * pop O(1) // remove last item
 * push O(1) // add an item to end
 * peek O(1) // peek last item
 */

//! Queue
/**
 * FIFO = waiting in line at sbux. Can only access the first item.
 * usefor for: waitlist app for concert, check in to rest for table, ordering uber, a printer
 *
 * loopup O(n)
 * enqueue O(1) -> push //add item to end
 * dequeue O(1) -> pop doesnt take last item, takes first item off
 * peek O(1) // peek first item
 *
 * Why would you not want to use an array to build a queue?
 * It's very inefficient, bc were removing the 1st item in the list, so you would have to shift all indexex.
 */

// Stacks
// Can be built with arrays or linked lists
// Why with arrays = allow cache locality, makes it technically faster when accessing its item in memory bc next to eachother. But either static or dynamic array. when reaches limit has to double that memory and create new space for it.
// Why with linked list? = scattered in memory, also have extra memory bc holding to pointers. But more dynamic memory, can keep adding to list.

// Queues
// Can be built with arrays or linked lists
// You DONT want to build with an array bc arrays have indexes, if you need to remove the first item, you now need to shift the rest of the list and reassign the indexes. O(n) linear time. VS Linked List whic we only have pointer to head and tail, so if we remove the first item, we just need to remove the head and reassign to the tail (second person in line).

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//! Stack using Linked Lists
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      // Udemy answer, holding pointer not necessary though
      // const holdingPointer = this.top;
      // this.top = newNode;
      // this.top.next = holdingPointer;
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    // const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

// const myStack = new Stack();
// console.log(myStack.push("google"));
// console.log(myStack.push("udemy"));
// console.log(myStack.push("discord"));
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.peek());

//! Stack using Array
class Stack2 {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}

// const myStack2 = new Stack2();
// console.log(myStack2.push("google"));
// console.log(myStack2.push("udemy"));
// console.log(myStack2.push("discord"));
// console.log(myStack2.pop());
// console.log(myStack2.pop());
// console.log(myStack2.pop());
// console.log(myStack2.peek());

//! Array Queue === BAD
//? Array Linked List === GOOD

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if(!this.first) {
      return null;
    }
    if(this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

// const myQueue = new Queue();
// console.log(myQueue.enqueue('Eddie'))
// console.log(myQueue.enqueue('Rica'))
// console.log(myQueue.enqueue('Rowdy'))
// console.log(myQueue.enqueue('Arya'))
// console.log('Peek: ',myQueue.peek())
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())
// console.log('Peek: ',myQueue.peek())

//! Common Intvw Qs
// Implement Queue using Stacks
// Easy if you create stack using arrays;

/* Stacks + Queues
PROS
Fast Operations
Fast Peek
Ordered

CONS
Slow Lookup

*/



