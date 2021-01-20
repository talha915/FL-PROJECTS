import { combineReducers } from 'redux';

// Reducers
import localData from './getDataReducer';
import updateModal from './updateModal';
import signup from './signup';
import signedup from './signedup';
import verify from './verify';
import signupProfile from './signUpProfle';
import profileForm from './profileForm';

const rootReducer = combineReducers({
    localData,
    updateModal,
    signup,
    signedup,
    verify,
    signupProfile,
    profileForm
})

export default rootReducer;