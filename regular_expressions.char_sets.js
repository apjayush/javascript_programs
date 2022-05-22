console.log('This is regular expressions character sets');



// character sets - we use []


let regex = /H[aty]rry/;  //---> can be a.t or y

regex = /H[a-z]rry/;  //---> can be any character from a to z

regex = /H[^aty]rry/  //---> cannot be any of a,t,y

regex = /H[^aty]rr[yu]/  //---> cannot be a,t,y + can be y or u

regex = /H[a-zA-Z]rr[Yyu0-9]/;




// Quantifiers  - we use {}

regex = /har{2}y/  //r can occur two times only

regex = /har{0,2}y/  //r can occur 0 1 or  2 times

let  str = 'HZrr1 bhai';



//Groupings - we use paranthesis for groupings()

regex = /(har){2}[0-9]r{3}/


str = 'hary bhai'
str = 'harhar1rrr'



let result = regex.exec(str)
console.log('The result from exec is', result)

if(regex.test(str)){
    console.log(`The string ${str} mathces the
    expression ${regex.source}`)
}
else{
    console.log(`The string ${str} does not matches
    the expression ${regex.source}`)
}

