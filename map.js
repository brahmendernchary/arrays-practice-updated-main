const products = [
    {
        name:'laptop',
        price:1000,
        count:5
    },
    {
        name:'mobile',
        price:6000,
        count:5
    },
    {
        name:'phone',
        price:500,
        count:5
    }
];

const totalProduct = products.map(item =>({
    name:item.name,
    total:item.price * item.count}));

console.log(totalProduct)