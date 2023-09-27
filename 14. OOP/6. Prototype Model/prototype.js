function User(userName, email){
    this.userName = userName;
    this.email = email;
}

User.prototype.logIn = function(){
    console.log(`${this.userName} is logged in`);
};

User.prototype.logOut = function(){
    console.log(`${this.userName} is logged out`);
}

const userOne = new User('emma', 'emma@yahoo.com');
const userTwo = new User('jon', 'jon@gmail.com');
console.log(userOne, userTwo);

userOne.logIn();
userTwo.logOut();
