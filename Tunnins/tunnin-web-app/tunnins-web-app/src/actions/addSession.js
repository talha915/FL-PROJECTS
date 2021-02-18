import localData from '../Data/Data.json';

// Constants
import { add_session, added_session } from '../constants/constants';

export const addSession=(session_type, data)=> {
    if(session_type == added_session) {
        return {
            type: added_session,
            payload: data
        }
    }
    else {
        return {
            type: add_session,
            payload: localData.newSession,
        }
    }
}

