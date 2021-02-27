import localData from '../Data/Data.json';

// Constants
import { user_profile } from '../constants/constants';

export const userProfile=()=> {
    return {
        type: user_profile,
        payload: localData.userprofile,
    }
}

