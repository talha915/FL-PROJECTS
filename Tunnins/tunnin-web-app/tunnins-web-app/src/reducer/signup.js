// Constants
import sign_up from '../constants/constants';

const initialState = {
    signUp: {

    } 
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case sign_up:
            return {
                ...state.signUp,
                data: actions.payload
            }
        default:
            return state;    
    }
}