// Constants
import { user_logout, upcoming_session } from '../constants/constants';

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
        default:
            return state;    
    }
}