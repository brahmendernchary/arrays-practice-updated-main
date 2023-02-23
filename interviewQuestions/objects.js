var name = "myClass";
var myObject = {
  name: "myObject",
  property: this.name,
  regularFunction: function () {
    return this.name;
  },
  arrowFunction: () => {
    return this.name;
  },
  iife: (function () {
    return this.name;
  })(),
};

this.name;
myObject.name;
myObject.property
myObject.iife; myObject
const regFn = myObject.regularFunction;
regFn.call(myObject);
regFn();
regFn.call(window);
myObject.arrowFunction.call({ name: "abc" });
myObject.regularFunction.call({ name: "abc" });
myObject.arrowFunction();
