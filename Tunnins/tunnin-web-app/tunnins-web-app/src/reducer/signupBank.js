// Constants
import { signup_bank, signed_bank } from '../constants/constants';

const initialState = {
    signUpBank: {

    },
    country: {

    } 
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case signup_bank:
            return {
                ...state.signUpBank,
                data: actions.payload
            }
        case signed_bank:
            return {
                ...state,
                country: actions.payload
            }    
        default:
            return state;    
    }
}