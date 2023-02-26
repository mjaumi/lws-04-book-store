import { combineReducers } from 'redux';
import booksReducer from './books/booksReducer';

// combining all the reducers here
const rootReducer = combineReducers({
    books: booksReducer,
});

export default rootReducer;
