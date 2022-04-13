console.log("this is tut16.js");

let element = document.createElement("li");

let text = document.createTextNode("hey alpha bheta and gamma");
element.appendChild(text)

element.className = "newchild";
element.id = "newid"
element.setAttribute('title', 'flipkart')


// element.innerText= "hey there ayush is here"
// element.innerHTML= '<b>hey there ayush is here</b>'

let ul = document.querySelector('.this')
ul.appendChild(element)

console.log(ul);

console.log(element);

let query = document.createElement('h3')

let new_text = document.createTextNode("I am changing it")

query.appendChild(new_text)

element.replaceWith(query)



let myul = document.getElementById("myul")
myul.replaceChild(element, document.getElementById("sachin"));

myul.removeChild(document.getElementById('dravid'))


let heading = document.createElement('h2')

new_text = document.createTextNode('Go to Code With Harry')

heading.appendChild(new_text)

document.body.appendChild(heading)

let anchor = document.createElement('a')

anchor.setAttribute("href", "https://codewithharry.com/");

anchor_text = document.createTextNode('Click here')

anchor.appendChild(anchor_text)

document.body.appendChild(anchor)



