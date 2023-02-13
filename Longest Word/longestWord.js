
//using normal
var a ='naga brahmenderr'

var longestword = a.split(' ').sort(function(a,b){
    return b.length-a.length
})
console.log(longestword[0])

//using reduce method   
function longestWord(str){
    var longestWord = str.split(' ').reduce(function(longest,current){
        return current.length > longest.length ? current : longest;
    },'')
    return longestWord;
}

console.log(longestWord('the nagabrahmender in khammam')) 

//using sort method
function lnWord(str){
    var lnWord = str.split(' ').sort(function(a,b){
        return b.length -a.length
    })
    return lnWord[0].length
}
console.log(lnWord('this sis khammam'))