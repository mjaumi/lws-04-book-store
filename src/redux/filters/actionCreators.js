// declaration of all actions for filters slice here

import { STATUS_CHANGED } from './actionTypes';

export const statusChanged = (status) => {
    return {
        type: STATUS_CHANGED,
        payload: status,
    };
}