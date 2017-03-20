import {put, call} from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import axios from 'axios';

export function* getResponseData({payload}) {
    console.log(`I'm the saga that's hit!`, payload);
    let {method, url, formattedHeaders} = payload;
    switch (method) {
        case types.POST:
            try {
                const response = yield call(axios.post, url, formattedHeaders)
                yield put({type: types.RESPONSE_DATA, payload: response})

            } catch (e) {
                yield put({type: types.BAD_RESPONSE, payload: e})
            }
            break;
        case types.PUT:
            try {
                const response = yield call(axios.put, url, formattedHeaders)
                yield put({type: types.RESPONSE_DATA, payload: response})

            } catch (e) {
                yield put({type: types.BAD_RESPONSE, payload: e})
            }
            break;
        case types.GET:
            try {
                const response = yield call(axios.get, url, formattedHeaders)
                yield put({type: types.RESPONSE_DATA, payload: response})

            } catch (e) {
                yield put({type: types.BAD_RESPONSE, payload: e})
            }
            break;
        case types.DELETE:
            try {
                const response = yield call(axios.delete, url, formattedHeaders)
                yield put({type: types.RESPONSE_DATA, payload: response})

            } catch (e) {
                yield put({type: types.BAD_RESPONSE, payload: e})
            }
            break;
        default:
    }
}
