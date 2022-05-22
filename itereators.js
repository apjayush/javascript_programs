console.log('This is iterators');

const myArray = ['Apples','Grapes', 'Banana']

console.log('My array is', myArray);

function fruitsIterator(values){
    let nextIndex = 0;
    // we will return an object
    return {
        next: function(){
          if(nextIndex< values.length){
            //   we will return  object
            return {
                value: values[nextIndex++],
                done: true
            }
          }
          else{
              return {
                  done: false
              }
          }
        }
    }
}

const fruits = fruitsIterator(myArray)
console.log(fruits.next())
console.log(fruits.next())
console.log(fruits.next())


