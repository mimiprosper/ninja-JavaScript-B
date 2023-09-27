// filter method is destructive
const scores = [23, 34, 60, 12, 70, 20, 15, 35];

// get array of scores that are more than 20
const scoresAbove20 = scores.filter(score => {
    return score > 20;
});
console.log(scoresAbove20);

// check for premium users
const users = [
    {name: 'jon', premium: false},
    {name: 'juddy', premium: true},
    {name: 'sean', premium: false},
    {name: 'peace', premium: true},
    {name: 'success', premium: false},
];

// const premiumUsers = users.filter( user => {
//    return user.premium
// })
// console.log(premiumUsers);

// const premiumUsers = users.filter( user => user.premium)
// console.log(premiumUsers);