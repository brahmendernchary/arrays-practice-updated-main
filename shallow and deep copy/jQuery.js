//shallow copy
std1={
    name:'naga',
    fname:'soma',
    age:20
}

var stdDup = jQuery.extend({},std1);

stdDup.name='nagaa';
console.log(stdDup);
console.log(std1)

//deep copy

var emp ={
    name:'srikanth',
    age:36
}

var copyEmp = jQuery.extend(true,{},emp);

copyEmp.age=33;
console.log('copy emp' , copyEmp);
console.log('orginal emp' , emp)