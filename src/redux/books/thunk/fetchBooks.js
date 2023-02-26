import { booksLoaded } from '../actionCreators';

// this thunk function is fetching all the books from the server
const fetchBooks = async (dispatch) => {
    const response = await fetch('http://localhost:9000/books');
    const bookList = await response.json();

    dispatch(booksLoaded(bookList));
}

export default fetchBooks;