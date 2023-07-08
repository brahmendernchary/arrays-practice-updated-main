let x = [1, 2, 3];
let y = x.reduce((a, b) => {
  return a * b;
}, 2);
console.log(y); //12

let z = [1, 2, 3, 5];
z.forEach((e) => {
  if (e < 3 || e === 5) return;
  console.log(e); //3
});

let a = 0;
console.log(a++); //0
console.log(++a); //2

let obj = { x: 5, getX: () => this.x };
console.log(obj.getX()); //undefined

let b = [1, 2, 3];
let c = b.reverse();
let d = c.map((x) => x * 2);
console.log(z); //[6,4,2]

let e = "HELLO";
let f = Array.from(e);
console.log(f[1]); //E

let n = [1, 2, 3, 4, 5];
let s = n.map((x) => x ** x);
console.log(s); // [1, 4, 27, 256, 3125] = [1^1, 2^2,3^3,4^4,5^5]

let n1 = [1, 2, 3];
let s1 = n1.map((x) => x * x);
console.log(s1); // [1, 4, 9]

let x2 = ["a", "b", "c"];
let y2 = x2.join("-");
console.log(y2); //a-b-c

let x3 = 0;
let y3 = x3++ + --x3;
console.log(y3); //0

let x4 = "Hello World";
let y4 = x4.split("");
console.log(y4.length); //11

let a2 = [1, 2, 3];
let p = a2.pop();
console.log(p); //3

let x5 = "hello";
let y5 = { [x5]: "bye" };
console.log(y5["bye"]); //undefined

let n2 = [1, 2, 3, 4, 5];
let p2 = n2.every((x) => x > 0);
console.log(p2); //true

let x6 = "abc";
let y6 = x6.substring(2, 0);
console.log(y6); //ab

let x7 = [99];
let y7 = x7 instanceof Object;
console.log(y7); //true

let a3 = [1, 2, 3, 4, 5];
let b3 = a3.find((x) => x % 2 === 0);
console.log(b3); //2

let a4 = "x";
let b4 = a4 + undefined;
console.log(b4); //xundefined

let x8 = [1, 2, 3];
let [y8, ...z8] = x8;
console.log(typeof z8); //object

let x9 = { a: { b: 1 } };
let y9 = JSON.parse(JSON.stringify(x));
y9.a.b = 10;
console.log(x9.a.b); //1

let x10 = () => {
  let y = 4;
  return () => y;
};
console.log(x10()()); //4

const myArray = [1, undefined, NaN, 2, null, "@apple", true, 5, false];
console.log(myArray.filter(Boolean)); //(5) [1, 2, '@apple', true, 5]
