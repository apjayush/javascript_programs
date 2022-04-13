console.log("this is tut 18");

//  let btn = document.getElementById("btn")

//  btn.addEventListener('click', func1);
//  btn.addEventListener('dblclick', func2)   
//  btn.addEventListener('mouseenter', func3)
//  btn.addEventListener('mouseout', func4)


//  function func1(e){
//      console.log('clicked');
//      e.preventDefault();
     
//  }

//  function func2(e){
//      console.log('double clicked');
//  }

 
//  function func4(e){
//      console.log('mouse out');
//  }

// document.querySelector('.container').addEventListener('mousemove', func3)


// function func3(e) {
//   console.log("mouse is moving");
//   console.log(e.offsetX, e.offsetY);
//   document.body.style.background = `rgb(${e.offsetX} , ${e.offsetY}, ${e.offsetY})`
// }

// let btn = document.getElementById('btn')
// btn.addEventListener('click', func1)

// function func1(e){
//   console.log('clicked')
//   e.preventDefault();
// }

// btn.addEventListener('mouseenter', ()=>{
//   console.log('mouse entered')
// })

document.querySelector('.container').addEventListener('mousemove', func1)

function func1(e){
  document.body.style.backgroundColor = `rgb(${e.offsetX} , ${e.offsetY}, ${e.offsetX + e.offsetY})`;
}