import {fork} from 'redux-saga/effects';
import watchResponseData from './watcher';
//Root Saga

export default function * rootSaga() {
    yield fork(watchResponseData)
}
