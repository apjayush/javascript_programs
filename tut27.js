console.log("This is tut27");


// Objects Literal for creating objects
let car =  {
    name: 'Maruti 800',
    topSpeed:  100,
    run: function (){
        console.log("car is running");
    }
}

// we have already seen constructors like these:
// new Date()



//creating constructors for cars

function GeneralCar(givenName, givenSpeed){
    this.name = givenName,
    this.speed = givenSpeed,
    this.run = function(){
        console.log(`${this.name} is running`);
    }
    this.analayse = function(){
        console.log(`This car is slower by ${700 - this.speed}kmph  by mercedes`);
    }
}

car1 = new GeneralCar('Tesla', 450)
car2 = new GeneralCar('Lamborgini', 600)
car3 = new GeneralCar('Mercedes', 700)

console.log(car3.analayse());
console.log(car2);

// new keyword creates new object with the help of constructors
