const str = '23546846'

const result = Array.from(str,x =>Number(x));

console.log(result);

const numbers =[1,2,2,3,4,2,5,6,1,4,3,2]

const res = new Set(numbers);

console.log(res);

const res2 = Array.from(new Set(numbers));

console.log(res2)

const friends =['nag','harish','ravi','nag','ravi']

//const resF = new Set(friends);

//console.log(resF);

const resF2 = Array.from(new Set(friends));

console.log(resF2)


