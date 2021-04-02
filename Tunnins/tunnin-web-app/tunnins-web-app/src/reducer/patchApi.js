// Constants
import { agora_key } from '../constants/constants';

const initialState = {
    
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case agora_key:
            return {
                ...state,
                agoraRes: actions.payload
            }
        default:
            return state;    
    }
}