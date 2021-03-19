// Constants
import { connect_bank, account_number } from '../constants/constants';

const initialState = {
    connectBank: {

    },
    accountNumber: {

    } 
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case connect_bank:
            return {
                ...state.connectBank,
                data: actions.payload
            }
        case account_number: {
            return {
                ...state,
                accountNumber: actions.payload
            }
        }    
        default:
            return state;    
    }
}