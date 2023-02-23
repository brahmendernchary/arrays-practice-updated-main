function ReverseString(str) {
      
    // Check input
    if(!str || str.length < 2 ||
            typeof str!== 'string') {
        return 'Not valid';
    }
      
    // Take empty array revArray
    const revArray = [];
    const length = str.length - 1;
      
    // Looping from the end
    for(let i = length; i >= 0; i--) {
        revArray.push(str[i]);
    }
      
    // Joining the array elements
    return revArray.join('');
}
  
console.log(ReverseString("Geeks for Geeks"))

//method2
// Function to reverse string
function ReverseString(str) {
    return str.split('').reverse().join('')
    }
      
    // Function call
console.log(ReverseString("Geeks for Geeks"))


//method3
const ReverseString2 = str => [...str].reverse().join('');
    
console.log(ReverseString2("Geeks for Geeks"))


// method4

method4 = [1,3,5,7,8]

newMethod = method4.slice(0).reverse().map(function(val,index){
    return val
})

console.log(newMethod)