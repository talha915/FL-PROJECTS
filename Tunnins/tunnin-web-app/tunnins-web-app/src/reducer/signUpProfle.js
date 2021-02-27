// Constants
import { signup_profile } from '../constants/constants';

const initialState = {
    signUpProfile: {

    } 
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case signup_profile:
            return {
                ...state.signUpProfile,
                data: actions.payload
            }
        default:
            return state;    
    }
}