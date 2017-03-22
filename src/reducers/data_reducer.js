import * as types from '../constants/actionTypes';

import initialState from './initialState';

export default function (state = initialState, action) {
    switch (action.type) {
        case types.ADD_HEADER:
            return {
                ...state,
                headers: [
                    ...state.headers,
                    action.payload
                ]
            };
        case types.REFORMAT_HEADER:
            return {
                ...state,
                formattedHeaders: action.payload
            };
        case types.ADD_URL:
            return {
                ...state,
                url: action.payload
            };
        case types.ADD_METHOD:
            return {
                ...state,
                method: action.payload
            };
        case types.ADD_BODY:
            return {
                ...state,
                body: action.payload

            };
        case types.REFORMAT_BODY:
            return {
                ...state,
                formattedBody: [action.payload]
            };
        default:
            return state;
    }
}
