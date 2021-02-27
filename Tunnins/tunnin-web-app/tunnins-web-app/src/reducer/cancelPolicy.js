// Constants
import { cancel_policy } from '../constants/constants';

const initialState = {
    cancelPolicy: {

    } 
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case cancel_policy:
            return {
                ...state.cancelPolicy,
                data: actions.payload
            }
        default:
            return state;    
    }
}