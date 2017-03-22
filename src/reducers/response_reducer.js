import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function (state = initialState.response, action) {
    switch (action.type) {
        case types.RESPONSE_DATA:
            return {
                response: {
                    status: 200,
                    data: action.payload
                }
            };
        case types.BAD_RESPONSE:
            return {
                response: {
                    status: 404,
                    data: action.payload
                }
            };
        default:
            return state;
    }
}
