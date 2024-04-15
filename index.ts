// Q128
// arrow function that calculate the product of all parameters
const product = (...numbers: number[]) => 
    numbers.reduce((total, number) => total * number, 1); 
console.log(product(1, 2, 3)); // 6