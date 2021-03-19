import localData from '../Data/Data.json';

// Constants
import { connect_bank, account_number } from '../constants/constants';

export const connectBank=(dataType, data)=> {
    if(dataType === connect_bank) {
        return {
            type: connect_bank,
            payload: localData.connectBank,
        }
    }
    else if(dataType === account_number) {
        return {
            type: account_number,
            payload: data
        }
    }
}

