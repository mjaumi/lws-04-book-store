// declaration of all actions for books slice here

import { BOOKS_LOADED, BOOK_ADDED, BOOK_DELETED, BOOK_UPDATED } from './actionTypes';

export const booksLoaded = (bookList) => {
    return {
        type: BOOKS_LOADED,
        payload: bookList,
    };
}

export const bookAdded = (book) => {
    return {
        type: BOOK_ADDED,
        payload: book,
    };
}

export const bookDeleted = (bookId) => {
    return {
        type: BOOK_DELETED,
        payload: bookId,
    };
}

export const bookUpdated = (bookId, updatedBook) => {
    return {
        type: BOOK_UPDATED,
        payload: {
            bookId,
            updatedBook,
        },
    };
}