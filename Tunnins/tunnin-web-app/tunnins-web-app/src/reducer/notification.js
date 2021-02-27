// Constants
import { listed_notification } from '../constants/constants';

const initialState = {
    notifications: {}
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case listed_notification:
            return {
                ...state.notifications,
                data: actions.payload
            }
        default:
            return state;    
    }
}