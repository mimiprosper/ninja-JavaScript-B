
// rest parameters. used when you dont know how number of paraments to be used in the argument
const double = (...nums) => {
    console.log(nums);
    return nums.map(num => num*2) 
}

const result = double(1,3,2,4,6,5,7,8,9);
console.log(result);

// spread syntax (array)
const people = ['mike', 'judge', 'sam', 'john'];
console.log(...people);
const members = ['luke', 'ken', 'solo', ...people]
console.log(members);

// spread syntax (object)
const person = {name: 'mike', age: 30, job: 'ninja techer'};
const personClone = {...person, location: 'london'};
console.log(personClone);
