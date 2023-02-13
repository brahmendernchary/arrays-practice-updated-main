const numbers =[1,2,1,3,2,4,5,6,5,6];

const num = numbers.filter((value,index,arr)=>{
    return arr.indexOf(value) === index;
})

console.log(num)