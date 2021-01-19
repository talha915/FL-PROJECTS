import localData from '../Data/Data.json';

// Constants
import verify_type from '../constants/constants';

export const VerifyAction=()=> {
    return {
        type: verify_type,
        payload: localData.verify,
    }
}