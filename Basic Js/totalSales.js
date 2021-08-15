//problem 2
totalSales
const products = [
    
    { name: 'shirt', price: 100},
    { name: 'pant', price: 200 },
    { name: 'shoe', price: 500 }
];

let totalSales = 0;

for (const product of products) {
    totalSales = totalSales + product.price;
}
// console.log(totalSales);

const cart = [
   
    { name: 'shirt', price: 100, quantity: 9 },
    { name: 'pant', price:200, quantity: 5},
    { name: 'shoe', price: 500, quantity: 3 }
];
let cartTotal = 0;
for (const product of cart) {
    console.log(product);
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);