import { combineReducers } from 'redux';

// Reducers
import localData from './getDataReducer';
import updateModal from './updateModal';
import signup from './signup';

const rootReducer = combineReducers({
    localData,
    updateModal,
    signup
})

export default rootReducer;