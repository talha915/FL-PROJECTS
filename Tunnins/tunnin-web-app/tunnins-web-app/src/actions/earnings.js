import localData from '../Data/Data.json';

// Constants
import { getEarnings } from '../constants/constants';

export const fetchEarning=()=> {
    return {
        type: getEarnings,
        payload: localData.myearnings
    }
}