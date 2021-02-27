// Constants
import { user_profile } from '../constants/constants';

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
        default:
            return state;    
    }
}