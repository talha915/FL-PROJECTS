// Constants
import { user_logout } from '../constants/constants';

const initialState = {

}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case user_logout:
            return {
                ...state,
                logout: actions.payload
            }    
        default:
            return state;    
    }
}