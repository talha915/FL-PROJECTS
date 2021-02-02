import localData from '../Data/Data.json';

// Constants
import { cancel_policy } from '../constants/constants';

export const cancelPolicy=()=> {
    return {
        type: cancel_policy,
        payload: localData.cancellationPolicy,
    }
}

