// Constants
import { add_session_modal, cancel_session_modal, cancelled_session_modal, close_modal } from '../constants/constants';

const initialState = {
    modalState: {
        popUp: false
    }
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case add_session_modal:
            return {
                ...state,
                popUp: true,
                modalState: actions.payload
            }
        case cancel_session_modal:
            return {
                ...state,
                popUp: true,
                modalState: actions.payload
            }
        case cancelled_session_modal:
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