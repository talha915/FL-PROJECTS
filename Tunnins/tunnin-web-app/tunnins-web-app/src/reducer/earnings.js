// Constants
import { getEarnings } from '../constants/constants';

const initialState = {
    earnings: {}
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case getEarnings:
            return {
                ...state.earnings,
                data: actions.payload
            }
        default:
            return state;    
    }
}