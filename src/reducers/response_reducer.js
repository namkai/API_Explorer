import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function(state = initialState.response, action) {
    switch (action.type) {
        case types.RESPONSE_DATA:
            return {
                response: action.payload
            }
        default:
            return state;
    }
}
