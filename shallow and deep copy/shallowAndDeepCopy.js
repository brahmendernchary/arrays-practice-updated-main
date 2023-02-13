//shallow copy
// Shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.

// Shallow Copy: It makes a copy of the reference to X into Y. Think about it as a copy of X’s Address. So, the addresses of X and Y will be the same i.e. they will be pointing to the same memory location.
var emp = { name: "naga", age: 20, fname: "soma" };
var empDup = emp;
empDup.name='nagaa';
console.log(empDup);
console.log(emp)

//Deep copy
// A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.

// Deep copy: It makes a copy of all the members of X, allocates different memory location for Y and then assigns the copied members to Y to achieve deep copy. In this way, if X vanishes Y is still valid in the memory.
var std={name:'naga',age:25,fname:'soma'}
var stdDup ={name:std.name,age:std.age,fname:std.fname}

stdDup.name='nagaaa'
console.log(stdDup)
console.log(std)
