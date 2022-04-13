console.log("This is tut28.js");

// object literal : object prototype

let obj = {
    name: 'Ayush',
    address: 'Jupiter',
    channel: 'codewithIndia'
}

function Obj(givenname){
    this.name = givenname
}



Obj.prototype.getName = function (){
    return this.name
}

Obj.prototype.setName = function(newName){
     this.name = newName;
}

let obj2 = new Obj("Rajendra");


(obj2.setName('Ayush'));

// never do object.prototype bas apna banaya hua
// prototype edit kre