// sort method is non destructive

// example 1: sorting strings 
const names = ['peace', 'zevros', 'progres', 'success', 'favor', 'mercy'];
// names.reverse();
// names.sort(); // sorts in alphabetical order
// console.log(names);


// example 2: sorting numbers
const prices = [12, 20, 25, 15, 66, 74, 30, 45];
// prices.reverse();
// prices.sort(); // sorts in ascending order
// prices.sort((a, b) => a - b);
// prices.sort((a, b) => b - a);
// console.log(prices);


// example 3: sorting objects
const players = [
    {name: 'emma', score: 20},
    {name: 'paul', score: 30},
    {name: 'steve', score: 50},
    {name: 'jude', score: 50},
    {name: 'zee', score: 61},
    {name: 'kelly', score: 11},
    {name: 'zooma', score: 13},
    {name: 'wong', score: 56},
]

// players.sort((a, b) => {
//     if(a.score > b.score){
//         return -1;
//     }else if(b.score > a.score){
//         return 1;
//     }else{
//         return 0;
//     }
// });

players.sort((a, b) => b.score - a.score); // alternative code... descending order
//players.sort( (a, b) => a.score - b.score); // alternative code... ascending order

console.log(players);