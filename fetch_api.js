console.log('This is fetch_api');


let myBtn = document.getElementById('myBtn');

let content = document.getElementById('content')
    
// function getData(){
//     console.log('Started getData')
//     let url = 'ayush.txt'
//     fetch(url).then((response)=> {
//          console.log("Inside first then");
//         return response.text();
//     }).then((data)=>{
//         console.log('Inside second then')
//         console.log(data);
//     })
// }


// function getData(){
//     console.log('Started getData')
//     let url = "https://api.github.com/users";
//     fetch(url).then((response)=> {
//          console.log("Inside first then");
//         return response.json();
//     }).then((data)=>{
//         console.log('Inside second then')
//         console.log(data);
//     })
// }


function postData(){
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"harry","salary":"123","age":"23"}';
    params = {
        method : 'post',
        headers : {
            'content-Type': 'application/json'
        },
        body: data

    }
    fetch(url, params).then((response)=>  response.json())
    .then((data)=>console.log(data))
}





// console.log('Before running getData')
// getData();
// console.log('After running getData')

postData();