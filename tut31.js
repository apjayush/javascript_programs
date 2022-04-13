console.log('This is tut31')

class Employee{

    constructor(givenName, givenExperience, givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan(){
        return `I am ${this.name} and this company is the best.`
    }

    joiningYear(){
        return `Your joining year is ${2020 - (this.experience)}`
    }


    // since, it does not any properties like name, experience so it can be used without creating an object.
    static add(a,b){
        return a + b;
    }
}


class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, language){
        super(givenName, givenExperience, givenDivision);  
        // super calls the Employee class constructor
        this.language = language;
    }

    progDetails(){
        return `My name is ${this.name} and I have experience of about ${this.experience} years in ${this.language}`
    }
}

sharma =  new Programmer('Sharma', 34, 'division', 'javascript')

// harry = new Employee('Harry',  5, 'division')
// console.log(harry.slogan())
// console.log(harry.joiningYear())


console.log(sharma.progDetails())
console.log(sharma.name)
console.log(Employee.add(3,4))