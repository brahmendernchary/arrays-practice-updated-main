//sort method sort the array in assending order

const names = ['nag','sharat','harish','nagesh','kumar']

names.sort();
console.log(names); 


const numbers = [74,56,89,10,2,5,45]

numbers.sort(compare)

console.log(numbers);

function compare(a,b){
    return a-b;
}

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

  //for assending order
  //store.sort((a,b)=>{return a.price-b.price});

  console.log(store);

  //for desending order
  store.sort((a,b)=>{
      return b.price-a.price
  })