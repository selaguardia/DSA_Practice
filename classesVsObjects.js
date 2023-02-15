//! ***=== OBJECT ===***
const userOne = {
  firstName: "Sergio",
  lastName: "Laguardia",
  email: 'sergio@gmail.com',
  login() {
    console.log(`${this.firstName} has logged in...`)
  },
  logout() {
    console.log(`${this.firstName} has logged out...`)
  }
}
// userOne['email'] = 'slaguardia@gmail.com'
// console.log(userOne)
// userOne.dob = '09/29/1991'
// console.log(userOne)
// userOne.logout()

//! ***=== CLASSES ===***
class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  login() {
    console.log(`${this.firstName} has logged in...`)
  }
  logout() {
    console.log(`${this.firstName} has logged out...`)
  }
}

// const userTwo = new User('Eddie', 'Laguardia', 'eddie@woofmail.com');
// console.log(userTwo)
// userTwo['dob'] = '11/24/2014'
// console.log(`User Two:`)
// console.log(userTwo)
// userTwo.login()