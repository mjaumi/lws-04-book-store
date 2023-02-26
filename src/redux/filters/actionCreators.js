// declaration of all actions for filters slice here

import { SEARCHED_BY_NAME, STATUS_CHANGED } from './actionTypes';

export const statusChanged = (status) => {
    return {
        type: STATUS_CHANGED,
        payload: status,
    };
}

export const searchedByName = (nameText) => {
    return {
        type: SEARCHED_BY_NAME,
        payload: nameText,
    };
}