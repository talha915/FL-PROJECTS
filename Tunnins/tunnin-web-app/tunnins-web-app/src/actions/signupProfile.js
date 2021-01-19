import localData from '../Data/Data.json';

// Constants
import signup_profile from '../constants/constants';

export const signUpProfile=()=> {
    return {
        type: signup_profile,
        payload: localData.profile,
    }
}

