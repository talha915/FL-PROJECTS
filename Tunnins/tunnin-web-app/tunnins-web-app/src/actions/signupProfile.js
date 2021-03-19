import localData from '../Data/Data.json';

// Constants
import { signup_profile, signedup_profile } from '../constants/constants';


export const signUpProfile=(typeData, data)=> {
    if(typeData === signup_profile) {
        return {
            type: signup_profile,
            payload: localData.profile,
        }
    }
    else if(typeData === signedup_profile) {
        return {
            type: signedup_profile,
            payload: data
        }
    }
}

