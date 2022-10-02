/*
=== Doubly Linked List ===
prepend O(1)
append  O(1)
lookup  O(n)
insert  O(n)
delete  O(n)
*/

//! allows us to traverse list backwards
// searching a doubly linked list can technicially be more efficient, lookup can can O(n/2) but still have to drop the constant

//? Single VS Doubly
/* 
Singly PRO
- simple implemantation
- less memory, less operations, a little faster

Singly CONS
- Cant traverse backwards

# Appropriate when have less memory, or expensive memorry. Main goal in fast insertion and deletion. not much searching

Doubly PRO
- Can traverse front or back
- If you need to delete prevnode dont need to traverse from the head to find prevNode, (singly doesnt have that concept)


Doubly CONS
- fairly complex to implement
- more memory and storage because of that extra property
- extra operations need to perform

Appropriate when dont have much limitation on memory
good operations for searching for elements, such as searching backwards and not just forward
*/

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      prevNode: null,
      next:null
    }
    this.tail = this.head;
    this.length = 1;

  }
  append(value) {
    const newNode = new Node(value);
    newNode.prevNode = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prevNode = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if(index >= this.length) {
      return this.append(value)
    }
    const newNode = new Node(value);
    
    const leader = this.traverseToIndex(index -1);
    const follower = leader.next;

    leader.next = newNode;
    newNode.prevNode = leader;
    newNode.next = follower;
    follower.prevNode = newNode;
    console.log(this)
    this.length++;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
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

    const leader = this.traverseToIndex(index-1);
    const nodeToDelete = leader.next;
    leader.next = nodeToDelete.next;
    nodeToDelete.next.prevNode = leader;
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
}

class Node {
  constructor(value) {
    this.value = value;
    this.prevNode = null;
    this.next = null;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(10);

myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
// myDoublyLinkedList.append(1);
// myDoublyLinkedList.prepend(1);
// myDoublyLinkedList.insert(1, 99);
console.log(myDoublyLinkedList.printList());

// myDoublyLinkedList.insert(20,88);
// myDoublyLinkedList.insert(5, 12);
myDoublyLinkedList.remove(1)
console.log(myDoublyLinkedList.printList());