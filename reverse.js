const num =[1,2,3,4,5]
//reverse method the original array will be changed
//num.reverse()

//if u dont want to change original array
//method 1
const newNum = num.concat().reverse();

//method 2

const newNum2 = [...num].reverse()

console.log(newNum2)
console.log(num)

//reverse the string

const str = 'naga brahmender'
//first split the every char and revers it and join
const result = str.split('').reverse().join('')

console.log(result);