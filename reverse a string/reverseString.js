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

// Code 6:String reverse without using inbult function
function Reverse(){
   var string ="India is my country";
   var result="";
   for( var i=string.length-1; i>=0 ; i-- ) {
      result=result+string[i] }
   return result
}
console.log(Reverse())
// output = "yrtnuoc ym si aidnI"

// Code 4:String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split 
// and then join().
function removeDuplicates(){
   var string ="India is my country"
   let result = string.split('').reverse().join('').split(' ').reverse().join(' ')
   return result
}
console.log(removeDuplicates()) 
// output = "aidnI si ym yrtnuoc"
// ------------------------------------------
var reverseWords = function(s) {
    let res = '';
    let word = '';
    for (let c of s) {
        if (c === ' ') {
            res += word + c;
            word = '';
        } else {
            word = c + word;
        }
    }
    return res + word;
};
console.log(reverseWords("priya bagde"))