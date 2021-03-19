// Constants
import { signup_profile, signedup_profile } from '../constants/constants';

const initialState = {
    signUpProfile: {

    },
    signedUpProfile: {

    }
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case signup_profile:
            return {
                ...state.signUpProfile,
                data: actions.payload
            }
        case signedup_profile: 
            return {
                ...state,
                signedUpProfile: actions.payload
            }    
        default:
            return state;    
    }
}