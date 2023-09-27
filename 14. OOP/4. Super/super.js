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

class Admin extends User {

    constructor(userName, email, title){
        super(userName, email);
        this.title = title;
    }

    deleteUser(user){
        users = users.filter( u => u.userName !== user.userName);
    }
}

const userOne = new User('emma', 'emma@yahoo.com');
const userTwo = new User('success', 'success@hotmail.com');
const userThree = new Admin('prosper', 'pro@gmail.com', 'black belt ninja');

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userOne)
console.log(users);


