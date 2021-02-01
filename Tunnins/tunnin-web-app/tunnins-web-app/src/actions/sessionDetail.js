import localData from '../Data/Data.json';

// Constants
import { session_details } from '../constants/constants';

export const sessionDetails=()=> {
    return {
        type: session_details,
        payload: localData.sessionDetails,
    }
}