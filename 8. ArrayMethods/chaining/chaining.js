const products = [
    {name: 'mushroom', price: 20},
    {name: 'banana', price: 30},
    {name: 'mango', price: 40},
    {name: 'pineapple', price: 55},
    {name: 'apple', price: 15},
    {name: 'lutus', price: 45}
]

// const filtered = products.filter( product => product.price > 30);
// const promos = filtered.map( item => {
//     return `The ${item.name} price is ${item.price / 2} pounds`; 
// });

const promos = products
    .filter( product => product.price > 30)
    .map(item => `The ${item.name} price is ${item.price / 2} pounds`);

console.log(promos);