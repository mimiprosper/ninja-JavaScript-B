// timestamps & comparism
const before = new Date('February 1 2019 7:30:59');
const now = new Date();

//console.log( now.getTime(), before.getTime() );
const diff = now.getTime() - before.getTime()
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
console.log(mins);

const hrs = Math.round(diff / 1000 / 60 / 60);
console.log(hrs);

const days = Math.round(diff / 1000 / 60 / 60 / 24)
console.log(days);

console.log(`the blog was written ${days} days ago`);

// converting timestamp to date objects
timestamp = 1647343243796;
console.log(new Date(timestamp));