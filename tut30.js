console.log('This is tut30')


const proto = {

        slogan: function(){
            return 'This company is the best';
        }
        ,
        changeName: function(newName){
            this.name = newName
        }
}



// This creates harry object
// const harry =  Object.create(proto);
// harry.name = 'Harry'
// harry.role = 'Programmer'

// This also creates harry object
const ayush = Object.create(proto, {
    name: {value: 'Ayush', writable: true},
    role: {value: 'Typist'}

})

ayush.changeName('Kancha')

// console.log(ayush)


// Employee constructor

function Employee(name, salary, experience){
    this.name = name,
    this.salary = salary,
    this.experience = experience
}

// slogan

Employee.prototype.slogan = function(){
    return `This company is the best regards ${this.name}`
}

let Ayush = new Employee('Ayush', 100000, '5years')

console.log(Ayush.slogan())


// Programmer

function Programmer(name, salary, experience, language){
    Employee.call(this, name, salary, experience);
    this.langauge = language;
}

// inherit the prototype

Programmer.prototype = Object.create(Employee.prototype)

// Manually set the constructor
Programmer.prototype.constructor = Programmer

rohan = new Programmer('Rohan', 1000, '1year', ['python'])

console.log(rohan)