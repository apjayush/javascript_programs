console.log("we are in tut7.js");

const marks = [2,5,6,7,3,4,9]

const fruits = ["Orange", "Apple", "Guava"]


const arr= new Array(8,6,4,3,6,3,3,5,6,3,2,5,6)

// console.log(arr);

// console.log(marks.length);

// console.log(Array.isArray(marks));

fruits[0]= "potato"

console.log(fruits);

let value = marks.indexOf(9)
// console.log(value);

// Mutating or Modifying arrays

// marks.pop(9)  removes element from the last

// marks.shift(2) remove element from the starting

// marks.splice(1,4)
// splice removes element from 1 to 4

// marks.reverse()



console.log(marks);

let myobj = {
    name: "ayush",
    status: "student",
    salary: 1000
}

console.log(myobj['name']);

let list = [1,4,5,3,2,9,0]

list.splice(1,3)

console.log(list);