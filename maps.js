// console.log('This is tutorial on mapping in javascript');

// // Maps in javascript: we can use any type of key or value

// const myMap = new Map()

// const key1 = 'myStr', key2 = {}, key3 = function(){};


// // setting map values
// myMap.set(key1, 'This is a string')
// myMap.set(key2, 'This is a empty object')
// myMap.set(key3, 'This is an empty function')

// console.log(myMap);


// // Getting the values from map

// let value1 = myMap.get(key1)
// console.log(value1)

// // Get the size of the map

// console.log(myMap.size)

// // You can loop using for..of loop using to get keys and values

// for(let [key, value] of myMap){
//     console.log(key, value)
// }


// // Get only keys

// for(let key of myMap.keys()){
//     console.log('key is', key)
// }

// // Get only values

// for(let value of myMap.values()){
//     console.log('value is', value)
// }


// // You can loop through a map using for each loop

// myMap.forEach((value,key)=>{
//     console.log('key is', key);
//     console.log('value is', value)
// })

// // Converting mapkeys to array

// let myKeysArray  = Array.from(myMap.keys());
// console.log('Map to array is', myKeysArray)


// // Converting mapvalues to array

// let myValuesArray  = Array.from(myMap.values());
// console.log('Map to array is', myValuesArray)


const map1 = new Map();

map1.set('a', 1)
map1.set('b', 2)
map1.set('c', 3)

console.log(map1)

console.log(map1.get('a'))

console.log(map1.size)


map1.forEach((values, keys)=>{
    console.log('key is ', keys);
    console.log('value is ', values)
})

let arrayFromKeys = Array.from(map1.keys())
console.log(arrayFromKeys)

console.log(map1.values())