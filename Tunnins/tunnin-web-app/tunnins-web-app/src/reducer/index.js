import { combineReducers } from 'redux';

// Reducers
import localData from './getDataReducer';
import updateModal from './updateModal';
import signup from './signup';
import signedup from './signedup';
import verify from './verify';
import signupProfile from './signUpProfle';
import signupCategories from './signupCategories';
import profileForm from './profileForm';
import profileFace from './profileFace';
import signupBank from './signupBank';
import connectBank from './connectBank';
import notification from './notification';
import addSession from './addSession';
import addedSession from './addedSession';
import sessionModal from './sessionModal';
import sessionDetails from './sessionDetails';
import cancelPolicy from './cancelPolicy';
import ratingReview from './ratingReview';
import header from './header'; 
import earnings from './earnings';
import earningDetails from './earningDetails';
import payouts from './payouts';
import userProfile from './userProfile';
import SettingsSidebar from './settingsSidebar';
import settings from './settings';

const rootReducer = combineReducers({
    localData,
    updateModal,
    header,
    signup,
    signedup,
    verify,
    signupProfile,
    signupCategories,
    profileForm,
    profileFace,
    signupBank,
    connectBank,
    notification,
    addSession,
    addedSession,
    sessionModal,
    sessionDetails,
    cancelPolicy,
    ratingReview,
    earnings,
    earningDetails,
    payouts,
    userProfile,
    SettingsSidebar,
    settings
})

export default rootReducer;