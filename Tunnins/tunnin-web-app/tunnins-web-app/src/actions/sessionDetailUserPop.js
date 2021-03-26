import localData from '../Data/Data.json';

// Constants
import { cancel_session, cancelled_session, close_modal } from '../constants/constants';

export const sessionPopup=(type)=> {
    if(type == cancel_session) {
        return {
            type: cancel_session,
            payload: localData.sessionNotificationPop.cancelSession
        }
    }
    else if(type == cancelled_session) {
        return {
            type: cancelled_session,
            payload: localData.sessionNotificationPop.cancelled
        }
    }
    else {
        return {
            type: close_modal
        }
    }
}

