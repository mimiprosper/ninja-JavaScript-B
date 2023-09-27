// reduce method is destructive
// const prices = [12, 20, 25, 15, 66, 74, 30, 45];

// get how many times there are prices above 25 using accumulator & current arguments (acc & curr)
// const result = prices.reduce((acc, curr) => {
//     if(curr > 25){
//         acc++
//     }
//     return acc;
// }, 0);

// console.log(result);

const scores = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 50}
  ];
  
  const marioTotal = scores.reduce((acc, curr) => {
    if(curr.player === 'mario'){
      acc += curr.score;
    }
    return acc;
  }, 0);
  
  console.log(marioTotal);
