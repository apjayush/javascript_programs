const fs = require("fs");

let text = fs.readFileSync('del.txt', "utf-8");

text = text.replace('node', 'Rohan');


console.log(text)

console.log('creating a new file')
fs.writeFileSync('rohan.txt', text);