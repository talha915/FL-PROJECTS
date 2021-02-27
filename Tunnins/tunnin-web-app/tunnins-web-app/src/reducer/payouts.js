// Constants
import { getPayouts } from '../constants/constants';

const initialState = {
    payout: {}
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case getPayouts:
            return {
                ...state.payout,
                data: actions.payload
            }
        default:
            return state;    
    }
}