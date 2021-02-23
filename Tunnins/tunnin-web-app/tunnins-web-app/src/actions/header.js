import localData from '../Data/Data.json';

// Constants
import { getHeader } from '../constants/constants';

export const fetchHeader=()=> {
    return {
        type: getHeader,
        payload: localData.header
    }
}