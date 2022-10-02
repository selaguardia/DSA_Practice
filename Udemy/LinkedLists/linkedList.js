/*
=== Linked List ===
prepend O(1)
append  O(1)
lookup  O(n)
insert  O(n)
delete  O(n)
*/

// 10 --> 5 --> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value); // v:5, n:null
    // console.log("newNode: ", newNode);
    // console.log("this.head: ", this.head); // v:10, n:null
    // console.log("this.tail: ", this.tail); // v:10, n:null
    this.tail.next = newNode; // assigns v:10, n: -> v:5, n:null w/o  v:10, n:null
    // console.log(":::this.tail.next = newNode:::")
    // console.log("this.head2: ", this.head); 
    // console.log("this.tail2: ", this.tail);
    this.tail = newNode; // v:5, n:null, w/o v:10, n:null
    // console.log(":::this.tail = newNode:::")
    // console.log("this.head3: ", this.head);
    // console.log("this.tail3: ", this.tail);
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    // Udemy solution (not DRY)
    // const holdingPointer = leader.next;
    // leader.next = newNode;
    // newNode.next = holdingPointer;
    newNode.next = leader.next;
    leader.next = newNode;
    this.length++;
    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // check params

    // my attempt Got it right, but used traverseToIndex 2x
    // also currentNode would make more sense as unwantedNode or nodeToDelete

    // const leader = this.traverseToIndex(index-1);
    // const currentNode = this.traverseToIndex(index);
    // leader.next = currentNode.next;

    const leader = this.traverseToIndex(index - 1);
    const nodeToDelete = leader.next;
    leader.next = nodeToDelete.next;

    this.length--;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 10 --> 5 --> 16
const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
// myLinkedList.append(1);
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20,88);
// myLinkedList.insert(5, 12);
// console.log(myLinkedList.printList());
// myLinkedList.remove(1)
// console.log(myLinkedList.printList());
// myLinkedList.reverse();
// console.log(myLinkedList.printList());
