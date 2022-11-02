class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    // create new Node
    /** 
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
     */

    // my version adds a check incase DLL isnt given an initial value
    if (value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    } else {
      this.head = null;
      this.tail = this.head;
      this.length = 0;
    }
  }
  push(value) {
    // create new Node
    const newNode = new Node(value);
    // check if list is empty
    // add Node to end
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      // this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    // check if list empty
    // if (!this.head) return undefined; // same v1
    // if (!this.tail) return undefined; // same v2
    if (this.length === 0) return undefined; // same v3
    // if 2 or more items
    let temp = this.tail;
    // edge case if i only have 1 item left
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }
  unshift(value) {
    // create new Node
    const newNode = new Node(value);
    // check if list is empty
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // add Node to beginning
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null
      this.tail = null;
    } else {
      this.head = this.head.next;
       // or else it would keep the other pointers
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
  //! CONT WATCHING ON YOUTUBE 2:24:15
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;
    // insert Node
    // create new Node
    const newNode = new Node(value);
    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;
    const before = this.get(index - 1);
    const temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let prev = null;
    let next = temp.next;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(2);
console.log('push:\n',myDoublyLinkedList.push(1));
// myDoublyLinkedList.pop()
console.log('shift:\n',myDoublyLinkedList.shift())
// console.log('shift:\n',myDoublyLinkedList.shift())
// console.log('shift:\n',myDoublyLinkedList.shift())
// myDoublyLinkedList.push(1)
// console.log('pop', myDoublyLinkedList.pop())
// console.log('***serg***\n',myDoublyLinkedList)
// console.log('pop', myDoublyLinkedList.pop())
// console.log('***serg***\n',myDoublyLinkedList)
// console.log('pop', myDoublyLinkedList.pop())
// myDoublyLinkedList.pop()
console.log('***DLL***\n',myDoublyLinkedList)