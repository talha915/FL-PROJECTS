// Constants
import { user_logout, upcoming_session, past_sessions, agora_key } from '../constants/constants';

const initialState = {

}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case user_logout:
            return {
                ...state,
                logout: actions.payload
            }
        case upcoming_session:
            return {
                ...state,
                upcomingSession: actions.payload
            }
        case past_sessions:
            return {
                ...state,
                pastSession: actions.payload
            }    
        case agora_key:
            return {
                ...state,
                agoraObj: actions.payload
            }            
        default:
            return state;    
    }
}