// find method is destructive
const prices = [12, 20, 25, 15, 66, 74, 30, 45];

// find the first highest score greater than 50
const firstHighestPrice = prices.find( price => price > 50)
console.log(firstHighestPrice);
