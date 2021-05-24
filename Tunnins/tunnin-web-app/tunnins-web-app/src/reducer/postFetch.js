// Constants
import { get_auth, create_user, create_session, cancel_session_api } from '../constants/constants';

const initialState = {
    
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case get_auth:
            return {
                ...state,
                userLogged: actions.payload,
                userLoginStatus: actions.status
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
                createdSession: actions.payload,
                createdSessionStatus: actions.status
            }  
        case cancel_session_api:
            return {
                ...state,
                cancelledSession: actions.payload,
                cancelledStatus: actions.status
            }      
        default:
            return state;    
    }
}