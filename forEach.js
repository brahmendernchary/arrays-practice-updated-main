const letters = ['a','b','c','a','c','b','a','c']

let count = {};

letters.forEach((item) =>{
    if(count[item]){
        count[item]++;
    }else{
        count[item]= 1;
    }
})

console.log(count);