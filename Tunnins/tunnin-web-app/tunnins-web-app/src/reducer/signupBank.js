// Constants
import { signup_bank } from '../constants/constants';

const initialState = {
    signUpBank: {

    } 
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case signup_bank:
            return {
                ...state.signUpBank,
                data: actions.payload
            }
        default:
            return state;    
    }
}