import { combineReducers } from 'redux';

// Reducers
import localData from './getDataReducer';
import updateModal from './updateModal';
import signup from './signup';
import signedup from './signedup';
import verify from './verify';
import signupProfile from './signUpProfle';
import profileForm from './profileForm';
import profileFace from './profileFace';
import signupBank from './signupBank';
import connectBank from './connectBank';
import notification from './notification';
import addSession from './addSession';
import sessionModal from './sessionModal';
import sessionDetails from './sessionDetails';
import cancelPolicy from './cancelPolicy';

const rootReducer = combineReducers({
    localData,
    updateModal,
    signup,
    signedup,
    verify,
    signupProfile,
    profileForm,
    profileFace,
    signupBank,
    connectBank,
    notification,
    addSession,
    sessionModal,
    sessionDetails,
    cancelPolicy
})

export default rootReducer;