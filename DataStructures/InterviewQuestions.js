//Find the missing number in a given integer array of 1 to 100

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
const findMissingNum = (arr) => {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      return arr[i] + 1;
    }
  }

  return false;
};
console.log(findMissingNum(arr)); // Returns 9, the missing number

//2. Find a duplicate number in an array of integers
const arr2 = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];
const findDupes = (arr) => {
  const observed = {};
  for (let i = 0; i < arr.length; i++) {
    if (observed[arr[i]]) {
      return arr[i];
    } else {
      observed[arr[i]] = arr[i];
    }
  }

  return false;
};
console.log(findDupes(arr2)); // Returns 7

// 3. Find the largest and smallest number in an unsorted array of integers
const arr3 = [1, 2, 3, 4, 100];
const findMaxMin = (arr) => {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }

  return {
    max: max,
    min: min,
  };
};
console.log(findMaxMin(arr3)); // Returns object { "max": 100, "min": 1 }

// 4. Return an array showing the cumulative sum at each index of an array of integers
let arr4 = [1, 3, 5, 7];
const cumulativeSum = (list) => {
  let result = [list[0]];

  for (let i = 1; i < list.length; i++) {
    result.push(list[i] + result[i - 1]);
  }

  return result;
};
console.log(cumulativeSum(arr4)); // Returns [1, 4, 9, 16]

// 5. Find all duplicate numbers in an array with multiple duplicates
const arr5 = [1, 1, 2, 3, 4, 5, 6, 7, 8, 6, 6, 7, 7, 7, 10, 10];
const returnMultipleDupesArray = (arr) => {
  let observed = {};
  let dupesArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (observed[arr[i]]) {
      if (observed[arr[i]] === 1) {
        dupesArray.push(arr[i]);
      }

      observed[arr[i]] = observed[arr[i]] + 1;
    } else {
      observed[arr[i]] = 1;
    }
  }

  return dupesArray;
};
console.log(returnMultipleDupesArray(arr5)); // prints [1, 6, 7, 10]

// 6. Remove all duplicates from an array of integers
const arr6 = [1, 1, 1, 1, 1, 1, 1];
const removeDupes = (arr) => {
  let result = [];
  let previous = arr[0];
  result[0] = previous;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != previous) {
      result.push(arr[i]);
    }

    previous = arr[i];
  }

  return result;
};
console.log(removeDupes(arr6)); // prints [1]
// 7. Find all pairs in an array of integers whose sum is equal to a given number
let arr7 = [1, 5, 6, 1, 0, 1];
const findSumPairs = (arr, value) => {
  let sumsLookup = {};
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    let targetVal = value - arr[i];

    if (sumsLookup[targetVal]) {
      output.push([arr[i], targetVal]);
    }

    sumsLookup[arr[i]] = true;
  }

  return output;
};
console.log(findSumPairs(arr7, 6));
// Loop through an array in reverse
function reverseArray(array) {
  var arrayTwo = [];
  for (var i = array.length - 1; i >= 0; i--) {
    arrayTwo.push(array[i]);
  }
  array = arrayTwo;
  return array;
}
var values = [1, 2, 3];
// [ 3, 2, 1 ]
reverseArray(values);

function countOfElement(arr, N) {
  var encounteredNums = {};
  var num;
  for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (encounteredNums[num]) {
      // value already encountered, count++
      encounteredNums[num]++;
    } else {
      // first encounter, initialize count
      encounteredNums[num] = 1;
    }
  }
  return encounteredNums[N] || 0;
}
// returns 6
countOfElement([3, 4, 2, 3, 2, 2, 2, 2, 3, 2], 2);
