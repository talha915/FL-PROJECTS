import localData from '../Data/Data.json';

// Constants
import { getEarningDetail } from '../constants/constants';

export const fetchEarningDetail=()=> {
    return {
        type: getEarningDetail,
        payload: localData.earningDetails
    }
}