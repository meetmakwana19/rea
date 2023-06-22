// https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/#:~:text=A%20higher%20order%20function%20is%20a%20function%20that%20takes%20one,functions%20like%20map%20and%20reduce.

const shoppingCart = [
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Xiomi', price: 2.99, quantity: 2},
    {name: 'Samsung', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 4.99, quantity: 4},
    {name: 'Nokia', price: 4.99, quantity: 4},
]

const products = shoppingCart.reduce((productGroup, product) => {
    const name = product.name;
    if(productGroup[name] == null) {
        productGroup[name] = [];
    }
    productGroup[name].push(product);

    return productGroup;
}, {});

console.log(products);