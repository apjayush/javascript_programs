console.log('This is tutorial on set in javsscript');


// set stores unique values
const mySet = new Set();  //Initialize an empty set

console.log('The set looks like this', mySet);

// Adding values to set

mySet.add('this');
mySet.add('that')
mySet.add('My name');
mySet.add(true);
mySet.add(false);
mySet.add(22);
console.log('The set looks like this', mySet);
console.log(mySet.has(122))

console.log('before removal', mySet)
mySet.delete('that')
console.log('After removal', mySet)


let mySet2 = new Set([1,45,'this'], 'this')
console.log('New set looks like', mySet2);



for(item of mySet){
    console.log(item)
}

mySet.forEach((element)=>{
    console.log(element)
})

let newArray = Array.from(mySet)
console.log(newArray)