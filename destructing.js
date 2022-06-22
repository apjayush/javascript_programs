console.log('This is destructing javascript tutorial')

let a,b;

[a,b] = [34,56];
// console.log(a,b);


// [a,b,c,...d] = [1,2,3,4,5,6,7,8]
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

({a,b,c,...d} ={a:1, b:2, c:3, d:4, e:5, f:6})
console.log(a)
console.log(b)
console.log(c)
console.log(d)



// Array Destructing
const fruits = ['Apple', 'Banana', 'Mangoes'];
[a,b,c] = fruits;
console.log(a,b,c)


// Object Destructuring

laptop = {
    model: 'ThinkPad',
    price: 10000,
    processor: 'ryzen',
    run: function(){
        console.log('You just runned run function')
    }
}

const {model,price, processor,run} = laptop;
console.log(model, price, processor, run)
run()