import localData from '../Data/Data.json';

// Constants
import { signup_bank, signed_bank } from '../constants/constants';

export const signUpBank=(typeData, data)=> {
    if(typeData === signup_bank) {
        return {
            type: typeData,
            payload: localData.signupBank,
        }
    }
    else if(typeData === signed_bank) {
        return {
            type: typeData,
            payload: data
        }
    }
}

