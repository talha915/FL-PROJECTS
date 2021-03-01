// Constants
import { user_profile, user_edit_profile } from '../constants/constants';

const initialState = {
    userProfile: {}
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case user_profile:
            return {
                ...state.userProfile,
                data: actions.payload
            }
        case user_edit_profile:
            return {
                ...state.userProfile,
                data: actions.payload
            }    
        default:
            return state;    
    }
}