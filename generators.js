console.log('This is generators');

// Generators in javascript

function* numberGen(){
    let i = 0;

    while(true){
        yield i++;
    }
}


const gen = numberGen();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())



// generators help in creating on the fly values