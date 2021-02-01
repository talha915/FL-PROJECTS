import localData from '../Data/Data.json';

// Constants
import { add_session_modal, cancel_session_modal, cancelled_session_modal } from '../constants/constants';

export const addSession=(type)=> {
    if(type == add_session_modal) {
        return {
            type: add_session_modal,
            payload: localData.sessionModal.addedSession
        }
    }
    else if(type == cancel_session_modal) {
        return {
            type: cancel_session_modal,
            payload: localData.sessionModal.cancelSession
        }
    }
    else if(type == cancel_session_modal) {
        return {
            type: cancelled_session_modal,
            payload: localData.sessionModal.cancelledSession
        }
    }
}

