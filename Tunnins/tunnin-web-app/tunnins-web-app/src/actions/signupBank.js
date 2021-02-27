import localData from '../Data/Data.json';

// Constants
import { signup_bank } from '../constants/constants';

export const signUpBank=()=> {
    return {
        type: signup_bank,
        payload: localData.signupBank,
    }
}

