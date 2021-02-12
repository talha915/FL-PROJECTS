import localData from '../Data/Data.json';

// Constants
import { add_session } from '../constants/constants';

export const addSession=()=> {
    return {
        type: add_session,
        payload: localData.newSession,
    }
}

