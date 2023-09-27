

class User {

    constructor(userName, email){
        this.userName = userName;
        this.email = email;
        this.score = 0;
    }

    logIn(){
        console.log(`${this.userName} is logged in`);
        return this;
    }

    logOut(){
        console.log(`${this.userName} is logged out`);
        return this;
    }

    incScore(){
        this.score += 1;
        console.log(`${this.userName} has an increase score : ${this.score}`);
        return this;
    }
}

const userOne = new User('emma', 'emma@yahoo.com');
const userTwo = new User('success', 'success@hotmail.com');
console.log(userOne, userTwo);

// method chaining. this works bcos of the 'return this' keyword
userOne.logIn().incScore().incScore().logOut();