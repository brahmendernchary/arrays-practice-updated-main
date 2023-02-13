var arr = ['a' ,'b','c','c','a','c','a','d' ]

function removeDuplicate(data){
    return data.filter((value,index)=>data.indexOf(value) === index)
}

console.log(removeDuplicate(arr))

// get duplicagte values
var arr1 =['a' ,'b','c','c','a','c','a','d' ]
function getDuplicate(d){
    return d.filter((value,index)=>d.indexOf(value) !== index)
}

console.log(getDuplicate(arr1))

//by using set method

var fruits = ['apple','banna','apple','kiwi','goa','kiwi']
function removeDupFruits(data){
    return [...new Set(data)]
}
console.log(removeDupFruits(fruits))

// using for each method
var fruit = ['apple','banna','apple','kiwi','goa','kiwi','kiwi']

function remDfruit(data){
    let unique =[];
    data.forEach(e=>{
        if(!unique.includes(e)){
            unique.push(e)
        }
    });
    return unique;
}
console.log(remDfruit(fruit));


//remove duplicate Object from array
var users =[
    {name:'naga',age:'30',add:'hyd'},
    {name:'hari',age:'22',add:'hyd'},
    {name:'giri',age:'25',add:'hyd'},
    {name:'naga',age:'26',add:'hyd'},
    {name:'sathi',age:'30',add:'hyd'},
    {name:'sri',age:'30',add:'hyd'},
    {name:'giri',age:'30',add:'hyd'},
    {name:'sri',age:'30',add:'hyd'},    
]
function uniqNames(data,key){
    return [
        ...new Map(data.map(x=>[key(x),x])).values()
    ]
}

console.log(JSON.stringify(uniqNames(users,it =>it.name)))