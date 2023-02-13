//in splice method change an arry by removing or replacing exting array

const numbers =[1,2,3,4,5,6];

//we want to deleted last two numbers 4 is starting index,2 is how many deleted
//const deleted = numbers.splice(4,2);

//we want to deleted last two numbers 4 is starting index,2 is how many deleted.if want add to any numbers 
//const deleted = numbers.splice(4,2,7,8);

//we want to deleted last two numbers 4 is starting index,if dont want deleted.if want add to any numbers these numbers add in after index 4 and index 5
const deleted = numbers.splice(4,0,7,8);

console.log(numbers);
console.log(deleted)