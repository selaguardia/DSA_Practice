// Hash tables (AKA maps, unordered maps, dictionaries, objects)
// - insert O(1)
// - lookup O(1)
// - delete O(1)
// - search O(1)

// let user = {
//   age: 30,
//   name: "Sergio",
//   magic: true,
//   scream: function () {
//     console.log(`AGHHHHH!!!!`);
//   }
// }
// console.log(user)
// console.log(user.age) //O(1)
// user.spell = 'abra kadabra'; //O(1)
// user.scream() //O(1)
// console.log(user)

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  } // O(1) very fast

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    } 
    this.data[address].push([key, value]);
    return this.data;
  } // O(1)

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  } // O(1) if no collision else O(n)

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
  //! keys without collision
  // keys() {
  //   if (!this.data.length) {
  //     return undefined
  //   }
  //   let result = []
  //   // loop through all the elements
  //   for (let i = 0; i < this.data.length; i++) {
  //       // if it's not an empty memory cell
  //       if (this.data[i] && this.data[i].length) {
  //         // but also loop through all the potential collisions
  //         if (this.data.length > 1) {
  //           for (let j = 0; j < this.data[i].length; j++) {
  //             result.push(this.data[i][j][0])
  //           }
  //         } else {
  //           result.push(this.data[i][0])
  //         } 
  //       }
  //   }
  //   return result; 
  // }
}

// const myHashTable = new HashTable(50);
// myHashTable.set("grapes", 10000);
// console.log(myHashTable.get('grapes'))
// myHashTable.set("apples", 54);
// myHashTable.set("oranges", 2);
// console.log(myHashTable.keys());

