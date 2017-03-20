import {fork} from 'redux-saga/effects';
import watchResponseData from './watcher';
//Root Saga

export default function * startForman() {
    console.log(`I was hit!, root saga`);
    yield fork(watchResponseData)
}
