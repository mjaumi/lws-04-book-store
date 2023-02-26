import { BOOKS_LOADED, BOOK_ADDED, BOOK_DELETED, BOOK_UPDATED } from './actionTypes';
import initialState from './initialState';

// this function is returning the next added book's id
const nextBookId = bookList => {
    return bookList.reduce((maxId, book) => Math.max(maxId, book.id), -1);
}

// reducer function for books slice is declared here
const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKS_LOADED:
            return [...action.payload];

        case BOOK_ADDED:
            return [
                ...state,
                {
                    id: nextBookId(state),
                    ...action.payload,
                }
            ];

        case BOOK_DELETED:
            return state.filter(book => book.id !== action.payload);

        case BOOK_UPDATED:
            const { bookId, updatedBook } = action.payload;
            return state.map(book => {
                if (book.id !== bookId) {
                    return book;
                } else {
                    return {
                        id: bookId,
                        ...updatedBook,
                    };
                }
            });

        default:
            return state;
    }
}

export default booksReducer;