// create a class library


let books = ['Zero to One', 'Man searching For Meaning', 'Flow state']



class Library{
   constructor(bookList, userName, bookName){
       this.bookList = bookList
       this.userName = userName
       this.bookName = bookName
   }

    getBookList(){
        return books;
    }

    issueBook(bName, uName){
        
        let det = [];
        let myBook = {
            name: uName,
            book: bName
        }
        det.push(myBook)
        localStorage.setItem(myBook.book, myBook.name)
    }

    returnBook(bName){
        localStorage.removeItem(bName)
    }

   
    
}

ayush = new Library(books, 'ayush', books[1])

console.log(ayush.getBookList())

// console.log(ayush.issueBook('Flow state', 'Saumya'))


