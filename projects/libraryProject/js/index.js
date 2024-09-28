const collection = document.querySelector('.collection');
const bookContainer = document.querySelectorAll('.bookContainer');
const bookRight = document.querySelectorAll('.bookRight');

let p = document.createElement("p");
p.setAttribute("class", "pElem");


function Book(title, author, pages, read,) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const bookOne = new Book('The Time Has Come', 'Nikki Payne', 457, false);
const bookTwo = new Book('Forget A Mentor Find A Sponsor', 'Spensor Ann', 256, false);
const bookThree = new Book('Pride And Protest', 'Tim Bell', 870, false);

const myLibrary = [bookOne, bookTwo, bookThree];

function addBookToLibrary() {

}

function displayBooks(libraryArray) {
    myLibrary.forEach((book) => {

        let bookClass = document.createElement("div");
        bookClass.setAttribute("class", "bookRight");

        let p = document.createElement("p");
        p.textContent = `${book.author}`;
        bookClass.append(p);

        let h5 = document.createElement("h5");
        h5.textContent = `${book.title}`;
        bookClass.append(h5);
    
        let button = document.createElement("button");
        button.textContent =`${book.read}`;
        bookClass.append(button);

        collection.append(bookClass)
        
    });
}

displayBooks(myLibrary);
function addBook(newBook) {
    myLibrary.push(newBook);
    return{
        newBook
    }
}