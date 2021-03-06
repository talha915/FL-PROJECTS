// Constants
import { setting_sidebar } from '../constants/constants';

const initialState = {
    settingsSidebar: {

    } 
}

export default function(state=initialState, actions) {
    switch(actions.type) {
        case setting_sidebar:
            return {
                ...state.settingsSidebar,
                sidebar: actions.payload
            }
        default:
            return state;    
    }
}