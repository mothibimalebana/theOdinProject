
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
        console.log(book.title);
    });
}

function addBook(newBook) {
    myLibrary.push(newBook);
    return{
        newBook
    }
}