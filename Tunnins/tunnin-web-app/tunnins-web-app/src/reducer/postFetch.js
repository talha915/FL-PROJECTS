// Constants
import { user_logged_in } from '../constants/constants';

const initialState = {
    
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case user_logged_in:
            return {
                ...state,
                userLogged: actions.payload
            }
        default:
            return state;    
    }
}