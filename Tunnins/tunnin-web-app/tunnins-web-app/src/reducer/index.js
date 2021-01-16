import { combineReducers } from 'redux';

// Reducers
import localData from './getDataReducer';

const rootReducer = combineReducers({
    localData
})

export default rootReducer;