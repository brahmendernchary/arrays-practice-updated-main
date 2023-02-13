let total = [0,1,2,3,4].reduce((acc,cuu)=>acc + cuu ,0)
console.log(total)


var a = [1,2,3,4,5,6]
var sum = a.reduce(function(a,b){
    return a+b
},0)
console.log(sum)

//addition of arrays using concat method
let b = [[1,2],[3,4],[5,6]].reduce((acc,cuu)=>acc.concat(cuu),[])
console.log(b)