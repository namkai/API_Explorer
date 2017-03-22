import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import * as types from '../constants/actionTypes';

export function* getResponseData({ payload }) {
    const { method, url, formattedHeaders, formattedBody } = payload;

    const config = {
        method,
        url,
        data: formattedBody,
        headers: formattedHeaders
    };

    try {
        const response = yield call(axios, config);
        yield put({ type: types.RESPONSE_DATA, payload: response });
    } catch (e) {
        yield put({ type: types.BAD_RESPONSE, payload: e });
    }
}
