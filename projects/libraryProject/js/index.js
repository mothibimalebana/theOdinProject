const myLibrary = ['The Subtle Art Of Not Giving A Fuck', 'The Alchemist', 'Atomic Habits'];

function Book(title, author, pages, read) {

}

function addBookToLibrary() {

}

function displayBooks() {
    myLibrary.forEach((book) => {
        console.log(book);
    });
}

function addBook(newBook) {
    myLibrary.push(newBook);
    return{
        newBook
    }
}