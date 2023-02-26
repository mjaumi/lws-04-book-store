import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

// creating the redux store here
const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

export default store;