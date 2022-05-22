console.log('This is regular_expressions');

let regex = /harry/;

regex = /^ha/  //--> charAt means starts with

regex = /harry$/  //--> $ menas ends with

regex = /h.rry/;  //matches anyone character

regex = /h*rry/;  //matches any 0 or more  character

regex = /ha?rry?/ //? after character means character is optional

regex = /h\*rry/

let str = 'h*rry';

let result = regex.exec(str);
console.log('The result from regex is', result)


if(regex.test(str)){
    console.log(`The string matches the expression ${regex.source}`)
}
else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`)
}