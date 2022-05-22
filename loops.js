console.log('This is tutorial for loops');

people  =  ['harry', 'Rohan', 'Karan']


// Traditional for loop
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element)
    
// }


obj = {
    name: 'harry',
    language: 'Javascript',
    hobbies: 'playing cricket'
}

// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]]
//     console.log(element)
    
// }


// for(name in people){
//     console.log(people[name])
// }


// for (name of people){
//     console.log(name)
// }

for(key in people){
    console.log(people[key])
}
