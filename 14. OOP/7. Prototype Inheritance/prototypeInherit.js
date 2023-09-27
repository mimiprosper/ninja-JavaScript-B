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

// Admin
function Admin(userName, email){
    User.call(this, userName, email); // prototype 'super' method
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (){
    // delete the user
};


const userOne = new User('emma', 'emma@yahoo.com'); 
const userTwo = new User('jon', 'jon@gmail.com');
const userThree = new User('sean', 'sean@hotmail.com', 'professor');

console.log(userOne, userTwo, userThree);

