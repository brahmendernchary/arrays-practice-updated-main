var arr = ["a", "b", "c", "c", "a", "c", "a", "d"];

function removeDuplicate(data) {
  return data.filter((value, index) => data.indexOf(value) === index);
}

console.log(removeDuplicate(arr));

// get duplicagte values
var arr1 = ["a", "b", "c", "c", "a", "c", "a", "d"];
function getDuplicate(d) {
  return d.filter((value, index) => d.indexOf(value) !== index);
}

console.log(getDuplicate(arr1));

//by using set method

var fruits = ["apple", "banna", "apple", "kiwi", "goa", "kiwi"];
function removeDupFruits(data) {
  return [...new Set(data)];
}
console.log(removeDupFruits(fruits));

// using for each method
var fruit = ["apple", "banna", "apple", "kiwi", "goa", "kiwi", "kiwi"];

function remDfruit(data) {
  let unique = [];
  data.forEach((e) => {
    if (!unique.includes(e)) {
      unique.push(e);
    }
  });
  return unique;
}
console.log(remDfruit(fruit));

//remove duplicate Object from array
var users = [
  { name: "naga", age: "30", add: "hyd" },
  { name: "hari", age: "22", add: "hyd" },
  { name: "giri", age: "25", add: "hyd" },
  { name: "naga", age: "26", add: "hyd" },
  { name: "sathi", age: "30", add: "hyd" },
  { name: "sri", age: "30", add: "hyd" },
  { name: "giri", age: "30", add: "hyd" },
  { name: "sri", age: "30", add: "hyd" },
];
function uniqNames(data, key) {
  return [...new Map(data.map((x) => [key(x), x])).values()];
}

console.log(JSON.stringify(uniqNames(users, (it) => it.name)));

//using set method
const names = ["John", "Paul", "George", "Ringo", "John"];

let unique = [...new Set(names)];
console.log(unique); // 'John', 'Paul', 'George', 'Ringo

//using filter method
let num = [1, 2, 3, 3, 4, 4, 5, 5, 6];
let filtered = num.filter((a, b) => num.indexOf(a) === b);
console.log(filtered);
// Result: [ 1, 2, 3, 4, 5, 6 ]

//find No of duplicates
let arr = [1, 2, 3, 4, 5, 5];
const seen = new Set();
const duplicates = arr.filter((n) => seen.size === seen.add(n).size);
console.log(duplicates); // [ 5 ]
console.log(duplicates.length); // 1

//find No of duplicates
const counts = {};
const sampleArray = [
  "1",
  "5",
  "9",
  "14",
  "5",
  "22",
  "48",
  "25",
  "22",
  "20",
  "9",
  "13",
];
sampleArray.forEach(function (x) {
  counts[x] = (counts[x] || 0) + 1;
});
console.log(counts); // output: {
//   '1': 1,
//   '5': 2,
//   '9': 2,
//   '13': 1,
//   '14': 1,
//   '20': 1,
//   '22': 2,
//   '25': 1,
//   '48': 1
// }
