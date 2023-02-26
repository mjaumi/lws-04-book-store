import { combineReducers } from 'redux';
import booksReducer from './books/booksReducer';
import filterReducer from './filters/filtersReducer';

// combining all the reducers here
const rootReducer = combineReducers({
    books: booksReducer,
    filters: filterReducer,
});

export default rootReducer;
