const set = new Set([1, 2, 3]);
set.add(4); //adding new value
set.add(4); // the duplicate values can't

console.log(set.has(4)); //has method to check the exting value

set.delete(3); //to delete the particular value

console.log(set.size); // output length of set is 3
// set.clear()// to delete all values in set

for (const item of set) {
  console.log(item);
}
