// Constants
import { verify_type } from '../constants/constants';

const initialState = {
    verifyData: {

    } 
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case verify_type:
            return {
                ...state.verify,
                data: actions.payload
            }
        default:
            return state;    
    }
}