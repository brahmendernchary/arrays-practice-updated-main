function getSum(str) {
  let sum = 0;

  // Traversing through the string
  for (let i = 0; i < str.length; i++) {
    // Since ascii value of
    // numbers starts from 48
    // so we subtract it from sum
    sum = sum + parseInt(str[i]);
  }
  return sum;
}

// Driver Code
let n = 687;
console.log(getSum(n));

//method 2
function getSum(num) {
  let sum;

  // Single line that calculates sum
  for (sum = 0; num > 0; sum += num % 10, num = parseInt(num / 10));
  return sum;
}

// Driver code
let num = 687;

document.write(getSum(num));
