console.log("This is tutorial 37");

// pretend that this response is coming from the server
const students = [
  {
    name: "Ayush",
    subject: "javascript",
  },
  {
    name: "Sahil",
    subject: "Machine Learning",
  },
];

function enrollStudent(student) {

    return new Promise(function(resolve, reject){
         setTimeout(function () {
           students.push(student);
           const error  = false;
           if(!error){
               resolve();
           }
           else{
               reject();
           }
         }, 100);
    })
 
}

function getStudents() {
  setTimeout(function () {
    let std = document.getElementById("students");
    let str = "";
    students.forEach(function (element) {
      str += `<li>${element.name}</li>`;
    });
    std.innerHTML = str;
  }, 1000);
}
let newStudent = {
  name: "Raj",
  subject: "Python",
};

enrollStudent(newStudent).then(getStudents).catch(function(){
    console.log('some error occured')
})



// *****
// function inside then is run as resoleve()
// function inside catch is ran as reject()