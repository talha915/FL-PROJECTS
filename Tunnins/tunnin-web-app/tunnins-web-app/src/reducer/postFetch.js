// Constants
import { get_auth, create_user, create_session } from '../constants/constants';

const initialState = {
    
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case get_auth:
            return {
                ...state,
                userLogged: actions.payload
            }
        case create_user:
            return {
                ...state,
                userCreated: actions.payload,
                userCreatedStatus: actions.status
            }
        case create_session:
            return {
                ...state,
                createdSession: actions.payload
            }    
        default:
            return state;    
    }
}