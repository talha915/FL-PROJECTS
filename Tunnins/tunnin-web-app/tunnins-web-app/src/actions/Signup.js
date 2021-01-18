import localData from '../Data/Data.json';

// Constants
import sign_up from '../constants/constants';

export const Signup=()=> {
    return {
        type: sign_up,
        payload: localData.createAccount
    }
}