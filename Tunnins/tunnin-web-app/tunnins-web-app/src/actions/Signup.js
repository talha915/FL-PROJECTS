import localData from '../Data/Data.json';

// Constants
import { sign_up, toggle_pass } from '../constants/constants';

export const Signup=(type, data)=> {
    if(type === sign_up) {
        return {
            type: sign_up,
            payload: localData.createAccount
        }
    }
    else {
        console.log("Will Toggle");
    }
}