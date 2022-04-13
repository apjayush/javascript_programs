console.log("This is tut21.js");

let text = document.getElementById('text')

text.addEventListener('blur', function(){
    let new_text = localStorage.getItem('new_text')
    if(new_text == null){
        textObj = [];
    }
    else{
        textObj = JSON.parse(new_text)
    }
    textObj.push(text.value)
    localStorage.setItem('new_text', JSON.stringify(textObj));
    
})

let obj = JSON.parse(localStorage.getItem('new_text'));

obj.forEach(function(element){
    text.innerHTML = element
})






