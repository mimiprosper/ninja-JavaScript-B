// store data in local storage : key value pair
localStorage.setItem('name', 'emma');
localStorage.setItem('age', 45);

// get data in local storage
let name = localStorage.getItem('name')
let age = localStorage.getItem('age')
console.log(name, age);

// update data in local storage
// localStorage.setItem('name', 'success')
// localStorage.age = 40; // alternative way

// name = localStorage.getItem('name');
// age = localStorage.getItem('age')
// console.log(name, age);

// delete data from local storage
// localStorage.removeItem('name'); // remove a specific data
// name = localStorage.getItem('name');
// console.log(name, age);

localStorage.clear(); // remove all data
name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name, age);