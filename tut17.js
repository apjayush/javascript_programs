// console.log("This is tut17");

// document.getElementById('heading').addEventListener('click', 
// function(e){

//     let variable;

//     variable = console.log("clicked on heading");
//     variable = console.log(e);
//     variable = console.log(e.offsetX);
//     variable = console.log(e.target);
//     variable =  console.log(e.target.className);
//     variable = console.log(e.clientX);
//      // location.href= 'http://www.google.com'

//     console.log(variable);
// })

console.log('This is tut17');

document.getElementById('heading').addEventListener('click', (e)=>{
    console.log(e.target.id);
    console.log(e.offsetX);
    console.log(e.clientX)
});