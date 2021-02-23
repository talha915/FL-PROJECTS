// Constants
import { getHeader } from '../constants/constants';

const initialState = {
    getHeader: {}
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case getHeader:
            return {
                ...state.getHeader,
                data: actions.payload
            }
        default:
            return state;    
    }
}