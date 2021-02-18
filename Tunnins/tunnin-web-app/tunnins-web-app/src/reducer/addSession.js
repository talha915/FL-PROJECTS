// Constants
import { add_session, added_session } from '../constants/constants';

const initialState = {
    addNewSession: {

    },
    addedNewSession: {

    } 
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case add_session:
            return {
                ...state.addNewSession,
                data: actions.payload
            } 
        default:
            return state;    
    }
}