import { combineReducers } from 'redux';

// Reducers
import localData from './getDataReducer';
import updateModal from './updateModal';

const rootReducer = combineReducers({
    localData,
    updateModal
})

export default rootReducer;