class User {

    constructor(userName, email){
        this.userName = userName;
        this.email = email;
    
    }

    logIn(){
        console.log(`${this.userName} is logged in`);
    }

    logOut(){
        console.log(`${this.userName} is logged out`);
    }

}

// the new key word
// 1. creates a new empty object {}
// 2. binds the value of 'this' to the new empty object
// 3. calls the constructor function to 'build' the object

const userOne = new User('emma', 'emma@yahoo.com');
const userTwo = new User('success', 'success@hotmail.com');
console.log(userOne, userTwo);

userOne.logIn();
userTwo.logIn();

userOne.logOut();
userTwo.logOut();
