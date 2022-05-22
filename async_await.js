console.log('This is tutorial for async and await')

async function harry(){
    console.log('inside harry function');
    const response = await fetch("https://api.github.com/users");
    console.log('before response')
    const users = await response.json();
    console.log('users resolved')
    return users;
}


console.log('Before calling harry');
let a = harry();
console.log('After calling harry');
console.log(a);
a.then(users=> console.log(users))
console.log('Lat line of this js file');