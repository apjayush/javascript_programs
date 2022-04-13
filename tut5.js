// type coersion

console.log("This is tut5");

let myVar;

myVar= 34;
console.log(myVar, typeof myVar);

let date = String(new Date());
console.log(date, typeof date);


let arr= String([1,2,3,4]);

console.log(arr.length);

let i= 75;
console.log(i.toString(), typeof (i.toString()));

let num = parseInt(45.87)
console.log(num);

let num2= 67.65
console.log(num2.toFixed(4));

// let str1 = Number("345");
let str1 = Number("345d");

console.log(str1, typeof(str1));

let bool= Number(true)
console.log(bool, typeof(bool));

// type conversion

let a = "98";
let b =87;

console.log(a+b);