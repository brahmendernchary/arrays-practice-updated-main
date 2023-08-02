const obj = {
  name: "naga",
  age: 20,
  Key: 3,
  myName: function () {
    console.log(this.name);
  },
};
console.log(obj);
console.log(obj.name);
console.log(obj["age"]);
console.log(obj["Key"]);

obj.hobby = "cricket";
console.log(obj);

delete obj.hobby;

console.log(obj);

obj.myName();

//Object.keys() Object.values() Object.entries()
