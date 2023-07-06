// Sort an array of numbers based on numerical value.
let numbers = [23, 65, 88, 12, 45, 99, 2000];

let sortednumbers = numbers.sort((a, b) => a - b);
//=> [12, 23, 45, 65, 88, 99, 2000]

const numbers2 = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers2);

// [1, 2, 3, 4, 5]
