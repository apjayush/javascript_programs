console.log('This is ajax tutorial')

let fetchBtn = document.getElementById('fetchBtn')
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler(){
    console.log('You have clicked fetchBtn');
    // Instantiate an xhr object

    const xhr = new XMLHttpRequest();

    // open the object
    // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);



    // for post request use this
    xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
    xhr.getResponseHeader('Content-type', 'application/json')

    // onprogress is optional
    xhr.onprogress = function(){
        console.log('onprogress')
    }


    // xhr.onreadystatechange = function(){
    //     console.log('ready state is',xhr.readyState)
    // }


    // what to do when response is ready
    xhr.onload = function(){
        if(this.status ===200){
            console.log(this.responseText);
        }
        else{
            console.log('error in fetching data')
        }
    }

    let params = `{name: "Ayush", salary: "123", age: "23" }`;

    // send the request
    xhr.send(params);

    console.log('we are done')

}


let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popHandler);

function popHandler(){
    console.log('you have clicked the pophandler')

     const xhr = new XMLHttpRequest();

     // open the object
     xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);

     // what to do when response is ready
     xhr.onload = function () {
       if (this.status === 200) {
         let obj = JSON.parse(this.responseText)
         console.log(obj.data);
        let list = document.getElementById('list')
        let str = "";
        for(key in obj.data){
            str += `<li>${obj.data[key].employee_name
            }</li>`
        }
        list.innerHTML = str;


       } else {
         console.log("error in fetching data");
       }
     };

     // send the request
     xhr.send();

     console.log("we are done fetching employees");

}




