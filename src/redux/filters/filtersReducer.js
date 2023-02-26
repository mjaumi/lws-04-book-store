import { SEARCHED_BY_NAME, STATUS_CHANGED } from './actionTypes';
import initialState from './initialState';

// reducer function for filters slice is declared here
const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUS_CHANGED:
            return {
                ...state,
                status: action.payload,
            };

        case SEARCHED_BY_NAME:
            return {
                ...state,
                filterText: action.payload,
            };

        default:
            return state;
    }
}

export default filterReducer;