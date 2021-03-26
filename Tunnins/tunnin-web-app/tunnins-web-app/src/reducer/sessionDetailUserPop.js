// Constants
import { cancel_session, cancelled_session, close_modal } from '../constants/constants';

const initialState = {
    modalState: {
        popUp: false
    }
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case cancel_session:
            return {
                ...state,
                popUp: true,
                modalState: actions.payload
            }
        case cancelled_session:
            return {
                ...state,
                popUp: true,
                modalState: actions.payload
            }
        case close_modal:
            return {
                ...state,
                popUp: false
            }         
        default:
            return state;    
    }
}