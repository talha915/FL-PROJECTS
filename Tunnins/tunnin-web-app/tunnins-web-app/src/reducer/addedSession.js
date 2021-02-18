// Constants
import { added_session } from '../constants/constants';

const initialState = {
    addedNewSession: {

    } 
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case added_session:
            return {
                ...state.addedNewSession,
                data: actions.payload
            } 
        default:
            return state;    
    }
}