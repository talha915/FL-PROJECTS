import localData from '../Data/Data.json';

// Constants
import signed_up from '../constants/constants';

export const SignedUp=(data)=> {
    return {
        type: signed_up,
        payload: data
    }
}