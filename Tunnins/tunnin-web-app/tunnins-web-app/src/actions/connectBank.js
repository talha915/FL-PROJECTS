import localData from '../Data/Data.json';

// Constants
import { connect_bank } from '../constants/constants';

export const connectBank=()=> {
    return {
        type: connect_bank,
        payload: localData.connectBank,
    }
}

