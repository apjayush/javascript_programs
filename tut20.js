// console.log("This is tut20");

// let array = ['aloo', 'pyaz', 'dhania']

// localStorage.setItem('Sabzi', JSON.stringify(array))
// localStorage.setItem('Name', 'Ayush')
// localStorage.setItem('Name2', 'Raj')


// clears the entire localstorage
// localStorage.clear();

// clear particular key-value oair
// localStorage.removeItem('Name')


// let elem = JSON.parse(localStorage.getItem('Sabzi'))

// console.log(elem);

// sessionStorage.setItem("Sabzi", JSON.stringify(array));
// sessionStorage.setItem("Name", "Ayush");
// sessionStorage.setItem("Name2", "Raj");

// console.log("This is tut20");

// let array = ['cred', 'zerodha', 'upstox']

// localStorage.setItem('name', JSON.stringify(array))

// console.log( JSON.parse(localStorage.getItem('name')));


let imp = ['adrak', 'pyaaz', 'bhindi']


 localStorage.setItem('Name', 'Harry')
 localStorage.setItem('Name2', 'Ayush')
 localStorage.setItem('Veggies', JSON.stringify(imp))

 localStorage.removeItem('Name2')

 console.log(localStorage.getItem('Name'))
 let data =  JSON.parse(localStorage.getItem('Veggies'))
 console.log(data)

 Array.from(data).forEach(function (element){
     console.log(element)
 })