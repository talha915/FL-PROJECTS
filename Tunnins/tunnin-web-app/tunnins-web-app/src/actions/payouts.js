import localData from '../Data/Data.json';

// Constants
import { getPayouts } from '../constants/constants';

export const fetchPayout=()=> {
    return {
        type: getPayouts,
        payload: localData.payouts
    }
}