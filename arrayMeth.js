const items = [
  { name: "tv", price: 100 },
  { name: "book", price: 200 },
  { name: "setup", price: 5 },
  { name: "mobile", price: 1000 },
  { name: "phone", price: 6000 },
  { name: "laptop", price: 20000 },
  { name: "pad", price: 60 },
];

const filtedItems = items.filter((item) => {
  return item.price >= 1000;
});

const itemNames = items.map((item) => {
  return item.price;
});

const itemFound = items.find((item) => {
  return item.name === "phone";
});

const itemExpence =items.some((item) => {
  return item.price <= 0;
});

const itemExpenceEvery =items.every((item) => {
  return item.price <= 200;
});

const total = items.reduce((currentTotal,item)=>{
  return item.price + currentTotal;
},0)

console.log(total)
