const store = [
  {
    name: "laptop",
    price: 2000,
    count: 5,
  },
  {
    name: "mobile",
    price: 6000,
    count: 5,
  },
  {
    name: "phone",
    price: 500,
    count: 5,
  },
];

const totalCost = store.reduce((acc, item) => acc + item.price * item.count, 0);

console.log(totalCost)
