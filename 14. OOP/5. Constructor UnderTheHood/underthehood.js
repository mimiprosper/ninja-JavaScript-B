// class User {

//     constructor(userName, email){
//         // set up properties
//         this.userName = userName;
//         this.email = email;
//     }
// }

function User(userName, email){
    this.userName = userName;
    this.email = email;
    this.logIn = function(){
        console.log(`${this.userName} is logged in`);
    }
}

const userOne = new User('emma', 'emma@yahoo.com');
const userTwo = new User('jon', 'jon@gmail.com');

console.log(userOne, userTwo);
userOne.logIn();

// the new key word
// 1. creates a new empty object {}
// 2. binds the value of 'this' to the new empty object
// 3. calls the constructor function to 'build' the object