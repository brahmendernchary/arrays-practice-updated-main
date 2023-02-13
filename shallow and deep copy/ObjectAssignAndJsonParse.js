// Shallow copies duplicate as little as possible. A shallow copy of a collection is a copy of the collection structure, not the elements. With a shallow copy, two collections now share the individual elements.

let innerObj ={
    a:'b',
    b:'d'
}
let obj={
    x:'text',
    y:innerObj
}
//create a shallow copy
let copyObj = Object.assign({},obj);

innerObj.a ='copy';
console.log(obj);
console.log(innerObj)

// Deep copies duplicate everything. A deep copy of a collection is two collections with all of the elements in the original collection cloned.

let std1 ={
    name:'naga',
    age:25
}
let std2={
    fname:'soma',
    y:std1
}
//create a deep copy
let copyObj2= JSON.parse(JSON.stringify(std1))
std1.name='nagaa'
console.log(std1)
console.log(copyObj2)