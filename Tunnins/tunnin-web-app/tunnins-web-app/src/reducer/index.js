import { combineReducer } from 'redux';

// Reducers
import localData from './getDataReducer';

const rootReducer = combineReducer({
    localData
})

export default rootReducer;