// Constants
import { signed_up } from '../constants/constants';

const initialState = {
    signedUp: {

    } 
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case signed_up:
            return {
                ...state.signedUp,
                signedUp: actions.payload
            }
        default:
            return state;    
    }
}