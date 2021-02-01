// Constants
import { session_details } from '../constants/constants';

const initialState = {
    sessionDetails: {}
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case session_details:
            return {
                ...state.sessionDetails,
                data: actions.payload
            }
        default:
            return state;    
    }
}