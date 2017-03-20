import {takeEvery} from 'redux-saga';
import {getResponseData} from './response_saga';
import * as types from '../constants/actionTypes';

// Watches for SEARCH_MEDIA_REQUEST action type asynchronously
export default function* watchResponseData() {
    console.log(`i'm being called, i'm the watcher by the way`);
    yield* takeEvery(types.RESPONSE, getResponseData);
}
