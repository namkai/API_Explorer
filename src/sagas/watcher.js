import { takeEvery } from 'redux-saga';
import { getResponseData } from './response_saga';
import * as types from '../constants/actionTypes';


export default function* watchResponseData() {
    yield* takeEvery(types.RESPONSE, getResponseData);
}
