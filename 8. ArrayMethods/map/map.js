// map method is destructive
const prices = [12, 20, 25, 15, 66, 74, 30, 45];

// const discountPrices = prices.map( price => {
//     return price/2;
// });

// const discountPrices = prices.map( price => price/2);
// console.log(discountPrices);

const products = [
    {name: 'peace', price: 30},
    {name: 'success', price: 20},
    {name: 'joy', price: 45},
    {name: 'progress', price: 15},
    {name: 'victory', price: 25},
    {name: 'vision', price: 50},
]

const newPrice = products.map( product => {
    if(product.price > 25){
        return { name: product.name, price: product.price / 2 }
    } else{
        return { name: product.name, price: product.price };
    }
});
console.log(newPrice);

// const newPrice = products.map( product => {
//     if(product.price > 25){
//         return { name: product.name, price: product.price / 2 }
//     } else{
//         return product;
//     }
// });
// console.log(newPrice);
