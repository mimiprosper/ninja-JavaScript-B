
// Sets eliminates duplicates

const peopleArray = ['jon', 'james', 'mary', 'rose', 'james', 'rose'];
// console.log(peopleArray);

const peopleSet = new Set(peopleArray)
// console.log(peopleSet);

const uniquePeople = [...peopleSet]
// console.log(uniquePeople);

// add and delete items in a set
const ages = new Set();
ages.add(20);
ages.add(30).add(40).add(50).add(60) // chaining
// console.log(age);

ages.delete(50);
// console.log(age);

// console.log(ages, ages.size);
// console.log(ages, ages.has(40));

ages.clear() // erase all set items
// console.log(ages);

// cycle through a set
const students = new Set([
    { name: 'sam', age: 30 },
    { name: 'chuks', age: 40 },
    { name: 'jon', age: 41 },
    { name: 'fred', age: 47 }]);

students.forEach(student => {
    console.log(`${student.name} is ${student.age} years old`);
})

