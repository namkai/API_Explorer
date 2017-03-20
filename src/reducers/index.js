import { combineReducers } from 'redux';

import DataReducer from './data_reducer';
import ResponseReducer from './response_reducer';

const rootReducer = combineReducers({
    data: DataReducer,
    response: ResponseReducer
});

export default rootReducer;
