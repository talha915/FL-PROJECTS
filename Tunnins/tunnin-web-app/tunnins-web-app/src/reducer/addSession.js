// Constants
import { add_session } from '../constants/constants';

const initialState = {
    addNewSession: {

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