import { BOOKS_LOADED, BOOK_ADDED, BOOK_DELETED, BOOK_UPDATED, CLEAR_BOOK_DETAILS, GET_BOOK_DETAILS } from './actionTypes';
import initialState from './initialState';

// reducer function for books slice is declared here
const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKS_LOADED:
            return {
                ...state,
                bookList: [...action.payload],
            };

        case BOOK_ADDED:
            return {
                ...state,
                bookList: [...state.bookList,
                {
                    ...action.payload,
                }]
            };

        case BOOK_DELETED:
            return {
                ...state,
                bookList: state.bookList.filter(book => book.id !== action.payload),
            };

        case BOOK_UPDATED:
            const { bookId, updatedBook } = action.payload;
            return {
                ...state,
                bookList: state.bookList.map(book => {
                    if (book.id !== bookId) {
                        return book;
                    } else {
                        return {
                            id: bookId,
                            ...updatedBook,
                        };
                    }
                })
            };

        case GET_BOOK_DETAILS:
            return {
                ...state,
                editBook: state.bookList.find(book => book.id === action.payload),
            };

        case CLEAR_BOOK_DETAILS:
            return {
                ...state,
                editBook: {},
            };

        default:
            return state;
    }
}

export default booksReducer;