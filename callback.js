console.log('This is tutorial 37');

// pretend that this response is coming from the server
const students = [
    {
        name: 'Ayush',
        subject: 'javascript'
    },
    {
        name: "Sahil",
        subject: 'Machine Learning'
    }
]

function enrollStudent(student, callback){
    setTimeout(function() {
        students.push(student);
        callback();
    }, 1000);
}

function getStudents(){
    setTimeout(function() {
         let std= document.getElementById('students')
         let str = ''
         students.forEach(function(element){
            str += `<li>${element.name}</li>`
         })
         std.innerHTML = str;
    }, 500);
}
let newStudent = {
    name: 'Raj',
    subject: 'Python'
}

enrollStudent(newStudent, getStudents);

