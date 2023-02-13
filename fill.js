const numbers = [1, 2, 3, 4];

const num2 = numbers.fill(0);
console.log(num2);
console.log(numbers);

function fillInNumbers(n) {
  return Array(n)
    .fill(0)
    .map((_, idx) => idx + 1);
}

console.log(fillInNumbers(5));
