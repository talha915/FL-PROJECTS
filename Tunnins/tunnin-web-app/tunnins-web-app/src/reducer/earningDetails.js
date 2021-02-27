// Constants
import { getEarningDetail } from '../constants/constants';

const initialState = {
    earningDetails: {}
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case getEarningDetail:
            return {
                ...state.earningDetails,
                data: actions.payload
            }
        default:
            return state;    
    }
}