// Constants
import { connect_bank } from '../constants/constants';

const initialState = {
    connectBank: {

    } 
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case connect_bank:
            return {
                ...state.connectBank,
                data: actions.payload
            }
        default:
            return state;    
    }
}